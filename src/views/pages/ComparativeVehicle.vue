<script setup>
import NavbarComponent from "../components/common/NavbarComponent.vue";
import ComparativeVehicleMainSection from "../components/comparative/ComparativeVehicleMainSection.vue";
import DeleteReportModal from "../components/modal/DeleteReportModal.vue";
</script>
<template>
  <div>
  <navbar-component />
  <comparative-vehicle-main-section />
  <delete-report-modal />
  </div>
</template>
<script>
export default {
  components: {
    NavbarComponent,
    ComparativeVehicleMainSection,
    DeleteReportModal,
  },
};
</script>
