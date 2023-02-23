
<template>
<div>
  <navbar-component />
  <historical-simulation-main-section />
</div>
</template>
<script>
import NavbarComponent from "../components/common/NavbarComponent.vue";
import HistoricalSimulationMainSection from "../components/historical-simulation/HistoricalSimulationMainSection.vue";
export default {
  components: { NavbarComponent, HistoricalSimulationMainSection },
};
</script>