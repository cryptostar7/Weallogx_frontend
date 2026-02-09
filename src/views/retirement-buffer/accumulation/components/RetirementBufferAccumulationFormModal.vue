<template lang="">
  <div
    class="modal fade setting_modal"
    id="settings"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="settingsLabel"
    aria-hidden="true"
  >
    <a type="button" data-bs-dismiss="modal" class="preview-modal-close">
      <svg
        width="45"
        height="48"
        viewBox="0 0 45 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 1974" filter="url(#filter0_d_346_5079)">
          <rect
            id="Rectangle 174"
            width="49.4476"
            height="5.7055"
            rx="2.85275"
            transform="matrix(0.707099 0.707114 -0.707099 0.707114 7.03516 0.000488281)"
            fill="#26AB8B"
          ></rect>
          <rect
            id="Rectangle 175"
            width="49.4476"
            height="5.7055"
            rx="2.85275"
            transform="matrix(-0.707099 0.707114 -0.707099 -0.707114 42 4.03442)"
            fill="#26AB8B"
          ></rect>
        </g>
        <defs>
          <filter
            id="filter0_d_346_5079"
            x="0.181641"
            y="1.18164"
            width="44.6367"
            height="46.6367"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="6"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_346_5079"
            ></feBlend>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_346_5079"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </a>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Form -->
        <retirement-buffer-params-form
          ref="formRef"
          @setAllowSubmit="(e) => (allowSubmit = e)"
        />
        <button
          data-bs-dismiss="modal"
          :class="`mb-5 mt-4 run_btn ${allowSubmit ? '' : 'disable'}`"
          @click="submitHandler()"
        >
          Save & Run
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import RetirementBufferParamsForm from "./RetirementBufferParamsForm.vue";
export default {
  components: { RetirementBufferParamsForm },
  data() {
    return {
      allowSubmit: true,
    };
  },
  methods: {
    submitHandler: function () {
      this.$refs.formRef.submitForm();
    },
  },
};
</script>
<style lang=""></style>
