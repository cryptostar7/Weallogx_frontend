<template>
  <div class="modal fade common-modal" ref="updateReportModal"  id="ReportBuilderNameEditModal" tabindex="-1" aria-labelledby="ReportBuilderNameEditModalLabel"  aria-hidden="true"  data-bs-backdrop='static'>
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
            <button type="button" @click="testFunction" class="btn yes-delete-btn d-none">Test Function</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { get, post, patch } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader, mapClientList } from "../../../services/helper";
import SelectDropdown from "../common/SelectDropdown.vue";

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
  mounted() {
    console.log('mounted');
  },
  methods: {
    testFunction: function() {
      console.log(this.$props.updateData);
    },

    updateReport: function(e) {
      e.preventDefault();

      let data = {
        name: this.reportName,
        description: this.description,
      };

      this.$emit('setReportName', data.name);
      this.$emit('setReportDescription', data.description);

      this.$refs.closeModalRef.click();
      console.log(data);
      // return false;

      this.$store.dispatch("loader", true);
      patch(`${getUrl("report")}${this.$props.id}/`, data, authHeader())
        .then(response => {
          console.log(response.data);
          this.$toast.success(response.data.message);
          // this.getClient(true);
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error.message);
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
      get(getUrl("clients"), authHeader())
        .then(response => {
          let list = mapClientList(response.data.data);
          this.$store.dispatch("clients", list);
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error.message);
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
        console.log('updated');

      if(e){
        this.reportName = this.$props.name;
        this.description = this.$props.reportDescription;
        this.$emit('setUpdatedData', false);
        console.log('data updated');
      }
    }
  }

};
</script>