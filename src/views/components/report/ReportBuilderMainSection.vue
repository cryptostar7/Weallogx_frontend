<script setup>
import { RouterLink } from "vue-router";
import ComparativeAnalysisReportTab from './ComparativeAnalysisReportTab.vue';
import HistoricalSimulationReportTab from './HistoricalSimulationReportTab.vue';
</script> 
<template>

  <!-- Comparative Analysis Tab Start -->
  <comparative-analysis-report-tab :sidebar="sidebar"/>
  <!-- Comparative Analysis Tab End -->

  <!-- Historical Simulation Tab Start -->
  <historical-simulation-report-tab :sidebar="sidebar"/>
  <!-- Historical Simulation Tab End -->
</template>
<script>
export default {
  components: { RouterLink, 
  ComparativeAnalysisReportTab,
  HistoricalSimulationReportTab
   },
  data(){
    return{ 
      sidebar:{
        collapse:false,
        currentTab:'comparative',
      }
    }
  },
 
};
</script>
