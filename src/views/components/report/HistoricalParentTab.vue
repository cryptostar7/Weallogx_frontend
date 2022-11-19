<template lang="">
    <historical-comparative-table-tab  v-if="tabID === 1" :keyId="keyId"/>
    <historical-income-analysis-tab  v-if="tabID === 2" :keyId="keyId"/>
    <historical-irr-analysis-tab  v-if="tabID === 3" :keyId="keyId"/>
    <historical-total-values-tab  v-if="tabID === 4" :keyId="keyId"/>
    <historical-cumulative-values-tab  v-if="tabID === 5" :keyId="keyId"/>
    <historical-comparative-values-tab  v-if="tabID === 6" :keyId="keyId"/>
</template>
<script>
import HistoricalComparativeTableTab from "./historical-components/HistoricalComparativeTableTab.vue";
import HistoricalComparativeValuesTab from "./historical-components/HistoricalComparativeValuesTab.vue";
import HistoricalCumulativeValuesTab from "./historical-components/HistoricalCumulativeValuesTab.vue";
import HistoricalIncomeAnalysisTab from "./historical-components/HistoricalIncomeAnalysisTab.vue";
import HistoricalIrrAnalysisTab from "./historical-components/HistoricalIRRAnalysisTab.vue";
import HistoricalTotalValuesTab from "./historical-components/HistoricalTotalValuesTab.vue";


export default {
  props: ["tabID", "keyId"],
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