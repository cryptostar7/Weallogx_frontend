<template lang="">
  <div
    :class="`empty report-card-wrapper ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none' : ''}`"
    data-class="empty-wrapper"
    data-empty="2"
  >
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="3">
      <div
        :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '' : 'presentdeActive'}`"
        id="makingThingsEqualTabView"
      >
        <div :class="`ComparativeTableMainDiv rightDivTop3 ${activeTabs[keyId] ? 'active' : ''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey tab-head">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input
                    id="rightCheckBox3"
                    type="checkbox"
                    class="checkbox2 rightCheckBox3"
                    rightCheckAttr="3"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)"
                    :checked="activeTabs[keyId]"
                  />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox3" class="rghtTopHeadcommon">
                Making Things Equal
                <span class="ms-3 equalThingTabTxt">{{ tabSubtitle }}</span>
              </label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv3" :style="{ display: activeTabs[keyId] ? 'block' : 'none' }">
            <hr class="collapseDivHr" />
            <div class="px-3 pt-3 pb-2">
              <div class="d-flex justify-content-center tab-menu">
                <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist" aria-orientation="vertical">
                  <div
                    id="v-pills-distributions-tab"
                    class="active"
                    aria-controls="v-pills-distributions"
                    aria-selected="true"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-distributions"
                    role="tab"
                    type="button"
                    @click="() => (currentTab = 'distribution')"
                  >
                    Distribution
                  </div>
                  <div
                    id="v-pills-rateOfReturn-tab"
                    @click="() => (currentTab = 'ror')"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-rateOfReturn"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-rateOfReturn"
                    aria-selected="false"
                  >
                    Rate of Return
                  </div>
                </div>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <div
                  id="v-pills-distributions"
                  class="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="v-pills-distributions-tab"
                >
                  <!-- XXX update ids, click handlers, etc -->
                  <div class="d-flex justify-content-center mt-2">
                    <div class="nav mltplSwtchDiv nav-pills w-25" role="tablist" aria-orientation="horizontal">
                      <div
                        id="v-pills-amount-tab"
                        :class="{ active: currentFilter === 'amount' }"
                        data-bs-target="#v-pills-amount"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                        aria-controls="v-pills-amount"
                        aria-selected="true"
                        @click="setCurrentFilter('amount')"
                      >
                        Amount
                      </div>
                      <div
                        id="v-pills-longevity-tab"
                        :class="{ active: currentFilter === 'longevity' }"
                        data-bs-target="#v-pills-longevity"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                        aria-controls="v-pills-longevity"
                        aria-selected="true"
                        @click="setCurrentFilter('longevity')"
                      >
                        Match Longevity
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mt-2">
                    <div class="nav mltplSwtchDiv nav-pills w-20" role="tablist" aria-orientation="horizontal">
                      <!-- XXX these should be setting currentFilter -->
                      <div
                        :class="currentFilter === 'default' ? 'active' : ''"
                        id="v-pills-default-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-default"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-default"
                        aria-selected="true"
                        @click="setCurrentFilter('default')"
                      >
                        Individual
                      </div>
                      <div
                        :class="currentFilter === 'deathBenefit' ? 'active' : ''"
                        id="v-pills-deathBenefit-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-deathBenefit"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-deathBenefit"
                        aria-selected="true"
                        @click="setCurrentFilter('deathBenefit')"
                      >
                        Show All
                      </div>
                    </div>
                  </div>
                  <div class="container-fluid">
                    <div class="mainProgrssBarDiv graph-area">
                      <div class="progressAbsltCls makeThinkEqualDiv p-relative">
                        <div class="lines-div d-flex flex-column justify-content-between h-100">
                          <div
                            v-for="(item, index) in 6"
                            :key="index"
                            :class="`d-flex mainProgBrdrDivs ${item > 5 ? 'm-0 p-0' : ''}`"
                          >
                            <p class="mainProgBrdr"></p>
                          </div>
                        </div>
                        <div class="progressAllBarsDivMain makeThinkEqualDivInner">
                          <div class="progressBarEachDivMain">
                            <div
                              :class="`d-flex groupedFourBars1 ${
                                graphs.distributions.longevity ? '' : 'disableGroupedBar'
                              }`"
                            >
                              <div
                                v-for="(item, index) in data.distribution.length"
                                :key="index"
                                :class="`progressBarEachDiv progressBarEachHeight${index + 1}
                                  groupedBarsSigleClr${index + 1} ${
                                  cards.distributions[index].active ? '' : 'disableGroupedBar'
                                } ${deletedItems.includes(index) ? 'd-none' : ''}`"
                              >
                                <div
                                  :class="`CardProgressBig CardProgressBig${index + 1} thingEqualPercent${1 + index}`"
                                  :style="{
                                    height: `${
                                      (Number(
                                        index ? data.distribution[index].longevity : data.distribution[0].distributions
                                      ) *
                                        100) /
                                      maxDistribution
                                    }%`
                                  }"
                                ></div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${index + 1}`">
                                  $<span :class="`thingEqualProg${index + 1}`">
                                    {{
                                      $numFormat(
                                        index ? data.distribution[index].longevity : data.distribution[0].distributions
                                      )
                                    }}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="progressBarEachDivMain">
                            <div
                              :class="`d-flex groupedFourBars2 ${
                                graphs.distributions.ending_value ? '' : 'disableGroupedBar'
                              }`"
                            >
                              <div
                                v-for="(item, index) in data.distribution.length"
                                :key="index"
                                :class="`progressBarEachDiv  progressBarEachHeight${index + 5} groupedSecBarsSigleClr${
                                  index + 1
                                } ${cards.distributions[index].active ? '' : 'disableGroupedBar'} ${
                                  deletedItems.includes(index) ? 'd-none' : ''
                                }`"
                              >
                                <div
                                  :class="`CardProgressBig CardProgressBig${1 + index} thingEqualPercent${5 + index}`"
                                  :style="{
                                    height: `${
                                      (Number(
                                        index
                                          ? data.distribution[index].ending_value
                                          : data.distribution[0].distributions
                                      ) *
                                        100) /
                                      maxDistribution
                                    }%`
                                  }"
                                ></div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1 + index}`">
                                  $<span :class="`thingEqualProg${5 + index}`">
                                    {{
                                      $numFormat(
                                        index
                                          ? data.distribution[index].ending_value
                                          : data.distribution[0].distributions
                                      )
                                    }}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="progressBarEachDivMain">
                            <div
                              :class="`d-flex groupedFourBars3 ${
                                graphs.distributions.death_benefit ? '' : 'disableGroupedBar'
                              }`"
                            >
                              <div
                                v-for="(item, index) in data.distribution.length"
                                :key="index"
                                :class="`progressBarEachDiv  progressBarEachHeight${9 + index}
                                  groupedThirdBarsSigleClr${1 + index} ${
                                  cards.distributions[index].active ? '' : 'disableGroupedBar'
                                } ${deletedItems.includes(index) ? 'd-none' : ''}`"
                              >
                                <div
                                  :class="`CardProgressBig CardProgressBig${1 + index} thingEqualPercent${9 + index}`"
                                  :style="{
                                    height: `${
                                      (Number(
                                        index
                                          ? data.distribution[index].death_benefit
                                          : data.distribution[0].distributions
                                      ) *
                                        100) /
                                      maxDistribution
                                    }%`
                                  }"
                                ></div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1 + index}`">
                                  $<span :class="`thingEqualProg${9 + index}`">
                                    {{
                                      $numFormat(
                                        index
                                          ? data.distribution[index].death_benefit
                                          : data.distribution[0].distributions
                                      )
                                    }}
                                  </span>
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
                                <div class="radioBtnDiv r2" id="button-2">
                                  <input
                                    type="checkbox"
                                    class="checkbox2 longevityMatchJSCls1 commonRadioBtn1"
                                    :checked="graphs.distributions.longevity"
                                    v-model="graphs.distributions.longevity"
                                  />
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
                                  <input
                                    type="checkbox"
                                    class="checkbox2 commonRadioBtn1 longevityMatchJSCls2"
                                    checked
                                    v-model="graphs.distributions.ending_value"
                                  />
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
                                  <input
                                    type="checkbox"
                                    class="checkbox2 commonRadioBtn1 longevityMatchJSCls3"
                                    checked
                                    v-model="graphs.distributions.death_benefit"
                                  />
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
                <div
                  id="v-pills-rateOfReturn"
                  class="tab-pane fade show"
                  role="tabpanel"
                  aria-labelledby="v-pills-rateOfReturn-tab"
                >
                  <!-- XXX update ids, click handlers, etc -->
                  <div class="d-flex justify-content-center mt-2">
                    <div class="nav mltplSwtchDiv nav-pills w-25" role="tablist" aria-orientation="horizontal">
                      <div
                        id="v-pills-default-tab"
                        :class="{ active: currentFilter === 'default' }"
                        data-bs-target="#v-pills-default"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                        aria-controls="v-pills-default"
                        aria-selected="true"
                        @click="setCurrentFilter('default')"
                      >
                        Default
                      </div>
                      <div
                        id="v-pills-values-tab"
                        :class="{ active: currentFilter === 'values' }"
                        data-bs-target="#v-pills-values"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                        aria-controls="v-pills-values"
                        aria-selected="true"
                        @click="setCurrentFilter('values')"
                      >
                        Match Values
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mt-2">
                    <div class="nav mltplSwtchDiv nav-pills w-20" role="tablist" aria-orientation="horizontal">
                      <!-- XXX -->
                      <div
                        :class="currentFilter === 'default' ? 'active' : ''"
                        id="v-pills-default-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-default"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-default"
                        aria-selected="true"
                        @click="setCurrentFilter('default')"
                      >
                        Individual
                      </div>
                      <div
                        :class="currentFilter === 'deathBenefit' ? 'active' : ''"
                        id="v-pills-deathBenefit-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-deathBenefit"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-deathBenefit"
                        aria-selected="true"
                        @click="setCurrentFilter('deathBenefit')"
                      >
                        Show All
                      </div>
                    </div>
                  </div>
                  <div class="container-fluid">
                    <div class="mainProgrssBarDiv graph-area">
                      <div class="progressAbsltCls makeThinkEqualDiv p-relative">
                        <div class="lines-div d-flex flex-column justify-content-between h-100">
                          <div
                            v-for="(item, index) in 6"
                            :key="index"
                            :class="`d-flex mainProgBrdrDivs ${item > 5 ? 'm-0 p-0' : ''}`"
                          >
                            <p class="mainProgBrdr"></p>
                          </div>
                        </div>
                        <div class="progressAllBarsDivMain makeThinkEqualDivInner">
                          <div class="progressBarEachDivMain">
                            <div
                              :class="`d-flex groupedFourBars1 ${
                                graphs.rate_of_returns.longevity ? '' : 'disableGroupedBar'
                              }`"
                            >
                              <div
                                v-for="(item, index) in data.rate_of_returns.length"
                                :key="index"
                                :class="`progressBarEachDiv progressBarEachHeight${1 + index}
                                  groupedBarsSigleClr${1 + index} ${
                                  cards.rate_of_returns[index].active ? '' : 'disableGroupedBar'
                                } ${deletedItems.includes(index) ? 'd-none' : ''}`"
                              >
                                <div
                                  :class="`CardProgressBig CardProgressBig${1 + index} thingEqualPercent${1 + index}`"
                                  :style="{
                                    height: `${
                                      (Number(
                                        index ? data.rate_of_returns[index].longevity : data.rate_of_returns[0].ror
                                      ) *
                                        100) /
                                      maxRor
                                    }%`
                                  }"
                                ></div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1 + index}`">
                                  <span :class="`thingEqualProg${1 + index}`">
                                    {{
                                      Number(
                                        index ? data.rate_of_returns[index].longevity : data.rate_of_returns[0].ror
                                      ).toFixed(2)
                                    }}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="progressBarEachDivMain">
                            <div
                              :class="`d-flex groupedFourBars2 ${
                                graphs.rate_of_returns.ending_value ? '' : 'disableGroupedBar'
                              }`"
                            >
                              <div
                                v-for="(item, index) in data.rate_of_returns.length"
                                :key="index"
                                :class="`progressBarEachDiv  progressBarEachHeight${5 + index}
                                  groupedSecBarsSigleClr${1 + index} ${
                                  cards.rate_of_returns[index].active ? '' : 'disableGroupedBar'
                                } ${deletedItems.includes(index) ? 'd-none' : ''}`"
                              >
                                <div
                                  :class="`CardProgressBig CardProgressBig${1 + index} thingEqualPercent${5 + index}`"
                                  :style="{
                                    height: `${
                                      (Number(
                                        index ? data.rate_of_returns[index].ending_value : data.rate_of_returns[0].ror
                                      ) *
                                        100) /
                                      maxRor
                                    }%`
                                  }"
                                ></div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1 + index}`">
                                  <span :class="`thingEqualProg${5 + index}`">
                                    {{
                                      Number(
                                        index ? data.rate_of_returns[index].ending_value : data.rate_of_returns[0].ror
                                      ).toFixed(2)
                                    }}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="progressBarEachDivMain">
                            <div
                              :class="`d-flex groupedFourBars3 ${
                                graphs.rate_of_returns.death_benefit ? '' : 'disableGroupedBar'
                              }`"
                            >
                              <div
                                v-for="(item, index) in data.rate_of_returns.length"
                                :key="index"
                                :class="`progressBarEachDiv  progressBarEachHeight${9 + index}
                                  groupedThirdBarsSigleClr${1 + index} ${
                                  cards.rate_of_returns[index].active ? '' : 'disableGroupedBar'
                                } ${deletedItems.includes(index) ? 'd-none' : ''}`"
                              >
                                <div
                                  :class="`CardProgressBig CardProgressBig${1 + index} thingEqualPercent${9 + index}`"
                                  :style="{
                                    height: `${
                                      (Number(
                                        index ? data.rate_of_returns[index].death_benefit : data.rate_of_returns[0].ror
                                      ) *
                                        100) /
                                      maxRor
                                    }%`
                                  }"
                                ></div>
                                <div :class="`position-absolute progressBarbtmNum progressBarOvrwrt${1 + index}`">
                                  <span :class="`thingEqualProg${9 + index}`">
                                    {{
                                      Number(
                                        index ? data.rate_of_returns[index].death_benefit : data.rate_of_returns[0].ror
                                      ).toFixed(2)
                                    }}%
                                  </span>
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
                                <div class="radioBtnDiv r2" id="button-2">
                                  <input
                                    type="checkbox"
                                    class="checkbox2 longevityMatchJSCls1 commonRadioBtn1"
                                    :checked="graphs.rate_of_returns.longevity"
                                    v-model="graphs.rate_of_returns.longevity"
                                  />
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
                                  <input
                                    type="checkbox"
                                    class="checkbox2 commonRadioBtn1 longevityMatchJSCls2"
                                    :checked="graphs.rate_of_returns.ending_value"
                                    v-model="graphs.rate_of_returns.ending_value"
                                  />
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
                                  <input
                                    type="checkbox"
                                    class="checkbox2 commonRadioBtn1 longevityMatchJSCls3"
                                    :checked="graphs.rate_of_returns.death_benefit"
                                    v-model="graphs.rate_of_returns.death_benefit"
                                  />
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
import ComparativeDisclosureComponent from './ComparativeDisclosureComponent.vue';
// import AddNoteInputComponent from '../common/AddNoteInputComponent.vue';

export default {
  // components: { ComparativeDisclosureComponent, AddNoteInputComponent },
  components: { ComparativeDisclosureComponent },
  props: ['keyId'],
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      currentFilter: 'amount', // 'amount' | 'longevity' | 'default' | 'values'
      currentTab: 'distribution',
      data: {
        distribution: [
          {
            type: '',
            distributions: 0,
            longevity: 0,
            longevity_in_percent: '',
            ending_value: 0,
            ending_value_in_percent: '',
            death_benefit_in_percent: '',
            death_benefit: ''
          },
          {
            type: '',
            distributions: 0,
            longevity: 0,
            longevity_in_percent: '',
            ending_value: 0,
            ending_value_in_percent: '',
            death_benefit_in_percent: '',
            death_benefit: ''
          },
          {
            type: '',
            distributions: 0,
            longevity: 0,
            longevity_in_percent: '',
            ending_value: 0,
            ending_value_in_percent: '',
            death_benefit_in_percent: '',
            death_benefit: ''
          },
          {
            type: '',
            distributions: 0,
            longevity: 0,
            longevity_in_percent: '',
            ending_value: 0,
            ending_value_in_percent: '',
            death_benefit_in_percent: '',
            death_benefit: ''
          }
        ],
        rate_of_returns: [
          {
            type: '',
            ror: '',
            longevity: '',
            ending_value: '',
            death_benefit: '',
            longevity_in_percent: '',
            ending_value_in_percent: '',
            death_benefit_in_percent: ''
          },
          {
            type: '',
            ror: '',
            longevity: '',
            ending_value: '',
            death_benefit: '',
            longevity_in_percent: '',
            ending_value_in_percent: '',
            death_benefit_in_percent: ''
          },
          {
            type: '',
            ror: '',
            longevity: '',
            ending_value: '',
            death_benefit: '',
            longevity_in_percent: '',
            ending_value_in_percent: '',
            death_benefit_in_percent: ''
          },
          {
            type: '',
            ror: '',
            longevity: '',
            ending_value: '',
            death_benefit: '',
            longevity_in_percent: '',
            ending_value_in_percent: '',
            death_benefit_in_percent: ''
          }
        ]
      }
    };
  },
  computed: {
    cards() {
      return this.$store.state.data.reportTabs.active_cards.cmp_making_things.cards;
    },
    comparative() {
      return this.$store.state.data.report.comparative || false;
    },
    cvName() {
      return this.$store.state.data.report.cv_names[0];
    },
    death_benefit() {
      return this.$store.state.data.report.comparative_death_benefit || false;
    },
    deletedItems() {
      return this.$store.state.data.report.deleted_cv_ids;
    },
    ending_value() {
      return this.$store.state.data.report.comparative_ending_value || false;
    },
    graphs() {
      return this.$store.state.data.reportTabs.active_cards.cmp_making_things.graphs;
    },
    longevity() {
      return this.$store.state.data.report.comparative_longevity || false;
    },
    maxDistribution() {
      let dst = this.data.distribution;

      return Math.max(
        ...[
          ...dst.map((i) => Number(i.distributions)),
          ...dst.map((i) => Number(i.longevity)),
          ...dst.map((i) => Number(i.ending_value)),
          ...dst.map((i) => Number(i.death_benefit))
        ]
      );
    },
    maxRor() {
      let ror = this.data.rate_of_returns;

      return Math.max(
        ...[
          ...ror.map((i) => Number(i.ror)),
          ...ror.map((i) => Number(i.longevity)),
          ...ror.map((i) => Number(i.ending_value)),
          ...ror.map((i) => Number(i.death_benefit))
        ]
      );
    },
    notes() {
      let note = this.$store.state.data.report.notes || [];

      if (note) {
        note = note.filter((i) => i.note_type === 'comperative_distribution' && i.vehicle_type);

        let v1 = note.filter((i) => i.vehicle_type === 1)[0] || null;
        let v2 = note.filter((i) => i.vehicle_type === 2)[0] || null;
        let v3 = note.filter((i) => i.vehicle_type === 3)[0] || null;
        let v4 = note.filter((i) => i.vehicle_type === 4)[0] || null;
        note = [v1, v2, v3, v4];
      }

      return note;
    },
    ror_notes() {
      let note = this.$store.state.data.report.notes || [];

      if (note) {
        note = note.filter((i) => i.note_type === 'comperative_rate_of_return' && i.vehicle_type);

        let v1 = note.filter((i) => i.vehicle_type === 1)[0] || null;
        let v2 = note.filter((i) => i.vehicle_type === 2)[0] || null;
        let v3 = note.filter((i) => i.vehicle_type === 3)[0] || null;
        let v4 = note.filter((i) => i.vehicle_type === 4)[0] || null;
        note = [v1, v2, v3, v4];
      }

      return note;
    },
    tabSubtitle() {
      return this.currentTab === 'distribution'
        ? `How long do the comparative vehicles last when matching the annual distributions of the ${this.cvName}?`
        : `What rate of return is required for the comparative vehicles to match the ${this.cvName}’s longevity and ending values?`;
    }
  },
  watch: {
    '$store.state.app.presentation_mode'(val) {
      if (this.$store.state.app.presentation_mode && this.$store.state.app.show_assets1) {
        this.cards.distributions.forEach((element) => {
          element.active = false;
        });
        this.cards.rate_of_returns.forEach((element) => {
          element.active = false;
        });
        this.graphs.distributions.longevity = false;
        this.graphs.distributions.ending_value = false;
        this.graphs.distributions.death_benefit = false;

        this.graphs.rate_of_returns.longevity = false;
        this.graphs.rate_of_returns.ending_value = false;
        this.graphs.rate_of_returns.death_benefit = false;
      } else {
        this.cards.distributions.forEach((element) => {
          element.active = true;
        });
        this.cards.rate_of_returns.forEach((element) => {
          element.active = true;
        });

        this.graphs.distributions.longevity = true;
        this.graphs.distributions.ending_value = true;
        this.graphs.distributions.death_benefit = true;
        this.graphs.rate_of_returns.longevity = true;
        this.graphs.rate_of_returns.ending_value = true;
        this.graphs.rate_of_returns.death_benefit = true;
      }
    }
  },
  mounted() {
    if (this.comparative && Object.keys(this.comparative).length) {
      if (this.comparative.cv_1) {
        this.data.distribution[0].distributions = this.comparative.lirp_data.making_things_equal_distribution;
        this.data.rate_of_returns[0].ror = this.comparative.lirp_data.rate_of_return;

        this.data.distribution[1].longevity = this.death_benefit.cv_1.match_distributions.longevity;
        this.data.distribution[1].death_benefit = this.death_benefit.cv_1.match_distributions.death_benefit;
        this.data.distribution[1].ending_value = this.death_benefit.cv_1.match_distributions.surrender_value;

        this.data.rate_of_returns[1].longevity = this.comparative.cv_1.match_rates_of_return.longevity;
        this.data.rate_of_returns[1].death_benefit = this.comparative.cv_1.match_rates_of_return.death_benefit;
        this.data.rate_of_returns[1].ending_value = this.comparative.cv_1.match_rates_of_return.surrender_value;
      }

      if (Object.values(this.comparative.cv_2).length) {
        this.data.distribution[2].longevity = this.death_benefit.cv_2.match_distributions.longevity;
        this.data.distribution[2].death_benefit = this.death_benefit.cv_2.match_distributions.death_benefit;
        this.data.distribution[2].ending_value = this.death_benefit.cv_2.match_distributions.surrender_value;

        this.data.rate_of_returns[2].longevity = this.comparative.cv_2.match_rates_of_return.longevity;
        this.data.rate_of_returns[2].death_benefit = this.comparative.cv_2.match_rates_of_return.death_benefit;
        this.data.rate_of_returns[2].ending_value = this.comparative.cv_2.match_rates_of_return.surrender_value;
      }

      if (Object.values(this.comparative.cv_3).length) {
        this.data.distribution[3].longevity = this.death_benefit.cv_3.match_distributions.longevity;
        this.data.distribution[3].death_benefit = this.death_benefit.cv_3.match_distributions.death_benefit;
        this.data.distribution[3].ending_value = this.death_benefit.cv_3.match_distributions.surrender_value;

        this.data.rate_of_returns[3].longevity = this.comparative.cv_3.match_rates_of_return.longevity;
        this.data.rate_of_returns[3].death_benefit = this.comparative.cv_3.match_rates_of_return.death_benefit;
        this.data.rate_of_returns[3].ending_value = this.comparative.cv_3.match_rates_of_return.surrender_value;
      }

      // if (this.$store.state.data.report.comparative_longevity) {
      //   this.setLongevity();
      // }

      // if (this.$store.state.data.report.comparative_ending_value) {
      //   this.setEndingValue();
      // }

      // if (this.$store.state.data.report.comparative_death_benefit) {
      //   this.setDeathBenefit();
      // }
    }
  },
  methods: {
    setActionId(id) {
      document.getElementById('comparative_cv_delete_id').value = id;
    },
    setCurrentFilter(filter) {
      this.currentFilter = filter;
    },
    setDeathBenefit() {
      this.data.distribution[3].distributions = this.death_benefit.cv_1.comparison.chart_output.distributions.filter(
        (v) => v
      )[0];
      this.data.rate_of_returns[3].ror = this.death_benefit.cv_1.comparison.ror;
    },
    setEndingValue() {
      this.data.distribution[2].distributions = this.ending_value.cv_1.comparison.chart_output.distributions.filter(
        (v) => v
      )[0];
      this.data.rate_of_returns[2].ror = this.ending_value.cv_1.comparison.ror;
    },
    setLongevity() {
      this.data.distribution[1].distributions = this.longevity.cv_1.comparison.chart_output.distributions.filter(
        (v) => v
      )[0];

      this.data.distribution[1].longevity = this.longevity.cv_1.comparison.chart_output.distributions.filter(
        (v) => v
      )[0];

      this.data.rate_of_returns[1].ror = this.longevity.cv_1.comparison.ror;
    }
  }
};
</script>
