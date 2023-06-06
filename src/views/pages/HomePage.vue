<template>
<div>
  <navbar-component />
    <homepage-main-section />
    
    <!-- Add Client Canvas -->
    <add-client-modal />

    <!-- Share report Modal  -->
    <share-report-modal />
    
  </div>
</template>

<script>
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import AddClientModal from "../components/modal/AddClientModal.vue";
import ShareReportModal from "../components/modal/ShareReportModal.vue";
import ReportBuilderNameChangeModal from "../components/modal/ReportBuilderNameChangeModal.vue";
import HomepageMainSection from "../components/homepage/HomepageMainSection.vue";


export default {
  components: {
    NavbarComponent,
    AddClientModal,
    ReportBuilderNameChangeModal,
    ShareReportModal,
    HomepageMainSection,
  },
};
</script>
