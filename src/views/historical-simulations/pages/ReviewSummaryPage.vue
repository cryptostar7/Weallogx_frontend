<template>
  <div>
    <navbar-component />
    <review-summary-main-section />
  </div>
</template>
<script>
import NavbarComponent from "../../components/common/NavbarComponent.vue";
import ReviewSummaryMainSection from "../components/review/ReviewSummaryMainSection.vue";
export default {
  components: { NavbarComponent, ReviewSummaryMainSection },
};
</script>
