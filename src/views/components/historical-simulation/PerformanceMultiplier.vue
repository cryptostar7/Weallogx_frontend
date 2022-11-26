<template lang="">
    <div class="enhancementsContent pb-5">
        <div class="d-flex justify-content-center align-items-center mt-3">
            <div class="enhancementFixedSheduleBtn nav nav-tabs" id="nav-tab" role="tablist">
                <div class="active" :id="`nav-fixedValue-tab${currentTab}`" data-bs-toggle="tab" :data-bs-target="`#nav-fixedValue${currentTab}`"
                    role="tab" :aria-controls="`nav-fixedValue${currentTab}`" aria-selected="true">Fixed Value</div>
                <div class="" id="nav-schedule-tab" data-bs-toggle="tab" :data-bs-target="`#nav-schedule${currentTab}`" role="tab"
                    :aria-controls="`nav-schedule${currentTab}`" aria-selected="false">Schedule</div>
            </div>
        </div>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" :id="`nav-fixedValue${currentTab}`" role="tabpanel"
                :aria-labelledby="`nav-fixedValue-tab${currentTab}`">
                <form action="javascript:void(0)">

                    <div class="multiplierInputDiv form-group mt-3">
                        <label for="multiplier">Multiplier</label>
                        <input type="text" class="form-control" id="multiplier">
                    </div>

                    <div class="multiplierInputDiv mt-3">
                        <label for="Start Year">Start Year</label>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="fixeValueYearRadio d-flex justify-content-between align-items-center px-1">
                            <label class="" v-for="(item, index) in maxYear" :key="index">
                                <input type="radio" name="radio" class="d-none" :checked="!customAmount && item === 1 ? true :false">
                                <span class="fixedStartYear">{{item}}</span>
                            </label>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="or-div">
                                or
                            </div>
                            <div class="customAmountInputDiv customAmountNoPercent ms-3">
                                <label for="customAmount">Custom Amount</label>
                                <input type="text" ref="input" v-model="customAmount">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="tab-pane fade" :id="`nav-schedule${currentTab}`" role="tabpanel" aria-labelledby="nav-schedule-tab">
                <div class="d-flex justify-content-center w-100">
                    <div class="schduleTableDiv mt-5 ">
                        <table class="table">
                            <thead>
                                <th>Year</th>
                                <th>Multiplier Rate</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in 10" :key="index">
                                    <td data-label="Year">{{item}}</td>
                                    <td data-label="Rate" class="innerTableInputTd">
                                        <div class="percent-input-div"><input type="text"
                                                class="form-control percent-input" required><span
                                                class="percent-span">%</span></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["currentTab"],
  data() {
    return {
      maxYear: 5,
      customAmount: "",
    };
  },
  mounted() {
    this.$refs.input.addEventListener(
      "input",
      function (e) {
        if (e.target.value > 99) {
          let actualValue = e.target.value.slice(0, e.target.value.length - 1);
          e.target.value = actualValue;
          return false;
        }
      },
      false
    );
  },
};
</script>
<style lang="">
</style>