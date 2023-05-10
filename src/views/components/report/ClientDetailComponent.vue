<template lang="">
    <div v-if="!$store.state.app.presentation_mode" class="section-heading-div extra report section-heading-bg pt-2 d-flex justify-content-between gap-20 flex-wrap flex-md-nowrap align-items-center">
        <div class="d-flex align-items-center">
            <button @click="testFunction" class="reportBuilderBr"> {{$sortName(`${comparative.client_firstname} ${comparative.client_lastname}`)}} </button>
            <div>
                <h2 class="fs-28 bold-fw m-0 ms-2 reportBuilderBrTxt">{{comparative.client_firstname}}, {{comparative.client_lastname}}
                <span class="fs-20 medium-fw report-scenario-name">{{comparative.sceneriodetails_name}}</span>
                </h2>
            </div>
        </div>

          <div class="d-flex align-items-center">
            <button @click="testFunction" class="editBtnLirp btn" data-bs-target="#ReportBuilderNameChangeModal" data-bs-toggle="modal">
              <svg class="ms-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425" fill="white" stroke="#1660A4" stroke-width="1.15"></rect><path d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z" stroke="#1660A4" stroke-width="1.25"></path></svg>
              </button>
            <div class="me-2">

              <p class="fs-16 m-0 ms-2 medium-fw grey-clr-1">
                {{comparative.report_name}}
              </p>
          </div>
        </div>
    </div>

    <!-- Report Buider Name Change Modal start -->
    <report-builder-name-change-modal :id="comparative.report_id" :name="comparative.report_name" :reportDescription="comparative.report_description" :updateData="updateData" @setUpdatedData="setUpdatedData"/>

</template>
<script>
import ReportBuilderNameChangeModal from "../modal/ReportBuilderNameChangeModal.vue";

export default {
  components: { ReportBuilderNameChangeModal },
  data() {
    return {
      updateData: false,
    }
  },
  methods: {
    testFunction: function() {
      this.setUpdatedData(true);
    },
    setUpdatedData: function(val){
      this.updateData = val;
    },
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