<template lang="">
<div class="indexStrategyallDivs active accordion-button collapsed" data-bs-toggle="collapse"
    data-bs-target="#analysis-parameters3" aria-expanded="false"
    aria-controls="analysis-parameters3">
    <div class="d-flex justify-content-between align-items-center">
    <div class="indexStrategyheadBrdr">
        <p>Analysis Parameters<svg class="ms-2 boxTickImage" width="21" height="21"
            viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10.5" r="9.75" fill="#0E6651" stroke="#14EAB7"
            stroke-width="1.5" />
            <rect x="16.6006" y="7.91222" width="9.99563" height="1.5" rx="0.75"
            transform="rotate(135 16.6006 7.91222)" fill="#14EAB7" />
            <rect x="9.5693" y="14.9806" width="5.50074" height="1.5" rx="0.75"
            transform="rotate(-135 9.5693 14.9806)" fill="#14EAB7" />
        </svg>
        </p>
        <div></div>
    </div>
    </div>
</div>
<div id="analysis-parameters3" class="accordion-collapse collapse analysisParametersContent "
    data-bs-parent="#accordionFlushExample">
    <form action="javascript:void(0)">
    <div class=" mb-1">
        <p>index</p>
        <p></p>
    </div>
    <SelectDropdown
        :list="dropdown.historyIndex2"
        id="historyIndexLabel2"
        class="form-group less w-75"
        @onSelectItem="updateRollingPeriod"
    /> 
    <div class="formParabrdrLavelDiv mt-3 mb-2">
        <p>Rolling Time Period (Years)</p>
        <p></p>
    </div>
    <div class="ChooseTimePeriodInputs d-flex justify-content-between align-items-center"
        id="rollingTimePeriod1">
        <label v-for="(item, index) in rollingTimePeriod" :key="index" :class="item > rollingPeriod1.time ? 'disabled' : `${customRollingPeriod1 ? 'disabled':''}`">
        <input type="radio" name="radio" class="d-none" >
        <span class="timePeriodYear">{{item}}</span>
        </label>
        <div class="or-div">
        or
        </div>
        <div class="customAmountInputDiv creditBonusInputDiv customInputWidth">
        <label for="customAmount">Custom Amount</label>
        <input id="customAmount" ref="input" type="text" @keyup="(e) => saveRollingPeriod1(e)" class="bonus-input percent-input">
        </div>
    </div>

    <div class="formParabrdrLavelDiv mt-3 mb-2">
        <p class="position-relative">Analyze
        <img src="@/assets/images/icons/info-icon.svg" alt="info" class="ms-1 info-icon-img">
        <img src="@/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-1 dark-info-icon-img">
        <span class="info-message-analyze">
            The analysis will return the most recent, worst, median, and best historical results
            based on the Index, Strategy, or Distributions.
        </span>
        </p>
        <p></p>
    </div>
    <div class="d-flex justify-content-center align-items-center px-4">
        <div class="IndexStrategyBtn w-100">
        <div class="w-100">
            <input type="radio" name="indexStrategy" id="index" checked>
            <label for="index">Index </label>
        </div>
        <div class="w-100">
            <input type="radio" name="indexStrategy" id="strategy">
            <label for="strategy">Strategy </label>
        </div>
        <div class="w-100">
            <input type="radio" name="indexStrategy" id="distributions">
            <label for="distributions">Distributions </label>
        </div>
        </div>
    </div>
    <div class="formParabrdrLavelDiv mt-3 mb-2">
        <p class="position-relative">Credit Base Method</p>
        <p></p>
    </div>
    <div class="d-flex justify-content-center align-items-center px-4">
        <div class="IndexStrategyBtn w-100">
        <div class="w-100">
            <input type="radio" name="CreditBaseMethod1" id="monthlyAverageValue1" checked>
            <label for="monthlyAverageValue1">Monthly Average Value </label>
        </div>
        <div class="w-100">
            <input type="radio" name="CreditBaseMethod1" id="beginningValue1">
            <label for="beginningValue1">Beginning Value</label>
        </div>
        <div class="w-100">
            <input type="radio" name="CreditBaseMethod1" id="yearValue1">
            <label for="yearValue1">End of Year Value</label>
        </div>
        </div>
    </div>
    </form>
</div>
</template>
<script>
import SelectDropdown from "../common/SelectDropdown.vue";
export default {
  components: { SelectDropdown },
  data() {
    return {
      dropdown: {
        historyIndex: [
          "S&P 500",
          "Blended Index",
          "Bloomberg US Dynamic Balance II ER",
          "PIMCO Tactical Balanced ER",
        ],
        historyIndex2: [
          "S&P 500",
          "Blended Index",
          "Bloomberg US Dynamic Balance II ER",
          "PIMCO Tactical Balanced ER",
        ],
      },
      rollingTimePeriod: [15, 20, 25, 30, 35, 40, 45, 50],
      rollingPeriod1: {
        value: "",
        time: 50,
      },
      customRollingPeriod1: "",
    };
  },
  methods: {
    updateRollingPeriod: function (val) {
      this.rollingPeriod1.value = val;
      this.customRollingPeriod1 = "";
      this.$refs.input.value = '';
      if (val === this.dropdown.historyIndex[0]) {
        this.rollingPeriod1.time = 50;
      }

      if (val === this.dropdown.historyIndex[1]) {
        this.rollingPeriod1.time = 30;
      }

      if (val === this.dropdown.historyIndex[2]) {
        this.rollingPeriod1.time = 15;
      }

      if (val === this.dropdown.historyIndex[3]) {
        this.rollingPeriod1.time = 15;
      }

      console.log(this.rollingPeriod1);
    },
    saveRollingPeriod1: function (e) {
      this.customRollingPeriod1 = e.target.value;
    },
  },
  mounted() {
    this.rollingPeriod1.value = this.dropdown.historyIndex[0];
  },
};
</script>
<style lang="">
</style>