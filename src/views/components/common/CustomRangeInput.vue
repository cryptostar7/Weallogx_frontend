<template lang="">
<div class="d-flex align-items-center range-slider-div">
    <div class="w-100" @click="reActive()">
     <div :class="`range-slider range-slider1 position-relative ${customAmount ? 'disabled':''}`">
        <p class="rangeSliderMiddleLine1"></p>
        <p class="rangeSliderMiddleLine2"></p>
        <div id="tooltip1" :style="`left: ${rangePercentage}`"><span>{{range}}</span></div>
        <input class="position-relative" id="range1"  ref="input" type="range" v-model="range" min="0" max="20" :style="`--range-progress1: ${rangePercentage}`">
        <p class="rangeSliderMiddleNum">10%</p>
        <p class="rangeSliderMiddleNumEnd">20%</p>
    </div>
   </div>
    <div class="or-div ms-4 position-relative top-minus">
        or
    </div>
    <div class="customAmountInputDiv ms-2 top-minus">
        <label for="customAmount">Custom Amount</label>
        <div class="percent-input-div">
          <input type="text" class="handleLimit" min="0" max="1000" :value="customAmount" @keyup="(e) => saveCustomAmount(e)">
          
        </div>
    </div>
    <input type="hidden" :value="customAmount || range" :id="$props.hiddenInputId" ref="rangeHiddenRef"/>
</div>
</template>
<script>
export default {
  props: ["hiddenInputId", "update"],
  emits: ["setUpdated"],
  data() {
    return {
      range: "10",
      rangePercentage: "calc(45% + 16px)",
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
  watch: {
    "$props.update"(e) {
      if (e) {
        this.range = this.$refs.rangeHiddenRef.value;
      }
    },
  },
};
</script>
<style lang="">
</style>