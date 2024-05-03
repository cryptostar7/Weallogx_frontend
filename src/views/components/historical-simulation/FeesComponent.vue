<template lang="">
  <div
    class="indexStrategyallDivs active accordion-button collapsed mt-3"
    data-bs-toggle="collapse"
    :data-bs-target="`#fees-parameters${currentTab}`"
    aria-expanded="false"
    :aria-controls="`fees-parameters${currentTab}`"
  >
    <div
      class="d-flex justify-content-between align-items-center"
      :id="`feesTab${currentTab}`"
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
    :id="`fees-parameters${currentTab}`"
    class="accordion-collapse collapse analysisParametersContent"
    :data-bs-parent="`#fees-parameters${currentTab}`"
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
              :id="`multiplierFee${currentTab}`"
              v-model="sameInAllYears.multiplier_fee"
            />
          </div>
          <label :for="`multiplierFee${currentTab}`" class="buttonSaveRadioPara"
            >Same in All Years</label
          >
        </div>
        <div class="d-flex align-items-center">
          <div class="form-check form-switch custom-switch">
            <input
              class="form-check-input enhanceInputCheckBox"
              type="checkbox"
              role=":switch"
              :id="`applyAllPmf${currentTab}`"
              @change="applyPmfToAllIndex"
            />
          </div>
          <label
            :for="`applyAllPmf${currentTab}`"
            :id="`applyAllPmfLabel${currentTab}`"
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
          <schedule-csv-extraction
            :prefixId="`pmf_schedule${currentTab}`"
            :maxInputs="illustrateYear"
            @clearError="muliplierScheduleError = ''"
          />
          <div class="text-center mb-1">
            <label class="error" v-if="muliplierScheduleError">{{
              muliplierScheduleError
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
                <td
                  data-label="Rate"
                  class="amountInnerTableInputTd feeTdInputWithPercent"
                >
                  <input
                    type="text"
                    class="form-control handleLimit"
                    min="1"
                    max="10"
                    :id="`pmf_schedule${currentTab}${item}`"
                    @keypress="(e) => clearScheduleError(e, 'pmf_schedule')"
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
              :id="`flat-credit-fee-radio${currentTab}`"
              v-model="sameInAllYears.credit_bonus_fee"
            />
          </div>
          <label
            :for="`flat-credit-fee-radio${currentTab}`"
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
              :id="`applyAllFcf${currentTab}`"
              @change="applyFcfToAllIndex"
            />
          </div>
          <label
            :for="`applyAllFcf${currentTab}`"
            :id="`applyAllFcfLabel${currentTab}`"
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
          <schedule-csv-extraction
            :prefixId="`fcf_schedule${currentTab}`"
            :maxInputs="illustrateYear"
            @clearError="flatCreditBonusScheduleError = ''"
          />

          <div class="text-center mb-1">
            <label class="error" v-if="flatCreditBonusScheduleError">{{
              flatCreditBonusScheduleError
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
                <td
                  data-label="Rate"
                  class="amountInnerTableInputTd feeTdInputWithPercent"
                >
                  <input
                    type="text"
                    class="form-control handleLimit"
                    min="0"
                    max="10"
                    :id="`fcf_schedule${currentTab}${item}`"
                    @keypress="(e) => clearScheduleError(e, 'fcf_schedule')"
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
            :name="`highCapFee${currentTab}`"
            class="d-none"
            :checked="
              !customHipCapAmount && hipCapAmount === item ? true : false
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
            @keyup="(e) => (customHipCapAmount = e.target.value)"
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
      :id="`performance_multiplier_fees${currentTab}`"
    />
    <input
      type="hidden"
      :value="sameInAllYears.multiplier_fee ? 1 : 0"
      :id="`pmf_all_year${currentTab}`"
    />
    <input
      type="hidden"
      :value="customFlatAmount || flatAmount"
      :id="`flat_credit_fees${currentTab}`"
    />
    <input
      type="hidden"
      :value="sameInAllYears.credit_bonus_fee ? 1 : 0"
      :id="`fcf_all_year${currentTab}`"
    />
    <input
      type="hidden"
      :value="customHipCapAmount || hipCapAmount"
      :id="`high_cap_fees${currentTab}`"
    />
  </form>
</template>
<script>
import ScheduleCsvExtraction from "../common/ScheduleCsvExtraction.vue";
import { getNumber } from "../../../services/helper";

export default {
  props: [
    "currentTab",
    "performance",
    "flatCreditBonus",
    "update",
    "applyPmfAllIndex",
    "applyFcfAllIndex",
  ],
  components: { ScheduleCsvExtraction },
  inject: ["errors"],
  emits: [
    "clearError",
    "setUpdated",
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
      customHipCapAmount: "",
      hipCapAmount: 0,
      muliplierScheduleError: "",
      flatCreditBonusScheduleError: "",
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
      this.hipCapAmount = item;
      this.customHipCapAmount = "";
      this.$refs.hcCustomRef.value = "";
    },
    isChecked: function (id) {
      return document.getElementById(id).checked;
    },
    // Performance multiplier apply to all tabs
    removePmfApllyAllIndex: function () {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      if (this.isChecked(`applyAllPmf${currentTab}`)) {
        document.getElementById(`applyAllPmf${currentTab}`).checked = false;

        tabs.forEach((tab) => {
          document.getElementById(`applyAllPmf${tab}`).disabled = false; // enable the toggle input
          document
            .getElementById(`applyAllPmfLabel${tab}`)
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
        if (this.isChecked(`applyAllPmf${tab}`) && currentTab !== tab) {
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
            `pmf_schedule${this.$props.currentTab}${i + 1}`
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
        document.getElementById(`pmf_all_year${currentTab}`).value
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
        `performance_multiplier_fees${currentTab}`
      ).value; // get current tab multiplier input value

      if (!this.isAnyPmfAppliedToggle() && e.target.checked) {
        tabs.forEach((tab) => {
          if (currentTab !== tab) {
            document.getElementById(`applyAllPmf${tab}`).checked =
              !e.target.checked; // unchecked the toggle input
            document.getElementById(`applyAllPmf${tab}`).disabled =
              !e.target.checked; // disabled the toggle input
            document
              .getElementById(`applyAllPmfLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label

            if (!pmf_all_year) {
              document.getElementById(`multiplierFee${tab}`).checked = false; // open the schedule inputs in all tabs
            } else {
              document.getElementById(`multiplierFee${tab}`).checked = true; // close the schedule inputs in all tabs
            }

            this.$emit("setApplyPmfAllIndex", true);
          }
        });

        if (!pmf_all_year) {
          for (let i = 0; i < this.illustrateYear; i++) {
            let value = document.getElementById(
              `pmf_schedule${currentTab}${i + 1}`
            ).value; // get current schedule input value
            tabs.forEach((tab) => {
              if (currentTab !== tab) {
                document.getElementById(`pmf_schedule${tab}${i + 1}`).value =
                  value; // set schedule value in all tabs
              }
            });
          }
        } else {
          tabs.forEach((tab) => {
            if (currentTab !== tab) {
              document.getElementById(
                `performance_multiplier_fees${tab}`
              ).value = pmf_fee; // set multiplier value in all tabs
            }
          });
        }
      } else {
        e.target.checked = false;
        tabs.forEach((tab) => {
          if (currentTab !== tab && !this.isAnyPmfAppliedToggle()) {
            document
              .getElementById(`applyAllPmfLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
          }
        });
      }
    },

    // Flat credit bonus fee apply to all tabs
    removeFcfApllyAllIndex: function () {
      let tabs = [1, 2, 3];
      let currentTab = Number(this.$props.currentTab);
      if (this.isChecked(`applyAllFcf${currentTab}`)) {
        document.getElementById(`applyAllFcf${currentTab}`).checked = false;

        tabs.forEach((tab) => {
          document.getElementById(`applyAllFcf${tab}`).disabled = false; // enable the toggle input
          document
            .getElementById(`applyAllFcfLabel${tab}`)
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
        if (this.isChecked(`applyAllFcf${tab}`) && currentTab !== tab) {
          toggle = true;
        }
      });

      return toggle;
    },
    // check data is valid or not for Flat credit bonus fee fee
    validateFcfValues: function () {
      let valid = true;
      let currentTab = Number(this.$props.currentTab);
      let fcf_all_year = Number(this.sameInAllYears.credit_bonus_fee);

      if (!fcf_all_year) {
        for (let i = 0; i < this.illustrateYear; i++) {
          let value = document.getElementById(
            `fcf_schedule${this.$props.currentTab}${i + 1}`
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
        document.getElementById(`flat-credit-fee-radio${currentTab}`).checked
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
        `flat_credit_fees${currentTab}`
      ).value; // get current tab multiplier input value

      if (!this.isAnyFcfAppliedToggle() && e.target.checked) {
        tabs.forEach((tab) => {
          if (currentTab !== tab) {
            document.getElementById(`applyAllFcf${tab}`).checked =
              !e.target.checked; // unchecked the toggle input
            document.getElementById(`applyAllFcf${tab}`).disabled =
              !e.target.checked; // disabled the toggle input
            document
              .getElementById(`applyAllFcfLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label

            if (!fcf_all_year) {
              document.getElementById(
                `flat-credit-fee-radio${tab}`
              ).checked = false; // open the schedule inputs in all tabs
            } else {
              document.getElementById(
                `flat-credit-fee-radio${tab}`
              ).checked = true; // close the schedule inputs in all tabs
            }

            this.$emit("setApplyFcfAllIndex", true);
          }
        });

        if (!fcf_all_year) {
          for (let i = 0; i < this.illustrateYear; i++) {
            let value = document.getElementById(
              `fcf_schedule${currentTab}${i + 1}`
            ).value; // get current schedule input value
            tabs.forEach((tab) => {
              if (currentTab !== tab) {
                document.getElementById(`fcf_schedule${tab}${i + 1}`).value =
                  value; // set schedule value in all tabs
              }
            });
          }
        } else {
          tabs.forEach((tab) => {
            if (currentTab !== tab) {
              document.getElementById(`flat_credit_fees${tab}`).value = pmf_fee; // set multiplier value in all tabs
            }
          });
        }
      } else {
        e.target.checked = false;
        tabs.forEach((tab) => {
          if (currentTab !== tab && !this.isAnyFcfAppliedToggle()) {
            document
              .getElementById(`applyAllFcfLabel${tab}`)
              .classList.toggle("disabled"); // disabled the label
          }
        });
      }
    },
    // populate latest data in input fields
    updateLatestData: function () {
      let charges = [1, 2, 3, 4, 5, 6, 7, 8];
      // Performance multiplier rate
      this.sameInAllYears.multiplier_fee = document.getElementById(
        `multiplierFee${this.currentTab}`
      ).checked;

      if (this.sameInAllYears.multiplier_fee) {
        let ml = Number(
          document.getElementById(
            `performance_multiplier_fees${this.currentTab}`
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
        `flat-credit-fee-radio${this.currentTab}`
      ).checked;

      // (this.sameInAllYears.credit_bonus_fee)

      if (this.sameInAllYears.credit_bonus_fee) {
        let ff = Number(
          document.getElementById(`flat_credit_fees${this.currentTab}`).value
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
        document.getElementById(`high_cap_fees${this.currentTab}`).value
      );
      if ([1, 2, 3].includes(hc)) {
        this.hipCapAmount = hc;
      } else {
        this.customHipCapAmount = hc;
        this.$refs.hcCustomRef.value = hc;
      }

      this.$emit("setUpdated");
    },
    validateMultiplerScheduleData: function () {
      var error_message = "";
      if (this.$props.performance && !this.sameInAllYears.multiplier_fee) {
        for (var y = 1; y < this.illustrateYear + 1; y++) {
          let valid = true;
          let input = document.getElementById(
            `pmf_schedule${this.currentTab}${y}`
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
        this.muliplierScheduleError = error_message;
      }

      return error_message ? false : true;
    },
    validateFlatCreditBonusScheduleData: function () {
      var error_message = "";
      if (
        this.$props.flatCreditBonus &&
        !this.sameInAllYears.credit_bonus_fee
      ) {
        for (var y = 1; y < this.illustrateYear + 1; y++) {
          let valid = true;
          let input = document.getElementById(
            `fcf_schedule${this.currentTab}${y}`
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
        this.flatCreditBonusScheduleError = error_message;
      }

      return error_message ? false : true;
    },
    clearScheduleError: function (e, type) {
      if (e.target) {
        e.target.classList.remove("invalid");
      }

      if (type === "pmf_schedule") {
        this.muliplierScheduleError = "";
      }

      if (type === "fcf_schedule") {
        this.flatCreditBonusScheduleError = "";
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
    "$props.update"(e) {
      if (e) {
        this.updateLatestData();
      }
    },
    "sameInAllYears.multiplier_fee"() {
      this.validatePmfValues();
    },
    "sameInAllYears.credit_bonus_fee"() {
      this.validatePmfValues();
    },
    "$props.applyPmfAllIndex"() {
      this.$emit("setApplyPmfAllIndex", false);
      this.updateLatestData();
    },
    "$props.applyFcfAllIndex"() {
      this.$emit("setApplyFcfAllIndex", false);
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
