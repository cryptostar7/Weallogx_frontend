<template>
<div>
  <navbar-component />
  <historical-simulation-from-scratch-main-section-new />
  </div>
</template>
<script>
import NavbarComponent from "../components/common/NavbarComponent.vue";
import HistoricalSimulationFromScratchMainSectionNew from '../components/historical-simulation/HistoricalSimulationFromScratchMainSectionNew.vue';
export default {
  components: { NavbarComponent, HistoricalSimulationFromScratchMainSectionNew },
};
</script>