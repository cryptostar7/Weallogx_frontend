<template lang="">
    <div>
        <div class="container large my-5 darkbgClrDiv">
            <div class="summary-heading">
                <p><span>1 </span>Simulation Details</p>
                <router-link :to="`/historical/simulation-details/${$props.simulationId}?review=true`" class="editbtnCommonAncor">
                    <button class="btn editBtnCommon">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                            <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z" fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                            <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                        </svg>
                    </button>
                </router-link>
            </div>
            <div :class="`container-fluid summary-editBox py-4 ${data ? '':'d-none'}`">
                <form action="">
                    <div class="row">
                        <div class="col px-0">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-4 summaryInputsDiv">
                                        <label for="client name">Client Name</label>
                                        <p type="text" class="form-control ps-0"> {{$props.client.firstname}} {{$props.client.middlename}} {{$props.client.lastname}}</p>
                                    </div>
                                    <div class="col-md-4 summaryInputsDiv">
                                        <label for="client name">Client Age</label>
                                        <input type="text" class="form-control" :value="$props.client.age ?? ''" readonly>
                                    </div>
                                    <div class="col-md-4 summaryInputsDiv">
                                        <label for="client name">Years to Illustrate</label>
                                        <input type="text" class="form-control" :value="data.years_to_illustrate" readonly>
                                    </div>
                                    <div class="col-md-4 summaryInputsDiv">
                                        <label for="client name">Simulation Name</label>
                                        <input type="text" class="form-control" :value="data.simulation_name" readonly>
                                    </div>
                                    <div class="col-md-4 summaryInputsDiv">
                                        <label for="client name">Tax Rate %</label>
                                        <input type="text" class="form-control" :value="data.tax_rate" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <section>
            <div class="modal fade" id="scenarioScheduleTax" tabindex="-1" aria-labelledby="scenarioScheduleTaxLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content modalDivMain">
                        <div class="modal-header" style="border:none;">
                            <button type="button" class="btn-close btnWhite-darkTheme" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body px-5">
                            <p class="ModalHeasingPara">Schedule Tax Rate</p>
                            <div class="modalTableDiv">
                                <table class="table">
                                    <thead>
                                        <th>Year</th>
                                        <th>Tax Rate %</th>
                                    </thead>
                                    <tbody v-if="data.schedule_tax_rate">
                                        <tr v-for="(item, index) in data.schedule_tax_rate.data" :key="index">
                                            <td data-label="Year">{{item.year}}</td>
                                            <td data-label="Rate">{{Number(item.tax_rate).toFixed(2)}}%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { get } from "../../../../network/requests";
import { getUrl } from "../../../../network/url";
import { authHeader } from "../../../../services/helper";
export default {
  props: ["id", "client", "simulationId"],
  data() {
    return {
      data: false,
    };
  },
  methods: {
    getScenarioData: function() {
      if (this.$props.id) {
        this.$store.dispatch("loader", true);
        get(`${getUrl("simulation-details")}${this.$props.id}`, authHeader())
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
    if(this.$props.id){
      this.getScenarioData(this.$props.id);
    }
  },
  watch: {
    "$props.id"(e) {
      this.getScenarioData(e);
    },
  },
};
</script>
<style lang="">
</style>