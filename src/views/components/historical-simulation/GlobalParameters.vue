<template lang="">
<div class="indexStrategyallDivs active accordion-button collapsed mt-2" data-bs-toggle="collapse"
    data-bs-target="#analysis-parameters3" aria-expanded="false"
    aria-controls="analysis-parameters3">
    <div class="d-flex justify-content-between align-items-center">
    <div class="indexStrategyheadBrdr">
        <p>Global Parameters
          <svg class="ms-2 boxTickImage" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10.5" r="9.75" fill="#0E6651" stroke="#14EAB7" stroke-width="1.5" />
            <rect x="16.6006" y="7.91222" width="9.99563" height="1.5" rx="0.75" transform="rotate(135 16.6006 7.91222)" fill="#14EAB7" />
            <rect x="9.5693" y="14.9806" width="5.50074" height="1.5" rx="0.75" transform="rotate(-135 9.5693 14.9806)" fill="#14EAB7" />
          </svg>
        </p>
        <div></div>
    </div>
    </div>
</div>
<div id="analysis-parameters3" class="accordion-collapse collapse analysisParametersContent" data-bs-parent="#accordionFlushExample">
    <form action="javascript:void(0)" autocomplete="off">
      <div class="formParabrdrLavelDiv mt-3 mb-2">
          <p>Rolling Time Period (Years)</p>
          <p></p>
      </div>
      <div class="ChooseTimePeriodInputs d-flex justify-content-between align-items-center" id="rollingTimePeriod1">
          <label v-for="(item, index) in rollingTimePeriod" :key="index" :class="item > rollingPeriod.max_val ? 'disabled' : `${rollingPeriod.custom ? 'disabled':''}`">
          <input type="radio" name="radio" class="d-none" :checked="!rollingPeriod.custom && rollingPeriod.value === item" @click="rollingPeriod.value = item">
          <span class="timePeriodYear">{{item}}</span>
          </label>
          <div class="or-div">
          or
          </div>
          <div class="customAmountInputDiv customAmountNoPercent creditBonusInputDiv customInputWidth">
          <label for="rollingCustomAmount" class="position-relative rolling-time-label">Custom Amount
            <img src="@/assets/images/icons/info-icon.svg" alt="info" class="info-icon-img">
            <img src="@/assets/images/icons/dark-i-icon.svg" alt="info" class="dark-info-icon-img">
            <span class="info-message-analyze" id="rollingTimeInfoContent">Choose a rolling period between 15 and 55 years.</span>
          </label>
          <input id="rollingCustomAmount" type="text" min="1" :max="rollingPeriod.max_val" class="bonus-input handleLimit" @input="(e) => rollingPeriod.custom = e.target.value">
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
              <input type="radio" name="indexStrategy" id="index"  :checked="analyze === 'Index'">
              <label for="index" @click="analyze = 'Index'">Index </label>
          </div>
          <div class="w-100">
              <input type="radio" name="indexStrategy" id="strategy"  :checked="analyze === 'Strategy'">
              <label for="strategy" @click="analyze = 'Strategy'">Strategy </label>
          </div>
          <div class="w-100">
              <input type="radio" name="indexStrategy" id="distributions"  :checked="analyze === 'Distributions'">
              <label for="distributions" @click="analyze = 'Distributions'">Distributions </label>
          </div>
          </div>
      </div>
      <div class="formParabrdrLavelDiv mt-3 pt-2 mb-2">
          <p class="position-relative">Credit Base Method</p>
          <p></p>
      </div>
      <div class="d-flex justify-content-center align-items-center px-4">
          <div class="IndexStrategyBtn w-100">
          <div class="w-100">
              <input type="radio" name="CreditBaseMethod1" id="monthlyAverageValue" :checked="credMethod === 'Monthly Average Value'">
              <label for="monthlyAverageValue" @click="credMethod = 'Monthly Average Value'">Monthly Average Value </label>
          </div>
          <div class="w-100">
              <input type="radio" name="CreditBaseMethod1" id="beginningValue" :checked="credMethod === 'Beginning Value'">
              <label for="beginningValue" @click="credMethod = 'Beginning Value'">Beginning Value</label>
          </div>
          <div class="w-100">
              <input type="radio" name="CreditBaseMethod1" id="yearValue" :checked="credMethod === 'End of Year Value'">
              <label for="yearValue" @click="credMethod = 'End of Year Value'">End of Year Value</label>
          </div>
          </div>
      </div>
      <div class="formParabrdrLavelDiv mt-3 pt-2 mb-2">
          <p class="position-relative">Distributions</p>
          <p></p>
      </div>
      <div class="d-flex justify-content-center align-items-center px-4">
          <div class="IndexStrategyBtn w-66">
          <div class="w-100">
              <input type="radio" name="analysisDistribution" id="annuallyDist" :checked="distributions === 'Annually' ? true : false">
              <label for="annuallyDist" @click="distributions = 'Annually'">Annually </label>
          </div>
          <div class="w-100">
              <input type="radio" name="analysisDistribution" id="monthlyDist" :checked="distributions === 'Monthly' ? true : false">
              <label for="monthlyDist" @click="distributions = 'Monthly'">Monthly</label>
          </div>
          </div>
      </div>
      <!-- Fees Global Section Start -->
        <global-fees-component :update="$props.update.global_parameters" @clearError="clearError" ref='globalFeesRef'/>
      <!-- Fees Global Section End -->
      <input type="hidden" id="rolling_time" :value="rollingPeriod.custom || rollingPeriod.value" ref="rollingRef" />
      <input type="hidden" id="analyze_type" :value="analyze" ref="analyzeRef"/>
      <input type="hidden" id="credit_base_method" :value="credMethod" ref="credRef" />
      <input type="hidden" id="distribution_method" :value="distributions" ref="distributionsRef" />
    </form>
</div>
</template>
<script>
import SelectDropdown from "../common/SelectDropdown.vue";
import GlobalFeesComponent from "./GlobalFeesComponent.vue";
import config from "../../../services/config.js";
export default {
  components: { SelectDropdown, GlobalFeesComponent },
  props: ["update"],
  emits: ["clearError", "setUpdated", "setRollingTime"],
  data() {
    return {
      rollingTimePeriod: [15, 20, 25, 30, 35, 40, 45, 50],
      analyze: "Index",
      credMethod: "Monthly Average Value",
      distributions: "Annually",
      rollingPeriod: {
        value: 30,
        custom: "",
        max_val: 55,
      },
    };
  },
  methods: {
    // remove error
    clearError: function(key = "") {
      this.$emit("clearError", key);
    },
    updateRollingPeriod: function(val) {
      let infoContent = document.querySelector("#rollingTimeInfoContent");
      this.rollingPeriod.value = this.rollingPeriod.max_val;
      if (
        this.rollingPeriod.custom &&
        Number(this.rollingPeriod.custom) > this.rollingPeriod.max_val
      ) {
        document.getElementById(
          "rollingCustomAmount"
        ).value = this.rollingPeriod.max_val;
        this.rollingPeriod.custom = this.rollingPeriod.max_val;
        this.customRollingPeriod = this.rollingPeriod.max_val;
      }
    },
    saveRollingPeriod: function(e) {
      this.customRollingPeriod = e.target.value;
    },
  },
  computed: {
    indexStrategies() {
      return config.INDEX_STRATEGIES;
    },
  },
  watch: {
    "rollingPeriod.value"(e) {
      this.$emit("setRollingTime", e);
    },

    "rollingPeriod.custom"(e) {
      this.$emit("setRollingTime", e);
    },
    "$props.update.global_parameters"(e) {
      if (e) {
        this.$emit("setUpdated");
        let rolling = Number(this.$refs.rollingRef.value);
        this.updateRollingPeriod(index ? index.id : 1);
        if (this.rollingTimePeriod.includes(rolling)) {
          this.rollingPeriod.value = rolling;
        } else {
          this.rollingPeriod.custom = rolling;
          document.getElementById("rollingCustomAmount").value = rolling;
        }
        this.analyze = this.$refs.analyzeRef.value;
        this.credMethod = this.$refs.credRef.value;
        this.distributions = this.$refs.distributionsRef.value;
      }
    },
  },
};
</script>
<style lang="">
</style>