<template>
    <section>
      <historical-simulation-steps :active_all_tab="true" />
      <div class="commonBgColor  py-2">

          <div class="summaryMainDiv py-4">
              <div>
                  <h5>NEW SIMULATION</h5>
                  <div class="d-flex align-items-center justify-content-center">
                      <p class="mb-0" style="margin-right: 50px;">Summary</p>
                      <a
                        href="javascript:void(0)"
                        @click="showVideoModal = true"
                        class="walkthrough-button"
                      >
                        Walkthrough
                      </a>
                  </div>
                  <div class="d-flex justify-content-center">
                      <p class="summarySmallBorder"></p>
                  </div>
              </div>
          </div>

          <!-- Video Walkthrough Modal -->
          <div
            v-if="showVideoModal"
            class="modal fade show d-block"
            tabindex="-1"
            style="background-color: rgba(0, 0, 0, 0.8); z-index: 9999;"
            @click.self="showVideoModal = false"
          >
            <div class="modal-dialog modal-xl modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Historical Simulation Walkthrough - Summary</h5>
                  <button
                    type="button"
                    class="btn-close"
                    @click="showVideoModal = false"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body p-0">
                  <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                    <iframe
                      src="https://www.loom.com/embed/4b294f73df3343c6aad137ea23d9add1"
                      frameborder="0"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowfullscreen
                      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                    ></iframe>
                  </div>
                </div>
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
    showVideoModal: false,
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

<style scoped>
.walkthrough-button {
    display: inline-grid;
    place-items: center;
    padding: 0 25px;
    height: 45px;
    background: #e67e22;
    color: #fff;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.walkthrough-button:hover {
    background: #d35400;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
}
</style>
