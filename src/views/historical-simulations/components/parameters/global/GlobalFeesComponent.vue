<template lang="">
  <div class="formParabrdrLavelDiv mt-4" id="globalPcTab">
    <p>Premium Charge</p>
    <p></p>
  </div>
  <div
    class="d-flex justify-content-between align-items-center parent-radio-div"
  >
    <div
      class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1 gap-4px"
    >
      <label
        v-for="(item, index) in MaxPremiumCharge"
        :key="index"
        class="flex-1"
      >
        <input
          type="radio"
          name="premiumChargetab"
          class="d-none"
          :checked="!customPremiumCharge && premiumCharge === item"
        />
        <span class="fixedStartYear" @click="handlePcCheckbox(item)"
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
          @keyup="(e) => (customPremiumCharge = e.target.value)"
          class="handleLimit"
          min="0"
          max="15"
          ref="customPCRef"
        />
      </div>
    </div>
  </div>
  <div class="d-flex align-items-center mt-2">
    <div class="form-check form-switch custom-switch ms-2">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="premiumcharge"
        v-model="sameInAllYears.premium_charge"
      />
    </div>
    <label for="premiumcharge" class="buttonSaveRadioPara"
      >Same in All Years</label
    >
  </div>
  <div
    :class="`d-flex justify-content-center w-100 ${
      sameInAllYears.premium_charge ? 'd-none' : ''
    }`"
  >
    <div class="schduleTableDiv mt-5">
      <label
        class="error text-center"
        v-if="errors && errors.analysis_pc_schedule"
        >{{ errors.analysis_pc_schedule }}</label
      >
      <schedule-csv-extraction
        prefixId="pcf_schedule"
        :maxInputs="illustrateYear"
        @clearError="$emit('clearError', 'analysis_pc_schedule')"
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
                max="15"
                :id="`pcf_schedule${item}`"
                @keypress="$emit('clearError', 'analysis_pc_schedule')"
              />
              <label for="amount">%</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="formParabrdrLavelDiv mt-4" id="globaLifTab">
    <p>Loan Interest Rate</p>
    <p></p>
  </div>
  <div
    class="d-flex justify-content-between align-items-center parent-radio-div"
  >
    <div
      class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1 gap-4px"
    >
      <label
        v-for="(item, index) in MaxLoanInterest"
        :key="index"
        class="flex-1"
      >
        <input
          type="radio"
          name="loanInterest"
          class="d-none"
          :checked="!customInterestAmount && loanInterest === item"
        />
        <span class="fixedStartYear" @click="handleLICheckbox(item)"
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
          @keyup="(e) => (customInterestAmount = e.target.value)"
          class="handleLimit"
          min="0"
          max="12"
          ref="customLIRef"
        />
      </div>
    </div>
  </div>
  <div class="d-flex align-items-center mt-2">
    <div class="form-check form-switch custom-switch ms-2">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="loanIntrest"
        v-model="sameInAllYears.loan_interest"
      />
    </div>
    <label for="loanIntrest" class="buttonSaveRadioPara"
      >Same in All Years</label
    >
  </div>

  <div
    :class="`d-flex justify-content-center w-100 ${
      sameInAllYears.loan_interest ? 'd-none' : ''
    }`"
  >
    <div class="schduleTableDiv mt-5">
      <label
        class="error text-center"
        v-if="errors && errors.analysis_lif_schedule"
        >{{ errors.analysis_lif_schedule }}</label
      >
      <schedule-csv-extraction
        prefixId="lif_schedule"
        :maxInputs="illustrateYear"
        @clearError="$emit('clearError', 'analysis_lif_schedule')"
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
                max="12"
                :id="`lif_schedule${item}`"
                @keypress="$emit('clearError', 'analysis_lif_schedule')"
              />
              <label for="amount">%</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <p class="loan-Intrest-para">Loan Interest Charged</p>
  <div class="d-flex justify-content-center align-items-center mt-3">
    <div
      class="enhancementFixedSheduleBtn nav nav-tabs"
      id="nav-tab"
      role="tablist"
    >
      <div
        :class="Arrears ? '' : 'active'"
        id="nav-advance-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-advance"
        role="tab"
        aria-controls="nav-advance"
        aria-selected="true"
        @click="Arrears = false"
      >
        In Advance
      </div>
      <div
        :class="Arrears ? 'active' : ''"
        id="nav-arrears-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-arrears"
        role="tab"
        aria-controls="nav-arrears"
        aria-selected="false"
        @click="Arrears = true"
      >
        In Arrears
      </div>
    </div>
  </div>
  <input
    type="hidden"
    :value="customPremiumCharge || premiumCharge"
    id="premium_charge_fees"
  />
  <input
    type="hidden"
    :value="sameInAllYears.premium_charge ? 1 : 0"
    id="pcf_all_year"
  />
  <input
    type="hidden"
    :value="customInterestAmount || loanInterest"
    id="loan_interest_fees"
  />
  <input
    type="hidden"
    :value="sameInAllYears.loan_interest ? 1 : 0"
    id="lif_all_year"
  />
  <input type="hidden" :value="Arrears ? 1 : 0" id="in_arrears" />
</template>
<script>
import ScheduleCsvExtraction from "../../../../components/common/ScheduleCsvExtraction.vue";

export default {
  props: ["performance", "flatCreditBonus", "update"],
  components: { ScheduleCsvExtraction },
  inject: ["errors"],
  emits: ["clearError", "setUpdated"],
  data() {
    return {
      MaxPremiumCharge: 8,
      MaxLoanInterest: 8,
      premiumCharge: 0,
      customPremiumCharge: "",
      loanInterest: 0,
      sameInAllYears: {
        premium_charge: true,
        loan_interest: true,
      },
      Arrears: false,
      customInterestAmount: "",
    };
  },
  methods: {
    handlePcCheckbox: function (item) {
      this.premiumCharge = item;
      this.customPremiumCharge = "";
      this.$refs.customPCRef.value = "";
    },
    handleLICheckbox: function (item) {
      this.loanInterest = item;
      this.customInterestAmount = "";
      this.$refs.customLIRef.value = "";
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
        let charges = [1, 2, 3, 4, 5, 6, 7, 8];

        this.Arrears = Number(document.getElementById("in_arrears").value)
          ? true
          : false;

        // premium charge
        this.sameInAllYears.premium_charge =
          document.getElementById(`premiumcharge`).checked;
        if (this.sameInAllYears.premium_charge) {
          let pc = Number(document.getElementById(`premium_charge_fees`).value);
          if (charges.includes(pc)) {
            this.premiumCharge = pc;
          } else {
            this.customPremiumCharge = pc;
            this.$refs.customPCRef.value = pc;
          }
        } else {
          this.premiumCharge = "";
        }

        // Loan interest rate
        this.sameInAllYears.loan_interest =
          document.getElementById(`loanIntrest`).checked;

        if (this.sameInAllYears.loan_interest) {
          let li = Number(document.getElementById(`loan_interest_fees`).value);
          if (charges.includes(li)) {
            this.loanInterest = li;
          } else {
            this.customInterestAmount = li;
            this.$refs.customLIRef.value = li;
          }
        } else {
          this.loanInterest = "";
        }
        this.$emit("setUpdated");
      }
    },
  },
};
</script>
<style lang=""></style>
