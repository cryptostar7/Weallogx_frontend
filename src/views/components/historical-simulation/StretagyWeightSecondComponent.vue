<template lang="">
<p class="strategyWeightPara">Strategy Weight</p>
<!-- <button @click="checkWidth()">Check Width</button> -->
<div class="
    d-flex
    align-items-center
    flex-column
    justify-content-center
  ">
  <div class="strategyWeight d-flex">
    <div id="strategyWeight1" class="mainResizeDiv position-relative" :style="{'width': `${range.input1}%`}">
      #1
    </div>
    <div id="strategyWeight2" class="position-relative mainResizeDiv" :style="{'width': `${range.input2}%`}">
      #2
      <div class="resizing-right-div resizing-right-div-1">
        <img src="@/assets/images/icons/tinny-arrow-left.svg" alt="" />&nbsp;&nbsp;<img
          src="@/assets/images/icons/tinny-arrow-right.svg" alt="Chevron" />
      </div>
      <div class="resizing-left-div resizing-right-div-2">
        <img src="@/assets/images/icons/tinny-arrow-left.svg" alt="" />&nbsp;&nbsp;<img
          src="@/assets/images/icons/tinny-arrow-right.svg" alt="Chevron" />
      </div>
    </div>
    <div id="strategyWeight3" class="mainResizeDiv position-relative" :style="{'width': `${range.input3}%`}">
      #3
    </div>
    <input type="range" min="0" :max="rangeWidth1" ref="inputRange1" id="exampleRange1" class="strategy-range-input strategy-range-input-1" :style="{'width': `calc(${rangeWidth1}% - 20px)`}" />
    <input type="range" min="0" :max="rangeWidth2" ref="inputRange2" id="exampleRange2" class="strategy-range-input strategy-range-input-2" :style="{'width': `calc(${rangeWidth2}% - 20px)`}" />
  </div>
  <div class="
      d-flex
      align-items-center
      justify-content-between
      w-100 w-max-427
      mt-3
    ">

    <div id="swInputDiv1" class="sw-input-div d-flex justify-content-center" :style="{'width':`${range.input1}%`}">
      <input id="swInput1" type="text" class="form-control range-input" v-model="range.input1" />
    </div>
    <div id="swInputDiv2" class="sw-input-div d-flex justify-content-center" :style="{'width':`${range.input2}%`}">
      <input id="swInput2" type="text" class="form-control range-input" v-model="range.input2" />
    </div>
    <div id="swInputDiv3" class="sw-input-div d-flex justify-content-center" :style="{'width':`${range.input3}%`}">
      <input id="swInput3" type="text" class="form-control range-input" v-model="range.input3" />
    </div>
  </div>
</div>
<p class="strategyErrorPara">
  Sum of all weights must equal 100%.
</p>
</template>
<script>
export default {
  data() {
    return {
      range: {
        input1: "33",
        input2: "34",
        input3: "33",
      },
      rangeWidth1: "50",
      rangeWidth2: "50",
    };
  },
  mounted() {
    this.$refs.inputRange1.addEventListener("input", e => {
      var val = Number(e.target.value.replace("%", ""));
      console.log("range1", val.toFixed(2));
      var inp3 = Number(this.range.input3.replace("%", ""));
      var inp1 = Number(((100 - inp3) / 100 * val).toFixed(2));
      var inp2 = Number(100 - (inp1 + inp3));
      this.range.input3 = inp3.toFixed(2);
      this.range.input2 = inp2.toFixed(2);
      this.range.input1 = inp1.toFixed(2);
      this.updateRangeWidth1();
    });
    this.$refs.inputRange2.addEventListener("input", e => {
      var val = Number(e.target.value.replace("%", ""));
      console.log("range2", val.toFixed(2));
      var inp1 = Number(this.range.input1.replace("%", ""));
      var inp3 = Number(((100 - inp1) / 100 * val).toFixed(2));
      var inp2 = Number(100 - (inp1 + inp3));
      this.range.input1 = inp1.toFixed(2);
      this.range.input2 = inp2.toFixed(2);
      this.range.input3 = inp3.toFixed(2);
      this.updateRangeWidth2();
    });
  },
  methods: {
    checkWidth: function() {
      console.log(this.range);
      console.log(this.rangeWidth1);
      console.log(this.rangeWidth2);
    },
    updateRangeWidth1() {
      var width = "0%";
      // var inp1 = Number(this.range.input1.replace("%", ""));
      // var inp2 = Number(this.range.input2.replace("%", ""));
      var inp3 = Number(this.range.input3.replace("%", ""));
      width = 100 - inp3;
      // this.rangeWidth1 = width;
      this.rangeWidth1 = width;
    },
    updateRangeWidth2() {
      var width = "0%";
      // var inp3 = Number(this.range.input3.replace("%", ""));
      // var inp2 = Number(this.range.input2.replace("%", ""));
      var inp1 = Number(this.range.input1.replace("%", ""));
      width = 100 - inp1;

      // this.rangeWidth2 = width;
      this.rangeWidth1 = width;
    },
  },
  computed: {
    //  rangeWidth1() {
    //   var width = "0%";
    //   var inp1 = Number(this.range.input1.replace("%", ""));
    //   var inp2 = Number(this.range.input2.replace("%", ""));
    //   width = inp1 + inp2;
    //   // this.rangeWidth1 = width;
    //   return width;
    // },
    // rangeWidth2() {
    //   var width = "0%";
    //   var inp3 = Number(this.range.input3.replace("%", ""));
    //   var inp2 = Number(this.range.input2.replace("%", ""));
    //   width = inp3 + inp2;
    //   // this.rangeWidth2 = width;
    //   return width;
    // },
  },
};
</script>
<style lang="">
</style>