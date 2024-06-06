<template>
  <div>
    <div class="accumulation_strategy_box_head">
      <h2>Income Rider Strategy</h2>
      <img src="@/assets/images/icons/income-rider.svg" alt="Income Rider" />
    </div>
    <div class="accumulation_strategy_inner_box">
      <p class="form_section_para" @click="testFunction">Comparative Vehicle</p>
      <div class="form_section_input_row mb-3">
        <div class="w-25">
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
        <div class="w-25">
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
                :value="inputs.account_type ? inputs.account_type.label : ''"
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
        <div class="w-25">
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
              @input="(e) => updateInput('comparative_vehicle_account_name', e.target.value)"
              type="text"
            />
          </div>
        </div>
        <div class="w-25">
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
              @amountUpdated="(e) => updateInput('tax_rate', e)"
              max="100"
            />
            <span class="percent">%</span>
          </div>
        </div>
      </div>
      <div class="form_section_input_row mb-3">
        <div class="w-25">
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
              max="100"
            />
          </div>
        </div>
        <div class="w-25">
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
              max="100"
            />
          </div>
        </div>
        <div class="w-25">
          <div class="form_section_label_div">
            <label for="growthRateInput" class="main_label">Growth Rate</label>
          </div>
          <div class="form_section_input_div">
            <number-amount-input
              id="growthRateInput"
              class="percent_inp"
              :default="inputs.growth_rate"
              @amountUpdated="(e) => updateInput('growth_rate', e)"
              max="100"
            />
            <span class="percent">%</span>
          </div>
        </div>
        <div class="w-25">
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
              max="100"
            />
            <span class="percent">%</span>
          </div>
        </div>
      </div>
      <div class="form_section_input_row mb-3">
        <div class="w-25">
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
                  inputs.index_allocation ? inputs.index_allocation.label : ''
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
        <!-- dumb, but needed to make this line up. switch to BS rows & cols -->
        <div class="w-25"></div>
        <div class="w-25"></div>
        <div class="w-25"></div>
      </div>
      <p class="form_section_para">Income Rider Details</p>
      <div class="form_section_input_row mb-3">
        <div class="w-25">
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
        <div class="w-25">
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
                v-for="item in incomeRiderIncomeStartYearOpts"
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
        <div class="w-25">
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
              :default="inputs.guaranteed_income"
              @amountUpdated="(e) => updateInput('guaranteed_income', e)"
            />
            <span class="dollar">$</span>
          </div>
        </div>
        <div class="w-25">
          <div class="form_section_label_div">
            <label for="guaranteedIncomeAnnualIncreaseInput" class="main_label">
              Annual Increase
              <span class="optional">(Optional)</span>
            </label>
          </div>
          <div class="form_section_input_div">
            <number-amount-input
              id="guaranteedIncomeAnnualIncreaseInput"
              class="percent_inp"
              :default="inputs.guaranteed_income_increase"
              @amountUpdated="
                (e) => updateInput('guaranteed_income_increase', e)
              "
              max="100"
            />
            <span class="percent">%</span>
          </div>
        </div>
      </div>
      <div class="form_section_input_row mb-3">
        <div class="w-25">
          <div class="form_section_label_div">
            <label for="nonguaranteedIncomeAmountInput" class="main_label">
              Non-guaranteed Income Amount
              <span class="optional">(Optional)</span>
            </label>
          </div>
          <div class="form_section_input_div">
            <dollar-amount-input
              id="nonguaranteedIncomeAmountInput"
              class="dollar_inp"
              max="100000000"
              placeholder="Non-guaranteed Income Amount"
              :default="inputs.non_guaranteed_income"
              @amountUpdated="(e) => updateInput('non_guaranteed_income', e)"
            />
            <span class="dollar">$</span>
          </div>
        </div>
        <div class="w-25">
          <div class="form_section_label_div">
            <label
              for="nonguaranteedIncomeAnnualIncreaseInput"
              class="main_label"
            >
              Annual Increase
              <span class="optional">(Optional)</span>
            </label>
          </div>
          <div class="form_section_input_div">
            <number-amount-input
              id="nonguaranteedIncomeAnnualIncreaseInput"
              class="percent_inp"
              :default="inputs.non_guaranteed_income_increase"
              @amountUpdated="
                (e) => updateInput('non_guaranteed_income_increase', e)
              "
              max="100"
            />
            <span class="percent">%</span>
          </div>
        </div>
        <div class="w-25"></div>
        <div class="w-25"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { range } from "lodash-es";
import { mapState } from "vuex";
import DollarAmountInput from "@/views/retirement-buffer/common-components/DollarAmountInput.vue";
import NumberAmountInput from "@/views/retirement-buffer/common-components/NumberAmountInput.vue";
import CommonTooltipSvg from "@/views/components/common/CommonTooltipSvg.vue";

export default {
  name: "IncomeRiderForm",
  components: {
    CommonTooltipSvg,
    DollarAmountInput,
    NumberAmountInput,
  },
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
    incomeRiderIncomeStartYearOpts() {
      return this.inputs.current_age && this.inputs.plan_through_age
        ? // we add 2 b/c we want the array to be inclusive of planThroughAge
          range(1, this.inputs.plan_through_age - this.inputs.current_age + 2)
        : [];
    },
    ...mapState({
      inputs: (state) => state.incomeRider.data.inputs,
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
    updateInput(field, value) {
      let inputs = { ...this.inputs, [field]: value };
      this.$store.dispatch("incomeRider/updateInputs", inputs);
    },
    submit() {
      this.$store.dispatch("loader", true);
      this.$store.dispatch("incomeRider/submit", this.inputs).finally(() => {
        this.$store.dispatch("loader", false);
      });
    },
  },
};
</script>

<style></style>
