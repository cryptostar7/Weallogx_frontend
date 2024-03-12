<template>
<div>
  <navbar-component />
  <historical-simulation-from-scratch-main-section />
  </div>
</template>
<script>
import NavbarComponent from "../components/common/NavbarComponent.vue";
import HistoricalSimulationFromScratchMainSection from '../components/historical-simulation/HistoricalSimulationFromScratchMainSection.vue';
export default {
  components: { NavbarComponent, HistoricalSimulationFromScratchMainSection },
};
</script>