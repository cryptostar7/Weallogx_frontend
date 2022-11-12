<template lang="">
  <div class="empty" data-class="empty-wrapper" data-empty="2">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="3">
      <div :class="`report-client-list-div tab-id-9 ${activeTabs[keyId] ? '':'presentdeActive'}`">
        <div :class="`ComparativeTableMainDiv rightDivTop9 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox9" type="checkbox" class="checkbox2 rightCheckBox9" rightCheckAttr="9"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" :checked="activeTabs[keyId]" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox9" class="rghtTopHeadcommon">IRR Analysis<span
                  class="ms-3 equalThingTabTxt">(Graph)</span></label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv9" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
              <div class="container-fluid">
                <div class="d-flex justify-content-between flex-gap-12">
                  <div class="flex-1">
                    <div class="distributionCard1 equalDistCard1 position-relative">
                      <div class="d-flex justify-content-between">
                        <div class="distrbnCard1paras">
                          <p>IRR</p>
                          <p>LIRP</p>
                        </div>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                              <input type="checkbox" class="checkbox2 commonRadioBtn2 commonRadioBtn1 irrBarCard1"
                                checked irrProgBar="1" onchange="irrBigProgressbar(this,event)" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 d-flex ">
                        <div class="CardProgressBar lessWidth switchBg greenProgress1 irrBoxProgressCommon1">
                          <div class="CardProgress" style="height: 50%"></div>
                          <!-- <p class="lineUnderBars"></p> -->
                        </div>
                        <div>
                          <p class="ms-2 irrCardPara1">Internal Rate of Return</p>
                          <p class="ms-2 irrCardParaGreen1">5.47%</p>
                          <p class="ms-2 irrCardPara1">Taxable Equivalent</p>
                          <p class="ms-2 irrCardParaGreen2">7.70%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="distributionCard1 equalDistCard2 position-relative">
                      <div class="d-flex justify-content-between">
                        <div class="distrbnCard1paras">
                          <p>IRR</p>
                          <p class="blueRadioSwtchpara">Most Recent</p>
                        </div>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                              <input type="checkbox" class="checkbox2 commonRadioBtn2 commonRadioBtn1 irrBarCard2"
                                checked irrProgBar="2" onchange="irrBigProgressbar(this,event)" />
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
                        <div class="CardProgressBar lessWidth switchBg blueProgress1 irrBoxProgressCommon2">
                          <div class="CardProgress blueProgress2" style="height: 50%;"></div>
                          <!-- <p class="lineUnderBars"></p> -->
                        </div>
                        <div>
                          <p class="ms-2 irrCardPara1">Internal Rate of Return</p>
                          <p class="ms-2 irrCardParaBlue1">5.47%</p>
                          <p class="ms-2 irrCardPara1">Taxable Equivalent</p>
                          <p class="ms-2 irrCardParaBlue2">7.70%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="distributionCard1 equalDistCard3 position-relative">
                      <div class="d-flex justify-content-between">
                        <div class="distrbnCard1paras">
                          <p>IRR</p>
                          <p class="voiletRadioSwtchpara">Worst</p>
                        </div>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                              <input type="checkbox" class="checkbox2 commonRadioBtn2 commonRadioBtn1 irrBarCard3"
                                checked irrProgBar="3" onchange="irrBigProgressbar(this,event)" />
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
                        <div class="CardProgressBar lessWidth switchBg voiletProgress1 irrBoxProgressCommon3">
                          <div class="CardProgress voiletProgress2" style="height: 50%;"> </div>
                          <!-- <p class="lineUnderBars"></p> -->
                        </div>
                        <div>
                          <p class="ms-2 irrCardPara1">Internal Rate of Return</p>
                          <p class="ms-2 irrCardParaVoilet1">5.47%</p>
                          <p class="ms-2 irrCardPara1">Taxable Equivalent</p>
                          <p class="ms-2 irrCardParaVoilet2">7.70%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="distributionCard1 equalDistCard5 position-relative">
                      <div class="d-flex justify-content-between">
                        <div class="distrbnCard1paras">
                          <p>IRR</p>
                          <p class="orangeRadioSwtchpara">Median</p>
                        </div>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div class="radioBtnDiv r2 orangeRadioSwtch" id="button-2">
                              <input type="checkbox" class="checkbox2 commonRadioBtn2 commonRadioBtn1 irrBarCard4"
                                checked irrProgBar="4" onchange="irrBigProgressbar(this,event)" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <a class="ms-2 deleteButtonAncor" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
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
                        <div class="CardProgressBar lessWidth switchBg orangeProgress1 irrBoxProgressCommon4">
                          <div class="CardProgress orangeProgress2" style="height: 50%;"> </div>
                          <!-- <p class="lineUnderBars"></p> -->
                        </div>
                        <div>
                          <p class="ms-2 irrCardPara1">Internal Rate of Return</p>
                          <p class="ms-2 irrCardParaOrange1">5.47%</p>
                          <p class="ms-2 irrCardPara1">Taxable Equivalent</p>
                          <p class="ms-2 irrCardParaOrange2">7.70%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="distributionCard1 equalDistCard4 position-relative">
                      <div class="d-flex justify-content-between">
                        <div class="distrbnCard1paras">
                          <p>IRR</p>
                          <p class="redRadioSwtchpara">Best</p>
                        </div>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                              <input type="checkbox" class="checkbox2 commonRadioBtn2 commonRadioBtn1 irrBarCard5"
                                checked irrProgBar="5" onchange="irrBigProgressbar(this,event)" />
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
                        <div class="CardProgressBar lessWidth switchBg redProgress1 irrBoxProgressCommon5">
                          <div class="CardProgress redProgress2" style="height: 50%;"> </div>
                          <!-- <p class="lineUnderBars"></p> -->
                        </div>
                        <div>
                          <p class="ms-2 irrCardPara1">Internal Rate of Return</p>
                          <p class="ms-2 irrCardParaRed1">5.47%</p>
                          <p class="ms-2 irrCardPara1">Taxable Equivalent</p>
                          <p class="ms-2 irrCardParaRed2">7.70%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid ">
                <div class="irrMainProgrssBarDiv">
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
                  <div class="irrAbsltCls">
                    <div class="progressAllBarsDivMain">
                      <div class="progressBarEachDivMain">
                        <div class="d-flex irrGroupedBars1">
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig irrBarHeight1">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg1">
                              <span class="irrEachBarValue1">5.47%</span>
                            </div>
                          </div>
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig irrBarHeight2">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg2">
                              <span class="irrEachBarValue2">7.70%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="progressBarEachDivMain">
                        <div class="d-flex irrGroupedBars2">
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig irrBarHeight3">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg3">
                              <span class="irrEachBarValue3">8.09%</span>
                            </div>
                          </div>
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig irrBarHeight4">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg4">
                              <span class="irrEachBarValue4">11.39%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="progressBarEachDivMain">
                        <div class="d-flex irrGroupedBars3">
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig irrBarHeight5">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg5">
                              <span class="irrEachBarValue5">7.22%</span>
                            </div>
                          </div>
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig irrBarHeight6">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg6">
                              <span class="irrEachBarValue6">10.17%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="progressBarEachDivMain">
                        <div class="d-flex irrGroupedBars4">
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig irrBarHeight7">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg7">
                              <span class="irrEachBarValue7">8.15%</span>
                            </div>
                          </div>
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig irrBarHeight8">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg8">
                              <span class="irrEachBarValue8">11.48%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="progressBarEachDivMain">
                        <div class="d-flex irrGroupedBars5">
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig irrBarHeight9">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg9">
                              <span class="irrEachBarValue9">9.43%</span>
                            </div>
                          </div>
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig  irrBarHeight10">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg9">
                              <span class="irrEachBarValue10">13.28%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bottom-disclosure pt-0 px-3" id="disclosure9" data-dc="9">
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
                            transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"></rect>
                          <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101"
                            transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"></rect>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="disclosure-text-wrapper">
                    <div class="disclosure-textarea" contenteditable="true">
                      This chart references data drawn from simulations of a Theoretical Synthetic Asset (TSA) that does
                      not exist and cannot be purchased in the real world. It is not a real world insurance policy. It
                      is not an official illustration. You may not assume the data presented here relating to the TSA
                      infers or expresses any guarantee of how a real world insurance policy would perform. Comparisons
                      made to the official <b>Pacific Life</b> illustration(s), which use hypothetical assumptions that
                      are not guaranteed, are designed to be educational and instructive as to how the insurance
                      policies compared <b>may have</b> performed through different historical periods. The data uses
                      the raw returns of the <b>S&P 500</b>, and simulates the potential returns that the insurance
                      policy <b>may have</b> achieved if the current cap rates, participation rates, floors, fees, and
                      borrowing costs were in place during the historical periods tested. Cap rates, participation
                      rates, and policy fees can and do change. We analyzed <b>546 40</b>-year periods of the index. In
                      the case where a time period portrayed is greater than <b>40</b> years, the data was looped for
                      purposes of the simulation. This simulation of a TSA took the actual current monthly fees of the
                      <b>Pacific Life</b> insurance policy and increased them by 15%. All distributions assume the use
                      of an index/participating loan. We assumed a <b>5.4%</b> borrowing rate in the simulation of the
                      TSA. Presented here are the most recent, worst, median, and best <b>40</b>-year periods with
                      respect to the insurance policy’s intended allocation in the <b>S&P 500</b> index strategy.
                      However, these results are not the results of an actual insurance policy, but those of the TSA,
                      which does not exist in the real world. It is entirely possible that the real world experience of
                      the actual policy could be even worse than the worst <b>40</b>-year period analyzed, just as it is
                      entirely possible that the real world policy could perform better than the best <b>40</b>-year
                      period analyzed.
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
                            <span>LIRP: actual current costs of insurance, as per the carrier illustration</span>
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