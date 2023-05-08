<template>
<div>
   <navbar-component />
   <historical-simulation-after-no-main-section />
</div>
</template>
<script>
import NavbarComponent from '../components/common/NavbarComponent.vue';
import HistoricalSimulationAfterNoMainSection from '../components/historical-simulation/HistoricalSimulationAfterNoMainSection.vue';
export default {
  components: { NavbarComponent, HistoricalSimulationAfterNoMainSection },
}
</script>
