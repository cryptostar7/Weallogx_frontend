<template>
  <div>
    <navbar-component />
      <simulation-list-main-section />
      
      <!-- Add Client Canvas -->
      <add-client-modal />
  
      <!-- Share report Modal  -->
      <share-report-modal />
      
    </div>
  </template>
  
  <script>
  import NavbarComponent from "../../components/common/NavbarComponent.vue";
  import AddClientModal from "../../components/modal/AddClientModal.vue";
  import ShareReportModal from "../../components/modal/ShareReportModal.vue";
  import ReportBuilderNameChangeModal from "../components/modals/ReportBuilderNameChangeModal.vue";
  import SimulationListMainSection from "../components/simulations/SimulationListMainSection.vue";
  
  export default {
    components: {
      NavbarComponent,
      AddClientModal,
      ReportBuilderNameChangeModal,
      ShareReportModal,
      SimulationListMainSection,
    },
  };
  </script>
  