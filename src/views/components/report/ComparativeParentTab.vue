<template lang="">
    <comparative-tab-comparative-table  v-if="tabID === 1" :status="status"/>
    <comparative-tab-comparative-graph  v-if="tabID === 2"/>
    <comparative-tab-making-things-equal  v-if="tabID === 3"/>
    <comparative-tab-comulative-values  v-if="tabID === 4"/>
    <comparative-tab-legacy  v-if="tabID === 5"/>
    <comparative-tab-fee-analysis  v-if="tabID === 6"/>
</template>
<script>
import ComparativeTabComparativeTable from "./comparative-components/ComparativeTabComparativeTable.vue";
import ComparativeTabComparativeGraph from "./comparative-components/ComparativeTabComparativeGraph.vue";
import ComparativeTabMakingThingsEqual from "./comparative-components/ComparativeTabMakingThingsEqual.vue";
import ComparativeTabComulativeValues from "./comparative-components/ComparativeTabComulativeValues.vue";
import ComparativeTabLegacy from "./comparative-components/ComparativeTabLegacy.vue";
import ComparativeTabFeeAnalysis from "./comparative-components/ComparativeTabFeeAnalysis.vue";

export default {
  props: ["tabID", 'status'],
  components: {
    ComparativeTabComparativeTable,
    ComparativeTabComparativeGraph,
    ComparativeTabMakingThingsEqual,
    ComparativeTabComulativeValues,
    ComparativeTabLegacy,
    ComparativeTabFeeAnalysis,
  },
};
</script>
<style lang="">
</style>