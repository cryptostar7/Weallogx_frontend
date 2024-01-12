<template lang="">
  <div
    class="indexStrategyallDivs active mt-3 accordion-button collapsed"
    :id="`enhancementTab${currentTab}`"
    data-bs-toggle="collapse"
    :data-bs-target="`#enhanceTab${currentTab}`"
    aria-expanded="false"
    :aria-controls="`enhanceTab${currentTab}`"
  >
    <div class="d-flex justify-content-between align-items-center">
      <div class="indexStrategyheadBrdr">
        <p>
          Enhancements
          <svg
            class="ms-2 boxTickImage"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="9.75"
              fill="#0E6651"
              stroke="#14EAB7"
              stroke-width="1.5"
            />
            <rect
              x="16.6006"
              y="7.91222"
              width="9.99563"
              height="1.5"
              rx="0.75"
              transform="rotate(135 16.6006 7.91222)"
              fill="#14EAB7"
            />
            <rect
              x="9.5693"
              y="14.9806"
              width="5.50074"
              height="1.5"
              rx="0.75"
              transform="rotate(-135 9.5693 14.9806)"
              fill="#14EAB7"
            />
          </svg>
        </p>
        <div></div>
      </div>
    </div>
  </div>
  <form
    :id="`enhanceTab${currentTab}`"
    class="accordion-collapse collapse analysisParametersContent"
    :data-bs-parent="`#enhancements${currentTab}`"
    autocomplete="off"
  >
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center mb-2">
        <div class="form-check form-switch custom-switch">
          <input
            class="form-check-input enhanceInputCheckBox"
            type="checkbox"
            role=":switch"
            :id="`enhancements1${currentTab}`"
            v-model="tab1"
            @change="$emit('performanceChange', tab1)"
          />
        </div>
        <label :for="`enhancements1${currentTab}`" class="buttonSaveRadioPara"
          >Performance Multiplier</label
        >
      </div>
      <div :class="`d-flex align-items-center mb-2 ${tab1 ? '' : 'd-none'}`">
        <div class="form-check form-switch custom-switch">
          <input
            class="form-check-input enhanceInputCheckBox"
            type="checkbox"
            role=":switch"
            :id="`simulationApplyAllPm${currentTab}`"
            @change="applyPmToAllIndex"
          />
        </div>
        <label
          :for="`simulationApplyAllPm${currentTab}`"
          :id="`simulationApplyAllPmLabel${currentTab}`"
          class="buttonSaveRadioPara"
          >Apply To All Index Strategies</label
        >
      </div>
    </div>
    <PerformanceMultiplier
      :visible="tab1"
      :currentTab="currentTab"
      @clearError="clearError"
      :update="$props.update"
      :applyPmAllIndex="applyPmAllIndex"
      @setApplyPmAllIndex="(val) => $emit('setApplyPmAllIndex', val)"
      @validatePmValues="validatePmValues"
    />
    <div class="middle-divider">
      <div class="divider-line"></div>
    </div>
    <div class="d-flex align-items-center justify-content-between pt-2 pb-1">
      <div class="d-flex align-items-center" id="addBorderAbove">
        <div class="form-check form-switch custom-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            :id="`enhancements${currentTab}`"
            v-model="tab2"
            @change="$emit('creditBonusChange', tab2)"
          />
        </div>
        <label :for="`enhancements${currentTab}`" class="buttonSaveRadioPara"
          >Flat Credit/Bonus</label
        >
      </div>
      <div :class="`d-flex align-items-center ${tab2 ? '' : 'd-none'}`">
        <div class="form-check form-switch custom-switch">
          <input
            class="form-check-input enhanceInputCheckBox"
            type="checkbox"
            role=":switch"
            :id="`simulationApplyAllFc${currentTab}`"
            @change="applyFcToAllIndex"
          />
        </div>
        <label
          :for="`simulationApplyAllFc${currentTab}`"
          :id="`simulationApplyAllFcLabel${currentTab}`"
          class="buttonSaveRadioPara"
          >Apply To All Index Strategies</label
        >
      </div>
    </div>
    <CreditAndBonus
      :visible="tab2"
      :currentTab="currentTab"
      @clearError="clearError"
      :update="$props.update"
      :applyFcAllIndex="applyFcAllIndex"
      @setApplyFcAllIndex="(val) => $emit('setApplyFcAllIndex', val)"
      @validateFcValues="validateFcValues"
    />
    <input
      type="hidden"
      :value="tab1 ? 1 : 0"
      :id="`simulation_performance_checkbox${currentTab}`"
    />
    <input
      type="hidden"
      :value="tab2 ? 1 : 0"
      :id="`simulation_credit_checkbox${currentTab}`"
    />
  </form>
</template>
<script>
import PerformanceMultiplier from "./PerformanceMultiplier.vue";
import CreditAndBonus from "./CreditAndBonus.vue";
import { getNumber } from "../../../../../services/helper";
export default {
  components: { PerformanceMultiplier, CreditAndBonus },
  props: ["currentTab", "update", "applyPmAllIndex", "applyFcAllIndex"],
  emits: [
    "performanceChange",
    "creditBonusChange",
    "clearError",
    "setUpdated",
    "setApplyPmAllIndex",
    "setApplyFcAllIndex",
  ],
  data() {
    return {
      tab1: false,
      tab2: false,
    };
  },
  methods: {
    renderInputValidationJs: function () {
      setTimeout(() => {
        // input validation for min and max value
        const inputs = document.querySelectorAll(".handleLimit");
        inputs.forEach((element) =>
          element.addEventListener("input", function (e) {
            let len = e.target.value.length;
            let current = e.target.value;
            let min = Number(e.target.getAttribute("min"));
            let max = Number(e.target.getAttribute("max"));
            if (
              Number(current) < min ||
              Number(current) > max ||
              isNaN(Number(current))
            ) {
              let actualValue = current.slice(0, len - 1);
              e.target.value = actualValue;
              return false;
            }
          })
        );
        // input validation for min and max value with putting comma
        const input2 = document.querySelectorAll(".handleLimitWithComma");
        input2.forEach((element) =>
          element.addEventListener("input", function (e) {
            let current = getNumber(e.target.value).toString();
            let min = Number(e.target.getAttribute("min"));
            let max = Number(e.target.getAttribute("max"));
            if (Number(current) < min || Number(current) > max) {
              let actualValue = current.slice(0, current.length - 1);
              e.target.value =
                Number(current) < min
                  ? ""
                  : Number(actualValue).toLocaleString();
              return false;
            } else {
              e.target.value = Number(current).toLocaleString();
            }
          })
        );
      }, 500);
    },
    clearError: function (name) {
      this.$emit("clearError", this.$props.currentTab, name);
    },
    isChecked: function (id) {
      return document.getElementById(id).checked;
    },
    // Performance multiplier apply to all tabs
    removePmApllyAllIndex: function () {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      if (this.isChecked(`simulationApplyAllPm${currentTab}`)) {
        document.getElementById(`simulationApplyAllPm${currentTab}`).checked = false;

        tabs.forEach((tab) => {
          document.getElementById(`simulationApplyAllPm${tab}`).disabled = false; // enable the toggle input
          document
            .getElementById(`simulationApplyAllPmLabel${tab}`)
            .classList.remove("disabled"); // disabled the label
        });
      }
    },
    // check any applied toggle for performance multiplier
    isAnyPmAppliedToggle: function () {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let toggle = false;

      tabs.forEach((tab) => {
        if (this.isChecked(`simulationApplyAllPm${tab}`) && currentTab !== tab) {
          toggle = true;
        }
      });

      return toggle;
    },
    // check data is valid or not for performance multiplier
    validatePmValues: function (tab) {
      let valid = true;
      let currentTab = Number(this.$props.currentTab);
      let performance_type = document.getElementById(
        `simulation_performance_type${currentTab}`
      ).value;

      if (tab) {
        performance_type = tab;
      }

      if (performance_type === "schedule") {
        for (let i = 0; i < this.illustrateYear; i++) {
          let value = document.getElementById(
            `simulation_multiplier_schedule${this.$props.currentTab}${i + 1}`
          ).value; // get current schedule input value

          if (!value) {
            valid = false;
          }
        }
      }

      if (!valid) {
        this.removePmApllyAllIndex();
      }

      return valid;
    },
    // handle apply to all index strategies for performance multiplier
    applyPmToAllIndex: function (e) {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let performance_type = document.getElementById(
        `simulation_performance_type${currentTab}`
      ).value;

      // Show warning message if shedule data is not filled in all inputs
      if (
        !this.isAnyPmAppliedToggle() &&
        performance_type === "schedule" &&
        !this.validatePmValues()
      ) {
        this.$toast.warning("Please enter all years schedule values");
        return false;
      }

      let performance_multiplier = document.getElementById(
        `simulation_multiplier_input${currentTab}`
      ).value; // get current tab multiplier input value

      let start_year = document.getElementById(
        `simulation_prf_start_year${currentTab}`
      ).value; // get current tab multiplier input value

      if (!this.isAnyPmAppliedToggle() && e.target.checked) {
        tabs.forEach((tab) => {
          if (currentTab !== tab) {
            document.getElementById(`simulationApplyAllPm${tab}`).checked =
              !e.target.checked; // unchecked the toggle input
            document.getElementById(`simulationApplyAllPm${tab}`).disabled =
              !e.target.checked; // disabled the toggle input
            document
              .getElementById(`simulationApplyAllPmLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
            document.getElementById(`enhancements1${tab}`).click(); // open the performance multiplier tab in all tabs

            if (performance_type === "schedule") {
              document.getElementById(`nav-schedule-tab${tab}`).click(); // open the schedule value tab in all tabs
              document.getElementById(`simulation_performance_type${tab}`).value =
                "schedule";
            } else {
              document.getElementById(`nav-fixedValue-tab${tab}`).click(); // open the fixed value tab in all tabs
              document.getElementById(`simulation_performance_type${tab}`).value = "fixed";
            }
            this.$emit("setApplyPmAllIndex", true);
          }
        });

        if (performance_type === "schedule") {
          for (let i = 0; i < this.illustrateYear; i++) {
            let value = document.getElementById(
              `simulation_multiplier_schedule${currentTab}${i + 1}`
            ).value; // get current schedule input value
            tabs.forEach((tab) => {
              if (currentTab !== tab) {
                document.getElementById(
                  `simulation_multiplier_schedule${tab}${i + 1}`
                ).value = value; // set schedule value in all tabs
              }
            });
          }
        } else {
          tabs.forEach((tab) => {
            if (currentTab !== tab) {
              performance_type;

              document.getElementById(`simulation_multiplier_input${tab}`).value =
                performance_multiplier; // set multiplier value in all tabs

              document.getElementById(`simulation_prf_start_year${tab}`).value =
                start_year; // set start year value in all tabs
            }
          });
        }
      } else {
        e.target.checked = false;
        tabs.forEach((tab) => {
          if (currentTab !== tab && !this.isAnyPmAppliedToggle()) {
            document
              .getElementById(`simulationApplyAllPmLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
          }
        });
      }
    },
    // Flat credit/bonus apply to all tabs
    removeFcApllyAllIndex: function () {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      if (this.isChecked(`simulationApplyAllFc${currentTab}`)) {
        document.getElementById(`simulationApplyAllFc${currentTab}`).checked = false;

        tabs.forEach((tab) => {
          document.getElementById(`simulationApplyAllFc${tab}`).disabled = false; // enable the toggle input
          document
            .getElementById(`simulationApplyAllFcLabel${tab}`)
            .classList.remove("disabled"); // disabled the label
        });
      }
    },
    // check any applied toggle for flat credit bonus
    isAnyFcAppliedToggle: function () {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let toggle = false;

      tabs.forEach((tab) => {
        if (this.isChecked(`simulationApplyAllFc${tab}`) && currentTab !== tab) {
          toggle = true;
        }
      });

      return toggle;
    },
    // check data is valid or not for flat credit bonus
    validateFcValues: function (tab, subTab) {
      let valid = true;
      let currentTab = Number(this.$props.currentTab);
      let credit_type = document.getElementById(
        `simulation_credit_type${currentTab}`
      ).value;

      if (tab) {
        credit_type = tab;
      }

      if (credit_type === "schedule") {
        let credit_schedule_type = document.getElementById(
          `simulation_credit_schedule_type${currentTab}`
        ).value;

        if (subTab) {
          credit_schedule_type = subTab;
        }

        for (let i = 0; i < this.illustrateYear; i++) {
          let value = "";
          if (credit_schedule_type === "amount") {
            value = document.getElementById(
              `simulation_crd_schedule_amt${currentTab}${i + 1}`
            ).value; // get current schedule input value
          } else {
            value = document.getElementById(
              `simulation_crd_schedule_rate${currentTab}${i + 1}`
            ).value; // get current schedule input value
          }
          if (!value) {
            valid = false;
          }
        }
      }

      if (!valid) {
        this.removeFcApllyAllIndex();
      }

      return valid;
    },
    // handle apply to all index strategies for flat credit bonus
    applyFcToAllIndex: function (e) {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let credit_type = document.getElementById(
        `simulation_credit_type${currentTab}`
      ).value;

      // Show warning message if shedule data is not filled in all inputs
      if (
        !this.isAnyFcAppliedToggle() &&
        credit_type === "schedule" &&
        !this.validateFcValues()
      ) {
        this.$toast.warning("Please enter all years schedule values");
        return false;
      }

      let credit_bonus = document.getElementById(
        `simulation_credit_bonus_input${currentTab}`
      ).value; // get current tab credit bonus input value

      let start_year = document.getElementById(
        `simulation_crd_start_year${currentTab}`
      ).value; // get current tab start year input value

      if (!this.isAnyFcAppliedToggle() && e.target.checked) {
        tabs.forEach((tab) => {
          if (currentTab !== tab) {
            document.getElementById(`simulationApplyAllFc${tab}`).checked =
              !e.target.checked; // unchecked the toggle input
            document.getElementById(`simulationApplyAllFc${tab}`).disabled =
              !e.target.checked; // disabled the toggle input
            document
              .getElementById(`simulationApplyAllFcLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
            document.getElementById(`enhancements${tab}`).click(); // open the flat credit bonus tab in all tabs

            if (credit_type === "schedule") {
              document.getElementById(`nav-flatSchedule-tab${tab}`).click(); // open the schedule value tab in all tabs
              document.getElementById(`simulation_credit_type${tab}`).value = "schedule";
            } else {
              document
                .getElementById(`navCreadit-flatfixedValue-tab${tab}`)
                .click(); // open the fixed value tab in all tabs
              document.getElementById(`simulation_credit_type${tab}`).value = "fixed";
            }
            this.$emit("setApplyFcAllIndex", true);
          }
        });

        if (credit_type === "schedule") {
          let credit_schedule_type = document.getElementById(
            `simulation_credit_schedule_type${currentTab}`
          ).value;
          let schedule_input_id = `simulation_crd_schedule_rate`;

          if (credit_schedule_type === "amount") {
            schedule_input_id = `simulation_crd_schedule_amt`;
          }

          // set schedule type value in all tabs
          tabs.forEach((tab) => {
            if (currentTab !== tab) {
              document.getElementById(`simulation_credit_schedule_type${tab}`).value =
                credit_schedule_type;
            }
          });

          for (let i = 0; i < this.illustrateYear; i++) {
            let value = document.getElementById(
              `${schedule_input_id}${currentTab}${i + 1}`
            ).value; // get current schedule input value
            tabs.forEach((tab) => {
              if (currentTab !== tab) {
                document.getElementById(
                  `${schedule_input_id}${tab}${i + 1}`
                ).value = value; // set schedule value in all tabs
              }
            });
          }
        } else {
          tabs.forEach((tab) => {
            if (currentTab !== tab) {
              document.getElementById(`simulation_credit_bonus_input${tab}`).value =
                credit_bonus; // set credit bonus value in all tabs

              document.getElementById(`simulation_crd_start_year${tab}`).value =
                start_year; // set start year value in all tabs
            }
          });
        }
      } else {
        e.target.checked = false;
        tabs.forEach((tab) => {
          if (currentTab !== tab && !this.isAnyFcAppliedToggle()) {
            document
              .getElementById(`simulationApplyAllFcLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
          }
        });
      }
    },
  },
  computed: {
    illustrateYear() {
      let simulation = this.$store.state.data.active_simulation;
      if (simulation) {
        return simulation.simulation_details.years_to_illustrate;
      }
      return 0;
    },
  },
  watch: {
    illustrateYear() {
      this.renderInputValidationJs();
    },
    "$props.update"(e) {
      if (e) {
        this.tab1 = Number(
          document.getElementById(`simulation_performance_checkbox${this.currentTab}`)
            .value
        )
          ? true
          : false;
        this.$emit("performanceChange", this.tab1);
        this.tab2 = Number(
          document.getElementById(`simulation_credit_checkbox${this.currentTab}`).value
        )
          ? true
          : false;
        this.$emit("creditBonusChange", this.tab2);
        this.$emit("setUpdated");
      }
    },
    tab1(e) {
      // performace multiplier section
      let tabs = [1, 2, 3];
      let currentTab = this.$props.currentTab;
      if (!e && this.isChecked(`simulationApplyAllPm${currentTab}`)) {
        document.getElementById(`simulationApplyAllPm${currentTab}`).checked = false;
        tabs.forEach((tab) => {
          if (currentTab !== tab && !this.isAnyPmAppliedToggle()) {
            document
              .getElementById(`simulationApplyAllPmLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
          }
        });
      }
    },
    tab2(e) {
      // for flat credit bonus section
      let tabs = [1, 2, 3];
      let currentTab = this.$props.currentTab;
      if (!e && this.isChecked(`simulationApplyAllFc${currentTab}`)) {
        document.getElementById(`simulationApplyAllFc${currentTab}`).checked = false;
        tabs.forEach((tab) => {
          if (currentTab !== tab && !this.isAnyFcAppliedToggle()) {
            document
              .getElementById(`simulationApplyAllFcLabel${tab}`)
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
