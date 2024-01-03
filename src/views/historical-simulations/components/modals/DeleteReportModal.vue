<template>
  <div>
  <div class="modal fade common-modal" id="deleteReportModal" tabindex="-1" aria-labelledby="deleteReportModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <img src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
        </div>
        <div class="modal-body text-center">
          <h5 class="modal-title fs-24 semi-bold-fw" id="deleteReportModalLabel" >Delete Report?</h5>
          <p class="fs-14">This action cannot be undone. To re-add a report you will have <br> to go back to Report creation.</p>
          <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn"  data-bs-dismiss="modal" @click="deleteReport()">Yes, Delete</button>
            <button type="button" class="btn modal-cancel-btn" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <input type="hidden" id="deleteReportId"/>
  </div>
</template>
<script>
import { remove } from "../../../../network/requests";
import { getUrl } from "../../../../network/url";
import { authHeader, getFirstError } from "../../../../services/helper";

export default {
  emits: ["removeClientReport"],
  methods: {
    deleteReport: function() {
      var id = Number(document.getElementById("deleteReportId").value);
      this.$store.dispatch("loader", true);
      remove(`${getUrl("report")}delete/${id}/`, authHeader())
        .then(response => {
          id = Number(id);
          let list = [...this.$store.state.data.clients];
          list = list.map(i => {
            i.reports = i.reports.filter(r => r.id !== id);
            if (i.scenarios) {
              i.scenarios = i.scenarios.map(s => {
                s.reports = {
                  reports_data: s.reports.reports_data.filter(r => r.id !== id),
                };
                return s;
              });
            }
            return i;
          });
          this.$store.dispatch("clients", list);
          setTimeout(() => {
            this.$emit("removeClientReport", id);
          }, 1000);
          this.$store.dispatch("loader", false);
          this.$toast.success("Report deleted successfully!");
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
};
</script>
