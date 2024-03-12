<template lang="">
  <div class="modal fade common-modal" id="cloneSimulationModal" index="-1" aria-labelledby="cloneSimulationModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header pb-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <img src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal">
          </button>
        </div>
        <div class="modal-body pt-0 text-center">
          <div class="d-flex align-items-center justify-content-center w-100">
            <div class="d-flex align-items-center section-heading-bg modalHeadingDiv">
              <button class="modalReportBuilderBr" v-if="clientDetail">{{ $sortName(clientDetail.firstname, clientDetail.lastname, clientDetail.middlename) }}</button>
              <h2 class="modalReportBuilderBrTxt" v-if="clientDetail">{{ $clientName(clientDetail.firstname, clientDetail.lastname, clientDetail.middlename) }} <span>{{simulationDetails}}</span></h2>
            </div>
          </div>
          <div class="modalParaBorderDiv">
            <p class="modalParaReportBuilder">Clone Simulation</p>
            <p class="modalSmallborder"></p>
          </div>
          <div class="px-5 modalformDiv mb-0">
            <form action="">
              <div class="form-group">
                <label for="reportBulder">Name Simulation</label>
                <input type="text" class="form-control custom-control" v-model="name">
              </div>
            </form>
          </div>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn" data-bs-dismiss="modal" @click="cloneSimulation()">Clone this Simulation</button>
            <button type="button" class="btn modal-cancel-btn" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { authHeader, getFirstError } from "../../../../services/helper";
import { getUrl } from "../../../../network/url";
import { post } from "../../../../network/requests";
export default {
  props: ["id", "client"],
  emits: ["cloneSimulation"],
  data() {
    return { name: "" };
  },
  methods: {
    cloneSimulation: function() {
      var id = this.$props.id;
      this.$store.dispatch("loader", true);
      post(
        `${getUrl("simulations")}${id}/clone/`,
        { simulation_name: this.name },
        authHeader()
      )
        .then(response => {
          this.$emit("cloneSimulation", id);
        })
        .catch(error => {
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
  },
  computed: {
    clientDetail() {
      let clients = this.$store.state.data.historical_clients || [];
      return clients.filter(item => item.id === this.$props.client)[0];
    },
    simulationDetails() {
      let sid = this.$props.id;
      if (sid) {
        let detail = this.clientDetail || [];
        let simulation = {};
        if (detail && detail.simulations) {
          simulation = detail.simulations.filter(
            item => Number(item.id) === Number(sid)
          )[0];
        }
        if (simulation && simulation.simulation_details) {
          simulation = simulation.simulation_details;
        }
        return simulation.name || "";
      }
      return "";
    },
  },
  watch: {
    simulationDetails(e) {
      if (e) {
        this.name = `Copy of ${e}`;
      }
    },
  },
};
</script>
<style lang="">
</style>