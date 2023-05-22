<template>
      <section>
        <div class="reviewProgressMainDiv HistoricalPositionStatic">
            <ul class="mt-1 review-progress" id="reviewProgress">
              <li class="done"><router-link :to="`/scenario-details/${$route.params.scenario}`" class="nav-link p-0">Scenario Details</router-link></li>
              <li class="done"><router-link :to="`/illustration-data/${$route.params.scenario}`" class="nav-link p-0">Illustration Data</router-link></li>
              <li class="done"><router-link :to="`/comparative-vehicles/${$route.params.scenario}`" class="nav-link p-0">Comparative Vehicles</router-link></li>
              <li class="done"><router-link :to="`/select-historical-simulations/${$route.params.scenario}`" class="nav-link p-0">Historical Simulations</router-link></li>
            </ul>
            <router-link to="/">
              <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn position">
            </router-link>
          </div>
        <div class="commonBgColor  py-2">

            <div class="summaryMainDiv py-4">
                <div>
                    <h5>NEW SCENARIO</h5>
                    <p>Summary</p>
                    <div class="d-flex justify-content-center">
                        <p class="summarySmallBorder"></p>
                    </div>
                </div>
            </div>
            <!-- Scenario Details start -->
              <scenario-details-review :scenarioId="scenario ? scenario.id : ''" :id="scenario ? scenario.scenerio_details.id : false" :client="client" />
            <!-- Scenario Details end -->

            <!-- Illustration Data start -->
              <illustration-data-review :scenarioId="scenario ? scenario.id : ''" :id="scenario ? scenario.illustration : false" :client="client" />
            <!-- Illustration Data end -->

            <!-- Comparative Vehicles start -->
              <comparative-vehicles-review :scenarioId="scenario ? scenario.id : ''" :id="scenario ? scenario.comperative : false" :client="client" />
            <!-- Comparative Vehicles end -->
            
              <historical-simulations-review :scenarioId="scenario ? scenario.id : ''" :id="scenario ? scenario.historical : false" :client="client" />
            <!-- Historical Vehicles start -->
            
            <div class="container mx-auto ">
              <div class="row">
                <div class="col-sm-12 p-relative">
                  <div class="SaveCloseButton">
                      <router-link to="/" class="btn">Save & Close</router-link>
                  </div>
                  <div class="return-btn-div">
                      <a :href="`/report-builder/${reportId}`" class="nav-link btn return-to-report-btn fs-14 flex-shrink-0">Return to Current Report <img src="@/assets/images/icons/chevron-right.svg" class="img-fluid me-1" style="position: relative; top: 0px;" alt="Chevron" width="6"/></a>
                  </div>
                </div>
              </div>
            </div>
             <div class="BuildSaveCloseButton">
                <router-link :to="`/report-builder?scenario=${$route.params.scenario}&client=${client.id}`" class="btn">Save & Build Report</router-link>
            </div>
            <!-- Historical Vehicles end -->
        </div>
    </section>
</template>
<script>
import ScenarioDetailsReview from "../review/ScenarioDetailsReview.vue";
import IllustrationDataReview from "../review/IllustrationDataReview.vue";
import ComparativeVehiclesReview from "../review/ComparativeVehiclesReview.vue";
import HistoricalSimulationsReview from "../review/HistoricalSimulationsReview.vue";
import { get } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader } from "../../../services/helper";

export default {
  components: {
    ScenarioDetailsReview,
    IllustrationDataReview,
    ComparativeVehiclesReview,
    HistoricalSimulationsReview,
  },
  data() {
    return {
      client: false,
      reportId: "",
    };
  },
  methods: {
    testFunction: function() {
      console.log(this.client);
    },
    getLatestReportId: function() {
      get(
        `${getUrl("latest-report")}${this.$route.params.scenario}/`,
        authHeader()
      )
        .then(response => {
          this.reportId = response.data.latest_report_id;
        })
        .catch(error => {
          this.$store.dispatch("loader", false);
          console.log(error);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            this.$toast.error(getFirstError(error));
          }
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
            console.log(error);
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

    // get scenario data
    this.$store.dispatch("loader", true);
    get(`${getUrl("scenario")}${this.$route.params.scenario}`, authHeader())
      .then(response => {
        var detail = response.data.data;
        this.$store.dispatch("activeScenario", detail);
        console.log(this.$store.state.data.active_scenario);
        if (this.$store.state.data.clients) {
          this.client = this.$store.getters.getClientUsingId(detail.client);
        } else {
          this.getClient(detail.client);
        }
        this.$store.dispatch("loader", false);
      })
      .catch(error => {
        console.log(error);
        if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
          this.$toast.error(error.message);
        }
        this.$store.dispatch("loader", false);
      });
  },
  computed: {
    scenario() {
      return this.$store.state.data.active_scenario;
    },
  },
};
</script>
