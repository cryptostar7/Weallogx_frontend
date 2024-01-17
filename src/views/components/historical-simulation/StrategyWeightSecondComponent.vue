<template lang="">
  <div :class="`${$props.visible ? '' : 'd-none'}`">
    <p class="strategyWeightPara">Strategy Weight</p>
    <div
      :class="`d-flex align-items-center flex-column justify-content-center`"
    >
      <div id="strategyWeight" class="strategyWeight d-flex">
        <div ref="strategyWeight1" class="mainResizeDiv position-relative">
          #1
        </div>
        <div ref="strategyWeight2" class="position-relative mainResizeDiv">
          #2
        </div>
        <div ref="strategyWeight3" class="mainResizeDiv position-relative">
          #3
        </div>
        <div id="resizingDiv1" style="left: calc(33.33% - 21px); top: 10px;" class="resizing-left-div resizing-right-div-2 mid-white-line">
          <img
            src="@/assets/images/icons/tinny-arrow-left.svg"
            alt=""
          />&nbsp;&nbsp;<img
            src="@/assets/images/icons/tinny-arrow-right.svg"
            alt="Chevron"
          />
        </div>
        <div id="resizingDiv2" style="left: calc(66.67% - 21px); top: 10px;" class="resizing-right-div resizing-right-div-1 mid-white-line">
          <img
            src="@/assets/images/icons/tinny-arrow-left.svg"
            alt=""
          />&nbsp;&nbsp;<img
            src="@/assets/images/icons/tinny-arrow-right.svg"
            alt="Chevron"
          />
        </div>
      <!--   <input
          type="range"
          min="1"
          max="100"
          value="50"
          ref="swCustomRange1"
          class="strategy-range-input strategy-range-input-1"
        />
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          ref="swCustomRange2"
          class="strategy-range-input strategy-range-input-2"
        /> -->
      </div>
      <div
        class="d-flex align-items-center justify-content-between w-100 w-max-427 mt-3"
      >
        <div
          ref="swInputDiv1"
          class="sw-input-div d-flex justify-content-center"
        >
          <input
            ref="swInput1"
            type="text"
            class="form-control range-input"
            value="33.00%"
          />
        </div>
        <div
          ref="swInputDiv2"
          class="sw-input-div d-flex justify-content-center"
        >
          <input
            ref="swInput2"
            type="text"
            class="form-control range-input"
            value="34.00%"
          />
        </div>
        <div
          ref="swInputDiv3"
          class="sw-input-div d-flex justify-content-center"
        >
          <input
            ref="swInput3"
            type="text"
            class="form-control range-input"
            value="33.00%"
          />
        </div>
      </div>
    </div>
    <p class="strategyErrorPara d-none">
      Sum of all weights must equal 100%.
    </p>
  </div>
</template>
<script>
export default {
  props: ["ratio", "visible"],
  data() {
    return {
      pos3: 0,
      pos4: 0,
      currentSlider: null,
      leftMax: 121,
      rightMax: 264
    };
  },
  methods: {
    getRange: function () {
      return [
        this.$refs.swInput1.value,
        this.$refs.swInput2.value,
        this.$refs.swInput3.value,
      ];
    },
    setRange: function (weight_1, weight_2, weight_3) {
      // set custom range input value
      this.$refs.swInput1.value = `${weight_1}%`;
      this.$refs.swInput2.value = `${weight_2}%`;
      this.$refs.swInput3.value = `${weight_3}%`;

      // set range width
      this.$refs.strategyWeight1.style.width = `${weight_1}%`;
      this.$refs.strategyWeight2.style.width = `${weight_2}%`;
      this.$refs.strategyWeight3.style.width = `${weight_3}%`;

      // set range input max limit
      // this.$refs.swCustomRange1.max = weight_1;
      // this.$refs.swCustomRange2.max = weight_2 + weight_3;
    },
    dragMouseDown: function (e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      let elmnt = e.currentTarget;
      this.currentSlider = +elmnt.id.substr(elmnt.id.length-1, 1);
      document.onmouseup = this.closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = this.elementDrag;
    },
    elementDrag: function(e) {
      e = e || window.event;
      e.preventDefault();

      const strategyWeight1 = this.$refs.strategyWeight1;
      const strategyWeight2 = this.$refs.strategyWeight2;
      const strategyWeight3 = this.$refs.strategyWeight3;

      let elmnt = document.getElementById(`resizingDiv${this.currentSlider}`)
      let currentSlider = +elmnt.id.substr(elmnt.id.length-1, 1);
      let elmntContainer = document.getElementById("strategyWeight");
      let totalWidth = elmntContainer.offsetWidth;

      let pos1 = 0, pos2 = 0;
      
      // calculate the new cursor position:
      pos1 = this.pos3 - e.clientX;
      pos2 = this.pos4 - e.clientY;
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      let actualWidth = totalWidth - elmnt.offsetWidth;
      let widHalf = elmnt.offsetWidth / 2;

      // Drag the element only left and right
      elmnt.style.top = "10px"; // fixed value for vertical position;

      if(this.currentSlider == 1){
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        this.leftMax = (elmnt.offsetLeft - pos1);

        let percentVal = +(elmnt.offsetLeft / actualWidth * 100).toFixed(0);

        if(percentVal > -0.1 && percentVal <= (100 - +this.$refs.swInput3.value.split("%")[0])){
          this.$refs.swInput1.value = percentVal.toFixed(2) + "%"; 
        }
        this.$refs.swInput2.value = (100 - this.$refs.swInput1.value.split("%")[0] - this.$refs.swInput3.value.split("%")[0]).toFixed(2) + "%";

        strategyWeight1.style.width = percentVal.toFixed(2) + "%";
        strategyWeight2.style.width = this.$refs.swInput2.value.split("%")[0] + "%";
        strategyWeight3.style.width = this.$refs.swInput3.value.split("%")[0] + "%";
        
        let currentOffset = (totalWidth * (100 - +this.$refs.swInput3.value.split("%")[0]) / 100) - widHalf;
        
        if(elmnt.offsetLeft >= this.rightMax){
          elmnt.style.left = this.rightMax + "px";
        }else if(elmnt.offsetLeft < 0){
          elmnt.style.left = 0 + "px";
        }
      }else{
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        this.rightMax = (elmnt.offsetLeft - pos1);

        let percentVal = +((actualWidth - elmnt.offsetLeft) / actualWidth * 100).toFixed(0);
        if(percentVal > -0.1 && percentVal <= (100 - this.$refs.swInput1.value.split("%")[0])){
          this.$refs.swInput3.value = percentVal.toFixed(2) + "%";
        }
        this.$refs.swInput2.value = (100 - this.$refs.swInput1.value.split("%")[0] - this.$refs.swInput3.value.split("%")[0]).toFixed(2) + "%";

        strategyWeight1.style.width = this.$refs.swInput1.value.split("%")[0] + "%";
        strategyWeight2.style.width = this.$refs.swInput2.value.split("%")[0] + "%";
        strategyWeight3.style.width = percentVal.toFixed(2) + "%";

        if(elmnt.offsetLeft >= actualWidth){
          elmnt.style.left = actualWidth + "px";
        }else if(elmnt.offsetLeft <= this.leftMax){
          elmnt.style.left = this.leftMax + "px";
        }else if(elmnt.offsetLeft <= 0){
          elmnt.style.left = 0 + "px";
        }
      }      
    },
    closeDragElement: function(){
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  },
  watch: {
    "$props.ratio"(e) {
      if (e) {
        this.setRange(e.weight_1, e.weight_2, e.weight_3); // set range inputs value
      }
    },
  },
  mounted() {
    // Strategy Range for tab 3
    const swInput1 = this.$refs.swInput1;
    const swInput2 = this.$refs.swInput2;
    const swInput3 = this.$refs.swInput3;
    const swInputDiv1 = this.$refs.swInputDiv1;
    const swInputDiv2 = this.$refs.swInputDiv2;
    const swInputDiv3 = this.$refs.swInputDiv3;
    // const swCustomRange1 = this.$refs.swCustomRange1;
    // const swCustomRange2 = this.$refs.swCustomRange2;
    const strategyWeight1 = this.$refs.strategyWeight1;
    const strategyWeight2 = this.$refs.strategyWeight2;
    const strategyWeight3 = this.$refs.strategyWeight3;

    const resizingDiv1 = document.getElementById("resizingDiv1");
    const resizingDiv2 = document.getElementById("resizingDiv2");
    resizingDiv1.addEventListener("mousedown", this.dragMouseDown);
    resizingDiv2.addEventListener("mousedown", this.dragMouseDown);
    let wid = resizingDiv1.offsetWidth;
    let widHalf = wid / 2;

    window.onresize = () => {
      let totalWidth = document.getElementById("strategyWeightMid").offsetWidth;
      resizingDiv1.style.left = (totalWidth / 3 - widHalf) + "px";
      resizingDiv2.style.left = (totalWidth *  2 / 3 - widHalf) + "px";
    }

    // swCustomRange1.addEventListener("input", (e) => {
    //   let total2 = 100 - (+swInput3.value.split("%")[0]).toFixed(2);
    //   swCustomRange1.max = total2;

    //   swInput1.value = (+e.target.value).toFixed(2) + "%";
    //   swInput2.value =
    //     (total2 - +swInput1.value.split("%")[0]).toFixed(2) + "%";

    //   strategyWeight1.style.width = (+e.target.value).toFixed(2) + "%";
    //   strategyWeight2.style.width =
    //     (total2 - +swInput1.value.split("%")[0]).toFixed(2) + "%";
    //   strategyWeight3.style.width =
    //     (+swInput3.value.split("%")[0]).toFixed(2) + "%";

    //   swInputDiv1.style.width = (+e.target.value).toFixed(2) + "%";
    //   swInputDiv2.style.width =
    //     (total2 - +swInput1.value.split("%")[0]).toFixed(2) + "%";
    //   swInputDiv3.style.width =
    //     (+swInput3.value.split("%")[0]).toFixed(2) + "%";

    //   e.target.style.width = `calc(${
    //     100 - (+swInput3.value.split("%")[0]).toFixed(2)
    //   }% - 20px)`;
    // });

    // swCustomRange2.addEventListener("input", (e) => {
    //   let total2 = 100 - (+swInput1.value.split("%")[0]).toFixed(2);
    //   swCustomRange2.max = total2;

    //   swInput2.value = (+e.target.value).toFixed(2) + "%";
    //   swInput3.value =
    //     (total2 - +swInput2.value.split("%")[0]).toFixed(2) + "%";

    //   strategyWeight1.style.width =
    //     (+swInput1.value.split("%")[0]).toFixed(2) + "%";
    //   strategyWeight2.style.width = (+e.target.value).toFixed(2) + "%";
    //   strategyWeight3.style.width =
    //     (total2 - +swInput2.value.split("%")[0]).toFixed(2) + "%";

    //   swInputDiv1.style.width =
    //     (+swInput1.value.split("%")[0]).toFixed(2) + "%";
    //   swInputDiv2.style.width = (+e.target.value).toFixed(2) + "%";
    //   swInputDiv3.style.width =
    //     (total2 - +swInput2.value.split("%")[0]).toFixed(2) + "%";

    //   e.target.style.width = `calc(${
    //     100 - (+swInput1.value.split("%")[0]).toFixed(2)
    //   }% - 20px`;
    // });

    // remove % from first input value
    swInput1.addEventListener("focus", (e) => {
      let targetVal = Number(e.target.value.split("%")[0]);
      e.target.value = targetVal;
    });

    // add % to first input value
    swInput1.addEventListener("blur", (e) => {
      let targetVal = Number(e.target.value.split("%")[0]).toFixed(2);
      e.target.value = targetVal + "%";
    });

    // First input
    swInput1.addEventListener("input", (e) => {
      let elmnt1 = document.getElementById(`resizingDiv1`);
      let elmnt2 = document.getElementById(`resizingDiv2`);
      let elmntContainer = document.getElementById("strategyWeight");
      let actualWidth = elmntContainer.offsetWidth - wid;

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

      // swCustomRange1.max = total;
      e.target.value = val;

      let tempInp2 = total - numVal;
      if (tempInp2 < 0) {
        swInput3.value = (inp3 + tempInp2).toFixed(2) + "%";
        inp3 = Number(swInput3.value.split("%")[0]);
        // swCustomRange2.max = 100 - numVal;
        tempInp2 = 0;
      }

      swInput2.value = tempInp2.toFixed(2) + "%";

      strategyWeight1.style.width = numVal.toFixed(2) + "%";
      strategyWeight2.style.width = tempInp2.toFixed(2) + "%";
      strategyWeight3.style.width = inp3.toFixed(2) + "%";
      elmnt1.style.left = (actualWidth * val / 100) + "px";
      elmnt2.style.left = (actualWidth * (100 - inp3) / 100) + "px";

      // swInputDiv1.style.width = numVal.toFixed(2) + "%";
      // swInputDiv2.style.width = tempInp2.toFixed(2) + "%";
      // swInputDiv3.style.width = inp3.toFixed(2) + "%";

      // swCustomRange1.max = 100 - inp3;
      // swCustomRange1.style.width = `calc(${100 - inp3.toFixed(2)}% - 20px)`;
    });

    // remove % from first input value
    swInput2.addEventListener("focus", (e) => {
      let targetVal = Number(e.target.value.split("%")[0]);
      e.target.value = targetVal;
    });

    // add % to first input value
    swInput2.addEventListener("blur", (e) => {
      let targetVal = Number(e.target.value.split("%")[0]).toFixed(2);
      e.target.value = targetVal + "%";
    });

    // Second input
    swInput2.addEventListener("input", (e) => {
      let elmnt1 = document.getElementById(`resizingDiv1`);
      let elmnt2 = document.getElementById(`resizingDiv2`);
      let elmntContainer = document.getElementById("strategyWeight");
      let actualWidth = elmntContainer.offsetWidth - wid;

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
      // swCustomRange2.max = 100 - inp1;
      // swCustomRange1.max = 100 - inp3;

      strategyWeight1.style.width = inp1.toFixed(2) + "%";
      strategyWeight2.style.width = numVal.toFixed(2) + "%";
      strategyWeight3.style.width = inp3.toFixed(2) + "%";
      elmnt1.style.left = (actualWidth * inp1.toFixed(2) / 100) + "px";
      elmnt2.style.left = (actualWidth * (100 - inp3) / 100) + "px";
      
      // swInputDiv1.style.width = inp1.toFixed(2) + "%";
      // swInputDiv2.style.width = numVal.toFixed(2) + "%";
      // swInputDiv3.style.width = inp3.toFixed(2) + "%";

      // swCustomRange1.style.width = `calc(${(100 - inp3).toFixed(2)}% - 20px)`;
      // swCustomRange2.style.width = `calc(${(100 - inp1).toFixed(2)}% - 20px)`;
    });

    // remove % from first input value
    swInput3.addEventListener("focus", (e) => {
      let targetVal = Number(e.target.value.split("%")[0]);
      e.target.value = targetVal;
    });

    // add % to first input value
    swInput3.addEventListener("blur", (e) => {
      let targetVal = Number(e.target.value.split("%")[0]).toFixed(2);
      e.target.value = targetVal + "%";
    });

    // 3rd input
    swInput3.addEventListener("input", (e) => {
      let elmnt1 = document.getElementById(`resizingDiv1`);
      let elmnt2 = document.getElementById(`resizingDiv2`);
      let elmntContainer = document.getElementById("strategyWeight");
      let actualWidth = elmntContainer.offsetWidth - wid;

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
        // swCustomRange1.max = 100 - numVal;
        tempInp2 = 0;
      }

      swInput2.value = tempInp2.toFixed(2) + "%";
      strategyWeight1.style.width = inp1.toFixed(2) + "%";
      strategyWeight2.style.width = tempInp2.toFixed(2) + "%";
      strategyWeight3.style.width = numVal.toFixed(2) + "%";
      elmnt1.style.left = (actualWidth * inp1 / 100) + "px";
      elmnt2.style.left = (actualWidth * (100 - val) / 100) + "px";
      // swInputDiv1.style.width = inp1.toFixed(2) + "%";
      // swInputDiv2.style.width = tempInp2.toFixed(2) + "%";
      // swInputDiv3.style.width = numVal.toFixed(2) + "%";

      // swCustomRange2.max = 100 - inp1;
      // swCustomRange2.style.width = `calc(${100 - inp1.toFixed(2)}% - 20px)`;
    });
  },
};
</script>
<style lang=""></style>
