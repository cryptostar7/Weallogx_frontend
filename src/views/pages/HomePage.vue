<template>
<div>
  <navbar-component />
    <homepage-main-section />
    <!-- Add Client Canvas -->
    <add-client-modal />
    <!-- Share  Modal  -->
    <share-modal />
    <!-- Report Buider Name Change Modal  -->
    <report-builder-name-change-modal />
    <!-- Clone Scenario Modal start -->
    <clone-scenario-modal />
  </div>
</template>

<script>
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import DeleteReportModal from "../components/modal/DeleteReportModal.vue";
import AddClientModal from "../components/modal/AddClientModal.vue";
import ShareModal from "../components/modal/ShareModal.vue";
import ReportBuilderNameChangeModal from "../components/modal/ReportBuilderNameChangeModal.vue";
import HomepageMainSection from "../components/homepage/HomepageMainSection.vue";
import CloneScenarioModal from "../components/modal/CloneScenarioModal.vue";

export default {
  components: {
    NavbarComponent,
    DeleteReportModal,
    AddClientModal,
    ReportBuilderNameChangeModal,
    ShareModal,
    HomepageMainSection,
    CloneScenarioModal,
  },
};
</script>
