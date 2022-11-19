<template lang="">
     <div class="indexStrategyallDivs active accordion-button collapsed mt-3"
        data-bs-toggle="collapse" data-bs-target="#fees-parameters1" aria-expanded="false"
        aria-controls="fees-parameters1">
        <div class="d-flex justify-content-between align-items-center">
        <div class="indexStrategyheadBrdr">
            <p>Fees<svg class="ms-2 boxTickImage" width="21" height="21" viewBox="0 0 21 21"
                fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div id="fees-parameters1" class="accordion-collapse collapse analysisParametersContent "
        data-bs-parent="#accordionFlushExample">
        <div class="formParabrdrLavelDiv mt-4">
        <p>Premium Charge</p>
        <p></p>
        </div>
        <div class="d-flex justify-content-between align-items-center parent-radio-div">
        <div
            class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1">
            <label v-for="(item, index) in MaxPremiumCharge" :key="index" :class="index > 1 ? `${item === MaxPremiumCharge ? 'ms-1':'mx-1'}`:''">
            <input type="radio" :name="`premiumChargetab${currentTab}`" class="d-none" :checked="!customPremiumCharge && !index ? true : false">
            <span class="fixedStartYear">{{item}}%</span>
            </label>
        </div>
        <div class="d-flex align-items-center">
            <div class="or-div">
            or
            </div>
            <div class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3">
            <label for="customAmount">Custom Amount</label>
            <input type="text"  v-model="customPremiumCharge" class="bonus-input">
            </div>
        </div>
        </div>
        <div class="d-flex align-items-center mt-2">
        <div class="form-check form-switch custom-switch ms-2">
            <input class="form-check-input" type="checkbox" role="switch" :id="`premiuscharge${currentTab}`">
        </div>
        <label :for="`premiuscharge${currentTab}`" class="buttonSaveRadioPara">Same in All Years</label>
        </div>
        <div class="formParabrdrLavelDiv mt-4">
        <p>Loan Interest Rate</p>
        <p></p>
        </div>
        <div class="d-flex justify-content-between align-items-center parent-radio-div">
        <div
            class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1">
            <label v-for="(item, index) in MaxLoanInterest" :key="index" :class="index > 1 ? `${item === MaxLoanInterest ? 'ms-1':'mx-1'}`:''">
            <input type="radio" :name="`loanInterest${currentTab}`" class="d-none" :checked="!customInterestAmount && !index ? true : false">
            <span class="fixedStartYear">{{item}}%</span>
            </label>
        </div>
        <div class="d-flex align-items-center">
            <div class="or-div">
            or
            </div>
            <div class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3">
            <label for="customAmount">Custom Amount</label>
            <input type="text" v-model="customInterestAmount" class="bonus-input">
            </div>
        </div>
        </div>
        <div class="d-flex align-items-center mt-2">
        <div class="form-check form-switch custom-switch ms-2">
            <input class="form-check-input" type="checkbox" role="switch" id="loanIntrest1">
        </div>
        <label for="loanIntrest1" class="buttonSaveRadioPara">Same in All Years</label>
        </div>
        <p class="loan-Intrest-para">Loan Interest Charged</p>
        <div class="d-flex justify-content-center align-items-center mt-3">
        <div class="enhancementFixedSheduleBtn nav nav-tabs" id="nav-tab" role="tablist">
            <div class="active" id="nav-advance-tab" data-bs-toggle="tab"
            data-bs-target="#nav-advance" role="tab" aria-controls="nav-advance"
            aria-selected="true">In Advance</div>
            <div class="" id="nav-arrears-tab" data-bs-toggle="tab" data-bs-target="#nav-arrears"
            role="tab" aria-controls="nav-arrears" aria-selected="false">In Arrears</div>
        </div>
        </div>
        <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-advance" role="tabpanel"
            aria-labelledby="nav-advance-tab">

            <div class="formParabrdrLavelDiv mt-5">
            <p>Performance Multiplier Fee</p>
            <p></p>
            </div>
            <div class="d-flex justify-content-between align-items-center parent-radio-div">
            <div
                class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1">
                <label  v-for="(item, index) in MaxPerformanceMultiplierFee" :key="index" :class="index > 1 ? `${item === MaxPerformanceMultiplierFee ? 'ms-1':'mx-1'}`:''">
                <input type="radio" :name="`perfMultiplier${currentTab}`" :checked="!customPerformanceFeeAmount && !index ? true : false" class="d-none" />
                <span class="fixedStartYear">{{item}}%</span>
                </label>
            </div>
            <div class="d-flex align-items-center">
                <div class="or-div">
                or
                </div>
                <div class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3">
                <label for="customAmount">Custom Amount</label>
                <input type="text" class="bonus-input" v-model="customPerformanceFeeAmount">
                </div>
            </div>
            </div>
            <div class="d-flex align-items-center mt-2">
            <div class="form-check form-switch custom-switch ms-2">
                <input class="form-check-input" type="checkbox" role="switch" id="multiplierFee1">
            </div>
            <label for="multiplierFee1" class="buttonSaveRadioPara">Same in All Years</label>
            </div>
            <div class="formParabrdrLavelDiv mt-4">
            <p>Flat Credit/Bonus Fee</p>
            <p></p>
            </div>
            <div class="d-flex justify-content-between align-items-center parent-radio-div">
            <div
                class="feesRadioDiv d-flex justify-content-between feeDivWidth align-items-center px-1">
                <label v-for="(item, index) in 3" :key="index" :class="index === 1 ? 'mx-1':''">
                <input type="radio" :name="`flatCredit${currentTab}`" class="d-none" :checked="!customFlatAmount && !index ? true : false">
                <span class="fixedStartYear">{{item}}%</span>
                </label>
            </div>
            <div class="d-flex align-items-center">
                <div class="or-div">
                or
                </div>
                <div class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3">
                <label for="customAmount">Custom Amount</label>
                <input type="text" class="bonus-input" v-model="customFlatAmount">
                </div>
            </div>
            </div>
            <div class="d-flex align-items-center mt-2">
            <div class="form-check form-switch custom-switch ms-2">
                <input class="form-check-input" type="checkbox" role="switch"
                id="flat-credit-fee-radio" v-model="sameInAllYearTax" checked>
            </div>
            <label for="flat-credit-fee-radio" class="buttonSaveRadioPara">Same in All Years</label>
            </div>
            <!--  -->
            <div class="d-flex justify-content-center w-100" v-if="!sameInAllYearTax">
                <div class="schduleTableDiv mt-5 ">
                    <table class="table">
                    <thead>
                        <th>Year</th>
                        <th>Rate</th>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in 10" :key="index">
                            <td data-label="Year">{{item}}</td>
                            <td data-label="Rate" class="amountInnerTableInputTd feeTdInputWithPercent">
                                <input type="text" class="form-control">
                                <label for="amount">$</label>
                            </td>
                        </tr>
                    </tbody>
                    </table>
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
                <input type="radio" :name="`highCapFee${currentTab}`" class="d-none" :checked="!customHipCapAmount && !index ? true : false">
                <span class="fixedStartYear w-100">{{item}}%</span>
                </label>
               

            </div>
            <div class="d-flex align-items-center">
                <div class="or-div">
                or
                </div>
                <div class="customAmountInputDiv creditBonusInputDiv customInputWidth ms-3">
                <label for="customAmount">Custom Amount</label>
                <input type="text" class="bonus-input" v-model="customHipCapAmount">
                </div>
            </div>
            </div>
        </div>
        <div class="tab-pane fade" id="nav-arrears" role="tabpanel"
            aria-labelledby="nav-arrears-tab">
            ------
        </div>
        </div>
    </div>
    <!--  -->
</template>
<script>
export default {
    props:['currentTab'],
    data() {
        return {
            MaxPremiumCharge:8,
            MaxLoanInterest:8,
            MaxPerformanceMultiplierFee:8,
            sameInAllYearTax:true,
            customPremiumCharge:'',
            customInterestAmount:'',
            customPerformanceFeeAmount:'',
            customFlatAmount:'',
            customHipCapAmount:'',
        }
    },
}
</script>
<style lang="">
    
</style>