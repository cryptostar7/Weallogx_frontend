<template>
  <div>
    <!-- <navbar-component /> -->
    <report-page-header />
    <report-builder-main-section />

    <!-- Delete historical CV Modal start -->
    <delete-historical-cv-modal />

    <!-- Delete Annuity Modal start -->
    <delete-annuity-modal />
    <!-- Report Buider Name Change Modal start -->
    <report-builder-name-create-modal />

    <!-- Share report Modal start -->
    <create-report-modal />

    <create-new-client-report-modal />

    <share-report-modal />

    <!-- delete comparative vechile id hidden input -->
    <input type="hidden" id="historical_cv_delete_id" />
  </div>
</template>
<script>
import DeleteHistoricalCvModal from "../components/modals/DeleteHistoricalCvModal.vue";
import DeleteAnnuityModal from "../components/modals/DeleteAnnuityModal.vue";
import ReportBuilderNameCreateModal from "../components/modals/ReportBuilderNameCreateModal.vue";
import ShareReportModal from "../components/modals/ShareReportModal.vue";
import ReportBuilderMainSection from "../components/report/ReportBuilderMainSection.vue";
import NavbarComponent from "./../../components/common/NavbarComponent.vue";
import ReportPageHeader from "../../components/common/SimulationReportPageHeader.vue";
import CreateReportModal from "./../components/modals/CreateReportModal.vue";
import CreateNewClientReportModal from "./../components/modals/CreateNewClientReportModal.vue";
import "../../../assets/js/chart.min";
export default {
  components: {
    DeleteHistoricalCvModal,
    DeleteAnnuityModal,
    ReportBuilderNameCreateModal,
    ShareReportModal,
    ReportBuilderMainSection,
    NavbarComponent,
    ReportPageHeader,
    CreateReportModal,
    CreateNewClientReportModal,
  },
};
</script>
