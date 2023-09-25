<template lang="">
   <div class="indexStrategyallDivs active mt-3 accordion-button collapsed" :id="`enhancementTab${currentTab}`" data-bs-toggle="collapse" :data-bs-target="`#enhanceTab${currentTab}`" aria-expanded="false" :aria-controls="`enhanceTab${currentTab}`">
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
    <form :id="`enhanceTab${currentTab}`" class="accordion-collapse collapse analysisParametersContent " :data-bs-parent="`#enhancements${currentTab}`" autocomplete="off">
        <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center mb-2">
                <div class="form-check form-switch custom-switch">
                    <input class="form-check-input enhanceInputCheckBox" type="checkbox" role=":switch" :id="`enhancements1${currentTab}`" v-model="tab1" @change="$emit('performanceChange', tab1)">
                </div>
                <label :for="`enhancements1${currentTab}`" class="buttonSaveRadioPara">Performance Multiplier</label>
            </div>
            <div class="d-flex align-items-center mb-2" v-if="tab1">
                <div class="form-check form-switch custom-switch">
                    <input class="form-check-input enhanceInputCheckBox" type="checkbox" role=":switch" :id="`applyAll1${currentTab}`">
                </div>
                <label :for="`applyAll1${currentTab}`" class="buttonSaveRadioPara">Apply To All Index Strategies</label>
            </div>
        </div>
        <PerformanceMultiplier :visible="tab1" :currentTab="currentTab" @clearError="clearError" :update="$props.update"/>
        <div class="middle-divider">
            <div class="divider-line"></div>
        </div>
        <div class="d-flex align-items-center justify-content-between pt-2 pb-1">
            <div class="d-flex align-items-center" id="addBorderAbove">
                <div class="form-check form-switch custom-switch">
                    <input class="form-check-input" type="checkbox" role="switch" :id="`enhancements${currentTab}`" v-model="tab2" @change="$emit('creditBonusChange', tab2)">
                </div>
                <label :for="`enhancements${currentTab}`" class="buttonSaveRadioPara">Flat Credit/Bonus</label>
            </div>
            <div class="d-flex align-items-center" v-if="tab2">
                <div class="form-check form-switch custom-switch">
                    <input class="form-check-input enhanceInputCheckBox" type="checkbox" role=":switch" :id="`applyAll2${currentTab}`">
                </div>
                <label :for="`applyAll2${currentTab}`" class="buttonSaveRadioPara">Apply To All Index Strategies</label>
            </div>
        </div>
        <CreditAndBonus :visible="tab2" :currentTab="currentTab" @clearError="clearError" :update="$props.update"/>
        <input type="hidden" :value="tab1 ? 1 : 0" :id="`performance_checkbox${currentTab}`" />
        <input type="hidden" :value="tab2 ? 1 : 0" :id="`credit_checkbox${currentTab}`" />
    </form>
</template>
<script>
import PerformanceMultiplier from "./PerformanceMultiplier.vue";
import CreditAndBonus from "./CreditAndBonus.vue";
export default {
  components: { PerformanceMultiplier, CreditAndBonus },
  props: ["currentTab", "update"],
  emits: ["performanceChange", "creditBonusChange", "clearError", "setUpdated"],
  data() {
    return {
      tab1: false,
      tab2: false,
    };
  },
  methods: {
    clearError: function(name) {
        console.log('name');
      this.$emit("clearError", this.currentTab, name);
    }
  },
  watch: {
    "$props.update"(e){
      if(e){
        this.tab1 = Number(document.getElementById(`performance_checkbox${this.currentTab}`).value) ? true : false;
        this.$emit("performanceChange", this.tab1);
        this.tab2 = Number(document.getElementById(`credit_checkbox${this.currentTab}`).value) ? true : false;
        this.$emit("creditBonusChange", this.tab2);
        this.$emit("setUpdated");
      }
    }
  }
};
</script>
<style lang="">
</style>