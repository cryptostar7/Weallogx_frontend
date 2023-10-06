<template lang="">
  <div  :class="`empty report-card-wrapper ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="2">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="3">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`"
        id="makingThingsEqualTabView">
        <div :class="`ComparativeTableMainDiv rightDivTop3 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey tab-head">
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
                  class="ms-3 equalThingTabTxt">The {{currentTab}} required to match the
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
              <div class="d-flex justify-content-center tab-menu">
                <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist" aria-orientation="vertical">
                  <div class="active" id="v-pills-distributions-tab" @click="() => currentTab='distributions amounts'" data-bs-toggle="pill" data-bs-target="#v-pills-distributions" type="button" role="tab" aria-controls="v-pills-distributions" aria-selected="true">
                    Distribution
                  </div>
                  <div id="v-pills-rateOfReturn-tab" @click="() => currentTab='rate of return'"  data-bs-toggle="pill" data-bs-target="#v-pills-rateOfReturn" type="button" role="tab" aria-controls="v-pills-rateOfReturn" aria-selected="false">
                    Rate of Return
                  </div>
                </div>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-distributions" role="tabpanel" aria-labelledby="v-pills-distributions-tab">
                  <div class="container-fluid cards-area">
                    <div class="d-flex flex-gap-12 justify-content-between">
                      <div v-for="(item, index) in data.distribution" :key="index" :class="`mt-3 flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
                        <div :class="`distributionCard1 making equalDistCard${1+index} position-relative w-100 ${cards.distributions[index].active ? '':'inactive'}`">
                          <div class="d-flex justify-content-between align-items-center">
                            <div>
                              <p class="allCardHeadPara">Distributions</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div :class="`radioBtnDiv r2 switch${index}`" id="button-2">
                                  <input type="checkbox" :class="`checkbox2 commonRadioBtn1 groupBaCard${1+index}`" :checked="cards.distributions[index].active" @change="() => cards.distributions[index].active = !cards.distributions[index].active" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a :class="`ms-2 deleteButtonAncor deleteBtn${1+index} ${index ? '':'d-none'} ${$store.state.app.presentation_mode ? 'pointer-none' : ''}`" @click="setActionId(index)" data-bs-target="#DeleteComparativeCvModal" data-bs-toggle="modal">
                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                  <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                </svg>
                              </a>
                            </div>
                          </div>                          
                          <p :class="`cardRadioSwtchpara${1+index}`">{{cv_name[index]}}</p>
                          <div class="mt-2 d-flex ">
                            <div :class="`CardProgressBar lightProgress${1+index} groupBoxProgressCommon${1+index}  ${cards.distributions[index].active ? '':'boxProgress'}`">
                              <div class="CardProgress"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                             <p :class="`mt-1 ms-2 CardProgressnym carValue1 makeEqualPara${1+index}`" v-if="!index">{{$numFormatWithDollar(item.distributions)}}</p>
                             <div class="d-flex flex-1 w-100 justify-content-between">
                              <div class="position-up" v-if="index">
                                <p class="ms-2 cardProjectTag">Longevity</p>
                                <p :class="`ms-2 CardProgressnym cardRadioSwtchpara makeEqualPara${1+index}`">{{$numFormatWithDollar(item.longevity)}}</p>
                              </div>
                              <div class="position-up" v-if="index">
                                <p class="cardProjectTag textGap">Ending Value</p>
                                <p :class="`CardProgressnym textGap cardRadioSwtchpara makeEqualPara${1+index}`">{{$numFormatWithDollar(item.ending_value)}}</p>
                              </div>
                              <div class="position-up" v-if="index">
                                <p class="cardProjectTag textGap">Death Benefit</p>
                                <p :class="`CardProgressnym textGap cardRadioSwtchpara makeEqualPara${1+index}`">{{$numFormatWithDollar(item.death_benefit)}}</p>
                                </div>
                            </div>
                          </div>
                          <add-note-input-component reportType="comperative" noteType="comperative_distribution" :cvType="1+index" :noteId="notes[index] ?  notes[index].id : null" :noteText="notes[index] ?  notes[index].text : null" />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="container-fluid">
                    <div class="mainProgrssBarDiv graph-area">
                      <div class="progressAbsltCls makeThinkEqualDiv p-relative">
                        <div class="lines-div d-flex flex-column justify-content-between h-100">
                            <div v-for="(item, index) in 6" :key="index" :class="`d-flex mainProgBrdrDivs ${item > 5 ? 'm-0 p-0':''}`">
                              <p class="mainProgBrdr"></p>
                            </div>
                          </div>
                        <div class="progressAllBarsDivMain makeThinkEqualDivInner">
                          <div class="progressBarEachDivMain">
                            <div :class="`d-flex groupedFourBars1 ${graphs.distributions.longevity ? '': 'disableGroupedBar'}`">
                              <div v-for="(item, index) in data.distribution.length" :key="index" :class="`progressBarEachDiv progressBarEachHeight${1+index} groupedBarsSigleClr${1+index} ${cards.distributions[index].active ? '':'disableGroupedBar'} ${deletedItems.includes(index) ? 'd-none':''}`">
                                <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${1+index}`" :style="{height: `${Number(index ? data.distribution[index].longevity : data.distribution[0].distributions)*100/maxDistribution}%` }"></div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                  $<span :class="`thingEqualProg${1+index}`">{{ $numFormat(index ? data.distribution[index].longevity : data.distribution[0].distributions)}}</span> </div>
                              </div>
                            </div>
                            
                          </div>
                          <div class="progressBarEachDivMain">
                            <div :class="`d-flex groupedFourBars2 ${graphs.distributions.ending_value ? '': 'disableGroupedBar'}`">
                              <div  v-for="(item, index) in data.distribution.length" :key="index" :class="`progressBarEachDiv  progressBarEachHeight${5+index} groupedSecBarsSigleClr${1+index} ${cards.distributions[index].active ? '':'disableGroupedBar'} ${deletedItems.includes(index) ? 'd-none':''}`">
                                <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${5+index}`" :style="{height: `${Number(index ? data.distribution[index].ending_value : data.distribution[0].distributions)*100/maxDistribution}%`}">
                                </div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                  $<span :class="`thingEqualProg${5+index}`">{{$numFormat(index ? data.distribution[index].ending_value : data.distribution[0].distributions)}}</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div class="progressBarEachDivMain">
                            <div :class="`d-flex groupedFourBars3 ${graphs.distributions.death_benefit ? '': 'disableGroupedBar'}`">
                              <div  v-for="(item, index) in data.distribution.length" :key="index" :class="`progressBarEachDiv  progressBarEachHeight${9+index} groupedThirdBarsSigleClr${1+index} ${cards.distributions[index].active ? '':'disableGroupedBar'} ${deletedItems.includes(index) ? 'd-none':''}`">
                                <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${9+index}`" :style="{height: `${Number(index ? data.distribution[index].death_benefit : data.distribution[0].distributions)*100/maxDistribution}%`}">
                                </div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                  $<span :class="`thingEqualProg${9+index}`">{{$numFormat(index ? data.distribution[index].death_benefit : data.distribution[0].distributions)}}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                        <div :class="`progressAllBarsDivMain barItems${data.distribution.length - deletedItems.length}`">
                            <div class="progressBarEachBtm">
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="progressBarBtnDiv">
                                  <p>MATCH</p>
                                  <p>Longevity</p>
                                </div>
                                <div class="d-flex">
                                  <div class="button-cover2">
                                    <div class="radioBtnDiv r2 " id="button-2">
                                      <input type="checkbox" class="checkbox2 longevityMatchJSCls1 commonRadioBtn1" :checked="graphs.distributions.longevity" v-model="graphs.distributions.longevity" />
                                      <div class="knobs2"></div>
                                      <div class="layer2"></div>
                                    </div>
                                  </div>
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
                                      <input type="checkbox" class="checkbox2 commonRadioBtn1 longevityMatchJSCls3" checked v-model="graphs.distributions.death_benefit" />
                                      <div class="knobs2"></div>
                                      <div class="layer2"></div>
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
                <div class="tab-pane fade show" id="v-pills-rateOfReturn" role="tabpanel" aria-labelledby="v-pills-rateOfReturn-tab">
                  <div class="container-fluid cards-area">
                    <div class="d-flex flex-gap-12 justify-content-between">
                      <div v-for="(item, index) in data.rate_of_returns" :key="index" :class="`mt-3 flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
                        <div :class="`distributionCard1 making equalDistCard${1+index} position-relative w-100 ${cards.rate_of_returns[index].active ? '':'inactive'}`">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Rate of Return</p>
                              <p :class="`cardRadioSwtchpara${1+index}`">{{cv_name[index]}}</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div :class="`radioBtnDiv r2 switch${index}`" id="button-2">
                                  <input type="checkbox" :class="`checkbox2 commonRadioBtn1 groupBaCard${1+index}`" :checked="cards.rate_of_returns[index].active" @change="() => cards.rate_of_returns[index].active = !cards.rate_of_returns[index].active" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a :class="`ms-2 deleteButtonAncor deleteBtn${1+index} ${index ? '':'d-none'} ${$store.state.app.presentation_mode ? 'pointer-none' : ''}`" @click="setActionId(index)" data-bs-target="#DeleteComparativeCvModal"  data-bs-toggle="modal">
                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path  d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                  <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div class="mt-2 d-flex ">
                            <div :class="`CardProgressBar lightProgress${1+index} groupBoxProgressCommon${1+index}  ${cards.rate_of_returns[index].active ? '':'boxProgress'}`">
                              <div :class="`CardProgress darkProgress${1+index}`"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                             <p :class="`mt-1 ms-2 CardProgressnym carValue1 makeEqualPara${1+index}`" v-if="!index">{{Number(item.ror).toFixed(2)}}%</p>
                             <div class="d-flex flex-1 w-100 justify-content-between">
                              <div class="position-up" v-if="index">
                                <p class="ms-2 cardProjectTag">Longevity</p>
                                <p :class="`ms-2 CardProgressnym cardRadioSwtchpara makeEqualPara${1+index}`">{{Number(item.longevity).toFixed(2)}}%</p>
                              </div>
                              <div class="position-up" v-if="index">
                                <p class="cardProjectTag textGap">Ending Value</p>
                                <p :class="`CardProgressnym textGap cardRadioSwtchpara makeEqualPara${1+index}`">{{Number(item.ending_value).toFixed(2)}}%</p>
                              </div>
                              <div class="position-up" v-if="index">
                                <p class="cardProjectTag textGap">Death Benefit</p>
                                <p :class="`CardProgressnym textGap cardRadioSwtchpara makeEqualPara${1+index}`">{{Number(item.death_benefit).toFixed(2)}}%</p>
                              </div>
                            </div>
                          </div>
                          <add-note-input-component reportType="comperative" noteType="comperative_rate_of_return" :cvType="1+index" :noteId="ror_notes[index] ?  ror_notes[index].id : null" :noteText="ror_notes[index] ?  ror_notes[index].text : null" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container-fluid">
                    <div class="mainProgrssBarDiv graph-area">
                        <div class="progressAbsltCls makeThinkEqualDiv p-relative">
                          <div class="lines-div d-flex flex-column justify-content-between h-100">
                            <div v-for="(item, index) in 6" :key="index" :class="`d-flex mainProgBrdrDivs ${item > 5 ? 'm-0 p-0':''}`">
                              <p class="mainProgBrdr"></p>
                            </div>
                          </div>
                          <div class="progressAllBarsDivMain makeThinkEqualDivInner">
                            <div class="progressBarEachDivMain">
                              <div :class="`d-flex groupedFourBars1 ${graphs.rate_of_returns.longevity ? '': 'disableGroupedBar'}`">
                                <div v-for="(item, index) in data.rate_of_returns.length" :key="index" :class="`progressBarEachDiv progressBarEachHeight${1+index} groupedBarsSigleClr${1+index} ${cards.rate_of_returns[index].active ? '':'disableGroupedBar'} ${deletedItems.includes(index) ? 'd-none':''}`">
                                  <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${1+index}`" :style="{height: `${Number(index ? data.rate_of_returns[index].longevity : data.rate_of_returns[0].ror)*100/maxRor}%`}">
                                  </div>
                                  <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                  <span :class="`thingEqualProg${1+index}`">{{Number(index ? data.rate_of_returns[index].longevity : data.rate_of_returns[0].ror).toFixed(2)}}%</span> </div>
                                </div>
                              </div>
                            </div>
                            <div class="progressBarEachDivMain">
                              <div :class="`d-flex groupedFourBars2 ${graphs.rate_of_returns.ending_value ? '': 'disableGroupedBar'}`">
                                <div  v-for="(item, index) in data.rate_of_returns.length" :key="index" :class="`progressBarEachDiv  progressBarEachHeight${5+index} groupedSecBarsSigleClr${1+index} ${cards.rate_of_returns[index].active ? '':'disableGroupedBar'} ${deletedItems.includes(index) ? 'd-none':''}`">
                                  <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${5+index}`" :style="{height: `${Number(index ? data.rate_of_returns[index].ending_value : data.rate_of_returns[0].ror)*100/maxRor}%`}">
                                  </div>
                                  <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                  <span :class="`thingEqualProg${5+index}`">{{Number(index ? data.rate_of_returns[index].ending_value : data.rate_of_returns[0].ror).toFixed(2)}}%</span>
                                  </div>
                                </div>
                              </div>                              
                            </div>
                            <div class="progressBarEachDivMain">
                              <div :class="`d-flex groupedFourBars3 ${graphs.rate_of_returns.death_benefit ? '': 'disableGroupedBar'}`">
                                <div  v-for="(item, index) in data.rate_of_returns.length" :key="index" :class="`progressBarEachDiv  progressBarEachHeight${9+index} groupedThirdBarsSigleClr${1+index} ${cards.rate_of_returns[index].active ? '':'disableGroupedBar'} ${deletedItems.includes(index) ? 'd-none':''}`">
                                  <div :class="`CardProgressBig CardProgressBig${1+index} thingEqualPercent${9+index}`" :style="{height: `${Number(index ? data.rate_of_returns[index].death_benefit : data.rate_of_returns[0].ror)*100/maxRor}%`}"></div>
                                  <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1+index}`">
                                  <span :class="`thingEqualProg${9+index}`">{{Number(index ? data.rate_of_returns[index].death_benefit : data.rate_of_returns[0].ror).toFixed(2)}}%</span>
                                  </div>
                                </div>
                              </div>                              
                            </div>
                          </div>
                        </div>
                        <div :class="`progressAllBarsDivMain barItems${data.distribution.length - deletedItems.length}`">
                          <div class="progressBarEachBtm">
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="progressBarBtnDiv">
                                <p>MATCH</p>
                                <p>Longevity</p>
                              </div>
                              <div class="d-flex">
                                <div class="button-cover2">   
                                  <div class="radioBtnDiv r2 " id="button-2">
                                    <input type="checkbox" class="checkbox2 longevityMatchJSCls1 commonRadioBtn1" :checked="graphs.rate_of_returns.longevity" v-model="graphs.rate_of_returns.longevity" />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                  </div>
                                </div>
                                <!-- <a class="ms-2 deleteButtonAncor" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                  <img src="@/assets/images/icons/delete-icon.svg" alt="delete">
                                </a> -->
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
                                    <input type="checkbox" class="checkbox2 commonRadioBtn1 longevityMatchJSCls2"  :checked="graphs.rate_of_returns.ending_value" v-model="graphs.rate_of_returns.ending_value"/>
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                  </div>
                                </div>
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
                                    <input type="checkbox" class="checkbox2 commonRadioBtn1 longevityMatchJSCls3" :checked="graphs.rate_of_returns.death_benefit" v-model="graphs.rate_of_returns.death_benefit" />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
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
            <comparative-disclosure-component v-if="activeTabs[keyId]" :currentTab="3" />
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
      currentTab: "distributions amounts",
      data: {
        distribution: [
          {
            type: "",
            distributions: 0,
            longevity: 0,
            longevity_in_percent: "",
            ending_value: 0,
            ending_value_in_percent: "",
            death_benefit_in_percent: "",
            death_benefit: "",
          },
          {
            type: "",
            distributions: 0,
            longevity: 0,
            longevity_in_percent: "",
            ending_value: 0,
            ending_value_in_percent: "",
            death_benefit_in_percent: "",
            death_benefit: "",
          },
          {
            type: "",
            distributions: 0,
            longevity: 0,
            longevity_in_percent: "",
            ending_value: 0,
            ending_value_in_percent: "",
            death_benefit_in_percent: "",
            death_benefit: "",
          },
          {
            type: "",
            distributions: 0,
            longevity: 0,
            longevity_in_percent: "",
            ending_value: 0,
            ending_value_in_percent: "",
            death_benefit_in_percent: "",
            death_benefit: "",
          },
        ],
        rate_of_returns: [
          {
            type: "",
            ror: "",
            longevity: "",
            ending_value: "",
            death_benefit: "",
            longevity_in_percent: "",
            ending_value_in_percent: "",
            death_benefit_in_percent: "",
          },
          {
            type: "",
            ror: "",
            longevity: "",
            ending_value: "",
            death_benefit: "",
            longevity_in_percent: "",
            ending_value_in_percent: "",
            death_benefit_in_percent: "",
          },
          {
            type: "",
            ror: "",
            longevity: "",
            ending_value: "",
            death_benefit: "",
            longevity_in_percent: "",
            ending_value_in_percent: "",
            death_benefit_in_percent: "",
          },
          {
            type: "",
            ror: "",
            longevity: "",
            ending_value: "",
            death_benefit: "",
            longevity_in_percent: "",
            ending_value_in_percent: "",
            death_benefit_in_percent: "",
          },
        ],
      },
    };
  },
  methods: {
    setActionId: function(id) {
      document.getElementById("comparative_cv_delete_id").value = id;
    },
    setLongevity: function() {
      this.data.distribution[1].distributions = this.longevity.cv_1.comparison.chart_output.distributions.filter(
        v => v
      )[0];

      this.data.distribution[1].longevity = this.longevity.cv_1.comparison.chart_output.distributions.filter(
        v => v
      )[0];

      this.data.rate_of_returns[1].ror = this.longevity.cv_1.comparison.ror;
    },
    setEndingValue: function() {
      this.data.distribution[2].distributions = this.ending_value.cv_1.comparison.chart_output.distributions.filter(
        v => v
      )[0];
      this.data.rate_of_returns[2].ror = this.ending_value.cv_1.comparison.ror;
    },
    setDeathBenefit: function() {
      this.data.distribution[3].distributions = this.death_benefit.cv_1.comparison.chart_output.distributions.filter(
        v => v
      )[0];
      this.data.rate_of_returns[3].ror = this.death_benefit.cv_1.comparison.ror;
    },
  },
  mounted() {
    if (this.comparative) {
      if (this.comparative.cv_1) {
        this.data.distribution[0].distributions = this.comparative.lirp_data.making_things_equal_distribution;
        this.data.rate_of_returns[0].ror = this.comparative.lirp_data.rate_of_return;

        this.data.distribution[1].longevity = this.comparative.cv_1.match_distributions.longevity;
        this.data.distribution[1].death_benefit = this.comparative.cv_1.match_distributions.death_benefit;
        this.data.distribution[1].ending_value = this.comparative.cv_1.match_distributions.surrender_value;

        this.data.rate_of_returns[1].longevity = this.comparative.cv_1.match_rates_of_return.longevity;
        this.data.rate_of_returns[1].death_benefit = this.comparative.cv_1.match_rates_of_return.death_benefit;
        this.data.rate_of_returns[1].ending_value = this.comparative.cv_1.match_rates_of_return.surrender_value;
      }

      if (Object.values(this.comparative.cv_2).length) {
        this.data.distribution[2].longevity = this.comparative.cv_2.match_distributions.longevity;
        this.data.distribution[2].death_benefit = this.comparative.cv_2.match_distributions.death_benefit;
        this.data.distribution[2].ending_value = this.comparative.cv_2.match_distributions.surrender_value;

        this.data.rate_of_returns[2].longevity = this.comparative.cv_2.match_rates_of_return.longevity;
        this.data.rate_of_returns[2].death_benefit = this.comparative.cv_2.match_rates_of_return.death_benefit;
        this.data.rate_of_returns[2].ending_value = this.comparative.cv_2.match_rates_of_return.surrender_value;
      }

      if (Object.values(this.comparative.cv_3).length) {
        this.data.distribution[3].longevity = this.comparative.cv_3.match_distributions.longevity;
        this.data.distribution[3].death_benefit = this.comparative.cv_3.match_distributions.death_benefit;
        this.data.distribution[3].ending_value = this.comparative.cv_3.match_distributions.surrender_value;

        this.data.rate_of_returns[3].longevity = this.comparative.cv_3.match_rates_of_return.longevity;
        this.data.rate_of_returns[3].death_benefit = this.comparative.cv_3.match_rates_of_return.death_benefit;
        this.data.rate_of_returns[3].ending_value = this.comparative.cv_3.match_rates_of_return.surrender_value;
      }
    }

    if (this.$store.state.data.report.comparative_longevity) {
      this.setLongevity();
    }

    if (this.$store.state.data.report.comparative_ending_value) {
      this.setEndingValue();
    }

    if (this.$store.state.data.report.comparative_death_benefit) {
      this.setDeathBenefit();
    }
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
        this.graphs.distributions.longevity = false;
        this.graphs.distributions.ending_value = false;
        this.graphs.distributions.death_benefit = false;

        this.graphs.rate_of_returns.longevity = false;
        this.graphs.rate_of_returns.ending_value = false;
        this.graphs.rate_of_returns.death_benefit = false;
      } else {
        this.cards.distributions.forEach(element => {
          element.active = true;
        });
        this.cards.rate_of_returns.forEach(element => {
          element.active = true;
        });

        this.graphs.distributions.longevity = true;
        this.graphs.distributions.ending_value = true;
        this.graphs.distributions.death_benefit = true;
        this.graphs.rate_of_returns.longevity = true;
        this.graphs.rate_of_returns.ending_value = true;
        this.graphs.rate_of_returns.death_benefit = true;
      }
    },
  },
  computed: {
    cards() {
      return this.$store.state.data.reportTabs.active_cards
        .cmp_making_things.cards;
    },
    graphs() {
      return this.$store.state.data.reportTabs.active_cards
        .cmp_making_things.graphs;
    },
    deletedItems() {
      return this.$store.state.data.report.deleted_cv_ids;
    },
    maxDistribution() {
      let dst = this.data.distribution;
      return Math.max(
        ...[
          ...dst.map(i => Number(i.distributions)),
          ...dst.map(i => Number(i.longevity)),
          ...dst.map(i => Number(i.ending_value)),
          ...dst.map(i => Number(i.death_benefit)),
        ]
      );
    },
    maxRor() {
      let ror = this.data.rate_of_returns;
      return Math.max(
        ...[
          ...ror.map(i => Number(i.ror)),
          ...ror.map(i => Number(i.longevity)),
          ...ror.map(i => Number(i.ending_value)),
          ...ror.map(i => Number(i.death_benefit)),
        ]
      );
    },
    comparative() {
      return this.$store.state.data.report.comparative || false;
    },
    longevity() {
      return this.$store.state.data.report.comparative_longevity || false;
    },
    ending_value() {
      return this.$store.state.data.report.comparative_ending_value || false;
    },
    death_benefit() {
      return this.$store.state.data.report.comparative_death_benefit || false;
    },
    cv_name() {
      return this.$store.state.data.report.cv_names;
    },
    notes() {
      let note = this.$store.state.data.report.notes || [];
      if (note) {
        note = note.filter(
          i => i.note_type === "comperative_distribution" && i.vehicle_type
        );

        let v1 = note.filter(i => i.vehicle_type === 1)[0] || null;
        let v2 = note.filter(i => i.vehicle_type === 2)[0] || null;
        let v3 = note.filter(i => i.vehicle_type === 3)[0] || null;
        let v4 = note.filter(i => i.vehicle_type === 4)[0] || null;
        note = [v1, v2, v3, v4];
      }
      return note;
    },
    ror_notes() {
      let note = this.$store.state.data.report.notes || [];
      if (note) {
        note = note.filter(
          i => i.note_type === "comperative_rate_of_return" && i.vehicle_type
        );

        let v1 = note.filter(i => i.vehicle_type === 1)[0] || null;
        let v2 = note.filter(i => i.vehicle_type === 2)[0] || null;
        let v3 = note.filter(i => i.vehicle_type === 3)[0] || null;
        let v4 = note.filter(i => i.vehicle_type === 4)[0] || null;
        note = [v1, v2, v3, v4];
      }
      return note;
    },
  },
};
</script>
<style lang="">
</style>
