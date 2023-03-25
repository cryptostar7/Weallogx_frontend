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
      <input id="swInput1" type="text" class="form-control range-input"  value="33.00%" />
    </div>
    <div id="swInputDiv2" class="sw-input-div d-flex justify-content-center">
      <input id="swInput2" type="text" class="form-control range-input" value="34.00%" />
    </div>
    <div id="swInputDiv3" class="sw-input-div d-flex justify-content-center">
      <input id="swInput3" type="text" class="form-control range-input" value="33.00%" />
    </div>
  </div>
</div>
<p class="strategyErrorPara">
  Sum of all weights must equal 100%.
</p>
</template>
<script>
export default {
  props:["ratio"],
  data() {
    return {
      range2: {
        sw_range1: 50,
        sw_range2: 50,
        midRange1: "33.33",
        midRange2: "33.33",
        midRange3: "33.33",
      },
    };
  },
    watch: {
    "$props.ratio"(e) {
      if (e) {
        console.log(e);
        console.log('updated ratio...');
        document.getElementById('swInput1').value = `${e.weight_1}%`;
        document.getElementById('swInput2').value = `${e.weight_2}%`;
        document.getElementById('swInput3').value = `${e.weight_2}%`;
      }
    },
  },
  mounted() {
    // Strategy Range for tab 3
    const swInput1 = document.getElementById("swInput1");
    const swInput2 = document.getElementById("swInput2");
    const swInput3 = document.getElementById("swInput3");

    const exampleRange1 = document.getElementById("exampleRange1");
    const exampleRange2 = document.getElementById("exampleRange2");

    exampleRange1.addEventListener("input", e => {
      let total2 = 100 - (+swInput3.value.split("%")[0]).toFixed(2);
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

      e.target.style.width = `calc(${100 -
        (+swInput3.value.split("%")[0]).toFixed(2)}% - 20px)`;
    });

    exampleRange2.addEventListener("input", e => {
      let total2 = 100 - (+swInput1.value.split("%")[0]).toFixed(2);
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

      e.target.style.width = `calc(${100 -
        (+swInput1.value.split("%")[0]).toFixed(2)}% - 20px`;
    });

    // remove % from first input value
    swInput1.addEventListener("focus", e => {
      let targetVal = Number(e.target.value.split("%")[0]);
      e.target.value = targetVal;
    });

    // add % to first input value
    swInput1.addEventListener("blur", e => {
      let targetVal = Number(e.target.value.split("%")[0]).toFixed(2);
      e.target.value = targetVal + "%";
    });

    // First input
    swInput1.addEventListener("input", e => {
      let val = e.target.value.split("%")[0];
      let numVal = Number(val);
      let inp3 = Number(swInput3.value.split("%")[0]);
      let total = 100 - inp3;

      if (!isNaN(numVal)) {
        if (Number(numVal) > 100) {
          val = val.slice(0, val.length - 1).toString();
          numVal = Number(val);
        }
      } else {
        val = "0";
        numVal = 0;
      }

      exampleRange1.max = total;
      e.target.value = val;

      let tempInp2 = total - numVal;
      if (tempInp2 < 0) {
        swInput3.value = (inp3 + tempInp2).toFixed(2) + "%";
        inp3 = Number(swInput3.value.split("%")[0]);
        exampleRange2.max = 100 - numVal;
        tempInp2 = 0;
      }

      swInput2.value = tempInp2.toFixed(2);

      strategyWeight1.style.width = numVal.toFixed(2) + "%";
      strategyWeight2.style.width = tempInp2.toFixed(2) + "%";
      strategyWeight3.style.width = inp3.toFixed(2) + "%";

      swInputDiv1.style.width = numVal.toFixed(2) + "%";
      swInputDiv2.style.width = tempInp2.toFixed(2) + "%";
      swInputDiv3.style.width = inp3.toFixed(2) + "%";

      exampleRange1.max = 100 - inp3;
      exampleRange1.style.width = `calc(${100 - inp3.toFixed(2)}% - 20px)`;
    });

    // remove % from first input value
    swInput2.addEventListener("focus", e => {
      let targetVal = Number(e.target.value.split("%")[0]);
      e.target.value = targetVal;
    });

    // add % to first input value
    swInput2.addEventListener("blur", e => {
      let targetVal = Number(e.target.value.split("%")[0]).toFixed(2);
      e.target.value = targetVal + "%";
    });

    // Second input
    swInput2.addEventListener("input", e => {
      let val = e.target.value.split("%")[0];
      let numVal = Number(val);

      // let total = 100 - inp1;

      if (!isNaN(numVal)) {
        if (Number(numVal) > 100) {
          val = val.slice(0, val.length - 1).toString();
          numVal = Number(val);
        }
      } else {
        val = "0";
        numVal = 0;
      }

      let remainingVal = (100 - numVal) / 2;
      let inp1 = remainingVal;
      let inp3 = remainingVal;

      swInput1.value = inp1.toFixed(2) + "%";
      swInput3.value = inp3.toFixed(2) + "%";

      e.target.value = val;
      exampleRange2.max = 100 - inp1;
      exampleRange1.max = 100 - inp3;

      strategyWeight1.style.width = inp1.toFixed(2) + "%";
      strategyWeight2.style.width = numVal.toFixed(2) + "%";
      strategyWeight3.style.width = inp3.toFixed(2) + "%";

      swInputDiv1.style.width = inp1.toFixed(2) + "%";
      swInputDiv2.style.width = numVal.toFixed(2) + "%";
      swInputDiv3.style.width = inp3.toFixed(2) + "%";

      exampleRange1.style.width = `calc(${(100 - inp3).toFixed(2)}% - 20px)`;
      exampleRange2.style.width = `calc(${(100 - inp1).toFixed(2)}% - 20px)`;
    });

    // remove % from first input value
    swInput3.addEventListener("focus", e => {
      let targetVal = Number(e.target.value.split("%")[0]);
      e.target.value = targetVal;
    });

    // add % to first input value
    swInput3.addEventListener("blur", e => {
      let targetVal = Number(e.target.value.split("%")[0]).toFixed(2);
      e.target.value = targetVal + "%";
    });

    // 3rd input
    swInput3.addEventListener("input", e => {
      let val = e.target.value.split("%")[0];
      let numVal = Number(val);
      let inp1 = Number(swInput1.value.split("%")[0]);
      let total = 100 - inp1;

      if (!isNaN(numVal)) {
        if (Number(numVal) > 100) {
          val = val.slice(0, val.length - 1).toString();
          numVal = Number(val);
        }
      } else {
        val = "0";
        numVal = 0;
      }

      e.target.value = val;
      let tempInp2 = total - numVal;
      if (tempInp2 < 0) {
        swInput1.value = (inp1 + tempInp2).toFixed(2) + "%";
        inp1 = Number(swInput1.value.split("%")[0]);
        exampleRange1.max = 100 - numVal;
        tempInp2 = 0;
      }

      swInput2.value = tempInp2.toFixed(2) + "%";
      strategyWeight1.style.width = inp1.toFixed(2) + "%";
      strategyWeight2.style.width = tempInp2.toFixed(2) + "%";
      strategyWeight3.style.width = numVal.toFixed(2) + "%";

      swInputDiv1.style.width = inp1.toFixed(2) + "%";
      swInputDiv2.style.width = tempInp2.toFixed(2) + "%";
      swInputDiv3.style.width = numVal.toFixed(2) + "%";

      exampleRange2.max = 100 - inp1;
      exampleRange2.style.width = `calc(${100 - inp1.toFixed(2)}% - 20px)`;
    });
  },
};
</script>
<style lang="">
</style>