<template lang="">
    <div :class="`loader-overlay ${$store.state.app.loader ? '' : 'd-none'}`">
        <div class="loader-spinner">
            <div class="loader-bounce1"></div>
            <div class="loader-bounce2"></div>
            <div class="loader-bounce3"></div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9999;
  background-color: #a5a5a5;
  background-color: rgba(31, 31, 31, 0.4);
}
.loader-spinner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  text-align: center;
  z-index: -1;
}
.loader-spinner .loader-bounce1 {
  animation-delay: -0.32s;
}
.loader-spinner .loader-bounce2 {
  animation-delay: -0.16s;
}
.loader-spinner > div {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #e1e1e1;
  border-radius: 50%;
  vertical-align: middle;
  animation: loader-bouncedelay 1.4s infinite ease-in-out;
  animation-fill-mode: both;
}
@keyframes loader-bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>