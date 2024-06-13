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
  guaranteed_income: "",
  guaranteed_income_increase: undefined,
  non_guaranteed_income: "",
  non_guaranteed_income_increase: undefined,
  // XXX fix following lines so they aren't hard-coded
  guaranteed_income_type: "annual_increase",
  guaranteed_income_last_year: 300000,
  guaranteed_income_manual: null,
  non_guaranteed_income_type: "annual_increase",
  non_guaranteed_income_last_year: 300000,
  non_guaranteed_income_manual: null
};

const state = () => {
  return {
    data: {
      inputs: localStorage.getItem('income_rider_inputs') ? JSON.parse(localStorage.getItem('income_rider_inputs')) : defaultFields,
      error: {},
      result: localStorage.getItem('income_rider_result') ? JSON.parse(localStorage.getItem('income_rider_result')) : [],
    }
  };
};

const getters = {};

const mutations = {
  setPayloadData(state, payload) {
    localStorage.setItem('income_rider_inputs', JSON.stringify(payload))
    state.data.inputs = payload;
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
    payload.tax_rate = data.tax_rate ? data.tax_rate / 100 : null;
    payload.growth_rate = data.growth_rate / 100;
    payload.fee = data.fee ? data.fee / 100 : null;
    payload.index_allocation = data.index_allocation.value;
    payload.guaranteed_income_increase = data.guaranteed_income_increase ? data.guaranteed_income_increase / 100 : null;
    payload.non_guaranteed_income_increase = data.non_guaranteed_income_increase ? data.non_guaranteed_income_increase / 100 : null;

    console.log(payload);
    context.commit("setPayloadData", data);

    return post(getUrl('incomeRider'), payload, authHeader())
      .then((response) => {
        console.log(response);
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
