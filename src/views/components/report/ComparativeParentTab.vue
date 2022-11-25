<template lang="">
    <comparative-tab-comparative-table  v-if="tabID === 1" :keyId="keyId"/>
    <comparative-tab-comparative-graph  v-if="tabID === 2" :keyId="keyId"/>
    <comparative-tab-making-things-equal  v-if="tabID === 3" :keyId="keyId"/>
    <comparative-tab-comulative-values  v-if="tabID === 4" :keyId="keyId"/>
    <comparative-tab-legacy  v-if="tabID === 5" :keyId="keyId"/>
    <comparative-tab-fee-analysis  v-if="tabID === 6" :keyId="keyId"/> 
</template>
<script>
import ComparativeTabComparativeTable from "./comparative-components/ComparativeTabComparativeTable.vue";
import ComparativeTabComparativeGraph from "./comparative-components/ComparativeTabComparativeGraph.vue";
import ComparativeTabMakingThingsEqual from "./comparative-components/ComparativeTabMakingThingsEqual.vue";
import ComparativeTabComulativeValues from "./comparative-components/ComparativeTabComulativeValues.vue";
import ComparativeTabLegacy from "./comparative-components/ComparativeTabLegacy.vue";
import ComparativeTabFeeAnalysis from "./comparative-components/ComparativeTabFeeAnalysis.vue";

export default {
  props: ["tabID", 'keyId'],
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