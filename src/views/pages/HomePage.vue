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
  </div>
</template>

<script>
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import AddClientModal from "../components/modal/AddClientModal.vue";
import ShareModal from "../components/modal/ShareModal.vue";
import ReportBuilderNameChangeModal from "../components/modal/ReportBuilderNameChangeModal.vue";
import HomepageMainSection from "../components/homepage/HomepageMainSection.vue";

export default {
  components: {
    NavbarComponent,
    AddClientModal,
    ReportBuilderNameChangeModal,
    ShareModal,
    HomepageMainSection,
  },
};
</script>
