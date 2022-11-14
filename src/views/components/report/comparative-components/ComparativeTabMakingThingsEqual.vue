<template lang="">
  <div class="empty" data-class="empty-wrapper" data-empty="2">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="3">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`"
        id="makingThingsEqualTabView">
        <div :class="`ComparativeTableMainDiv rightDivTop3 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox3" type="checkbox" class="checkbox2 rightCheckBox3" rightCheckAttr="3"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" :checked="activeTabs[keyId]" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox3" class="rghtTopHeadcommon">Making Things Equal<span
                  class="ms-3 equalThingTabTxt">The distribution amounts required to match the
                  LIRP.</span></label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv3" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
              <div class="d-flex justify-content-center">
                <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist" aria-orientation="vertical">
                  <div class="active" id="v-pills-distributions-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-distributions" type="button" role="tab"
                    aria-controls="v-pills-distributions" aria-selected="true">
                    Distribution
                  </div>
                  <div id="v-pills-rateOfReturn-tab" data-bs-toggle="pill" data-bs-target="#v-pills-rateOfReturn"
                    type="button" role="tab" aria-controls="v-pills-rateOfReturn" aria-selected="false">Rate of Return
                  </div>
                </div>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-distributions" role="tabpanel"
                  aria-labelledby="v-pills-distributions-tab">
                  <div class="container-fluid">
                    <div class="d-flex flex-gap justify-content-between">
                      <div class=" mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard1 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Distributions</p>
                              <p>LifePro+</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard1" checked
                                    groupProgBar="1" onchange="groupProgressbar(this,event)" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="mt-2 d-flex ">
                            <div class="CardProgressBar greenProgress1 groupBoxProgressCommon1">
                              <div class="CardProgress"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <p class="mt-1 ms-2 CardProgressnym carValue1">$71,256</p>
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
                      <div class=" mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard2 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Distributions</p>
                              <p class="blueRadioSwtchpara">Account</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard2" checked
                                    groupProgBar="2" onchange="groupProgressbar(this,event)" />
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
                          <div class="mt-2 d-flex ">
                            <div class="CardProgressBar blueProgress1 groupBoxProgressCommon2">
                              <div class="CardProgress blueProgress2"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Longevity</p>
                              <p class="ms-2 CardProgressnym blueRadioSwtchpara">$64,000 </p>
                            </div>
                            <div class="position-up">
                              <p class="ms-3 cardProjectTag">Ending Value</p>
                              <p class="ms-3 CardProgressnym blueRadioSwtchpara">$60,000</p>
                            </div>
                            <div class="position-up">
                              <p class="ms-3 cardProjectTag">Death Benefit</p>
                              <p class="ms-3 CardProgressnym blueRadioSwtchpara">$56,500</p>
                            </div>
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
                      <div class=" mt-3 flex-1">
                        <div class="distributionCard1 equalDistCard3 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Distributions</p>
                              <p class="voiletRadioSwtchpara">401K / IRA</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard3" checked
                                    groupProgBar="3" onchange="groupProgressbar(this,event)" />
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
                          <div class="mt-2 d-flex ">
                            <div class="CardProgressBar voiletProgress1 groupBoxProgressCommon3">
                              <div class="CardProgress voiletProgress2"> </div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Longevity</p>
                              <p class="ms-2 CardProgressnym voiletRadioSwtchpara">$64,000 </p>
                            </div>
                            <div class="position-up">
                              <p class="ms-3 cardProjectTag">Ending Value</p>
                              <p class="ms-3 CardProgressnym voiletRadioSwtchpara">$60,000</p>
                            </div>
                            <div class="position-up">
                              <p class="ms-3 cardProjectTag">Death Benefit</p>
                              <p class="ms-3 CardProgressnym voiletRadioSwtchpara">$56,500</p>
                            </div>
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
                              <p>Distributions</p>
                              <p class="redRadioSwtchpara">Annuity</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard4" checked
                                    groupProgBar="4" onchange="groupProgressbar(this,event)" />
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
                          <div class="mt-2 d-flex ">
                            <div class="CardProgressBar redProgress1 groupBoxProgressCommon4">
                              <div class="CardProgress redProgress2"> </div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Longevity</p>
                              <p class="ms-2 CardProgressnym redRadioSwtchpara">$64,000 </p>
                            </div>
                            <div class="position-up">
                              <p class="ms-3 cardProjectTag">Ending Value</p>
                              <p class="ms-3 CardProgressnym redRadioSwtchpara">$60,000</p>
                            </div>
                            <div class="position-up">
                              <p class="ms-3 cardProjectTag">Death Benefit</p>
                              <p class="ms-3 CardProgressnym redRadioSwtchpara">$56,500</p>
                            </div>
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
                  <div class="container-fluid ">
                    <div class="mainProgrssBarDiv">
                      <div>
                        <div class="d-flex mainProgBrdrDivs">
                          <p class="mainProgBrdr"></p>
                        </div>
                        <div class="d-flex mainProgBrdrDivs">
                          <p class="mainProgBrdr"></p>
                        </div>
                        <div class="d-flex mainProgBrdrDivs">
                          <p class="mainProgBrdr"></p>
                        </div>
                        <div class="d-flex mainProgBrdrDivs">
                          <p class="mainProgBrdr"></p>
                        </div>
                        <div class="d-flex mainProgBrdrDivs">
                          <p class="mainProgBrdr"></p>
                        </div>
                        <div class="d-flex mainProgBrdrDivs m-0 p-0">
                          <p class="mainProgBrdr"></p>
                        </div>
                      </div>
                      <div class="progressAbsltCls makeThinkEqualDiv">
                        <div class="progressAllBarsDivMain">
                          <div class="progressBarEachDivMain">
                            <div class="d-flex groupedFourBars1">
                              <div class="progressBarEachDiv progressBarEachHeight1 groupedBarsSigleClr1 ">
                                <div class="CardProgressBig CardProgressBig1 thingEqualPercent1">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt1">
                                  $<span class="thingEqualProg1">56,700</span> </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight2 groupedBarsSigleClr2">
                                <div class="CardProgressBig CardProgressBig2 thingEqualPercent2">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt2">
                                  $<span class="thingEqualProg2">65,044</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight3 groupedBarsSigleClr3">
                                <div class="CardProgressBig CardProgressBig3 thingEqualPercent3">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt3">
                                  $<span class="thingEqualProg3">305,044</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight4 groupedBarsSigleClr4">
                                <div class="CardProgressBig CardProgressBig4 thingEqualPercent4">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt4">
                                  $<span class="thingEqualProg4">265,044</span>
                                </div>
                              </div>
                            </div>
                            <div class="progressBarEachBtm">
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="progressBarBtnDiv">
                                  <p>MATCH</p>
                                  <p>Longevity</p>
                                </div>
                                <div class="d-flex">
                                  <div class="button-cover2">
                                    <div class="radioBtnDiv r2 " id="button-2">
                                      <input type="checkbox" class="checkbox2 longevityMatchJSCls1 commonRadioBtn1"
                                        checked longevityMatchAttr="1" onchange="longevityMatch(this, event)" />
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
                          <div class="progressBarEachDivMain">
                            <div class="d-flex groupedFourBars2">
                              <div class="progressBarEachDiv  progressBarEachHeight5 groupedSecBarsSigleClr1">
                                <div class="CardProgressBig CardProgressBig1 thingEqualPercent5">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt1">
                                  $<span class="thingEqualProg5">65,044</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv  progressBarEachHeight6 groupedSecBarsSigleClr2">
                                <div class="CardProgressBig CardProgressBig2 thingEqualPercent6">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt2">
                                  $<span class="thingEqualProg6">65,044</span>
                                </div>
                                <div class="d-none">
                                  <p class="progressPercentDynamic6">0</p>%
                                </div>
                              </div>
                              <div class="progressBarEachDiv  progressBarEachHeight7 groupedSecBarsSigleClr3">
                                <div class="CardProgressBig CardProgressBig3 thingEqualPercent7">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt3">
                                  $<span class="thingEqualProg7">75,844</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv  progressBarEachHeight8 groupedSecBarsSigleClr4">
                                <div class="CardProgressBig CardProgressBig4 thingEqualPercent8">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt4">
                                  $<span class="thingEqualProg8">15,044</span>
                                </div>
                                <div class="d-none">
                                  <p class="progressPercentDynamic8">0</p>%
                                </div>
                              </div>
                            </div>
                            <div class="progressBarEachBtm">
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="progressBarBtnDiv">
                                  <p>MATCH</p>
                                  <p>Ending Value</p>
                                </div>
                                <div class="d-flex">
                                  <div class="button-cover2">
                                    <div class="radioBtnDiv r2" id="button-2">
                                      <input type="checkbox" class="checkbox2 commonRadioBtn1 longevityMatchJSCls2"
                                        checked longevityMatchAttr="2" onchange="longevityMatch(this, event)" />
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
                          <div class="progressBarEachDivMain">
                            <div class="d-flex groupedFourBars3">
                              <div class="progressBarEachDiv  progressBarEachHeight9 groupedThirdBarsSigleClr1">
                                <div class="CardProgressBig CardProgressBig1 thingEqualPercent9">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt1">
                                  $<span class="thingEqualProg9">65,044</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight10 groupedThirdBarsSigleClr2">
                                <div class="CardProgressBig CardProgressBig2 thingEqualPercent10">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt2">
                                  $<span class="thingEqualProg10">65,044</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight11 groupedThirdBarsSigleClr3">
                                <div class="CardProgressBig CardProgressBig3 thingEqualPercent11">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt3">
                                  $<span class="thingEqualProg11">65,044</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight12 groupedThirdBarsSigleClr4">
                                <div class="CardProgressBig CardProgressBig4 thingEqualPercent12">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt4">
                                  $<span class="thingEqualProg12">65,044</span>
                                </div>
                              </div>
                            </div>
                            <div class="progressBarEachBtm">
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="progressBarBtnDiv">
                                  <p>MATCH</p>
                                  <p>Death Benefit</p>
                                </div>
                                <div class="d-flex">
                                  <div class="button-cover2">
                                    <div class="radioBtnDiv r2" id="button-2">
                                      <input type="checkbox" class="checkbox2 commonRadioBtn1 longevityMatchJSCls3"
                                        checked longevityMatchAttr="3" onchange="longevityMatch(this, event)" />
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
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade show" id="v-pills-rateOfReturn" role="tabpanel"
                  aria-labelledby="v-pills-rateOfReturn-tab">
                  <div class="container-fluid">
                    <div class="d-flex justify-content-between">
                      <div class=" mt-3 w-100">
                        <div class="distributionCard1 equalDistCard1 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Distributions</p>
                              <p>LifePro+</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 commonRadioBtn1 groupBaCard5"
                                    checked groupProgBar="5" onchange="groupProgressbar(this,event)" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="mt-2 d-flex ">
                            <div class="CardProgressBar greenProgress1 groupBoxProgressCommon5">
                              <div class="CardProgress"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <p class="mt-2 ms-2 CardProgressnym carValue1 position-up">50%</p>
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
                      <div class="mt-3 px-2 w-100">
                        <div class="distributionCard1 equalDistCard2 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Distributions</p>
                              <p class="blueRadioSwtchpara">Account</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard6" checked
                                    groupProgBar="6" onchange="groupProgressbar(this,event)" />
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
                          <div class="mt-2 d-flex ">
                            <div class="CardProgressBar blueProgress1 groupBoxProgressCommon6">
                              <div class="CardProgress blueProgress2"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Longevity</p>
                              <p class="ms-2 CardProgressnym blueRadioSwtchpara">50% </p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Ending Value</p>
                              <p class="ms-2 CardProgressnym blueRadioSwtchpara">65%</p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Death Benefit</p>
                              <p class="ms-2 CardProgressnym blueRadioSwtchpara">5%</p>
                            </div>
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
                      <div class="mt-3 w-100">
                        <div class="distributionCard1 equalDistCard3 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Distributions</p>
                              <p class="voiletRadioSwtchpara">401K / IRA</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard7" checked
                                    groupProgBar="7" onchange="groupProgressbar(this,event)" />
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
                          <div class="mt-2 d-flex ">
                            <div class="CardProgressBar voiletProgress1 groupBoxProgressCommon7">
                              <div class="CardProgress voiletProgress2"> </div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Longevity</p>
                              <p class="ms-2 CardProgressnym voiletRadioSwtchpara">50% </p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Ending Value</p>
                              <p class="ms-2 CardProgressnym voiletRadioSwtchpara">55%</p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Death Benefit</p>
                              <p class="ms-2 CardProgressnym voiletRadioSwtchpara">$10%</p>
                            </div>
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
                      <!--  -->
                      <div class="mt-3 w-100 ps-2">
                        <div class="distributionCard1 equalDistCard4 position-relative w-100">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Distributions</p>
                              <p class="redRadioSwtchpara">Annuity</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard8" checked
                                    groupProgBar="8" onchange="groupProgressbar(this,event)" />
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
                          <div class="mt-2 d-flex ">
                            <div class="CardProgressBar redProgress1 groupBoxProgressCommon8">
                              <div class="CardProgress redProgress2"> </div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Longevity</p>
                              <p class="ms-2 CardProgressnym redRadioSwtchpara">55% </p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Ending Value</p>
                              <p class="ms-2 CardProgressnym redRadioSwtchpara">60%</p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 cardProjectTag">Death Benefit</p>
                              <p class="ms-2 CardProgressnym redRadioSwtchpara">9%</p>
                            </div>
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
                  <div class="container-fluid ">
                    <div class="mainProgrssBarDiv">
                      <div>
                        <div class="d-flex mainProgBrdrDivs">
                          <p class="mainProgBrdr"></p>
                        </div>
                        <div class="d-flex mainProgBrdrDivs">
                          <p class="mainProgBrdr"></p>
                        </div>
                        <div class="d-flex mainProgBrdrDivs">
                          <p class="mainProgBrdr"></p>
                        </div>
                        <div class="d-flex mainProgBrdrDivs">
                          <p class="mainProgBrdr"></p>
                        </div>
                        <div class="d-flex mainProgBrdrDivs">
                          <p class="mainProgBrdr"></p>
                        </div>
                        <div class="d-flex mainProgBrdrDivs">
                          <p class="mainProgBrdr"></p>
                        </div>
                        <div class="d-flex mainProgBrdrDivs m-0 p-0">
                          <p class="mainProgBrdr"></p>
                        </div>
                      </div>
                      <div class="progressAbsltCls makeThinkEqualDiv2">
                        <div class="progressAllBarsDivMain">
                          <div class="progressBarEachDivMain">
                            <div class="d-flex groupedFourBars1">
                              <div class="progressBarEachDiv progressBarEachHeight21 groupedBarsSigleClr5 ">
                                <div class="CardProgressBig CardProgressBig1 thingEqualPercent21">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt1">
                                  <span class="thingEqualProg21">55%</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight22 groupedBarsSigleClr6">
                                <div class="CardProgressBig CardProgressBig2 thingEqualPercent22">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt2">
                                  <span class="thingEqualProg22">60%</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight23 groupedBarsSigleClr7">
                                <div class="CardProgressBig CardProgressBig3 thingEqualPercent23">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt3">
                                  <span class="thingEqualProg23">6%</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight24 groupedBarsSigleClr8">
                                <div class="CardProgressBig CardProgressBig4 thingEqualPercent24">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt4">
                                  <span class="thingEqualProg24">9%</span>
                                </div>
                              </div>
                            </div>
                            <div class="progressBarEachBtm">
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="progressBarBtnDiv">
                                  <p>MATCH</p>
                                  <p>Longevity</p>
                                </div>
                                <div class="d-flex">
                                  <div class="button-cover2">
                                    <div class="radioBtnDiv r2 " id="button-2">
                                      <input type="checkbox" class="checkbox2 longevityMatchJSCls4 commonRadioBtn1"
                                        checked longevityMatchAttr="4" onchange="longevityMatch(this, event)" />
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
                          <div class="progressBarEachDivMain">
                            <div class="d-flex groupedFourBars2">
                              <div class="progressBarEachDiv  progressBarEachHeight25 groupedSecBarsSigleClr5">
                                <div class="CardProgressBig CardProgressBig1 thingEqualPercent25">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt1">
                                  <span class="thingEqualProg25">45%</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv  progressBarEachHeight26 groupedSecBarsSigleClr6">
                                <div class="CardProgressBig CardProgressBig2 thingEqualPercent26">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt2">
                                  <span class="thingEqualProg26">55%</span>
                                </div>
                                <div class="d-none">
                                  <p class="progressPercentDynamic6">0</p>%
                                </div>
                              </div>
                              <div class="progressBarEachDiv  progressBarEachHeight27 groupedSecBarsSigleClr7">
                                <div class="CardProgressBig CardProgressBig3 thingEqualPercent27">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt3">
                                  <span class="thingEqualProg27">10%</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv  progressBarEachHeight28 groupedSecBarsSigleClr8">
                                <div class="CardProgressBig CardProgressBig4 thingEqualPercent28">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt4">
                                  <span class="thingEqualProg28">8%</span>
                                </div>
                                <div class="d-none">
                                  <p class="progressPercentDynamic8">0</p>%
                                </div>
                              </div>
                            </div>
                            <div class="progressBarEachBtm">
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="progressBarBtnDiv">
                                  <p>MATCH</p>
                                  <p>Ending Value</p>
                                </div>
                                <div class="d-flex">
                                  <div class="button-cover2">
                                    <div class="radioBtnDiv r2" id="button-2">
                                      <input type="checkbox" class="checkbox2 longevityMatchJSCls5 commonRadioBtn1"
                                        checked longevityMatchAttr="5" onchange="longevityMatch(this, event)" />
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
                          <div class="progressBarEachDivMain">
                            <div class="d-flex groupedFourBars3">
                              <div class="progressBarEachDiv  progressBarEachHeight29 groupedThirdBarsSigleClr5">
                                <div class="CardProgressBig CardProgressBig1 thingEqualPercent29">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt1">
                                  <span class="thingEqualProg29">52%</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight210 groupedThirdBarsSigleClr6">
                                <div class="CardProgressBig CardProgressBig2 thingEqualPercent210">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt2">
                                  <span class="thingEqualProg210">60%</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight211 groupedThirdBarsSigleClr7">
                                <div class="CardProgressBig CardProgressBig3 thingEqualPercent211">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt3">
                                  <span class="thingEqualProg211">9%</span>
                                </div>
                              </div>
                              <div class="progressBarEachDiv progressBarEachHeight212 groupedThirdBarsSigleClr8">
                                <div class="CardProgressBig CardProgressBig4 thingEqualPercent212">
                                </div>
                                <div class="position-absolute progressBarbtmNum progressBarOvrwrt4">
                                  <span class="thingEqualProg212">10%</span>
                                </div>
                              </div>
                            </div>
                            <div class="progressBarEachBtm">
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="progressBarBtnDiv">
                                  <p>MATCH</p>
                                  <p>Death Benefit</p>
                                </div>
                                <div class="d-flex">
                                  <div class="button-cover2">
                                    <div class="radioBtnDiv r2" id="button-2">
                                      <input type="checkbox" class="checkbox2 longevityMatchJSCls6 commonRadioBtn1"
                                        checked longevityMatchAttr="6" onchange="longevityMatch(this, event)" />
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bottom-disclosure px-3" id="disclosure3" data-dc="3">
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