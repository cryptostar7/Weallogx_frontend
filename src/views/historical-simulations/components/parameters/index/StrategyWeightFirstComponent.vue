<template lang="">
  <div :class="`${$props.visible ? '' : 'd-none'}`">
    <p class="strategyWeightPara">Strategy Weight</p>
    <div
      :class="`d-flex align-items-center flex-column justify-content-center`"
    >
      <div id="strategyWeightMid" class="strategyWeight mid d-flex 123">
        <div
          id="strategyMidWeight1"
          :style="{
            width: range.midRange1.replace('%', '') + '%',
          }"
          class="mainResizeDiv position-relative"
        >
          #1
        </div>
        <div
          id="resizingDiv"
          style="left: calc(50% - 21px); top: 10px"
          class="resizing-right-div resizing-right-div-1 mid-white-line"
        >
          <img
            src="@/assets/images/icons/tinny-arrow-left.svg"
            alt=""
          />&nbsp;&nbsp;<img
            src="@/assets/images/icons/tinny-arrow-right.svg"
            alt="Chevron"
          />
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
      pos3: 0,
      pos4: 0,
      wid: 0,
    };
  },
  methods: {
    getRange: function () {
      return [this.range.midRange1, this.range.midRange2, "0%"];
    },
    setRange: function (weight_1 = "50%", weight_2 = "50%") {
      this.range.midRange1 = `${weight_1}%`;
      this.range.midRange2 = `${weight_2}%`;

      this.updateSliderOnMount(weight_1);
    },
    updateSliderOnMount: function (weight_1) {
      setTimeout(() => {
        let elmnt = document.getElementById(`resizingDiv`);
        let elmntContainer = document.getElementById("strategyWeightMid");
        let totalWidth = elmntContainer.offsetWidth || 427;
        let actualWidth = totalWidth - elmnt.offsetWidth || 385;

        elmnt.style.left = ((actualWidth * weight_1) / 100).toFixed(0) + "px";
      }, 1000);
    },
    dragMouseDown: function (e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      document.onmouseup = this.closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = this.elementDrag;
    },
    elementDrag: function (e) {
      let elmnt = document.getElementById("resizingDiv");
      let elmntContainer = document.getElementById("strategyWeightMid");
      let totalWidth = elmntContainer.offsetWidth;
      e = e || window.event;
      e.preventDefault();
      let pos1 = 0,
        pos2 = 0;

      // calculate the new cursor position:
      pos1 = this.pos3 - e.clientX;
      pos2 = this.pos4 - e.clientY;
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      let actualWidth = totalWidth - 42;

      // Drag the element only left and right
      elmnt.style.top = "10px"; // fixed value for vertical position
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";

      let percentVal = +((elmnt.offsetLeft / actualWidth) * 100).toFixed(0);
      if (percentVal > -0.1) {
        this.range.midRange1 = percentVal.toFixed(2) + "%";
      }
      this.range.midRange2 = (100 - percentVal).toFixed(2) + "%";

      if (elmnt.offsetLeft > actualWidth) {
        elmnt.style.left = actualWidth + "px";
      } else if (elmnt.offsetLeft < 0) {
        elmnt.style.left = 0 + "px";
      }
    },
    closeDragElement: function () {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
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
    const resizingDiv = document.getElementById("resizingDiv");
    resizingDiv.addEventListener("mousedown", this.dragMouseDown);
    this.wid = resizingDiv.offsetWidth;
    let widHalf = this.wid / 2;

    window.onresize = () => {
      if (document.getElementById("strategyWeightMid")) {
        let totalWidth =
          document.getElementById("strategyWeightMid").offsetWidth;
        resizingDiv.style.left = totalWidth / 2 - widHalf + "px";
      }
    };

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

      let totalWidth = document.getElementById("strategyWeightMid").offsetWidth;
      const resizingDiv = document.getElementById("resizingDiv");
      let actualWidth = totalWidth - this.wid;

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
      if (value <= 100) {
        resizingDiv.style.left =
          ((actualWidth * value) / 100).toFixed(2) + "px";
      } else {
        resizingDiv.style.left =
          ((actualWidth * value) / 1000).toFixed(2) + "px";
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

      let totalWidth = document.getElementById("strategyWeightMid").offsetWidth;
      const resizingDiv = document.getElementById("resizingDiv");
      let actualWidth = totalWidth - this.wid;

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
      if (value <= 100) {
        resizingDiv.style.left =
          ((actualWidth * (100 - value)) / 100).toFixed(2) + "px";
      } else {
        resizingDiv.style.left =
          ((actualWidth * (100 - value / 10)) / 100).toFixed(2) + "px";
      }
    });
  },
};
</script>
<style lang=""></style>
