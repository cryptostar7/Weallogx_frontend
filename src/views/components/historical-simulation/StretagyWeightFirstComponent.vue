<template lang="">
<p class="strategyWeightPara">Strategy Weight</p>
<div class="
        d-flex
        align-items-center
        flex-column
        justify-content-center
    ">
  <div class="strategyWeight mid d-flex">
    <div id="strategyMidWeight1" :style="{
            width: range1.midRange1.replace('%', '') + '%',
        }" class="mainResizeDiv position-relative">
      #1
      <div class="resizing-right-div resizing-right-div-1">
        <img src="@/assets/images/icons/tinny-arrow-left.svg" alt="" />&nbsp;&nbsp;<img
          src="@/assets/images/icons/tinny-arrow-right.svg" alt="Chevron" />
      </div>
    </div>
    <div id="strategyMidWeight2" :style="{
            width: range1.midRange2.replace('%', '') + '%',
        }" class="position-relative mainResizeDiv">
      #2
    </div>
    <input ref="midRangeInput" v-model="range1.midRange" type="range" min="0" max="100" id="midRange"
      class="strategy-range-input" />
  </div>
  <div class="
        mid-sw-inputs
        d-flex
        align-items-center
        justify-content-between
        w-100 w-max-427
        mt-3
        ">
    <div id="swInputDivMid1" class="sw-input-div d-flex justify-content-center">
      <input ref="swInputMid1" v-model="range1.midRange1" type="text" class="form-control range-input" id="strateg_weight_mid_1" />
    </div>
    <div id="swInputDivMid2" class="sw-input-div d-flex justify-content-center">
      <input ref="swInputMid2" v-model="range1.midRange2" type="text" class="form-control range-input" id="strateg_weight_mid_2" />
    </div>
  </div>
</div>
<p class="strategyErrorPara">
  Sum of all weights must equal 100%.
</p>
</template>
<script>
export default {
  props: ["ratio"],
  data() {
    return {
      range1: {
        midRange: 50,
        midRange1: "28.00%",
        midRange2: "72.00%",
      },
    };
  },
  watch: {
    "$props.ratio"(e) {
      if (e) {
        this.range1.midRange1 = `${e.weight_1}%`;
        this.range1.midRange2 = `${e.weight_2}%`;
      }
    },
  },
  mounted() {
    // straight weight range for tab 1
    this.$refs.midRangeInput.addEventListener("input", e => {
      this.range1.midRange1 = Number(e.target.value).toFixed(2) + "%";
      this.range1.midRange2 = (100 - Number(e.target.value)).toFixed(2) + "%";
    });

    this.$refs.swInputMid1.addEventListener("focus", e => {
      this.range1.midRange1 = e.target.value.replace("%", "");
    });

    this.$refs.swInputMid1.addEventListener("blur", e => {
      if (e.target.value) {
        this.range1.midRange1 =
          Number(e.target.value.replace("%", "")).toFixed(2) + "%";
      } else {
        this.range1.midRange1 = "0%";
      }
    });

    this.$refs.swInputMid1.addEventListener("input", e => {
      var text = e.target.value.replace("%", "").trim();
      var value = Number(text);
      var str = Number(text).toString();
      if (!isNaN(value)) {
        if (Number(value) > 100) {
          this.range1.midRange1 = str.slice(0, str.length - 1).toString();
        } else {
          this.range1.midRange2 = (100 - value).toFixed(2).toString() + "%";
        }
      } else {
        this.range1.midRange1 = "0%";
        this.range1.midRange2 = "100%";
      }
    });
    this.$refs.swInputMid2.addEventListener("focus", e => {
      this.range1.midRange2 = e.target.value.replace("%", "");
    });

    this.$refs.swInputMid2.addEventListener("blur", e => {
      if (e.target.value) {
        this.range1.midRange2 =
          Number(e.target.value.replace("%", "")).toFixed(2) + "%";
      } else {
        this.range1.midRange2 = "0%";
      }
    });

    this.$refs.swInputMid2.addEventListener("input", e => {
      var text = e.target.value.replace("%", "");
      var value = Number(text);
      var str = Number(text).toString();
      if (!isNaN(value)) {
        if (Number(value) > 100) {
          this.range1.midRange2 = str.slice(0, str.length - 1).toString();
        } else {
          this.range1.midRange1 = (100 - value).toFixed(2).toString() + "%";
        }
      } else {
        this.range1.midRange1 = "100%";
        this.range1.midRange2 = "0%";
      }
    });
  },
};
</script>
<style lang="">
</style>