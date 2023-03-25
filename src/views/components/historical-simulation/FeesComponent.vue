<template lang="">
     <div class="indexStrategyallDivs active accordion-button collapsed mt-3" data-bs-toggle="collapse" :data-bs-target="`#fees-parameters${currentTab}`" aria-expanded="false" :aria-controls="`fees-parameters${currentTab}`">
        <div class="d-flex justify-content-between align-items-center" :id="`feesTab${currentTab}`">
        <div class="indexStrategyheadBrdr">
            <p>Fees
            <svg class="ms-2 boxTickImage" width="21" height="21" viewBox="0 0 21 21"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="9.75" fill="#0E6651" stroke="#14EAB7"
                stroke-width="1.5" />
                <rect x="16.6006" y="7.91222" width="9.99563" height="1.5" rx="0.75"
                transform="rotate(135 16.6006 7.91222)" fill="#14EAB7" />
                <rect x="9.5693" y="14.9806" width="5.50074" height="1.5" rx="0.75"
                transform="rotate(-135 9.5693 14.9806)" fill="#14EAB7" />
            </svg>
            </p>
            <div></div>
        </div>                                                                                                
        </div>
    </div>
    <form :id="`fees-parameters${currentTab}`" class="accordion-collapse collapse analysisParametersContent" :data-bs-parent="`#fees-parameters${currentTab}`" autocomplete="off">
        <div class="formParabrdrLavelDiv mt-4">
        <p>Premium Charge</p>
        <p></p>
        </div>
        <div class="d-flex justify-content-between align-items-center parent-radio-div">
        <div class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1">
            <label v-for="(item, index) in MaxPremiumCharge" :key="index" :class="index > 1 ? `${item === MaxPremiumCharge ? 'ms-1':'mx-1'}`:''">
                <input type="radio" :name="`premiumChargetab${currentTab}`" class="d-none" :checked="!customPremiumCharge && premiumCharge === item">
                <span class="fixedStartYear" @click="handlePcCheckbox(item)">{{item}}%</span>
            </label>
        </div>
        <div class="d-flex align-items-center">
            <div class="or-div">
            or
            </div>
            <div class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3">
                <label for="customAmount">Custom Amount</label>
                <input type="text" @keyup="(e) => customPremiumCharge = e.target.value" class="handleLimit" min="0" max="15" ref="customPCRef">
            </div>
        </div>
        </div>
        <div class="d-flex align-items-center mt-2">
        <div class="form-check form-switch custom-switch ms-2">
            <input class="form-check-input" type="checkbox" role="switch" :id="`premiumcharge${currentTab}`" v-model="sameInAllYears.premium_charge">
        </div>
        <label :for="`premiumcharge${currentTab}`" class="buttonSaveRadioPara">Same in All Years</label>
        </div>
        <div :class="`d-flex justify-content-center w-100 ${sameInAllYears.premium_charge ? 'd-none' : ''}`">
            <div class="schduleTableDiv mt-5 ">
                <label class="error text-center" v-if="errors[currentTab] && errors[currentTab].fee_pc_schedule">{{errors[currentTab].fee_pc_schedule}}</label>
                <table class="table">
                    <thead>
                        <th>Year</th>
                        <th>Rate</th>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in illustrateYear" :key="index">
                            <td data-label="Year">{{item}}</td>
                            <td data-label="Rate" class="amountInnerTableInputTd feeTdInputWithPercent">
                                <input type="text" class="form-control handleLimit" min="0" max="15" :id="`pcf_schedule${currentTab}${item}`" @keypress="$emit('clearError',currentTab , 'fee_pc_schedule')">
                                <label for="amount">%</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="formParabrdrLavelDiv mt-4">
        <p>Loan Interest Rate</p>
        <p></p>
        </div>
        <div class="d-flex justify-content-between align-items-center parent-radio-div">
        <div class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1">
            <label v-for="(item, index) in MaxLoanInterest" :key="index" :class="index > 1 ? `${item === MaxLoanInterest ? 'ms-1':'mx-1'}`:''">
            <input type="radio" :name="`loanInterest${currentTab}`" class="d-none" :checked="!customInterestAmount && loanInterest === item">
            <span class="fixedStartYear" @click="loanInterest = item">{{item}}%</span>
            </label>
        </div>
        <div class="d-flex align-items-center">
            <div class="or-div">
            or
            </div>
            <div class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3">
            <label for="customAmount">Custom Amount</label>
            <input type="text" @keyup="(e) => customInterestAmount = e.target.value" class="handleLimit" min="0" max="12" ref="customLIRef">
            </div>
        </div>
        </div>
        <div class="d-flex align-items-center mt-2">
        <div class="form-check form-switch custom-switch ms-2">
            <input class="form-check-input" type="checkbox" role="switch" :id="`loanIntrest${currentTab}`" v-model="sameInAllYears.loan_interest">
        </div>
        <label :for="`loanIntrest${currentTab}`" class="buttonSaveRadioPara">Same in All Years</label>
        </div>

        <div :class="`d-flex justify-content-center w-100 ${sameInAllYears.loan_interest ? 'd-none':''}`">
            <div class="schduleTableDiv mt-5 ">
                <label class="error text-center" v-if="errors[currentTab] && errors[currentTab].fee_lif_schedule">{{errors[currentTab].fee_lif_schedule}}</label>
                <table class="table">
                <thead>
                    <th>Year</th>
                    <th>Rate</th>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in illustrateYear" :key="index">
                        <td data-label="Year">{{item}}</td>
                        <td data-label="Rate" class="amountInnerTableInputTd feeTdInputWithPercent">
                            <input type="text" class="form-control handleLimit"  min="0" max="12" :id="`lif_schedule${currentTab}${item}`" @keypress="$emit('clearError',currentTab , 'fee_lif_schedule')">
                            <label for="amount">%</label>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>                           

        <p class="loan-Intrest-para">Loan Interest Charged</p>
        <div class="d-flex justify-content-center align-items-center mt-3">
        <div class="enhancementFixedSheduleBtn nav nav-tabs" id="nav-tab" role="tablist">
            <div class="active" id="nav-advance-tab" data-bs-toggle="tab" data-bs-target="#nav-advance" role="tab" aria-controls="nav-advance" aria-selected="true">In Advance</div>
            <div class="" id="nav-arrears-tab" data-bs-toggle="tab" data-bs-target="#nav-arrears" role="tab" aria-controls="nav-arrears" aria-selected="false">In Arrears</div>
        </div>
        </div>
        <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-advance" role="tabpanel"  aria-labelledby="nav-advance-tab">
            <div :class="$props.performance ? '':'d-none'">
                <div class="formParabrdrLavelDiv mt-5">
                    <p>Performance Multiplier Fee</p>
                    <p></p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center parent-radio-div">
                    <div
                        class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1">
                        <label  v-for="(item, index) in MaxPerformanceMultiplierFee" :key="index" :class="index > 1 ? `${item === MaxPerformanceMultiplierFee ? 'ms-1':'mx-1'}`:''">
                        <input type="radio" :name="`perfMultiplier${currentTab}`" :checked="!customPerformanceFeeAmount && item === performanceFeeAmount ? true : false" class="d-none" />
                        <span class="fixedStartYear" @click="performanceFeeAmount = item">{{item}}%</span>
                        </label>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="or-div">
                        or
                        </div>
                        <div class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3">
                        <label for="customAmount">Custom Amount</label>
                        <input type="text" class="handleLimit" @keyup="(e) => customPerformanceFeeAmount = e.target.value" min="0" max="10" ref="customPMRef">
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center mt-2">
                    <div class="form-check form-switch custom-switch ms-2">
                        <input class="form-check-input" type="checkbox" role="switch" :id="`multiplierFee${currentTab}`" v-model="sameInAllYears.multiplier_fee">
                    </div>
                    <label :for="`multiplierFee${currentTab}`" class="buttonSaveRadioPara">Same in All Years</label>
                </div>
                <div :class="`d-flex justify-content-center w-100 ${sameInAllYears.multiplier_fee ? 'd-none':''}`">
                    <div class="schduleTableDiv mt-5 ">
                        <label class="error text-center" v-if="errors[currentTab] && errors[currentTab].fee_pmf_schedule">{{errors[currentTab].fee_pmf_schedule}}</label>
                        <table class="table">
                        <thead>
                            <th>Year</th>
                            <th>Rate</th>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in illustrateYear" :key="index">
                                <td data-label="Year">{{item}}</td>
                                <td data-label="Rate" class="amountInnerTableInputTd feeTdInputWithPercent">
                                    <input type="text" class="form-control handleLimit" min="0" max="10" :id="`pmf_schedule${currentTab}${item}`" @keypress="$emit('clearError',currentTab , 'fee_pmf_schedule')">
                                    <label for="amount">%</label>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div :class="$props.flatCreditBonus ? '':'d-none'">
                <div class="formParabrdrLavelDiv mt-4">
                    <p>Flat Credit/Bonus Fee</p>
                    <p></p>
                </div>
                <div class="d-flex justify-content-between align-items-center parent-radio-div">
                    <div
                        class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1">
                        <label v-for="(item, index) in 3" :key="index" :class="index === 1 ? 'mx-1':''">
                        <input type="radio" :name="`flatCredit${currentTab}`" class="d-none" :checked="!customFlatAmount && item === flatAmount ? true : false">
                        <span class="fixedStartYear" @click="flatAmount = item">{{item}}%</span>
                        </label>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="or-div">
                        or
                        </div>
                        <div class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3">
                            <label for="customAmount">Custom Amount</label>
                            <input type="text" class="handleLimit"  @keyup="(e) => customFlatAmount = e.target.value" min="0" max="10" ref="customFCRef">
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center mt-2">
                    <div class="form-check form-switch custom-switch ms-2">
                        <input class="form-check-input" type="checkbox" role="switch" :id="`flat-credit-fee-radio${currentTab}`" v-model="sameInAllYears.credit_bonus_fee">
                    </div>
                    <label :for="`flat-credit-fee-radio${currentTab}`" class="buttonSaveRadioPara">Same in All Years</label>
                </div>
                <div :class="`d-flex justify-content-center w-100 ${sameInAllYears.credit_bonus_fee ? 'd-none' : ''}`">
                    <div class="schduleTableDiv mt-5 ">
                        <label class="error text-center" v-if="errors[currentTab] && errors[currentTab].fee_fcf_schedule">{{errors[currentTab].fee_fcf_schedule}}</label>
                        <table class="table">
                        <thead>
                            <th>Year</th>
                            <th>Rate</th>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in illustrateYear" :key="index">
                                <td data-label="Year">{{item}}</td>
                                <td data-label="Rate" class="amountInnerTableInputTd feeTdInputWithPercent">
                                    <input type="text" class="form-control handleLimit" min="0" max="10" :id="`fcf_schedule${currentTab}${item}`" @keypress="$emit('clearError',currentTab , 'fee_fcf_schedule')">
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
            <p>High Cap Fee <span class="optionalCommonTxt">&nbsp;&nbsp;OPTIONAL</span></p>
            <p></p>
            </div>
            <div class="d-flex justify-content-between align-items-center parent-radio-div">
            <div
                class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1">
                <label v-for="(item, index) in 3" :key="index" :class="index === 1 ? 'w-100' : 'w-100 mx-2'">
                <input type="radio" :name="`highCapFee${currentTab}`" class="d-none" :checked="!customHipCapAmount && hipCapAmount === item ? true : false">
                <span class="fixedStartYear w-100" @click="hipCapAmount = item">{{item}}%</span>
                </label>
            </div>
            <div class="d-flex align-items-center">
                <div class="or-div">
                or
                </div>
                <div class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3">
                <label for="customAmount">Custom Amount</label>
                <input type="text" class="handleLimit" @keyup="(e) => customHipCapAmount = e.target.value" min="0" max="5" ref="hcCustomRef">
                </div>
            </div>
            </div>
        </div>
        <div class="tab-pane fade" id="nav-arrears" role="tabpanel" aria-labelledby="nav-arrears-tab"> ------ </div>
        </div>
        
        <input type="hidden" :value="customPremiumCharge || premiumCharge" :id="`premium_charge_fees${currentTab}`" />
        <input type="hidden" :value="sameInAllYears.premium_charge ? 1 : 0" :id="`pcf_all_year${currentTab}`" />
        <input type="hidden" :value="customPerformanceFeeAmount || performanceFeeAmount" :id="`performance_multiplier_fees${currentTab}`" />
        <input type="hidden" :value="sameInAllYears.multiplier_fee ? 1 : 0" :id="`pmf_all_year${currentTab}`" />
        <input type="hidden" :value="customFlatAmount || flatAmount" :id="`flat_credit_fees${currentTab}`" />
        <input type="hidden" :value="sameInAllYears.credit_bonus_fee ? 1 : 0" :id="`fcf_all_year${currentTab}`" />
        <input type="hidden" :value="customInterestAmount || loanInterest" :id="`loan_interest_fees${currentTab}`" />
        <input type="hidden" :value="sameInAllYears.loan_interest ? 1 : 0" :id="`lif_all_year${currentTab}`" />   
        <input type="hidden" :value="customHipCapAmount || hipCapAmount" :id="`high_cap_fees${currentTab}`" />
    </form>
    <!--  -->
</template>
<script>
export default {
  props: ["currentTab", "performance", "flatCreditBonus", "update"],
  inject: ["errors"],
  emits: ["clearError", "setUpdated"],
  data() {
    return {
      MaxPremiumCharge: 8,
      premiumCharge: 8,
      MaxLoanInterest: 8,
      loanInterest: 1,
      MaxPerformanceMultiplierFee: 8,
      sameInAllYears: {
        premium_charge: true,
        loan_interest: true,
        multiplier_fee: true,
        credit_bonus_fee: true,
      },
      customPremiumCharge: "",
      customInterestAmount: "",
      customPerformanceFeeAmount: "",
      performanceFeeAmount: 1,
      customFlatAmount: "",
      flatAmount: 1,
      customHipCapAmount: "",
      hipCapAmount: 1,
    };
  },
  methods: {
    handlePcCheckbox: function(item) {
      this.premiumCharge = item;
      this.customPremiumCharge = "";
      this.$refs.customPCRef.value = "";
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
        // premium charge
        this.sameInAllYears.premium_charge = document.getElementById(
          `premiumcharge${this.currentTab}`
        ).checked;
        if (this.sameInAllYears.premium_charge) {
          let pc = Number(
            document.getElementById(`premium_charge_fees${this.currentTab}`)
              .value
          );
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
        this.sameInAllYears.loan_interest = document.getElementById(
          `loanIntrest${this.currentTab}`
        ).checked;

        if (this.sameInAllYears.loan_interest) {
          let li = Number(
            document.getElementById(`loan_interest_fees${this.currentTab}`)
              .value
          );
          if (charges.includes(li)) {
            this.loanInterest = li;
          } else {
            this.customInterestAmount = li;
            this.$refs.customLIRef.value = li;
          }
        } else {
          this.loanInterest = "";
        }

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

        if (this.sameInAllYears.credit_bonus_fee) {
          let ff = Number(
            document.getElementById(`flat_credit_fees${this.currentTab}`).value
          );
          if (charges.includes(ff)) {
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
      }
    },
  },
};
</script>
<style lang="">
</style>