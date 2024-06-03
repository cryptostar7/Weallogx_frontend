import { post } from '@/network/requests';
import { getUrl } from '@/network/url';
import { authHeader } from '@/services/helper';

const state = () => {
  return {};
};

const getters = {};

const mutations = {};

const actions = {
  submit(context, data) {
    console.log(data);
    // build the request payload
    const payload = {
      total_balance: data.comparativeVehicle.totalBalance,
      account_type: data.comparativeVehicle.accountType.value,
      comparative_vehicle_account_name: data.comparativeVehicle.accountName,
      tax_rate: data.comparativeVehicle.taxRate
        ? data.comparativeVehicle.taxRate / 100
        : null,
      current_age: data.comparativeVehicle.currentAge,
      plan_through_age: data.comparativeVehicle.planThroughAge,
      growth_rate: data.comparativeVehicle.growthRate / 100,
      fee: data.comparativeVehicle.fee
        ? data.comparativeVehicle.fee / 100
        : null,
      index_allocation: data.comparativeVehicle.indexAllocation.value,
      income_rider_account_name: data.incomeRider.accountName,
      income_start_year: data.incomeRider.incomeStartYear,
      guaranteed_income: data.incomeRider.guaranteedIncome.amount,
      // XXX fix following lines so they aren't hard-coded
      guaranteed_income_type: "year_bounded",
      guaranteed_income_last_year: 300000,
      guaranteed_income_increase: null,
      guaranteed_income_manual: null,
      non_guaranteed_income: 94860,
      non_guaranteed_income_type: "year_bounded",
      non_guaranteed_income_last_year: 300000,
      non_guaranteed_income_increase: null,
      non_guaranteed_income_manual: null
    };
    console.log(payload);

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

  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
