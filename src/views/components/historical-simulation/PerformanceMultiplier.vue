<template lang="">
    <div class="enhancementsContent pb-5">
        <div class="d-flex justify-content-center align-items-center mt-3">
            <div class="enhancementFixedSheduleBtn nav nav-tabs" id="nav-tab" role="tablist">
                <div class="active" :id="`nav-fixedValue-tab${currentTab}`" data-bs-toggle="tab" :data-bs-target="`#nav-fixedValue${currentTab}`" role="tab" :aria-controls="`nav-fixedValue${currentTab}`" aria-selected="true" @click="tab = 'fixed'">Fixed Value</div>
                <div class="" id="nav-schedule-tab" data-bs-toggle="tab" :data-bs-target="`#nav-schedule${currentTab}`" role="tab" :aria-controls="`nav-schedule${currentTab}`" aria-selected="false" @click="tab = 'schedule'">Schedule</div>
            </div>
        </div>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" :id="`nav-fixedValue${currentTab}`" role="tabpanel" :aria-labelledby="`nav-fixedValue-tab${currentTab}`">
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
                                <span class="fixedStartYear" @click="startYear = item">{{item}}</span>
                            </label>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="or-div">
                                or
                            </div>
                            <div class="customAmountInputDiv customAmountNoPercent ms-3">
                                <label for="customAmount">Custom Amount</label>
                                <input type="text" class="handleLimit" @keyup="(e) => customAmount = e.target.value" min="1" :max="illustrateYear">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="tab-pane fade" :id="`nav-schedule${currentTab}`" role="tabpanel" aria-labelledby="nav-schedule-tab">
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
                                            <input type="text" class="form-control handleLimit" min="1" max="10" :id="`multiplier_schedule${currentTab}${item}`"  autocomplete="off">
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
  props: ["currentTab"],
  inject: ["errors"],
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
    testFunction: function() {
      console.log("this.errors");
      console.log(this.errors);
    },
  },

  computed: {
    illustrateYear() {
      return 10;
    },
  },
};
</script>
<style lang="">
</style>