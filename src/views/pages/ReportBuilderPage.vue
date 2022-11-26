<template>
<div>
  <!-- <navbar-component /> -->
  <report-page-header />
  <report-builder-main-section />
  <!-- Delete Account Modal start -->
  <delete-account-modal />
  <!-- Delete Ira Modal start -->
  <delete-era-modal />
  <!-- Delete Annuity Modal start -->
  <delete-annuity-modal />
  <!-- Report Buider Name Change Modal start -->
  <report-builder-name-change-modal />
  <!-- Share report Modal start -->
  <share-modal />
  </div>
</template>
<script>
import DeleteAccountModal from "../components/modal/DeleteAccountModal.vue";
import DeleteAnnuityModal from "../components/modal/DeleteAnnuityModal.vue";
import DeleteEraModal from "../components/modal/DeleteEraModal.vue";
import ReportBuilderNameChangeModal from "../components/modal/ReportBuilderNameChangeModal.vue";
import ShareModal from "../components/modal/ShareModal.vue";
import ReportBuilderMainSection from "../components/report/ReportBuilderMainSection.vue";
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import ReportPageHeader from "../components/common/ReportPageHeader.vue";
import "../../assets/js/chart.min";
export default {
  components: {
    DeleteAccountModal,
    DeleteAnnuityModal,
    DeleteEraModal,
    ReportBuilderNameChangeModal,
    ShareModal,
    ReportBuilderMainSection,
    NavbarComponent,
    ReportPageHeader,
  },
};
</script>

    



    