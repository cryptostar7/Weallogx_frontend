<template lang="">
  <div class="empty" data-class="empty-wrapper" data-empty="0">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="1">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`"
        id="comparativeTableTabView">
        <div :class="`ComparativeTableMainDiv rightDivTop1 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox1" type="checkbox" class="checkbox2 rightCheckBox1"
                    :checked="activeTabs[keyId]" rightCheckAttr="1"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox1" class="rghtTopHeadcommon">Comparative
                Table</label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div>
            <div
              class="commonCollapse comparativeLessDiv comparativeLessDiv2 collapseDiv1 position-relative tableDivHeight1"  :style="{display:activeTabs[keyId] ? 'block':'none'}">
              <hr class="collapseDivHr">
              <div class="px-3 py-3">
                <div class="position-relative">
                  <div class="d-flex align-items-center  float-end">
                    <div class="radioBtnDiv r2 prstnRadioBtnHide" id="button-2">
                      <input type="checkbox" class="checkbox2 showAssetsCheckBox" id="showAssets" />
                      <div class="knobs2"></div>
                      <div class="layer2"></div>
                    </div>
                    <label for="showAssets"
                      class="ms-2 fs-12 semi-bold-fw showAssetsTxt prstnRadioBtnHide cursor-pointer">Show
                      assets one by one</label>
                  </div>
                  <div class="collapseDivmdlHd text-center">Target Analysis</div>
                </div><br>
                <div class="d-flex justify-content-center mt-2">
                  <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist" aria-orientation="vertical">
                    <div class="active" data-bs-toggle="pill" data-bs-target="#v-pills-distribution" type="button"
                      role="tab" aria-controls="v-pills-distribution" aria-selected="true">
                      Distribution
                    </div>
                    <div data-bs-toggle="pill" data-bs-target="#v-pills-rate-of-return" type="button" role="tab"
                      aria-controls="v-pills-rate-of-return" aria-selected="false">Rate of Return
                    </div>
                  </div>
                </div>
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="v-pills-distribution" role="tabpanel"
                    aria-labelledby="pills-home-tab">
                    <div class="d-flex justify-content-center mt-2">
                      <div class="nav mltplSwtchDiv nav-pills" role="tablist" aria-orientation="vertical">
                        <div class="active" id="v-pills-default-tab" data-bs-toggle="pill"
                          data-bs-target="#v-pills-default" type="button" role="tab" aria-controls="v-pills-default"
                          aria-selected="true">Amount</div>
                        <div id="v-pills-longevity-tab" data-bs-toggle="pill" data-bs-target="#v-pills-longevity"
                          type="button" role="tab" aria-controls="v-pills-longevity" aria-selected="true">
                          Longevity
                        </div>
                        <div id="v-pills-endingvalue-tab" data-bs-toggle="pill" data-bs-target="#v-pills-endingvalue"
                          type="button" role="tab" aria-controls="v-pills-endingvalue" aria-selected="true">Ending
                          Value</div>
                        <div id="v-pills-deathBenifit-tab" data-bs-toggle="pill" data-bs-target="#v-pills-deathBenifit"
                          type="button" role="tab" aria-controls="v-pills-deathBenifit" aria-selected="true">Death
                          Benefit</div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="v-pills-rate-of-return" role="tabpanel"
                    aria-labelledby="pills-home-tab">
                    <div class="d-flex justify-content-center mt-2">
                      <div class="nav mltplSwtchDiv nav-pills" role="tablist" aria-orientation="vertical">
                        <div class="active" id="v-pills-default-tab" data-bs-toggle="pill"
                          data-bs-target="#v-pills-default" type="button" role="tab" aria-controls="v-pills-default"
                          aria-selected="true">Default</div>
                        <div id="v-pills-longevity-tab" data-bs-toggle="pill" data-bs-target="#v-pills-longevity"
                          type="button" role="tab" aria-controls="v-pills-longevity" aria-selected="true">
                          Longevity
                        </div>
                        <div id="v-pills-endingvalue-tab" data-bs-toggle="pill" data-bs-target="#v-pills-endingvalue"
                          type="button" role="tab" aria-controls="v-pills-endingvalue" aria-selected="true">Ending
                          Value</div>
                        <div id="v-pills-deathBenifit-tab" data-bs-toggle="pill" data-bs-target="#v-pills-deathBenifit"
                          type="button" role="tab" aria-controls="v-pills-deathBenifit" aria-selected="true">Death
                          Benefit</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid table-fluid mt-5">
                  <div class="row tablesMainDiv">
                    <div class="col-3 col-md-2 pe-1">
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
                                <a href="javascript:void(0)" data-bs-target="#deleteAccountModal" data-bs-toggle="modal"
                                  class="deleteBtnAccount disableBtnsForAll">&nbsp;<svg width="12" height="13"
                                    viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"
                                      stroke="#1660A4" stroke-width="1.25"></path>
                                    <rect x="8.35156" y="5.41406" width="1.25" height="4.70588" rx="0.625"
                                      transform="rotate(90 8.35156 5.41406)" fill="#1660A4"></rect>
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
                              <p>Account</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mt-1">
                        <div class="reportTablesDiv reportTablesDiv1">
                          <table class="table">
                            <thead class="heading-tr">
                              <th>Yr</th>
                              <th>Age</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="table1Td" data-label="Year">1</td>
                                <td class="table1Td" data-label="Age">34</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="col-9 col-md-4 px-1">
                      <div class="reportTablesDiv reportTablesDiv3">
                        <div class="lifeProPlus">
                          <div class="row">
                            <div class="col-12">
                              <div class="d-flex align-items-center justify-content-end mt-2 allActionBtns me-0">
                                <a href="javascript:void(0)" class="editBtnLirp disableBtnsForAll">&nbsp;<svg width="13"
                                    height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425" fill="white"
                                      stroke="#1660A4" stroke-width="1.15"></rect>
                                    <path
                                      d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                      stroke="#1660A4" stroke-width="1.25"></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="row eachCardParaRow">
                            <div class="col-md-5">
                              <p class="lifeProPlusPara1">RATE OF RETURN (RoR)</p>
                              <p class="lifeProPlusPara2">6.15%</p>
                            </div>
                            <div class="col-md-7">
                              <p class="lifeProPlusPara1">INTERNAL RATE OF RETURN (IRR)</p>
                              <p class="lifeProPlusPara2">5.65%</p>
                            </div>
                          </div>
                          <div class="lifeProBtmDiv lifeProBtmDiv1">
                            <p>LifePro+</p>
                          </div>
                        </div>
                        <table class="table table3 mt-1 w-100">
                          <thead class="heading-tr">
                            <th>Distributions</th>
                            <th>Account Value</th>
                            <th>Surrender Value</th>
                            <th>Death Benefit</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="blankTd" data-label="blank">-</td>
                              <td data-label="acount">$65,777</td>
                              <td data-label="surrender">$65,777</td>
                              <td data-label="death">$65,777</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <!-- fffffffffff -->

                    <draggable v-model="rorTabs" tag="div" class="d-flex">
                    <div v-for="header in rorTabs" :key="header"  class="col-4 col-md-2 px-1" >
                      <div class="empty-inner" data-empty="1">
                        <div class="fill-inner" draggable="true" data-fill="1">
                          <div :class="`commonTableMainTopDiv${header}`">
                            <div class="reportTablesDiv reportTablesDiv">
                              <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                <div class="dblLineAbslt">
                                  <img src="@/assets/images/icons/double-line.svg" alt="line">
                                </div>
                                <div class="row">
                                  <div class="col-12">
                                    <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns">
                                      <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                        <input type="checkbox" class="checkbox2 commonRadioBtn1" checked="true" hideattr="1" onclick="tableDivHide(this, event)">
                                        <div class="knobs2"></div>
                                        <div class="layer2"></div>
                                      </div>
                                      <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)"
                                          class="editBtnAccount mx-2 disableBtnsForAll">&nbsp;<svg width="13"
                                            height="13" viewBox="0 0 13 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425"
                                              fill="white" stroke="#1660A4" stroke-width="1.15" />
                                            <path
                                              d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                              stroke="#1660A4" stroke-width="1.25" />
                                          </svg>
                                        </a>
                                        <a href="javascript:void(0)" data-bs-target="#deleteAccountModal"
                                          data-bs-toggle="modal"
                                          class="deleteBtnAccount disableBtnsForAll">&nbsp;<svg width="12"
                                            height="13" viewBox="0 0 12 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                              d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"
                                              stroke="#1660A4" stroke-width="1.25" />
                                            <rect x="8.35156" y="5.41406" width="1.25" height="4.70588" rx="0.625"
                                              transform="rotate(90 8.35156 5.41406)" fill="#1660A4" />
                                          </svg>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row eachCardParaRow">
                                  <div class="col-md-5">
                                    <p class="lifeProPlusPara3" id="acountColorCommon">RoR {{header}}</p>
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
                                      <p>Account</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <table class="table tableCommonForDisable  mt-1 tableCommonHide">
                                <thead class="heading-tr">
                                  <th>Distributions</th>
                                  <th>Net Balance</th>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td class="blankTd" data-label="blank">-</td>
                                    <td data-label="acount">$65,777</td>
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
                  <p class="compSumAnlysPara mt-2">Summary Analysis</p>
                  <div class="mt-2 summary-analysis">
                    <div class="row">
                      <div class="col-3 col-md-2 px-1">
                        <div class="reportTablesDiv reportTablesDiv1 SummaryTableDiv1">
                          <table class="table mt-1 secondTable td-first summaryTableFont">
                            <thead>
                              <th width="80" style="background: none!important;border: none !important;">
                              </th>
                              <th class="heading-tr shiftBorder" style="border-radius:6px;vertical-align: middle;">
                                Deposits</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="table1Td tableotalTd text-start" data-label="Year">Totals
                                </td>
                                <td class="table1Td" data-label="Age">$328,885</td>
                              </tr>
                              <tr>
                                <td colspan="2" class="table1Td totalValueTd" data-label="Age">Total Value
                                </td>
                              </tr>
                              <tr>
                                <td colspan="2" class="table1Td shortFallTd" style="text-align: left;" data-label="Age">
                                  Shortfall</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-9 col-md-4 px-1">
                        <div class="reportTablesDiv reportTablesDiv3">
                          <table class="table table3 mt-1 secondTable summaryTableFont">
                            <thead class="heading-tr">
                              <th colspan="2" style="border-radius:6px;vertical-align: middle;">
                                Distributions
                              </th>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="surrender">$65,777</td>
                                <td class="blankTd w-75" data-label="blank">-</td>
                              </tr>
                              <tr>
                                <td data-label="surrender">$65,777</td>
                                <td class="blankTd" data-label="blank">-</td>
                              </tr>
                              <tr>
                                <td data-label="surrender">-</td>
                                <td class="blankTd" data-label="blank">-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="row summary-row">
                          <div class="col-4 px-1 commonBottomTableMainTopDiv1 summary-draggable">
                            <div class="reportTablesDiv reportTablesDiv4">
                              <table class="table tableCommonForDisable mt-1 tableCommonHide summaryTableFont">
                                <thead class="heading-tr">
                                  <th colspan="2" style="border-radius:6px;vertical-align: middle;">
                                    Distributions
                                  </th>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td width="50%" data-label="acount">$65,777</td>
                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                  </tr>
                                  <tr>
                                    <td width="50%" data-label="acount">$65,777</td>
                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                  </tr>
                                  <tr>
                                    <td width="50%" class="shortFallValueTd" data-label="acount">$65,777
                                    </td>
                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="col-4 px-1 commonBottomTableMainTopDiv2 summary-draggable">
                            <div class="reportTablesDiv reportTablesDiv5">
                              <table class="table tableCommonForDisable mt-1 tableCommonHide summaryTableFont">
                                <thead class="heading-tr">
                                  <th colspan="2" style="border-radius:6px;vertical-align: middle;">
                                    Distributions
                                  </th>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td width="50%" data-label="acount">$65,777</td>
                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                  </tr>
                                  <tr>
                                    <td width="50%" data-label="acount">$65,777</td>
                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                  </tr>
                                  <tr>
                                    <td width="50%" class="shortFallValueTd" data-label="acount">$670,443
                                    </td>
                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="col-4 px-1 commonBottomTableMainTopDiv3 summary-draggable">
                            <div class="reportTablesDiv reportTablesDiv6">
                              <table class="table tableCommonForDisable mt-1 tableCommonHide summaryTableFont">
                                <thead class="heading-tr">
                                  <th colspan="2" style="border-radius:6px;vertical-align: middle;">
                                    Distributions
                                  </th>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td width="50%" data-label="acount">$65,777</td>
                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                  </tr>
                                  <tr>
                                    <td width="50%" data-label="acount">$65,777</td>
                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                  </tr>
                                  <tr>
                                    <td width="50%" class="shortFallValueTd" data-label="acount">$65,777
                                    </td>
                                    <td width="50%" class="blankTd" data-label="blank">-</td>
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
                  <div class="comparativeSeeAllBtn container-fluid  mt-2" id="comparativeSeeAllBtn">
                    <button class="btn form-control" onclick="showMore()">+ SEE ALL</button>
                  </div>
                  <div class="comparativeSeeAllBtn container-fluid" id="comparativeSeeLessBtn">
                    <button class="btn form-control" onclick="showLess()">- SEE Less</button>
                  </div>
                </div>
              </div>
              <div class="bottom-disclosure pt-0 px-3" id="disclosure1" data-dc="1">
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
  </div>
</template>
<script>
import { VueDraggableNext } from "vue-draggable-next";
export default {
  props: ["keyId"],
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      rorTabs: [1, 2, 3],
      dragging: false,
    };
  },
};
</script>
<style lang="">
</style>