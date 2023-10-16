<template lang="">
    <div :class="data ? '':'d-none'">
        <div class="container large my-5 darkbgClrDiv">
            <div class="summary-heading">
                <p><span>3 </span>Comparative Vehicles</p>
                <router-link :to="`/comparative-vehicles/${$route.params.scenario}?review=true`" class="editbtnCommonAncor"><button class="btn editBtnCommon">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                            <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z" fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                            <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                        </svg>
                    </button>
                </router-link>
            </div>
            <div class="container-fluid summary-editBox py-4">
                <form action="">

                    <div class="row">
                        <div v-if="data.vehicle_type_1" :class="`col-md-4 ${data.vehicle_type_2 ? '': 'col-md-8'} ${data.vehicle_type_3 ? '': 'col-md-12'}`">
                            <div class="compVehcleCol">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="compVehcleColPara">Vehicle #1</p>
                                        <p class="compVehcleBorder"></p>
                                    </div>
                                    <router-link :to="`/comparative-vehicles/${$route.params.scenario}?tab=1&review=true`" class="editbtnCommonAncor">
                                        <button class="btn editBtnCommon">
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                                                <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"  fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                                            </svg>
                                        </button>
                                    </router-link>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Vehicle Type</label>
                                        <p class="summaryVehiclePara pt-1">{{data.vehicle_type_1.vehicle_type_1}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Vehicle Name</label>
                                        <p class="summaryVehiclePara pt-1">{{data.vehicle_type_1.name}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Rate of Return</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_1.rate_of_return).toFixed(2)}%`}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Fee</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_1.fees).toFixed(2)}%`}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">{{data.vehicle_type_1.vehicle_type_1 === 'Taxable' ? 'Capital Gains?' : 'Pre 59 1/2 Penalty?'}}</label>
                                        <p class="summaryVehiclePara pt-1">{{data.vehicle_type_1.pre_age_59_penality ? 'Yes':'No'}}</p>
                                    </div>
                                    <div v-if="data.vehicle_type_1.capital_gain_tax_checkbox" class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Capital Gains Tax Rate</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_1.capital_gains_tax_rate).toFixed(2)}%`}}</p>
                                    </div>
                                    <div v-if="data.vehicle_type_1.capital_gain_tax_checkbox" class="col-md-6 summaryInputsDiv">
                                        <label for="client name">% Portfolio Applied to Capital Gains</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_1.percentage_of_account_as_capital_gains).toFixed(2)}%`}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="data.vehicle_type_2" :class="`col-md-4 ${data.vehicle_type_2 ? '': 'col-md-8'} ${data.vehicle_type_3 ? '': 'col-md-12'}`">
                            <div class="compVehcleCol">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="compVehcleColPara">Vehicle #2</p>
                                        <p class="compVehcleBorder"></p>
                                    </div>
                                    <router-link :to="`/comparative-vehicles/${$route.params.scenario}?tab=2&review=true`" class="editbtnCommonAncor">
                                       <button class="btn editBtnCommon">
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                                                <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z" fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                                            </svg>
                                        </button>
                                    </router-link>
                                </div>
                                   <div class="row mt-3">
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Vehicle Type</label>
                                        <p class="summaryVehiclePara pt-1">{{data.vehicle_type_2.vehicle_type_2}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Vehicle Name</label>
                                        <p class="summaryVehiclePara pt-1">{{data.vehicle_type_2.name}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Rate of Return</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_2.rate_of_return).toFixed(2)}%`}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Fee</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_2.fees).toFixed(2)}%`}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">{{data.vehicle_type_2.vehicle_type_2 === 'Taxable' ? 'Capital Gains?' : 'Pre 59 1/2 Penalty?'}}</label>
                                        <p class="summaryVehiclePara pt-1">{{data.vehicle_type_2.pre_age_59_penality ? 'Yes':'No'}}</p>
                                    </div>
                                    <div v-if="data.vehicle_type_2.capital_gain_tax_checkbox" class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Capital Gains Tax Rate</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_2.capital_gains_tax_rate).toFixed(2)}%`}}</p>
                                    </div>
                                    <div v-if="data.vehicle_type_2.capital_gain_tax_checkbox" class="col-md-6 summaryInputsDiv">
                                        <label for="client name">% Portfolio Applied to Capital Gains</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_2.percentage_of_account_as_capital_gains).toFixed(2)}%`}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="data.vehicle_type_3" :class="`col-md-4 ${data.vehicle_type_2 ? '': 'col-md-8'} ${data.vehicle_type_3 ? '': 'col-md-12'}`">
                            <div class="compVehcleCol">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="compVehcleColPara">Vehicle #3</p>
                                        <p class="compVehcleBorder"></p>
                                    </div>
                                    <router-link :to="`/comparative-vehicles/${$route.params.scenario}?tab=3&review=true`" class="editbtnCommonAncor"><button
                                            class="btn editBtnCommon">
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                                                <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z" fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                                            </svg>
                                        </button>
                                    </router-link>
                                </div>
                                 <div class="row mt-3">
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Vehicle Type</label>
                                        <p class="summaryVehiclePara pt-1">{{data.vehicle_type_3.vehicle_type_3}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Vehicle Name</label>
                                        <p class="summaryVehiclePara pt-1">{{data.vehicle_type_3.name}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Rate of Return</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_3.rate_of_return).toFixed(2)}%`}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Fee</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_3.fees).toFixed(2)}%`}}</p>
                                    </div>
                                    <div class="col-md-6 summaryInputsDiv">
                                        <label for="client name">{{data.vehicle_type_3.vehicle_type_3 === 'Taxable' ? 'Capital Gains?' : 'Pre 59 1/2 Penalty?'}}</label>
                                        <p class="summaryVehiclePara pt-1">{{data.vehicle_type_3.pre_age_59_penality ? 'Yes':'No'}}</p>
                                    </div>
                                    <div v-if="data.vehicle_type_3.capital_gain_tax_checkbox" class="col-md-6 summaryInputsDiv">
                                        <label for="client name">Capital Gains Tax Rate</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_3.capital_gains_tax_rate).toFixed(2)}%`}}</p>
                                    </div>
                                    <div v-if="data.vehicle_type_3.capital_gain_tax_checkbox" class="col-md-6 summaryInputsDiv">
                                        <label for="client name">% Portfolio Applied to Capital Gains</label>
                                        <p class="summaryVehiclePara pt-1">{{`${Number(data.vehicle_type_3.percentage_of_account_as_capital_gains).toFixed(2)}%`}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { authHeader } from '../../../services/helper';
import { getUrl } from '../../../network/url';
import { get } from '../../../network/requests';
export default {
  props: ["id", "client", "scenarioId"],
  data() {
    return {
      data: false,
    };
  },
  methods: {
    getComparativeData: function() {
      if (this.$props.id) {
        this.$store.dispatch("loader", true);
        get(`${getUrl("comparative")}${this.$props.id}`, authHeader())
          .then(response => {
            this.$store.dispatch("loader", false);
            let detail = response.data.data;
            this.data = detail;
          })
          .catch(error => {
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            }
            this.$store.dispatch("loader", false);
          });
      }
    },
  },
  mounted() {
    if (this.$props.id) {
      this.getComparativeData(this.$props.id);
    }
  },
  watch: {
    "$props.id"(e) {
      this.getComparativeData(e);
    },
  },
};
</script>
<style lang="">
</style>