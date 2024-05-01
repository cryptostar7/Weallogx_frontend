<template lang="">
  <div
    ref="sliderMainRef"
    :class="`slider_main split p-relative ${
      $props.sliderType === 'result' ? 'retirement_slider' : ''
    } ${$props.disabled ? 'disabled' : ''} `"
  >
    <div ref="splitLeftRef" class="split_left">
      <span ref="leftSpanRef" class="left_span">50</span>%
    </div>
    <div ref="splitBarRef" :class="`split_bar ${marketAlone ? 'disable' : ''}`">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
      >
        <rect
          width="6.58344"
          height="1.88288"
          rx="0.941442"
          transform="matrix(-0.707042 -0.707171 0.707043 -0.70717 4.67578 9.70801)"
          fill="white"
        />
        <rect
          width="6.58479"
          height="1.88055"
          rx="0.940273"
          transform="matrix(0.706849 -0.707364 0.706848 0.707365 0.0117188 4.948)"
          fill="white"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
      >
        <rect
          width="6.58344"
          height="1.88288"
          rx="0.941442"
          transform="matrix(0.706848 0.707365 -0.706849 0.707365 1.32617 0)"
          fill="white"
        />
        <rect
          width="6.58479"
          height="1.88055"
          rx="0.940273"
          transform="matrix(-0.706849 0.707365 -0.706848 -0.707365 5.99023 4.76001)"
          fill="white"
        />
      </svg>

      <!-- </div> -->
    </div>
    <div ref="splitRightRef" class="split_right">
      <span ref="rightSpanRef" class="right_span">50</span>%
    </div>
  </div>
</template>
<script>
import { post } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader } from "../../../services/helper";

export default {
  props: ["disabled", "sliderType"],
  data() {
    return {
      totalWidth: 0,
    };
  },
  mounted() {
    let sliderMain = this.$refs.sliderMainRef;
    this.totalWidth = sliderMain.offsetWidth;
    let totalWidth = this.totalWidth;
    let splitBar = this.$refs.splitBarRef;
    let splitLeft = this.$refs.splitLeftRef;
    let splitRight = this.$refs.splitRightRef;
    let leftSpan = this.$refs.leftSpanRef;
    let rightSpan = this.$refs.rightSpanRef;
    let wid = splitBar.offsetWidth;
    let widHalf = wid / 2;
    splitBar.style.left = totalWidth / 2 - widHalf + "px";

    window.onresize = () => {
      if (sliderMain) {
        totalWidth = sliderMain.offsetWidth;
        splitBar.style.left =
          (totalWidth * +leftSpan.textContent) / 100 - widHalf + "px";
      }
    };

    let pos1, pos2, pos3, pos4;
    function dragElement(elmnt) {
      pos1 = 0;
      pos2 = 0;
      pos3 = 0;
      pos4 = 0;
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      if (sliderMain.classList.contains("disabled")) {
        return false;
      }
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    let emit = this.$emit;
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      if (totalWidth == 0) {
        totalWidth = sliderMain.offsetWidth;
        wid = splitBar.offsetWidth;
      }

      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      let actualWidth = totalWidth - wid;

      // Drag the element only left and right
      splitBar.style.top = "11px"; // fixed value for vertical position
      splitBar.style.left = splitBar.offsetLeft - pos1 + "px";

      let percentVal = ((splitBar.offsetLeft / actualWidth) * 100).toFixed(0);
      splitLeft.style.width = percentVal + "%";
      splitRight.style.width = 100 - percentVal + "%";

      leftSpan.textContent = percentVal;
      rightSpan.textContent = 100 - percentVal;

      if (percentVal < 15) {
        splitLeft.classList.add("left");
      } else if (percentVal > 85) {
        splitRight.classList.add("right");
      } else {
        splitLeft.classList.remove("left");
        splitRight.classList.remove("right");
      }

      emit("changeMarketValue", percentVal); // market value input update
      emit("changeBufferValue", 100 - percentVal); // buffer account value update
      emit("setBuffer", (100 - percentVal) / 100); // buffer account value update

      if (splitBar.offsetLeft > totalWidth - 42) {
        splitBar.style.left = totalWidth - 42 + "px";
      } else if (splitBar.offsetLeft < 0) {
        splitBar.style.left = 0 + "px";
      }
    }
    let updateResult = this.updateResult;
    function closeDragElement() {
      // stop moving when mouse button is released:
      updateResult(); // update the result on mouse dragged out!
      document.onmouseup = null;
      document.onmousemove = null;
    }

    dragElement(this.$refs.splitBarRef);

    var myModalEl = document.getElementById("settings");
    if (myModalEl) {
      myModalEl.addEventListener("shown.bs.modal", function (event) {
        this.totalWidth = sliderMain.offsetWidth;
        let leftOffset =
          (sliderMain.offsetWidth * Number(leftSpan.textContent)) / 100 -
          splitBar.offsetWidth / 2;
        if (leftOffset > this.totalWidth - 42 || +leftSpan.textContent > 98) {
          splitBar.style.left = this.totalWidth - 42 + "px";
          splitRight.classList.add("right");
        } else {
          splitBar.style.left = leftOffset + "px";
        }
        if (leftOffset <= 0) {
          splitBar.style.left = 0 + "px";
          splitLeft.classList.add("left");
        }
      });
    }
  },
  methods: {
    resetSlider: function () {
      this.setMarketAccountAllocation(50);
      this.setBufferAccountAllocation(50);
    },
    getBufferAccountAllocation: function () {
      return Number(this.$refs.rightSpanRef.textContent);
    },
    getMarketAccountAllocation: function () {
      return Number(this.$refs.leftSpanRef.textContent);
    },
    setBufferAccountAllocation: function (value) {
      this.$refs.rightSpanRef.textContent = value;
      this.$refs.splitRightRef.style.width = value + "%";
    },
    setMarketAccountAllocation: function (value) {
      this.$refs.leftSpanRef.textContent = value;
      this.$refs.splitLeftRef.style.width = value + "%";

      let splitLeft = this.$refs.splitLeftRef;
      let splitRight = this.$refs.splitRightRef;

      let leftOffset =
        (this.$refs.sliderMainRef.offsetWidth * value) / 100 -
        this.$refs.splitBarRef.offsetWidth / 2;
      if (leftOffset > this.totalWidth - 42) {
        this.$refs.splitBarRef.style.left = this.totalWidth - 42 + "px";
      } else if (leftOffset <= 0) {
        this.$refs.splitBarRef.style.left = 0 + "px";
      } else {
        this.$refs.splitBarRef.style.left = leftOffset + "px";
      }

      if (value < 15) {
        splitLeft.classList.add("left");
      } else if (100 - value > 85) {
        splitRight.classList.add("right");
      } else {
        splitLeft.classList.remove("left");
        splitRight.classList.remove("right");
      }
    },
    updateResult: function () {
      if (this.$props.sliderType === "result" && !this.$props.disabled) {
        this.getAccumulationResults(); // Get results from API
        this.getSimulationData(); // Get simulation data
      }
    },
    getAccumulationResults: function () {
      this.$store.dispatch("loader", true);
      let accountType = localStorage.getItem("rba_account_type");

      let endpoint = this.accountTypes.filter((i) => i.name === accountType)[0]
        .value;

      let payload = this.inputs;
      payload.buffer_account_allocation =
        this.getBufferAccountAllocation() / 100;
      post(
        `${getUrl("retirement-buffer")}${endpoint}_combined`,
        payload,
        authHeader()
      )
        .then((response) => {
          this.$store.dispatch("loader", false);
          this.$store.dispatch("retirementBufferAccumulationResults", {
            sort: payload.sort_type,
            data: response.data,
          }); // Update results in vuexy store
        })
        .catch((error) => {
          console.log(error);
          this.$store.dispatch("loader", false);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else if (error.code === "ERR_BAD_REQUEST") {
            if (error.response.data.error) {
              this.$toast.error(error.response.data.error[0]);
            } else {
              let field = Object.entries(error.response.data)[0][0];
              let message = Object.entries(error.response.data)[0][1][0];
              this.$toast.error(field + ": " + message);
            }
          } else {
            this.$toast.error(error.message);
          }
        });
    },
    getSimulationData: function () {
      this.$store.dispatch("loader", true);
      let accountType = localStorage.getItem("rba_account_type");

      let endpoint = this.accountTypes.filter((i) => i.name === accountType)[0]
        .value;

      let payload = this.inputs;
      payload.buffer_account_allocation =
        this.getBufferAccountAllocation() / 100;

      post(
        `${getUrl("retirement-buffer")}${endpoint}_simulation`,
        payload,
        authHeader()
      )
        .then((response) => {
          this.$store.dispatch("loader", false);

          this.$store.dispatch("retirementBufferAccumulationSimulations", {
            sort: true,
            data: response.data,
          }); // Update results in vuexy store
        })
        .catch((error) => {
          console.log(error);
          this.$store.dispatch("loader", false);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else if (error.code === "ERR_BAD_REQUEST") {
            if (error.response.data.error) {
              this.$toast.error(error.response.data.error[0]);
            } else {
              let field = Object.entries(error.response.data)[0][0];
              let message = Object.entries(error.response.data)[0][1][0];
              this.$toast.error(field + ": " + message);
            }
          } else {
            this.$toast.error(error.message);
          }
        });
    },
  },
  computed: {
    accountTypes() {
      return [
        { value: "taxable", name: "Taxable" },
        { value: "pre_tax", name: "Pre-tax" },
      ];
    },
    inputs() {
      return this.$store.state.data.retirement_buffer.auccumulation_results
        .inputs;
    },
    marketAlone() {
      return this.$store.state.data.retirement_buffer.market_alone;
    },
  },
  watch: {
    "$store.state.data.retirement_buffer.slider_width_update"(e) {
      if (e) {
        setTimeout(() => {
          if (e != "modal") {
            let splitRight = this.$refs.splitRightRef;
            let sliderMain = this.$refs.sliderMainRef;
            this.totalWidth = sliderMain.offsetWidth;

            let leftOffset =
              (this.$refs.sliderMainRef.offsetWidth *
                Number(this.$refs.leftSpanRef.textContent)) /
                100 -
              this.$refs.splitBarRef.offsetWidth / 2;

            if (leftOffset > this.totalWidth - 42) {
              this.$refs.splitBarRef.style.left = this.totalWidth - 42 + "px";
              splitRight.classList.add("right");
            } else {
              this.$refs.splitBarRef.style.left = leftOffset + "px";
            }
          }
        }, 250);
      }
    },
  },
};
</script>
<style lang=""></style>
