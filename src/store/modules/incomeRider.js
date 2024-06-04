import { post } from '@/network/requests';
import { getUrl } from '@/network/url';
import { authHeader } from '@/services/helper';

const state = () => {
  return {
    data: {
      inputs: localStorage.getItem('income_rider_inputs') ? JSON.parse(localStorage.getItem('income_rider_inputs')) : {
        total_balance : "",
        account_type : null,
        comparative_vehicle_account_name : "",
        tax_rate : undefined,
        current_age : undefined,
        plan_through_age : undefined,
        growth_rate : undefined,
        fee : undefined,
        index_allocation : null,
        income_rider_account_name : "",
        income_start_year : undefined,
        guaranteed_income : "",
        guaranteed_income_increase : undefined,
        non_guaranteed_income : "",
        non_guaranteed_income_increase : undefined,
        // XXX fix following lines so they aren't hard-coded
        guaranteed_income_type: "year_bounded",
        guaranteed_income_last_year: 300000,
        guaranteed_income_manual: null,
        non_guaranteed_income_type: "year_bounded",
        non_guaranteed_income_last_year: 300000,
        non_guaranteed_income_manual: null
      },
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
  setFormInputs(state, payload) {
    state.data.inputs = payload;
  },
};

const actions = {
  submit(context, data) {
    console.log(data);
    // build the request payload
    const payload = {
      total_balance: data.total_balance,
      account_type: data.account_type.value,
      comparative_vehicle_account_name: data.comparative_vehicle_account_name,
      tax_rate: data.tax_rate ? data.tax_rate / 100 : null,
      current_age: data.current_age,
      plan_through_age: data.plan_through_age,
      growth_rate: data.growth_rate / 100,
      fee: data.fee ? data.fee / 100 : null,
      index_allocation: data.index_allocation.value,
      income_rider_account_name: data.income_rider_account_name,
      income_start_year: data.income_start_year,
      guaranteed_income: data.guaranteed_income,
      guaranteed_income_increase: data.guaranteed_income_increase ? data.guaranteed_income_increase / 100 : null,
      non_guaranteed_income: data.non_guaranteed_income,
      non_guaranteed_income_increase: data.non_guaranteed_income_increase ? data.non_guaranteed_income_increase / 100 : null,
      // XXX fix following lines so they aren't hard-coded
      guaranteed_income_type: "year_bounded",
      guaranteed_income_last_year: 300000,
      guaranteed_income_manual: null,
      non_guaranteed_income_type: "year_bounded",
      non_guaranteed_income_last_year: 300000,
      non_guaranteed_income_manual: null
    };
    console.log(payload);
    console.log(data);
    context.commit("setPayloadData", data);

    return post(getUrl('incomeRider'), payload, authHeader())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // incomeRider: {
    //   accountName: '',
    //   guaranteedIncome: {
    //     amount: '',
    //     annualIncrease: undefined
    //   },
    //   incomeStartYear: undefined,
    //   nonguaranteedIncome: {
    //     amount: '',
    //     annualIncrease: undefined
    //   }
    // }

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
