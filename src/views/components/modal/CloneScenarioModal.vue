<template lang="">
  <div
    class="modal fade common-modal"
    id="cloneScenarioModal"
    index="-1"
    aria-labelledby="cloneScenarioModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header pb-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img
              src="@/assets/images/icons/cross-grey.svg"
              class="img-fluid"
              alt="Close Modal"
            />
          </button>
        </div>
        <div class="modal-body pt-0 text-center">
          <div class="d-flex align-items-center justify-content-center w-100">
            <div
              class="d-flex align-items-center section-heading-bg modalHeadingDiv"
            >
              <button class="modalReportBuilderBr" v-if="clientDetail">
                {{
                  $sortName(
                    clientDetail.firstname,
                    clientDetail.lastname,
                    clientDetail.middlename
                  )
                }}
              </button>
              <h2 class="modalReportBuilderBrTxt" v-if="clientDetail">
                {{
                  $clientName(
                    clientDetail.firstname,
                    clientDetail.lastname,
                    clientDetail.middlename
                  )
                }}
                <span>{{ scenarioDetails }}</span>
              </h2>
            </div>
          </div>
          <div class="modalParaBorderDiv">
            <p class="modalParaReportBuilder">Clone Scenario</p>
            <p class="modalSmallborder"></p>
          </div>
          <div class="px-5 modalformDiv mb-0">
            <form action="javascript:void(0)">
              <div class="form-group">
                <label for="reportBulder"
                  >Name Scenario</label
                >
                <input
                  type="text"
                  :class="`form-control custom-control ${uniqueError ? 'border_red' : ''}`"
                  v-model="name"
                />
                <p v-if="uniqueError" class="text-danger">
                  Scenario name already in use.
                </p>
              </div>
            </form>
          </div>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button
              type="button"
              class="btn yes-delete-btn"
              :disabled="uniqueError"
              data-bs-dismiss="modal"
              @click="cloneScenario()"
            >
              Clone this Scenario
            </button>
            <button
              type="button"
              class="btn modal-cancel-btn"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { authHeader, getFirstError } from "../../../services/helper";
import { getUrl } from "../../../network/url";
import { post } from "../../../network/requests";
export default {
  props: ["id", "client"],
  emits: ["cloneScenario"],
  data() {
    return { name: "", scenarioNames: [] };
  },
  methods: {
    cloneScenario: function () {
      var id = this.$props.id;
      this.$store.dispatch("loader", true);
      post(
        `${getUrl("scenario")}${id}/clone/`,
        { name: this.name },
        authHeader()
      )
        .then((response) => {
          this.$emit("cloneScenario", id);
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            this.$toast.error(getFirstError(error));
          }
          this.$store.dispatch("loader", false);
        });
    },
    updateScenarioNames() {
      let data = this.$store.getters.getClientUsingId(this.clientDetail.id);
      let results = [];
      if (data && data.scenarios) {
        data.scenarios.forEach((item) => {
          if (item.scenario_details) {
            results.push(item.scenario_details.name);
          }
        });
      }

      this.scenarioNames = results;
    },
  },
  computed: {
    clientDetail() {
      let clients = this.$store.state.data.clients || [];
      return clients.filter((item) => item.id === this.$props.client)[0];
    },
    scenarioDetails() {
      let sid = this.$props.id;
      if (sid) {
        let detail = this.clientDetail || [];
        let scenario = {};
        if (detail && detail.scenarios) {
          scenario = detail.scenarios.filter(
            (item) => Number(item.id) === Number(sid)
          )[0];
        }
        if (scenario && scenario.scenario_details) {
          scenario = scenario.scenario_details;
        }
        return scenario.name || "";
      }
      return "";
    },
    uniqueError() {
      return this.scenarioNames.includes(this.name.trim());
    },
  },
  watch: {
    scenarioDetails(e) {
      if (e) {
        this.name = `Copy of ${e}`;
        this.updateScenarioNames();
      }
    },
  },
};
</script>
<style>
.border_red {
  border: 1px solid #dc3545 !important;
}
</style>
