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
            <div :class="`d-flex align-items-center mb-2 ${tab1 ? '' : 'd-none'}`">
                <div class="form-check form-switch custom-switch">
                    <input class="form-check-input enhanceInputCheckBox" type="checkbox" role=":switch" :id="`applyAllPm${currentTab}`" @change="applyToAllIndex">
                </div>
                <label :for="`applyAllPm${currentTab}`" :id="`applyAllPmLabel${currentTab}`" class="buttonSaveRadioPara">Apply To All Index Strategies</label>
            </div>
        </div>
        <PerformanceMultiplier :visible="tab1" :currentTab="currentTab" @clearError="clearError" :update="$props.update" :applyPmAllIndex="applyPmAllIndex" @setApplyPmAllIndex="(val) => $emit('setApplyPmAllIndex', val)" @validatePmValues="validatePmValues"/>
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
  props: ["currentTab", "update", "applyPmAllIndex"],
  emits: [
    "performanceChange",
    "creditBonusChange",
    "clearError",
    "setUpdated",
    "setApplyPmAllIndex",
  ],
  data() {
    return {
      tab1: false,
      tab2: false,
    };
  },
  methods: {
    clearError: function(name) {
      this.$emit("clearError", this.$props.currentTab, name);
    },
    removeApllyAllIndex: function() {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      if (this.isChecked(`applyAllPm${currentTab}`)) {
        document.getElementById(`applyAllPm${currentTab}`).checked = false;

        tabs.forEach(tab => {
          document.getElementById(`applyAllPm${tab}`).disabled = false; // enable the toggle input
          document
            .getElementById(`applyAllPmLabel${tab}`)
            .classList.remove("disabled"); // disabled the label
        });
      }
    },
    isChecked: function(id) {
      return document.getElementById(id).checked;
    },
    isAnyPmAppliedToggle: function() {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let toggle = false;

      tabs.forEach(tab => {
        if (this.isChecked(`applyAllPm${tab}`) && currentTab !== tab) {
          toggle = true;
        }
      });

      return toggle;
    },
    validatePmValues: function(tab) {
      let valid = true;
      let currentTab = Number(this.$props.currentTab);
      let performance_type = document.getElementById(
        `performance_type${currentTab}`
      ).value;

      if (tab) {
        performance_type = tab;
      }

      console.log(performance_type);

      if (performance_type === "schedule") {
        for (let i = 0; i < this.illustrateYear; i++) {
          let value = document.getElementById(
            `multiplier_schedule${this.$props.currentTab}${i + 1}`
          ).value; // get current schedule input value

          if (!value) {
            valid = false;
          }
        }
      }

      if (!valid) {
        this.removeApllyAllIndex();
      }

      return valid;
    },
    applyToAllIndex: function(e) {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let performance_type = document.getElementById(
        `performance_type${currentTab}`
      ).value;

      // Show warning message if shedule data is not filled in all inputs
      if (!this.isAnyPmAppliedToggle() && performance_type === "schedule" && !this.validatePmValues()) {
        this.$toast.warning("Please enter all years schedule values");
        return false;
      }

      let performance_multiplier = document.getElementById(
        `multiplier_input${currentTab}`
      ).value; // get current tab multiplier input value

      let start_year = document.getElementById(`prf_start_year${currentTab}`)
        .value; // get current tab multiplier input value

      if (!this.isAnyPmAppliedToggle() && e.target.checked) {
        tabs.forEach(tab => {
          if (currentTab !== tab) {
            document.getElementById(`applyAllPm${tab}`).checked = !e.target
              .checked; // unchecked the toggle input
            document.getElementById(`applyAllPm${tab}`).disabled = !e.target
              .checked; // disabled the toggle input
            document
              .getElementById(`applyAllPmLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label

            if (performance_type === "schedule") {
              document.getElementById(`nav-schedule-tab${tab}`).click(); // open the schedule value tab in all tabs
              document.getElementById(`performance_type${tab}`).value =
                "schedule";
            } else {
              document.getElementById(`nav-fixedValue-tab${tab}`).click(); // open the fixed value tab in all tabs
              document.getElementById(`performance_type${tab}`).value = "fixed";
            }
            this.$emit("setApplyPmAllIndex", true);
          }
        });

        if (performance_type === "schedule") {
          for (let i = 0; i < this.illustrateYear; i++) {
            let value = document.getElementById(
              `multiplier_schedule${currentTab}${i + 1}`
            ).value; // get current schedule input value
            tabs.forEach(tab => {
              if (currentTab !== tab) {
                document.getElementById(
                  `multiplier_schedule${tab}${i + 1}`
                ).value = value; // set schedule value in all tabs
              }
            });
          }
        } else {
          tabs.forEach(tab => {
            if (currentTab !== tab) {
              performance_type;

              document.getElementById(
                `multiplier_input${tab}`
              ).value = performance_multiplier; // set multiplier value in all tabs

              document.getElementById(
                `prf_start_year${tab}`
              ).value = start_year; // set start year value in all tabs
            }
          });
        }
      } else {
        e.target.checked = false;
        tabs.forEach(tab => {
          if (currentTab !== tab && !this.isAnyPmAppliedToggle()) {
            document
              .getElementById(`applyAllPmLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
          }
        });
      }
    },
  },
  computed: {
    illustrateYear() {
      let scenario = this.$store.state.data.active_scenario;
      if (scenario) {
        return scenario.scenerio_details.years_to_illustrate;
      }
      return 0;
    },
  },
  watch: {
    "$props.update"(e) {
      if (e) {
        this.tab1 = Number(
          document.getElementById(`performance_checkbox${this.currentTab}`)
            .value
        )
          ? true
          : false;
        this.$emit("performanceChange", this.tab1);
        this.tab2 = Number(
          document.getElementById(`credit_checkbox${this.currentTab}`).value
        )
          ? true
          : false;
        this.$emit("creditBonusChange", this.tab2);
        this.$emit("setUpdated");
      }
    },
    tab1(e) {
      let tabs = [1, 2, 3];
      let currentTab = this.$props.currentTab;
      if (!e && this.isChecked(`applyAllPm${currentTab}`)) {
        document.getElementById(`applyAllPm${currentTab}`).checked = false;
        tabs.forEach(tab => {
          if (currentTab !== tab && !this.isAnyPmAppliedToggle()) {
            document
              .getElementById(`applyAllPmLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
          }
        });
      }
    },
  },
};
</script>
<style>
label.disabled {
  color: gray;
}
</style>