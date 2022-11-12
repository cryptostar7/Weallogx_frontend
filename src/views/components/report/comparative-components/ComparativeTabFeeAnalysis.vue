<template lang="">
    <div class="empty" data-class="empty-wrapper" data-empty="5">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="6">
        <div class="report-client-list-div tab-id-6" id="feeAnalysisTabView">
        <div class="ComparativeTableMainDiv active rightDivTop6">
            <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
                <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                    <input id="rightCheckBox6" type="checkbox" checked
                    class="checkbox2 commonRadioBtn1 rightCheckBox6" rightCheckAttr="6"
                    onchange="rightCheckbox(this,event)" />
                    <div class="knobs2"></div>
                    <div class="layer2"></div>
                </div>
                </div>
                <label for="rightCheckBox6" class="rghtTopHeadcommon">Fee Analysis</label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                </svg>
            </div>
            </div>
            <div class="collapseDivMain collapseDiv6">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
                <div class="d-flex justify-content-center">
                <div class="nav SwtchBtnRprtBldr wide nav-pills" role="tablist" aria-orientation="vertical">
                    <div class="active" id="v-pills-annualFees-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-annualFees" type="button" role="tab"
                    aria-controls="v-pills-annualFees" aria-selected="true">
                    Annual Fees
                    </div>
                    <div id="v-pills-comulativeFees-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-comulativeFees" type="button" role="tab"
                    aria-controls="v-pills-comulativeFees" aria-selected="false">Cumulative Fees
                    </div>
                    <div id="v-pills-valueEfficiency-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-valueEfficiency" type="button" role="tab"
                    aria-controls="v-pills-valueEfficiency" aria-selected="false">Value Efficiency
                    </div>
                </div>
                </div>
                <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-annualFees" role="tabpanel"
                    aria-labelledby="v-pills-annualFees-tab">
                    <div class="container-fluid" id="annualFeesFluid">
                    <div class="d-flex justify-content-between flex-gap-12">
                        <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard1 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Annual Fees</p>
                                <p>LifePro+</p>
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
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">0.62%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Cumulative Income Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">0.72%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Death Benefit Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">0.41%</p>
                            </div>
                        </div>
                        </div>
                        <div class=" mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard2 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Annual Fees</p>
                                <p class="blueRadioSwtchpara">Brokerage Account</p>
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
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.3%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Cumulative Income Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.41%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Death Benefit Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.29%</p>
                            </div>
                        </div>
                        </div>
                        <div class=" mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard3 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Annual Fees</p>
                                <p class="voiletRadioSwtchpara">401K / IRA</p>
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
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.42%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Cumulative Income Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.58%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Death Benefit Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.33%</p>
                            </div>
                        </div>
                        </div>
                        <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard4 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Annual Fees</p>
                                <p class="redRadioSwtchpara">Annuity</p>
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
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">0.62%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Cumulative Income Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">0.72%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Death Benefit Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">0.41%</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="container-fluid">
                    <div class="graph-container-div fh">
                        <canvas id="annualFeesChart" width="500" height="116"></canvas>
                    </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="v-pills-comulativeFees" role="tabpanel"
                    aria-labelledby="v-pills-comulativeFees-tab">
                    <div class="container-fluid" id="cumulativeFeesFluid">
                    <div class="d-flex justify-content-between flex-gap-12">
                        <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard1 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Cumulative Fees</p>
                                <p>LifePro+</p>
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
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">0.62%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Cumulative Income Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">0.72%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Death Benefit Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">0.41%</p>
                            </div>
                        </div>
                        </div>
                        <!--  -->
                        <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard2 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Cumulative Fees</p>
                                <p class="blueRadioSwtchpara">Brokerage Account</p>
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
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.3%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Cumulative Income Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.41%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Death Benefit Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.29%</p>
                            </div>
                        </div>
                        </div>
                        <!--  -->
                        <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard3 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Cumulative Fees</p>
                                <p class="voiletRadioSwtchpara">401K / IRA</p>
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
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.42%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Cumulative Income Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.58%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Death Benefit Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.33%</p>
                            </div>
                        </div>
                        </div>
                        <!--  -->
                        <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard4 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Cumulative Fees</p>
                                <p class="redRadioSwtchpara">Annuity</p>
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
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.55%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Cumulative Income Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.67%</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Death Benefit Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1.43%</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="container-fluid">
                    <div class="graph-container-div fh">
                        <canvas id="cumulativeFeesChart" width="500" height="116"></canvas>
                    </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="v-pills-valueEfficiency" role="tabpanel"
                    aria-labelledby="v-pills-valueEfficiency-tab">
                    <div class="container-fluid">
                    <div class="d-flex justify-content-between flex-gap-12">
                        <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard1 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Value Efficiency</p>
                                <p>LifePro+</p>
                            </div>
                            <div class="d-flex">
                                <div class="button-cover2">
                                <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                    <input type="checkbox" class="checkbox2 commonRadioBtn1 feeGroupBarCard1"
                                    checked feeGroupProgBar="1"
                                    onchange="feeGroupProgressbar(this,event)" />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value Fee Ratio</p>
                            <p class="legacyCardPara2 text-right">1:6.15</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Fees</p>
                            <p class="legacyCardPara2 text-right">$243,695</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value </p>
                            <p class="legacyCardPara2 text-right">$149,7690</p>
                            </div>
                        </div>
                        </div>
                        <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard2 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Value Efficiency</p>
                                <p class="blueRadioSwtchpara">Brokerage Account</p>
                            </div>
                            <div class="d-flex">
                                <div class="button-cover2">
                                <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                    <input type="checkbox" class="checkbox2 commonRadioBtn1 feeGroupBarCard2"
                                    checked feeGroupProgBar="2"
                                    onchange="feeGroupProgressbar(this,event)" />
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
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Value Efficiency Ratio</p>
                            <p class="legacyCardPara2 text-right">1:6.15</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Fees</p>
                            <p class="legacyCardPara2 text-right">$243,695</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value </p>
                            <p class="legacyCardPara2 text-right">$149,7690</p>
                            </div>
                        </div>
                        </div>
                        <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard3 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Value Efficiency</p>
                                <p class="voiletRadioSwtchpara">401K / IRA</p>
                            </div>
                            <div class="d-flex">
                                <div class="button-cover2">
                                <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                    <input type="checkbox" class="checkbox2 commonRadioBtn1 feeGroupBarCard3"
                                    checked feeGroupProgBar="3"
                                    onchange="feeGroupProgressbar(this,event)" />
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
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Value Efficiency Ratio</p>
                            <p class="legacyCardPara2 text-right">1:6.15</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Fees</p>
                            <p class="legacyCardPara2 text-right">$243,695</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value </p>
                            <p class="legacyCardPara2 text-right">$149,7690</p>
                            </div>
                        </div>
                        </div>
                        <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard4 position-relative w-100">
                            <div class="d-flex justify-content-between pb-1">
                            <div class="distrbnCard1paras">
                                <p>Value Efficiency</p>
                                <p class="redRadioSwtchpara">Annuity</p>
                            </div>
                            <div class="d-flex">
                                <div class="button-cover2">
                                <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                    <input type="checkbox" class="checkbox2 commonRadioBtn1 feeGroupBarCard4"
                                    checked feeGroupProgBar="4"
                                    onchange="feeGroupProgressbar(this,event)" />
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
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Value Efficiency Ratio</p>
                            <p class="legacyCardPara2 text-right">1:6.15</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Fees</p>
                            <p class="legacyCardPara2 text-right">$243,695</p>
                            </div>
                            <div class="mt-1 d-flex justify-content-between">
                            <p class="legacyCardPara">Total Value </p>
                            <p class="legacyCardPara2 text-right">$149,7690</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="container-fluid mt-20">
                    <div class="feeMainProgrssBarDiv">
                        <div>
                        <div class="d-flex feeMainProgBrdrDivs">
                            <p class="feeMainProgBrdr"></p>
                        </div>
                        <div class="d-flex feeMainProgBrdrDivs">
                            <p class="feeMainProgBrdr"></p>
                        </div>
                        <div class="d-flex feeMainProgBrdrDivs">
                            <p class="feeMainProgBrdr"></p>
                        </div>
                        <div class="d-flex feeMainProgBrdrDivs">
                            <p class="feeMainProgBrdr"></p>
                        </div>
                        <div class="d-flex feeMainProgBrdrDivs">
                            <p class="feeMainProgBrdr"></p>
                        </div>
                        <div class="d-flex feeMainProgBrdrDivs m-0 p-0">
                            <p class="feeMainProgBrdr"></p>
                        </div>
                        </div>
                        <div class="feeProgressAbsltCls">
                        <div class="progressAllBarsDivMain flex-gap-12">
                            <div class="feeProgressBarEachDivMain feeDivDisplayNone1">
                            <div class="d-flex groupedFourBars1">
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight1 feeGroupedBarsSigleClr1 ">
                                <div class="CardProgressBig feeGreenBar1 feeEqualPercent1">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeGreenNumBar1">
                                    $<span class="feeClrProgBar1">85,044</span> </div>
                                </div>
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight2 groupedBarsSigleClr3">
                                <div class="CardProgressBig feeGreenBar2 feeEqualPercent2">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeGreenNumBar2">
                                    $<span class="feeClrProgBar2">45,044</span>
                                </div>
                                </div>
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight3 groupedBarsSigleClr4">
                                <div class="CardProgressBig feeGreenBar3 feeEqualPercent3">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeGreenNumBar3">
                                    $<span class="feeClrProgBar3">9,044</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="feeProgressBarEachDivMain feeDivDisplayNone2">
                            <div class="d-flex groupedFourBars2">
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight4 groupedSecBarsSigleClr1">
                                <div class="CardProgressBig feeBlueBar1 feeEqualPercent4">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeBlueNumBar1">
                                    $<span class="feeClrProgBar4">65,044</span>
                                </div>
                                </div>
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv  feeProgressBarEachHeight5 groupedSecBarsSigleClr3">
                                <div class="CardProgressBig feeBlueBar2 feeEqualPercent5">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeBlueNumBar2">
                                    $<span class="feeClrProgBar5">75,844</span>
                                </div>
                                </div>
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv  feeProgressBarEachHeight6 groupedSecBarsSigleClr4">
                                <div class="CardProgressBig feeBlueBar3 feeEqualPercent6">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeBlueNumBar3">
                                    $<span class="feeClrProgBar6">15,044</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="feeProgressBarEachDivMain feeDivDisplayNone3">
                            <div class="d-flex groupedFourBars3">
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv  feeProgressBarEachHeight7 groupedThirdBarsSigleClr1">
                                <div class="CardProgressBig feeVoiletBar1 feeEqualPercent7">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeVoiletNumBar1">$<span
                                    class="feeClrProgBar7">25,044</span>
                                </div>
                                </div>
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight8 groupedThirdBarsSigleClr3">
                                <div class="CardProgressBig feeVoiletBar2 feeEqualPercent8">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeVoiletNumBar2">$<span
                                    class="feeClrProgBar8">35,044</span>
                                </div>
                                </div>
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight9 groupedThirdBarsSigleClr4">
                                <div class="CardProgressBig feeVoiletBar3 feeEqualPercent9">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeVoiletNumBar3">$<span
                                    class="feeClrProgBar9">65,044</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="feeProgressBarEachDivMain feeDivDisplayNone4">
                            <div class="d-flex groupedFourBars3">
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv  feeProgressBarEachHeight10 groupedThirdBarsSigleClr1">
                                <div class="CardProgressBig feeRedBar1 feeEqualPercent10">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeRedNumBar1">$<span
                                    class="feeClrProgBar10">15,044</span>
                                </div>
                                </div>
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight11 groupedThirdBarsSigleClr3">
                                <div class="CardProgressBig feeRedBar2 feeEqualPercent11">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeRedNumBar2">$<span
                                    class="feeClrProgBar11">35,044</span>
                                </div>
                                </div>
                                <div
                                class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight12 groupedThirdBarsSigleClr4">
                                <div class="CardProgressBig feeRedBar3 feeEqualPercent12">
                                </div>
                                <div class="position-absolute progressBarbtmNum feeRedNumBar3">$<span
                                    class="feeClrProgBar12">65,044</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="bottom-disclosure px-3" id="disclosure6" data-dc="6">
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
                        This program illustrates the current values and assumptions of an Indexed Universal
                        Life (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV)
                        are for illustrative and educational purposes only, and are intended to produce
                        insight and discussion points between you and a licensed agent. No claim is made that
                        the IUL is superior to the CVs. Guarantees backed by the claims paying ability of the
                        underwriting insurance company. These graphics and illustrations do not constitute
                        tax, legal or accounting advice. Please consult your own legal or tax counsel to
                        confirm how tax treatment applies to you. The hypothetical results are for
                        illustrative purposes only and should not be deemed a representation of past or future
                        results. Your experience may and likely will vary materially from these results.
                        Tax-free access to cash values are typically done through a policy loan which can
                        reduce death benefits, cash values, incur interest and could cause the policy to
                        lapse. Additional premium payments may be needed to keep the policy in force and in
                        the event of a lapse, outstanding policy loans in excess of unrecovered basis will be
                        subject to ordinary income taxes. Tax laws are subject to change. These values are not
                        guaranteed. Policies still incur costs and charges each year for administration and
                        insurance. This could cause the cash value to go down. You may also lose cash value by
                        surrendering the policy. Life Insurance costs, caps, and participation rates can be
                        changed at the discretion of the insurance company within certain limits, which can
                        positively or adversely affect the performance of the policy.Neither this software nor
                        the presenting agent in any way guarantees future performance, and this presentation
                        is null and void unless accompanied by an approved illustration from the insurance
                        company presented.
                    </div>
                    </div>
                    <div class="disclosure-footer">
                    <div class="row">
                        <div class="col-md-12 pb-3">
                        <p class="mb-1"><b>Total Value</b> means cumulative net distributions plus ending
                            account value or death benefit. In other words, what you get out of the account.
                        </p>
                        <p class="mb-1"><b>Value Efficiency</b> means the ratio of total value to
                            comprehensive fees. In other words, for every dollar of fees, what is the return
                            you get for that fee in terms of total value?</p>
                        <p class="mb-1"><b>Fees</b> include recurring fees (such as management fees and
                            asset fees), transaction fees, and taxes. For the LIRP, fees include all current
                            costs of insurance, including administrative, mortality, and coverage expenses, as
                            detailed by the illustration.</p>
                        </div>
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
    </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>