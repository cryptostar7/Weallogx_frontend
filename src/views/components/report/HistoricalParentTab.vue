<template lang="">
    <historical-comparative-table-tab  v-if="tabID === 1"/>
    <historical-income-analysis-tab  v-if="tabID === 2"/>
    <historical-irr-analysis-tab  v-if="tabID === 3"/>
    <historical-total-values-tab  v-if="tabID === 4"/>
    <historical-cumulative-values-tab  v-if="tabID === 5"/>
    <historical-comparative-values-tab  v-if="tabID === 6"/>
</template>
<script>
import HistoricalComparativeTableTab from "./historical-components/HistoricalComparativeTableTab.vue";
import HistoricalComparativeValuesTab from "./historical-components/HistoricalComparativeValuesTab.vue";
import HistoricalCumulativeValuesTab from "./historical-components/HistoricalCumulativeValuesTab.vue";
import HistoricalIncomeAnalysisTab from "./historical-components/HistoricalIncomeAnalysisTab.vue";
import HistoricalIrrAnalysisTab from "./historical-components/HistoricalIRRAnalysisTab.vue";
import HistoricalTotalValuesTab from "./historical-components/HistoricalTotalValuesTab.vue";


export default {
  props: ["tabID"],
  components: {
    HistoricalComparativeTableTab,
    HistoricalComparativeValuesTab,
    HistoricalCumulativeValuesTab,
    HistoricalIncomeAnalysisTab,
    HistoricalIrrAnalysisTab,
    HistoricalTotalValuesTab,
  },
};
</script>
<style lang="">
</style>