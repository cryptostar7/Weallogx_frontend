const defaultFields = {
  total_balance: "",
  account_type: { label: "Taxable", value: "taxable" },
  comparative_vehicle_account_name: "",
  tax_rate: undefined,
  current_age: undefined,
  plan_through_age: undefined,
  growth_rate: undefined,
  fee: undefined,
  index_allocation: { label: "Equities & Bonds 60/40", value: "equities_and_bonds_60_40" },
  income_rider_account_name: "",
  income_start_year: undefined,
  guaranteed_income_increase: undefined,
  non_guaranteed_income: "",
  non_guaranteed_income_increase: undefined,
  guaranteed_income_type: "annual_increase",
  guaranteed_income_first_year: undefined,
  guaranteed_income_last_year: null,
  guaranteed_income_manual: null,
  non_guaranteed_income_type: "annual_increase",
  non_guaranteed_income_first_year: undefined,
  non_guaranteed_income_last_year: null,
  non_guaranteed_income_manual: null
};

const state = () => {
  return {
    inputs: localStorage.getItem('income_rider_inputs') ? JSON.parse(localStorage.getItem('income_rider_inputs')) : defaultFields,
    result: localStorage.getItem('income_rider_result') ? JSON.parse(localStorage.getItem('income_rider_result')) : null,
    ir_simulation_result: localStorage.getItem('ir_simulation_result') ? JSON.parse(localStorage.getItem('ir_simulation_result')) : null,
    error: {},
    annual_schedule_result_modal: { title: '', data: [] },
    view_result: 0,
    target_analysis_type: 'income',
    result_type: 'guaranteed',
    income_type: 'annual',
  };
};

const getters = {
  illustrateYear(state) {
    let year_count = 0;
    if (state.inputs.current_age && state.inputs.plan_through_age) {
      year_count = state.inputs.plan_through_age - state.inputs.current_age + 1;
    }
    return year_count < 0 ? 0 : year_count;
  },
  irResult(state) {
    return state.result_type === 'guaranteed'
      ? state.result.income_rider_guaranteed_fixed_return
      : state.result.income_rider_non_guaranteed_fixed_return;
  },
  irHistoricalResult(state) {
    return state.result_type === 'guaranteed'
      ? state.result.income_rider_guaranteed_index_allocation
      : state.result.income_rider_non_guaranteed_index_allocation;
  },
  irSimulationResult(state) {
    return state.result_type === 'guaranteed'
      ? state.ir_simulation_result.guaranteed
      : state.ir_simulation_result.non_guaranteed;
  },

  cards(state, getters) {

    const cards = {card1: {}, card2: {}, card3: {}}
    const irResult = getters.irResult
    const irHistoricalResult = getters.irHistoricalResult

    if (state.target_analysis_type == "amount") {

			const optimization = irResult.optimization.beginning_balance
			const historicalOptimization = irHistoricalResult.optimization.beginning_balance

			cards.card1["totalDistribution"] = sum(irResult.annual_income_rider_distribution)
			cards.card1["longevity"] = irResult.income_rider_longevity

			cards.card2["totalDistribution"] = optimization.total_distribution
			cards.card2["longevity"] = optimization.longevity

			// On the Amount tab the shortfall/surplus is always none.
			cards.card2["shortfall_surplus"] = 0
			cards.card2["shortfall_surplus_years"] = optimization.shortfall_surplus_years

			cards.card3["totalDistribution"] = historicalOptimization.total_distribution
			cards.card3["longevity"] = historicalOptimization.longevity

			// On the Amount tab the shortfall/surplus is always none.
			cards.card3["shortfall_surplus"] = 0
			cards.card3["shortfall_surplus_years"] = historicalOptimization.shortfall_surplus_years


    } else if(state.target_analysis_type == "longevity") {

			cards.card1["totalDistribution"] = sum(irHistoricalResult.annual_income_rider_distribution)
			cards.card1["longevity"] = irResult.income_rider_longevity

			cards.card2["totalDistribution"] = sum(irResult.optimization.optimal_distribution)
			cards.card2["longevity"] = irResult.year_count
			cards.card2["shortfall_surplus_years"] = irResult.shortfall_surplus_years

			cards.card2["shortfall_surplus"] =
				sum(irResult.annual_income_rider_distribution) -
				sum(irResult.optimization.optimal_distribution)
			
			cards.card3["totalDistribution"] = sum(irHistoricalResult.optimization.optimal_distribution)
			cards.card3["longevity"] = irResult.year_count
			cards.card3["shortfall_surplus_years"] = irHistoricalResult.shortfall_surplus_years

			cards.card3["shortfall_surplus"] =
				sum(irHistoricalResult.annual_income_rider_distribution) -
				sum(irHistoricalResult.optimization.optimal_distribution)

    } else {

			cards.card1["totalDistribution"] = sum(irResult.annual_income_rider_distribution)
			cards.card1["longevity"] = irResult.income_rider_longevity

			cards.card2["totalDistribution"] = sum(irResult.annual_cv_distribution)
			cards.card2["longevity"] = irResult.cv_longevity
			cards.card2["shortfall_surplus_years"] = irResult.shortfall_surplus_years
			cards.card2["shortfall_surplus"] = irResult.shortfall_surplus_value

			cards.card3["totalDistribution"] = sum(irHistoricalResult.annual_cv_distribution)
			cards.card3["longevity"] = irHistoricalResult.cv_longevity
			cards.card3["shortfall_surplus_years"] = irHistoricalResult.shortfall_surplus_years
			cards.card3["shortfall_surplus"] = irHistoricalResult.shortfall_surplus_value
    }

    return cards
  },
};

function sum(array) {
  return array.reduce((a, c) => a + c);
}

const mutations = {
  setResultData(state, payload) {
    localStorage.setItem('income_rider_result', JSON.stringify(payload))
    state.result = payload;
  },
  setSimulationResultData(state, payload) {
    localStorage.setItem('ir_simulation_result', JSON.stringify(payload))
    state.ir_simulation_result = payload;
  },
  resetFormInputs(state) {
    state.inputs = defaultFields;
  },
  setFormInputs(state, payload) {
    state.inputs = payload;
  },
  setViewResult(state, payload) {
    state.view_result = payload;
  },
  setTargetAnalysisType(state, payload) {
    state.target_analysis_type = payload;
  },
  setResultType(state, payload) {
    state.result_type = payload;
  },
  setAnnualScheduleResultModal(state, payload) {
    state.annual_schedule_result_modal = payload;
  },
  setIncomeType(state, payload) {
    state.income_type = payload;
  },
};

const actions = {
  reset(context) {
    localStorage.removeItem('income_rider_inputs');
    context.commit("resetFormInputs");
  },
  updateInputs(context, payload) {
    let inputs = { ...payload }
    localStorage.setItem("income_rider_inputs", JSON.stringify(inputs))
    context.commit("setFormInputs", inputs);
  },
  updateSimulationResultData(context, payload) {
    context.commit("setSimulationResultData", payload);
  },
  updateResultData(context, payload) {
    context.commit("setResultData", payload);
  },
  updateViewResult(context, payload) {
    context.commit("setViewResult", payload);
  },
  updateTargetAnalysisType(context, payload) {
    context.commit("setTargetAnalysisType", payload);
  },
  updateResultType(context, payload) {
    context.commit("setResultType", payload);
  },
  updateAnnualScheduleResultModal(context, payload) {
    context.commit("setAnnualScheduleResultModal", payload);
  },
  updateIncomeType(context, payload) {
    context.commit("setIncomeType", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
