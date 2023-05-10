<template>
<div>
  <!-- <navbar-component /> -->
  <report-page-header />
  <report-builder-main-section />
  <!-- Delete Account Modal start -->
  <delete-account-modal />
    <!-- Delete Comparative CV Modal start -->
  <delete-comparative-cv-modal />

    <!-- Delete historical CV Modal start -->
  <delete-historical-cv-modal />

  <!-- Delete Ira Modal start -->
  <delete-era-modal />
  <!-- Delete Annuity Modal start -->
  <delete-annuity-modal />
  <!-- Report Buider Name Change Modal start -->
  <report-builder-name-create-modal />

  <!-- Share report Modal start -->
  <create-report-modal />

  <create-new-client-report-modal />
  
  <share-modal />
  
  <!-- delete comparative vechile id hidden input -->
  <input type="hidden" id="comparative_cv_delete_id"/>
  <input type="hidden" id="historical_cv_delete_id"/>
  
  </div>
</template>
<script>
import DeleteAccountModal from "../components/modal/DeleteAccountModal.vue";
import DeleteComparativeCvModal from "../components/modal/DeleteComparativeCvModal.vue";
import DeleteHistoricalCvModal from "../components/modal/DeleteHistoricalCvModal.vue";
import DeleteAnnuityModal from "../components/modal/DeleteAnnuityModal.vue";
import DeleteEraModal from "../components/modal/DeleteEraModal.vue";
import ReportBuilderNameCreateModal from "../components/modal/ReportBuilderNameCreateModal.vue";
import ShareModal from "../components/modal/ShareModal.vue";
import ReportBuilderMainSection from "../components/report/ReportBuilderMainSection.vue";
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import ReportPageHeader from "../components/common/ReportPageHeader.vue";
import CreateReportModal from "./../components/modal/CreateReportModal.vue";
import CreateNewClientReportModal from "./../components/modal/CreateNewClientReportModal.vue";
import "../../assets/js/chart.min";
export default {
  components: {
    DeleteAccountModal,
    DeleteComparativeCvModal,
    DeleteHistoricalCvModal,
    DeleteAnnuityModal,
    DeleteEraModal,
    ReportBuilderNameCreateModal,
    ShareModal,
    ReportBuilderMainSection,
    NavbarComponent,
    ReportPageHeader,
    CreateReportModal,
    CreateNewClientReportModal,
  },
};
</script>

    



    