<template lang="">
    <div :class="`enhancementsContent pb-2 ${visible ? '' : 'd-none'}`">
        <div class="d-flex justify-content-center align-items-center mt-3">
            <div class="enhancementFixedSheduleBtn nav nav-tabs" id="nav-tab" role="tablist">
                <div :class="tab === 'fixed' ? 'active' : ''" :id="`nav-fixedValue-tab${currentTab}`" data-bs-toggle="tab" :data-bs-target="`#nav-fixedValue${currentTab}`" role="tab" :aria-controls="`nav-fixedValue${currentTab}`" aria-selected="true" @click="tab = 'fixed'">Fixed Value</div>
                <div :class="tab === 'schedule' ? 'active' : ''" :id="`nav-schedule-tab${currentTab}`" data-bs-toggle="tab" :data-bs-target="`#nav-schedule${currentTab}`" role="tab" :aria-controls="`nav-schedule${currentTab}`" aria-selected="false" @click="tab = 'schedule'">Schedule</div>
            </div>
        </div>
        <div class="tab-content" id="nav-tabContent">
            <div :class="`tab-pane fade ${tab === 'fixed' ? 'show active' : ''}`" :id="`nav-fixedValue${currentTab}`" role="tabpanel" :aria-labelledby="`nav-fixedValue-tab${currentTab}`">
                <form action="javascript:void(0)"  autocomplete="off">
                    <div class="multiplierInputDiv form-group mt-3">
                        <label :for="`multiplier_input${currentTab}`">Multiplier</label>
                        <input type="text" class="form-control handleLimit" min="1" max="10" value="1" :id="`multiplier_input${currentTab}`">
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
                                <input type="number" class="onlyPositiveNum"  @keyup="(e) => customAmount = e.target.value" min="1" :max="illustrateYear" ref="customInputRef">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div :class="`tab-pane fade ${tab === 'schedule' ? 'show active' : ''}`" :id="`nav-schedule${currentTab}`" role="tabpanel" :aria-labelledby="`nav-schedule-tab${currentTab}`">
                <div class="d-flex justify-content-center w-100">
                    <div class="schduleTableDiv mt-5 ">
                        <label class="error text-center" v-if="errors[currentTab] && errors[currentTab].enhancements_performance_schedule">{{errors[currentTab].enhancements_performance_schedule}}</label>
                        <table class="table">
                            <thead>
                                <th>Year</th>
                                <th>Multiplier Rate</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in illustrateYear" :key="index">
                                    <td data-label="Year">{{item}}</td>
                                    <td data-label="Rate" class="innerTableInputTd">
                                        <div class="percent-input-div">
                                            <input type="text" class="form-control handleLimit" min="1" max="10" :id="`multiplier_schedule${currentTab}${item}`" @keypress="() => $emit('clearError', 'enhancements_performance_schedule')"  autocomplete="off">
                                            <span class="percent-span">%</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    <input type="hidden" :value="tab" :id="`performance_type${currentTab}`" />
    <input type="hidden" :value="customAmount || startYear" :id="`prf_start_year${currentTab}`" />
    </div>
</template>
<script>
export default {
  props: ["currentTab", "visible", "update", "applyPmAllIndex"],
  inject: ["errors"],
  emits: ["clearError", "setApplyPmAllIndex", "validatePmValues"],
  data() {
    return {
      tab: "fixed",
      startYear: 1,
      maxYear: 5,
      customAmount: "",
    };
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
  },
  methods: {
    handleStartYear: function(item) {
      this.startYear = item;
      this.customAmount = "";
      this.$refs.customInputRef.value = "";
    },
    updateLatestData: function() {
      this.tab = document.getElementById(
        `performance_type${this.currentTab}`
      ).value;
      let years = [1, 2, 3, 4, 5];
      let year = Number(
        document.getElementById(`prf_start_year${this.currentTab}`).value
      );
      if (years.includes(year)) {
        this.startYear = year;
      } else {
        this.customAmount = year;
        this.$refs.customInputRef.value = year;
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
<style lang="">
</style>