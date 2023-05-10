<template lang="">
    <div v-if="!$store.state.app.presentation_mode" class="section-heading-div report section-heading-bg pt-2 d-flex justify-content-between gap-20 flex-wrap flex-md-nowrap align-items-center">
        <div class="d-flex align-items-center">
            <button @click="testFunction" class="reportBuilderBr"> {{$sortName(`${comparative.client_firstname} ${comparative.client_lastname}`)}} </button>
            <div>
                <h2 class="fs-28 bold-fw m-0 ms-2 reportBuilderBrTxt">{{comparative.client_firstname}}, {{comparative.client_lastname}}
                <span class="fs-20 medium-fw report-scenario-name">{{comparative.sceneriodetails_name}}</span>
                </h2>
            </div>
        </div>

          <div class="d-flex align-items-center">
            <button @click="testFunction" class="" data-bs-target="#ReportBuilderNameChangeModal" data-bs-toggle="modal">Edit </button>
            <div>
                <h2 class="fs-28 bold-fw m-0 ms-2 reportBuilderBrTxt">
                <span class="fs-20 medium-fw report-scenario-name">{{comparative.report_name}}</span>
                </h2>
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