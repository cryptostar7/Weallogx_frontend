<template lang="">
  <div class="d-flex align-items-center range-slider-div">
    <div :class="`range-slider range-slider2 position-relative ${customAmount ? 'disabled':''}`" id="rangeSlider2">
      <p class="rangeSliderMiddleLine1"></p>
      <p class="rangeSliderMiddleLine2"></p>
      <div id="tooltip2"  :style="`left: ${rangePercentage}`"><span>{{range}}</span></div>
      <input id="range2" ref="input" type="range" v-model="range" min="0" max="200" :style="`--range-progress2: ${rangePercentage}`">
      <p class="rangeSliderMiddleNum">100%</p>
      <p class="rangeSliderMiddleNumEnd">200%</p>
    </div>
    <div class="or-div ms-4">
      or
    </div> 
    <div class="customAmountInputDiv ms-2">
      <label for="customAmount">Custom Amount</label>
      <div class="percent-input-div">
        <input type="text" id="customRangeValue2" class="percent-input" @keyup="(e) => saveCustomAmount(e)">
        <span class="percent-span">%</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      range: "0",
      rangePercentage: "calc(0% + 16px)",
      customAmount: "",
    };
  },
  methods: {
    saveCustomAmount: function (e) {
      this.customAmount = e.target.value;
    },
  },
  updated() {
    var inp = this.$refs.input;
    var position = Number(((inp.value - inp.min) * 100) / (inp.max - inp.min));
    var newPosition = 16 - position * 0.32;
    this.rangePercentage = `calc(${position}% + (${newPosition}px))`;
  },
};
</script>
<style lang="">
</style>