<template>
  <div>
    <navbar-component />
    <simulation-parameters-main-section />
  </div>
</template>
<script>
import NavbarComponent from "../../components/common/NavbarComponent.vue";
import SimulationParametersMainSection from '../components/parameters/SimulationParametersMainSection.vue'
export default {
  components: { NavbarComponent, SimulationParametersMainSection },
};
</script>
