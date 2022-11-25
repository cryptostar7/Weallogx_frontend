<template lang="">
  <div  :class="`empty ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="2">
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
                      <div class="mt-3 flex-1" v-for="(item, index) in data.distribution" :key="index">
                        <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100 ${cards.distributions[index].active ? '':'inactive'}`">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Distributions</p>
                              <p :class="`cardRadioSwtchpara${1+index}`">{{item.type}}</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div :class="`radioBtnDiv r2 switch${index}`" id="button-2">
                                  <input type="checkbox" :class="`checkbox2 commonRadioBtn1 groupBaCard${1+index}`" :checked="cards.distributions[index].active" @change="() => cards.distributions[index].active = !cards.distributions[index].active" />
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
                            <div :class="`CardProgressBar lightProgress${1+index} groupBoxProgressCommon${1+index}  ${cards.distributions[index].active ? '':'boxProgress'}`">
                              <div :class="`CardProgress darkProgress${1+index}`"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                             <p class="mt-1 ms-2 CardProgressnym carValue1" v-if="!index">{{$numFormatWithDollar(item.longevity)}}</p>
                            <div class="position-up" v-if="index">
                              <p class="ms-2 cardProjectTag">Longevity</p>
                              <p class="ms-2 CardProgressnym cardRadioSwtchpara">{{$numFormatWithDollar(item.longevity)}}</p>
                            </div>
                            <div class="position-up" v-if="index">
                              <p class="ms-3 cardProjectTag">Ending Value</p>
                              <p class="ms-3 CardProgressnym cardRadioSwtchpara">{{$numFormatWithDollar(item.ending_value)}}</p>
                            </div>
                            <div class="position-up" v-if="index">
                              <p class="ms-3 cardProjectTag">Death Benefit</p>
                              <p class="ms-3 CardProgressnym cardRadioSwtchpara">{{$numFormatWithDollar(item.death_benifit)}}</p>
                            </div>
                          </div>
                          <add-note-input-component />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="container-fluid ">
                    <div class="mainProgrssBarDiv">
                      <div>
                        <div v-for="(item, index) in 6" :key="index" :class="`d-flex mainProgBrdrDivs ${item > 5 ? 'm-0 p-0':''}`">
                          <p class="mainProgBrdr"></p>
                        </div>
                      </div>
                      <div class="progressAbsltCls makeThinkEqualDiv">
                        <div class="progressAllBarsDivMain">
                          <div class="progressBarEachDivMain">
                            <div :class="`d-flex groupedFourBars1 ${graphs.distributions.longevity ? '': 'disableGroupedBar'}`">
                              <div v-for="(item, index) in data.distribution.length" :key="index" :class="`progressBarEachDiv progressBarEachHeight${1+index} groupedBarsSigleClr${1+index} ${cards.distributions[index].active ? '':'disableGroupedBar'}`">
                                <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${1+index}`" :style="{height:data.distribution[index].longevity_in_percent}">
                                </div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                  $<span :class="`thingEqualProg${1+index}`">{{ $numFormat(data.distribution[index].longevity)}}</span> </div>
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
                                        checked v-model="graphs.distributions.longevity" />
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
                            <div :class="`d-flex groupedFourBars2 ${graphs.distributions.ending_value ? '': 'disableGroupedBar'}`">
                              <div  v-for="(item, index) in data.distribution.length" :key="index" :class="`progressBarEachDiv  progressBarEachHeight${5+index} groupedSecBarsSigleClr${1+index} ${cards.distributions[index].active ? '':'disableGroupedBar'}`">
                                <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${5+index}`" :style="{height:data.distribution[index].ending_value_in_percent}">
                                </div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                  $<span :class="`thingEqualProg${5+index}`">{{$numFormat(data.distribution[index].ending_value)}}</span>
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
                                        checked v-model="graphs.distributions.ending_value"/>
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
                            <div :class="`d-flex groupedFourBars3 ${graphs.distributions.death_benifit ? '': 'disableGroupedBar'}`">
                              <div  v-for="(item, index) in data.distribution.length" :key="index" :class="`progressBarEachDiv  progressBarEachHeight${9+index} groupedThirdBarsSigleClr${1+index} ${cards.distributions[index].active ? '':'disableGroupedBar'}`">
                                <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${9+index}`" :style="{height:data.distribution[index].death_benifit_in_percent}">
                                </div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                  $<span :class="`thingEqualProg${9+index}`">{{$numFormat(data.distribution[index].death_benifit)}}</span>
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
                                      <input type="checkbox" class="checkbox2 commonRadioBtn1 longevityMatchJSCls3" checked v-model="graphs.distributions.death_benifit" />
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
                <!-- Rate of return tab start -->
                <div class="tab-pane fade show" id="v-pills-rateOfReturn" role="tabpanel"
                  aria-labelledby="v-pills-rateOfReturn-tab">
                  <div class="container-fluid">
                    <div class="d-flex flex-gap justify-content-between">
                      <div class="mt-3 flex-1" v-for="(item, index) in data.distribution" :key="index">
                        <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100 ${cards.rate_of_returns[index].active ? '':'inactive'}`">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Distributions</p>
                              <p :class="`cardRadioSwtchpara${1+index}`">{{item.type}}</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div :class="`radioBtnDiv r2 switch${index}`" id="button-2">
                                  <input type="checkbox" :class="`checkbox2 commonRadioBtn1 groupBaCard${1+index}`" :checked="cards.rate_of_returns[index].active" @change="() => cards.rate_of_returns[index].active = !cards.rate_of_returns[index].active" />
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
                            <div :class="`CardProgressBar lightProgress${1+index} groupBoxProgressCommon${1+index}  ${cards.rate_of_returns[index].active ? '':'boxProgress'}`">
                              <div :class="`CardProgress darkProgress${1+index}`"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                             <p class="mt-1 ms-2 CardProgressnym carValue1" v-if="!index">{{item.longevity_in_percent}}</p>
                            <div class="position-up" v-if="index">
                              <p class="ms-2 cardProjectTag">Longevity</p>
                              <p class="ms-2 CardProgressnym cardRadioSwtchpara">{{item.longevity_in_percent}}</p>
                            </div>
                            <div class="position-up" v-if="index">
                              <p class="ms-3 cardProjectTag">Ending Value</p>
                              <p class="ms-3 CardProgressnym cardRadioSwtchpara">{{item.ending_value_in_percent}}</p>
                            </div>
                            <div class="position-up" v-if="index">
                              <p class="ms-3 cardProjectTag">Death Benefit</p>
                              <p class="ms-3 CardProgressnym cardRadioSwtchpara">{{item.death_benifit_in_percent}}</p>
                            </div>
                          </div>
                          <add-note-input-component />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="container-fluid ">
                    <div class="mainProgrssBarDiv">
                      <div>
                        <div v-for="(item, index) in 6" :key="index" :class="`d-flex mainProgBrdrDivs ${item > 5 ? 'm-0 p-0':''}`">
                          <p class="mainProgBrdr"></p>
                        </div>
                      </div>
                      <div class="progressAbsltCls makeThinkEqualDiv">
                        <div class="progressAllBarsDivMain">
                          <div class="progressBarEachDivMain">
                            <div :class="`d-flex groupedFourBars1 ${graphs.rate_of_returns.longevity ? '': 'disableGroupedBar'}`">
                              <div v-for="(item, index) in data.rate_of_returns.length" :key="index" :class="`progressBarEachDiv progressBarEachHeight${1+index} groupedBarsSigleClr${1+index} ${cards.rate_of_returns[index].active ? '':'disableGroupedBar'}`">
                                <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${1+index}`" :style="{height:data.rate_of_returns[index].longevity_in_percent}">
                                </div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                <span :class="`thingEqualProg${1+index}`">{{data.rate_of_returns[index].longevity_in_percent}}</span> </div>
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
                                        checked v-model="graphs.rate_of_returns.longevity" />
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
                            <div :class="`d-flex groupedFourBars2 ${graphs.rate_of_returns.ending_value ? '': 'disableGroupedBar'}`">
                              <div  v-for="(item, index) in data.rate_of_returns.length" :key="index" :class="`progressBarEachDiv  progressBarEachHeight${5+index} groupedSecBarsSigleClr${1+index} ${cards.rate_of_returns[index].active ? '':'disableGroupedBar'}`">
                                <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${5+index}`" :style="{height:data.rate_of_returns[index].ending_value_in_percent}">
                                </div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                <span :class="`thingEqualProg${5+index}`">{{data.rate_of_returns[index].ending_value_in_percent}}</span>
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
                                        checked v-model="graphs.rate_of_returns.ending_value"/>
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
                            <div :class="`d-flex groupedFourBars3 ${graphs.rate_of_returns.death_benifit ? '': 'disableGroupedBar'}`">
                              <div  v-for="(item, index) in data.rate_of_returns.length" :key="index" :class="`progressBarEachDiv  progressBarEachHeight${9+index} groupedThirdBarsSigleClr${1+index} ${cards.rate_of_returns[index].active ? '':'disableGroupedBar'}`">
                                <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${9+index}`" :style="{height:data.rate_of_returns[index].death_benifit_in_percent}">
                                </div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                <span :class="`thingEqualProg${9+index}`">{{data.rate_of_returns[index].death_benifit_in_percent}}</span>
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
                                      <input type="checkbox" class="checkbox2 commonRadioBtn1 longevityMatchJSCls3" checked v-model="graphs.rate_of_returns.death_benifit" />
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
            <comparative-disclosure-component v-if="activeTabs[keyId]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ComparativeDisclosureComponent from "./ComparativeDisclosureComponent.vue";
import AddNoteInputComponent from "../comman/AddNoteInputComponent.vue";

export default {
  props: ["keyId"],
  components: { ComparativeDisclosureComponent, AddNoteInputComponent },
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      cards: {
        distributions: [
          { id: 1, active: true },
          { id: 2, active: true },
          { id: 3, active: true },
          { id: 4, active: true },
        ],
        rate_of_returns: [
          { id: 1, active: true },
          { id: 2, active: true },
          { id: 3, active: true },
          { id: 4, active: true },
        ],
      },
      graphs: {
        distributions: {
          longevity: true,
          ending_value: true,
          death_benifit: true,
        },
        rate_of_returns: {
          longevity: true,
          ending_value: true,
          death_benifit: true,
        },
      },
      data: {
        distribution: [
          {
            type: "LifePro+",
            longevity: 52700,
            longevity_in_percent: "40%",
            ending_value: 15044,
            ending_value_in_percent: "55%",
            death_benifit_in_percent: "75%",
            death_benifit: 35044,
          },
          {
            type: "Account",
            longevity: 56100,
            longevity_in_percent: "30%",
            ending_value: 75044,
            ending_value_in_percent: "45%",
            death_benifit_in_percent: "65%",
            death_benifit: 45044,
          },
          {
            type: "401/IRA",
            longevity: 46700,
            longevity_in_percent: "80%",
            ending_value: 82330,
            ending_value_in_percent: "55%",
            death_benifit_in_percent: "19%",
            death_benifit: 15044,
          },
          {
            type: "Annuity",
            longevity: 36700,
            longevity_in_percent: "60%",
            ending_value: 65044,
            ending_value_in_percent: "25%",
            death_benifit_in_percent: "95%",
            death_benifit: 61044,
          },
        ],
        rate_of_returns: [
          {
            type: "LifePro+",
            longevity_in_percent: "60%",
            ending_value_in_percent: "30%",
            death_benifit_in_percent: "50%",
          },
          {
            type: "Account",
            longevity_in_percent: "30%",
            ending_value_in_percent: "46%",
            death_benifit_in_percent: "80%",
          },
          {
            type: "401/IRA",
            longevity_in_percent: "45%",
            ending_value_in_percent: "50%",
            death_benifit_in_percent: "65%",
          },
          {
            type: "Annuity",
            longevity_in_percent: "50%",
            ending_value_in_percent: "34%",
            death_benifit_in_percent: "19%",
          },
        ],
      },
    };
  },
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (
        this.$store.state.app.presentation_mode &&
        this.$store.state.app.show_assets1
      ) {
        this.cards.distributions.forEach(element => {
          element.active = false;
        });
        this.cards.rate_of_returns.forEach(element => {
          element.active = false;
        });
      } else {
        this.cards.distributions.forEach(element => {
          element.active = true;
        });
        this.cards.rate_of_returns.forEach(element => {
          element.active = true;
        });
      }
    },
  },
};
</script>
<style lang="">
</style>