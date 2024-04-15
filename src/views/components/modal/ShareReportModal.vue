<template lang="">
  <div class="modal fade common-modal common-modal-responsive" id="reportShareModal" tabindex="-1"
    aria-labelledby="reportShareModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="closeModalRef"><img
              src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
        </div>
        <div class="modal-body">
          <p class="modalSharePara text-center">Share Report</p>
          <div class="d-flex align-items-center justify-content-center w-100">
            <div class="d-flex align-items-center section-heading-bg modalHeadingDiv">
              <button class="modalReportBuilderBr">{{$sortName(report.client.firstname, report.client.lastname, report.client.middlename)}}</button>
              <h2 class="modalReportBuilderBrTxt">{{$clientName(report.client.firstname, report.client.lastname, report.client.middlename)}} <span>{{report.scenario.name}}</span></h2>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1 mt-4">
                <p class="modalShareLinksPara m-0">Email Link</p>
                <p class="modalSmallborder m-0"></p>
                <button class="mt-2 modalAnyOneViewBtn">
                  <img src="@/assets/images/icons/web-icon.svg" alt="web">
                  Anyone with the link can view
                  <img src="@/assets/images/icons/right-arrow-icon.svg" alt="">
                </button>

                <div class="modalShareReportForm mt-2 form-group">
                    <label for="email">Email(s)</label>
                    <div>
                      <input type="text" class="form-control" id="email" v-model="emails" @input="errors.email = false"/>
                      <small class="text-danger" v-if="errors.email">{{errors.email}}</small>
                    </div>
                    <label for="message" class="mt-3">Message</label>
                    <div>
                      <textarea name="" id="message" class="form-control" rows="2" v-model="message" @input="errors.message = false"></textarea>
                      <small class="text-danger" v-if="errors.message">{{errors.message}}</small>
                    </div>
                    <div class="mt-3 d-flex align-items-center">
                      <div class="radioBtnDiv r2" id="button-2">
                        <input type="checkbox" class="checkbox2" checked id="modalShareRadio" v-model="includePdf"/>
                        <div class="knobs2"></div>
                        <div class="layer2"></div>
                      </div>
                      <label for="modalShareRadio" class="includePdfTxtModal">Include PDF</label>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
                        <button type="submit" class="btn yes-delete-btn" @click="handleForm()">Send Presentation</button>
                      </div>
                    </div>
                    <p class="modalShareLinksPara m-0 mt-4">Copy Link</p>
                    <p class="modalSmallborder m-0"></p>
                    <div class="d-flex justify-content-between">
                      <button class="mt-2 modalAnyOneViewBtn">
                        <img src="@/assets/images/icons/web-icon.svg" alt="web">
                        Anyone with the link can view
                        <img src="@/assets/images/icons/right-arrow-icon.svg" alt="">
                      </button>
                      <button class="copyBtnModal" type="button"  @click="copyLink" ref="copyButtonRef">Copy</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post, patch } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader } from "../../../services/helper";

export default {
  data() {
    return {
      emails: "",
      message: "",
      includePdf: true,
      errors: [],
    };
  },
  methods: {
    copyLink() {
      navigator.clipboard.writeText(this.report.report_link);
      this.$refs.copyButtonRef.innerText = "Copied!";
      setTimeout(() => {
        this.$refs.copyButtonRef.innerText = "Copy";
      }, 2000);
    },
    handleForm: function() {
      let valid = true;
      if (!this.emails.trim()) {
        this.errors.email = "This field is required.";
        valid = false;
      }

      // if (!this.message.trim()) {
      //   this.errors.message = "This field is required.";
      //   valid = false;
      // }

      if (!valid) {
        return false;
      }

      let data = {
        // client_email: this.emails.split(","),
        client_email: this.emails,
        message: this.message,
        // id: this.report.report_id,
        is_include_pdf: false,
        // is_include_pdf: this.includePdf,
        link: this.report.report_link,
      };

      this.$store.dispatch("loader", true);

      post(`${getUrl("report")}share-report/${this.report.report_id}/`, data, authHeader())
        .then(response => {
          this.emails = "";
          this.message = "";
          // this.includePdf = true;
          this.saveReport();
          this.$refs.closeModalRef.click();
          this.$store.dispatch("loader", false);
          this.$toast.success("Report shared successfully!");
        })
        .catch(error => {
          this.$refs.closeModalRef.click();
          this.$store.dispatch("loader", false);
          this.$toast.error("Something went wrong.");
        });
    },
    saveReport: function() {
      if(!this.$route.params.report){
        return false;
      }
      let data = {
        saved_action: {
          active_tabs: this.$store.state.data.reportTabs.active,
          active_cards: this.$store.state.data.reportTabs.active_cards,
        },
      };
      patch(
        `${getUrl("report")}${this.$route.params.report}/`,
        data,
        authHeader()
      )
        .catch(error => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
        });
    },
  },
  computed: {
    report() {
      return this.$store.state.data.share_report;
    },
  },
};
</script>
<style lang="">
</style>