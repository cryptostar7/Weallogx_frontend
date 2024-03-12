<template lang="">
    <div v-if="!$store.state.app.presentation_mode" class="section-heading-div extra report section-heading-bg pt-2 d-flex justify-content-between gap-20 flex-wrap flex-md-nowrap align-items-center">
        <div class="d-flex align-items-center">
            <button class="reportBuilderBr"> {{$sortName(comparative.client_firstname, comparative.client_lastname, comparative.client_middlename)}} </button>
            <div>
                <h2 class="fs-28 bold-fw m-0 ms-2 reportBuilderBrTxt">{{$clientName(comparative.client_firstname, comparative.client_lastname, comparative.client_middlename)}}
                <span class="fs-20 medium-fw report-scenario-name">{{comparative.sceneriodetails_name}}</span>
                </h2>
            </div>
        </div>

          <div class="d-flex align-items-center">
            <button @click="setUpdatedData(true)" class="editBtnLirp btn" data-bs-target="#ReportBuilderNameEditModal" data-bs-toggle="modal">
              <svg class="ms-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425" fill="white" stroke="#1660A4" stroke-width="1.15"></rect><path d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z" stroke="#1660A4" stroke-width="1.25"></path></svg>
              </button>
            <div class="me-2">

              <p class="fs-16 m-0 ms-2 medium-fw grey-clr-1">
                {{reportName}}
              </p>
          </div>
        </div>
    </div>

    <!-- Report Buider Name edit Modal start -->
    <report-builder-name-edit-modal :id="comparative.report_id" :name="reportName" :reportDescription="reportDescription" :updateData="updateData" @setUpdatedData="setUpdatedData" @setReportName="name => reportName = name" @setReportDescription="value => reportDescription = value"/>

</template>
<script>
import ReportBuilderNameEditModal from "../modal/ReportBuilderNameEditModal.vue";

export default {
  components: { ReportBuilderNameEditModal },
  data() {
    return {
      updateData: false,
      reportName: '',
      reportDescription: '',
    }
  },
  methods: {
    setUpdatedData: function(val){
      this.updateData = val;
    },
  },
  mounted() {
    this.reportName = this.comparative.report_name;
    this.reportDescription = this.comparative.report_description;
    let client = {firstname: this.comparative.client_firstname, lastname: this.comparative.client_lastname, middlename: this.comparative.client_middlename};
    this.$store.dispatch('shareReportData', {name: 'client', data: client});
    this.$store.dispatch('shareReportData', {name: 'scenario', data: {name: this.comparative.sceneriodetails_name}});
  },
  computed: {
    comparative() {
      return this.$store.state.data.report.comparative;
    },
  },
};
</script>
<style lang="">
</style>