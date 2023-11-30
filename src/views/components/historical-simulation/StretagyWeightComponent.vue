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
  props: ["visible"]  
}
</script>
<style lang=""></style>
