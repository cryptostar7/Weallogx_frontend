<script setup>
import NavbarComponent from '../components/common/NavbarComponent.vue';
import HistoricalSimulationAfterNoMainSection from '../components/historical-simulation/HistoricalSimulationAfterNoMainSection.vue';
</script>
<template>
   <navbar-component />
   <historical-simulation-after-no-main-section />
</template>
<script>
export default {
  components: { NavbarComponent, HistoricalSimulationAfterNoMainSection },
}
</script>
