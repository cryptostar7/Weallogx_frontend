<script setup>
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import DeleteClientModal from "../components/modal/DeleteClientModal.vue";
import DeleteScenarioModal from "../components/modal/DeleteScenarioModal.vue";
import DeleteReportModal from "../components/modal/DeleteReportModal.vue";
import AddClientModal from "../components/modal/AddClientModal.vue";
import ShareModal from "../components/modal/ShareModal.vue";
import ReportBuilderNameChangeModal from "../components/modal/ReportBuilderNameChangeModal.vue";
import EditClientCanvasModal from "../components/modal/EditClientCanvasModal.vue";
import HomepageMainSection from "../components/homepage/HomepageMainSection.vue";
import CloneScenarioModal from "../components/modal/CloneScenarioModal.vue";
</script>

<template>
  <navbar-component />

  <homepage-main-section />

  <!-- Delete Client Modal -->
  <delete-client-modal />

  <!-- Delete Scenario Modal -->
  <delete-scenario-modal />

  <!-- Delete Report Modal -->
  <delete-report-modal />

  <!-- Add Client Canvas -->
  <add-client-modal />

  <!-- Share  Modal  -->
  <share-modal />

  <!-- Report Buider Name Change Modal  -->
  <report-builder-name-change-modal />

  <!-- Edit Client Canvas -->
  <edit-client-canvas-modal />

  <!-- Clone Scenario Modal start -->
  <clone-scenario-modal />
</template>

<script>
export default {
  components: {
    NavbarComponent,
    DeleteReportModal,
    AddClientModal,
    ReportBuilderNameChangeModal,
    EditClientCanvasModal,
    ShareModal,
    DeleteScenarioModal,
    DeleteClientModal,
    HomepageMainSection,
    CloneScenarioModal,
  },
};
</script>
