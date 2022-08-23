<script setup>
import NavbarComponent from "./../components/common/NavbarComponent.vue";
import MainSection from "../components/homepage/MainSection.vue";
import DeleteClientModal from "../components/modal/DeleteClientModal.vue";
import DeleteScenarioModal from "../components/modal/DeleteScenarioModal.vue";
import DeleteReportModal from "../components/modal/DeleteReportModal.vue";
import AddClientModal from "../components/modal/AddClientModal.vue";
import ShareModal from "../components/modal/ShareModal.vue";
import ReportBuilderNameChangeModal from "../components/modal/ReportBuilderNameChangeModal.vue";
import EditClientCanvasModal from "../components/modal/EditClientCanvasModal.vue";
</script>

<template>
  <NavbarComponent />
  <MainSection />
  <!-- Delete Client Modal -->
  <DeleteClientModal />
  <!-- Delete Scenario Modal -->
  <DeleteScenarioModal />

  <!-- Delete Report Modal -->
  <DeleteReportModal />

  <!-- Add Client Canvas -->
  <AddClientModal />
  <!-- End of Add Client Canvas -->

  <!-- Share  Modal start -->
  <ShareModal />
  <!-- Share Modal  end-->

  <!-- Report Buider Name Change Modal start -->
  <ReportBuilderNameChangeModal />
  <!-- Report Buider Name Change Modal  end-->

  <!-- Edit Client Canvas -->
  <EditClientCanvasModal />
  <!-- End of Edit Client Canvas -->
</template>
