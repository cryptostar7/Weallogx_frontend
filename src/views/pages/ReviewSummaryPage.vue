<script setup>
import PerformanceMultiplierModal from "../components/modal/PerformanceMultiplierModal.vue";
import NavbarComponent from "../components/common/NavbarComponent.vue";
import ReviewSummaryMainSection from '../components/review/ReviewSummaryMainSection.vue';
</script>
<template>
  <navbar-component />
  <review-summary-main-section />
  <performance-multiplier-modal />
</template>
<script>
export default {
  components: { NavbarComponent, PerformanceMultiplierModal, ReviewSummaryMainSection },
};
</script>
