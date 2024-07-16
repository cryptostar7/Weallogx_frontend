<template>
  <div>
    <div class="accumulation_strategy_box_head">
      <h2>Income Rider Strategy</h2>
      <img src="@/assets/images/icons/income-rider.svg" alt="Income Rider" />
    </div>
    <div class="accumulation_strategy_inner_box">
      <p class="form_section_para">Comparative Vehicle</p>
      <div class="row">
        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div">
            <label for="totalBalanceInput" class="main_label">
              Total Balance
              <span>
                <common-tooltip-svg />
                <span>
                  What is the total balance of the account being considered?
                </span>
              </span>
            </label>
          </div>
          <div class="form_section_input_div">
            <dollar-amount-input
              id="totalBalanceInput"
              class="dollar_inp"
              max="100000000"
              placeholder="Total Balance"
              :default="inputs.total_balance"
              @amountUpdated="(e) => updateInput('total_balance', e)"
            />
            <span class="dollar">$</span>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div">
            <label for="accountTypeSelect" class="main_label"
              >Account Type</label
            >
          </div>
          <custom-select-dropdown
            :default="inputs.account_type ? inputs.account_type.label : ''"
            @selected="(value) => updateInput('account_type', value)"
            :options="accountTypeOpts"
          />
        </div>
        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div">
            <label for="accountNameInput" class="main_label">
              Account Name
              <span>
                <common-tooltip-svg />
                <span>
                  What would you like the report to show as the account's name?
                </span>
              </span>
            </label>
          </div>
          <div class="form_section_input_div">
            <input
              id="accountNameInput"
              :value="inputs.comparative_vehicle_account_name"
              @input="
                (e) =>
                  updateInput(
                    'comparative_vehicle_account_name',
                    e.target.value
                  )
              "
              type="text"
            />
          </div>
        </div>
        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div">
            <label for="taxRateInput" class="main_label">
              Tax Rate
              <span class="optional">(Optional)</span>
            </label>
          </div>
          <div class="form_section_input_div">
            <number-amount-input
              id="taxRateInput"
              class="percent_inp"
              :default="inputs.tax_rate"
              :max="100"
              @amountUpdated="(e) => updateInput('tax_rate', e)"
            />
            <span class="percent">%</span>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div">
            <label for="currentAgeInput" class="main_label">
              Current Age
              <span>
                <common-tooltip-svg />
                <span>
                  This should match the age as shown on year one of the
                  illustration.
                </span>
              </span>
            </label>
          </div>
          <div class="form_section_input_div">
            <number-amount-input
              id="currentAgeInput"
              :default="inputs.current_age"
              @amountUpdated="(e) => updateInput('current_age', e)"
              :max="100"
            />
          </div>
        </div>
        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div">
            <label for="planThroughAgeInput" class="main_label"
              >Plan Through Age</label
            >
          </div>
          <div class="form_section_input_div">
            <number-amount-input
              id="planThroughAgeInput"
              :default="inputs.plan_through_age"
              @amountUpdated="(e) => updateInput('plan_through_age', e)"
              :max="100"
            />
          </div>
        </div>
        <div class="col-md-4 col-lg-3">
          <div class="form_section_label_div">
            <label for="growthRateInput" class="main_label">Growth Rate</label>
          </div>
          <div class="form_section_input_div">
            <number-amount-input
              id="growthRateInput"
              class="percent_inp"
              :default="inputs.growth_rate"
              @amountUpdated="(e) => updateInput('growth_rate', e)"
              :max="100"
            />
            <span class="percent">%</span>
          </div>
        </div>
        <div class="col-md-4 col-lg-3">
          <div class="form_section_label_div">
            <label for="feeInput" class="main_label">
              Fee
              <span class="optional">(Optional)</span>
            </label>
          </div>
          <div class="form_section_input_div">
            <number-amount-input
              id="feeInput"
              class="percent_inp"
              :default="inputs.fee"
              @amountUpdated="(e) => updateInput('fee', e)"
              :max="100"
            />
            <span class="percent">%</span>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div">
            <label for="indexAllocationSelect" class="main_label"
              >Index Allocation</label
            >
          </div>
          <custom-select-dropdown
            :default="
              inputs.index_allocation ? inputs.index_allocation.label : ''
            "
            @selected="(value) => updateInput('index_allocation', value)"
            :options="indexAllocationOpts"
          />
        </div>
      </div>

      <!-- Income rider details -->

      <p class="form_section_para mt-3">Income Rider Details</p>
      <div class="row mb-3">
        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div">
            <label for="incomeRiderAccountNameInput" class="main_label"
              >Account Name</label
            >
          </div>
          <div class="form_section_input_div">
            <input
              id="incomeRiderAccountNameInput"
              :value="inputs.income_rider_account_name"
              @input="
                (e) => updateInput('income_rider_account_name', e.target.value)
              "
              type="text"
            />
          </div>
        </div>

        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div">
            <label for="guaranteedIncomeAmountInput" class="main_label"
              >Guaranteed Income Amount</label
            >

            <div class="label-right-div">
              <div class="label_checkbox">
                <input
                  type="checkbox"
                  name="annual-increase"
                  id="gtScheduleCheck"
                  v-model="guaranteedIncomeSchedule"
                  hidden="true"
                />
                <label for="gtScheduleCheck"></label>
                <svg
                  @click="guaranteedIncomeSchedule = true"
                  class="cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#GuaranteedIncreasingAnnualIncomeScheduleModal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="11.6923"
                    height="10"
                    rx="0.5"
                    stroke="black"
                  />
                  <rect
                    x="6.1899"
                    y="2.69772"
                    width="0.317308"
                    height="8.14423"
                    rx="0.158654"
                    stroke="black"
                    stroke-width="0.317308"
                  />
                  <rect
                    x="12.5367"
                    y="2.69772"
                    width="0.317308"
                    height="12.375"
                    rx="0.158654"
                    transform="rotate(90 12.5367 2.69772)"
                    stroke="black"
                    stroke-width="0.317308"
                  />
                  <rect
                    x="12.5367"
                    y="5.23678"
                    width="0.317308"
                    height="12.375"
                    rx="0.158654"
                    transform="rotate(90 12.5367 5.23678)"
                    stroke="black"
                    stroke-width="0.317308"
                  />
                  <rect
                    x="12.5367"
                    y="7.77584"
                    width="0.317308"
                    height="12.375"
                    rx="0.158654"
                    transform="rotate(90 12.5367 7.77584)"
                    stroke="black"
                    stroke-width="0.317308"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            v-if="inputs.guaranteed_income_type == 'manual'"
            class="form_section_input_div"
          >
            <input type="text" value="Scheduled" readonly />
          </div>
          <div class="form_section_input_div" v-else>
            <dollar-amount-input
              id="guaranteedIncomeAmountInput"
              class="dollar_inp"
              max="100000000"
              placeholder="Guaranteed Income Amount"
              :default="inputs.guaranteed_income_first_year"
              @amountUpdated="
                (e) => updateInput('guaranteed_income_first_year', e)
              "
            />
            <span class="dollar">$</span>
          </div>
        </div>

        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div" id="annualIncrease1">
            <label for="annual-ditribution" class="main_label"
              >Annual Increase<span class="optional">(optional)</span></label
            >
          </div>
          <div
            v-if="inputs.guaranteed_income_type == 'manual'"
            class="form_section_input_div"
          >
            <input type="text" value="Scheduled" readonly />
          </div>

          <div v-else class="form_section_input_div">
            <number-amount-input
              id="guaranteedIncomeAnnualIncreaseInput"
              class="percent_inp"
              :default="inputs.guaranteed_income_increase"
              @amountUpdated="
                (e) => updateInput('guaranteed_income_increase', e)
              "
              :max="100"
              placeholder
            />
            <span class="percent">%</span>
          </div>
        </div>

        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div">
            <label for="incomeStartYearSelect" class="main_label"
              >Year Income Begins</label
            >
          </div>
          <custom-select-dropdown
            :default="inputs.income_start_year"
            @selected="(value) => updateInput('income_start_year', value)"
            :disabled="inputs.guaranteed_income_type == 'manual'"
            :options="Array.from({ length: illustrateYear }, (_, i) => i + 1)"
          />
        </div>

        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div align-items-end">
            <label
              for="nonguaranteedIncomeAmountInput"
              class="main_label d-block"
            >
              Non-guaranteed Income <br />Amount
              <span class="optional">(Optional)</span>
            </label>

            <div class="label-right-div">
              <div class="label_checkbox">
                <input
                  type="checkbox"
                  name="annual-increase2"
                  id="nonGtselectScheduleModal"
                  v-model="nonGuaranteedIncomeSchedule"
                  hidden="true"
                />
                <label for="nonGtselectScheduleModal"></label>
                <svg
                  @click="nonGuaranteedIncomeSchedule = true"
                  class="cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#NonGuaranteedIncreasingAnnualIncomeScheduleModal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="11.6923"
                    height="10"
                    rx="0.5"
                    stroke="black"
                  />
                  <rect
                    x="6.1899"
                    y="2.69772"
                    width="0.317308"
                    height="8.14423"
                    rx="0.158654"
                    stroke="black"
                    stroke-width="0.317308"
                  />
                  <rect
                    x="12.5367"
                    y="2.69772"
                    width="0.317308"
                    height="12.375"
                    rx="0.158654"
                    transform="rotate(90 12.5367 2.69772)"
                    stroke="black"
                    stroke-width="0.317308"
                  />
                  <rect
                    x="12.5367"
                    y="5.23678"
                    width="0.317308"
                    height="12.375"
                    rx="0.158654"
                    transform="rotate(90 12.5367 5.23678)"
                    stroke="black"
                    stroke-width="0.317308"
                  />
                  <rect
                    x="12.5367"
                    y="7.77584"
                    width="0.317308"
                    height="12.375"
                    rx="0.158654"
                    transform="rotate(90 12.5367 7.77584)"
                    stroke="black"
                    stroke-width="0.317308"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            v-if="inputs.non_guaranteed_income_type == 'manual'"
            class="form_section_input_div"
          >
            <input type="text" value="Scheduled" readonly />
          </div>
          <div class="form_section_input_div" v-else>
            <dollar-amount-input
              id="nonguaranteedIncomeAmountInput"
              class="dollar_inp"
              max="100000000"
              placeholder="Non-guaranteed Amount"
              :default="inputs.non_guaranteed_income_first_year"
              @amountUpdated="
                (e) => updateInput('non_guaranteed_income_first_year', e)
              "
            />
            <span class="dollar">$</span>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 mb-3">
          <div class="form_section_label_div" id="annualIncrease2">
            <label for="annual-ditribution" class="main_label d-block"
              ><br class="d-none-big" />Annual Increase<span class="optional">
                (optional)</span
              ></label
            >
          </div>
          <div
            v-if="inputs.non_guaranteed_income_type == 'manual'"
            class="form_section_input_div"
          >
            <input type="text" value="Scheduled" readonly />
          </div>

          <div v-else class="form_section_input_div">
            <number-amount-input
              id="guaranteedIncomeAnnualIncreaseInput"
              class="percent_inp"
              :default="inputs.non_guaranteed_income_increase"
              @amountUpdated="
                (e) => updateInput('non_guaranteed_income_increase', e)
              "
              :max="100"
              placeholder
            />
            <span class="percent">%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- Modal -->

<script>
import { mapState, mapGetters } from "vuex";
import DollarAmountInput from "@/views/retirement-buffer/common-components/DollarAmountInput.vue";
import NumberAmountInput from "@/views/retirement-buffer/common-components/NumberAmountInput.vue";
import CommonTooltipSvg from "@/views/components/common/CommonTooltipSvg.vue";
import CustomSelectDropdown from "@/views/components/common/CustomSelectDropdown.vue";
import { post } from "../../../../network/requests";
import { getUrl } from "../../../../network/url";
import { authHeader } from "../../../../services/helper";

export default {
  name: "IncomeRiderForm",
  components: {
    CommonTooltipSvg,
    DollarAmountInput,
    NumberAmountInput,
    CustomSelectDropdown,
  },
  emits: ["valid"],
  data() {
    return {
      guaranteedIncomeSchedule: false,
      nonGuaranteedIncomeSchedule: false,
      accountTypeOpts: [
        { label: "Taxable", value: "taxable" },
        { label: "Pre-tax", value: "pre_tax" },
      ],
      indexAllocationOpts: [
        { label: "Equities & Bonds 60/40", value: "equities_and_bonds_60_40" },
        { label: "Equities & Bonds 50/50", value: "equities_and_bonds_50_50" },
        { label: "Equities & Bonds 40/60", value: "equities_and_bonds_40_60" },
        { label: "S&P 500", value: "s_and_p_500" },
      ],
    };
  },
  mounted() {
    if (this.inputs.guaranteed_income_type !== "annual_increase") {
      this.guaranteedIncomeSchedule = true;
    }

    if (this.inputs.non_guaranteed_income_type !== "annual_increase") {
      this.nonGuaranteedIncomeSchedule = true;
    }
  },
  computed: {
    ...mapGetters({
      illustrateYear: "incomeRider/illustrateYear",
    }),
    ...mapState({
      inputs: (state) => state.incomeRider.inputs,
    }),
  },
  watch: {
    guaranteedIncomeSchedule(e) {
      this.updateInput(
        "guaranteed_income_type",
        e ? "manual" : "annual_increase"
      );
    },
    nonGuaranteedIncomeSchedule(e) {
      this.updateInput(
        "non_guaranteed_income_type",
        e ? "manual" : "annual_increase"
      );
    },
    inputs() {
      this.setIsValidForm();
    },
  },
  methods: {
    setIsValidForm() {
      let valid =
        this.inputs.comparative_vehicle_account_name &&
        this.inputs.account_type &&
        this.inputs.current_age &&
        this.inputs.plan_through_age &&
        this.inputs.growth_rate &&
        this.inputs.total_balance &&
        this.inputs.income_rider_account_name &&
        this.inputs.income_start_year &&
        this.inputs.guaranteed_income_first_year
          ? true
          : false;

      this.$emit("valid", valid);
    },
    updateInput(field, value) {
      let inputs = { ...this.inputs, [field]: value };
      this.$store.dispatch("incomeRider/updateInputs", inputs);
    },
    handleResponseError(error) {
      if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
        this.$toast.error(error.message);
      } else if (error.code === "ERR_BAD_REQUEST") {
        if (error.response.data.error) {
          this.$toast.error(error.response.data.error[0]);
        } else {
          let field = Object.entries(error.response.data)[0][0];
          let message = Object.entries(error.response.data)[0][1][0];
          this.$toast.error(
            field.replaceAll("_", " ").toUpperCase() + " : " + message
          );
        }
      } else {
        this.$toast.error(error.message);
      }
    },
    validateForm() {
      let valid = true;
      console.log(this.inputs.non_guaranteed_income_manual);
      if (this.inputs.non_guaranteed_income_manual) {
        let income_start_year = 0;
        for (
          let index = 0;
          index < this.inputs.non_guaranteed_income_manual.length;
          index++
        ) {
          let value = this.inputs.non_guaranteed_income_manual[index];
          if (!income_start_year && value) {
            income_start_year = index + 1;
          }
        }

        if (income_start_year !== this.inputs.income_start_year) {
          valid = false;
          new bootstrap.Modal(
            document.getElementById("IncomeStartYearWarningModal")
          ).show();

          // alert("Non guaranteed income start year different");
        }
      }
      valid = false;

      return valid;
    },
    submit() {
      if (!this.validateForm()) {
        return false;
      }
      var payload = { ...this.inputs };
      payload.account_type = this.inputs.account_type.value;
      payload.tax_rate = this.inputs.tax_rate ? this.inputs.tax_rate / 100 : 0;
      payload.growth_rate = this.inputs.growth_rate / 100;
      payload.fee = this.inputs.fee ? this.inputs.fee / 100 : 0;
      payload.index_allocation = this.inputs.index_allocation.value;
      payload.guaranteed_income_increase = this.inputs
        .guaranteed_income_increase
        ? this.inputs.guaranteed_income_increase / 100
        : null;
      payload.non_guaranteed_income_increase = this.inputs
        .non_guaranteed_income_increase
        ? Number((this.inputs.non_guaranteed_income_increase / 100).toFixed(2))
        : null;

      if (this.inputs.guaranteed_income_type != "manual") {
        payload.guaranteed_income_manual = null;
      }

      if (this.inputs.non_guaranteed_income_type != "manual") {
        payload.non_guaranteed_income_manual = null;
      }

      if (!payload.non_guaranteed_income_first_year) {
        payload.non_guaranteed_income_first_year = null;
        payload.non_guaranteed_income_type = null;
        if (this.$store.state.incomeRider.result_type !== "guaranteed") {
          this.$store.dispatch("incomeRider/updateResultType", "guaranteed");
        }
      }

      this.$store.dispatch("loader", true);
      post(getUrl("incomeRider"), payload, authHeader())
        .then((response) => {
          this.$store.dispatch("incomeRider/updateResultData", response.data);

          if (this.$route.name === "retirement-buffer-income-rider") {
            this.$store.dispatch("incomeRider/updateViewResult", 0);
          }

          if (
            !payload.non_guaranteed_income_first_year &&
            this.$store.state.incomeRider.result_type !== "guaranteed"
          ) {
            this.$store.dispatch("incomeRider/updateResultType", "guaranteed");
          }
          // Get income rider simulation data to display the success probabilty chart
          post(getUrl("incomeRiderSimulation"), payload, authHeader())
            .then((response) => {
              this.$store.dispatch(
                "incomeRider/updateSimulationResultData",
                response.data
              );
              this.$router.push({
                name: "retirement-buffer-income-rider-result",
              });
              this.$store.dispatch("loader", false);
            })
            .catch((error) => {
              this.$store.dispatch("loader", false);
              this.handleResponseError(error);
            });
        })
        .catch((error) => {
          this.$store.dispatch("loader", false);
          this.handleResponseError(error);
        });
    },
  },
};
</script>

<style></style>
