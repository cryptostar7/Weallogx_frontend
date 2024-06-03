<template>
  <div>
    <div class="accumulation_strategy_box_head">
      <h2>Income Rider Strategy</h2>
      <img src="@/assets/images/icons/income-rider.svg" alt="Income Rider" />
    </div>
    <div class="accumulation_strategy_inner_box">
      <p class="form_section_para">Comparative Vehicle</p>
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
              :default="totalBalanceDefault"
              max="100000000"
              placeholder="Total Balance"
              @amountUpdated="(e) => comparativeVehicle.totalBalance = e"
            />
            <span class="dollar">$</span>
          </div>
        </div>
        <div class="w-25">
          <div class="form_section_label_div">
            <label for="accountTypeSelect" class="main_label">Account Type</label>
          </div>
          <div class="select-menu accumulation_select_menu">
            <div class="select-btn">
              <input
                id="accountTypeSelect"
                class="sBtn-text"
                readonly="true"
                type="text"
                :value="comparativeVehicle.accountType.label"
              />
              <i>
                <img src="@/assets/images/icons/select-chevron.svg" alt="Chevron" />
              </i>
            </div>
            <ul class="options">
              <li
                v-for="item in comparativeVehicle.accountTypeOpts"
                :key="item"
                :class="`option ${comparativeVehicle.accountType === item ? 'active' : ''}`"
                @click="comparativeVehicle.accountType = item"
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
            <input id="accountNameInput" v-model="comparativeVehicle.accountName" type="text" />
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
            <input
              id="taxRateInput"
              class="percent_inp"
              v-model.number="comparativeVehicle.taxRate"
              type="number"
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
                  This should match the age as shown on year one of the illustration.
                </span>
              </span>
            </label>
          </div>
          <div class="form_section_input_div">
            <input
              id="currentAgeInput"
              v-model.number="comparativeVehicle.currentAge"
              max="100"
              step="1"
              type="number"
            />
          </div>
        </div>
        <div class="w-25">
          <div class="form_section_label_div">
            <label for="planThroughAgeInput" class="main_label">Plan Through Age</label>
          </div>
          <div class="form_section_input_div">
            <input
              id="planThroughAgeInput"
              v-model.number="comparativeVehicle.planThroughAge"
              max="100"
              step="1"
              type="number"
            />
          </div>
        </div>
        <div class="w-25">
          <div class="form_section_label_div">
            <label for="growthRateInput" class="main_label">Growth Rate</label>
          </div>
          <div class="form_section_input_div">
            <input
              id="growthRateInput"
              class="percent_inp"
              v-model.number="comparativeVehicle.growthRate"
              type="number"
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
            <input
              id="feeInput"
              class="percent_inp"
              v-model.number="comparativeVehicle.fee"
              type="number"
            />
            <span class="percent">%</span>
          </div>
        </div>
      </div>
      <div class="form_section_input_row mb-3">
        <div class="w-25">
          <div class="form_section_label_div">
            <label for="indexAllocationSelect" class="main_label">Index Allocation</label>
          </div>
          <div class="select-menu accumulation_select_menu">
            <div class="select-btn">
              <input
                id="indexAllocationSelect"
                class="sBtn-text"
                readonly="true"
                type="text"
                :value="comparativeVehicle.indexAllocation.label"
              />
              <i>
                <img src="@/assets/images/icons/select-chevron.svg" alt="Chevron" />
              </i>
            </div>
            <ul class="options">
              <li
                v-for="item in comparativeVehicle.indexAllocationOpts"
                :key="item"
                :class="`option ${comparativeVehicle.indexAllocation === item ? 'active' : ''}`"
                @click="comparativeVehicle.indexAllocation = item"
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
            <label for="incomeRiderAccountNameInput" class="main_label">Account Name</label>
          </div>
          <div class="form_section_input_div">
            <input id="incomeRiderAccountNameInput" v-model="incomeRider.accountName" type="text" />
          </div>
        </div>
        <div class="w-25">
          <div class="form_section_label_div">
            <label for="incomeStartYearSelect" class="main_label">Year Income Begins</label>
          </div>
          <div class="select-menu accumulation_select_menu">
            <div class="select-btn">
              <input
                id="incomeStartYearSelect"
                class="sBtn-text"
                readonly="true"
                type="text"
                :value="incomeRider.incomeStartYear"
              />
              <i>
                <img src="@/assets/images/icons/select-chevron.svg" alt="Chevron" />
              </i>
            </div>
            <ul class="options">
              <li
                v-for="item in incomeRiderIncomeStartYearOpts"
                :key="item"
                :class="`option ${incomeRider.incomeStartYear === item ? 'active' : ''}`"
                @click="incomeRider.incomeStartYear = item"
              >
                <span class="option-text">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-25">
          <div class="form_section_label_div">
            <label for="guaranteedIncomeAmountInput" class="main_label">Guaranteed Income Amount</label>
          </div>
          <div class="form_section_input_div">
            <dollar-amount-input
              id="guaranteedIncomeAmountInput"
              class="dollar_inp"
              :default="guaranteedIncomeDefault"
              max="100000000"
              placeholder="Guaranteed Income Amount"
              @amountUpdated="(e) => incomeRider.guaranteedIncome.amount = e"
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
            <input
              id="guaranteedIncomeAnnualIncreaseInput"
              class="percent_inp"
              v-model.number="incomeRider.guaranteedIncome.annualIncrease"
              type="number"
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
              :default="nonguaranteedIncomeDefault"
              max="100000000"
              placeholder="Non-guaranteed Income Amount"
              @amountUpdated="(e) => incomeRider.nonguaranteedIncome.amount = e"
            />
            <span class="dollar">$</span>
          </div>
        </div>
        <div class="w-25">
          <div class="form_section_label_div">
            <label for="nonguaranteedIncomeAnnualIncreaseInput" class="main_label">
              Annual Increase
              <span class="optional">(Optional)</span>
            </label>
          </div>
          <div class="form_section_input_div">
            <input
              id="nonguaranteedIncomeAnnualIncreaseInput"
              class="percent_inp"
              v-model.number="incomeRider.nonguaranteedIncome.annualIncrease"
              type="number"
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
import { cloneDeep, range } from 'lodash-es';
import DollarAmountInput from '@/views/retirement-buffer/common-components/DollarAmountInput.vue';
import CommonTooltipSvg from '@/views/components/common/CommonTooltipSvg.vue';

const accountTypeOpts = [
  { label: 'Taxable', value: 'taxable' },
  { label: 'Pre-tax', value: 'pre_tax' }
];

const indexAllocationOpts = [
  { label: 'Equities & Bonds 60/40', value: 'equities_and_bonds_60_40' },
  { label: 'Equities & Bonds 50/50', value: 'equities_and_bonds_50_50' },
  { label: 'Equities & Bonds 40/60', value: 'equities_and_bonds_40_60' },
  { label: 'S&P 500', value: 's_and_p_500' }
];

export default {
  name: 'IncomeRiderForm',
  components: {
    CommonTooltipSvg,
    DollarAmountInput
  },
  data() {
    return {
      comparativeVehicle: {
        accountName: '',
        accountType: accountTypeOpts[0],
        accountTypeOpts,
        currentAge: undefined,
        fee: undefined,
        growthRate: undefined,
        indexAllocation: indexAllocationOpts[0],
        indexAllocationOpts,
        planThroughAge: undefined,
        taxRate: undefined,
        // XXX i hate that we're using strings for number values
        totalBalance: ''
      },
      incomeRider: {
        accountName: '',
        guaranteedIncome: {
          amount: '',
          annualIncrease: undefined
        },
        incomeStartYear: undefined,
        nonguaranteedIncome: {
          amount: '',
          annualIncrease: undefined
        }
      }
    }
  },
  computed: {
    incomeRiderIncomeStartYearOpts() {
      return this.comparativeVehicle.currentAge && this.comparativeVehicle.planThroughAge
        // we add 2 b/c we want the array to be inclusive of planThroughAge
        ? range(1, this.comparativeVehicle.planThroughAge - this.comparativeVehicle.currentAge + 2)
        : [];
    },
    isValid() {
      return this.comparativeVehicle.accountName && this.comparativeVehicle.accountType &&
        this.comparativeVehicle.currentAge && this.comparativeVehicle.planThroughAge &&
        this.comparativeVehicle.growthRate && this.comparativeVehicle.totalBalance && this.incomeRider.accountName &&
        this.incomeRider.incomeStartYear && this.incomeRider.guaranteedIncome.amount;
    }
  },
  watch: {
    isValid(val) {
      this.$emit('valid', val);
    }
  },
  mounted() {
    // FIXME
    // Select Dropdown Start
    let selectBtn = document.querySelectorAll('.select-btn');
    selectBtn.forEach((showHide) => {
      showHide.addEventListener('click', () =>
        showHide.closest('.select-menu').classList.toggle('active')
      );
      var allOptions = showHide
        .closest('.select-menu')
        .querySelector('.options')
        .querySelectorAll('.option');
      allOptions.forEach((option) => {
        option.addEventListener('click', (e) => {
          e.stopPropagation();
          option.parentElement.parentElement.classList.remove('active');
        });
      });
    });

    let dropdowns = document.querySelectorAll('.select-menu');
    dropdowns.forEach((element) => {
      element.addEventListener('click', (e) => {
        dropdowns.forEach((item) => {
          if (item.className.includes('active')) {
            item.classList.remove('active');
          }
        });
        e.target.closest('.select-menu').classList.add('active');
      });
    });

    // Close when click outside
    window.onclick = function (event) {
      if (!event.target.matches('.select-menu')) {
        var sharedowns = document.getElementsByClassName('select-menu');
        var i;
        for (i = 0; i < sharedowns.length; i++) {
          var openSelectdropdown = sharedowns[i];
          if (openSelectdropdown.classList.contains('active')) {
            openSelectdropdown.classList.remove('active');
          }
        }
      }
    };

    var allSelectMenus = document.querySelectorAll('.select-menu');
    allSelectMenus.forEach((eachSelectMenus) => {
      eachSelectMenus.addEventListener('click', function (event) {
        event.stopPropagation();
      });
    });
  },
  methods: {
    submit() {
      this.$store.dispatch('loader', true);
      this.$store.dispatch('incomeRider/submit', {
        comparativeVehicle: cloneDeep(this.comparativeVehicle),
        incomeRider: cloneDeep(this.incomeRider)
      })
        .finally(() => {
          this.$store.dispatch('loader', false);
        });
    }
  }
};
</script>

<style></style>
