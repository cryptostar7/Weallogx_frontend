<template>
    <section>
      <historical-simulation-steps :active_all_tab="true" />
      <div class="commonBgColor  py-2">

          <div class="summaryMainDiv py-4">
              <div>
                  <h5>NEW SIMULATION</h5>
                  <p>Summary</p>
                  <div class="d-flex justify-content-center">
                      <p class="summarySmallBorder"></p>
                  </div>
              </div>
          </div>
          <!-- Simulation Details start -->
            <simulation-details-review :simulationId="simulation ? simulation.id : ''" :id="simulation ? simulation.simulation_details.id : false" :client="client" />
          <!-- Simulation Details end -->

          <!-- Illustration Data start -->
            <illustration-data-review :simulationId="simulation ? simulation.id : ''" :id="simulation ? simulation.historical_illustration : false" :client="client" />
          <!-- Illustration Data end -->
          
            <historical-parameters-review :simulationId="simulation ? simulation.id : ''" :id="simulation ? simulation.standalone_historical : false" :client="client" />
          <!-- Historical Vehicles start -->
          
          <div class="container mx-auto ">
            <div class="row">
              <div class="col-sm-12 p-relative">
                <div class="SaveCloseButton">
                    <router-link :to="`/historical/report-builder?simulation=${$route.params.simulation}&client=${client.id}`" class="btn">Save & Build Report</router-link>
                </div>
                <div class="return-btn-div" v-if="reportId">
                    <a :href="`/historical/report-builder/${reportId}`" class="nav-link btn return-to-report-btn fs-14 flex-shrink-0">Return to Current Report <img src="@/assets/images/icons/chevron-right.svg" class="img-fluid me-1" style="position: relative; top: 0px;" alt="Chevron" width="6"/></a>
                </div>
              </div>
            </div>
          </div>
           <div class="BuildSaveCloseButton">
            <router-link  to="/historical/simulations"  class="btn">Save & Close</router-link>
          </div>
          <!-- Historical Vehicles end -->
      </div>
  </section>
</template>
<script>
import HistoricalSimulationSteps from "../../../components/common/HistoricalSimulationSteps.vue";
import SimulationDetailsReview from "../review/SimulationDetailsReview.vue";
import IllustrationDataReview from "../review/IllustrationDataReview.vue";
import HistoricalParametersReview from "../review/HistoricalParametersReview.vue";
import { get } from "../../../../network/requests";
import { getUrl } from "../../../../network/url";
import { authHeader, getFirstError } from "../../../../services/helper";

export default {
components: {
  HistoricalSimulationSteps,
  SimulationDetailsReview,
  IllustrationDataReview,
  HistoricalParametersReview,
},
data() {
  return {
    client: false,
    reportId: "",
  };
},
methods: {
  getLatestReportId: function() {
    get(
      `${getUrl("historical-latest-report")}${this.$route.params.simulation}/`,
      authHeader()
    ).then(response => {
      this.reportId = response.data.latest_report_id;
    });
  },
  // get client detail from API then save in redux store
  getClient: function(clientId) {
    if (clientId) {
      this.$store.dispatch("loader", true);
      get(`${getUrl("client")}${clientId}/`, authHeader())
        .then(response => {
          this.client = response.data.data;
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          this.$store.dispatch("loader", false);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            this.$toast.error(getFirstError(error));
          }
        });
    }
  },
},
mounted() {
  this.getLatestReportId();

  // get simulation data
  this.$store.dispatch("loader", true);
  get(`${getUrl("simulations")}${this.$route.params.simulation}/`, authHeader())
    .then(response => {
      var detail = response.data.data;
      this.$store.dispatch("activeSimulation", detail);
      if (this.$store.state.data.historical_clients) {
        this.client = this.$store.getters.getHistoricalClientUsingId(detail.client);
      } else {
        this.getClient(detail.client);
      }
      this.$store.dispatch("loader", false);
      var body = document.getElementById("app");
      if(body){
        body.scrollIntoView();
      }
    })
    .catch(error => {
      if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
        this.$toast.error(error.message);
      }
      this.$store.dispatch("loader", false);
    });
},
computed: {
  simulation() {
    return this.$store.state.data.active_simulation;
  },
},
};
</script>
