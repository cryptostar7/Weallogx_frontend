<template lang="">
    <div v-if="!$store.state.app.presentation_mode" class="section-heading-div report section-heading-bg pt-2 d-flex justify-content-between gap-20 flex-wrap flex-md-nowrap align-items-center">
        <div class="d-flex align-items-center">
            <button class="reportBuilderBr" data-bs-target="#reportNameChangeModal" data-bs-toggle="modal"> Br
            </button>
            <div>
                <h2 class="fs-28 bold-fw m-0 ms-2 reportBuilderBrTxt">Bryant, Roger
                <span class="fs-20 medium-fw report-scenario-name">Allianz Parse</span>
                </h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    comparative() {
      return this.$store.state.data.report.comparative;
    },
  },
};
</script>
<style lang="">
</style>