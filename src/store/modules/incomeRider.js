import { post } from '@/network/requests';
import { getUrl } from '@/network/url';
import { authHeader } from '@/services/helper';

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
      error: {},
      result: localStorage.getItem('income_rider_result') ? JSON.parse(localStorage.getItem('income_rider_result')) : null,
      ir_simulation_result: localStorage.getItem('ir_simulation_result') ? JSON.parse(localStorage.getItem('ir_simulation_result')) : null,
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
};

const mutations = {
  setPayloadData(state, payload) {
    localStorage.setItem('income_rider_inputs', JSON.stringify(payload))
    state.data.inputs = payload;
  },
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
};

const actions = {
  submit(context, data) {
    console.log(data);
    // build the request payload
    var payload = { ...data };
    payload.account_type = data.account_type.value;
    payload.tax_rate = data.tax_rate ? data.tax_rate / 100 : 0;
    payload.growth_rate = data.growth_rate / 100;
    payload.fee = data.fee ? data.fee / 100 : 0;
    payload.index_allocation = data.index_allocation.value;
    payload.guaranteed_income_increase = data.guaranteed_income_increase ? data.guaranteed_income_increase / 100 : null;
    payload.non_guaranteed_income_increase = data.non_guaranteed_income_increase ? Number((data.non_guaranteed_income_increase / 100).toFixed(2)) : null;

    context.commit("setPayloadData", data);

    post(getUrl('incomeRiderSimulation'), payload, authHeader())
      .then((response) => {
        console.log(response);
        context.commit('setSimulationResultData', response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return post(getUrl('incomeRider'), payload, authHeader())
      .then((response) => {
        console.log(response);
        context.commit('setResultData', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  reset(context) {
    localStorage.removeItem('income_rider_inputs');
    context.commit("resetFormInputs");
  },
  updateInputs(context, payload) {
    let inputs = { ...payload }
    localStorage.setItem("income_rider_inputs", JSON.stringify(inputs))
    context.commit("setFormInputs", inputs);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
