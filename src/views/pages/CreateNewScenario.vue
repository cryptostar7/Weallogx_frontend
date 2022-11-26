<script setup>
import NavbarComponent from '../components/common/NavbarComponent.vue'
import CreateScenarioMainSection from '../components/scenario/CreateScenarioMainSection.vue'
</script>
<template>
<div>
  <navbar-component />
  <create-scenario-main-section />
</div>
</template>
<script>
export default {
  components: { CreateScenarioMainSection, NavbarComponent },
}
</script>
<style lang="">
  
</style>