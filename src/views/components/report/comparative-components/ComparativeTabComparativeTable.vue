<template lang="">
  <div :class="`empty ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="0">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="1">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`"  id="comparativeTableTabView">
        <div :class="`ComparativeTableMainDiv rightDivTop1 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey tab-head">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox1" type="checkbox" class="checkbox2 rightCheckBox1"  :checked="activeTabs[keyId]" rightCheckAttr="1"  @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>                                   
              <label for="rightCheckBox1" class="rghtTopHeadcommon">Comparative Table</label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div>
            <div :class="`commonCollapse ${showAll ? 'comparativeFullDiv' : 'comparativeLessDiv'} comparativeLessDiv2 collapseDiv1 position-relative tableDivHeight1`" :style="{display:activeTabs[keyId] ? 'block':'none'}">
              <hr class="collapseDivHr">
              <div class="px-3 py-3 whole-table-wrapper">
                <div class="position-relative">
                  <div class="d-flex align-items-center float-end">
                    <div class="radioBtnDiv r2 prstnRadioBtnHide" id="button-2">
                      <input type="checkbox" class="checkbox2 showAssetsCheckBox" id="showAssets" @change="() => $store.dispatch('toggleAssets1')"/>
                      <div class="knobs2"></div>
                      <div class="layer2"></div>
                    </div>
                    <label for="showAssets" class="ms-2 fs-12 semi-bold-fw showAssetsTxt prstnRadioBtnHide cursor-pointer">Show assets one by one</label>
                  </div>
                  <div class="collapseDivmdlHd text-center">Target Analysis</div>
                </div><br>
                <div class="d-flex justify-content-center mt-2">
                  <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist" aria-orientation="vertical">
                    <div class="active" data-bs-toggle="pill" data-bs-target="#v-pills-distribution" type="button"  role="tab" aria-controls="v-pills-distribution" aria-selected="true" @click="setCurrentTab('target_analysis')">Distribution</div>
                    <div data-bs-toggle="pill" data-bs-target="#v-pills-rate-of-return" type="button" role="tab" aria-controls="v-pills-rate-of-return" aria-selected="false" @click="setCurrentTab('rate_of_return')">Rate of Return</div>
                  </div>
                </div>
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="v-pills-distribution" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="d-flex justify-content-center mt-2">
                      <div class="nav mltplSwtchDiv nav-pills" role="tablist" aria-orientation="vertical">
                        <div :class="currentFilter === 'default' ? 'active' : ''" id="v-pills-default-tab" data-bs-toggle="pill"  data-bs-target="#v-pills-default" type="button" role="tab" aria-controls="v-pills-default" aria-selected="true"  @click="setCurrentFilter('default')">Amount</div>
                        <div :class="currentFilter === 'longevity' ? 'active' : ''" id="v-pills-longevity-tab" data-bs-toggle="pill" data-bs-target="#v-pills-longevity" type="button" role="tab" aria-controls="v-pills-longevity" aria-selected="true" @click="setCurrentFilter('longevity')">
                          Longevity
                        </div>
                        <div :class="currentFilter === 'endingvalue' ? 'active' : ''" id="v-pills-endingvalue-tab" data-bs-toggle="pill" data-bs-target="#v-pills-endingvalue"  type="button" role="tab" aria-controls="v-pills-endingvalue" aria-selected="true"  @click="setCurrentFilter('endingvalue')">Ending  Value</div>
                        <div :class="currentFilter === 'deathBenefit' ? 'active' : ''" id="v-pills-deathBenefit-tab" data-bs-toggle="pill" data-bs-target="#v-pills-deathBenefit"  type="button" role="tab" aria-controls="v-pills-deathBenefit" aria-selected="true"  @click="setCurrentFilter('deathBenefit')">Death  Benefit</div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="v-pills-rate-of-return" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="d-flex justify-content-center mt-2">
                      <div class="nav mltplSwtchDiv nav-pills" role="tablist" aria-orientation="vertical">
                        <div :class="currentFilter === 'default' ? 'active' : ''" id="v-pills-default-tab" data-bs-toggle="pill" data-bs-target="#v-pills-default" type="button" role="tab" aria-controls="v-pills-default" aria-selected="true" @click="setCurrentFilter('default')">Default</div>
                        <div :class="currentFilter === 'longevity' ? 'active' : ''" id="v-pills-longevity-tab" data-bs-toggle="pill" data-bs-target="#v-pills-longevity" type="button" role="tab" aria-controls="v-pills-longevity" aria-selected="true" @click="setCurrentFilter('longevity')">
                          Longevity
                        </div>
                        <div :class="currentFilter === 'endingvalue' ? 'active' : ''" id="v-pills-endingvalue-tab" data-bs-toggle="pill" data-bs-target="#v-pills-endingvalue" type="button" role="tab" aria-controls="v-pills-endingvalue" aria-selected="true" @click="setCurrentFilter('endingvalue')">Ending Value</div>
                        <div :class="currentFilter === 'deathBenefit' ? 'active' : ''" id="v-pills-deathBenefit-tab" data-bs-toggle="pill" data-bs-target="#v-pills-deathBenefit" type="button" role="tab" aria-controls="v-pills-deathBenefit" aria-selected="true" @click="setCurrentFilter('deathBenefit')">Death Benefit</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid table-fluid mt-5">
                  <div class="row tablesMainDiv" v-if="target_analysis.data.length">
                    <div class="col-3 col-md-2 ps-0 pe-1">
                      <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr visible-hidden">
                        <div class="dblLineAbslt">
                          <img src="@/assets/images/icons/double-line.svg" alt="line">
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="d-flex alig-items-center justify-content-between mt-2 allActionBtns">
                              <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                <input type="checkbox" class="checkbox2" checked="true">
                                <div class="knobs2"></div>
                                <div class="layer2"></div>
                              </div>
                              <div class="d-flex align-items-center">
                                <a href="javascript:void(0)" data-bs-target="#deleteAccountModal" data-bs-toggle="modal"  class="deleteBtnAccount disableBtnsForAll">&nbsp;
                                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z" stroke="#1660A4" stroke-width="1.25"></path>
                                    <rect x="8.35156" y="5.41406" width="1.25" height="4.70588" rx="0.625" transform="rotate(90 8.35156 5.41406)" fill="#1660A4"></rect>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row eachCardParaRow">
                          <div class="col-md-5">
                            <p class="lifeProPlusPara3" id="acountColorCommon">RoR</p>
                            <p class="lifeProPlusPara2" id="acountColorCommon">6.50%</p>
                          </div>
                          <div class="col-md-7">
                            <p class="lifeProPlusPara3" id="acountColorCommon">IRR</p>
                            <p class="lifeProPlusPara2" id="acountColorCommon">3.82%</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="lifeProBtmDiv lifeProBtmDiv2 commonBottomTxt">
                              <p><input type="text" value="Account" class="tableHeadInputs" readonly/></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mt-1">
                        <div class="reportTablesDiv reportTablesDiv1">
                          <table class="table sticky-header">
                            <thead class="heading-tr">
                              <tr>
                                <th>Yr</th>
                                <th>Age</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(item, index) in target_analysis.distributions" :key="index">
                                <td class="table1Td" data-label="Year">{{item.year}}</td>
                                <td class="table1Td" data-label="Age">{{item.age}}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="reportTablesDiv ms-1 reportTablesDiv2">
                          <table class="table sticky-header">
                            <thead class="heading-tr">
                              <tr>
                                <th>Deposits</th>
                              </tr>
                             </thead>
                            <tbody>
                              <tr v-for="(item, index) in target_analysis.distributions" :key="index">
                                <td data-label="Year">{{$numFormatWithDollar(item.deposits)}}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="col-9 col-md-4 ps-0 pe-0">
                      <div class="reportTablesDiv reportTablesDiv3">
                        <div class="lifeProPlus">
                          <div class="row">
                            <div class="col-12">
                              <div class="d-flex align-items-center justify-content-end mt-2 allActionBtns me-0">
                                <a href="javascript:void(0)" class="editBtnLirp disableBtnsForAll">&nbsp;
                                  <svg width="13"  height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425" fill="white" stroke="#1660A4" stroke-width="1.15"></rect>
                                    <path  d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"  stroke="#1660A4" stroke-width="1.25"></path>
                                  </svg>
                                </a>
                                <a href="javascript:void(0)" class="d-none editBtnLirp doneBtnLirp disableBtnsForAll">&nbsp;
                                  <svg width="13"  height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1862_4)">
                                      <path d="M8.17391 1H1V10.4007H11.0435V7.26713" stroke="#0E6651" stroke-width="1.5" stroke-linecap="round"  stroke-linejoin="round" />
                                      <path d="M3.86963 5.47654L6.26093 7.7148L12.0001 1.89532" stroke="#0E6651" stroke-width="1.5"  stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_1862_4">
                                        <rect width="12.5" height="11.7" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="row eachCardParaRow">
                            <div class="col-md-5">
                              <p class="lifeProPlusPara1">RATE OF RETURN (RoR)</p>
                              <p class="lifeProPlusPara2">{{Number(target_analysis.data[0].ror || 0).toFixed(2)}}%</p>
                            </div>
                            <div class="col-md-7">
                              <p class="lifeProPlusPara1">INTERNAL RATE OF RETURN (IRR)</p>
                              <p class="lifeProPlusPara2">{{Number(target_analysis.data[0].irr || 0).toFixed(2)}}%</p>
                            </div>
                          </div>
                          <div class="lifeProBtmDiv lifeProBtmDiv1">
                            <p><input type="text" :value="cv_name[0]" class="tableHeadInputs" @blur="e => saveCvName(0, e.target.value)"></p>
                          </div>
                        </div>
                        <table class="table table3 mt-1 w-100 sticky-header">
                          <thead class="heading-tr">
                            <tr>
                              <th width="25%">Distributions</th>
                              <th width="25%">Account Value</th>
                              <th width="25%">Surrender Value</th>
                              <th width="25%">Death Benefit</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in target_analysis.data[0].list" :key="index">
                              <td data-label=""><span v-if="$numFormatWithDollar(item.distributions)" :class="`td-bold ${target_analysis.data[0].list[index+1] ? `${target_analysis.data[0].list[index+1].distributions < 1 ? 'text-danger' : ''}`:''}`">{{$numFormatWithDollar(item.distributions)}}</span></td>
                              <td data-label="acount">{{ $numFormatWithDollar(item.account_value) }}</td> 
                              <td data-label="surrender">{{ $numFormatWithDollar(item.surrender_value) }}</td>
                              <td data-label="death">{{$numFormatWithDollar(item.death_benefit) }}</td>
                            </tr>
                          </tbody>
                        </table> 
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <draggable v-model="draggableColumns" :draggable="$store.state.app.presentation_mode ? '' : '.drag-item'" tag="div" class="row">
                        <div v-for="header in draggableColumns" :key="header.id" :class="`drag-item ${deletedItems.includes(header.id) ? 'd-none':''} col-md-${12/(3-deletedItems.length)} ${deletedItems.length} ps-1 pe-0 drag-col ${header.active ? '' : 'order-last'}`">
                          <div class="empty-inner" data-empty="1">
                            <div class="fill-inner" data-fill="1">
                              <div :class="`commonTableMainTopDiv${header.id} ${header.active ? '' : 'commonTableCls'}`">
                                <div :class="`reportTablesDiv reportTablesDiv${3+header.id}`">
                                  <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                    <div class="dblLineAbslt" :style="{'cursor': !$store.state.app.presentation_mode ? 'move' : 'default'}">
                                      <img src="@/assets/images/icons/double-line.svg" alt="line" v-if="!$store.state.app.presentation_mode">
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div :class="`d-flex align-items-center justify-content-between mt-2 allActionBtns switch${header.id}`">
                                          <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                            <input type="checkbox" :class="`checkbox2 commonRadioBtn${header.id}`" :checked="header.active" hideattr="1" @click="() => header.active = !header.active">
                                            <div class="knobs2"></div>
                                            <div class="layer2"></div>
                                          </div>                                                                                                                                                                                                              
                                          <div class="d-flex align-items-center">
                                            <router-link :to="`/comparative-vehicles/${comparativeTable.scenerio_id}?tab=${header.id}&report=${$route.params.report}`" class="editBtn editBtnAccount mx-2 disableBtnsForAll">&nbsp;
                                              <svg width="13"  height="13" viewBox="0 0 13 13" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425"  fill="white" stroke="#1660A4" stroke-width="1.15" />
                                                <path  d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"  stroke="#1660A4" stroke-width="1.25" />
                                              </svg>
                                            </router-link>
                                             <a href="javascript:void(0)" class="d-none editBtn editBtnAccount doneBtnAccount disableBtnsForAll">&nbsp;
                                              <svg width="13"  height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <g clip-path="url(#clip0_1862_4)">
                                                    <path d="M8.17391 1H1V10.4007H11.0435V7.26713" stroke="#0E6651" stroke-width="1.5" stroke-linecap="round"  stroke-linejoin="round" />
                                                    <path d="M3.86963 5.47654L6.26093 7.7148L12.0001 1.89532" stroke="#0E6651" stroke-width="1.5"  stroke-linecap="round" stroke-linejoin="round" />
                                                  </g>
                                                  <defs>
                                                    <clipPath id="clip0_1862_4">
                                                      <rect width="12.5" height="11.7" fill="white" />
                                                    </clipPath>
                                                  </defs>
                                                </svg>
                                              </a>
                                            <router-link to="" @click="setActionId(header.id)" data-bs-target="#DeleteComparativeCvModal"  data-bs-toggle="modal"  class="deleteBtn deleteBtnAccount disableBtnsForAll">&nbsp;
                                              <svg width="12"  height="13" viewBox="0 0 12 13" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                                <path  d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"  stroke="#1660A4" stroke-width="1.25" />
                                                <rect x="8.35156" y="5.41406" width="1.25" height="4.70588" rx="0.625"  transform="rotate(90 8.35156 5.41406)" fill="#1660A4" />
                                              </svg>
                                            </router-link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row eachCardParaRow">
                                      <div class="col-md-5">
                                        <p :class="`lifeProPlusPara${1+header.id+header.id}`" id="acountColorCommon">RoR</p>
                                        <p class="lifeProPlusPara2" id="acountColorCommon">{{Number(target_analysis.data[header.id].ror || 0).toFixed(2)}}%</p>
                                      </div>
                                      <div class="col-md-7">
                                        <p :class="`lifeProPlusPara${1+header.id+header.id}`" id="acountColorCommon">IRR</p>
                                        <p class="lifeProPlusPara2" id="acountColorCommon">{{Number(target_analysis.data[header.id].irr || 0).toFixed(2)}}%</p>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div :class="`lifeProBtmDiv lifeProBtmDiv${1+header.id} commonBottomTxt`">
                                          <p><input type="text" :value="cv_name[header.id]" class="tableHeadInputs" @blur="e => saveCvName(header.id, e.target.value)"/></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <table class="table sticky-header tableCommonForDisable mt-1 tableCommonHide">
                                    <thead class="heading-tr">
                                      <tr>
                                        <th>Distributions</th>
                                        <th>Net Balance</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr v-for="(item, index) in target_analysis.data[header.id].list" :key="index">
                                        <td><span v-if="$numFormatWithDollar(item.distributions)" :class="`td-bold ${target_analysis.data[header.id].list[index+1] ? `${target_analysis.data[header.id].list[index+1].distributions < 1 ? 'text-danger' : ''}`:''}`">{{$numFormatWithDollar(item.distributions)}}</span></td>
                                        <td data-label="acount">{{ $numFormatWithDollar(item.net_balance) }}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </draggable> 
                    </div>
                  </div>
                  <p class="compSumAnlysPara mt-2">Summary Analysis</p>
                  <div class="mt-2 summary-analysis">
                    <div class="row">
                      <div class="col-3 col-md-2 ps-0 pe-1">
                        <div class="reportTablesDiv reportTablesDiv1 SummaryTableDiv1">
                          <table class="table mt-1 secondTable td-first summaryTableFont">
                            <thead>
                              <th :width="`${$props.sidebar ? 125 : 105}`" style="background: none!important;border: none !important;"></th>
                              <th class="heading-tr shiftBorder" style="border-radius:6px;vertical-align: middle;">Deposits</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="table1Td tableotalTd text-start" data-label="Year">Totals</td>
                                <td class="table1Td" data-label="Age">{{$numFormatWithDollar(summary_data.deposits.totals)}}</td>
                              </tr>
                              <tr>
                                <td colspan="2" class="table1Td totalValueTd" data-label="Age">Total Value</td>
                              </tr>
                              <tr>
                                <td colspan="2" class="table1Td shortFallTd" style="text-align: left;" data-label="Age">Shortfall</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-9 col-md-4 ps-0 pe-0">
                        <div class="reportTablesDiv reportTablesDiv3">
                          <table class="table table3 mt-1 secondTable summaryTableFont">
                            <thead class="heading-tr">
                              <tr>
                                <th colspan="2" style="border-radius:6px;vertical-align: middle;">Distributions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="surrender">{{ $numFormatWithDollar(summary_data.data[0].distribution.total) }}</td>
                                <td class="w-75" data-label="blank">{{ $numFormatWithDollar(summary_data.data[0].net_balance.total) }}</td>
                              </tr>
                              <tr>
                                <td data-label="surrender">{{ $numFormatWithDollar(summary_data.data[0].distribution.total_value) }}</td>
                                <td class="" data-label="blank">{{ $numFormatWithDollar(summary_data.data[0].net_balance.total_value) }}</td>
                              </tr>
                              <tr>
                                <td data-label="surrender">{{ $numFormatWithDollar(summary_data.data[0].distribution.shortfall) }}</td>
                                <td class="" data-label="blank">{{ $numFormatWithDollar(summary_data.data[0].net_balance.shortfall) }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="row summary-row">
                          <div v-for="(header, index) in draggableColumns" :key="header.id" :class="`col-4 ps-1 pe-0 ${deletedItems.includes(header.id) ? 'd-none':''} col-md-${12/(3-deletedItems.length)} commonBottomTableMainTopDiv${header.id} summary-draggable ${ header.active ? '' : 'order-last'} ${ header.active ? '' : 'commonTableCls'}`">
                            <div :class="`reportTablesDiv reportTablesDiv${3+header.id}`">
                              <table class="table tableCommonForDisable mt-1 tableCommonHide summaryTableFont">
                                <thead class="heading-tr">
                                 <tr>
                                  <th colspan="2" style="border-radius:6px;vertical-align: middle;">
                                    Distributions
                                  </th>
                                 </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td width="50%" data-label="acount">{{ $numFormatWithDollar(summary_data.data[header.id].distribution.total)}}</td>
                                    <td width="50%" class="" data-label="">{{ $numFormatWithDollar(summary_data.data[header.id].net_balance.total) }}</td>
                                  </tr>
                                  <tr>
                                    <td width="50%" data-label="acount">{{ $numFormatWithDollar(summary_data.data[header.id].distribution.total_value) }}</td>
                                    <td width="50%" class="" data-label="">{{ $numFormatWithDollar(summary_data.data[header.id].net_balance.total_value) }}</td>
                                  </tr>
                                  <tr>
                                    <td width="50%" class="shortFallValueTd" data-label="acount">{{ $numFormatWithDollar(summary_data.data[header.id].distribution.shortfall) }}</td>
                                    <td width="50%" class="" data-label="">{{ $numFormatWithDollar(summary_data.data[header.id].net_balance.shortfall) }}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-5">
                <div class="px-3 pb-3 pt-3 seeAllBtnMainDiv">
                  <div class="comparativeSeeAllBtn mt-2" id="comparativeSeeAllBtn">
                    <button class="btn form-control" @click="() => showAll = !showAll">{{showAll ? '- SEE LESS' : '+ SEE ALL'}}</button>
                  </div>
                </div>
              </div>
            </div>
            <comparative-disclosure-component :containerFluid="true" v-if="activeTabs[keyId]" :currentTab="1" :hideFee="false"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueDraggableNext } from "vue-draggable-next";
import ComparativeDisclosureComponent from "./ComparativeDisclosureComponent.vue";
import { patch } from "../../../../network/requests";
import { getUrl } from "../../../../network/url";
import { authHeader } from "../../../../services/helper";

let tables = [];
export default {
  props: ["keyId", "sidebar"],
  components: {
    ComparativeDisclosureComponent,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      currentTab: "target_analysis",
      currentFilter: "default",
      draggableColumns: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
      ],
      showAll: false,
      target_analysis: {
        distributions: [
          { year: 1, age: 28, deposits: 0 },
          { year: 1, age: 28, deposits: 0 },
          { year: 1, age: 28, deposits: 0 },
          { year: 1, age: 28, deposits: 0 },
          { year: 1, age: 28, deposits: 0 },
        ],
        data: [],
      },
      summary_data: {
        deposits: { totals: "", total_values: "", shortfall: "" },
        data: [
          {
            id: 0,
            distribution: {
              total: "",
              total_value: "",
              shortfall: "",
            },
            net_balance: {
              total: "",
              total_value: "",
              shortfall: "",
            },
          },
          {
            id: 1,
            distribution: {
              total: 0,
              total_value: 0,
              shortfall: 0,
            },
            net_balance: {
              total: "",
              total_value: "",
              shortfall: "",
            },
          },
          {
            id: 2,
            distribution: {
              total: 0,
              total_value: 0,
              shortfall: 0,
            },
            net_balance: {
              total: "",
              total_value: "",
              shortfall: "",
            },
          },
          {
            id: 3,
            distribution: {
              total: 0,
              total_value: 0,
              shortfall: 62577,
            },
            net_balance: {
              total: "",
              total_value: "",
              shortfall: "",
            },
          },
        ],
      },
    };
  },
  mounted() {
    let cr = this.comparativeTable;
    this.mapData(cr);
    let obj1 = cr.cv_1.comparison;
    let obj2 = cr.cv_2.comparison;
    let obj3 = cr.cv_3.comparison;

    this.$store.dispatch("cvName", {
      index: 0,
      name: cr.lirp_data.insurance_policy_nickname,
    });
    this.$store.dispatch("cvName", { index: 1, name: cr.cv1_name });
    this.$store.dispatch("cvName", { index: 2, name: cr.cv2_name });
    this.$store.dispatch("cvName", { index: 3, name: cr.cv3_name });

    if (!obj2) {
      this.$store.dispatch("reportCvDeleteId", 2);
    }

    if (!obj3) {
      this.$store.dispatch("reportCvDeleteId", 3);
    }

    function getOffset(element) {
      var x = 0;
      var y = 0;
      while (
        element &&
        !isNaN(element.offsetLeft) &&
        !isNaN(element.offsetTop)
      ) {
        x += element.offsetLeft - element.scrollLeft;
        y += element.offsetTop - element.scrollTop;
        element = element.offsetParent;
      }
      console.log(y);
      return { top: y, left: x };
    }

    function Table(element) {
      this.element = element;
      this.originalHeader = element.getElementsByTagName("thead")[0];
      this.floatingHeader = this.originalHeader.cloneNode(true);
      this.top = 0;
      this.bottom = 0;
      this.originalThs = this.originalHeader.getElementsByTagName("th");
      this.floatingThs = this.floatingHeader.getElementsByTagName("th");

      if (!this.element.style.position) {
        this.element.style.position = "relative";
      }
      this.floatingHeader.setAttribute("aria-hidden", "true");
      this.floatingHeader.style.position = "absolute";
      this.floatingHeader.style.top = "0";

      this.refreshHeaderSize();
      this.attachFloatHeader();
    }

    Table.prototype.refreshHeaderSize = function() {
      var offset = getOffset(this.element);
      var trs = this.element.getElementsByTagName("tr");
      var padding;
      this.top = offset.top;
      this.bottom =
        this.element.offsetHeight - trs[trs.length - 1].offsetHeight;
      for (var i = 0; i < this.originalThs.length; i++) {
        var th = this.originalThs[i];
        this.floatingThs[i].style.width = th.offsetWidth + "px";
        this.floatingThs[i].style.height = th.offsetHeight + "px";
      }
    };

    Table.prototype.attachFloatHeader = function() {
      this.element.insertBefore(this.floatingHeader, this.element.firstChild);
    };

    function init() {
      var matches = document.querySelectorAll("table.sticky-header");
      for (var i = 0; i < matches.length; i++) {
        if (matches[i].tagName === "TABLE") {
          tables[i] = new Table(matches[i]);
        }
      }
    }

    setTimeout(() => {
      init();
      console.log(tables);
    }, 3000);

    window.addEventListener("scroll", this.windowScroll);
  },
  methods: {
    testFunction: function() {
      // console.log(this.mapData(this.comparativeTable));
    },
    refreshHeaderSizes: function() {
      for (var i = 0; i < tables.length; i++) {
        tables[i].refreshHeaderSize();
      }
    },
    getScrollTop: function() {
      if (typeof window.pageYOffset !== "undefined") {
        return window.pageYOffset;
      }
      var docElement = document.documentElement;
      if (!docElement.clientHeight) {
        docElement = document.body;
      }
      return docElement.scrollTop;
    },
    windowScroll: function() {
      for (var i = 0; i < tables.length; i++) {
        var windowTop = this.getScrollTop();
        if (windowTop > tables[i].top) {
          // console.log(windowTop, tables[i].top, tables[i].bottom);
          tables[i].floatingHeader.style.top =
            Math.min(windowTop - tables[i].top, tables[i].bottom) + 55 + "px";
        } else {
          tables[i].floatingHeader.style.top = "0";
        }
      }
    },
    handleSidebar: function(status) {
      let sectionHeadingDiv = document.querySelector(".section-heading-div");
      console.log(sectionHeadingDiv);
      this.refreshHeaderSizes();
      return status;
    },
    // to save and update the CV cards name
    saveCvName: function(index, name) {
      this.$store.dispatch("cvName", { index: index, name: name });
      let cvId = this.comparativeTable.vehicle_1_id;

      let url = "vehicle-type1";
      let data = { insurance_policy_nickname: name };
      if (index === 2) {
        cvId = this.comparativeTable.vehicle_2_id;
        url = "vehicle-type2";
      }

      if (index === 3) {
        cvId = this.comparativeTable.vehicle_3_id;
        url = "vehicle-type3";
      }

      if (!index) {
        data = { insurance_policy_nickname: name };
        url = "illustration";
        cvId = this.comparativeTable.illustration_id;
      }

      patch(`${getUrl(url)}${cvId}/`, data, authHeader())
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          this.$toast.error("Something went wrong.");
        });
    },
    // to update the current comparative report type with default filter data
    setCurrentTab: function(tab) {
      if (this.currentTab !== tab) {
        this.currentTab = tab;
        this.setCurrentFilter("default");
      }
    },
    // save the deleted cv id in hidden input
    setActionId: function(id) {
      document.getElementById("comparative_cv_delete_id").value = id;
    },
    // to filter the report data
    setCurrentFilter: function(key) {
      this.currentFilter = key;
      switch (key) {
        case "longevity":
          return this.mapData(
            this.currentTab === "target_analysis"
              ? this.comparativeTableLongevity
              : this.comparativeTableRorLongevity
          );
        case "endingvalue":
          return this.mapData(
            this.currentTab === "target_analysis"
              ? this.comparativeTableEndingValue
              : this.comparativeTableRorEndingValue
          );
        case "deathBenefit":
          return this.mapData(
            this.currentTab === "target_analysis"
              ? this.comparativeTableDeathBenefit
              : this.comparativeTableRorDeathBenefit
          );
        default:
          return this.mapData(this.comparativeTable);
      }
    },
    // to map the API data for the table and cv cards
    mapData: function(ct) {
      let tempData = {
        distributions: [],
        data: [{}, {}, {}, {}],
      };

      let obj = ct.lirp_data ? ct.lirp_data.table_output : false;
      let obj1 = ct.cv_1.comparison.chart_output;
      let obj2 = ct.cv_2.comparison ? ct.cv_2.comparison.chart_output : false;
      let obj3 = ct.cv_3.comparison ? ct.cv_3.comparison.chart_output : false;

      if (obj) {
        let list = [];
        let dst = [];
        let details = {
          id: 0,
          ror: ct.lirp_data.rate_of_return,
          irr: ct.lirp_data.irr_percent,
        };
        obj.forEach((item, index) => {
          let ar = {
            distributions: item[3],
            account_value: item[4],
            surrender_value: item[6],
            death_benefit: item[7],
            net_balance: null,
          };

          let ar2 = {
            year: item[0],
            age: item[1],
            deposits: item[2],
          };

          if (index) {
            list.push(ar);
            dst.push(ar2);
          }
        });
        details.list = list;
        tempData.distributions = dst;
        tempData.data[0] = details;

        this.summary_data.deposits.totals = ct.lirp_data.total_value;
        this.summary_data.deposits.shortfall = ct.lirp_data.shortfall;

        this.summary_data.data[0] = {
          id: 0,
          distribution: {
            total: ct.lirp_data.cummulative_income,
            total_value: ct.lirp_data.total_value,
            shortfall: ct.lirp_data.shortfall,
          },
          net_balance: {
            total: "",
            total_value: "",
            shortfall: "",
          },
        };
      } else {
        tempData.distributions = this.target_analysis.distributions;
        tempData.data[0] = this.target_analysis.data[0];
      }

      if (obj1) {
        let list = [];
        let details = {
          id: 1,
          ror: ct.cv_1.comparison.ror || obj1["Rate of Return"][0],
          irr: ct.cv_1.comparison.irr_percent,
        };

        obj1.year.forEach((item, index) => {
          let ar = {
            distributions: obj1.distributions[index],
            net_balance: obj1.net_balance[index],
          };

          list.push(ar);
        });

        details.list = list;
        tempData.data[1] = details;

        this.summary_data.deposits.totals = ct.cv_1.comparison.total_value;
        this.summary_data.deposits.shortfall =
          ct.cv_1.comparison.diff_from_lirp;

        this.summary_data.data[1] = {
          id: 1,
          distribution: {
            total: ct.cv_1.comparison.cummulative_income,
            total_value: ct.cv_1.comparison.total_value,
            shortfall: ct.cv_1.comparison.diff_from_lirp,
          },
          net_balance: {
            total: "",
            total_value: "",
            shortfall: "",
          },
        };
      }

      if (obj2) {
        let list = [];
        let details = {
          id: 2,
          ror: ct.cv_2.comparison.ror || obj2["Rate of Return"][0],
          irr: ct.cv_2.comparison.irr_percent,
        };
        obj2.distributions.forEach((item, index) => {
          let ar = {
            distributions: item,
            net_balance: obj2.net_balance[index],
          };
          list.push(ar);
        });
        details.list = list;
        tempData.data[2] = details;

        this.summary_data.data[2] = {
          id: 2,
          distribution: {
            total: ct.cv_2.comparison.cummulative_income,
            total_value: ct.cv_2.comparison.total_value,
            shortfall: ct.cv_2.comparison.diff_from_lirp,
          },
          net_balance: {
            total: "",
            total_value: "",
            shortfall: "",
          },
        };
      }

      if (obj3) {
        let list = [];
        let details = {
          id: 3,
          ror: ct.cv_3.comparison.ror || obj3["Rate of Return"][0],
          irr: ct.cv_3.comparison.irr_percent,
        };
        obj3.distributions.forEach((item, index) => {
          let ar = {
            distributions: item,
            net_balance: obj3.net_balance[index],
          };
          list.push(ar);
        });
        details.list = list;
        tempData.data[3] = details;

        this.summary_data.data[3] = {
          id: 3,
          distribution: {
            total: ct.cv_3.comparison.total_value,
            total_value: ct.cv_3.comparison.total_value,
            shortfall: ct.cv_3.comparison.diff_from_lirp,
          },
          net_balance: {
            total: "",
            total_value: "",
            shortfall: "",
          },
        };
      }

      this.target_analysis = tempData;
      return tempData;
    },
  },
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (
        this.$store.state.app.presentation_mode &&
        this.$store.state.app.show_assets1
      ) {
        this.draggableColumns.forEach(element => {
          element.active = false;
        });
      } else {
        this.draggableColumns.forEach(element => {
          element.active = true;
        });
      }
    },
    "$props.sidebar"(value) {
      this.handleSidebar(value);
    },
  },
  computed: {
    comparativeTable() {
      return this.$store.state.data.report.comparative;
    },
    cv_name() {
      return this.$store.state.data.report.cv_names;
    },
    comparativeTableLongevity() {
      return this.$store.state.data.report.comparative_longevity;
    },
    comparativeTableEndingValue() {
      return this.$store.state.data.report.comparative_ending_value;
    },
    comparativeTableDeathBenefit() {
      return this.$store.state.data.report.comparative_death_benefit;
    },
    comparativeTableRorLongevity() {
      return this.$store.state.data.report.comparative_ror_longevity;
    },
    comparativeTableRorEndingValue() {
      return this.$store.state.data.report.comparative_ror_ending_value;
    },
    comparativeTableRorDeathBenefit() {
      return this.$store.state.data.report.comparative_ror_death_benefit;
    },
    deletedItems() {
      return this.$store.state.data.report.deleted_cv_ids;
    },
  },
};
</script>