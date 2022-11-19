<template lang="">
<p class="strategyWeightPara">Strategy Weight</p>
<div class="
    d-flex
    align-items-center
    flex-column
    justify-content-center
  ">
  <div class="strategyWeight d-flex">
    <div id="strategyWeight1" class="mainResizeDiv position-relative">
      #1
    </div>
    <div id="strategyWeight2" class="position-relative mainResizeDiv">
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
    <div id="strategyWeight3" class="mainResizeDiv position-relative">
      #3
    </div>
    <input type="range" min="1" max="100" value="50" id="exampleRange1"
      class="strategy-range-input strategy-range-input-1" />
    <input type="range" min="1" max="100" value="50" id="exampleRange2"
      class="strategy-range-input strategy-range-input-2" />
  </div>
  <div class="
      d-flex
      align-items-center
      justify-content-between
      w-100 w-max-427
      mt-3
    ">
    <div id="swInputDiv1" class="sw-input-div d-flex justify-content-center">
      <input id="swInput1" type="text" class="form-control range-input" v-model="range2.midRange1" />
    </div>
    <div id="swInputDiv2" class="sw-input-div d-flex justify-content-center">
      <input id="swInput2" type="text" class="form-control range-input" v-model="range2.midRange2" />
    </div>
    <div id="swInputDiv3" class="sw-input-div d-flex justify-content-center">
      <input id="swInput3" type="text" class="form-control range-input" v-model="range2.midRange3" />
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
      range2: {
        sw_range1: 50,
        sw_range2: 50,
        midRange1: "33.33%",
        midRange2: "33.33%",
        midRange3: "33.33%",
      },
    };
  },
  mounted() {
    // Strategy Range for tab 3
    const swInput1 = document.getElementById("swInput1");
    const swInput2 = document.getElementById("swInput2");
    const swInput3 = document.getElementById("swInput3");

    const exampleRange1 = document.getElementById("exampleRange1");
    const exampleRange2 = document.getElementById("exampleRange2");

    exampleRange1.addEventListener("input", (e) => {
      let total = 100;
      let total2 = total - (+swInput3.value.split("%")[0]).toFixed(2);
      exampleRange1.max = total2;

      swInput1.value = (+e.target.value).toFixed(2) + "%";
      swInput2.value =
        (total2 - +swInput1.value.split("%")[0]).toFixed(2) + "%";

      strategyWeight1.style.width = (+e.target.value).toFixed(2) + "%";
      strategyWeight2.style.width =
        (total2 - +swInput1.value.split("%")[0]).toFixed(2) + "%";
      strategyWeight3.style.width =
        (+swInput3.value.split("%")[0]).toFixed(2) + "%";

      swInputDiv1.style.width = (+e.target.value).toFixed(2) + "%";
      swInputDiv2.style.width =
        (total2 - +swInput1.value.split("%")[0]).toFixed(2) + "%";
      swInputDiv3.style.width =
        (+swInput3.value.split("%")[0]).toFixed(2) + "%";

      e.target.style.width = `calc(${
        total - (+swInput3.value.split("%")[0]).toFixed(2)
      }% - 20px)`;
    });

    exampleRange2.addEventListener("input", (e) => {
      let total = 100;
      let total2 = total - (+swInput1.value.split("%")[0]).toFixed(2);
      exampleRange2.max = total2;

      swInput2.value = (+e.target.value).toFixed(2) + "%";
      swInput3.value =
        (total2 - +swInput2.value.split("%")[0]).toFixed(2) + "%";

      strategyWeight1.style.width =
        (+swInput1.value.split("%")[0]).toFixed(2) + "%";
      strategyWeight2.style.width = (+e.target.value).toFixed(2) + "%";
      strategyWeight3.style.width =
        (total2 - +swInput2.value.split("%")[0]).toFixed(2) + "%";

      swInputDiv1.style.width =
        (+swInput1.value.split("%")[0]).toFixed(2) + "%";
      swInputDiv2.style.width = (+e.target.value).toFixed(2) + "%";
      swInputDiv3.style.width =
        (total2 - +swInput2.value.split("%")[0]).toFixed(2) + "%";

      e.target.style.width = `calc(${
        total - (+swInput1.value.split("%")[0]).toFixed(2)
      }% - 20px`;
    });

    swInput1.addEventListener("input", (e) => {
      let targetVal = +e.target.value.split("%")[0];

      setTimeout(() => {
        if (targetVal > 100) {
          e.target.value = (targetVal / 10).toFixed(2) + "%";
        }
      }, 500);

      let total = 100;
      let total2 = total - (+swInput3.value.split("%")[0]).toFixed(2);
      exampleRange1.max = total2;

      e.target.value = targetVal.toFixed(2) + "%";
      swInput2.value = (total2 - targetVal).toFixed(2) + "%";

      strategyWeight1.style.width = targetVal.toFixed(2) + "%";
      strategyWeight2.style.width = (total2 - targetVal).toFixed(2) + "%";
      strategyWeight3.style.width =
        (+swInput3.value.split("%")[0]).toFixed(2) + "%";

      swInputDiv1.style.width = targetVal.toFixed(2) + "%";
      swInputDiv2.style.width = (total2 - targetVal).toFixed(2) + "%";
      swInputDiv3.style.width =
        (+swInput3.value.split("%")[0]).toFixed(2) + "%";
    });

    swInput2.addEventListener("input", (e) => {
      let targetVal = +e.target.value.split("%")[0];

      setTimeout(() => {
        if (targetVal > 100) {
          e.target.value = (targetVal / 10).toFixed(2) + "%";
        }
      }, 500);

      let total = 100;
      let total2 = total - (+swInput1.value.split("%")[0]).toFixed(2);
      exampleRange2.max = total2;

      e.target.value = targetVal.toFixed(2) + "%";
      swInput3.value = (total2 - targetVal).toFixed(2) + "%";

      strategyWeight1.style.width =
        (+swInput1.value.split("%")[0]).toFixed(2) + "%";
      strategyWeight2.style.width = targetVal.toFixed(2) + "%";
      strategyWeight3.style.width = (total2 - targetVal).toFixed(2) + "%";

      swInputDiv1.style.width =
        (+swInput1.value.split("%")[0]).toFixed(2) + "%";
      swInputDiv2.style.width = targetVal.toFixed(2) + "%";
      swInputDiv3.style.width = (total2 - targetVal).toFixed(2) + "%";
    });

    swInput3.addEventListener("input", (e) => {
      let targetVal = +e.target.value.split("%")[0];

      setTimeout(() => {
        if (targetVal > 100) {
          alert("Sorry, you are entering value out of range");
          e.target.value = (targetVal / 10).toFixed(2) + "%";
        }
      }, 500);

      let total = 100;
      let total2 = total - (+swInput1.value.split("%")[0]).toFixed(2);
      exampleRange2.max = total2;

      e.target.value = targetVal.toFixed(2) + "%";
      swInput2.value = (total2 - targetVal).toFixed(2) + "%";

      strategyWeight1.style.width =
        (+swInput1.value.split("%")[0]).toFixed(2) + "%";
      strategyWeight2.style.width = (total2 - targetVal).toFixed(2) + "%";
      strategyWeight3.style.width = targetVal.toFixed(2) + "%";

      swInputDiv1.style.width =
        (+swInput1.value.split("%")[0]).toFixed(2) + "%";
      swInputDiv2.style.width = (total2 - targetVal).toFixed(2) + "%";
      swInputDiv3.style.width = targetVal.toFixed(2) + "%";
    });
  },
};
</script>
<style lang="">
</style>