<script setup>
import NavbarComponent from "../components/common/NavbarComponent.vue";
import ReviewSummaryMainSection from '../components/review/ReviewSummaryMainSection.vue';
</script>
<template>
<div>
  <navbar-component />
  <review-summary-main-section />
</div>
</template>
<script>
export default {
  components: { NavbarComponent, ReviewSummaryMainSection },
};
</script>
