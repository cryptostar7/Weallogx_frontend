<template lang="">
   <div class="indexStrategyallDivs active mt-3 accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#enhancements" aria-expanded="false" aria-controls="enhancements">
        <div class="d-flex justify-content-between align-items-center">
            <div class="indexStrategyheadBrdr">
                <p>Enhancements
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
    <div id="enhancements" class="accordion-collapse collapse analysisParametersContent " data-bs-parent="#enhancements">
    <div class="d-flex align-items-center mb-2">
        <div class="form-check form-switch custom-switch">
            <input class="form-check-input enhanceInputCheckBox" type="checkbox" role=":switch" :id="`enhancements1${currentTab}`" v-model="tab1" @change="$emit('performanceChange')">
        </div>
        <label :for="`enhancements1${currentTab}`" class="buttonSaveRadioPara">Performance Multiplier</label>
    </div>
    <PerformanceMultiplier v-if="tab1" :currentTab="currentTab"/>
    <div class="d-flex align-items-center mt-2" id="addBorderAbove">
        <div class="form-check form-switch custom-switch">
            <input class="form-check-input" type="checkbox" role="switch" :id="`enhancements${currentTab}`" v-model="tab2" @change="$emit('creditBonusChange')">
        </div>
        <label :for="`enhancements${currentTab}`" class="buttonSaveRadioPara">Flat Credit/Bonus</label>
    </div>
    <CreditAndBonus v-if="tab2" :currentTab="currentTab" />
    <input type="hidden" :value="tab1 ? 1 : 0" :id="`performance_checkbox${currentTab}`" />
    <input type="hidden" :value="tab2 ? 1 : 0" :id="`credit_checkbox${currentTab}`" />
    </div>
</template>
<script>
import PerformanceMultiplier from "./PerformanceMultiplier.vue";
import CreditAndBonus from "./CreditAndBonus.vue";
export default {
  components: { PerformanceMultiplier, CreditAndBonus },
  props: ["currentTab"],
  emits:["performanceChange", "creditBonusChange"],
  data() {
    return {
      tab1: false,
      tab2: false,
    };
  },
};
</script>
<style lang="">
</style>