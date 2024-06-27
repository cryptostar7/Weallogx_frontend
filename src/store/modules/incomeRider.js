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
    data: {
      inputs: localStorage.getItem('income_rider_inputs') ? JSON.parse(localStorage.getItem('income_rider_inputs')) : defaultFields,
      result: localStorage.getItem('income_rider_result') ? JSON.parse(localStorage.getItem('income_rider_result')) : null,
      ir_simulation_result: localStorage.getItem('ir_simulation_result') ? JSON.parse(localStorage.getItem('ir_simulation_result')) : null,
      error: {},
      annual_schedule_result_modal: { title: '', data: [] },
      view_result: 1,
      target_analysis_type: 'amount',
      result_type: 'guaranteed',
    }
  };
};

const getters = {
  illustrateYear(state) {
    let year_count = 0;
    if (state.data.inputs.current_age && state.data.inputs.plan_through_age) {
      year_count = state.data.inputs.plan_through_age - state.data.inputs.current_age + 1;
    }
    return year_count < 0 ? 0 : year_count;
  },
  isValidForm(state) {
    let inputs = state.data.inputs;
    return inputs.comparative_vehicle_account_name &&
      inputs.account_type &&
      inputs.current_age &&
      inputs.plan_through_age &&
      inputs.growth_rate &&
      inputs.total_balance &&
      inputs.income_rider_account_name &&
      inputs.income_start_year &&
      inputs.guaranteed_income_first_year
      ? true
      : false;
  },
  irResult(state) {
    let result = state.data.result;

    if (state.data.result_type == 'guaranteed') {
      return result.income_rider_guaranteed_fixed_return;
    }

    return result.income_rider_non_guaranteed_fixed_return;
  },
  irHistoricalResult(state) {
    let result = state.data.result;

    if (state.data.result_type == 'guaranteed') {
      return result.income_rider_guaranteed_index_allocation;
    }

    return result.income_rider_non_guaranteed_index_allocation;
  }
};

const mutations = {
  setResultData(state, payload) {
    localStorage.setItem('income_rider_result', JSON.stringify(payload))
    state.data.result = payload;
  },
  setSimulationResultData(state, payload) {
    localStorage.setItem('ir_simulation_result', JSON.stringify(payload))
    state.data.ir_simulation_result = payload;
  },
  resetFormInputs(state) {
    state.data.inputs = defaultFields;
  },
  setFormInputs(state, payload) {
    state.data.inputs = payload;
  },
  setViewResult(state, payload) {
    state.data.view_result = payload;
  },
  setTargetAnalysisType(state, payload) {
    state.data.target_analysis_type = payload;
  },
  setResultType(state, payload) {
    state.data.result_type = payload;
  },
  setAnnualScheduleResultModal(state, payload) {
    state.data.annual_schedule_result_modal = payload;
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
  updateSimulationResultData(context, payload){
    context.commit("setSimulationResultData", payload);
  },
  updateResultData(context, payload){
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
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
