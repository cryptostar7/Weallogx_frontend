<template lang="">
  <div :class="`enhancementsContent pb-2 ${visible ? '' : 'd-none'}`">
    <div class="d-flex justify-content-center align-items-center mt-3">
      <div
        class="enhancementFixedSheduleBtn nav nav-tabs"
        id="nav-tab"
        role="tablist"
      >
        <div
          :class="tab === 'fixed' ? 'active' : ''"
          :id="`nav-fixedValue-tab${currentTab}`"
          data-bs-toggle="tab"
          :data-bs-target="`#nav-fixedValue${currentTab}`"
          role="tab"
          :aria-controls="`nav-fixedValue${currentTab}`"
          aria-selected="true"
          @click="tab = 'fixed'"
        >
          Fixed Value
        </div>
        <div
          :class="tab === 'schedule' ? 'active' : ''"
          :id="`nav-schedule-tab${currentTab}`"
          data-bs-toggle="tab"
          :data-bs-target="`#nav-schedule${currentTab}`"
          role="tab"
          :aria-controls="`nav-schedule${currentTab}`"
          aria-selected="false"
          @click="tab = 'schedule'"
        >
          Schedule
        </div>
      </div>
    </div>
    <div class="tab-content" id="nav-tabContent">
      <div
        :class="`tab-pane fade ${tab === 'fixed' ? 'show active' : ''}`"
        :id="`nav-fixedValue${currentTab}`"
        role="tabpanel"
        :aria-labelledby="`nav-fixedValue-tab${currentTab}`"
      >
        <form action="javascript:void(0)" autocomplete="off">
          <div class="multiplierInputDiv form-group mt-3">
            <label :for="`multiplier_input${currentTab}`">Multiplier</label>
            <input
              type="text"
              class="form-control handleLimit"
              min="1"
              max="10"
              value="1"
              :id="`multiplier_input${currentTab}`"
              @change="applyPmToAllIndex"
            />
          </div>
          <div class="multiplierInputDiv mt-3">
            <label for="Start Year">Start Year</label>
          </div>
          <div class="d-flex justify-content-between">
            <div
              class="fixeValueYearRadio d-flex justify-content-between align-items-center px-1"
            >
              <label class="" v-for="(item, index) in maxYear" :key="index">
                <input
                  type="radio"
                  name="radio"
                  class="d-none"
                  :checked="!customAmount && item === startYear ? true : false"
                />
                <span class="fixedStartYear" @click="handleStartYear(item)">{{
                  item
                }}</span>
              </label>
            </div>
            <div class="d-flex align-items-center">
              <div class="or-div">or</div>
              <div class="customAmountInputDiv customAmountNoPercent ms-3">
                <label for="customAmount">Custom Amount</label>
                <input
                  type="number"
                  class="onlyPositiveNum"
                  @keyup="(e) => (customAmount = e.target.value)"
                  min="1"
                  :max="illustrateYear"
                  ref="customInputRef"
                  @change="applyPmToAllIndex"
                  :id="`multiplier_input_year${currentTab}`"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        :class="`tab-pane fade ${tab === 'schedule' ? 'show active' : ''}`"
        :id="`nav-schedule${currentTab}`"
        role="tabpanel"
        :aria-labelledby="`nav-schedule-tab${currentTab}`"
      >
        <div class="d-flex justify-content-center w-100">
          <div class="schduleTableDiv mt-5">
            <schedule-csv-extraction
              :prefixId="`multiplier_schedule${currentTab}`"
              :maxInputs="illustrateYear"
              @clearError="muliplierError = ''"
            />
            <div class="text-center mb-1">
              <label class="error" v-if="muliplierError">{{
                muliplierError
              }}</label>
            </div>
            <table class="table">
              <thead>
                <th>Year</th>
                <th>Multiplier Rate</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in illustrateYear" :key="index">
                  <td data-label="Year">{{ item }}</td>
                  <td data-label="Rate" class="innerTableInputTd">
                    <div class="percent-input-div">
                      <input
                        type="text"
                        class="form-control handleLimit"
                        min="1"
                        max="10"
                        :id="`multiplier_schedule${currentTab}${item}`"
                        @keypress="(e) => clearScheduleError(e)"
                        autocomplete="off"
                      />
                      <!-- <span class="percent-span">%</span> -->
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <input 
      type="hidden" 
      :value="tab" 
      :id="`performance_type${currentTab}`" 
      @change="applyPmToAllIndex"
    />
    <input
      type="hidden"
      :value="customAmount || startYear"
      :id="`prf_start_year${currentTab}`"
      @change="applyPmToAllIndex"
    />
  </div>
</template>
<script>
import { getNumber } from "../../../services/helper";
import ScheduleCsvExtraction from "../common/ScheduleCsvExtraction.vue";

export default {
  props: ["currentTab", "visible", "update", "applyPmAllIndex"],
  inject: ["errors"],
  emits: ["clearError", "setApplyPmAllIndex", "validatePmValues"],
  components: { ScheduleCsvExtraction },
  data() {
    return {
      tab: "fixed",
      startYear: 1,
      maxYear: 5,
      customAmount: "",
      muliplierError: "",
    };
  },
  methods: {
    handleStartYear: function (item) {
      this.startYear = item;
      this.customAmount = "";
      this.$refs.customInputRef.value = "";
      let currentTab = Number(this.$props.currentTab);
      document.getElementById(
        `prf_start_year${currentTab}`
      ).value = item
      this.applyPmToAllIndex(item);
    },
    isChecked: function (id) {
      return document.getElementById(id).checked;
    },
    isAnyPmAppliedToggle: function () {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let toggle = false;

      tabs.forEach((tab) => {
        if (this.isChecked(`applyAllPm${tab}`) && currentTab !== tab) {
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
        `performance_type${currentTab}`
      ).value;

      if (tab) {
        performance_type = tab;
      }

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
        this.removePmApllyAllIndex();
      }

      return valid;
    },
    applyPmToAllIndex: function (e) {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let performance_type = document.getElementById(
        `performance_type${currentTab}`
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
        `multiplier_input${currentTab}`
      ).value; // get current tab multiplier input value

      let start_year = document.getElementById(
        `prf_start_year${currentTab}`
      ).value; // get current tab multiplier input value

      if (!this.isAnyPmAppliedToggle()) {
        tabs.forEach((tab) => {
          if (currentTab !== tab) {
            // document.getElementById(`applyAllPm${tab}`).checked =
            //   !e.target.checked; // unchecked the toggle input
            // document.getElementById(`applyAllPm${tab}`).disabled =
            //   !e.target.checked; // disabled the toggle input
            // document
            //   .getElementById(`applyAllPmLabel${tab}`)
            //   .classList.toggle("disabled"); // disabled the label
            // document.getElementById(`enhancements1${tab}`).click(); // open the performance multiplier tab in all tabs

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
            tabs.forEach((tab) => {
              if (currentTab !== tab) {
                document.getElementById(
                  `multiplier_schedule${tab}${i + 1}`
                ).value = value; // set schedule value in all tabs
              }
            });
          }
        } else {
          tabs.forEach((tab) => {
            if (currentTab !== tab) {
              performance_type;

              document.getElementById(`multiplier_input${tab}`).value =
                performance_multiplier; // set multiplier value in all tabs

              document.getElementById(`prf_start_year${tab}`).value =
                start_year; // set start year value in all tabs
            }
          });
        }
      } else {
        e.target.checked = false;
        tabs.forEach((tab) => {
          if (currentTab !== tab && !this.isAnyPmAppliedToggle()) {
            document
              .getElementById(`applyAllPmLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
          }
        });
      }
      tabs.forEach((tab) => {
        if(currentTab !== tab) {
          const checkbox = document.getElementById(`enhancements1${tab}`);
          if (checkbox) {
            checkbox.checked = true;
          }
        }
      });
    },
    updateLatestData: function () {
      this.tab = document.getElementById(
        `performance_type${this.currentTab}`
      ).value;
      let years = [1, 2, 3, 4, 5];
      let year = Number(
        document.getElementById(`prf_start_year${this.currentTab}`).value
      );
      if (years.includes(year)) {
        this.startYear = year;
        this.customAmount = "";
        this.$refs.customInputRef.value = "";
      } else {
        this.customAmount = year;
        this.$refs.customInputRef.value = year;
      }
    },
    validateScheduleData: function () {
      var error_message = "";
      if (this.$props.visible && this.tab === "schedule") {
        for (var y = 1; y < this.illustrateYear + 1; y++) {
          let valid = true;
          let input = document.getElementById(
            `multiplier_schedule${this.currentTab}${y}`
          );
          let value = input.value;
          if (value) {
            if (getNumber(value) < 1 || getNumber(value) > 10) {
              valid = false;
              if (!error_message) {
                error_message =
                  "Multiplier rate cannot be less than 1 or greater than 10";
              }
            }
          } else {
            valid = false;
            if (!error_message) {
              error_message = "All fields are required.";
            }
          }

          if (!valid) {
            input.classList.add("invalid");
          }
        }
        this.muliplierError = error_message;
      }

      return error_message ? false : true;
    },
    clearScheduleError: function (e) {
      if (e.target) {
        e.target.classList.remove("invalid");
      }
      this.muliplierError = "";
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
    tab() {
      this.$emit("validatePmValues", this.tab);
    },
    "$props.update"() {
      this.updateLatestData();
    },
    "$props.applyPmAllIndex"() {
      this.$emit("setApplyPmAllIndex", false);
      this.updateLatestData();
    },
  },
};
</script>
<style>
.invalid {
  color: red;
  border: 1px solid red !important;
}
</style>
