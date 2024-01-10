<template lang="">
<div class="indexStrategyallDivs active accordion-button collapsed" data-bs-toggle="collapse"
    data-bs-target="#analysis-parameters3" aria-expanded="false"
    aria-controls="analysis-parameters3">
    <div class="d-flex justify-content-between align-items-center">
    <div class="indexStrategyheadBrdr">
        <p>Analysis Parameters
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
      <div class="formParabrdrLavelDiv mb-1">
        <p>index</p>
        <p></p>
      </div>
    <SelectDropdown :list="indexStrategies" :id="`analysis_index${currentTab}`" class="form-group less w-75" @onSelectItem="updateRollingPeriod" :defaultSelected="indexStrategies[0].template_name" :showAll="true"/> 
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
        <label :for="`rollingCustomAmount${currentTab}`" class="position-relative rolling-time-label">Custom Amount
          <img src="@/assets/images/icons/info-icon.svg" alt="info" class="info-icon-img">
          <img src="@/assets/images/icons/dark-i-icon.svg" alt="info" class="dark-info-icon-img">
          <span class="info-message-analyze" id="rollingTimeInfoContent">Choose a rolling period between 15 and 55 years.</span>
        </label>
        <input :id="`rollingCustomAmount${currentTab}`" type="text" min="1" :max="rollingPeriod.max_val" class="bonus-input handleLimit" @input="(e) => rollingPeriod.custom = e.target.value">
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
            <input type="radio" name="indexStrategy" :id="`index${currentTab}`"  :checked="analyze === 'Index'">
            <label :for="`index${currentTab}`" @click="analyze = 'Index'">Index </label>
        </div>
        <div class="w-100">
            <input type="radio" name="indexStrategy" :id="`strategy${currentTab}`"  :checked="analyze === 'Strategy'">
            <label :for="`strategy${currentTab}`" @click="analyze = 'Strategy'">Strategy </label>
        </div>
        <div class="w-100">
            <input type="radio" name="indexStrategy" :id="`distributions${currentTab}`"  :checked="analyze === 'Distributions'">
            <label :for="`distributions${currentTab}`" @click="analyze = 'Distributions'">Distributions </label>
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
            <input type="radio" name="CreditBaseMethod1" :id="`monthlyAverageValue${currentTab}`" :checked="credMethod === 'Monthly Average Value'">
            <label :for="`monthlyAverageValue${currentTab}`" @click="credMethod = 'Monthly Average Value'">Monthly Average Value </label>
        </div>
        <div class="w-100">
            <input type="radio" name="CreditBaseMethod1" :id="`beginningValue${currentTab}`" :checked="credMethod === 'Beginning Value'">
            <label :for="`beginningValue${currentTab}`" @click="credMethod = 'Beginning Value'">Beginning Value</label>
        </div>
        <div class="w-100">
            <input type="radio" name="CreditBaseMethod1" :id="`yearValue${currentTab}`" :checked="credMethod === 'End of Year Value'">
            <label :for="`yearValue${currentTab}`" @click="credMethod = 'End of Year Value'">End of Year Value</label>
        </div>
        </div>
    </div>
    <div class="formParabrdrLavelDiv mt-3 mb-2">
        <p class="position-relative">Distributions</p>
        <p></p>
    </div>
    <div class="d-flex align-items-center px-4">
        <div class="IndexStrategyBtn w-66">
        <div class="w-100">
            <input type="radio" :name="`analysisDistribution${currentTab}`" :id="`annuallyDist${currentTab}`" :checked="distributions === 'Annually' ? true : false">
            <label :for="`annuallyDist${currentTab}`" @click="distributions = 'Annually'">Annually </label>
        </div>
        <div class="w-100">
            <input type="radio" :name="`analysisDistribution${currentTab}`" :id="`monthlyDist${currentTab}`" :checked="distributions === 'Monthly' ? true : false">
            <label :for="`monthlyDist${currentTab}`" @click="distributions = 'Monthly'">Monthly</label>
        </div>
        </div>
    </div>
    <input type="hidden" :id="`rolling_time${currentTab}`" :value="rollingPeriod.custom || rollingPeriod.value" ref="rollingRef" />
    <input type="hidden" :id="`analyze_type${currentTab}`" :value="analyze" ref="analyzeRef"/>
    <input type="hidden" :id="`credit_base_method${currentTab}`" :value="credMethod" ref="credRef" />
    <input type="hidden" :id="`distribution_method${currentTab}`" :value="distributions" ref="distributionsRef" />
    </form>
</div>
</template>
<script>
import SelectDropdown from "../../../../components/common/SelectDropdown.vue";
import config from "../../../../../services/config.js";
export default {
  components: { SelectDropdown },
  props: ["currentTab", "update"],
  emits: ["setUpdated"],
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
    updateRollingPeriod: function(val) {
      let infoContent = document.querySelector("#rollingTimeInfoContent");
      if (val == 1) {
        infoContent.textContent = `Choose a rolling period between 15 and 55 years.`;
      } else if (val == 2 || val == 7) {
        infoContent.textContent = `Choose a rolling period between 15 and 30 years.`;
      } else if (val == 3 || val == 4 || val == 6) {
        infoContent.textContent = `You must choose 15 years.`;
      } else {
        infoContent.textContent = `Choose a rolling period between 15 and 20 years.`;
      }

      this.rollingPeriod.max_val = this.indexStrategies.filter(
        i => i.id === val
      )[0].max_limit;
      this.rollingPeriod.value = this.rollingPeriod.max_val;
      if (
        this.rollingPeriod.custom &&
        Number(this.rollingPeriod.custom) > this.rollingPeriod.max_val
      ) {
        document.getElementById(
          `rollingCustomAmount${this.currentTab}`
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
    "$props.update"(e) {
      if (e) {
        this.$emit("setUpdated");
        let rolling = Number(this.$refs.rollingRef.value);
        let index = this.indexStrategies.filter(
          i =>
            i.template_name ===
            document.getElementById(`analysis_index${this.currentTab}`).value
        )[0];
        this.updateRollingPeriod(index ? index.id : 1);
        if (this.rollingTimePeriod.includes(rolling)) {
          this.rollingPeriod.value = rolling;
        } else {
          this.rollingPeriod.custom = rolling;
          document.getElementById(
            `rollingCustomAmount${this.currentTab}`
          ).value = rolling;
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