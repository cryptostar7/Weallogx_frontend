<template lang="">
  <div :class="`${$props.visible ? '' : 'd-none'}`">
    <p class="strategyWeightPara">Strategy Weight</p>
    <div
      :class="`d-flex align-items-center flex-column justify-content-center`"
    >
      <div class="strategyWeight mid d-flex">
        <div
          id="strategyMidWeight1"
          :style="{
            width: '100%',
            borderRadius: '100px',
          }"
          class="mainResizeDiv position-relative"
        >
          100%
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["visible"],
  methods: {
    getRange: function () {
      return ["100%", "0%", "0%"];
    },
  },
};
</script>
<style lang=""></style>
