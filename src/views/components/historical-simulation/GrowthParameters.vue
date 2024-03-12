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
        <SelectDropdown :list="indexStrategies" :id="`analysis_index${currentTab}`" class="form-group less w-75" @onSelectItem="updateStrategyIndex" :defaultSelected="indexStrategies[0] ? indexStrategies[0].template_name : ''" :showAll="true"/> 
        <div class="formParabrdrLavelDiv mt-3 rangeSelectorLabel">
        <p class="position-relative d-flex align-items-center">Cap Rate
          <img src="@/assets/images/icons/info-icon.svg" alt="info" class="ms-2 info-icon-img">
            <img src="@/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-2 dark-info-icon-img">
            <span class="info-message-participationRate" :style="`top: -3.2rem; left: -1rem;`">If your strategy does not use a cap, turn it off here.</span>

            <div class="form-check form-switch custom-switch ms-2 mb-0"><input class="form-check-input enhanceInputCheckBox less-height" type="checkbox" checked role=":switch" :id="`is_active_cap_rate_range${currentTab}`" @click="handleCapRate"></div>
        </p>
        <p></p>
        </div>
        <custom-range-input :hiddenInputId="`cap_rate_range${currentTab}`" :isCapActive="isCapActive" :update="$props.update" :currentTab="$props.currentTab" @setUpdated="() => $emit('setUpdated')"/>

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
    SelectDropdown,
  },
  props: ["currentTab", "update", "rollingTime"],
  emits: ["setUpdated"],
  data() {
    return {
      isCapActive: true,
    };
  },
  methods: {
    updateStrategyIndex: function(val) {
      let index = this.indexStrategies.filter(
        i =>
          i.template_name ===
          document.getElementById(`analysis_index${this.currentTab}`).value
      )[0];
    },

    handleCapRate(e) {
      if (e.target.checked) {
        this.isCapActive = true;
      } else {
        this.isCapActive = false;
      }
    },
  },
  computed: {
    indexStrategies() {
      let rolling = this.$props.rollingTime || 30;
      return (
        config.INDEX_STRATEGIES.filter(item => item.max_limit >= rolling) || []
      );
    },
  },
  watch: {
    "$props.update"(e) {
      if (e) {
        this.isCapActive = document.getElementById(
          `is_active_cap_rate_range${this.$props.currentTab}`
        ).checked;
      }
    },
  },
};
</script>
