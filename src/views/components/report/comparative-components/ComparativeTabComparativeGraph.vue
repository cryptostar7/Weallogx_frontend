<template lang="">
    <div class="empty" data-class="empty-wrapper" data-empty="1">
        <div class="fill" data-class="empty-fill" draggable="true" data-fill="2">
            <div class="report-client-list-div tab-id-2" id="comparativeGraphTabView">
            <div class="ComparativeTableMainDiv active rightDivTop2">
                <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                <div class="d-flex align-items-center">
                    <div class="button-cover2 prstnRadioBtnHide">
                    <div class="radioBtnDiv r2" id="button-2">
                        <input id="rightCheckBox2" type="checkbox" checked
                        class="checkbox2 commonRadioBtn1 rightCheckBox2" rightCheckAttr="2"
                        onchange="rightCheckbox(this,event)" />
                        <div class="knobs2"></div>
                        <div class="layer2"></div>
                    </div>
                    </div>
                    <label for="rightCheckBox2" class="rghtTopHeadcommon">Comparative Graph</label>
                </div>
                <div class="rightLeftDoubleLIneDegine">
                    <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                    <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                    </svg>
                </div>
                </div>
                <div class="collapseDivMain collapseDiv2">
                <hr class="collapseDivHr">
                <div class="px-3 pt-3" id="comparativeValuesFluid">
                    <div class="container-fluid">
                    <div class="d-flex justify-content-between flex-gap-12">
                        <div class="flex-1">
                        <div class="distributionCard1 equalDistCard1 position-relative w-100">
                            <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                                <p>Longevity</p>
                                <p>LIRP Balance</p>
                            </div>
                            <div class="d-flex">
                                <div class="button-cover2">
                                <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                    <input type="checkbox" class="checkbox2 commonRadioBtn1" checked />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="d-flex justify-content-between">
                            <div class="compGraphtopPara bgChangerComGraph1">
                                <p>Longevity</p>
                                <p>30 Years+</p>
                            </div>
                            <div class="compGraphtopPara bgChangerComGraph1">
                                <p class="text-end">Cumulative Income</p>
                                <p class="text-end">$5,000,000</p>
                            </div>
                            </div>
                            <div class="compGraphSmallBdr compGraphSmallBdrClr1 pt-1 mb-two">
                            <p></p>
                            </div>
                            <div class="d-flex">
                            <div class="compGraphtopParaTwo">
                                <p>Rate of Return</p>
                                <p>10.15%</p>
                            </div>
                            <div class="compGraphtopParaTwo cardParLeftMar">
                                <p>IRR</p>
                                <p>9.57%</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="flex-1">
                        <div class="distributionCard1 equalDistCard2 position-relative w-100">
                            <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                                <p>Longevity</p>
                                <p class="blueRadioSwtchpara">Brokerage Account Balance</p>
                            </div>
                            <div class="d-flex">
                                <div class="button-cover2">
                                <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                    <input type="checkbox" class="checkbox2 commonRadioBtn1" checked />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                </div>
                                </div>
                                <a class="ms-2 deleteButtonAncor deleteBtnBlue"
                                data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                    stroke="#9D9D9D" />
                                    <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5"
                                    transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                </svg>
                                </a>
                            </div>
                            </div>
                            <div class="d-flex justify-content-between">
                            <div class="compGraphtopPara bgChangerComGraph2">
                                <p>Longevity</p>
                                <p>22 Years</p>
                            </div>
                            <div class="compGraphtopPara bgChangerComGraph2">
                                <p class="text-end">Cumulative Income</p>
                                <p class="text-end">$5,000,000</p>
                            </div>
                            </div>
                            <div class="compGraphSmallBdr compGraphSmallBdrClr2 pt-1 mb-two">
                            <p></p>
                            </div>
                            <div class="d-flex">
                            <div class="compGraphtopParaTwo">
                                <p>Rate of Return</p>
                                <p>10.15%</p>
                            </div>
                            <div class="compGraphtopParaTwo cardParLeftMar">
                                <p>IRR</p>
                                <p>9.57%</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="flex-1">
                        <div class="distributionCard1 equalDistCard3 position-relative w-100">
                            <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                                <p>Longevity</p>
                                <p class="voiletRadioSwtchpara">401K/IRA Balance</p>
                            </div>
                            <div class="d-flex">
                                <div class="button-cover2">
                                <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                    <input type="checkbox" class="checkbox2 commonRadioBtn1" checked />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                </div>
                                </div>
                                <a class="ms-2 deleteButtonAncor deleteBtnVoilet"
                                data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                    stroke="#9D9D9D" />
                                    <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5"
                                    transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                </svg>
                                </a>
                            </div>
                            </div>
                            <div class="d-flex justify-content-between">
                            <div class="compGraphtopPara bgChangerComGraph3">
                                <p>Longevity</p>
                                <p>22 Years</p>
                            </div>
                            <div class="compGraphtopPara bgChangerComGraph3">
                                <p class="text-end">Cumulative Income</p>
                                <p class="text-end">$5,000,000</p>
                            </div>
                            </div>
                            <div class="compGraphSmallBdr compGraphSmallBdrClr3 pt-1 mb-two">
                            <p></p>
                            </div>
                            <div class="d-flex">
                            <div class="compGraphtopParaTwo">
                                <p>Avg Return</p>
                                <p>10.15%</p>
                            </div>
                            <div class="compGraphtopParaTwo cardParLeftMar">
                                <p>CAGR</p>
                                <p>9.57%</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="flex-1">
                        <div class="distributionCard1 equalDistCard4 position-relative w-100">
                            <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                                <p>Longevity</p>
                                <p class="redRadioSwtchpara">Annuity Balance</p>
                            </div>
                            <div class="d-flex">
                                <div class="button-cover2">
                                <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                    <input type="checkbox" class="checkbox2 commonRadioBtn1" checked />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                </div>
                                </div>
                                <a class="ms-2 deleteButtonAncor deleteBtnRed"
                                data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                    stroke="#9D9D9D" />
                                    <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5"
                                    transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                </svg>
                                </a>
                            </div>
                            </div>
                            <div class="d-flex justify-content-between">
                            <div class="compGraphtopPara bgChangerComGraph4">
                                <p>Longevity</p>
                                <p>22 Years</p>
                            </div>
                            <div class="compGraphtopPara bgChangerComGraph4">
                                <p class="text-end">Cumulative Income</p>
                                <p class="text-end">$5,000,000</p>
                            </div>
                            </div>
                            <div class="compGraphSmallBdr compGraphSmallBdrClr4 pt-1 mb-two">
                            <p></p>
                            </div>
                            <div class="d-flex">
                            <div class="compGraphtopParaTwo">
                                <p>Avg Return</p>
                                <p>10.15%</p>
                            </div>
                            <div class="compGraphtopParaTwo cardParLeftMar">
                                <p>CAGR</p>
                                <p>9.57%</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="container-fluid pb-2">
                    <div class="graph-container-div">
                        <canvas id="comparativeValuesChart" width="400" height="150"></canvas>
                        <div class="progressBarEachBtm comparative">
                        <div
                            class="bar-container contribution-radio d-flex justify-content-between align-items-center">
                            <div class="progressBarBtnDiv">
                            <p>Annual Contribution</p>
                            </div>
                            <div class="d-flex">
                            <div class="button-cover2" id="button-2">
                                <div class="radioBtnDiv  r2">
                                <input type="checkbox" class="checkbox2 commonRadioBtn1" checked="">
                                <div class="knobs2"></div>
                                <div class="layer2"></div>
                                </div>
                            </div>
                            <a class="ms-2 deleteButtonAncor" data-bs-target="#deleteAccountModal"
                                data-bs-toggle="modal">
                                <img src="@/assets/images/icons/delete-icon.svg" alt="delete">
                            </a>
                            </div>
                        </div>
                        <div
                            class="bar-container distribution-radio d-flex justify-content-between align-items-center">
                            <div class="progressBarBtnDiv">
                            <p>Annual Distribution</p>
                            </div>
                            <div class="d-flex">
                            <div class="button-cover2" id="button-2">
                                <div class="radioBtnDiv  r2">
                                <input type="checkbox" class="checkbox2 commonRadioBtn1" checked="">
                                <div class="knobs2"></div>
                                <div class="layer2"></div>
                                </div>
                            </div>
                            <a class="ms-2 deleteButtonAncor" data-bs-target="#deleteAccountModal"
                                data-bs-toggle="modal">
                                <img src="@/assets/images/icons/delete-icon.svg" alt="delete">
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="container-fluid d-none">
                    <div class="disclosure-div px-3 py-1">
                    <p>This program illustrates the current values and assumptions of an Indexed Universal Life
                        (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV) are for
                        illustrative and educational purposes only, and are intended to produce insight and
                        discussion points between you and a licensed agent. No claim is made that the IUL is
                        superior to the CVs. Guarantees backed by the claims paying ability of the underwriting
                        insurance company. These graphics and illustrations do not constitute tax, legal or
                        accounting advice. Please consult your own legal or tax counsel to confirm how tax
                        treatment applies to you. The hypothetical results are for illustrative purposes only and
                        should not be deemed a representation of past or future results. Your experience may and
                        likely will vary materially from these results. Tax-free access to cash values are
                        typically done through a policy loan which can reduce death benefits, cash values, incur
                        interest and could cause the policy to lapse. Additional premium payments may be needed to
                        keep the policy in force and in the event of a lapse, outstanding policy loans in excess
                        of unrecovered basis will be subject to ordinary income taxes. Tax laws are subject to
                        change. These values are not guaranteed. Policies still incur costs and charges each year
                        for administration and insurance. This could cause the cash value to go down. You may also
                        lose cash value by surrendering the policy. Life Insurance costs, caps, and participation
                        rates can be changed at the discretion of the insurance company within certain limits,
                        which can positively or adversely affect the performance of the policy.Neither this
                        software nor the presenting agent in any way guarantees future performance, and this
                        presentation is null and void unless accompanied by an approved illustration from the
                        insurance company presented.</p>

                    <div class="row">
                        <div class="col-md-6">
                        <h6 class="bold-one">Fees assumed:</h6>
                        <div>
                            <p><span>Brokerage Account: <b>1.5%</b> per annum;</span>
                            <span>401K/IRA: <b>1.5%</b> per annum; </span>
                            <span>Annuity: <b>2.3%</b> per annum; </span>
                            <span>LIRP: actual current costs of insurance, as per the carrier
                                illustration</span>
                            </p>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div>
                            <h6 class="bold-one">Taxes assumed: </h6>
                            <p><span><b>27%</b> years <b>1-6</b>;</span>
                            <span><b>35%</b> years <b>7+</b>;</span>
                            <!-- [If capital gains are included for a taxable investment, then we include]: -->
                            <span>Capital gains ratio: <b>50%</b>;</span>
                            <span>Capital gains tax rate: <b>20%</b>;</span>
                            <!-- If taxes are scheduled, then the last line is simply: -->
                            </p>
                        </div>
                        </div>
                    </div>
                    <p><span>Taxes assumed: <b>Per schedule</b></span></p>
                    </div>
                </div>
                </div>

                <div class="bottom-disclosure px-3" id="disclosure2" data-dc="2">
                <div class="container-fluid">
                    <div class="disclosure-div">
                    <div class="disclosure-header-div d-flex align-items-center justify-content-between">
                        <h4 class="disclosure-heading">Disclosure</h4>
                        <div class="disclosure-right-actions">
                        <button class="btn round-btn disclosure-edit">
                            <span>Edit</span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z"
                                fill="#9D9D9D"></path>
                            <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z"
                                fill="#9D9D9D"></path>
                            <path
                                d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z"
                                fill="#9D9D9D"></path>
                            </svg>
                        </button>
                        <button class="btn round-btn disclosure-save d-none">
                            <span>Save</span>
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                            <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101"
                                transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D" />
                            <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101"
                                transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D" />
                            </svg>
                        </button>
                        </div>
                    </div>
                    <div class="disclosure-text-wrapper">
                        <div class="disclosure-textarea" contenteditable="true">
                        This program illustrates the current values and assumptions of an Indexed Universal Life
                        (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV) are for
                        illustrative and educational purposes only, and are intended to produce insight and
                        discussion points between you and a licensed agent. No claim is made that the IUL is
                        superior to the CVs. Guarantees backed by the claims paying ability of the underwriting
                        insurance company. These graphics and illustrations do not constitute tax, legal or
                        accounting advice. Please consult your own legal or tax counsel to confirm how tax
                        treatment applies to you. The hypothetical results are for illustrative purposes only
                        and should not be deemed a representation of past or future results. Your experience may
                        and likely will vary materially from these results. Tax-free access to cash values are
                        typically done through a policy loan which can reduce death benefits, cash values, incur
                        interest and could cause the policy to lapse. Additional premium payments may be needed
                        to keep the policy in force and in the event of a lapse, outstanding policy loans in
                        excess of unrecovered basis will be subject to ordinary income taxes. Tax laws are
                        subject to change. These values are not guaranteed. Policies still incur costs and
                        charges each year for administration and insurance. This could cause the cash value to
                        go down. You may also lose cash value by surrendering the policy. Life Insurance costs,
                        caps, and participation rates can be changed at the discretion of the insurance company
                        within certain limits, which can positively or adversely affect the performance of the
                        policy.Neither this software nor the presenting agent in any way guarantees future
                        performance, and this presentation is null and void unless accompanied by an approved
                        illustration from the insurance company presented.
                        </div>
                    </div>
                    <div class="disclosure-footer">
                        <div class="row">
                        <div class="col-md-6">
                            <h6 class="bold-one">Fees assumed:</h6>
                            <div>
                            <p><span>Brokerage Account: <b>1.5%</b> per annum;</span>
                                <span>401K/IRA: <b>1.5%</b> per annum; </span>
                                <span>Annuity: <b>2.3%</b> per annum; </span>
                                <span>LIRP: actual current costs of insurance, as per the carrier
                                illustration</span>
                            </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div>
                            <h6 class="bold-one">Taxes assumed: </h6>
                            <p><span><b>27%</b> years <b>1-6</b>;</span>
                                <span><b>35%</b> years <b>7+</b>;</span>
                                <!-- [If capital gains are included for a taxable investment, then we include]: -->
                                <span>Capital gains ratio: <b>50%</b>;</span>
                                <span>Capital gains tax rate: <b>20%</b>;</span>
                                <!-- If taxes are scheduled, then the last line is simply: -->
                            </p>
                            </div>
                        </div>
                        </div>
                        <p><span>Taxes assumed: <b>Per schedule</b></span></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>