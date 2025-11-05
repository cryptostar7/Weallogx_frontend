<template>
  <div>
    <navbar-component />
    <!-- Form main section -->
    <create-new-simulations-main-section />
    <!-- Add Client Canvas -->
    <add-client-modal />
  </div>
</template>
<script>
import NavbarComponent from "../../components/common/NavbarComponent.vue";
import CreateNewSimulationsMainSection from "../components/simulations-details/CreateNewSimulationsMainSection.vue";
import AddClientModal from "../components/modals/AddClientModal.vue";
export default {
  components: {
    CreateNewSimulationsMainSection,
    NavbarComponent,
    AddClientModal,
  },
};
</script>
<style lang=""></style>
