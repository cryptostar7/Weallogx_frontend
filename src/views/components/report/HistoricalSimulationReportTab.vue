<template lang="">
  <section :class="`main-section widthClass mainsectionjs2 lftComulativeHistoricalTab2 sectionCommonJs2 ${sidebar.collapse ? 'active':''}`" :style="{display:sidebar.currentTab === 'historical' ? 'block':'none'}">
    <div class="inner-section reportbuilderRightInner">
      <div class="d-block sidebar reportSideBar collapse px-0 darkModeSidebarBg">
        <button class="sidebar-arrow" sideColapseAttr="2" @click="() => sidebar.collapse = !sidebar.collapse" :style="{transform:sidebar.collapse ?'rotate(180deg)':'rotate(360deg)'}"><svg
            class="sidebarArrowImgJs2" width="7" height="11" viewBox="0 0 7 11" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="0.25" y="5.45312" width="7" height="1.5" rx="0.75" transform="rotate(-45 0.25 5.45312)"
              fill="#23669E" />
            <rect x="1.3125" y="4.5" width="7" height="1.5" rx="0.75" transform="rotate(45 1.3125 4.5)"
              fill="#23669E" />
          </svg>
        </button>
        <div class="position-sticky h-100 sidebar-inner sidebarInnerJs2 px-0 py-0 position-relative" :style="{display: sidebar.collapse ? 'none' : 'block'}">
          <div class="reportBuilderLft1 px-10 py-4 ">
            <h3 class="fs-26 bold-fw text-white mb-20">Report Builder</h3>
            <div class="reportBuilderLftSwtch">
              <button class="btn reportSwtchLeft" @click="() => sidebar.currentTab = 'comparative'">Comparative Analysis</button>
              <button class="btn reportSwtchLeft active">Historical Simulations</button>
            </div>
          </div>
          <div class="reportBuilderLft2 px-3 py-4">
            <div class="reportBldrLftscroll checkbox-wrapper-2">
              <div class="empty" data-empty="0">
                <div class="fill" draggable="true" data-fill="1">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs7" data-id="7">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox leftCheckBox7" checked checkAttr="7" onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>Comparative Table</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg7" width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                        <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="empty" data-empty="1">
                <div class="fill" draggable="true" data-fill="2">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs8" data-id="8">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox leftCheckBox8" checked checkAttr="8" onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>Income Analysis</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg8" width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                        <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="empty" data-empty="2">
                <div class="fill" draggable="true" data-fill="3">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs9" data-id="9">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox  leftCheckBox9" checked checkAttr="9" onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>IRR Analysis</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg9" width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                        <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="empty" data-empty="3">
                <div class="fill" draggable="true" data-fill="4">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs10" data-id="10">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox leftCheckBox10" checked checkAttr="10" onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>Total Value</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg10" width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                        <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="empty" data-empty="4">
                <div class="fill" draggable="true" data-fill="5">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs11" data-id="11">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox leftCheckBox11" checked checkAttr="11" onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>Cumulative Values</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg11" width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                        <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="empty" data-empty="5">
                <div class="fill" draggable="true" data-fill="6">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs12" data-id="12">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox leftCheckBox12" checked checkAttr="12" onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>Comparative Values</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg12" width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                        <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main class="ms-sm-autopx-md-4 report-builder-right-area">
        <div class="right-area-inner p-relative">
          <div class="right-area-wrapper">
            <div
              class="section-heading-div section-heading-bg pt-0 d-flex justify-content-between gap-20 flex-wrap flex-md-nowrap align-items-center">
              <div class="d-flex align-items-center">
                <button class="reportBuilderBr" data-bs-target="#reportNameChangeModal" data-bs-toggle="modal"> Br
                </button>
                <div>
                  <h2 class="fs-28 bold-fw m-0 ms-2 reportBuilderBrTxt">Bryant, Roger <span
                      class="fs-20 medium-fw report-scenario-name">Allianz Parse</span></h2>
                </div>
              </div>
            </div>
            <!-- tab 1 -->
            <div class="tab-wrapper-2">
              <div class="empty" data-class="empty-wrapper" data-empty="0">
                <div class="fill" data-class="empty-fill" draggable="true" data-fill="1">
                  <div class="report-client-list-div tab-id-7">
                    <div class="ComparativeTableMainDiv active rightDivTop7">
                      <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                        <div class="d-flex align-items-center">
                          <div class="button-cover2 prstnRadioBtnHide">
                            <div class="radioBtnDiv r2" id="button-2">
                              <input id="rightCheckBox7" type="checkbox" class="checkbox2 rightCheckBox7" checked rightCheckAttr="7"
                                onchange="rightCheckbox(this,event)" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <label for="rightCheckBox7" class="rghtTopHeadcommon">Comparative Table</label>
                        </div>
                        <div class="rightLeftDoubleLIneDegine">
                          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                            <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div class="commonCollapse comparativeLessDiv comparativeLessDiv2 collapseDiv7 position-relative tableDivHeight2">
                          <hr class="collapseDivHr">
                          <div class="px-3 py-3">
                            <div class="position-relative">
                            <div class="d-flex align-items-center  float-end">
                              <div class="radioBtnDiv r2 prstnRadioBtnHide" id="button-2">
                                <input type="checkbox" class="checkbox2 showAssetsCheckBox2" id="showAssets2">
                                <div class="knobs2"></div>
                                <div class="layer2"></div>
                              </div>
                              <label for="showAssets2" class="ms-2 fs-12 semi-bold-fw showAssetsTxt prstnRadioBtnHide cursor-pointer">Show assets one by one</label>
                            </div>
                            <div class="collapseDivmdlHd text-center">Historical Simulations of a Theoretical Synthetic Asset (TSA) <br> as a Proxy for the LIRP</div>
                          </div>
                            <div class="container-fluid table-fluid reportbuilder-container-div">
                              <div class="row tablesMainDiv">
                                <div class="col-3 col-md-2 px-1">
                                  <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr visible-hidden">
                                    <div class="dblLineAbslt">
                                      <img src="@/assets/images/icons/double-line.svg" alt="line">
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns">
                                          <div class="radioBtnDiv r2 greenRadioSwtch" id="button-2">
                                            <input type="checkbox" class="checkbox2" checked="true">
                                            <div class="knobs2"></div>
                                            <div class="layer2"></div>
                                          </div>
                                          <div class="d-flex align-items-center">
                                            <a href="javascript:void(0)" class="editBtnLirp disableBtnsForAll">&nbsp;<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425" fill="white" stroke="#1660A4" stroke-width="1.15"></rect>
                                              <path d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z" stroke="#1660A4" stroke-width="1.25"></path>
                                              </svg>
                                            </a>
                                            <a href="javascript:void(0)" data-bs-target="#deleteAccountModal" data-bs-toggle="modal" class="deleteBtnLirp disableBtnsForAll">&nbsp;<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z" stroke="#1660A4" stroke-width="1.25"></path>
                                                <rect x="8.35156" y="5.41406" width="1.25" height="4.70588" rx="0.625" transform="rotate(90 8.35156 5.41406)" fill="#1660A4"></rect>
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row eachCardParaRow">
                                      <div class="d-flex justify-content-between">
                                        <p class="lirpPara8 m-0 mb-1">Illustration Rate</p>
                                        <p class="lirpPara2 m-0 mb-1">6.12%</p>
                                      </div>
                                      <div class="d-flex justify-content-between">
                                        <p class="lirpPara8 m-0 mb-1">Illustration CAGR</p>
                                        <p class="lirpPara2 m-0 mb-1">6.12%</p>
                                      </div>
                                      <div class="d-flex justify-content-between">
                                        <p class="lirpPara8 m-0 mb-1">IRR</p>
                                        <p class="lirpPara2 m-0 mb-1">5.28%</p>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div class="lifeProBtmDiv lirpBtmDiv8 commonBottomTxt">
                                          <p>Allianz - LIRP</p>
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
                                          <tr>
                                            <td class="table1Td" data-label="Year">2</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">3</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">4</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">5</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">6</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">7</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">8</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">9</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">10</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">11</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">12</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">13</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">14</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">15</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">16</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">17</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">18</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">19</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">20</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">21</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">22</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">23</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">24</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">25</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">26</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">27</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">28</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">29</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">30</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">31</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">32</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">33</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">34</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">35</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">36</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">37</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                          <tr>
                                            <td class="table1Td" data-label="Year">38</td>
                                            <td class="table1Td" data-label="Age">34</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <!-- 1 end -->
                                    <div class="reportTablesDiv ms-2 reportTablesDiv2">
                                      <table class="table">
                                        <thead class="heading-tr">
                                          <th>Deposits</th>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td data-label="Year">$65,777</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-4 col-md-2 px-1">
                                  <div class="commonTableMainTopDiv4">
                                    <div class="reportTablesDiv reportTablesDiv8">
                                      <div class="lifeProPlus position-relative tablesCmnClr">
                                        <div class="row">
                                          <div class="col-12">
                                            <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0">                                     
                                              <div class="d-flex w-100 justify-content-end align-items-center">
                                                <a href="javascript:void(0)"
                                                  class="editBtnLirp disableBtnsForAll">&nbsp;<svg width="13"
                                                    height="13" viewBox="0 0 13 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425"
                                                      fill="white" stroke="#1660A4" stroke-width="1.15" />
                                                    <path
                                                      d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                      stroke="#1660A4" stroke-width="1.25" />
                                                  </svg>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row eachCardParaRow">
                                          <div class="d-flex justify-content-between">
                                            <p class="lirpPara8 m-0 mb-1">Illustration Rate</p>
                                            <p class="lirpPara2 m-0 mb-1">6.12%</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="lirpPara8 m-0 mb-1">Illustration CAGR</p>
                                            <p class="lirpPara2 m-0 mb-1">6.12%</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="lirpPara8 m-0 mb-1">IRR</p>
                                            <p class="lirpPara2 m-0 mb-1">5.28%</p>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-12">
                                            <div class="lifeProBtmDiv lirpBtmDiv8 commonBottomTxt">
                                              <p>Allianz - LIRP</p>
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
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>

                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>

                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>

                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                          <tr>
                                            <td class="blankTd" data-label="blank">-</td>
                                            <td data-label="acount">$65,777</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-4 col-md-2 px-1 drag-col">
                                  <div class="empty-inner" data-empty="1">
                                    <div class="fill-inner" draggable="true" data-fill="1">
                                      <div class="commonTableMainTopDiv5">
                                        <div class="reportTablesDiv reportTablesDiv4">
                                          <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                            <div class="dblLineAbslt">
                                              <img src="@/assets/images/icons/double-line.svg" alt="line">
                                            </div>
                                            <div class="row">
                                              <div class="col-12">
                                                <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0">
                                                  <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                                    <input type="checkbox" class="checkbox2 commonRadioBtn2" checked="true" hideattr="5" onclick="tableDivHide(this, event)">
                                                    <div class="knobs2"></div>
                                                    <div class="layer2"></div>
                                                </div> 
                                                  <div class="d-flex align-items-center">
                                                    <a href="javascript:void(0)"
                                                      class="editBtnAccount disableBtnsForAll">&nbsp;<svg width="13"
                                                        height="13" viewBox="0 0 13 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425"
                                                          fill="white" stroke="#1660A4" stroke-width="1.15" />
                                                        <path
                                                          d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                          stroke="#1660A4" stroke-width="1.25" />
                                                      </svg>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="row eachCardParaRow">
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara3 m-0 mb-1">Strategy Avg</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">8.95%</p>
                                              </div>
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara3 m-0 mb-1">Strategy CARG</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">8.79%</p>
                                              </div>
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara3 m-0 mb-1">IRR</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">6.28%</p>
                                              </div>
                                            </div>
                                            <div class="row">
                                              <div class="col-12">
                                                <div class="lifeProBtmDiv lifeProBtmDiv2 commonBottomTxt">
                                                  <p>TSA - Most Recent</p>
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
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
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
                                <div class="col-4 col-md-2 px-1 drag-col">
                                  <div class="empty-inner" data-empty="2">
                                    <div class="fill-inner" draggable="true" data-fill="2">
                                      <div class="commonTableMainTopDiv6">
                                        <div class="reportTablesDiv reportTablesDiv5">
                                          <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                            <div class="dblLineAbslt">
                                              <img src="@/assets/images/icons/double-line.svg" alt="line">
                                            </div>
                                            <div class="row">
                                              <div class="col-12">
                                                <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0">
                                                <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                                  <input type="checkbox" class="checkbox2 commonRadioBtn2" checked="true" hideattr="6" onclick="tableDivHide(this, event)">
                                                  <div class="knobs2"></div>
                                                  <div class="layer2"></div>
                                                </div> 
                                                  <div class="d-flex align-items-center">
                                                    <a href="javascript:void(0)"
                                                      class="editBtnIra disableBtnsForAll">&nbsp;<svg width="13"
                                                        height="13" viewBox="0 0 13 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425"
                                                          fill="white" stroke="#763CA3" stroke-width="1.15" />
                                                        <path
                                                          d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                          stroke="#763CA3" stroke-width="1.15" />
                                                      </svg>
                                                    </a>
                                                    <!-- <a href="javascript:void(0)" data-bs-target="#deleteIraModal"
                                                      data-bs-toggle="modal" class="deleteBtnIra disableBtnsForAll">&nbsp;<svg
                                                        width="12" height="13" viewBox="0 0 12 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                          d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"
                                                          stroke="#763CA3" stroke-width="1.25" />
                                                        <rect x="8.35156" y="5.41406" width="1.25" height="4.70588" rx="0.625"
                                                          transform="rotate(90 8.35156 5.41406)" fill="#763CA3" />
                                                      </svg>
                                                    </a> -->
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="row eachCardParaRow">
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara5 m-0 mb-1">Strategy Avg</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">8.34%</p>
                                              </div>
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara5 m-0 mb-1">Strategy CARG</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">8.19%</p>
                                              </div>
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara5 m-0 mb-1">IRR</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">5.67%</p>
                                              </div>
                                            </div>
                                            <div class="row">
                                              <div class="col-12">
                                                <div class="lifeProBtmDiv lifeProBtmDiv3 commonBottomTxt">
                                                  <p>TSA - Worst</p>
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
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
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
                                <div class="col-4 col-md-2 px-1 drag-col">
                                  <div class="empty-inner" data-empty="3">
                                    <div class="fill-inner" draggable="true" data-fill="3">
                                      <div class="commonTableMainTopDiv7">
                                        <div class="reportTablesDiv reportTablesDiv7">
                                          <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                            <div class="dblLineAbslt">
                                              <img src="@/assets/images/icons/double-line.svg" alt="line">
                                            </div>
                                            <div class="row">
                                              <div class="col-12">
                                                <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0">
                                                <div class="radioBtnDiv r2 orangeRadioSwtch" id="button-2">
                                                  <input type="checkbox" class="checkbox2 commonRadioBtn2" checked="true" hideattr="7" onclick="tableDivHide(this, event)">
                                                  <div class="knobs2"></div>
                                                  <div class="layer2"></div>
                                                </div>
                                                  <div class="d-flex align-items-center">
                                                    <a href="javascript:void(0)"
                                                      class="editBtnMedian disableBtnsForAll">&nbsp;<svg width="13"
                                                        height="13" viewBox="0 0 13 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425"
                                                          fill="white" stroke="#E8662F" stroke-width="1.15" />
                                                        <path
                                                          d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                          stroke="#E8662F" stroke-width="1.15" />
                                                        <path d="M4.80078 8.50156L5.33049 6.96094L6.40078 8.02L4.80078 8.50156Z"
                                                          stroke="#E8662F" stroke-width="1.15" />
                                                      </svg>
                                                    </a>
                                                   <!--  <a href="javascript:void(0)" data-bs-target="#deleteAnnuityModal"
                                                      data-bs-toggle="modal"
                                                      class="deleteBtnMedian disableBtnsForAll">&nbsp;<svg width="12"
                                                        height="13" viewBox="0 0 12 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                          d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"
                                                          stroke="#E8662F" stroke-width="1.25" />
                                                        <rect x="8.35156" y="5.41406" width="1.25" height="4.70588" rx="0.625"
                                                          transform="rotate(90 8.35156 5.41406)" fill="#E8662F" />
                                                      </svg>
                                                    </a> -->
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="row eachCardParaRow">
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara8 m-0 mb-1">Strategy Avg</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">8.97%</p>
                                              </div>
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara8 m-0 mb-1">Strategy CARG</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">8.81%</p>
                                              </div>
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara8 m-0 mb-1">IRR</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">6.25%</p>
                                              </div>
                                            </div>
                                            <div class="row">
                                              <div class="col-12">
                                                <div class="lifeProBtmDiv lifeProBtmDiv7 commonBottomTxt">
                                                  <p>TSA - Median</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <table class="table tableCommonForDisable mt-1 tableCommonHide">
                                            <thead class="heading-tr">
                                              <th>Distributions</th>
                                              <th>Net Balance</th>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
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
                                <div class="col-4 col-md-2 px-1 drag-col">
                                  <div class="empty-inner" data-empty="4">
                                    <div class="fill-inner" draggable="true" data-fill="4">
                                      <div class="commonTableMainTopDiv8">
                                        <div class="reportTablesDiv reportTablesDiv6">
                                          <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                            <div class="dblLineAbslt">
                                              <img src="@/assets/images/icons/double-line.svg" alt="line">
                                            </div>
                                            <div class="row">
                                              <div class="col-12">
                                                <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0">
                                                <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                                  <input type="checkbox" class="checkbox2 commonRadioBtn2" checked="true" hideattr="8" onclick="tableDivHide(this, event)">
                                                  <div class="knobs2"></div>
                                                  <div class="layer2"></div>
                                                </div> 
                                                  <div class="d-flex align-items-center">
                                                    <a href="javascript:void(0)"
                                                      class="editBtnAnnuity disableBtnsForAll">&nbsp;<svg width="13"
                                                        height="13" viewBox="0 0 13 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425"
                                                          fill="white" stroke="#9D2B2B" stroke-width="1.15" />
                                                        <path
                                                          d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                          stroke="#9D2B2B" stroke-width="1.15" />
                                                        <path d="M4.80078 8.50156L5.33049 6.96094L6.40078 8.02L4.80078 8.50156Z"
                                                          stroke="#9D2B2B" stroke-width="1.15" />
                                                      </svg>
                                                    </a>
                                                   <!--  <a href="javascript:void(0)" data-bs-target="#deleteAnnuityModal"
                                                      data-bs-toggle="modal"
                                                      class="deleteBtnAnnuity disableBtnsForAll">&nbsp;<svg width="12"
                                                        height="13" viewBox="0 0 12 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                          d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"
                                                          stroke="#9D2B2B" stroke-width="1.25" />
                                                        <rect x="8.35156" y="5.41406" width="1.25" height="4.70588" rx="0.625"
                                                          transform="rotate(90 8.35156 5.41406)" fill="#9D2B2B" />
                                                      </svg>
                                                    </a> -->
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="row eachCardParaRow">
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara7 m-0 mb-1">Strategy Avg</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">8.97%</p>
                                              </div>
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara7 m-0 mb-1">Strategy CARG</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">8.81%</p>
                                              </div>
                                              <div class="d-flex justify-content-between">
                                                <p class="lifeProPlusPara7 m-0 mb-1">IRR</p>
                                                <p class="lifeProPlusPara2 m-0 mb-1">6.25%</p>
                                              </div>
                                            </div>
                                            <div class="row">
                                              <div class="col-12">
                                                <div class="lifeProBtmDiv lifeProBtmDiv4 commonBottomTxt">
                                                  <p>TSA - Best</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <table class="table tableCommonForDisable mt-1 tableCommonHide">
                                            <thead class="heading-tr">
                                              <th>Distributions</th>
                                              <th>Net Balance</th>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>

                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td class="blankTd" data-label="blank">-</td>
                                                <td data-label="acount">$65,777</td>
                                              </tr>
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
                              </div>
                              <p class="compSumAnlysPara mt-2">Summary Analysis</p>
                              <div class="mt-2">
                                <div class="row">
                                  <div class="col-3 col-md-2 px-1">
                                    <div class="reportTablesDiv reportTablesDiv1 SummaryTableDiv1">
                                      <table class="table mt-1 secondTable td-first summaryTableFont">
                                        <thead>
                                          <th width="80" style="background: none!important;border: none;"></th>
                                          <th class="heading-tr shiftBorder" style="border-radius:6px;vertical-align: middle;">Deposits</th>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td class="table1Td" data-label="Year" style="border:none">Totals
                                            </td>
                                            <td class="table1Td" data-label="Age">$459,000</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2" class="table1Td totalValueTd" data-label="Age">Total Value</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2" class="table1Td surplusTdMain" data-label="Age">
                                              Surplus</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div class="col-4 col-md-2 px-1">
                                    <div class="commonBottomTableMainTopDiv4">
                                      <div class="reportTablesDiv reportTablesDiv8">
                                        <table
                                          class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
                                          <thead class="heading-tr">
                                            <th colspan="2" style="border-radius:6px;vertical-align: middle;">Distributions
                                            </th>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td width="50%" data-label="acount">$1,9680780</td>
                                              <td width="50%" class="blankTd" data-label="blank">-</td>
                                            </tr>
                                            <tr>
                                              <td width="50%" data-label="acount">$2,115,171</td>
                                              <td width="50%" class="blankTd" data-label="blank">-</td>
                                            </tr>
                                            <tr>
                                              <td width="50%" class="blankTd" data-label="blank">-</td>
                                              <td width="50%" class="blankTd" data-label="acount"> - </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-12 col-md-8">
                                    <div class="row summary-row">
                                      <div class="col-3 px-1 commonBottomTableMainTopDiv5 summary-draggable">
                                        <div class="reportTablesDiv reportTablesDiv4">
                                          <table class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
                                            <thead class="heading-tr">
                                              <th colspan="2" style="border-radius:6px;vertical-align: middle;">Distributions
                                              </th>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td width="50%" data-label="acount">$1,558,272</td>
                                                <td width="50%" class="blankTd" data-label="blank">-</td>
                                              </tr>
                                              <tr>
                                                <td width="50%" data-label="acount">$1,690,452</td>
                                                <td width="50%" class="blankTd" data-label="blank">-</td>
                                              </tr>
                                              <tr>
                                                <td width="50%" class="surplusTd" data-label="acount">$185,953</td>
                                                <td width="50%" class="blankTd" data-label="blank">-</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                      </div>
                                    </div>
                                    <div class="col-3 px-1 commonBottomTableMainTopDiv6 summary-draggable">
                                      <div class="reportTablesDiv reportTablesDiv5">
                                        <table
                                          class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
                                          <thead class="heading-tr">
                                            <th colspan="2" style="border-radius:6px;vertical-align: middle;">Distributions
                                            </th>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td width="50%" data-label="acount">$1,808,000</td>
                                              <td width="50%" class="blankTd" data-label="blank">-</td>
                                            </tr>
                                            <tr>
                                              <td width="50%" data-label="acount">$1,876,404</td>
                                              <td width="50%" class="blankTd" data-label="blank">-</td>
                                            </tr>
                                            <tr>
                                              <td width="50%" class="surplusTd" data-label="acount">$185,952</td>
                                              <td width="50%" class="blankTd" data-label="blank">-</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>                                    
                                    </div>
                                    <div class="col-3 px-1 commonBottomTableMainTopDiv7 summary-draggable">
                                      <div class="reportTablesDiv reportTablesDiv7">
                                        <table
                                          class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
                                          <thead class="heading-tr">
                                            <th colspan="2" style="border-radius:6px;vertical-align: middle;">Distributions
                                            </th>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td width="50%" data-label="acount">$1,984,000</td>
                                              <td width="50%" class="blankTd" data-label="blank">-</td>
                                            </tr>
                                            <tr>
                                              <td width="50%" data-label="acount">$2,088,129</td>
                                              <td width="50%" class="blankTd" data-label="blank">-</td>
                                            </tr>
                                            <tr>
                                              <td width="50%" class="surplusTd" data-label="acount">$397,677</td>
                                              <td width="50%" class="blankTd" data-label="blank">-</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>                                    
                                    </div>
                                    <div class="col-3 px-1 commonBottomTableMainTopDiv8 summary-draggable">
                                      <div class="reportTablesDiv reportTablesDiv6">
                                        <table
                                          class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
                                          <thead class="heading-tr">
                                            <th colspan="2" style="border-radius:6px;vertical-align: middle;">Distributions
                                            </th>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td width="50%" data-label="acount">$2,064,000</td>
                                              <td width="50%" class="blankTd" data-label="blank">-</td>
                                            </tr>
                                            <tr>
                                              <td width="50%" data-label="acount">$2,248,339</td>
                                              <td width="50%" class="blankTd" data-label="blank">-</td>
                                            </tr>
                                            <tr>
                                              <td width="50%" class="surplusTd" data-label="acount">$557,887</td>
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
                              <div class="comparativeSeeAllBtn  mt-2" id="comparativeSeeAllBtn2">
                                <button class="btn form-control" onclick="showMore2()">+ SEE ALL</button>
                              </div>
                              <div class="comparativeSeeAllBtn" id="comparativeSeeLessBtn2">
                                <button class="btn form-control" onclick="showLess2()">- SEE Less</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="bottom-disclosure pt-0 px-3" id="disclosure7" data-dc="7">
                          <div class="disclosure-div">
                            <div class="disclosure-header-div d-flex align-items-center justify-content-between">
                              <h4 class="disclosure-heading">Disclosure</h4>
                              <div class="disclosure-right-actions">
                                <button class="btn round-btn disclosure-edit">
                                  <span>Edit</span>
                                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                    <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                    <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                  </svg>
                                </button>
                                <button class="btn round-btn disclosure-save d-none">
                                  <span>Save</span>
                                  <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                                    <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"></rect>
                                    <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"></rect>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="disclosure-text-wrapper">
                              <div class="disclosure-textarea" contenteditable="true">
                                This chart references data drawn from simulations of a Theoretical Synthetic Asset (TSA) that does not exist and cannot be purchased in the real world. It is not a real world insurance policy. It is not an official illustration. You may not assume the data presented here relating to the TSA infers or expresses any guarantee of how a real world insurance policy would perform. Comparisons made to the official <b>Pacific Life</b> illustration(s), which use hypothetical assumptions that are not guaranteed, are designed to be educational and instructive as to how the insurance policies compared <b>may have</b> performed through different historical periods. The data uses the raw returns of the <b>S&P 500</b>, and simulates the potential returns that the insurance policy <b>may have</b> achieved if the current cap rates, participation rates, floors, fees, and borrowing costs were in place during the historical periods tested. Cap rates, participation rates, and policy fees can and do change. We analyzed <b>546 40</b>-year periods of the index. In the case where a time period portrayed is greater than <b>40</b> years, the data was looped for purposes of the simulation. This simulation of a TSA took the actual current monthly fees of the <b>Pacific Life</b> insurance policy and increased them by 15%. All distributions assume the use of an index/participating loan. We assumed a <b>5.4%</b> borrowing rate in the simulation of the TSA. Presented here are the most recent, worst, median, and best <b>40</b>-year periods with respect to the insurance policy’s intended allocation in the <b>S&P 500</b> index strategy. However, these results are not the results of an actual insurance policy, but those of the TSA, which does not exist in the real world. It is entirely possible that the real world experience of the actual policy could be even worse than the worst <b>40</b>-year period analyzed, just as it is entirely possible that the real world policy could perform better than the best <b>40</b>-year period analyzed.
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
                                    <span>LIRP: actual current costs of insurance, as per the carrier illustration</span></p>
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
              <!-- 2nd tab -->
              <div class="empty" data-class="empty-wrapper" data-empty="1">
                <div class="fill" data-class="empty-fill" draggable="true" data-fill="2">
                  <div class="report-client-list-div tab-id-8">
                    <div class="ComparativeTableMainDiv active rightDivTop8">
                      <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                        <div class="d-flex align-items-center">
                          <div class="button-cover2 prstnRadioBtnHide">
                            <div class="radioBtnDiv r2" id="button-2">
                              <input id="rightCheckBox8" type="checkbox" checked class="checkbox2 rightCheckBox8" rightCheckAttr="8"
                                onchange="rightCheckbox(this,event)" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <label for="rightCheckBox8" class="rghtTopHeadcommon">Income Analysis <span class="ms-3 equalThingTabTxt">(Graph)</span></label>
                        </div>
                        <div class="rightLeftDoubleLIneDegine">
                          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                            <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                          </svg>
                        </div>
                      </div>
                      <div class="collapseDivMain collapseDiv8">
                        <hr class="collapseDivHr">
                        <div class="px-3 pt-3 pb-2">
                          <div class="container-fluid">
                            <div class="d-flex justify-content-between flex-gap-12">
                              <div class="flex-1">
                                <div class="distributionCard1 equalDistCard1 position-relative">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Annual Income</p>
                                      <p>LIRP</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard13" checked bigProgBar="13" onchange="bigProgressbar(this,event)" />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-2 d-flex ">
                                    <div class="CardProgressBar lessWidth greenProgress1 boxProgressCommon13">
                                      <div class="CardProgress"></div>
                                      <!-- <p class="lineUnderBars"></p> -->
                                    </div>
                                    <p class="ms-2 CardProgressnym carValue1">$71,256</p>
                                  </div>
                                  <div class="d-flex justify-content-center addNotesMainDiv" style="bottom: 9px">
                                    <button type="button" class="AddNoteBtn">Add Note</button>
                                    <div class="add-note-input-div d-none">
                                      <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                      <div class="add-note-input-inner">
                                        <input type="text" class="add-note-input form-control flex-1">
                                        <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="flex-1">
                                <div class="distributionCard1 equalDistCard2 position-relative">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Annual Income</p>
                                      <p class="blueRadioSwtchpara">Most Recent</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard14" checked bigProgBar="14"
                                            onchange="bigProgressbar(this,event)" />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnBlue" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                            stroke="#9D9D9D" />
                                          <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="mt-2 d-flex ">
                                    <div class="CardProgressBar lessWidth blueProgress1 boxProgressCommon14">
                                      <div class="CardProgress blueProgress2"></div>
                                      <!-- <p class="lineUnderBars"></p> -->
                                    </div>
                                    <p class="ms-2 CardProgressnym blueRadioSwtchpara">$85,044
                                    </p>
                                  </div>
                                  <div class="d-flex justify-content-center addNotesMainDiv" style="bottom: 9px">
                                    <button type="button" class="AddNoteBtn">Add Note</button>
                                    <div class="add-note-input-div d-none">
                                      <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                      <div class="add-note-input-inner">
                                        <input type="text" class="add-note-input form-control flex-1">
                                        <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="flex-1">
                                <div class="distributionCard1 equalDistCard3 position-relative">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Annual Income</p>
                                      <p class="voiletRadioSwtchpara">Worst</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard15" checked bigProgBar="15"
                                            onchange="bigProgressbar(this,event)" />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnVoilet" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                            stroke="#9D9D9D" />
                                          <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="mt-2 d-flex ">
                                    <div class="CardProgressBar lessWidth voiletProgress1 boxProgressCommon15">
                                      <div class="CardProgress voiletProgress2"> </div>
                                      <!-- <p class="lineUnderBars"></p> -->
                                    </div>
                                    <p class="ms-2 CardProgressnym voiletRadioSwtchpara">$465,000
                                    </p>

                                  </div>
                                  <div class="d-flex justify-content-center addNotesMainDiv" style="bottom: 9px">
                                    <button type="button" class="AddNoteBtn">Add Note</button>
                                    <div class="add-note-input-div d-none">
                                      <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                      <div class="add-note-input-inner">
                                        <input type="text" class="add-note-input form-control flex-1">
                                        <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                      </div>
                                    </div>
                                      </div>
                                </div>
                              </div>
                              <div class="flex-1">
                                <div class="distributionCard1 equalDistCard5 position-relative">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Annual Income</p>
                                      <p class="orangeRadioSwtchpara">Median</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv r2 orangeRadioSwtch" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard16" checked bigProgBar="16"
                                            onchange="bigProgressbar(this,event)" />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D"></path>
                                          <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D"></rect>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="mt-2 d-flex ">
                                    <div class="CardProgressBar lessWidth orangeProgress1 boxProgressCommon16">
                                      <div class="CardProgress orangeProgress2"> </div>
                                      <!-- <p class="lineUnderBars"></p> -->
                                    </div>
                                    <p class="ms-2 CardProgressnym orangeRadioSwtchpara">$465,000
                                    </p>
                                  </div>
                                  <div class="d-flex justify-content-center addNotesMainDiv" style="bottom: 9px">
                                    <button type="button" class="AddNoteBtn">Add Note</button>
                                    <div class="add-note-input-div d-none">
                                      <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                      <div class="add-note-input-inner">
                                        <input type="text" class="add-note-input form-control flex-1">
                                        <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="flex-1">
                                <div class="distributionCard1 equalDistCard4 position-relative">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Annual Income</p>
                                      <p class="redRadioSwtchpara">Best</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard17" checked bigProgBar="17"
                                            onchange="bigProgressbar(this,event)" />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                            stroke="#9D9D9D" />
                                          <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="mt-2 d-flex ">
                                    <div class="CardProgressBar lessWidth redProgress1 boxProgressCommon17">
                                      <div class="CardProgress redProgress2"> </div>
                                      <!-- <p class="lineUnderBars"></p> -->
                                    </div>
                                    <p class="ms-2 CardProgressnym redRadioSwtchpara">$85,044
                                    </p>
                                  </div>
                                  <div class="d-flex justify-content-center addNotesMainDiv" style="bottom: 9px">
                                    <button type="button" class="AddNoteBtn">Add Note</button>
                                    <div class="add-note-input-div d-none">
                                      <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                      <div class="add-note-input-inner">
                                        <input type="text" class="add-note-input form-control flex-1">
                                        <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
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
                                <div class="d-flex comulativeProgBrdrDivs">
                                  <p class="comulativeProgBrdr"></p>
                                </div>
                                <div class="d-flex comulativeProgBrdrDivs m-0 p-0">
                                  <p class="comulativeProgBrdr"></p>
                                </div>
                              </div>
                              <div class="CompProgressAbsltCls income">
                                <div class="progressAllBarsDivMain">
                                  <div class="d-flex justify-content-between w-100">
                                    <div class=" bgImgNoneAndTabRadius cumulativeValuesProgrees progBarSecEachDiv13 bigBarsAreaJsCls13 eachBarMainBgNone">
                                      <div class="cumulativeprogreeDivcommon cumulativeProgLifePro bigBarHeightJs13">
                                        <div class="bottomComulativeIncome BottomcumulativeLifePro">
                                          <p>$<span class="bigBarNumberJsCls13">2,172,830</span></p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv14 cumulativeProgCommon14 bigBarsAreaJsCls14 eachBarMainBgNone">
                                      <div class="cumulativeprogreeDivcommon cumulativeProgAccount bigBarHeightJs14">
                                        <div class="bottomComulativeIncome BottomcumulativeAccount">
                                          <p>$<span class="bigBarNumberJsCls14">3,172,830</span></p>
                                        </div>
                                      </div>
                                      <div class="d-none">
                                        <p class="secProgressPercentDynamic14">100</p>%
                                      </div>
                                    </div>
                                    <div
                                      class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv15 cumulativeProgCommon15 bigBarsAreaJsCls15 eachBarMainBgNone">
                                      <div class="cumulativeprogreeDivcommon cumulativeProgIra bigBarHeightJs15">
                                        <div class="bottomComulativeIncome BottomcumulativeIra">
                                          <p>$<span class="bigBarNumberJsCls15">4,328,300</span></p>
                                        </div>
                                      </div>
                                      <div class="d-none">
                                        <p class="secProgressPercentDynamic15">0</p>%
                                      </div>
                                    </div>
                                    <div
                                      class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv16 cumulativeProgCommon16 bigBarsAreaJsCls16 eachBarMainBgNone">
                                      <div class="cumulativeprogreeDivcommon cumulativeProgMedian bigBarHeightJs16">
                                        <div class="bottomComulativeIncome BottomcumulativeMedian">
                                          <p>$<span class="bigBarNumberJsCls16">2,172,830</span></p>
                                        </div>
                                      </div>
                                      <div class="d-none">
                                        <p class="secProgressPercentDynamic16">0</p>%
                                      </div>
                                    </div>
                                    <div
                                      class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv17 cumulativeProgCommon17 bigBarsAreaJsCls17 eachBarMainBgNone">
                                      <div class="cumulativeprogreeDivcommon cumulativeProgAnnuity bigBarHeightJs17">
                                        <div class="bottomComulativeIncome BottomcumulativeAnnuity">
                                          <p>$<span class="bigBarNumberJsCls17">3,328,300</span></p>
                                        </div>
                                      </div>
                                      <div class="d-none">
                                        <p class="secProgressPercentDynamic17">0</p>%
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="bottom-disclosure px-3" id="disclosure8" data-dc="8">
                          <div class="container-fluid">
                            <div class="disclosure-div">
                              <div class="disclosure-header-div d-flex align-items-center justify-content-between">
                                <h4 class="disclosure-heading">Disclosure</h4>
                                <div class="disclosure-right-actions">
                                  <button class="btn round-btn disclosure-edit">
                                    <span>Edit</span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn disclosure-save d-none">
                                    <span>Save</span>
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                                      <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"></rect>
                                      <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"></rect>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div class="disclosure-text-wrapper">
                                <div class="disclosure-textarea" contenteditable="true">
                                  This chart references data drawn from simulations of a Theoretical Synthetic Asset (TSA) that does not exist and cannot be purchased in the real world. It is not a real world insurance policy. It is not an official illustration. You may not assume the data presented here relating to the TSA infers or expresses any guarantee of how a real world insurance policy would perform. Comparisons made to the official <b>Pacific Life</b> illustration(s), which use hypothetical assumptions that are not guaranteed, are designed to be educational and instructive as to how the insurance policies compared <b>may have</b> performed through different historical periods. The data uses the raw returns of the <b>S&P 500</b>, and simulates the potential returns that the insurance policy <b>may have</b> achieved if the current cap rates, participation rates, floors, fees, and borrowing costs were in place during the historical periods tested. Cap rates, participation rates, and policy fees can and do change. We analyzed <b>546 40</b>-year periods of the index. In the case where a time period portrayed is greater than <b>40</b> years, the data was looped for purposes of the simulation. This simulation of a TSA took the actual current monthly fees of the <b>Pacific Life</b> insurance policy and increased them by 15%. All distributions assume the use of an index/participating loan. We assumed a <b>5.4%</b> borrowing rate in the simulation of the TSA. Presented here are the most recent, worst, median, and best <b>40</b>-year periods with respect to the insurance policy’s intended allocation in the <b>S&P 500</b> index strategy. However, these results are not the results of an actual insurance policy, but those of the TSA, which does not exist in the real world. It is entirely possible that the real world experience of the actual policy could be even worse than the worst <b>40</b>-year period analyzed, just as it is entirely possible that the real world policy could perform better than the best <b>40</b>-year period analyzed.
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
                                      <span>LIRP: actual current costs of insurance, as per the carrier illustration</span></p>
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
              <!-- tab 3 -->
              <div class="empty" data-class="empty-wrapper" data-empty="2">
                <div class="fill" data-class="empty-fill" draggable="true" data-fill="3">
                  <div class="report-client-list-div tab-id-9">
                    <div class="ComparativeTableMainDiv active rightDivTop9 ">
                      <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                        <div class="d-flex align-items-center">
                          <div class="button-cover2 prstnRadioBtnHide">
                            <div class="radioBtnDiv r2" id="button-2">
                              <input id="rightCheckBox9" type="checkbox" class="checkbox2 rightCheckBox9" rightCheckAttr="9"
                                onchange="rightCheckbox(this,event)" checked />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <label for="rightCheckBox9" class="rghtTopHeadcommon">IRR Analysis<span class="ms-3 equalThingTabTxt">(Graph)</span></label>
                        </div>
                        <div class="rightLeftDoubleLIneDegine">
                          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                            <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                          </svg>
                        </div>
                      </div>
                      <div class="collapseDivMain collapseDiv9">
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
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2 commonRadioBtn1 irrBarCard1" checked irrProgBar="1" onchange="irrBigProgressbar(this,event)" />
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
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2 commonRadioBtn1 irrBarCard2" checked irrProgBar="2"
                                            onchange="irrBigProgressbar(this,event)" />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnBlue" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
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
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2 commonRadioBtn1 irrBarCard3" checked irrProgBar="3" onchange="irrBigProgressbar(this,event)" />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnVoilet" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
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
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2 commonRadioBtn1 irrBarCard4" checked irrProgBar="4"
                                            onchange="irrBigProgressbar(this,event)" />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
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
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2 commonRadioBtn1 irrBarCard5" checked irrProgBar="5" onchange="irrBigProgressbar(this,event)" />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
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
                                          <span class="irrEachBarValue1">5.47%</span> </div>
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
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn disclosure-save d-none">
                                    <span>Save</span>
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                                      <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"></rect>
                                      <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"></rect>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div class="disclosure-text-wrapper">
                                <div class="disclosure-textarea" contenteditable="true">
                                  This chart references data drawn from simulations of a Theoretical Synthetic Asset (TSA) that does not exist and cannot be purchased in the real world. It is not a real world insurance policy. It is not an official illustration. You may not assume the data presented here relating to the TSA infers or expresses any guarantee of how a real world insurance policy would perform. Comparisons made to the official <b>Pacific Life</b> illustration(s), which use hypothetical assumptions that are not guaranteed, are designed to be educational and instructive as to how the insurance policies compared <b>may have</b> performed through different historical periods. The data uses the raw returns of the <b>S&P 500</b>, and simulates the potential returns that the insurance policy <b>may have</b> achieved if the current cap rates, participation rates, floors, fees, and borrowing costs were in place during the historical periods tested. Cap rates, participation rates, and policy fees can and do change. We analyzed <b>546 40</b>-year periods of the index. In the case where a time period portrayed is greater than <b>40</b> years, the data was looped for purposes of the simulation. This simulation of a TSA took the actual current monthly fees of the <b>Pacific Life</b> insurance policy and increased them by 15%. All distributions assume the use of an index/participating loan. We assumed a <b>5.4%</b> borrowing rate in the simulation of the TSA. Presented here are the most recent, worst, median, and best <b>40</b>-year periods with respect to the insurance policy’s intended allocation in the <b>S&P 500</b> index strategy. However, these results are not the results of an actual insurance policy, but those of the TSA, which does not exist in the real world. It is entirely possible that the real world experience of the actual policy could be even worse than the worst <b>40</b>-year period analyzed, just as it is entirely possible that the real world policy could perform better than the best <b>40</b>-year period analyzed.
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
                                      <span>LIRP: actual current costs of insurance, as per the carrier illustration</span></p>
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
              <!-- tab 4 -->
              <div class="empty" data-class="empty-wrapper" data-empty="3">
                <div class="fill" data-class="empty-fill" draggable="true" data-fill="4">
                  <div class="report-client-list-div tab-id-10">
                    <div class="ComparativeTableMainDiv active rightDivTop10">
                      <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                        <div class="d-flex align-items-center">
                          <div class="button-cover2 prstnRadioBtnHide">
                            <div class="radioBtnDiv r2" id="button-2">
                              <input id="rightCheckBox10" type="checkbox" checked class="checkbox2 rightCheckBox10" rightCheckAttr="10" onchange="rightCheckbox(this,event)" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <label for="rightCheckBox10" class="rghtTopHeadcommon">Total Value<span class="ms-3 equalThingTabTxt">(Graph)</span></label>
                        </div>
                        <div class="rightLeftDoubleLIneDegine">
                          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2"/>
                            <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2"/>
                          </svg>
                        </div>
                      </div>
                      <div class="collapseDivMain collapseDiv10">
                        <hr class="collapseDivHr">
                        <div class="px-3 pt-3 pb-2">
                          <div class="container-fluid" id="totalValueFluid">
                            <div class="d-flex justify-content-between flex-gap-12">
                              <div class="flex-1">
                                <div class="distributionCard1 equalDistCard1 position-relative">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Total Value</p>
                                      <p>LIRP</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2" checked/>
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-2 d-flex ">
                                    <div class="CardProgressBar lessWidth greenProgress1 totalValueProgress1">
                                      <div class="CardProgress"></div>
                                      <p class="lineUnderBars"></p>
                                    </div>
                                    <p class="ms-2 CardProgressnym carValue1">$1,000,000</p>
                                  </div>
                                  <div class="d-flex justify-content-center addNotesMainDiv" style="bottom: 9px;">
                                    <button type="button" class="AddNoteBtn">Add Note</button>
                                    <div class="add-note-input-div d-none">
                                      <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                      <div class="add-note-input-inner">
                                        <input type="text" class="add-note-input form-control flex-1">
                                        <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="flex-1">
                                <div class="distributionCard1 equalDistCard2 position-relative">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Total Value</p>
                                      <p class="blueRadioSwtchpara">Most Recent</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2" checked/>
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnBlue" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                          <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="mt-2 d-flex ">
                                    <div class="CardProgressBar lessWidth blueProgress1 boxProgressCommon15 totalValueProgress2">
                                      <div class="CardProgress blueProgress2"></div>
                                      <p class="lineUnderBars"></p>
                                    </div>
                                    <p class="ms-2 CardProgressnym blueRadioSwtchpara">$1,300,000
                                    </p>
                                  </div>
                                  <div class="d-flex justify-content-center addNotesMainDiv" style="bottom: 9px;">
                                    <button type="button" class="AddNoteBtn">Add Note</button>
                                    <div class="add-note-input-div d-none">
                                      <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                      <div class="add-note-input-inner">
                                        <input type="text" class="add-note-input form-control flex-1">
                                        <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="flex-1">
                                <div class="distributionCard1 equalDistCard3 position-relative">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Total Value</p>
                                      <p class="voiletRadioSwtchpara">Worst</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2" checked/>
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnVoilet" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                            stroke="#9D9D9D" />
                                          <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="mt-2 d-flex ">
                                    <div class="CardProgressBar lessWidth voiletProgress1 boxProgressCommon16 totalValueProgress3">
                                      <div class="CardProgress voiletProgress2"> </div>
                                      <p class="lineUnderBars"></p>
                                    </div>
                                    <p class="ms-2 CardProgressnym voiletRadioSwtchpara">$1,150,000
                                    </p>
                                  </div>
                                  <div class="d-flex justify-content-center addNotesMainDiv" style="bottom: 9px;">
                                    <button type="button" class="AddNoteBtn">Add Note</button>
                                    <div class="add-note-input-div d-none">
                                      <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                      <div class="add-note-input-inner">
                                        <input type="text" class="add-note-input form-control flex-1">
                                        <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="flex-1">
                                <div class="distributionCard1 equalDistCard5 position-relative">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Total Value</p>
                                      <p class="orangeRadioSwtchpara">Median</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv r2 orangeRadioSwtch" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2" checked/>
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                            stroke="#9D9D9D" />
                                          <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="mt-2 d-flex ">
                                    <div class="CardProgressBar lessWidth orangeProgress1 boxProgressCommon17 totalValueProgress4">
                                      <div class="CardProgress orangeProgress2"> </div>
                                      <p class="lineUnderBars"></p>
                                    </div>
                                    <p class="ms-2 CardProgressnym orangeRadioSwtchpara">$1,570,000
                                    </p>
                                  </div>
                                  <div class="d-flex justify-content-center addNotesMainDiv" style="bottom: 9px;">
                                    <button type="button" class="AddNoteBtn">Add Note</button>
                                    <div class="add-note-input-div d-none">
                                      <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                      <div class="add-note-input-inner">
                                        <input type="text" class="add-note-input form-control flex-1">
                                        <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="flex-1">
                                <div class="distributionCard1 equalDistCard4 position-relative">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Total Value</p>
                                      <p class="redRadioSwtchpara">Best</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn2" checked/>
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                            stroke="#9D9D9D" />
                                          <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="mt-2 d-flex ">
                                    <div class="CardProgressBar lessWidth redProgress1 totalValueProgress5">
                                      <div class="CardProgress redProgress2"> </div>
                                      <p class="lineUnderBars"></p>
                                    </div>
                                    <p class="ms-2 CardProgressnym redRadioSwtchpara">$2,110,000
                                    </p>
                                  </div>
                                  <div class="d-flex justify-content-center addNotesMainDiv" style="bottom: 9px;">
                                    <button type="button" class="AddNoteBtn">Add Note</button>
                                    <div class="add-note-input-div d-none">
                                      <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                      <div class="add-note-input-inner">
                                        <input type="text" class="add-note-input form-control flex-1">
                                        <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="container-fluid">
                            <div class="graph-container-div">
                              <canvas id="totalValueChart" width="500" height="130"></canvas>
                            </div>
                          </div>
                        </div>

                        <div class="bottom-disclosure pt-0 px-3" id="disclosure10" data-dc="10">
                          <div class="container-fluid">
                            <div class="disclosure-div">
                              <div class="disclosure-header-div d-flex align-items-center justify-content-between">
                                <h4 class="disclosure-heading">Disclosure</h4>
                                <div class="disclosure-right-actions">
                                  <button class="btn round-btn disclosure-edit">
                                    <span>Edit</span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn disclosure-save d-none">
                                    <span>Save</span>
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                                      <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"></rect>
                                      <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"></rect>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div class="disclosure-text-wrapper">
                                <div class="disclosure-textarea" contenteditable="true">
                                  This chart references data drawn from simulations of a Theoretical Synthetic Asset (TSA) that does not exist and cannot be purchased in the real world. It is not a real world insurance policy. It is not an official illustration. You may not assume the data presented here relating to the TSA infers or expresses any guarantee of how a real world insurance policy would perform. Comparisons made to the official <b>Pacific Life</b> illustration(s), which use hypothetical assumptions that are not guaranteed, are designed to be educational and instructive as to how the insurance policies compared <b>may have</b> performed through different historical periods. The data uses the raw returns of the <b>S&P 500</b>, and simulates the potential returns that the insurance policy <b>may have</b> achieved if the current cap rates, participation rates, floors, fees, and borrowing costs were in place during the historical periods tested. Cap rates, participation rates, and policy fees can and do change. We analyzed <b>546 40</b>-year periods of the index. In the case where a time period portrayed is greater than <b>40</b> years, the data was looped for purposes of the simulation. This simulation of a TSA took the actual current monthly fees of the <b>Pacific Life</b> insurance policy and increased them by 15%. All distributions assume the use of an index/participating loan. We assumed a <b>5.4%</b> borrowing rate in the simulation of the TSA. Presented here are the most recent, worst, median, and best <b>40</b>-year periods with respect to the insurance policy’s intended allocation in the <b>S&P 500</b> index strategy. However, these results are not the results of an actual insurance policy, but those of the TSA, which does not exist in the real world. It is entirely possible that the real world experience of the actual policy could be even worse than the worst <b>40</b>-year period analyzed, just as it is entirely possible that the real world policy could perform better than the best <b>40</b>-year period analyzed.
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
                                      <span>LIRP: actual current costs of insurance, as per the carrier illustration</span></p>
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
              <!-- tab 5-->
              <div class="empty" data-class="empty-wrapper" data-empty="4">
                <div class="fill" data-class="empty-fill" draggable="true" data-fill="5">
                  <div class="report-client-list-div tab-id-11">
                    <div class="ComparativeTableMainDiv active rightDivTop11">
                      <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                        <div class="d-flex align-items-center">
                          <div class="button-cover2 prstnRadioBtnHide">
                            <div class="radioBtnDiv r2" id="button-2">
                              <input id="rightCheckBox11" type="checkbox" checked class="checkbox2 rightCheckBox11" rightCheckAttr="11"
                                onchange="rightCheckbox(this,event)" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <label for="rightCheckBox11" class="rghtTopHeadcommon">Cumulative Values</label>
                        </div>
                        <div class="rightLeftDoubleLIneDegine">
                          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                            <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                          </svg>
                        </div>
                      </div>
                      <div class="collapseDivMain collapseDiv11">
                        <hr class="collapseDivHr">
                        <div class="px-3 pt-3 pb-2">
                          <div class="d-flex justify-content-center mt-2">
                            <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist"
                              aria-orientation="vertical">
                              <div class="active" id="historyCumulativeIncomeTab" data-bs-toggle="pill"
                                data-bs-target="#historyCumulativeIncome" type="button" role="tab"
                                aria-controls="historyTotalValueTab" aria-selected="true"> Cumulative Income </div>
                              <div id="historyTotalValueTab" data-bs-toggle="pill"
                                data-bs-target="#historyTotalValue" type="button" role="tab"
                                aria-controls="historyCumulativeIncomeTab" aria-selected="false"> Total Value</div>
                            </div>
                          </div>
                          <div class="tab-content" id="historyCumulativeValues">
                            <div class="tab-pane fade show active" role="tabpanel" aria-labelledby="historyCumulativeIncomeTab" id="historyCumulativeIncome">
                              <div class="container-fluid">
                                <div class="d-flex justify-content-between flex-gap-12">
                                  <div class="mt-3 flex-1">
                                    <div class="distributionCard1 equalDistCard1 position-relative d-flex flex-column">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p class="lh-1 mb-1">Cumulative Income</p>
                                          <p>LIRP</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard18" checked bigProgBar="18" onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="pt-2 mt-auto d-flex">
                                        <div class="pos-top CardProgressBar lessWidth greenProgress1 boxProgressCommon18">
                                          <div class="CardProgress"></div>
                                          <!-- <p class="lineUnderBars"></p> -->
                                        </div>
                                        <div>
                                          <p class="ms-2 comValCardPara1 position-up">Cumulative Income</p>
                                          <p class="ms-2 CardProgressnym greenRadioSwtchpara position-up">$85,044 </p>
                                        </div>
                                      </div>
                                      <div class="d-flex justify-content-center addNotesMainDiv">
                                        <button type="button" class="AddNoteBtn">Add Note</button>
                                        <div class="add-note-input-div d-none">
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-3 flex-1">
                                    <div class="distributionCard1 equalDistCard2 position-relative d-flex flex-column">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p class="lh-1 mb-1">Cumulative Income</p>
                                          <p class="blueRadioSwtchpara">Most Recent</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard19" checked bigProgBar="19"
                                                onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnBlue" data-bs-target="#deleteAccountModal"  data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                      <div class="pt-2 mt-auto d-flex">
                                        <div class="pos-top CardProgressBar lessWidth blueProgress1 boxProgressCommon19">
                                          <div class="CardProgress blueProgress2"></div>
                                          <!-- <p class="lineUnderBars"></p> -->
                                        </div>
                                        <div>
                                          <p class="ms-2 comValCardPara1 position-up">Cumulative Income</p>
                                          <p class="ms-2 CardProgressnym blueRadioSwtchpara position-up">$85,044 </p>
                                        </div>
                                      </div>
                                      <div class="d-flex justify-content-center addNotesMainDiv">
                                        <button type="button" class="AddNoteBtn">Add Note</button>
                                        <div class="add-note-input-div d-none">
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-3 flex-1">
                                    <div class="distributionCard1 equalDistCard3 position-relative d-flex flex-column">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p class="lh-1 mb-1">Cumulative Income</p>
                                          <p class="voiletRadioSwtchpara">Worst</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard20" checked bigProgBar="20" onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnVoilet" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                                stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                      <div class="pt-2 mt-auto d-flex">
                                        <div class="pos-top CardProgressBar lessWidth voiletProgress1 boxProgressCommon20">
                                          <div class="CardProgress voiletProgress2"> </div>
                                          <!-- <p class="lineUnderBars"></p> -->
                                        </div>
                                        <div>
                                          <p class="ms-2 comValCardPara1 position-up">Cumulative Income</p>
                                          <p class="ms-2 CardProgressnym voiletRadioSwtchpara position-up">$85,044 </p>
                                        </div>

                                      </div>
                                      <div class="d-flex justify-content-center addNotesMainDiv">
                                        <button type="button" class="AddNoteBtn">Add Note</button>
                                        <div class="add-note-input-div d-none">
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-auto flex-1">
                                    <div class="distributionCard1 equalDistCard5 position-relative">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p class="lh-1 mb-1">Cumulative Income</p>
                                          <p class="orangeRadioSwtchpara">Median</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 orangeRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard21" checked bigProgBar="21" onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnGreen"  data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                      <div class="pt-2 mt-auto d-flex">
                                        <div class="pos-top CardProgressBar lessWidth orangeProgress1 boxProgressCommon21">
                                          <div class="CardProgress orangeProgress2"> </div>
                                          <!-- <p class="lineUnderBars"></p> -->
                                        </div>
                                        <div>
                                          <p class="ms-2 comValCardPara1 position-up">Cumulative Income</p>
                                          <p class="ms-2 CardProgressnym orangeRadioSwtchpara position-up">$85,044 </p>
                                        </div>
                                      </div>
                                      <div class="d-flex justify-content-center addNotesMainDiv">
                                        <button type="button" class="AddNoteBtn">Add Note</button>
                                        <div class="add-note-input-div d-none">
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-3 flex-1">
                                    <div class="distributionCard1 equalDistCard4 position-relative d-flex flex-column">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p class="lh-1 mb-1">Cumulative Income</p>
                                          <p class="redRadioSwtchpara">Best</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard22" checked bigProgBar="22" onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                      <div class="pt-2 mt-auto d-flex">
                                        <div class="pos-top CardProgressBar lessWidth redProgress1 boxProgressCommon22">
                                          <div class="CardProgress redProgress2"> </div>
                                          <!-- <p class="lineUnderBars"></p> -->
                                        </div>
                                        <div>
                                          <p class="ms-2 comValCardPara1 position-up">Cumulative Income</p>
                                          <p class="ms-2 CardProgressnym redRadioSwtchpara position-up">$85,044 </p>
                                        </div>
                                      </div>
                                      <div class="d-flex justify-content-center addNotesMainDiv">
                                        <button type="button" class="AddNoteBtn">Add Note</button>
                                        <div class="add-note-input-div d-none">
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
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
                                  <div class="CompProgressAbsltCls cumulative">
                                    <div class="progressAllBarsDivMain">
                                      <div class="d-flex justify-content-between w-100">
                                        <div
                                          class=" bgImgNoneAndTabRadius cumulativeValuesProgrees progBarSecEachDiv18 bigBarsAreaJsCls18 eachBarMainBgNone">
                                          <div class="cumulativeprogreeDivcommon cumulativeProgLifePro bigBarHeightJs18">
                                            <div class="bottomComulativeIncome BottomcumulativeLifePro">
                                              <p>$<span class="bigBarNumberJsCls18">2,172,830</span></p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv19 cumulativeProgCommon2 bigBarsAreaJsCls19 eachBarMainBgNone">
                                          <div class="cumulativeprogreeDivcommon cumulativeProgAccount bigBarHeightJs19">
                                            <div class="bottomComulativeIncome BottomcumulativeAccount">
                                              <p>$<span class="bigBarNumberJsCls19">3,172,830</span></p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv20 cumulativeProgCommon3 bigBarsAreaJsCls20 eachBarMainBgNone">
                                          <div class="cumulativeprogreeDivcommon cumulativeProgIra bigBarHeightJs20">
                                            <div class="bottomComulativeIncome BottomcumulativeIra">
                                              <p>$<span class="bigBarNumberJsCls20">4,328,300</span></p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv21 cumulativeProgCommon5 bigBarsAreaJsCls21 eachBarMainBgNone">
                                          <div class="cumulativeprogreeDivcommon cumulativeProgMedian bigBarHeightJs21">
                                            <div class="bottomComulativeIncome BottomcumulativeMedian">
                                              <p>$<span class="bigBarNumberJsCls21">2,172,830</span></p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv22 cumulativeProgCommon22 bigBarsAreaJsCls22 eachBarMainBgNone">
                                          <div class="cumulativeprogreeDivcommon cumulativeProgAnnuity bigBarHeightJs22">
                                            <div class="bottomComulativeIncome BottomcumulativeAnnuity">
                                              <p>$<span class="bigBarNumberJsCls22">3,328,300</span></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="tab-pane fade" role="tabpanel" aria-labelledby="historyTotalValueTab" id="historyTotalValue">
                              <div class="container-fluid">
                                <div class="d-flex justify-content-between flex-gap-12">
                                  <div class="mt-3 flex-1">
                                    <div class="distributionCard1 equalDistCard1 position-relative">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Total Value</p>
                                          <p>LIRP</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard23" checked bigProgBar="23" onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="mt-2 d-flex">
                                        <div class="CardProgressBar lessWidth greenProgress1 boxProgressCommon23">
                                          <div class="CardProgress"></div>
                                          <p class="lineUnderBars"></p>
                                        </div>
                                        <div class="position-up">
                                          <p class="ms-2 comValCardPara1">Total Value</p>
                                          <p class="ms-2 CardProgressnym greenRadioSwtchpara">$101,044</p>
                                        </div>
                                      </div>
                                      <div class="d-flex justify-content-center addNotesMainDiv">
                                        <button type="button" class="AddNoteBtn">Add Note</button>
                                        <div class="add-note-input-div d-none">
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-3 flex-1">
                                    <div class="distributionCard1 equalDistCard2 position-relative">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Total Value</p>
                                          <p class="blueRadioSwtchpara">Most Recent</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard24" checked bigProgBar="24" onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnBlue" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                      <div class="mt-2 d-flex">
                                        <div class="CardProgressBar lessWidth blueProgress1 boxProgressCommon24">
                                          <div class="CardProgress blueProgress2"></div>
                                          <p class="lineUnderBars"></p>
                                        </div>
                                        <div class="position-up">
                                          <p class="ms-2 comValCardPara1">Total Value</p>
                                          <p class="ms-2 CardProgressnym blueRadioSwtchpara">$95,841 </p>
                                        </div>
                                      </div>
                                      <div class="d-flex justify-content-center addNotesMainDiv">
                                        <button type="button" class="AddNoteBtn">Add Note</button>
                                        <div class="add-note-input-div d-none">
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-3 flex-1">
                                    <div class="distributionCard1 equalDistCard3 position-relative">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Total Value</p>
                                          <p class="voiletRadioSwtchpara">Worst</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard25" checked bigProgBar="25" onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnVoilet" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                      <div class="mt-2 d-flex ">
                                        <div class="CardProgressBar lessWidth voiletProgress1 boxProgressCommon25">
                                          <div class="CardProgress voiletProgress2"> </div>
                                          <p class="lineUnderBars"></p>
                                        </div>
                                        <div class="position-up">
                                          <p class="ms-2 comValCardPara1">Total Value</p>
                                          <p class="ms-2 CardProgressnym voiletRadioSwtchpara">$98,479</p>
                                        </div>
                                      </div>
                                      <div class="d-flex justify-content-center addNotesMainDiv">
                                        <button type="button" class="AddNoteBtn">Add Note</button>
                                        <div class="add-note-input-div d-none">
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-3 flex-1">
                                    <div class="distributionCard1 equalDistCard5 position-relative">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Total Value</p>
                                          <p class="orangeRadioSwtchpara">Median</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 orangeRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard26" checked bigProgBar="26" onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnGreen"  data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
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
                                        <div class="CardProgressBar lessWidth orangeProgress1 boxProgressCommon26">
                                          <div class="CardProgress orangeProgress2"> </div>
                                          <p class="lineUnderBars"></p>
                                        </div>
                                        <div class="position-up">
                                          <p class="ms-2 comValCardPara1">Total Value</p>
                                          <p class="ms-2 CardProgressnym orangeRadioSwtchpara">$89,112 </p>
                                        </div>

                                      </div>
                                      <div class="d-flex justify-content-center addNotesMainDiv">
                                        <button type="button" class="AddNoteBtn">Add Note</button>
                                        <div class="add-note-input-div d-none">
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-3 flex-1">
                                    <div class="distributionCard1 equalDistCard4 position-relative">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Total Value</p>
                                          <p class="redRadioSwtchpara">Best</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2 bigBaCard27" checked bigProgBar="27" onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                                stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                      <div class="mt-2 d-flex ">
                                        <div class="CardProgressBar lessWidth redProgress1 boxProgressCommon27">
                                          <div class="CardProgress redProgress2"> </div>
                                          <p class="lineUnderBars"></p>
                                        </div>
                                        <div class="position-up">
                                          <p class="ms-2 comValCardPara1">Total Value</p>
                                          <p class="ms-2 CardProgressnym redRadioSwtchpara">$90,514</p>
                                        </div>
                                      </div>
                                      <div class="d-flex justify-content-center addNotesMainDiv">
                                        <button type="button" class="AddNoteBtn">Add Note</button>
                                        <div class="add-note-input-div d-none">
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
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
                                  <div class="CompProgressAbsltCls cumulative">
                                    <div class="progressAllBarsDivMain">
                                      <div class="d-flex justify-content-between w-100">
                                        <div
                                          class=" bgImgNoneAndTabRadius cumulativeValuesProgrees progBarSecEachDiv23 bigBarsAreaJsCls23 eachBarMainBgNone">
                                          <div class="cumulativeprogreeDivcommon cumulativeProgLifePro bigBarHeightJs23">
                                            <div class="bottomComulativeIncome BottomcumulativeLifePro">
                                              <p>$<span class="bigBarNumberJsCls23">4,415,830</span></p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv24 cumulativeProgCommon2 bigBarsAreaJsCls24 eachBarMainBgNone">
                                          <div class="cumulativeprogreeDivcommon cumulativeProgAccount bigBarHeightJs24">
                                            <div class="bottomComulativeIncome BottomcumulativeAccount">
                                              <p>$<span class="bigBarNumberJsCls24">3,511,730</span></p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv25 cumulativeProgCommon3 bigBarsAreaJsCls25 eachBarMainBgNone">
                                          <div class="cumulativeprogreeDivcommon cumulativeProgIra bigBarHeightJs25">
                                            <div class="bottomComulativeIncome BottomcumulativeIra">
                                              <p>$<span class="bigBarNumberJsCls25">2,300,417</span></p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv26 cumulativeProgCommon5 bigBarsAreaJsCls26 eachBarMainBgNone">
                                          <div class="cumulativeprogreeDivcommon cumulativeProgMedian bigBarHeightJs26">
                                            <div class="bottomComulativeIncome BottomcumulativeMedian">
                                              <p>$<span class="bigBarNumberJsCls26">3,547,765</span></p>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv27 cumulativeProgCommon27 bigBarsAreaJsCls27 eachBarMainBgNone">
                                          <div class="cumulativeprogreeDivcommon cumulativeProgAnnuity bigBarHeightJs27">
                                            <div class="bottomComulativeIncome BottomcumulativeAnnuity">
                                              <p>$<span class="bigBarNumberJsCls27">2,826,654</span></p>
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
                        
                        <div class="bottom-disclosure px-3" id="disclosure11" data-dc="11">
                          <div class="container-fluid">
                            <div class="disclosure-div">
                              <div class="disclosure-header-div d-flex align-items-center justify-content-between">
                                <h4 class="disclosure-heading">Disclosure</h4>
                                <div class="disclosure-right-actions">
                                  <button class="btn round-btn disclosure-edit">
                                    <span>Edit</span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn disclosure-save d-none">
                                    <span>Save</span>
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                                      <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"></rect>
                                      <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"></rect>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div class="disclosure-text-wrapper">
                                <div class="disclosure-textarea" contenteditable="true">
                                  This chart references data drawn from simulations of a Theoretical Synthetic Asset (TSA) that does not exist and cannot be purchased in the real world. It is not a real world insurance policy. It is not an official illustration. You may not assume the data presented here relating to the TSA infers or expresses any guarantee of how a real world insurance policy would perform. Comparisons made to the official <b>Pacific Life</b> illustration(s), which use hypothetical assumptions that are not guaranteed, are designed to be educational and instructive as to how the insurance policies compared <b>may have</b> performed through different historical periods. The data uses the raw returns of the <b>S&P 500</b>, and simulates the potential returns that the insurance policy <b>may have</b> achieved if the current cap rates, participation rates, floors, fees, and borrowing costs were in place during the historical periods tested. Cap rates, participation rates, and policy fees can and do change. We analyzed <b>546 40</b>-year periods of the index. In the case where a time period portrayed is greater than <b>40</b> years, the data was looped for purposes of the simulation. This simulation of a TSA took the actual current monthly fees of the <b>Pacific Life</b> insurance policy and increased them by 15%. All distributions assume the use of an index/participating loan. We assumed a <b>5.4%</b> borrowing rate in the simulation of the TSA. Presented here are the most recent, worst, median, and best <b>40</b>-year periods with respect to the insurance policy’s intended allocation in the <b>S&P 500</b> index strategy. However, these results are not the results of an actual insurance policy, but those of the TSA, which does not exist in the real world. It is entirely possible that the real world experience of the actual policy could be even worse than the worst <b>40</b>-year period analyzed, just as it is entirely possible that the real world policy could perform better than the best <b>40</b>-year period analyzed.
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
                                      <span>LIRP: actual current costs of insurance, as per the carrier illustration</span></p>
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
              <!-- tab 6-->
              <div class="empty" data-class="empty-wrapper" data-empty="5">
                <div class="fill" data-class="empty-fill" draggable="true" data-fill="6">
                  <div class="report-client-list-div tab-id-12">
                    <div class="ComparativeTableMainDiv active rightDivTop12">
                      <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                        <div class="d-flex align-items-center">
                          <div class="button-cover2 prstnRadioBtnHide">
                            <div class="radioBtnDiv r2" id="button-2">
                              <input id="rightCheckBox12" type="checkbox" checked class="checkbox2 rightCheckBox12" rightCheckAttr="12"
                                onchange="rightCheckbox(this,event)" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <label for="rightCheckBox12" class="rghtTopHeadcommon">Comparative Values</label>
                        </div>
                        <div class="rightLeftDoubleLIneDegine">
                          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                            <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                          </svg>
                        </div>
                      </div>
                      <div class="comparativeLessDiv collapseDiv12">
                        <div class="d-flex justify-content-center mt-2">
                          <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist"
                            aria-orientation="vertical">
                            <div class="active" data-bs-toggle="pill" data-bs-target="#v-pills-compTable" type="button"
                              role="tab" aria-controls="v-pills-compTable" aria-selected="true">
                              Table
                            </div>
                            <div data-bs-toggle="pill" data-bs-target="#v-pills-compGraph" type="button" role="tab"
                              aria-controls="v-pills-compGraph" aria-selected="false">Graph</div>
                          </div>
                        </div>
                        <div class="commonCollapse comparativeLessDiv3 position-relative">
                          <!-- <hr class="collapseDivHr"> -->
                          <div class="tab-content">
                            <div class="tab-pane fade show active" id="v-pills-compTable" role="tabpanel"
                              aria-labelledby="pills-home-tab">
                              <div class="d-flex justify-content-center mt-2">
                                <div class="nav mltplSwtchDiv nav-pills" role="tablist"
                                  aria-orientation="vertical">
                                  <div class="active" id="v-pills-mostRecent-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-mostRecent" type="button" role="tab"
                                    aria-controls="v-pills-mostRecent" aria-selected="true">Most Recent</div>
                                  <div id="v-pills-worst-tab" data-bs-toggle="pill" data-bs-target="#v-pills-worst" type="button" role="tab" aria-controls="v-pills-worst" aria-selected="true">Worst</div>
                                  <div id="v-pills-median-tab" data-bs-toggle="pill" data-bs-target="#v-pills-median" type="button" role="tab" aria-controls="v-pills-median" aria-selected="true">Median</div>
                                  <div id="v-pills-best-tab" data-bs-toggle="pill" data-bs-target="#v-pills-best" type="button" role="tab" aria-controls="v-pills-best" aria-selected="true">Best</div>
                                </div>
                              </div>                                
                              <!-- Comparative Values Table starts  -->
                              <div class="tableCollapseDiv tableDivHeight3">
                                <div class="container-fluid table-fluid reportbuilder-container-div mt-5">
                                  <div class="d-flex justify-content-between tablesMainDiv">
                                    <div class="px-1 w-100">
                                      <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr visible-hidden">
                                        <div class="dblLineAbslt">
                                          <img src="@/assets/images/icons/double-line.svg" alt="line">
                                        </div>
                                        <div class="row">
                                          <div class="col-12">
                                            <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns">
                                            <div class="radioBtnDiv r2 greenRadioSwtch" id="button-2">
                                                <input type="checkbox" class="checkbox2 commonRadioBtn2" checked="true">
                                                <div class="knobs2"></div>
                                                <div class="layer2"></div>
                                            </div>
                                              <div class="d-flex align-items-center">
                                                <a href="javascript:void(0)" data-bs-target="#deleteAccountModal" data-bs-toggle="modal" class="deleteBtnLirp disableBtnsForAll">&nbsp;<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z" stroke="#1660A4" stroke-width="1.25"></path>
                                                    <rect x="8.35156" y="5.41406" width="1.25" height="4.70588" rx="0.625" transform="rotate(90 8.35156 5.41406)" fill="#1660A4"></rect>
                                                  </svg>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row eachCardParaRow">
                                          <div class="d-flex justify-content-between">
                                            <p class="lirpPara8 m-0 mb-1">Strategy Avg</p>
                                            <p class="lirpPara2 m-0 mb-1">10.15%</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="lirpPara8 m-0 mb-1">Strateguy CAGR</p>
                                            <p class="lirpPara2 m-0 mb-1">9.57%</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="lirpPara8 m-0 mb-1">IRR</p>
                                            <p class="lirpPara2 m-0 mb-1">8.09%</p>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-12">
                                            <div class="lifeProBtmDiv lirpBtmDiv8 commonBottomTxt">
                                              <p>&nbsp;</p>
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
                                              <tr>
                                                <td class="table1Td" data-label="Year">2</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">3</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">4</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">5</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">6</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">7</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">8</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">9</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">10</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">11</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">12</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">13</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">14</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">15</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">16</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">17</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">18</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">19</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">20</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">21</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">22</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">23</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">24</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">25</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">26</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">27</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">28</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">29</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">30</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">31</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">32</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">33</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">34</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">35</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">36</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">37</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                              <tr>
                                                <td class="table1Td" data-label="Year">38</td>
                                                <td class="table1Td" data-label="Age">34</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <!-- 1 end -->
                                        <div class="reportTablesDiv ms-2 reportTablesDiv2">
                                          <table class="table">
                                            <thead class="heading-tr">
                                              <th>Deposits</th>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                              <tr>
                                                <td data-label="Year">$65,777</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="px-1 w-100">
                                      <div class="tab-content">
                                      <!-- most recent tab -->
                                      <div class="tab-pane fade show active" id="v-pills-mostRecent" role="tabpanel" aria-labelledby="pills-home-tab">
                                          <div class="reportTablesDiv reportTablesDiv8">
                                            <div class="lifeProPlus position-relative tablesCmnClr">
                                              <div class="row">
                                                <div class="col-12">
                                                  <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0">
                                                    <div class="d-flex w-100 justify-content-end align-items-center">
                                                      <a href="javascript:void(0)"
                                                        class="editBtnLirp disableBtnsForAll">&nbsp;<svg width="13"
                                                          height="13" viewBox="0 0 13 13" fill="none"
                                                          xmlns="http://www.w3.org/2000/svg">
                                                          <rect x="0.575" y="2.57598" width="9.85" height="9.85"
                                                            rx="1.425" fill="white" stroke="#1660A4"
                                                            stroke-width="1.15" />
                                                          <path
                                                            d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                            stroke="#1660A4" stroke-width="1.25" />
                                                        </svg>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="row eachCardParaRow">
                                                <div class="d-flex justify-content-between">
                                                  <p class="lirpPara8 m-0 mb-1">Strategy Avg</p>
                                                  <p class="lirpPara2 m-0 mb-1">10.15%</p>
                                                </div>
                                                <div class="d-flex justify-content-between">
                                                  <p class="lirpPara8 m-0 mb-1">Strateguy CAGR</p>
                                                  <p class="lirpPara2 m-0 mb-1">9.57%</p>
                                                </div>
                                                <div class="d-flex justify-content-between">
                                                  <p class="lirpPara8 m-0 mb-1">IRR</p>
                                                  <p class="lirpPara2 m-0 mb-1">8.09%</p>
                                                </div>
                                              </div>
                                              <div class="row">
                                                <div class="col-12">
                                                  <div class="lifeProBtmDiv lirpBtmDiv8 commonBottomTxt">
                                                    <p>TSA- Most Recent</p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <table class="table tableCommonForDisable  mt-1 tableCommonHide">
                                              <thead class="heading-tr">
                                                <th>Distributions</th>
                                                <th>Account Value</th>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>

                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                                <tr>
                                                  <td class="blankTd" data-label="blank">-</td>
                                                  <td data-label="acount">$65,777</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                      </div>
                                        <!-- Worst recent tab -->
                                        <div class="tab-pane fade" id="v-pills-worst" role="tabpanel"
                                          aria-labelledby="pills-home-tab">
                                            <div class="reportTablesDiv reportTablesDiv8">
                                              <div class="lifeProPlus position-relative tablesCmnClr">
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0">
                                                      <div class="d-flex w-100 justify-content-end align-items-center">
                                                        <a href="javascript:void(0)"
                                                          class="editBtnLirp disableBtnsForAll">&nbsp;<svg width="13"
                                                            height="13" viewBox="0 0 13 13" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.575" y="2.57598" width="9.85" height="9.85"
                                                              rx="1.425" fill="white" stroke="#1660A4"
                                                              stroke-width="1.15" />
                                                            <path
                                                              d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                              stroke="#1660A4" stroke-width="1.25" />
                                                          </svg>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="row eachCardParaRow">
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lirpPara8 m-0 mb-1">Strategy Avg</p>
                                                    <p class="lirpPara2 m-0 mb-1">10.15%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lirpPara8 m-0 mb-1">Strateguy CAGR</p>
                                                    <p class="lirpPara2 m-0 mb-1">9.57%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lirpPara8 m-0 mb-1">IRR</p>
                                                    <p class="lirpPara2 m-0 mb-1">8.09%</p>
                                                  </div>
                                                </div>
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="lifeProBtmDiv lirpBtmDiv8 commonBottomTxt">
                                                      <p>TSA- Worst</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <table class="table tableCommonForDisable  mt-1 tableCommonHide">
                                                <thead class="heading-tr">
                                                  <th>Distributions</th>
                                                  <th>Account Value</th>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>

                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                        </div>
                                        <!-- Median recent tab -->
                                        <div class="tab-pane fade" id="v-pills-median" role="tabpanel"
                                          aria-labelledby="pills-home-tab">
                                            <div class="reportTablesDiv reportTablesDiv8">
                                              <div class="lifeProPlus position-relative tablesCmnClr">
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0">
                                                      <div class="d-flex w-100 justify-content-end align-items-center">
                                                        <a href="javascript:void(0)"
                                                          class="editBtnLirp disableBtnsForAll">&nbsp;<svg width="13"
                                                            height="13" viewBox="0 0 13 13" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.575" y="2.57598" width="9.85" height="9.85"
                                                              rx="1.425" fill="white" stroke="#1660A4"
                                                              stroke-width="1.15" />
                                                            <path
                                                              d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                              stroke="#1660A4" stroke-width="1.25" />
                                                          </svg>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="row eachCardParaRow">
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lirpPara8 m-0 mb-1">Strategy Avg</p>
                                                    <p class="lirpPara2 m-0 mb-1">10.15%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lirpPara8 m-0 mb-1">Strateguy CAGR</p>
                                                    <p class="lirpPara2 m-0 mb-1">9.57%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lirpPara8 m-0 mb-1">IRR</p>
                                                    <p class="lirpPara2 m-0 mb-1">8.09%</p>
                                                  </div>
                                                </div>
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="lifeProBtmDiv lirpBtmDiv8 commonBottomTxt">
                                                      <p>TSA- Median</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <table class="table tableCommonForDisable  mt-1 tableCommonHide">
                                                <thead class="heading-tr">
                                                  <th>Distributions</th>
                                                  <th>Account Value</th>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>

                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                        </div>
                                        <!-- Best recent tab -->
                                        <div class="tab-pane fade" id="v-pills-best" role="tabpanel"
                                          aria-labelledby="pills-home-tab">
                                            <div class="reportTablesDiv reportTablesDiv8">
                                              <div class="lifeProPlus position-relative tablesCmnClr">
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0">
                                                      <div class="d-flex w-100 justify-content-end align-items-center">
                                                        <a href="javascript:void(0)"
                                                          class="editBtnLirp disableBtnsForAll">&nbsp;<svg width="13"
                                                            height="13" viewBox="0 0 13 13" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.575" y="2.57598" width="9.85" height="9.85"
                                                              rx="1.425" fill="white" stroke="#1660A4"
                                                              stroke-width="1.15" />
                                                            <path
                                                              d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                              stroke="#1660A4" stroke-width="1.25" />
                                                          </svg>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="row eachCardParaRow">
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lirpPara8 m-0 mb-1">Strategy Avg</p>
                                                    <p class="lirpPara2 m-0 mb-1">10.15%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lirpPara8 m-0 mb-1">Strateguy CAGR</p>
                                                    <p class="lirpPara2 m-0 mb-1">9.57%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lirpPara8 m-0 mb-1">IRR</p>
                                                    <p class="lirpPara2 m-0 mb-1">8.09%</p>
                                                  </div>
                                                </div>
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="lifeProBtmDiv lirpBtmDiv8 commonBottomTxt">
                                                      <p>TSA- Best</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <table class="table tableCommonForDisable  mt-1 tableCommonHide">
                                                <thead class="heading-tr">
                                                  <th>Distributions</th>
                                                  <th>Account Value</th>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>

                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
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
                                    <div class="px-1 w-100 drag-col">
                                      <div class="empty-inner" data-empty="1">
                                        <div class="fill-inner" draggable="true" data-fill="1">
                                          <div class="commonTableMainTopDiv9">
                                            <div class="reportTablesDiv reportTablesDiv4">
                                              <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                                <div class="dblLineAbslt">
                                                  <img src="@/assets/images/icons/double-line.svg" alt="line">
                                                </div>
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns">
                                                    <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                                        <input type="checkbox" class="checkbox2 commonRadioBtn2" checked="true" hideattr="9" onclick="tableDivHide(this, event)">
                                                        <div class="knobs2"></div>
                                                        <div class="layer2"></div>
                                                    </div>
                                                      <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0)"
                                                          class="hideBtnAccount commonShowBtn showBtn10" showAttr="10"
                                                          onclick="tableDivShow(this, event)">
                                                          <svg width="19" height="12" viewBox="0 0 19 12" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                              d="M9.29743 1C5.44212 1 2.79224 3.65157 1.60785 5.14103C1.1445 5.72373 1.15294 6.52522 1.62562 7.10039C2.83626 8.57358 5.52378 11.2 9.29743 11.2C13.0335 11.2 15.8155 8.62559 17.1066 7.14471C17.625 6.55025 17.6338 5.69829 17.1248 5.09586C15.8597 3.59865 13.1141 1 9.29743 1Z"
                                                              fill="white" stroke="#1660A4" stroke-width="1.25" />
                                                            <circle cx="9.40547" cy="6.10078" r="2.55" fill="white"
                                                              stroke="#1660A4" stroke-width="1.25" />
                                                            <rect x="0.625" y="0.333984" width="21" height="1.25" rx="0.625"
                                                              transform="rotate(30 0.625 0.333984)" fill="#1660A4" />
                                                          </svg>
                                                        </a>
                                                        <a href="javascript:void(0)"
                                                          class="editBtnAccount mx-2 disableBtnsForAll">&nbsp;<svg
                                                            width="13" height="13" viewBox="0 0 13 13" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.575" y="2.57598" width="9.85" height="9.85"
                                                              rx="1.425" fill="white" stroke="#1660A4"
                                                              stroke-width="1.15" />
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
                                                            <rect x="8.35156" y="5.41406" width="1.25" height="4.70588"
                                                              rx="0.625" transform="rotate(90 8.35156 5.41406)"
                                                              fill="#1660A4" />
                                                          </svg>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="row eachCardParaRow">
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lifeProPlusPara3 m-0 mb-1">Strategy Avg</p>
                                                    <p class="lifeProPlusPara2 m-0 mb-1">8.95%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lifeProPlusPara3 m-0 mb-1">Strategy CAGR</p>
                                                    <p class="lifeProPlusPara2 m-0 mb-1">8.79%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lifeProPlusPara3 m-0 mb-1">IRR</p>
                                                    <p class="lifeProPlusPara2 m-0 mb-1">6.28%</p>
                                                  </div>
                                                </div>
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="lifeProBtmDiv lifeProBtmDiv2 commonBottomTxt">
                                                      <p>Brokerage Account</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <table class="table tableCommonForDisable  mt-1 tableCommonHide">
                                                <thead class="heading-tr">
                                                  <th>Distributions</th>
                                                  <th>Account Value</th>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
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
                                    <div class="px-1 w-100 drag-col">
                                      <div class="empty-inner" data-empty="2">
                                        <div class="fill-inner" draggable="true" data-fill="2">
                                          <div class="commonTableMainTopDiv10">
                                            <div class="reportTablesDiv reportTablesDiv5">
                                              <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                                <div class="dblLineAbslt">
                                                  <img src="@/assets/images/icons/double-line.svg" alt="line">
                                                </div>
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns">
                                                    <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                                        <input type="checkbox" class="checkbox2 commonRadioBtn2" checked="true" hideattr="10" onclick="tableDivHide(this, event)">
                                                        <div class="knobs2"></div>
                                                        <div class="layer2"></div>
                                                    </div>
                                                      <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0)"
                                                          class="hideBtnIra commonShowBtn showBtn11" showAttr="11"
                                                          onclick="tableDivShow(this, event)">
                                                          <svg width="19" height="12" viewBox="0 0 19 12" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                              d="M9.29743 1C5.44212 1 2.79224 3.65157 1.60785 5.14103C1.1445 5.72373 1.15294 6.52522 1.62562 7.10039C2.83626 8.57358 5.52378 11.2 9.29743 11.2C13.0335 11.2 15.8155 8.62559 17.1066 7.14471C17.625 6.55025 17.6338 5.69829 17.1248 5.09586C15.8597 3.59865 13.1141 1 9.29743 1Z"
                                                              fill="white" stroke="#763CA3" stroke-width="1.25" />
                                                            <circle cx="9.40547" cy="6.10078" r="2.55" fill="white"
                                                              stroke="#763CA3" stroke-width="1.25" />
                                                            <rect x="0.625" y="0.333984" width="21" height="1.25" rx="0.625"
                                                              transform="rotate(30 0.625 0.333984)" fill="#763CA3" />
                                                          </svg>
                                                        </a>
                                                        <a href="javascript:void(0)"
                                                          class="editBtnIra mx-2 disableBtnsForAll">&nbsp;<svg width="13"
                                                            height="13" viewBox="0 0 13 13" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.575" y="2.57598" width="9.85" height="9.85"
                                                              rx="1.425" fill="white" stroke="#763CA3"
                                                              stroke-width="1.15" />
                                                            <path
                                                              d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                              stroke="#763CA3" stroke-width="1.15" />
                                                          </svg>
                                                        </a>
                                                        <a href="javascript:void(0)" data-bs-target="#deleteIraModal"
                                                          data-bs-toggle="modal"
                                                          class="deleteBtnIra disableBtnsForAll">&nbsp;<svg width="12"
                                                            height="13" viewBox="0 0 12 13" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                              d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"
                                                              stroke="#763CA3" stroke-width="1.25" />
                                                            <rect x="8.35156" y="5.41406" width="1.25" height="4.70588"
                                                              rx="0.625" transform="rotate(90 8.35156 5.41406)"
                                                              fill="#763CA3" />
                                                          </svg>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="row eachCardParaRow">
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lifeProPlusPara5 m-0 mb-1">Strategy Avg</p>
                                                    <p class="lifeProPlusPara2 m-0 mb-1">8.34%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lifeProPlusPara5 m-0 mb-1">Strategy CAGR</p>
                                                    <p class="lifeProPlusPara2 m-0 mb-1">8.19%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lifeProPlusPara5 m-0 mb-1">IRR</p>
                                                    <p class="lifeProPlusPara2 m-0 mb-1">5.67%</p>
                                                  </div>
                                                </div>
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="lifeProBtmDiv lifeProBtmDiv3 commonBottomTxt">
                                                      <p>401K/IRA</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <table class="table tableCommonForDisable  mt-1 tableCommonHide">
                                                <thead class="heading-tr">
                                                  <th>Distributions</th>
                                                  <th>Account Value</th>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
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
                                    <div class="px-1 w-100 drag-col">
                                      <div class="empty-inner" data-empty="3">
                                        <div class="fill-inner" draggable="true" data-fill="3">
                                          <div class="commonTableMainTopDiv11">
                                            <div class="reportTablesDiv reportTablesDiv6">
                                              <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                                <div class="dblLineAbslt">
                                                  <img src="@/assets/images/icons/double-line.svg" alt="line">
                                                </div>
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns">
                                                    <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                                        <input type="checkbox" class="checkbox2 commonRadioBtn2" checked="true" hideattr="11" onclick="tableDivHide(this, event)">
                                                        <div class="knobs2"></div>
                                                        <div class="layer2"></div>
                                                    </div>
                                                      <div class="d-flex align-items-center">
                                                        <a href="javascript:void(0)"
                                                          class="hideBtnAnnuity commonShowBtn showBtn12" showAttr="12"
                                                          onclick="tableDivShow(this, event)">
                                                          <svg width="19" height="12" viewBox="0 0 19 12" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                              d="M9.29743 1C5.44212 1 2.79224 3.65157 1.60785 5.14103C1.1445 5.72373 1.15294 6.52522 1.62562 7.10039C2.83626 8.57358 5.52378 11.2 9.29743 11.2C13.0335 11.2 15.8155 8.62559 17.1066 7.14471C17.625 6.55025 17.6338 5.69829 17.1248 5.09586C15.8597 3.59865 13.1141 1 9.29743 1Z"
                                                              fill="white" stroke="#9D2B2B" stroke-width="1.25" />
                                                            <circle cx="9.40547" cy="6.10078" r="2.55" fill="white"
                                                              stroke="#9D2B2B" stroke-width="1.25" />
                                                            <rect x="0.625" y="0.333984" width="21" height="1.25" rx="0.625"
                                                              transform="rotate(30 0.625 0.333984)" fill="#9D2B2B" />
                                                          </svg>
                                                        </a>
                                                        <a href="javascript:void(0)"
                                                          class="editBtnAnnuity mx-2 disableBtnsForAll">&nbsp;<svg
                                                            width="13" height="13" viewBox="0 0 13 13" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.575" y="2.57598" width="9.85" height="9.85"
                                                              rx="1.425" fill="white" stroke="#9D2B2B"
                                                              stroke-width="1.15" />
                                                            <path
                                                              d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                              stroke="#9D2B2B" stroke-width="1.15" />
                                                            <path
                                                              d="M4.80078 8.50156L5.33049 6.96094L6.40078 8.02L4.80078 8.50156Z"
                                                              stroke="#9D2B2B" stroke-width="1.15" />
                                                          </svg>
                                                        </a>
                                                        <a href="javascript:void(0)" data-bs-target="#deleteAnnuityModal"
                                                          data-bs-toggle="modal"
                                                          class="deleteBtnAnnuity disableBtnsForAll">&nbsp;<svg width="12"
                                                            height="13" viewBox="0 0 12 13" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                              d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"
                                                              stroke="#9D2B2B" stroke-width="1.25" />
                                                            <rect x="8.35156" y="5.41406" width="1.25" height="4.70588"
                                                              rx="0.625" transform="rotate(90 8.35156 5.41406)"
                                                              fill="#9D2B2B" />
                                                          </svg>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="row eachCardParaRow">
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lifeProPlusPara7 m-0 mb-1">Strategy Avg</p>
                                                    <p class="lifeProPlusPara2 m-0 mb-1">8.71%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lifeProPlusPara7 m-0 mb-1">Strategy CAGR</p>
                                                    <p class="lifeProPlusPara2 m-0 mb-1">8.28%</p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                    <p class="lifeProPlusPara7 m-0 mb-1">IRR</p>
                                                    <p class="lifeProPlusPara2 m-0 mb-1">6.25%</p>
                                                  </div>
                                                </div>
                                                <div class="row">
                                                  <div class="col-12">
                                                    <div class="lifeProBtmDiv lifeProBtmDiv4 commonBottomTxt">
                                                      <p>Annuity</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <table class="table tableCommonForDisable mt-1 tableCommonHide">
                                                <thead class="heading-tr">
                                                  <th>Distributions</th>
                                                  <th>Account Value</th>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>

                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>

                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="blankTd" data-label="blank">-</td>
                                                    <td data-label="acount">$65,777</td>
                                                  </tr>
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
                                  </div>
                                  <p class="compSumAnlysPara mt-2">Summary Analysis</p>
                                  <div class="mt-2 container-fluid">
                                    <div class="row">
                                      <div class="col w-20 px-1">
                                        <div class="reportTablesDiv reportTablesDiv1 SummaryTableDiv1">
                                          <table class="table mt-1 secondTable td-first summaryTableFont">
                                            <thead>
                                              <th width="80" style="background: none!important; border: none;"></th>
                                              <th class="heading-tr shiftBorder" style="border-radius:6px;vertical-align: middle;">Deposits</th>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td class="table1Td" data-label="Year" style="border:none">Totals
                                                </td>
                                                <td class="table1Td" data-label="Age">$459,000</td>
                                              </tr>
                                              <tr>
                                                <td colspan="2" class="table1Td totalValueTd" data-label="Age">Total Value
                                                </td>
                                              </tr>
                                              <tr>
                                                <td colspan="2" class="table1Td shortFallTd" style="text-align: left;"
                                                  data-label="Age">Shortfall</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      <div class="col w-20 px-1">
                                        <div class="reportTablesDiv reportTablesDiv8">
                                          <table class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
                                            <thead class="heading-tr">
                                              <th colspan="2" style="border-radius:6px;vertical-align: middle;">
                                                Distributions
                                              </th>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td width="50%" data-label="acount">$1,9680780</td>
                                                <td width="50%" class="blankTd" data-label="blank">-</td>
                                              </tr>
                                              <tr>
                                                <td width="50%" data-label="acount">$2,115,171</td>
                                                <td width="50%" class="blankTd" data-label="blank">-</td>     
                                              </tr>
                                              <tr>
                                                <td width="50%" data-label="acount"> - </td>
                                                <td width="50%" class="blankTd" data-label="blank">-</td>   
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      <div class="col w-60">
                                        <div class="row summary-row">
                                          <div class="col px-1 commonBottomTableMainTopDiv9 summary-draggable">
                                            <div class="reportTablesDiv reportTablesDiv4">
                                              <table class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
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
                                                    <td width="50%" class="shortFallValueTd" data-label="acount">$670,443</td>
                                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                          <div class="col px-1 commonBottomTableMainTopDiv10 summary-draggable">
                                            <div class="reportTablesDiv reportTablesDiv5">
                                              <table class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
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
                                                    <td width="50%" class="shortFallValueTd" data-label="acount">$670,443</td>
                                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                          <div class="col px-1 commonBottomTableMainTopDiv11 summary-draggable">
                                            <div class="reportTablesDiv reportTablesDiv6">
                                              <table class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
                                                <thead class="heading-tr">
                                                  <th colspan="2" style="border-radius:6px;vertical-align: middle;">
                                                    Distributions
                                                  </th>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                                    <td width="50%" data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                                    <td width="50%" data-label="acount">$65,777</td>
                                                  </tr>
                                                  <tr>
                                                    <td width="50%" class="blankTd" data-label="blank">-</td>
                                                    <td width="50%" class="shortFallValueTd" data-label="acount">$670,443</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-2 pt-5">
                                    <div class="px-3 pb-3 pt-3 seeAllBtnMainDiv">
                                      <div class="comparativeSeeAllBtn  mt-2" id="comparativeSeeAllBtn3">
                                        <button class="btn form-control" onclick="showMore3()">+ SEE ALL</button>
                                      </div>
                                      <div class="comparativeSeeAllBtn" id="comparativeSeeLessBtn3">
                                        <button class="btn form-control" onclick="showLess3()">- SEE Less</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- Comparative Values Table ends  -->
                            </div>
                            <div class="tab-pane fade" id="v-pills-compGraph" role="tabpanel"
                              aria-labelledby="pills-home-tab">
                              <div class="d-flex justify-content-center mt-2">
                                <div class="nav mltplSwtchDiv nav-pills cv-pills" role="tablist"
                                  aria-orientation="vertical">
                                  <div class="pill-btn active" id="card-mostRecent-tab" data-bs-toggle="pill"
                                    data-bs-target="#card-mostRecent" type="button" role="tab"
                                    aria-controls="card-mostRecent" aria-selected="true">Most Recent</div>
                                  <div class="pill-btn" id="card-worst-tab" data-bs-toggle="pill" data-bs-target="#card-worst" type="button" role="tab" aria-controls="card-worst" aria-selected="true">Worst</div>
                                  <div class="pill-btn" id="card-median-tab" data-bs-toggle="pill" data-bs-target="#card-median" type="button" role="tab" aria-controls="card-median" aria-selected="true">Median</div>
                                  <div class="pill-btn" id="card-best-tab" data-bs-toggle="pill" data-bs-target="#card-best" type="button" role="tab" aria-controls="card-best" aria-selected="true">Best</div>
                                </div>
                              </div>
                              <div class="px-3 py-3" id="comparativeValues2Fluid">
                                <div class="container-fluid">
                                  <div class="d-flex justify-content-between flex-gap-12">
                                    <div class="flex-1">
                                      <div class="tab-content h-100">
                                        <div class="tab-pane fade h-100 show active" id="card-mostRecent" role="tabpanel" aria-labelledby ="card-mostRecent-tab">
                                          <div class="distributionCard1 equalDistCard1 position-relative w-100">
                                            <div class="d-flex justify-content-between">
                                              <div class="distrbnCard1paras">
                                                <p>Longevity</p>
                                                <p>TSA- Most Recent</p>
                                              </div>
                                              <div class="d-flex">
                                                <div class="button-cover2">
                                                  <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                                    <input type="checkbox" class="checkbox2 commonRadioBtn2" checked />
                                                    <div class="knobs2"></div>
                                                    <div class="layer2"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="d-flex justify-content-between mt-1">
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
                                        <div class="tab-pane fade h-100" id="card-worst" role="tabpanel" aria-labelledby="card-mostRecent-tab"> 
                                          <div class="distributionCard1 equalDistCard1 position-relative w-100">
                                            <div class="d-flex justify-content-between">
                                              <div class="distrbnCard1paras">
                                                <p>Longevity</p>
                                                <p>TSA- Worst</p>
                                              </div>
                                              <div class="d-flex">
                                                <div class="button-cover2">
                                                  <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                                    <input type="checkbox" class="checkbox2 commonRadioBtn2" checked />
                                                    <div class="knobs2"></div>
                                                    <div class="layer2"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="d-flex justify-content-between mt-1">
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
                                        <div class="tab-pane fade h-100" id="card-median" role="tabpanel" aria-labelledby="card-mos tRecent-tab">
                                          <div class="distributionCard1 equalDistCard1 position-relative w-100">
                                            <div class="d-flex justify-content-between">
                                              <div class="distrbnCard1paras">
                                                <p>Longevity</p>
                                                <p>TSA- Median</p>
                                              </div>
                                              <div class="d-flex">
                                                <div class="button-cover2">
                                                  <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                                    <input type="checkbox" class="checkbox2 commonRadioBtn2" checked />
                                                    <div class="knobs2"></div>
                                                    <div class="layer2"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="d-flex justify-content-between mt-1">
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
                                        <div class="tab-pane fade h-100" id="card-best" role="tabpanel" aria-labelledby="card-mostRecent-tab"> 
                                          <div class="distributionCard1 equalDistCard1 position-relative w-100">
                                            <div class="d-flex justify-content-between">
                                              <div class="distrbnCard1paras">
                                                <p>Longevity</p>
                                                <p>TSA- Best</p>
                                              </div>
                                              <div class="d-flex">
                                                <div class="button-cover2">
                                                  <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                                    <input type="checkbox" class="checkbox2 commonRadioBtn2" checked />
                                                    <div class="knobs2"></div>
                                                    <div class="layer2"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="d-flex justify-content-between mt-1">
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
                                                <input type="checkbox" class="checkbox2 commonRadioBtn2" checked />
                                                <div class="knobs2"></div>
                                                <div class="layer2"></div>
                                              </div>
                                            </div>
                                            <a class="ms-2 deleteButtonAncor deleteBtnBlue" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                              <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                                  stroke="#9D9D9D" />
                                                <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                        <div class="d-flex justify-content-between mt-1">
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
                                                <input type="checkbox" class="checkbox2 commonRadioBtn2" checked />
                                                <div class="knobs2"></div>
                                                <div class="layer2"></div>
                                              </div>
                                            </div>
                                            <a class="ms-2 deleteButtonAncor deleteBtnVoilet" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                              <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                                  stroke="#9D9D9D" />
                                                <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                        <div class="d-flex justify-content-between mt-1">
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
                                                <input type="checkbox" class="checkbox2 commonRadioBtn2" checked />
                                                <div class="knobs2"></div>
                                                <div class="layer2"></div>
                                              </div>
                                            </div>
                                            <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                              <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                                  stroke="#9D9D9D" />
                                                <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" ransform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                        <div class="d-flex justify-content-between mt-1">
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
                                <div class="container-fluid">
                                  <div class="graph-container-div">
                                    <canvas id="comparativeValues2Chart" width="400" height="150"></canvas>
                                    <div class="progressBarEachBtm comparative">
                                      <div class="bar-container contribution-radio d-flex justify-content-between align-items-center">
                                        <div class="progressBarBtnDiv">
                                          <p>Annual Contribution</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2" id="button-2">
                                            <div class="radioBtnDiv  r2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2" checked="">
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <img src="@/assets/images/icons/delete-icon.svg" alt="delete">
                                          </a>
                                        </div>
                                      </div>
                                      <div class="bar-container distribution-radio d-flex justify-content-between align-items-center">
                                        <div class="progressBarBtnDiv">
                                          <p>Annual Distribution</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2" id="button-2">
                                            <div class="radioBtnDiv  r2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2" checked="">
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
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
                        
                        <div class="bottom-disclosure pt-0 px-3" id="disclosure12" data-dc="12">
                          <div class="disclosure-div">
                            <div class="disclosure-header-div d-flex align-items-center justify-content-between">
                              <h4 class="disclosure-heading">Disclosure</h4>
                              <div class="disclosure-right-actions">
                                <button class="btn round-btn disclosure-edit">
                                  <span>Edit</span>
                                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                    <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                    <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                  </svg>
                                </button>
                                <button class="btn round-btn disclosure-save d-none">
                                  <span>Save</span>
                                  <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                                    <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"></rect>
                                    <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"></rect>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="disclosure-text-wrapper">
                              <div class="disclosure-textarea" contenteditable="true">
                                This chart references data drawn from simulations of a Theoretical Synthetic Asset (TSA) that does not exist and cannot be purchased in the real world. It is not a real world insurance policy. It is not an official illustration. You may not assume the data presented here relating to the TSA infers or expresses any guarantee of how a real world insurance policy would perform. Comparisons made to the official <b>Pacific Life</b> illustration(s), which use hypothetical assumptions that are not guaranteed, are designed to be educational and instructive as to how the insurance policies compared <b>may have</b> performed through different historical periods. The data uses the raw returns of the <b>S&P 500</b>, and simulates the potential returns that the insurance policy <b>may have</b> achieved if the current cap rates, participation rates, floors, fees, and borrowing costs were in place during the historical periods tested. Cap rates, participation rates, and policy fees can and do change. We analyzed <b>546 40</b>-year periods of the index. In the case where a time period portrayed is greater than <b>40</b> years, the data was looped for purposes of the simulation. This simulation of a TSA took the actual current monthly fees of the <b>Pacific Life</b> insurance policy and increased them by 15%. All distributions assume the use of an index/participating loan. We assumed a <b>5.4%</b> borrowing rate in the simulation of the TSA. Presented here are the most recent, worst, median, and best <b>40</b>-year periods with respect to the insurance policy’s intended allocation in the <b>S&P 500</b> index strategy. However, these results are not the results of an actual insurance policy, but those of the TSA, which does not exist in the real world. It is entirely possible that the real world experience of the actual policy could be even worse than the worst <b>40</b>-year period analyzed, just as it is entirely possible that the real world policy could perform better than the best <b>40</b>-year period analyzed.
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
                                    <span>LIRP: actual current costs of insurance, as per the carrier illustration</span></p>
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
        </div>
      </main>
    </div>
  </section>
</template>
<script>
export default {
  props: ["sidebar"]
}
</script>
<style lang="">
    
</style>