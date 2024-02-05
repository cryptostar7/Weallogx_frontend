<template lang="">
<div class="d-flex align-items-center range-slider-div">
    <div class="w-100" @click="reActive()">
     <div :class="`range-slider range-slider1 position-relative ${customAmount || !$props.isCapActive ? 'disabled':''}`">
        <p class="rangeSliderMiddleLine1"></p>
        <p class="rangeSliderMiddleLine2"></p>
        <div id="tooltip1" :class="$props.isCapActive ? '' : 'd-none'" :style="`left: ${rangePercentage}`"><span>{{range}}</span></div>
        <input class="position-relative" id="range1"  ref="input" type="range" v-model="range" :disabled="!$props.isCapActive" min="0" max="20" :style="`--range-progress1: ${rangePercentage}`">
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
          <input type="text" id="custAmtInp" class="handleLimit" min="0" max="1000" :disabled="!$props.isCapActive" :value="customAmount" @keyup="(e) => saveCustomAmount(e)">
        </div>
    </div>
    <input type="hidden" :value="customAmount || range" :id="$props.hiddenInputId" ref="rangeHiddenRef"/>
</div>
</template>
<script>
export default {
  props: ["hiddenInputId", "update", "isCapActive", "currentTab"],
  emits: ["setUpdated"],
  data() {
    return {
      range: "10",
      rangePercentage: "calc(45% + 16px)",
      customAmount: "",
      toggleCapActive: true,
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
      if (this.$props.isCapActive) {
          this.range = this.$refs.rangeHiddenRef.value;
          if (Number(this.$refs.rangeHiddenRef.value) > 20) {
            this.customAmount = this.$refs.rangeHiddenRef.value;
          } else {
            this.range = this.$refs.rangeHiddenRef.value;
          }
        }
    }
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
        if (this.$props.isCapActive) {
          this.range = this.$refs.rangeHiddenRef.value;
          if (Number(this.$refs.rangeHiddenRef.value) > 20) {
            this.customAmount = this.$refs.rangeHiddenRef.value;
          } else {
            this.range = this.$refs.rangeHiddenRef.value;
          }
        }
        this.$emit('setUpdated');
      }
    },
    "$props.isCapActive"(e) {
      if (e) {
        this.range = 10;
      } else {
        this.range = 0;
        this.customAmount = "";
      }
    },
  },
};
</script>
<style lang="">
</style>