<template lang="">
    <div class="indexStrategyallDivs active  mt-3 accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#growth-parameters1" aria-expanded="false" aria-controls="growth-parameters1">
        <div class="d-flex justify-content-between align-items-center">
        <div class="indexStrategyheadBrdr">
            <p>Growth Parameters
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
    <form id="growth-parameters1" class="accordion-collapse collapse analysisParametersContent" data-bs-parent="#growth-parameters1" autocomplete="off">
        <div class="formParabrdrLavelDiv mb-1">
            <p>index</p>
            <p></p>
        </div>
        <SelectDropdown :list="indexStrategies" :id="`analysis_index${currentTab}`" class="form-group less w-75" @onSelectItem="updateRollingPeriod" :defaultSelected="indexStrategies[0].template_name" :showAll="true"/> 
        <div class="formParabrdrLavelDiv mt-3 rangeSelectorLabel">
        <p @click="testFunction()">Cap Rate</p>
        <p></p>
        </div>
        <custom-range-input :hiddenInputId="`cap_rate_range${currentTab}`" :update="$props.update" @setUpdated="() => $emit('setUpdated')"/>
        <div class="formParabrdrLavelDiv mt-3 mb-2">
        <p class="position-relative">Participation Rate
            <img src="@/assets/images/icons/info-icon.svg" alt="info" class="ms-1 info-icon-img">
            <img src="@/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-1 dark-info-icon-img">
            <span class="info-message-participationRate">
            To enter a Participation Rate above 200%, use the Custom Amount field.
            </span>
        </p>
        <p></p>
        </div>                     
        <custom-range-input-2 :hiddenInputId="`participation_range${currentTab}`" :update="$props.update" @setUpdated="() => $emit('setUpdated')"/>
        <div class="formParabrdrLavelDiv mt-3 rangeSelectorLabel">
        <p>Margin/Spread</p>
        <p></p>
        </div>
        <custom-range-input-3 :hiddenInputId="`margin_spread_range${currentTab}`" :update="$props.update" @setUpdated="() => $emit('setUpdated')"/>
        <div class="formParabrdrLavelDiv mt-3 rangeSelectorLabel">
        <p>Floor</p>
        <p></p>
        </div>
        <custom-range-input-3 :hiddenInputId="`floor_range${currentTab}`" :currentTab="currentTab" :update="$props.update" @setUpdated="() => $emit('setUpdated')"/>
        <segment-duration-year :hiddenInputId="`segment_year_range${currentTab}`" :currentTab="currentTab" :update="$props.update" @setUpdated="() => $emit('setUpdated')"/>
    </form>
</template>
<script>
import CustomRangeInput from "../common/CustomRangeInput.vue";
import CustomRangeInput2 from "../common/CustomRangeInput2.vue";
import CustomRangeInput3 from "../common/CustomRangeInput3.vue";
import SegmentDurationYear from "./SegmentDurationYear.vue";
import SelectDropdown from "../common/SelectDropdown.vue";
import config from "../../../services/config.js";

export default {
  components: {
    CustomRangeInput,
    CustomRangeInput2,
    CustomRangeInput3,
    SegmentDurationYear,
    SelectDropdown
  },
  props: ["currentTab", "update"],
  emits: ["setUpdated"],
  data() {
    return {
      rollingPeriod: {
        value: 30,
        custom: "",
        max_val: 55,
      },
    };
  },
  methods: {
    testFunction: function() {
      console.log(this.$props.update);
    },
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
  },
  computed: {
    indexStrategies() {
      return config.INDEX_STRATEGIES;
    },
  },
};
</script>
