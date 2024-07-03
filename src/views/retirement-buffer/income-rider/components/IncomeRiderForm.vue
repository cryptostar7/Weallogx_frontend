<template>
  <div>
    <div class="accumulation_strategy_box_head">
      <h2>Income Rider Strategy</h2>
      <img src="@/assets/images/icons/income-rider.svg" alt="Income Rider" />
    </div>
    <div class="accumulation_strategy_inner_box">
      <div class="row">
        <div class="col-6 col-border-right pe-4">
          <p class="form_section_para">Comparative Vehicle</p>
          <div class="row">
            <div class="col-6 mb-3">
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
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="accountTypeSelect" class="main_label"
                  >Account Type</label
                >
              </div>
              <div class="select-menu accumulation_select_menu">
                <div class="select-btn">
                  <input
                    id="accountTypeSelect"
                    class="sBtn-text"
                    readonly="true"
                    type="text"
                    :value="
                      inputs.account_type ? inputs.account_type.label : ''
                    "
                  />
                  <i>
                    <img
                      src="@/assets/images/icons/select-chevron.svg"
                      alt="Chevron"
                    />
                  </i>
                </div>
                <ul class="options">
                  <li
                    v-for="item in accountTypeOpts"
                    :key="item"
                    :class="`option ${
                      inputs.account_type === item ? 'active' : ''
                    }`"
                    @click="updateInput('account_type', item)"
                  >
                    <span class="option-text">{{ item.label }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="accountNameInput" class="main_label">
                  Account Name
                  <span>
                    <common-tooltip-svg />
                    <span>
                      What would you like the report to show as the account's
                      name?
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
            <div class="col-6 mb-3">
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
            <div class="col-6 mb-3">
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
            <div class="col-6 mb-3">
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
            <div class="col-6">
              <div class="form_section_label_div">
                <label for="growthRateInput" class="main_label"
                  >Growth Rate</label
                >
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
            <div class="col-6">
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
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="indexAllocationSelect" class="main_label"
                  >Index Allocation</label
                >
              </div>
              <div class="select-menu accumulation_select_menu">
                <div class="select-btn">
                  <input
                    id="indexAllocationSelect"
                    class="sBtn-text"
                    readonly="true"
                    type="text"
                    :value="
                      inputs.index_allocation
                        ? inputs.index_allocation.label
                        : ''
                    "
                    @amountUpdated="(e) => updateInput('index_allocation', e)"
                  />
                  <i>
                    <img
                      src="@/assets/images/icons/select-chevron.svg"
                      alt="Chevron"
                    />
                  </i>
                </div>
                <ul class="options">
                  <li
                    v-for="item in indexAllocationOpts"
                    :key="item"
                    :class="`option ${
                      inputs.index_allocation === item ? 'active' : ''
                    }`"
                    @click="updateInput('index_allocation', item)"
                  >
                    <span class="option-text">{{ item.label }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-6 ps-4">
          <p class="form_section_para">Income Rider Details</p>
          <div class="row mb-3">
            <div class="col-6 mb-3">
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
                    (e) =>
                      updateInput('income_rider_account_name', e.target.value)
                  "
                  type="text"
                />
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="incomeStartYearSelect" class="main_label"
                  >Year Income Begins</label
                >
              </div>
              <div class="select-menu accumulation_select_menu">
                <div class="select-btn">
                  <input
                    id="incomeStartYearSelect"
                    class="sBtn-text"
                    readonly="true"
                    type="text"
                    :value="inputs.income_start_year"
                  />
                  <i>
                    <img
                      src="@/assets/images/icons/select-chevron.svg"
                      alt="Chevron"
                    />
                  </i>
                </div>
                <ul class="options">
                  <li
                    v-for="item in illustrateYear"
                    :key="item"
                    :class="`option ${
                      inputs.income_start_year === item ? 'active' : ''
                    }`"
                    @click="updateInput('income_start_year', item)"
                  >
                    <span class="option-text">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="guaranteedIncomeAmountInput" class="main_label"
                  >Guaranteed Income Amount</label
                >
              </div>
              <div class="form_section_input_div">
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
            <div class="col-6 mb-3">
              <div class="form_section_label_div" id="annualIncrease1">
                <label for="annual-ditribution" class="main_label"
                  >Annual Increase<span class="optional"
                    >(optional)</span
                  ></label
                >
                <div class="label-right-div">
                  <label
                    for="gtSelectPercent"
                    class="label_checkbox"
                    @click="
                      updateInput('guaranteed_income_type', 'annual_increase')
                    "
                  >
                    <input
                      type="radio"
                      name="annual-increase"
                      checkBoxAttr="2"
                      id="gtSelectPercent"
                      hidden
                      :checked="
                        inputs.guaranteed_income_type === 'annual_increase'
                      "
                    />
                    <label for="gtSelectPercent"></label>
                    <span>%</span>
                  </label>
                  <label
                    for="gtselectDollar"
                    class="label_checkbox"
                    data-bs-toggle="modal"
                    data-bs-target="#GuaranteedIncreasingAnnualIncomeScheduleModal"
                    @click="
                      inputs.guaranteed_income_type === 'annual_increase'
                        ? updateInput('guaranteed_income_type', 'mannual')
                        : ''
                    "
                  >
                    <input
                      type="radio"
                      name="annual-increase"
                      checkBoxAttr="1"
                      id="gtselectDollar"
                      :checked="
                        inputs.guaranteed_income_type !== 'annual_increase'
                      "
                      hidden
                    />
                    <label for="gtselectDollar"></label>
                    <span>
                      <svg
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
                    </span>
                  </label>
                </div>
              </div>
              <div
                v-if="inputs.guaranteed_income_type == 'mannual'"
                class="form_section_input_div"
              >
                <input type="text" value="Scheduled" />
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
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="nonguaranteedIncomeAmountInput" class="main_label">
                  Non-guaranteed Amount
                  <span class="optional">(Optional)</span>
                </label>
              </div>
              <div class="form_section_input_div">
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
            <div class="col-6 mb-3">
              <div class="form_section_label_div" id="annualIncrease2">
                <label for="annual-ditribution" class="main_label"
                  >Annual Increase<span class="optional"
                    >(optional)</span
                  ></label
                >
                <div class="label-right-div">
                  <label
                    for="nonGtSelectPercent"
                    class="label_checkbox"
                    @click="
                      updateInput(
                        'non_guaranteed_income_type',
                        'annual_increase'
                      )
                    "
                  >
                    <input
                      type="radio"
                      name="annual-increase2"
                      checkBoxAttr="2"
                      id="nonGtSelectPercent"
                      :checked="
                        inputs.non_guaranteed_income_type === 'annual_increase'
                      "
                      hidden
                    />
                    <label for="nonGtSelectPercent"></label>
                    <span>%</span>
                  </label>
                  <label
                    for="nonGtselectScheduleModal"
                    class="label_checkbox"
                    data-bs-toggle="modal"
                    data-bs-target="#NonGuaranteedIncreasingAnnualIncomeScheduleModal"
                    @click="
                      inputs.non_guaranteed_income_type === 'annual_increase'
                        ? updateInput('non_guaranteed_income_type', 'mannual')
                        : ''
                    "
                  >
                    <input
                      type="radio"
                      name="annual-increase2"
                      checkBoxAttr="1"
                      id="nonGtselectScheduleModal"
                      hidden
                      :checked="
                        inputs.non_guaranteed_income_type !== 'annual_increase'
                      "
                    />
                    <label for="nonGtselectScheduleModal"></label>
                    <span>
                      <svg
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
                    </span>
                  </label>
                </div>
              </div>
              <div
                v-if="inputs.non_guaranteed_income_type == 'mannual'"
                class="form_section_input_div"
              >
                <input type="text" value="Scheduled" />
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
            <div class="col-6 mb-3"></div>
            <div class="col-6 mb-3"></div>
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
import { post } from "../../../../network/requests";
import { getUrl } from "../../../../network/url";
import { authHeader } from "../../../../services/helper";

export default {
  name: "IncomeRiderForm",
  components: {
    CommonTooltipSvg,
    DollarAmountInput,
    NumberAmountInput,
  },
  emits: ["valid"],
  data() {
    return {
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
  computed: {
    ...mapGetters({
      illustrateYear: "incomeRider/illustrateYear",
    }),
    ...mapState({
      inputs: (state) => state.incomeRider.inputs,
    }),
  },
  mounted() {
    // FIXME
    // Select Dropdown Start
    let selectBtn = document.querySelectorAll(".select-btn");
    selectBtn.forEach((showHide) => {
      showHide.addEventListener("click", () =>
        showHide.closest(".select-menu").classList.toggle("active")
      );
      var allOptions = showHide
        .closest(".select-menu")
        .querySelector(".options")
        .querySelectorAll(".option");
      allOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
          e.stopPropagation();
          option.parentElement.parentElement.classList.remove("active");
        });
      });
    });

    let dropdowns = document.querySelectorAll(".select-menu");
    dropdowns.forEach((element) => {
      element.addEventListener("click", (e) => {
        dropdowns.forEach((item) => {
          if (item.className.includes("active")) {
            item.classList.remove("active");
          }
        });
        e.target.closest(".select-menu").classList.add("active");
      });
    });

    // Close when click outside
    window.onclick = function (event) {
      if (!event.target.matches(".select-menu")) {
        var sharedowns = document.getElementsByClassName("select-menu");
        var i;
        for (i = 0; i < sharedowns.length; i++) {
          var openSelectdropdown = sharedowns[i];
          if (openSelectdropdown.classList.contains("active")) {
            openSelectdropdown.classList.remove("active");
          }
        }
      }
    };

    var allSelectMenus = document.querySelectorAll(".select-menu");
    allSelectMenus.forEach((eachSelectMenus) => {
      eachSelectMenus.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });
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
      this.setIsValidForm();
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
    submit() {
      this.$store.dispatch("loader", true);
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

      post(getUrl("incomeRider"), payload, authHeader())
        .then((response) => {
          this.$store.dispatch("incomeRider/updateResultData", response.data);

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
