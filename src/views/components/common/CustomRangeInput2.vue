<template lang="">
  <div class="d-flex align-items-center range-slider-div pt-2">
    <div class="w-100" @click="clearCustomAmount">
      <div
        id="rangeSlider2"
        :class="`range-slider range-slider2 position-relative ${customValue ? 'disabled' : ''}`"
      >
        <p class="rangeSliderMiddleLine1"></p>
        <p class="rangeSliderMiddleLine2"></p>
        <div id="tooltip2" :style="`left: ${rangePercentage}`">
          <span>{{ rangeValue }}</span>
        </div>
        <input
          v-model="rangeValue"
          id="range2"
          ref="input"
          class="position-relative"
          :style="`--range-progress2: ${rangePercentage}`"
          min="0"
          max="500"
          type="range"
        />
        <p class="rangeSliderMiddleNum">250%</p>
        <p class="rangeSliderMiddleNumEnd">500%</p>
      </div>
    </div>
    <div class="or-div ms-4 position-relative top-minus">or</div>
    <div class="customAmountInputDiv ms-2 top-minus">
      <label for="customRangeValue2">Custom Amount</label>
      <div class="percent-input-div">
        <input
          id="customRangeValue2"
          class="handleLimit"
          min="0"
          max="500"
          type="text"
          :value="customValue"
          @keyup="(e) => saveCustomAmount(e)"
        />
      </div>
    </div>
    <input
      :id="$props.hiddenInputId"
      ref="rangeHiddenRef"
      type="hidden"
      :value="customValue || rangeValue"
    />
  </div>
</template>

<script>
export default {
  props: ['hiddenInputId', 'update'],
  emits: ['setUpdated'],
  data() {
    return {
      customValue: '',
      // rangePercentage: 'calc(50% + 0px)',
      rangePercentage: '20%',
      rangeValue: '100'
    };
  },
  updated() {
    var inp = this.$refs.input;
    var position = Number(((inp.value - inp.min) * 100) / (inp.max - inp.min));
    var newPosition = 16 - position * 0.32;
    this.rangePercentage = `calc(${position}% + (${newPosition}px))`;
  },
  watch: {
    '$props.update'(e) {
      if (e) this.rangeValue = this.$refs.rangeHiddenRef.value;
    }
  },
  methods: {
    clearCustomAmount() {
      this.customValue = '';
    },
    saveCustomAmount(e) {
      this.customValue = e.target.value;
    },
    updateData() {
      this.rangeValue = this.$refs.rangeHiddenRef.value;
    }
  }
};
</script>
