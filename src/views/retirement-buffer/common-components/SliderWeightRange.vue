<template lang="">
  <div ref="sliderMainRef" class="slider_main split p-relative">
    <div ref="splitLeftRef" class="split_left">
      <span ref="leftSpanRef" class="left_span">50</span>%
    </div>
    <!-- <div class="split_bar"> -->
    <div ref="splitBarRef" class="split_bar">
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
import { getNumber } from "../../../services/helper";

export default {
  mounted() {
    let sliderMain = this.$refs.sliderMainRef;
    let totalWidth = sliderMain.offsetWidth;
    let splitBar = this.$refs.splitBarRef;
    let splitLeft = this.$refs.splitLeftRef;
    let splitRight = this.$refs.splitRightRef;
    let leftSpan = this.$refs.leftSpanRef;
    let rightSpan = this.$refs.rightSpanRef;
    let wid = splitBar.offsetWidth;
    let widHalf = wid / 2;
    splitBar.style.left = totalWidth / 2 - widHalf + "px";

    window.onresize = () => {
      totalWidth = sliderMain.offsetWidth;
      splitBar.style.left =
        (totalWidth * +leftSpan.textContent) / 100 - widHalf + "px";
    };
    // console.log(totalWidth);

    let pos1, pos2, pos3, pos4;
    function dragElement(elmnt) {
      (pos1 = 0), (pos2 = 0), (pos3 = 0), (pos4 = 0);
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      // if (getNumber(totalBalanceInput.value) <= 0) {
      //   totalBalanceInput.style.borderColor = "#e81111";
      //   return;
      // }
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
      if (percentVal < 15) {
        splitLeft.classList.add("left");
      } else if (percentVal > 85) {
        splitRight.classList.add("right");
      } else {
        splitLeft.classList.remove("left");
        splitRight.classList.remove("right");
      }
      leftSpan.textContent = percentVal;
      rightSpan.textContent = 100 - percentVal;
     
      emit("changeMarketValue", percentVal);
      emit("changeBufferValue", (100 - percentVal));

      if (splitBar.offsetLeft > totalWidth - 42) {
        splitBar.style.left = totalWidth - 42 + "px";
      } else if (splitBar.offsetLeft < 0) {
        splitBar.style.left = 0 + "px";
      }
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }

    dragElement(this.$refs.splitBarRef);
  },
};
</script>
<style lang=""></style>
