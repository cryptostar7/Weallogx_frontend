<template lang="">
  <div
    class="indexStrategyallDivs active accordion-button collapsed mt-3"
    data-bs-toggle="collapse"
    :data-bs-target="`#simulation-fees-parameters${currentTab}`"
    aria-expanded="false"
    :aria-controls="`simulation-fees-parameters${currentTab}`"
  >
    <div
      class="d-flex justify-content-between align-items-center"
      :id="`fees-parameters${currentTab}`"
    >
      <div class="indexStrategyheadBrdr">
        <p>
          Fees
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
    :id="`simulation-fees-parameters${currentTab}`"
    class="accordion-collapse collapse analysisParametersContent"
    :data-bs-parent="`#simulation-fees-parameters${currentTab}`"
    autocomplete="off"
  >
    <div :class="$props.performance ? '' : 'd-none'">
      <div class="formParabrdrLavelDiv mt-2">
        <p>Performance Multiplier Fee</p>
        <p></p>
      </div>
      <div
        class="d-flex justify-content-between align-items-center parent-radio-div"
      >
        <div
          class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1 gap-4px"
        >
          <label
            v-for="(item, index) in MaxPerformanceMultiplierFee"
            :key="index"
            class="flex-1"
          >
            <input
              type="radio"
              :name="`perfMultiplier${currentTab}`"
              :checked="
                !customPerformanceFeeAmount && item === performanceFeeAmount
                  ? true
                  : false
              "
              class="d-none"
            />
            <span class="fixedStartYear" @click="handlePMCheckbox(item)"
              >{{ item }}%</span
            >
          </label>
        </div>
        <div class="d-flex align-items-center">
          <div class="or-div">or</div>
          <div
            class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3"
          >
            <label for="customAmount">Custom Amount</label>
            <input
              type="text"
              class="handleLimit"
              @keyup="(e) => (customPerformanceFeeAmount = e.target.value)"
              min="0"
              max="10"
              ref="customPMRef"
            />
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-1 mw-78">
        <div class="d-flex align-items-center">
          <div class="form-check form-switch custom-switch ms-2">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              :id="`simulationMultiplierFee${currentTab}`"
              v-model="sameInAllYears.multiplier_fee"
            />
          </div>
          <label :for="`simulationMultiplierFee${currentTab}`" class="buttonSaveRadioPara"
            >Same in All Years</label
          >
        </div>
        <div class="d-flex align-items-center">
          <div class="form-check form-switch custom-switch">
            <input
              class="form-check-input enhanceInputCheckBox"
              type="checkbox"
              role=":switch"
              :id="`simulationApplyAllPmf${currentTab}`"
              @change="applyPmfToAllIndex"
            />
          </div>
          <label
            :for="`simulationApplyAllPmf${currentTab}`"
            :id="`simulationApplyAllPmfLabel${currentTab}`"
            class="buttonSaveRadioPara"
            >Apply To All Index Strategies</label
          >
        </div>
      </div>

      <div
        :class="`d-flex justify-content-center w-100 ${
          sameInAllYears.multiplier_fee ? 'd-none' : ''
        }`"
      >
        <div class="schduleTableDiv mt-5">
          <label
            class="error text-center"
            v-if="errors[currentTab] && errors[currentTab].fee_pmf_schedule"
            >{{ errors[currentTab].fee_pmf_schedule }}</label
          >
          <schedule-csv-extraction
            :prefixId="`simulation_pmf_schedule${currentTab}`"
            :maxInputs="illustrateYear"
            @clearError="$emit('clearError', currentTab, 'fee_pmf_schedule')"
          />
          <table class="table">
            <thead>
              <th>Year</th>
              <th>Rate</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in illustrateYear" :key="index">
                <td data-label="Year">{{ item }}</td>
                <td
                  data-label="Rate"
                  class="amountInnerTableInputTd feeTdInputWithPercent"
                >
                  <input
                    type="text"
                    class="form-control handleLimit"
                    min="0"
                    max="10"
                    :id="`simulation_pmf_schedule${currentTab}${item}`"
                    @keypress="
                      $emit('clearError', currentTab, 'fee_pmf_schedule')
                    "
                  />
                  <label for="amount">%</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div :class="$props.flatCreditBonus ? '' : 'd-none'">
      <div class="formParabrdrLavelDiv mt-4">
        <p>Flat Credit/Bonus Fee</p>
        <p></p>
      </div>
      <div
        class="d-flex justify-content-between align-items-center parent-radio-div"
      >
        <div
          class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1 gap-4px"
        >
          <label v-for="(item, index) in 3" :key="index" class="flex-1">
            <input
              type="radio"
              :name="`flatCredit${currentTab}`"
              class="d-none"
              :checked="!customFlatAmount && item === flatAmount ? true : false"
            />
            <span class="fixedStartYear" @click="handleFCCheckbox(item)"
              >{{ item }}%</span
            >
          </label>
        </div>
        <div class="d-flex align-items-center">
          <div class="or-div">or</div>
          <div
            class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3"
          >
            <label for="customAmount">Custom Amount</label>
            <input
              type="text"
              class="handleLimit"
              @keyup="(e) => (customFlatAmount = e.target.value)"
              min="0"
              max="10"
              ref="customFCRef"
            />
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-1 mw-78">
        <div class="d-flex align-items-center">
          <div class="form-check form-switch custom-switch ms-2">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              :id="`simulation-flat-credit-fee-radio${currentTab}`"
              v-model="sameInAllYears.credit_bonus_fee"
            />
          </div>
          <label
            :for="`simulation-flat-credit-fee-radio${currentTab}`"
            class="buttonSaveRadioPara"
            >Same in All Years</label
          >
        </div>
        <div class="d-flex align-items-center">
          <div class="form-check form-switch custom-switch">
            <input
              class="form-check-input enhanceInputCheckBox"
              type="checkbox"
              role=":switch"
              :id="`simulationApplyAllFcf${currentTab}`"
              @change="applyFcfToAllIndex"
            />
          </div>
          <label
            :for="`simulationApplyAllFcf${currentTab}`"
            :id="`simulationApplyAllFcfLabel${currentTab}`"
            class="buttonSaveRadioPara"
            >Apply To All Index Strategies</label
          >
        </div>
      </div>
      <div
        :class="`d-flex justify-content-center w-100 ${
          sameInAllYears.credit_bonus_fee ? 'd-none' : ''
        }`"
      >
        <div class="schduleTableDiv mt-5">
          <label
            class="error text-center"
            v-if="errors[currentTab] && errors[currentTab].fee_fcf_schedule"
            >{{ errors[currentTab].fee_fcf_schedule }}</label
          >
          <schedule-csv-extraction
            :prefixId="`simulation_fcf_schedule${currentTab}`"
            :maxInputs="illustrateYear"
            @clearError="$emit('clearError', currentTab, 'fee_fcf_schedule')"
          />
          <table class="table">
            <thead>
              <th>Year</th>
              <th>Rate</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in illustrateYear" :key="index">
                <td data-label="Year">{{ item }}</td>
                <td
                  data-label="Rate"
                  class="amountInnerTableInputTd feeTdInputWithPercent"
                >
                  <input
                    type="text"
                    class="form-control handleLimit"
                    min="0"
                    max="10"
                    :id="`simulation_fcf_schedule${currentTab}${item}`"
                    @keypress="
                      $emit('clearError', currentTab, 'fee_fcf_schedule')
                    "
                  />
                  <label for="amount">%</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="formParabrdrLavelDiv mt-4">
      <p>
        High Cap Fee <span class="optionalCommonTxt">&nbsp;&nbsp;OPTIONAL</span>
      </p>
      <p></p>
    </div>
    <div
      class="d-flex justify-content-between align-items-center parent-radio-div"
    >
      <div
        class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1 gap-4px"
      >
        <label v-for="(item, index) in 3" :key="index" class="flex-1">
          <input
            type="radio"
            :name="`simulationHighCapFee${currentTab}`"
            class="d-none"
            :checked="
              !customHighCapAmount && highCapAmount === item ? true : false
            "
          />
          <span class="fixedStartYear w-100" @click="handleHCCheckbox(item)"
            >{{ item }}%</span
          >
        </label>
      </div>
      <div class="d-flex align-items-center">
        <div class="or-div">or</div>
        <div
          class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3"
        >
          <label for="customAmount">Custom Amount</label>
          <input
            type="text"
            class="handleLimit"
            @keyup="(e) => (customHighCapAmount = e.target.value)"
            min="0"
            max="5"
            ref="hcCustomRef"
          />
        </div>
      </div>
    </div>

    <input
      type="hidden"
      :value="customPerformanceFeeAmount || performanceFeeAmount"
      :id="`simulation_performance_multiplier_fees${currentTab}`"
    />
    <input
      type="hidden"
      :value="sameInAllYears.multiplier_fee ? 1 : 0"
      :id="`simulation_pmf_all_year${currentTab}`"
    />
    <input
      type="hidden"
      :value="customFlatAmount || flatAmount"
      :id="`simulation_flat_credit_fees${currentTab}`"
    />
    <input
      type="hidden"
      :value="sameInAllYears.credit_bonus_fee ? 1 : 0"
      :id="`simulation_fcf_all_year${currentTab}`"
    />
    <input
      type="hidden"
      :value="customHighCapAmount || highCapAmount"
      :id="`simulation_high_cap_fees${currentTab}`"
    />
  </form>
</template>
<script>
import ScheduleCsvExtraction from "../../../../components/common/ScheduleCsvExtraction.vue";

export default {
  props: [
    "currentTab",
    "performance",
    "flatCreditBonus",
    "applyPmfAllIndex",
    "applyFcfAllIndex",
  ],
  components: { ScheduleCsvExtraction },
  inject: ["errors"],
  emits: [
    "clearError",
    "setApplyPmfAllIndex",
    "setApplyFcfAllIndex",
  ],
  data() {
    return {
      MaxPerformanceMultiplierFee: 8,
      sameInAllYears: {
        multiplier_fee: true,
        credit_bonus_fee: true,
      },
      customInterestAmount: "",
      customPerformanceFeeAmount: "",
      performanceFeeAmount: 0,
      customFlatAmount: "",
      flatAmount: 0,
      customHighCapAmount: "",
      highCapAmount: 0,
    };
  },
  methods: {
    handlePcCheckbox: function (item) {
      this.$refs.customPCRef.value = "";
    },
    handleLICheckbox: function (item) {
      this.customInterestAmount = "";
      this.$refs.customLIRef.value = "";
    },
    handlePMCheckbox: function (item) {
      this.performanceFeeAmount = item;
      this.customPerformanceFeeAmount = "";
      this.$refs.customPMRef.value = "";
    },
    handleFCCheckbox: function (item) {
      this.flatAmount = item;
      this.customFlatAmount = "";
      this.$refs.customFCRef.value = "";
    },
    handleHCCheckbox: function (item) {
      this.highCapAmount = item;
      this.customHighCapAmount = "";
      this.$refs.hcCustomRef.value = "";
    },
    isChecked: function (id) {
      return document.getElementById(id).checked;
    },
    // Performance multiplier apply to all tabs
    removePmfApllyAllIndex: function () {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      if (this.isChecked(`simulationApplyAllPmf${currentTab}`)) {
        document.getElementById(`simulationApplyAllPmf${currentTab}`).checked = false;

        tabs.forEach((tab) => {
          document.getElementById(`simulationApplyAllPmf${tab}`).disabled = false; // enable the toggle input
          document
            .getElementById(`simulationApplyAllPmfLabel${tab}`)
            .classList.remove("disabled"); // disabled the label
        });
      }
    },
    // check any applied toggle for performance multiplier fee
    isAnyPmfAppliedToggle: function () {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let toggle = false;

      tabs.forEach((tab) => {
        if (this.isChecked(`simulationApplyAllPmf${tab}`) && currentTab !== tab) {
          toggle = true;
        }
      });

      return toggle;
    },
    // check data is valid or not for performance multiplier fee
    validatePmfValues: function () {
      let valid = true;
      let currentTab = Number(this.$props.currentTab);
      let pmf_all_year = Number(this.sameInAllYears.multiplier_fee);

      if (!pmf_all_year) {
        for (let i = 0; i < this.illustrateYear; i++) {
          let value = document.getElementById(
            `simulation_pmf_schedule${this.$props.currentTab}${i + 1}`
          ).value; // get current schedule input value

          if (!value) {
            valid = false;
          }
        }
      }

      if (!valid) {
        this.removePmfApllyAllIndex();
      }

      return valid;
    },
    // handle apply to all index strategies for performance multiplier fee
    applyPmfToAllIndex: function (e) {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let pmf_all_year = Number(
        document.getElementById(`simulation_pmf_all_year${currentTab}`).value
      );

      // Show warning message if shedule data is not filled in all inputs
      if (
        !this.isAnyPmfAppliedToggle() &&
        !pmf_all_year &&
        !this.validatePmfValues()
      ) {
        this.$toast.warning("Please enter all years schedule values");
        return false;
      }

      let pmf_fee = document.getElementById(
        `simulation_performance_multiplier_fees${currentTab}`
      ).value; // get current tab multiplier input value

      if (!this.isAnyPmfAppliedToggle() && e.target.checked) {
        tabs.forEach((tab) => {
          if (currentTab !== tab) {
            document.getElementById(`simulationApplyAllPmf${tab}`).checked =
              !e.target.checked; // unchecked the toggle input
            document.getElementById(`simulationApplyAllPmf${tab}`).disabled =
              !e.target.checked; // disabled the toggle input
            document
              .getElementById(`simulationApplyAllPmfLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label

            if (!pmf_all_year) {
              document.getElementById(`simulationMultiplierFee${tab}`).checked = false; // open the schedule inputs in all tabs
            } else {
              document.getElementById(`simulationMultiplierFee${tab}`).checked = true; // close the schedule inputs in all tabs
            }

            this.$emit("setApplyPmfAllIndex", true);
          }
        });

        if (!pmf_all_year) {
          for (let i = 0; i < this.illustrateYear; i++) {
            let value = document.getElementById(
              `simulation_pmf_schedule${currentTab}${i + 1}`
            ).value; // get current schedule input value
            tabs.forEach((tab) => {
              if (currentTab !== tab) {
                document.getElementById(`simulation_pmf_schedule${tab}${i + 1}`).value =
                  value; // set schedule value in all tabs
              }
            });
          }
        } else {
          tabs.forEach((tab) => {
            if (currentTab !== tab) {
              document.getElementById(
                `simulation_performance_multiplier_fees${tab}`
              ).value = pmf_fee; // set multiplier value in all tabs
            }
          });
        }
      } else {
        e.target.checked = false;
        tabs.forEach((tab) => {
          if (currentTab !== tab && !this.isAnyPmfAppliedToggle()) {
            document
              .getElementById(`simulationApplyAllPmfLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
          }
        });
      }
    },

    // Flat credit bonus fee apply to all tabs
    removeFcfApllyAllIndex: function () {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      if (this.isChecked(`simulationApplyAllFcf${currentTab}`)) {
        document.getElementById(`simulationApplyAllFcf${currentTab}`).checked = false;

        tabs.forEach((tab) => {
          document.getElementById(`simulationApplyAllFcf${tab}`).disabled = false; // enable the toggle input
          document
            .getElementById(`simulationApplyAllFcfLabel${tab}`)
            .classList.remove("disabled"); // disabled the label
        });
      }
    },
    // check any applied toggle for Flat credit bonus fee fee
    isAnyFcfAppliedToggle: function () {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let toggle = false;

      tabs.forEach((tab) => {
        if (this.isChecked(`simulationApplyAllFcf${tab}`) && currentTab !== tab) {
          toggle = true;
        }
      });

      return toggle;
    },
    // check data is valid or not for Flat credit bonus fee fee
    validateFcfValues: function () {
      let valid = true;
      let fcf_all_year = Number(this.sameInAllYears.credit_bonus_fee);

      if (!fcf_all_year) {
        for (let i = 0; i < this.illustrateYear; i++) {
          let value = document.getElementById(
            `simulation_fcf_schedule${this.$props.currentTab}${i + 1}`
          ).value; // get current schedule input value

          if (!value) {
            valid = false;
          }
        }
      }

      if (!valid) {
        this.removeFcfApllyAllIndex();
      }

      return valid;
    },
    // handle apply to all index strategies for Flat credit bonus fee fee
    applyFcfToAllIndex: function (e) {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      let fcf_all_year = Number(
        document.getElementById(`simulation-flat-credit-fee-radio${currentTab}`).checked
      );

      // Show warning message if shedule data is not filled in all inputs
      if (
        !this.isAnyFcfAppliedToggle() &&
        !fcf_all_year &&
        !this.validateFcfValues()
      ) {
        this.$toast.warning("Please enter all years schedule values");
        return false;
      }

      let pmf_fee = document.getElementById(
        `simulation_flat_credit_fees${currentTab}`
      ).value; // get current tab multiplier input value

      if (!this.isAnyFcfAppliedToggle() && e.target.checked) {
        tabs.forEach((tab) => {
          if (currentTab !== tab) {
            document.getElementById(`simulationApplyAllFcf${tab}`).checked =
              !e.target.checked; // unchecked the toggle input
            document.getElementById(`simulationApplyAllFcf${tab}`).disabled =
              !e.target.checked; // disabled the toggle input
            document
              .getElementById(`simulationApplyAllFcfLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label

            if (!fcf_all_year) {
              document.getElementById(
                `simulation-flat-credit-fee-radio${tab}`
              ).checked = false; // open the schedule inputs in all tabs
            } else {
              document.getElementById(
                `simulation-flat-credit-fee-radio${tab}`
              ).checked = true; // close the schedule inputs in all tabs
            }

            this.$emit("setApplyFcfAllIndex", true);
          }
        });

        if (!fcf_all_year) {
          for (let i = 0; i < this.illustrateYear; i++) {
            let value = document.getElementById(
              `simulation_fcf_schedule${currentTab}${i + 1}`
            ).value; // get current schedule input value
            tabs.forEach((tab) => {
              if (currentTab !== tab) {
                document.getElementById(`simulation_fcf_schedule${tab}${i + 1}`).value =
                  value; // set schedule value in all tabs
              }
            });
          }
        } else {
          tabs.forEach((tab) => {
            if (currentTab !== tab) {
              document.getElementById(`simulation_flat_credit_fees${tab}`).value = pmf_fee; // set multiplier value in all tabs
            }
          });
        }
      } else {
        e.target.checked = false;
        tabs.forEach((tab) => {
          if (currentTab !== tab && !this.isAnyFcfAppliedToggle()) {
            document
              .getElementById(`simulationApplyAllFcfLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
          }
        });
      }
    },
    // populate latest data in input fields
    updateData: function () {
      let charges = [1, 2, 3, 4, 5, 6, 7, 8];
      // Performance multiplier rate
      this.sameInAllYears.multiplier_fee = document.getElementById(
        `simulationMultiplierFee${this.currentTab}`
      ).checked;

      if (this.sameInAllYears.multiplier_fee) {
        let ml = Number(
          document.getElementById(
            `simulation_performance_multiplier_fees${this.currentTab}`
          ).value
        );

        if (charges.includes(ml)) {
          this.performanceFeeAmount = ml;
        } else {
          this.customPerformanceFeeAmount = ml;
          this.$refs.customPMRef.value = ml;
        }
      } else {
        this.performanceFeeAmount = "";
      }

      // Flat Credit/Bonus rate
      this.sameInAllYears.credit_bonus_fee = document.getElementById(
        `simulation-flat-credit-fee-radio${this.currentTab}`
      ).checked;

      // (this.sameInAllYears.credit_bonus_fee)

      if (this.sameInAllYears.credit_bonus_fee) {
        let ff = Number(
          document.getElementById(`simulation_flat_credit_fees${this.currentTab}`).value
        );

        if ([1, 2, 3].includes(ff)) {
          this.flatAmount = ff;
        } else {
          this.customFlatAmount = ff;
          this.$refs.customFCRef.value = ff;
        }
      } else {
        this.flatAmount = "";
      }

      // high cap fee
      let hc = Number(
        document.getElementById(`simulation_high_cap_fees${this.currentTab}`).value
      );
      if ([1, 2, 3].includes(hc)) {
        this.highCapAmount = hc;
        this.customHighCapAmount = "";
        this.$refs.hcCustomRef.value = "";
      } else {
        this.highCapAmount = 0;
        this.customHighCapAmount = hc;
        this.$refs.hcCustomRef.value = hc;
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
    "sameInAllYears.multiplier_fee"() {
      this.validatePmfValues();
    },
    "sameInAllYears.credit_bonus_fee"() {
      this.validatePmfValues();
    },
    "$props.applyPmfAllIndex"() {
      this.$emit("setApplyPmfAllIndex", false);
      this.updateData();
    },
    "$props.applyFcfAllIndex"() {
      this.$emit("setApplyFcfAllIndex", false);
      this.updateData();
    },
  },
};
</script>
<style lang=""></style>
