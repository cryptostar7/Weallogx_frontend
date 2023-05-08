<template>
  <div class="modal fade common-modal" id="deleteScenarioModal" tabindex="-1" aria-labelledby="deleteScenarioModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <img src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal">
          </button>
        </div>
        <div class="modal-body text-center">
          <h5 class="modal-title fs-24 semi-bold-fw" id="deleteScenarioModalLabel">Delete Scenario?</h5>
          <p class="fs-14">This action cannot be undone. To re-add a scenario you will have <br> to go back to Scenario creation.</p>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn" data-bs-dismiss="modal" @click="deleteScenario()">Yes, Delete</button>
            <button type="button" class="btn modal-cancel-btn" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { remove } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader, getFirstError } from "../../../services/helper";

export default {
  emits: ["removeClientScenario"],
  methods: {
    deleteScenario: function() {
      var id = document.getElementById("deleteScenarioId").value;
      this.$store.dispatch("loader", true);
      remove(`${getUrl("scenario")}${id}/`, authHeader())
        .then(response => {
          let sortedList = this.$store.state.data.clients.map(i => {
            if (i.scenarios) {
              i.scenarios = i.scenarios.filter(s => Number(s.id) !== Number(id));
            }
            return i;
          });

          this.$store.dispatch("clients", sortedList);
          setTimeout(() => {
            this.$emit("removeClientScenario", id);
          }, 1000);
          this.$store.dispatch("loader", false);
          this.$toast.success("Scenario deleted successfully!");
        })
        .catch(error => {
          console.log(error);
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
};
</script>
