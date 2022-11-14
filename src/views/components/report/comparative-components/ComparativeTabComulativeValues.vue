<template lang="">
  <div class="empty" data-class="empty-wrapper" data-empty="3">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="4">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`"
        id="cumulativeValuesTabView">
        <div :class="`ComparativeTableMainDiv rightDivTop4 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox4" type="checkbox" :checked="activeTabs[keyId]"
                    class="checkbox2 rightCheckBox4" rightCheckAttr="4"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox4" class="rghtTopHeadcommon">Cumulative Values<span
                  class="ms-3 equalThingTabTxt">What you get out of the account.</span></label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv4" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
              <div class="d-flex justify-content-center mt-2">
                <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist" aria-orientation="vertical">
                  <div class="active" id="v-pills-annualFees1-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-annualFees1" type="button" role="tab" aria-controls="v-pills-annualFees1"
                    aria-selected="true">
                    Cumulative Income
                  </div>
                  <div id="v-pills-comulativeFees1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-comulativeFees1"
                    type="button" role="tab" aria-controls="v-pills-comulativeFees1" aria-selected="false">Total Value
                  </div>
                </div>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-annualFees1" role="tabpanel"
                  aria-labelledby="v-pills-annualFees1-tab">
                  <div class="container-fluid">
                    <div class="d-flex justify-content-between flex-gap-12">
                      <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard1 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Cumulative Income</p>
                              <p>LifePro+</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard1" checked
                                    bigProgBar="1" onchange="bigProgressbar(this, event)" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="mt-2 d-flex">
                            <div class="mt-1 CardProgressBar greenProgress1 boxProgressCommon1">
                              <div class="CardProgress"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <p class="ms-2 CardProgressnym carValue1 position-up2"><span>Cumulative
                                Income</span><br /> $85,044</p>
                          </div>
                          <div class="d-flex justify-content-center addNotesMainDiv">
                            <button type="button" class="AddNoteBtn">Add Note</button>
                            <div class="add-note-input-div d-none">
                              <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.
                              </p>
                              <div class="add-note-input-inner">
                                <input type="text" class="add-note-input form-control flex-1">
                                <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid"
                                    alt="Check"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard2 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Cumulative Income</p>
                              <p class="blueRadioSwtchpara">Account</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard2" checked
                                    bigProgBar="2" onchange="bigProgressbar(this,event)" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a class="ms-2 deleteButtonAncor deleteBtnBlue" data-bs-target="#deleteAccountModal"
                                data-bs-toggle="modal">
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
                          <div class="mt-2 d-flex">
                            <div class="mt-1 CardProgressBar blueProgress1 boxProgressCommon2">
                              <div class="CardProgress blueProgress2"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <p class="ms-2 CardProgressnym blueRadioSwtchpara position-up2">
                              <span>Cumulative Income</span><br />
                              $85,044
                            </p>
                            <p class="ms-3 CardProgressnym commonRedRadioSwtchpara position-up2">
                              <span>Shortfall</span><br />
                              $85,044
                            </p>
                          </div>
                          <div class="d-flex justify-content-center addNotesMainDiv">
                            <button type="button" class="AddNoteBtn">Add Note</button>
                            <div class="add-note-input-div d-none">
                              <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.
                              </p>
                              <div class="add-note-input-inner">
                                <input type="text" class="add-note-input form-control flex-1">
                                <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid"
                                    alt="Check"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard3 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Cumulative Income</p>
                              <p class="voiletRadioSwtchpara">401K / IRA</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard3" checked
                                    bigProgBar="3" onchange="bigProgressbar(this,event)" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a class="ms-2 deleteButtonAncor deleteBtnVoilet" data-bs-target="#deleteAccountModal"
                                data-bs-toggle="modal">
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
                          <div class="mt-2 d-flex">
                            <div class="mt-1 CardProgressBar voiletProgress1 boxProgressCommon3">
                              <div class="CardProgress voiletProgress2"> </div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <p class="ms-2 CardProgressnym voiletRadioSwtchpara position-up2">
                              <span>Cumulative Income</span><br />
                              $85,044
                            </p>
                            <p class="ms-3 CardProgressnym commonRedRadioSwtchpara position-up2">
                              <span>Shortfall</span><br />
                              $85,044
                            </p>
                          </div>
                          <div class="d-flex justify-content-center addNotesMainDiv">
                            <button type="button" class="AddNoteBtn">Add Note</button>
                            <div class="add-note-input-div d-none">
                              <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.
                              </p>
                              <div class="add-note-input-inner">
                                <input type="text" class="add-note-input form-control flex-1">
                                <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid"
                                    alt="Check"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard4 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Cumulative Income</p>
                              <p class="redRadioSwtchpara">Annuity</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard4" checked
                                    bigProgBar="4" onchange="bigProgressbar(this,event)" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal"
                                data-bs-toggle="modal">
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
                          <div class="mt-2 d-flex">
                            <div class="mt-1 CardProgressBar redProgress1 boxProgressCommon4 ">
                              <div class="CardProgress redProgress2"> </div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <p class="ms-2 CardProgressnym redRadioSwtchpara position-up2">
                              <span>Cumulative Income</span><br />
                              $85,044
                            </p>
                            <p class="ms-3 CardProgressnym commonRedRadioSwtchpara position-up2">
                              <span>Shortfall</span><br />
                              $$3,576,828
                            </p>
                          </div>
                          <div class="d-flex justify-content-center addNotesMainDiv">
                            <button type="button" class="AddNoteBtn">Add Note</button>
                            <div class="add-note-input-div d-none">
                              <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.
                              </p>
                              <div class="add-note-input-inner">
                                <input type="text" class="add-note-input form-control flex-1">
                                <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid"
                                    alt="Check"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container-fluid">
                    <div class="CompMainProgrssBarDiv">
                      <div class="w-100">
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs m-0 p-0">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                      </div>
                      <div class="CompProgressAbsltCls">
                        <div class="progressAllBarsDivMain">
                          <div class="d-flex justify-content-between w-100">
                            <div class=" cumulativeValuesProgrees progBarSecEachDiv1 bigBarsAreaJsCls1 ">
                              <div class="cumulativeprogreeDivcommon cumulativeProgLifePro bigBarHeightJs1">
                                <div class="bottomComulativeIncome BottomcumulativeLifePro">
                                  <p>$<span class="bigBarNumberJsCls1">2,172,830</span></p>
                                </div>
                                <div class="shortFallCount">
                                  <p class="">SHORTFALL</p>
                                  <p>$3,163,031</p>
                                </div>
                              </div>
                            </div>
                            <!--  -->
                            <div
                              class="cumulativeValuesProgrees progBarSecEachDiv2 cumulativeProgCommon2 bigBarsAreaJsCls2">
                              <div class="cumulativeprogreeDivcommon cumulativeProgAccount bigBarHeightJs2">
                                <div class="bottomComulativeIncome BottomcumulativeAccount">
                                  <p>$<span class="bigBarNumberJsCls2">3,172,830</span></p>
                                </div>
                                <div class="shortFallCount">
                                  <p class="">SHORTFALL</p>
                                  <p>$3,163,031</p>
                                </div>
                              </div>
                            </div>
                            <!--  -->
                            <div
                              class="cumulativeValuesProgrees progBarSecEachDiv3 cumulativeProgCommon3 bigBarsAreaJsCls3">
                              <div class="cumulativeprogreeDivcommon cumulativeProgIra bigBarHeightJs3">
                                <div class="bottomComulativeIncome BottomcumulativeIra">
                                  <p>$<span class="bigBarNumberJsCls3">2,328,300</span></p>
                                </div>
                                <div class="shortFallCount">
                                  <p class="">SHORTFALL</p>
                                  <p>$3,163,031</p>
                                </div>
                              </div>
                            </div>
                            <!--  -->
                            <div
                              class="cumulativeValuesProgrees progBarSecEachDiv4 cumulativeProgCommon4 bigBarsAreaJsCls4">
                              <div class="cumulativeprogreeDivcommon cumulativeProgAnnuity bigBarHeightJs4">
                                <div class="bottomComulativeIncome BottomcumulativeAnnuity">
                                  <p>$<span class="bigBarNumberJsCls4">3,328,300</span></p>
                                </div>
                                <div class="shortFallCount">
                                  <p class="">SHORTFALL</p>
                                  <p>$3,163,031</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="v-pills-comulativeFees1" role="tabpanel"
                  aria-labelledby="v-pills-comulativeFees1-tab">
                  <div class="container-fluid">
                    <div class="d-flex justify-content-between flex-gap-12">
                      <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard1 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Total Value</p>
                              <p>LifePro+</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard5" checked
                                    bigProgBar="5" onchange="bigProgressbar(this,event)" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="mt-2 d-flex">
                            <div class="mt-1 CardProgressBar greenProgress1 boxProgressCommon5">
                              <div class="CardProgress"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <p class="ms-2 CardProgressnym carValue1 position-up2"><span>Total
                                Value</span><br /> $85,044</p>
                          </div>
                          <div class="d-flex justify-content-center addNotesMainDiv">
                            <button type="button" class="AddNoteBtn">Add Note</button>
                            <div class="add-note-input-div d-none">
                              <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.
                              </p>
                              <div class="add-note-input-inner">
                                <input type="text" class="add-note-input form-control flex-1">
                                <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid"
                                    alt="Check"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard2 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Total Value</p>
                              <p class="blueRadioSwtchpara">Account</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard6" checked
                                    bigProgBar="6" onchange="bigProgressbar(this,event)" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a class="ms-2 deleteButtonAncor deleteBtnBlue" data-bs-target="#deleteAccountModal"
                                data-bs-toggle="modal">
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
                          <div class="mt-2 d-flex">
                            <div class="mt-1 CardProgressBar blueProgress1 boxProgressCommon6">
                              <div class="CardProgress blueProgress2"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <p class="ms-2 CardProgressnym blueRadioSwtchpara position-up2">
                              <span>Total Value</span><br />
                              $85,044
                            </p>
                            <!-- <p class="ms-3 CardProgressnym commonRedRadioSwtchpara position-up2">
                              <span>Shortfall</span><br />
                              $85,044
                          </p> -->
                          </div>
                          <div class="d-flex justify-content-center addNotesMainDiv">
                            <button type="button" class="AddNoteBtn">Add Note</button>
                            <div class="add-note-input-div d-none">
                              <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.
                              </p>
                              <div class="add-note-input-inner">
                                <input type="text" class="add-note-input form-control flex-1">
                                <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid"
                                    alt="Check"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard3 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Total Value</p>
                              <p class="voiletRadioSwtchpara">401K / IRA</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard7" checked
                                    bigProgBar="7" onchange="bigProgressbar(this,event)" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a class="ms-2 deleteButtonAncor deleteBtnVoilet" data-bs-target="#deleteAccountModal"
                                data-bs-toggle="modal">
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
                          <div class="mt-2 d-flex">
                            <div class="mt-1 CardProgressBar voiletProgress1 boxProgressCommon7">
                              <div class="CardProgress voiletProgress2"> </div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <p class="ms-2 CardProgressnym voiletRadioSwtchpara position-up2">
                              <span>Total Value</span><br />
                              $85,044
                            </p>
                            <!--  <p class="ms-3 CardProgressnym commonRedRadioSwtchpara position-up2">
                              <span>Shortfall</span><br />
                              $85,044
                          </p> -->
                          </div>
                          <div class="d-flex justify-content-center addNotesMainDiv">
                            <button type="button" class="AddNoteBtn">Add Note</button>
                            <div class="add-note-input-div d-none">
                              <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.
                              </p>
                              <div class="add-note-input-inner">
                                <input type="text" class="add-note-input form-control flex-1">
                                <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid"
                                    alt="Check"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard4 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Total Value</p>
                              <p class="redRadioSwtchpara">Annuity</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard8" checked
                                    bigProgBar="8" onchange="bigProgressbar(this,event)" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal"
                                data-bs-toggle="modal">
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
                          <div class="mt-2 d-flex">
                            <div class="mt-1 CardProgressBar redProgress1 boxProgressCommon8">
                              <div class="CardProgress redProgress2"> </div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <p class="ms-2 CardProgressnym redRadioSwtchpara position-up2">
                              <span>Total Value</span><br />
                              $85,044
                            </p>
                            <!-- <p class="ms-3 CardProgressnym commonRedRadioSwtchpara position-up2">
                              <span>Shortfall</span><br />
                              $$3,576,828
                          </p> -->
                          </div>
                          <div class="d-flex justify-content-center addNotesMainDiv">
                            <button type="button" class="AddNoteBtn">Add Note</button>
                            <div class="add-note-input-div d-none">
                              <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.
                              </p>
                              <div class="add-note-input-inner">
                                <input type="text" class="add-note-input form-control flex-1">
                                <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid"
                                    alt="Check"></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container-fluid">
                    <div class="CompMainProgrssBarDiv">
                      <div class="w-100">
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                        <div class="d-flex comulativeProgBrdrDivs m-0 p-0">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                      </div>
                      <div class="CompProgressAbsltCls">
                        <div class="progressAllBarsDivMain">
                          <div class="d-flex justify-content-between w-100">
                            <div class=" cumulativeValuesProgrees progBarSecEachDiv5 bigBarsAreaJsCls5">
                              <div class="cumulativeprogreeDivcommon cumulativeProgLifePro bigBarHeightJs5">
                                <div class="bottomComulativeIncome BottomcumulativeLifePro">
                                  <p>$<span class="bigBarNumberJsCls5">2,172,830</span></p>
                                </div>
                                <div class="shortFallCount">
                                  <p class="">SHORTFALL</p>
                                  <p>$3,163,031</p>
                                </div>
                              </div>
                            </div>
                            <div
                              class="cumulativeValuesProgrees progBarSecEachDiv6 cumulativeProgCommon6 bigBarsAreaJsCls6">
                              <div class="cumulativeprogreeDivcommon cumulativeProgAccount bigBarHeightJs6">
                                <div class="bottomComulativeIncome BottomcumulativeAccount">
                                  <p>$<span class="bigBarNumberJsCls6">3,172,830</span></p>
                                </div>
                                <div class="shortFallCount">
                                  <p class="">SHORTFALL</p>
                                  <p>$3,163,031</p>
                                </div>
                              </div>
                            </div>
                            <div
                              class="cumulativeValuesProgrees progBarSecEachDiv7 cumulativeProgCommon7 bigBarsAreaJsCls7">
                              <div class="cumulativeprogreeDivcommon cumulativeProgIra bigBarHeightJs7">
                                <div class="bottomComulativeIncome BottomcumulativeIra">
                                  <p>$<span class="bigBarNumberJsCls7">2,328,300</span></p>
                                </div>
                                <div class="shortFallCount">
                                  <p class="">SHORTFALL</p>
                                  <p>$3,163,031</p>
                                </div>
                              </div>
                            </div>
                            <div
                              class="cumulativeValuesProgrees progBarSecEachDiv8 cumulativeProgCommon8 bigBarsAreaJsCls8">
                              <div class="cumulativeprogreeDivcommon cumulativeProgAnnuity bigBarHeightJs8">
                                <div class="bottomComulativeIncome BottomcumulativeAnnuity">
                                  <p>$<span class="bigBarNumberJsCls8">3,328,300</span></p>
                                </div>
                                <div class="shortFallCount">
                                  <p class="">SHORTFALL</p>
                                  <p>$3,163,031</p>
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

            <div class="bottom-disclosure px-3" id="disclosure4" data-dc="4">
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
                          <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D">
                          </path>
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
  export default {
    props: ["keyId"],
    data() {
      return {
        activeTabs: this.$store.state.data.reportTabs.active,
      };
    },
  };
</script>
<style lang="">
</style>