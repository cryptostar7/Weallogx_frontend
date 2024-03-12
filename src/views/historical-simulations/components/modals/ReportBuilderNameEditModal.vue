<template>
  <div class="modal fade common-modal" ref="updateReportModal"  id="simulationReportBuilderNameEditModal" tabindex="-1" aria-labelledby="simulationReportBuilderNameEditModalLabel"  aria-hidden="true"  data-bs-backdrop='static'>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="closeModalRef">
            <img  src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal">
          </button>
        </div>
        <form class="modal-body" @submit="updateReport">
          <div class="modalParaBorderDiv text-center">
            <p class="modalParaReportBuilder">Report Builder</p>
            <p class="modalSmallborder"></p>
          </div>
          <div class="px-5">
            <div class="form-group">
              <label for="reportBulder" class="fs-14 bold-fw">Name Report</label>
              <input type="text" class="form-control custom-control" v-model="reportName" @keyup="errors.report_name = ''">
              <small class="text-danger" v-if="errors.report_name">{{errors.report_name[0]}}</small>
            </div>
            <div class="form-group">
              <label for="reportBulder" class="fs-14 bold-fw">Descriptions</label>
              <textarea class="form-control custom-control" v-model="description"></textarea>
            </div>
          </div>
          <div class="text-center gap-13 pt-4 mt-2 pb-2">
            <button class="btn yes-delete-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { get, patch } from "../../../../network/requests";
import { getUrl } from "../../../../network/url";
import { authHeader, mapHistoricalClientList } from "../../../../services/helper";
import SelectDropdown from "../../../components/common/SelectDropdown.vue";

export default {
  components: { SelectDropdown },
  refs: ["closeModalRef"],
  emits: ["setUpdatedData", "setReportName", "setReportDescription"],
  props: ["id", "name", "reportDescription", "updateData"],
  data() {
    return {
      errors: [],
      reportName: "",
      description: "",
    };
  },
  methods: {
    updateReport: function(e) {
      e.preventDefault();

      let data = {
        name: this.reportName,
        description: this.description,
      };

      this.$emit('setReportName', data.name);
      this.$emit('setReportDescription', data.description);

      this.$refs.closeModalRef.click();

      this.$store.dispatch("loader", true);
      patch(`${getUrl("simulation-report")}${this.$props.id}/`, data, authHeader())
        .then(response => {
          this.$toast.success(response.data.message);
          // this.getClient(true);
          this.$store.dispatch("loader", false);
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
    },
    // get clients detail from API
    getClient: function(update = false) {
      if (!update) {
        this.$store.dispatch("loader", true);
      }
      get(getUrl("historical-clients"), authHeader())
        .then(response => {
          let list = mapHistoricalClientList(response.data.data);
          this.$store.dispatch("historicalClients", list);
          this.$store.dispatch("loader", false);
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
    },
  },
  watch: {
    "$props.updateData" (e) {
      if(e){
        this.reportName = this.$props.name;
        this.description = this.$props.reportDescription;
        this.$emit('setUpdatedData', false);
      }
    }
  }

};
</script>