<template lang>
  <div>
    <div class="modal fade" id="NonGuaranteedIncreasingAnnualIncomeScheduleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop='static'>
      <a type="button" data-bs-dismiss="modal" class="preview-modal-close" :data-bs-toggle="showFormModal ? 'modal' : ''" :data-bs-target="showFormModal ? '#incomeRideFormModal' : ''">
        <svg width="45" height="48" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group 1974" filter="url(#filter0_d_346_5079)">
            <rect id="Rectangle 174" width="49.4476" height="5.7055" rx="2.85275" transform="matrix(0.707099 0.707114 -0.707099 0.707114 7.03516 0.000488281)" fill="#26AB8B"></rect>
            <rect id="Rectangle 175" width="49.4476" height="5.7055" rx="2.85275" transform="matrix(-0.707099 0.707114 -0.707099 -0.707114 42 4.03442)" fill="#26AB8B"></rect>
          </g>
        </svg>
      </a>
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="accumulation_strategy_box">
            <div class="accumulation_strategy_box_head border-0 rounded-0">
              <h2>Increasing Annual Income Schedule</h2>
            </div>
            <div class="income-rider-modal-body">
              <div class="nav income-rider-modal-tabs table_top_tab nav-pills" role="tablist" aria-orientation="vertical">
                <div :class="this.inputs.non_guaranteed_income_type === 'mannual' ? 'active' : ''" data-bs-toggle="pill" data-bs-target="#year-by-year-tab2" type="button" role="tab" aria-controls="year-by-year-tab2" :aria-selected="this.inputs.non_guaranteed_income_type === 'mannual'" @click="updateInput('non_guaranteed_income_type', 'mannual')">
                  Year by Year
                </div>
                <div :class="this.inputs.non_guaranteed_income_type === 'year_bounded' ? 'active' : ''" data-bs-toggle="pill" data-bs-target="#first-and-last-year-tab2" type="button" role="tab" aria-controls="first-and-last-year-tab2" :aria-selected="this.inputs.non_guaranteed_income_type === 'year_bounded'" @click="updateInput('non_guaranteed_income_type', 'year_bounded')">
                  First and Last Year
                </div>
              </div>
              <div class="modal-scrooll-div">
                <div class="tab-content" id="nav-tabContent">
                  <div :class="`tab-pane fade ${this.inputs.non_guaranteed_income_type === 'mannual' ? 'show active' : ''}`" id="year-by-year-tab2" role="tabpanel" aria-labelledby="year-by-year-tab2">
                    <p class="para">Enter the increasing income schedule from the
                      illustration</p>
                    <div class="income-rider-table form-group">
                      <div class="form-group mb-0">
                        <schedule-csv-extraction prefixId="non_gt_income_schedule_" :maxInputs="Number(illustrateYear)" @dataUpdate="handleCSV" />
                      </div>
                      <table class="table tax-rate-table text-center" id="scheduleTaxRateTable">
                        <thead>
                          <tr>
                            <th width="50%">Year</th>
                            <th width="50%">Annual Income Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in illustrateYear" :key="index">
                            <td>
                              <div class="fs-15">{{ index + 1 }}</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div">
                                <dollar-amount-input :id="`non_gt_income_schedule_${index + 1}`" class="form-control" max="100000000" @amountUpdated="(e) => updateSchedule(index, e)" />
                                <span class="dollar-span">$</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div :class="`tab-pane fade ${this.inputs.non_guaranteed_income_type === 'year_bounded' ? 'show active' : ''}`" id="first-and-last-year-tab2" role="tabpanel" aria-labelledby="first-and-last-year-tab2">
                    <p class="para">Enter the first and last year’s income values
                      from
                      the illustration</p>
                    <div class="income-rider-table form-group">
                      <table class="table tax-rate-table text-center" id="scheduleTaxRateTable">
                        <thead>
                          <tr>
                            <th width="50%">Year</th>
                            <th width="50%">Annual Income Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <!---->

                          <tr>
                            <td>
                              <div class="fs-15">First Year</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div">
                                <dollar-amount-input class="form-control" max="100000000" placeholder :default="inputs.non_guaranteed_income_first_year" @amountUpdated="(e) => updateInput('non_guaranteed_income_first_year', e)" />
                                <span class="dollar-span">$</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="fs-15 form_section_label_div justify-content-center">Last
                                Year
                                <label for="premium-bonus" class="main_label"><span><svg class="label-common-tooltip-svg" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g id="Group 1968">
                                        <circle id="Ellipse 190" cx="6.5" cy="6.5" r="6.5" fill="#D0D0D0"></circle>
                                        <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1" fill="white"></circle>
                                        <rect id="Rectangle 753" x="5.75" y="5.5" width="1.5" height="5" rx="0.75" fill="white"></rect>
                                      </g>
                                    </svg><span class="text-start"> This should be the value
                                      for
                                      the “Plan Through Age” you defined earlier.
                                      For
                                      example, if you entered “95”, you would put
                                      the
                                      income value at age 95 from the illustration
                                      here.</span></span></label>

                              </div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div">
                                <dollar-amount-input class="form-control" max="100000000" placeholder :default="inputs.non_guaranteed_income_last_year" @amountUpdated="(e) => updateInput('non_guaranteed_income_last_year', e)" />
                                <span class="dollar-span">$</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <button class="mb-5 mt-4 run_btn" data-bs-dismiss="modal" :data-bs-toggle="showFormModal ? 'modal' : ''" :data-bs-target="showFormModal ? '#incomeRideFormModal' : ''" @click="saveScheduleData">Save</button>
            </div>
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
  name: 'NonGuaranteedIncreasingAnnualIncomeScheduleModal',
  props: ['illustrateYear', 'showFormModal'],
  components: { DollarAmountInput, ScheduleCsvExtraction },
  data() {
    return {
      income_type: "mannual",
      schedules: [],
    }
  },
  mounted() {
    if (this.inputs.non_guaranteed_income_type === 'mannual' && this.inputs.non_guaranteed_income_manual) {
      this.inputs.non_guaranteed_income_manual.forEach((item, index) => {
        this.schedules[index] = item.toLocaleString('en-US');
        let inputElement = document.getElementById(`non_gt_income_schedule_${index+1}`);
          if(inputElement){
            inputElement.value= item.toLocaleString('en-US');
          }
      });
    }
  },
  methods: {
    saveScheduleData() {
      if (this.inputs.non_guaranteed_income_type === 'mannual') {
        let array = [];
        for (let index = 0; index < this.$props.illustrateYear; index++) {
          array.push(getNumber(this.schedules[index]));
        }
        let inputs = { ...this.inputs, ['non_guaranteed_income_manual']: array };
        this.$store.dispatch("incomeRider/updateInputs", inputs);

      } else {
        let cagr = Number(Number(((this.inputs.non_guaranteed_income_last_year / this.inputs.non_guaranteed_income_first_year) ** (1 / (this.$props.illustrateYear - this.inputs.income_start_year)) - 1) * 100).toFixed(2));
        let inputs = { ...this.inputs, ['non_guaranteed_income_increase']: cagr < 0 ? 0 : cagr, ['non_guaranteed_income_manual'] : null};

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