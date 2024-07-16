<template lang>
  <div>
    <div class="modal fade" id="IncomeStartYearWarningModal"
      tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="accumulation_strategy_box">
            <div
              class="accumulation_strategy_box_head border-0 rounded-0 rounded-top">
              <h2>Increasing Annual Income Schedule</h2>
            </div>
            Your non-guaranteed income
            start year differs from the guaranteed income start year schedule.
            They must match. Please amend one or the other so that both
            schedules
            have the same start year.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";

import {
  getNumber,
} from "../../../../services/helper.js";
import DollarAmountInput from "@/views/retirement-buffer/common-components/DollarAmountInput.vue";
import ScheduleCsvExtraction from "@/views/components/common/ScheduleCsvExtraction.vue";
export default {
  name: 'GuaranteedIncreasingAnnualIncomeScheduleModal',
  props: ['illustrateYear', 'showFormModal'],
  components: { DollarAmountInput, ScheduleCsvExtraction },
  data() {
    return {
      income_type: "manual",
      schedules: [],
    }
  },
  mounted() {
    if (this.inputs.guaranteed_income_type === 'manual' && this.inputs.guaranteed_income_manual) {
      this.inputs.guaranteed_income_manual.forEach((item, index) => {
        this.schedules[index] = item.toLocaleString('en-US');
        let inputElement = document.getElementById(`gt_income_schedule_${index + 1}`);
        if (inputElement) {
          inputElement.value = item.toLocaleString('en-US');
        }
      });
    }
  },
  methods: {
    resetScheduleData() {
      if (this.inputs.guaranteed_income_type === 'manual') {
        for (let index = 0; index < this.schedules.length; index++) {
          var element = document.getElementById(`gt_income_schedule_${index+1}`);        
          if(element){
            element.value = "";
          }
        }
        this.schedules = [];
        let inputs = { ...this.inputs, ['guaranteed_income_manual']: null, ['guaranteed_income_first_year'] : null, ['income_start_year'] : null };
        this.$store.dispatch("incomeRider/updateInputs", inputs);
      }else{
        this.updateInput('guaranteed_income_first_year', null);
        this.updateInput('guaranteed_income_last_year', null);
      }
    },
    saveScheduleData() {
      if (this.inputs.guaranteed_income_type === 'manual') {
        let array = [];
        let guaranteed_income_first_year = null;
        let income_start_year = null;
        for (let index = 0; index < this.$props.illustrateYear; index++) {
          let value = getNumber(this.schedules[index]);
          if(value && !guaranteed_income_first_year){
            guaranteed_income_first_year =  value;
            income_start_year = index+1;
          }
          array.push(value);
        }
        let inputs = { ...this.inputs, ['guaranteed_income_manual']: array, ['guaranteed_income_first_year'] : guaranteed_income_first_year, ['income_start_year'] : income_start_year };
        this.$store.dispatch("incomeRider/updateInputs", inputs);
      } else {
        let cagr = Number(Number(((this.inputs.guaranteed_income_last_year / this.inputs.guaranteed_income_first_year) ** (1 / (this.$props.illustrateYear - this.inputs.income_start_year)) - 1) * 100).toFixed(2));
        let inputs = { ...this.inputs, ['guaranteed_income_increase']: cagr < 0 ? 0 : cagr, ['guaranteed_income_manual']: null };
        this.$store.dispatch("incomeRider/updateInputs", inputs);
      }
    },

    updateSchedule(index, value) {
      this.schedules[index] = value;
    },
    handleCSV(e) {
      if (e && e.length) {
        e.forEach((item, index) => {
          if (item[0]) {
            this.schedules[index] = item[0];
          }
        });
      }
    },
    updateInput(field, value) {
      let inputs = { ...this.inputs, [field]: value };
      this.$store.dispatch("incomeRider/updateInputs", inputs);
    },
  },
  computed: {
    ...mapState({
      inputs: (state) => state.incomeRider.inputs,
    }),
  }
}
</script>
<style lang></style>