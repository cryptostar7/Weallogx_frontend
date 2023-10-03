<template lang="">
    <div :class="`enhancementsContent ${visible ? '' : 'd-none'}`" id="enhancements2Content">
        <div class="d-flex justify-content-center align-items-center mt-3">
            <div class="enhancementFixedSheduleBtn nav nav-tabs" id="nav-tab" role="tablist">
                <div :class="tab === 'fixed' ? 'active' : ''" :id="`navCreadit-flatfixedValue-tab${currentTab}`" data-bs-toggle="tab" :data-bs-target="`#nav-flatfixedValue${currentTab}`" role="tab" :aria-controls="`nav-flatfixedValue${currentTab}`" aria-selected="true" @click="tab = 'fixed'">Fixed Value</div>
                <div :class="tab === 'schedule' ? 'active' : ''" :id="`nav-flatSchedule-tab${currentTab}`" data-bs-toggle="tab" :data-bs-target="`#nav-flatSchedule${currentTab}`" role="tab" :aria-controls="`nav-flatSchedule${currentTab}`" aria-selected="false" @click="tab = 'schedule'">Schedule</div>
            </div>
        </div>
        <div class="tab-content" :id="`navCredit-tabContent${currentTab}`">
            <div :class="`tab-pane fade ${tab === 'fixed' ? 'show active' : ''}`" :id="`nav-flatfixedValue${currentTab}`" role="tabpanel" :aria-labelledby="`navCreadit-flatfixedValue-tab${currentTab}`">
                <form action="javascript:void(0)"  autocomplete="off">
                    <div class="creditBonusInputDiv form-group mt-3" id="creditBonusinputDiv">
                        <label for="creditBonusinput">Credit/Bonus</label>
                        <input type="text" class="form-control handleLimit" value="1" min="0" max="10" :id="`credit_bonus_input${currentTab}`">
                    </div>
                    <div class="multiplierInputDiv mt-3">
                        <label for="Start Year">Start Year</label>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="fixeValueYearRadio d-flex justify-content-between align-items-center px-1">
                            <label class="" v-for="(item, index) in maxYear" :key="index">
                                <input type="radio" name="radio" class="d-none" :checked="!customAmount && item === startYear ? true :false">
                                <span class="fixedStartYear" @click="handleStartYear(item)">{{item}}</span>
                            </label>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="or-div">
                                or
                            </div>
                            <div class="customAmountInputDiv customAmountNoPercent ms-3">
                                <label for="customAmount">Custom Amount</label>
                                <input type="text" class="onlyPositiveNum" @keyup="(e) => customAmount = e.target.value" min="1" :max="illustrateYear" ref="customInputRef">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div :class="`tab-pane fade ${tab === 'schedule' ? 'show active' : ''}`" :id="`nav-flatSchedule${currentTab}`" role="tabpanel" :aria-labelledby="`nav-flatSchedule-tab${currentTab}`">

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <div class="enhancementFixedSheduleBtn nav nav-tabs" id="nav-tab" role="tablist">
                        <div :class="schedule_type === 'rate' ? 'active' : ''" :id="`nav-rate-tab${currentTab}`" data-bs-toggle="tab" :data-bs-target="`#nav-rate${currentTab}`" role="tab" :aria-controls="`nav-rate${currentTab}`" aria-selected="true" @click="schedule_type = 'rate'">Rate</div>
                        <div :class="schedule_type === 'amount' ? 'active' : ''" :id="`nav-Amount-tab${currentTab}`" data-bs-toggle="tab" :data-bs-target="`#nav-amount${currentTab}`" role="tab" :aria-controls="`nav-amount${currentTab}`" aria-selected="false" @click="schedule_type = 'amount'">Amount ($)</div>
                    </div>
                </div>
                <div class="tab-content" :id="`navCredit-tabContent${currentTab}`">
                    <div  :class="`tab-pane fade ${schedule_type === 'rate' ? 'show active' : ''}`" :id="`nav-rate${currentTab}`" role="tabpanel" :aria-labelledby="`nav-rate-tab${currentTab}`">
                        <div class="d-flex justify-content-center w-100">
                            <div class="schduleTableDiv mt-5 ">
                                <label class="error text-center" v-if="errors[currentTab] && errors[currentTab].enhancements_credit_schedule_rate">{{errors[currentTab].enhancements_credit_schedule_rate}}</label>
                                <table class="table">
                                    <thead>
                                        <th>Year</th>
                                        <th>Rate</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in illustrateYear" :key="index">
                                            <td data-label="Year">{{item}}</td>
                                            <td data-label="Rate" class="innerTableInputTd">
                                                <div class="percent-input-div">
                                                    <input type="text" class="form-control handleLimit" min="0" max="10" :id="`crd_schedule_rate${currentTab}${item}`" @keypress="$emit('clearError', 'enhancements_credit_schedule_rate')" autocomplete="off">
                                                    <span class="percent-span">%</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div :class="`tab-pane fade ${schedule_type === 'amount' ? 'show active' : ''}`" :id="`nav-amount${currentTab}`" role="tabpanel" :aria-labelledby="`nav-amount-tab${currentTab}`">
                        <div class="d-flex justify-content-center w-100">
                            <div class="schduleTableDiv mt-5 ">
                                <label class="error text-center" v-if="errors[currentTab] && errors[currentTab].enhancements_credit_schedule_amount">{{errors[currentTab].enhancements_credit_schedule_amount}}</label>
                                <table class="table">
                                    <thead>
                                        <th>Year</th>
                                        <th>Amount</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in illustrateYear" :key="index">
                                            <td data-label="Year">{{item}}</td>
                                            <td data-label="Rate" class="amountInnerTableInputTd">
                                                <input type="text" class="form-control handleLimitWithComma" min="1" max="999999" :id="`crd_schedule_amt${currentTab}${item}`" @keypress="$emit('clearError', 'enhancements_credit_schedule_amount')" autocomplete="off">
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
        <input type="hidden" :value="tab" :id="`credit_type${currentTab}`" />
        <input type="hidden" :value="schedule_type" :id="`credit_schedule_type${currentTab}`" />
        <input type="hidden" :value="customAmount || startYear" :id="`crd_start_year${currentTab}`" />
    </div>
</template>
<script>
import { getNumber } from "../../../services/helper.js";
export default {
  props: ["currentTab", "visible", "update", "applyFcAllIndex"],
  inject: ["errors"],
  emits: ["clearError", "setApplyFcAllIndex", "validateFcValues"],
  data() {
    return {
      tab: "fixed",
      schedule_type: "rate",
      startYear: 1,
      maxYear: 5,
      customAmount: "",
    };
  },
  methods: {
    handleStartYear: function(item) {
      this.startYear = item;
      this.customAmount = "";
      this.$refs.customInputRef.value = "";
    },
    updateLatestData: function() {
      this.tab = document.getElementById(`credit_type${this.currentTab}`).value;
      let years = [1, 2, 3, 4, 5];
      let year = Number(
        document.getElementById(`crd_start_year${this.currentTab}`).value
      );
      this.schedule_type = document.getElementById(
        `credit_schedule_type${this.currentTab}`
      ).value;
      if (years.includes(year)) {
        this.startYear = year;
      } else {
        this.customAmount = year;
        this.$refs.customInputRef.value = year;
      }
    },
  },
  mounted() {
    // input validation for min and max value
    const inputs = document.querySelectorAll(".handleLimit");
    inputs.forEach(element =>
      element.addEventListener("input", function(e) {
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
    input2.forEach(element =>
      element.addEventListener("input", function(e) {
        let current = getNumber(e.target.value).toString();
        let min = Number(e.target.getAttribute("min"));
        let max = Number(e.target.getAttribute("max"));
        if (Number(current) < min || Number(current) > max) {
          let actualValue = current.slice(0, current.length - 1);
          e.target.value =
            Number(current) < min ? "" : Number(actualValue).toLocaleString();
          return false;
        } else {
          e.target.value = Number(current).toLocaleString();
        }
      })
    );
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
      this.$emit("validateFcValues", this.tab);
    },
    schedule_type() {
      this.$emit("validateFcValues", this.tab, this.schedule_type);
    },
    "$props.update"() {
      this.updateLatestData();
    },
    "$props.applyFcAllIndex"() {
      this.$emit("setApplyFcAllIndex", false);
      this.updateLatestData();
    },
  },
};
</script>
<style lang="">
</style>