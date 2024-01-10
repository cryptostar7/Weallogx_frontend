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
            width: range.midRange1.replace('%', '') + '%',
          }"
          class="mainResizeDiv position-relative"
        >
          #1
          <div class="resizing-right-div resizing-right-div-1">
            <img
              src="@/assets/images/icons/tinny-arrow-left.svg"
              alt=""
            />&nbsp;&nbsp;<img
              src="@/assets/images/icons/tinny-arrow-right.svg"
              alt="Chevron"
            />
          </div>
        </div>
        <div
          id="strategyMidWeight2"
          :style="{
            width: range.midRange2.replace('%', '') + '%',
          }"
          class="position-relative mainResizeDiv"
        >
          #2
        </div>
        <input
          ref="midRangeInput"
          type="range"
          min="0"
          max="100"
          value="50"
          id="midRange"
          class="strategy-range-input"
        />
      </div>
      <div
        class="mid-sw-inputs d-flex align-items-center justify-content-between w-100 w-max-427 mt-3"
      >
        <div
          id="swInputDivMid1"
          class="sw-input-div d-flex justify-content-center"
        >
          <input
            ref="swInputMid1"
            v-model="range.midRange1"
            type="text"
            class="form-control range-input"
            id="strateg_weight_mid_1"
          />
        </div>
        <div
          id="swInputDivMid2"
          class="sw-input-div d-flex justify-content-center"
        >
          <input
            ref="swInputMid2"
            v-model="range.midRange2"
            type="text"
            class="form-control range-input"
            id="strateg_weight_mid_2"
          />
        </div>
      </div>
    </div>
    <p class="strategyErrorPara d-none">Sum of all weights must equal 100%.</p>
  </div>
</template>
<script>
export default {
  props: ["ratio", "visible"],
  data() {
    return {
      range: {
        midRange1: "50.00%",
        midRange2: "50.00%",
      },
    };
  },
  methods: {
    getRange: function () {
      return [this.range.midRange1, this.range.midRange2, "0%"];
    },
    setRange: function (weight_1 = "50%", weight_2 = "50%") {
      this.range.midRange1 = `${weight_1}%`;
      this.range.midRange2 = `${weight_2}%`;
    },
  },
  watch: {
    "$props.ratio"(e) {
      if (e) {
        this.setRange(e.weight_1, e.weight_2); // set range inputs value 
      }
    },
  },
  mounted() {
    // straight weight range for tab 1
    this.$refs.midRangeInput.addEventListener("input", (e) => {
      this.range.midRange1 = Number(e.target.value).toFixed(2) + "%";
      this.range.midRange2 = (100 - Number(e.target.value)).toFixed(2) + "%";
    });

    this.$refs.swInputMid1.addEventListener("focus", (e) => {
      this.range.midRange1 = e.target.value.replace("%", "");
    });

    this.$refs.swInputMid1.addEventListener("blur", (e) => {
      if (e.target.value) {
        this.range.midRange1 =
          Number(e.target.value.replace("%", "")).toFixed(2) + "%";
      } else {
        this.range.midRange1 = "0%";
      }
    });

    this.$refs.swInputMid1.addEventListener("input", (e) => {
      var text = e.target.value.replace("%", "").trim();
      var value = Number(text);
      var str = Number(text).toString();
      if (!isNaN(value)) {
        if (Number(value) > 100) {
          this.range.midRange1 = str.slice(0, str.length - 1).toString();
        } else {
          this.range.midRange2 = (100 - value).toFixed(2).toString() + "%";
        }
      } else {
        this.range.midRange1 = "0%";
        this.range.midRange2 = "100%";
      }
    });
    this.$refs.swInputMid2.addEventListener("focus", (e) => {
      this.range.midRange2 = e.target.value.replace("%", "");
    });

    this.$refs.swInputMid2.addEventListener("blur", (e) => {
      if (e.target.value) {
        this.range.midRange2 =
          Number(e.target.value.replace("%", "")).toFixed(2) + "%";
      } else {
        this.range.midRange2 = "0%";
      }
    });

    this.$refs.swInputMid2.addEventListener("input", (e) => {
      var text = e.target.value.replace("%", "");
      var value = Number(text);
      var str = Number(text).toString();
      if (!isNaN(value)) {
        if (Number(value) > 100) {
          this.range.midRange2 = str.slice(0, str.length - 1).toString();
        } else {
          this.range.midRange1 = (100 - value).toFixed(2).toString() + "%";
        }
      } else {
        this.range.midRange1 = "100%";
        this.range.midRange2 = "0%";
      }
    });
  },
};
</script>
<style lang=""></style>
