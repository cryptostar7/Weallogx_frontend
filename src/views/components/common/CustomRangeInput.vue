<template lang="">
<div class="d-flex align-items-center range-slider-div">
    <div class="w-100" @click="reActive()">
     <div :class="`range-slider range-slider1 ${customAmount ? 'disabled':''}`"  >
        <div id="tooltip1" :style="`left: ${rangePercentage}`"><span>{{range}}</span></div>
        <input id="range1"  ref="input" type="range" v-model="range" min="0" max="100" :style="`--range-progress1: ${rangePercentage}`">
    </div>
   </div>
    <div class="or-div ms-4">
        or
    </div>
    <div class="customAmountInputDiv ms-2">
        <label for="customAmount">Custom Amount</label>
          <div class="percent-input-div">
          <input type="text" class="handleLimit" min="0" max="100" :value="customAmount" @keyup="(e) => saveCustomAmount(e)">
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
    saveCustomAmount: function(e) {
      this.customAmount = e.target.value;
    },
    reActive: function() {
      this.customAmount = "";
    },
  },
  updated() {
    var inp = this.$refs.input;
    var position = Number((inp.value - inp.min) * 100 / (inp.max - inp.min));
    var newPosition = 16 - position * 0.32;
    this.rangePercentage = `calc(${position}% + (${newPosition}px))`;
  },
};
</script>
<style lang="">
</style>