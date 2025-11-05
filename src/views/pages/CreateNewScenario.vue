<template>
<div>
  <navbar-component />
  <create-scenario-main-section />
    <!-- Add Client Canvas -->
   <add-client-modal />
</div>
</template>
<script>
import NavbarComponent from "../components/common/NavbarComponent.vue";
import CreateScenarioMainSection from "../components/scenario/CreateScenarioMainSection.vue";
import AddClientModal from "../components/modal/AddClientModal.vue";
export default {
  components: { CreateScenarioMainSection, NavbarComponent, AddClientModal },
};
</script>
<style lang="">
</style>