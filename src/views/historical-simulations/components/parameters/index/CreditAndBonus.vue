<template lang="">
  <div
    :class="`enhancementsContent ${visible ? '' : 'd-none'}`"
    id="enhancements2Content"
  >
    <div class="d-flex justify-content-center align-items-center mt-3">
      <div
        class="enhancementFixedSheduleBtn nav nav-tabs"
        id="nav-tab"
        role="tablist"
      >
        <div
          :class="tab === 'fixed' ? 'active' : ''"
          :id="`navCreadit-flatfixedValue-tab${currentTab}`"
          data-bs-toggle="tab"
          :data-bs-target="`#nav-flatfixedValue${currentTab}`"
          role="tab"
          :aria-controls="`nav-flatfixedValue${currentTab}`"
          aria-selected="true"
          @click="tab = 'fixed'"
        >
          Fixed Value
        </div>
        <div
          :class="tab === 'schedule' ? 'active' : ''"
          :id="`nav-flatSchedule-tab${currentTab}`"
          data-bs-toggle="tab"
          :data-bs-target="`#nav-flatSchedule${currentTab}`"
          role="tab"
          :aria-controls="`nav-flatSchedule${currentTab}`"
          aria-selected="false"
          @click="tab = 'schedule'"
        >
          Schedule
        </div>
      </div>
    </div>
    <div class="tab-content" :id="`navCredit-tabContent${currentTab}`">
      <div
        :class="`tab-pane fade ${tab === 'fixed' ? 'show active' : ''}`"
        :id="`nav-flatfixedValue${currentTab}`"
        role="tabpanel"
        :aria-labelledby="`navCreadit-flatfixedValue-tab${currentTab}`"
      >
        <form action="javascript:void(0)" autocomplete="off">
          <div
            class="creditBonusInputDiv form-group mt-3"
            id="creditBonusinputDiv"
          >
            <label for="creditBonusinput">Credit/Bonus</label>
            <input
              type="text"
              class="form-control handleLimit"
              value="1"
              min="0"
              max="10"
              :id="`simulation_credit_bonus_input${currentTab}`"
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
                  type="text"
                  class="onlyPositiveNum"
                  @keyup="(e) => (customAmount = e.target.value)"
                  min="1"
                  :max="illustrateYear"
                  ref="customInputRef"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        :class="`tab-pane fade ${tab === 'schedule' ? 'show active' : ''}`"
        :id="`nav-flatSchedule${currentTab}`"
        role="tabpanel"
        :aria-labelledby="`nav-flatSchedule-tab${currentTab}`"
      >
        <div class="d-flex justify-content-center align-items-center mt-3">
          <div
            class="enhancementFixedSheduleBtn nav nav-tabs"
            id="nav-tab"
            role="tablist"
          >
            <div
              :class="schedule_type === 'rate' ? 'active' : ''"
              :id="`nav-rate-tab${currentTab}`"
              data-bs-toggle="tab"
              :data-bs-target="`#nav-rate${currentTab}`"
              role="tab"
              :aria-controls="`nav-rate${currentTab}`"
              aria-selected="true"
              @click="schedule_type = 'rate'"
            >
              Rate
            </div>
            <div
              :class="schedule_type === 'amount' ? 'active' : ''"
              :id="`nav-Amount-tab${currentTab}`"
              data-bs-toggle="tab"
              :data-bs-target="`#nav-amount${currentTab}`"
              role="tab"
              :aria-controls="`nav-amount${currentTab}`"
              aria-selected="false"
              @click="schedule_type = 'amount'"
            >
              Amount ($)
            </div>
          </div>
        </div>
        <div class="tab-content" :id="`navCredit-tabContent${currentTab}`">
          <div
            :class="`tab-pane fade ${
              schedule_type === 'rate' ? 'show active' : ''
            }`"
            :id="`nav-rate${currentTab}`"
            role="tabpanel"
            :aria-labelledby="`nav-rate-tab${currentTab}`"
          >
            <div class="d-flex justify-content-center w-100">
              <div class="schduleTableDiv mt-5">
                <schedule-csv-extraction
                  :prefixId="`simulation_crd_schedule_rate${currentTab}`"
                  :maxInputs="illustrateYear"
                  @clearError="scheduleError = ''"
                />

                <div class="text-center mb-1">
                  <label class="error" v-if="scheduleError">{{
                    scheduleError
                  }}</label>
                </div>

                <table class="table">
                  <thead>
                    <th>Year</th>
                    <th>Rate</th>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in illustrateYear" :key="index">
                      <td data-label="Year">{{ item }}</td>
                      <td data-label="Rate" class="innerTableInputTd">
                        <div class="percent-input-div">
                          <input
                            type="text"
                            class="form-control handleLimit"
                            min="0"
                            max="10"
                            :id="`simulation_crd_schedule_rate${currentTab}${item}`"
                            @keypress="(e) => clearScheduleError(e)"
                            autocomplete="off"
                          />
                          <span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            :class="`tab-pane fade ${
              schedule_type === 'amount' ? 'show active' : ''
            }`"
            :id="`nav-amount${currentTab}`"
            role="tabpanel"
            :aria-labelledby="`nav-amount-tab${currentTab}`"
          >
            <div class="d-flex justify-content-center w-100">
              <div class="schduleTableDiv mt-5">
                <schedule-csv-extraction
                  :prefixId="`simulation_crd_schedule_amt${currentTab}`"
                  :maxInputs="illustrateYear"
                  @keypress="(e) => clearScheduleError(e)"
                />
                <div class="text-center mb-1">
                  <label class="error" v-if="scheduleError">{{
                    scheduleError
                  }}</label>
                </div>
                <table class="table">
                  <thead>
                    <th>Year</th>
                    <th>Amount</th>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in illustrateYear" :key="index">
                      <td data-label="Year">{{ item }}</td>
                      <td data-label="Rate" class="amountInnerTableInputTd">
                        <input
                          type="text"
                          class="form-control handleLimitWithComma"
                          min="1"
                          max="999999"
                          :id="`simulation_crd_schedule_amt${currentTab}${item}`"
                          @keypress="(e) => clearScheduleError(e)"
                          autocomplete="off"
                        />
                        <label for="amount">$</label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input
      type="hidden"
      :value="tab"
      :id="`simulation_credit_type${currentTab}`"
    />
    <input
      type="hidden"
      :value="schedule_type"
      :id="`simulation_credit_schedule_type${currentTab}`"
    />
    <input
      type="hidden"
      :value="customAmount || startYear"
      :id="`simulation_crd_start_year${currentTab}`"
    />
  </div>
</template>
<script>
import { getNumber } from "../../../../../services/helper";
import ScheduleCsvExtraction from "../../../../components/common/ScheduleCsvExtraction.vue";

export default {
  props: ["currentTab", "visible", "applyFcAllIndex"],
  inject: ["errors"],
  emits: ["clearError", "setApplyFcAllIndex", "validateFcValues"],
  components: { ScheduleCsvExtraction },
  data() {
    return {
      tab: "fixed",
      schedule_type: "rate",
      startYear: 1,
      maxYear: 5,
      customAmount: "",
      scheduleError: "",
    };
  },
  methods: {
    handleStartYear: function (item) {
      this.startYear = item;
      this.customAmount = "";
      this.$refs.customInputRef.value = "";
    },
    updateData: function () {
      this.tab = document.getElementById(
        `simulation_credit_type${this.currentTab}`
      ).value;
      let years = [1, 2, 3, 4, 5];
      let year = Number(
        document.getElementById(`simulation_crd_start_year${this.currentTab}`)
          .value
      );
      this.schedule_type = document.getElementById(
        `simulation_credit_schedule_type${this.currentTab}`
      ).value;
      if (years.includes(year)) {
        this.startYear = year;
      } else {
        this.customAmount = year;
        this.$refs.customInputRef.value = year;
      }
    },
    validateScheduleData: function () {
      var error_message = "";
      if (this.$props.visible && this.tab === "schedule") {
        if (this.schedule_type === "rate") {
          for (var y = 1; y < this.illustrateYear + 1; y++) {
            let valid = true;
            let input = document.getElementById(
              `simulation_crd_schedule_rate${this.currentTab}${y}`
            );
            let value = input.value;
            if (value) {
              if (getNumber(value) < 0 || getNumber(value) > 10) {
                valid = false;
                if (!error_message) {
                  error_message =
                    "Flat Credit/Bonus rate cannot be less than 0 or greater than 10";
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
        } else {
          for (var y = 1; y < this.illustrateYear + 1; y++) {
            let valid = true;
            let input = document.getElementById(
              `simulation_crd_schedule_amt${this.currentTab}${y}`
            );
            let value = input.value;
            if (value) {
              if (getNumber(value) < 1) {
                valid = false;
                if (!error_message) {
                  error_message =
                    "Flat Credit/Bonus rate cannot be less than 1";
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
        }

        this.scheduleError = error_message;
      }

      return error_message ? false : true;
    },
    clearScheduleError: function (e) {
      if (e.target) {
        e.target.classList.remove("invalid");
      }
      this.scheduleError = "";
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
    tab() {
      this.$emit("validateFcValues", this.tab);
    },
    schedule_type() {
      this.$emit("validateFcValues", this.tab, this.schedule_type);
    },
    "$props.applyFcAllIndex"() {
      this.$emit("setApplyFcAllIndex", false);
      this.updateData();
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
