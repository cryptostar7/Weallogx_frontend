<template>
<div>
  <navbar-component />
  <historical-simulation-after-yes-main-section />
</div>
</template>
<script>
import NavbarComponent from "../components/common/NavbarComponent.vue";
import HistoricalSimulationAfterYesMainSection from "../components/historical-simulation/HistoricalSimulationAfterYesMainSection.vue";
export default {
  components: { NavbarComponent, HistoricalSimulationAfterYesMainSection },
};
</script>