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
      <input id="swInput1" type="text" class="form-control range-input" />
    </div>
    <div id="swInputDiv2" class="sw-input-div d-flex justify-content-center">
      <input id="swInput2" type="text" class="form-control range-input" />
    </div>
    <div id="swInputDiv3" class="sw-input-div d-flex justify-content-center">
      <input id="swInput3" type="text" class="form-control range-input" />
    </div>
  </div>
</div>
<p class="strategyErrorPara">
  Sum of all weights must equal 100%.
</p>
</template>
<script>
export default {
  mounted:{
    strategyWeight1(){

    }
  }
}
</script>