<script setup>
import NavbarComponent from '../components/common/NavbarComponent.vue'
import CreateScenarioMainSection from '../components/scenario/CreateScenarioMainSection.vue'
</script>
<template>
  <navbar-component />
  <create-scenario-main-section />
</template>
<script>
export default {
  components: { CreateScenarioMainSection, NavbarComponent },
}
</script>
<style lang="">
  
</style>