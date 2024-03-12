<template lang="">
    <div class="collapse" :id="collapseId">
        <div class="inner-report-div border-top">
            <h4 class="green-clr fs-16 bold-fw darkmodecls">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.42757 0.572998H7.95195C7.74819 0.572998 7.58301 0.738167 7.58301 0.941909V9.05802C7.58301 9.26178 7.74819 9.4269 7.95195 9.4269H9.42757C9.63132 9.4269 9.79651 9.26178 9.79651 9.05802V0.941909C9.79651 0.738167 9.63132 0.572998 9.42757 0.572998Z"
                        fill="#147D64" />
                    <path
                        d="M5.73812 3.52429H4.26247C4.05872 3.52429 3.89355 3.68946 3.89355 3.8932V9.05798C3.89355 9.26174 4.05872 9.42692 4.26247 9.42692H5.73812C5.94187 9.42692 6.10703 9.26174 6.10703 9.05798V3.8932C6.10703 3.68946 5.94187 3.52429 5.73812 3.52429Z"
                        fill="#147D64" />
                    <path
                        d="M2.04867 5H0.573015C0.369269 5 0.204102 5.16517 0.204102 5.36891V9.05806C0.204102 9.26182 0.369269 9.42693 0.573015 9.42693H2.04867C2.25241 9.42693 2.41758 9.26182 2.41758 9.05806V5.36891C2.41758 5.16517 2.25241 5 2.04867 5Z"
                        fill="#147D64" />
                </svg>
                &nbsp;Reports
            </h4>
            <SimulationReportRow :simulationReports="simulationReports" :client="$props.client"/>
        </div>
    </div>
</template>
<script>
import SimulationReportRow from "../simulations/SimulationReportRow.vue";
export default {
  components: { SimulationReportRow },
  props: ["simulationReports", "collapseCustomId", "client"],
  data() {
    return {
      simulationReportItems: [],
      collapseId: "",
    };
  },
  mounted() {
    // get the props data in current component data variable
    this.simulationReportItems = this.$props.simulationReports;
    this.collapseId = this.$props.collapseCustomId;
  },
};
</script>
<style lang="">
</style>