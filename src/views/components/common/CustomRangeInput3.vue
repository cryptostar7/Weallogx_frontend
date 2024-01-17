<template lang="">
  <div class="d-flex align-items-center range-slider-div">
    <div class="w-100" @click="reActive()">
      <div :class="`range-slider range-slider2 position-relative ${customAmount ? 'disabled':''}`" id="rangeSlider2">
        <div id="tooltip2"  :style="`left: ${rangePercentage}`"><span>{{range}}</span></div>
        <input id="range2" class="position-relative" ref="input" type="range" v-model="range" min="0" max="100" :style="`--range-progress2: ${rangePercentage}`">
      </div>
    </div>
    <div class="or-div ms-4 position-relative top-minus">
      or
    </div> 
    <div class="customAmountInputDiv ms-2 top-minus">
      <label for="customAmount">Custom Amount</label>
      <div class="percent-input-div">
        <input type="text" id="customRangeValue2" class="handleLimit" min="0" max="200" :value="customAmount" @keyup="(e) => saveCustomAmount(e)">
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
    updateData: function(){
      this.range = this.$refs.rangeHiddenRef.value;
    }
  },
  updated() {
    var inp = this.$refs.input;
    var position = Number((inp.value - inp.min) * 100 / (inp.max - inp.min));
    var newPosition = 16 - position * 0.32;
    this.rangePercentage = `calc(${position}% + (${newPosition}px))`;
  },
  watch: {
    // "$props.update"(e) {
    //   if (e) {
    //     this.range = this.$refs.rangeHiddenRef.value;
    //   }
    // },
  },
};
</script>
<style lang="">
</style>