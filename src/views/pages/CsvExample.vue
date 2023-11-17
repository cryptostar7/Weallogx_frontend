<template lang="">
  
  <div class="col-sm-6">
    <schedule-csv-extraction prefixId="schedule_tax_rate_" :maxInputs="illustrateYear"/>
    <table class="table tax-rate-table text-center" id="scheduleTaxRateTable">
      <thead>
        <tr>
          <th width="50%">Year</th>
          <th width="50%">Tax Rate %</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!Number(illustrateYear)">
          <td><br /></td>
          <td><br /></td>
        </tr>
        <tr
          v-for="index in 100"
          :key="index"
          :class="Number(illustrateYear) >= index ? '' : 'd-none'"
        >
          <td>
            <div class="fs-15">{{ index }}</div>
          </td>
          <td>
            <div class="p-relative table-input-div percent-input-div">
              <input
                type="number"
                class="form-control handleLimit"
                :id="`schedule_tax_rate_${index}`"
              />
              <span class="percent-span">%</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import ScheduleCsvExtraction from "./../components/common/ScheduleCsvExtraction.vue";
export default {
  data() {
    return {
      illustrateYear: 20,
    };
  },
  components: { ScheduleCsvExtraction },
};
</script>
<style lang="">
</style>
