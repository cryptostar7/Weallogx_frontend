<script setup>
import NavbarComponent from "../components/common/NavbarComponent.vue";
import HistoricalSimulationMainSection from "../components/historical-simulation/HistoricalSimulationMainSection.vue";
</script>
<template>
  <navbar-component />
  <historical-simulation-main-section />
</template>
<script>
export default {
  components: { NavbarComponent, HistoricalSimulationMainSection },
};
</script>