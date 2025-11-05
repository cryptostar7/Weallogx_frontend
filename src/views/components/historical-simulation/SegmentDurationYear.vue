<template lang="">
    <div class="formParabrdrLavelDiv mt-3 mb-2">
        <p class="position-relative">Segment Duration (Years)
            <img src="@/assets/images/icons/info-icon.svg" alt="info" class="ms-1 info-icon-img">
            <img src="@/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-1 dark-info-icon-img">
            <span class="info-message-segment">
                Does the strategy use a 1, 2 or 3 year crediting period?
            </span>
        </p>
        <p></p>
    </div>
    <div class="ChooseTimePeriodInputs d-flex align-items-center">
        <label class="">
            <input type="radio" :name="`segment-duration${$props.currentTab}`" class="d-none" :checked="segment === 1 ? true : false">
            <span class="timePeriodYear" @click="segment = 1">1</span>
        </label>
        <label class="ms-2">
            <input type="radio" :name="`segment-duration${$props.currentTab}`" class="d-none" :checked="segment === 2 ? true : false">
            <span class="timePeriodYear" @click="segment = 2">2</span>
        </label>
        <label class="ms-2">
            <input type="radio" :name="`segment-duration${$props.currentTab}`" class="d-none" :checked="segment === 3 ? true : false">
            <span class="timePeriodYear" @click="segment = 3">3</span>
        </label>
    </div>
    <input type="hidden" :value="segment" :id="$props.hiddenInputId" ref="hiddenRef"/>
</template>
<script>
export default {
  props: ["hiddenInputId", "currentTab", "update"],
  emits: ["setUpdated"],
  data(){
    return {
       segment:1
    };
  },
    watch: {
    "$props.update"(e) {
      if (e) {
        this.segment = Number(this.$refs.hiddenRef.value);
      }
    },
  },

};
</script>
<style lang="">
</style>