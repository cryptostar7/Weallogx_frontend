<template lang="">
  <section :class="`main-section widthClass mainsectionjs1 lftComulativeHistoricalTab1 sectionCommonJs1 ${sidebar.collapse ? 'active':''}`" :style="{display:sidebar.currentTab === 'comparative' ? 'block':'none'}" >
    <div class="inner-section reportbuilderRightInner">
      <div class="d-block sidebar reportSideBar collapse px-0 darkModeSidebarBg">
        <button class="sidebar-arrow" @click="() => sidebar.collapse = !sidebar.collapse" sideColapseAttr="1" :style="{transform:sidebar.collapse ?'rotate(180deg)':'rotate(360deg)'}"><svg
            class="sidebarArrowImgJs1" width="7" height="11" viewBox="0 0 7 11" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="0.25" y="5.45312" width="7" height="1.5" rx="0.75" transform="rotate(-45 0.25 5.45312)"
              fill="#23669E" />
            <rect x="1.3125" y="4.5" width="7" height="1.5" rx="0.75" transform="rotate(45 1.3125 4.5)"
              fill="#23669E" />
          </svg>
        </button>
        <div class="position-sticky h-100 sidebar-inner sidebarInnerJs1 px-0 py-0 position-relative" :style="{display: sidebar.collapse ? 'none' : 'block'}">
          <div class="reportBuilderLft1 px-10 py-4">
            <h3 class="fs-26 bold-fw text-white mb-20">Report Builder</h3>
            <div class="reportBuilderLftSwtch">
              <button class="btn reportSwtchLeft active">Comparative
                Analysis</button>
              <button class="btn reportSwtchLeft" @click="() => sidebar.currentTab = 'historical'">Historical
                Simulations</button>
            </div>
          </div>
          <div class="reportBuilderLft2 px-3 py-4">
            <div class="reportBldrLftscroll checkbox-wrapper-1">
              <div class="empty" id="comparativeTableTab" data-empty="0">
                <div class="fill" draggable="true" data-fill="1">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs1" data-id="1">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox leftCheckBox1" checked checkAttr="1"
                            onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>Comparative Table</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg1" width="13" height="7" viewBox="0 0 13 7"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                        <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="empty" id="comparativeGraphTab" data-empty="1">
                <div class="fill" draggable="true" data-fill="2">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs2" data-id="2">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox leftCheckBox2" checked checkAttr="2"
                            onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>Comparative Graph</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg2" width="13" height="7" viewBox="0 0 13 7"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                        <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="empty" id="makingThingsEqualTab" data-empty="2">
                <div class="fill" draggable="true" data-fill="3">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs3" data-id="3">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox  leftCheckBox3" checked checkAttr="3"
                            onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>Making Things Equal</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg3" width="13" height="7" viewBox="0 0 13 7"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                        <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="empty" id="cumulativeValuesTab" data-empty="3">
                <div class="fill" draggable="true" data-fill="4">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs4" data-id="4">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox leftCheckBox4" checked checkAttr="4"
                            onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>Cumulative Values</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg4" width="13" height="7" viewBox="0 0 13 7"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                        <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="empty" id="legacyTab" data-empty="4">
                <div class="fill" draggable="true" data-fill="5">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs5" data-id="5">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox leftCheckBox5" checked checkAttr="5"
                            onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>Legacy</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg5" width="13" height="7" viewBox="0 0 13 7"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                        <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="empty" id="feeAnalysisTab" data-empty="5">
                <div class="fill" draggable="true" data-fill="6">
                  <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs6" data-id="6">
                    <div class="lftRadioBtnDiv">
                      <div class="button-cover">
                        <div class="button r" id="button-1">
                          <input type="checkbox" class="checkbox leftCheckBox6" checked checkAttr="6"
                            onchange="myFunction(this, event)"/>
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                      <label>Fee Analysis</label>
                    </div>
                    <div class="dragBtn">
                      <svg class="leftLinesColor deactiveColor leftTwoLineImg6" width="13" height="7" viewBox="0 0 13 7"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <main class="ms-sm-autopx-md-4 report-builder-right-area comparative-sections">
        <div class="right-area-inner p-relative">
          <div class="right-area-wrapper">
            <div class="section-heading-div section-heading-bg pt-0 d-flex justify-content-between gap-20 flex-wrap flex-md-nowrap align-items-center">
              <div class="d-flex align-items-center">
                <button class="reportBuilderBr" data-bs-target="#reportNameChangeModal" data-bs-toggle="modal"> Br
                </button>
                <div>
                  <h2 class="fs-28 bold-fw m-0 ms-2 reportBuilderBrTxt">Bryant, Roger 
                    <span class="fs-20 medium-fw report-scenario-name">Allianz Parse</span></h2>
                </div>
              </div>
            </div>
            <!-- tab 1 -->
            <div class="tab-wrapper-1">
              <div class="empty" data-class="empty-wrapper" data-empty="0">
                <div class="fill" data-class="empty-fill" draggable="true" data-fill="1">
                  <div class="report-client-list-div tab-id-1" id="comparativeTableTabView">
                  <div class="ComparativeTableMainDiv active rightDivTop1">
                    <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                      <div class="d-flex align-items-center">
                        <div class="button-cover2 prstnRadioBtnHide">
                          <div class="radioBtnDiv r2" id="button-2">
                            <input id="rightCheckBox1" type="checkbox" class="checkbox2 rightCheckBox1" checked rightCheckAttr="1"
                              onchange="rightCheckbox(this,event)"/>
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
                      <div class="commonCollapse comparativeLessDiv comparativeLessDiv2 collapseDiv1 position-relative tableDivHeight1">
                        <hr class="collapseDivHr">
                        <div class="px-3 py-3">
                          <div class="position-relative">
                            <div class="d-flex align-items-center  float-end">
                              <div class="radioBtnDiv r2 prstnRadioBtnHide" id="button-2">
                                <input type="checkbox" class="checkbox2 showAssetsCheckBox" id="showAssets" />
                                <div class="knobs2"></div>
                                <div class="layer2"></div>
                              </div>
                              <label for="showAssets" class="ms-2 fs-12 semi-bold-fw showAssetsTxt prstnRadioBtnHide cursor-pointer">Show assets one by one</label>
                            </div>
                            <div class="collapseDivmdlHd text-center">Target Analysis</div>
                          </div><br>
                          <div class="d-flex justify-content-center mt-2">
                            <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist"
                              aria-orientation="vertical">
                              <div class="active" data-bs-toggle="pill" data-bs-target="#v-pills-distribution" type="button"
                                role="tab" aria-controls="v-pills-distribution" aria-selected="true">
                                Distribution
                              </div>
                              <div data-bs-toggle="pill" data-bs-target="#v-pills-rate-of-return" type="button" role="tab"
                                aria-controls="v-pills-rate-of-return" aria-selected="false">Rate of Return</div>
                            </div>
                          </div>
                          <div class="tab-content">
                            <div class="tab-pane fade show active" id="v-pills-distribution" role="tabpanel"
                              aria-labelledby="pills-home-tab">
                              <div class="d-flex justify-content-center mt-2">
                                <div class="nav mltplSwtchDiv nav-pills" role="tablist"
                                  aria-orientation="vertical">
                                  <div class="active" id="v-pills-default-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-default" type="button" role="tab"
                                    aria-controls="v-pills-default" aria-selected="true">Amount</div>
                                  <div id="v-pills-longevity-tab" data-bs-toggle="pill" data-bs-target="#v-pills-longevity"
                                    type="button" role="tab" aria-controls="v-pills-longevity" aria-selected="true">
                                    Longevity
                                  </div>
                                  <div id="v-pills-endingvalue-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-endingvalue" type="button" role="tab"
                                    aria-controls="v-pills-endingvalue" aria-selected="true">Ending
                                    Value</div>
                                  <div id="v-pills-deathBenifit-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-deathBenifit" type="button" role="tab"
                                    aria-controls="v-pills-deathBenifit" aria-selected="true">Death Benefit</div>
                                </div>
                              </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-rate-of-return" role="tabpanel"
                              aria-labelledby="pills-home-tab">
                              <div class="d-flex justify-content-center mt-2">
                                <div class="nav mltplSwtchDiv nav-pills" role="tablist"
                                  aria-orientation="vertical">
                                  <div class="active" id="v-pills-default-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-default" type="button" role="tab"
                                    aria-controls="v-pills-default" aria-selected="true">Default</div>
                                  <div id="v-pills-longevity-tab" data-bs-toggle="pill" data-bs-target="#v-pills-longevity"
                                    type="button" role="tab" aria-controls="v-pills-longevity" aria-selected="true">
                                    Longevity
                                  </div>
                                  <div id="v-pills-endingvalue-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-endingvalue" type="button" role="tab"
                                    aria-controls="v-pills-endingvalue" aria-selected="true">Ending
                                    Value</div>
                                  <div id="v-pills-deathBenifit-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-deathBenifit" type="button" role="tab"
                                    aria-controls="v-pills-deathBenifit" aria-selected="true">Death Benefit</div>
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
                                            <a href="javascript:void(0)" data-bs-target="#deleteAccountModal" data-bs-toggle="modal" class="deleteBtnAccount disableBtnsForAll">&nbsp;<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                              <div class="col-9 col-md-4 px-1">
                                <div class="reportTablesDiv reportTablesDiv3">
                                  <div class="lifeProPlus">
                                    <div class="row">
                                      <div class="col-12">
                                        <div class="d-flex align-items-center justify-content-end mt-2 allActionBtns me-0">
                                          <a href="javascript:void(0)" class="editBtnLirp disableBtnsForAll">&nbsp;<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425" fill="white" stroke="#1660A4" stroke-width="1.15"></rect>
                                            <path d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z" stroke="#1660A4" stroke-width="1.25"></path>
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
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">-</td>
                                        <td data-label="acount">$65,777</td>
                                        <td data-label="surrender">$65,777</td>
                                        <td data-label="death">$65,777</td>
                                      </tr>
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
                              <div class="col-4 col-md-2 px-1 drag-col">
                                <div class="empty-inner" data-empty="1">
                                  <div class="fill-inner" draggable="true" data-fill="1">
                                    <div class="commonTableMainTopDiv1">
                                      <div class="reportTablesDiv reportTablesDiv4">
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
                                    <div class="commonTableMainTopDiv2">
                                      <div class="reportTablesDiv reportTablesDiv5">
                                        <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                          <div class="dblLineAbslt">
                                            <img src="@/assets/images/icons/double-line.svg" alt="line">
                                          </div>
                                          <div class="row">
                                            <div class="col-12">
                                              <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns">
                                                <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                                  <input type="checkbox" class="checkbox2 commonRadioBtn1" checked="true" hideattr="2" onclick="tableDivHide(this, event)">
                                                  <div class="knobs2"></div>
                                                  <div class="layer2"></div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                  <a href="javascript:void(0)"
                                                    class="editBtnIra mx-2 disableBtnsForAll">&nbsp;<svg width="13"
                                                      height="13" viewBox="0 0 13 13" fill="none"
                                                      xmlns="http://www.w3.org/2000/svg">
                                                      <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425"
                                                        fill="white" stroke="#763CA3" stroke-width="1.15" />
                                                      <path
                                                        d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                        stroke="#763CA3" stroke-width="1.15" />
                                                    </svg>
                                                  </a>
                                                  <a href="javascript:void(0)" data-bs-target="#deleteIraModal"
                                                    data-bs-toggle="modal" class="deleteBtnIra disableBtnsForAll">&nbsp;<svg
                                                      width="12" height="13" viewBox="0 0 12 13" fill="none"
                                                      xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"
                                                        stroke="#763CA3" stroke-width="1.25" />
                                                      <rect x="8.35156" y="5.41406" width="1.25" height="4.70588" rx="0.625"
                                                        transform="rotate(90 8.35156 5.41406)" fill="#763CA3" />
                                                    </svg>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="row eachCardParaRow">
                                            <div class="col-md-5">
                                              <p class="lifeProPlusPara5">RoR</p>
                                              <p class="lifeProPlusPara2">6.50%</p>
                                            </div>
                                            <div class="col-md-7">
                                              <p class="lifeProPlusPara5">IRR</p>
                                              <p class="lifeProPlusPara2">3.82%</p>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div class="col-12">
                                              <div class="lifeProBtmDiv lifeProBtmDiv3 commonBottomTxt">
                                                <p>401K / IRA</p>
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
                                    <div class="commonTableMainTopDiv3">
                                      <div class="reportTablesDiv reportTablesDiv6">
                                        <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                          <div class="dblLineAbslt">
                                            <img src="@/assets/images/icons/double-line.svg" alt="line">
                                          </div>
                                          <div class="row">
                                            <div class="col-12">
                                              <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns">
                                                <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                                  <input type="checkbox" class="checkbox2 commonRadioBtn1" checked="true" hideattr="3" onclick="tableDivHide(this, event)">
                                                  <div class="knobs2"></div>
                                                  <div class="layer2"></div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                  <a href="javascript:void(0)"
                                                    class="editBtnAnnuity mx-2 disableBtnsForAll">&nbsp;<svg width="13"
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
                                                  <a href="javascript:void(0)" data-bs-target="#deleteAnnuityModal"
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
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="row eachCardParaRow">
                                            <div class="col-md-5">
                                              <p class="lifeProPlusPara7">RoR</p>
                                              <p class="lifeProPlusPara2">6.50%</p>
                                            </div>
                                            <div class="col-md-7">
                                              <p class="lifeProPlusPara7">IRR</p>
                                              <p class="lifeProPlusPara2">3.82%</p>
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
                            <div class="mt-2 summary-analysis">
                              <div class="row">
                                <div class="col-3 col-md-2 px-1">
                                  <div class="reportTablesDiv reportTablesDiv1 SummaryTableDiv1">
                                    <table class="table mt-1 secondTable td-first summaryTableFont">
                                      <thead>
                                        <th width="80" style="background: none!important;border: none !important;"></th>
                                        <th class="heading-tr shiftBorder" style="border-radius:6px;vertical-align: middle;">Deposits</th>
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
                                          <td colspan="2" class="table1Td shortFallTd" style="text-align: left;"
                                            data-label="Age">Shortfall</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div class="col-9 col-md-4 px-1">
                                  <div class="reportTablesDiv reportTablesDiv3">
                                    <table class="table table3 mt-1 secondTable summaryTableFont">
                                      <thead class="heading-tr">
                                        <th colspan="2" style="border-radius:6px;vertical-align: middle;">Distributions
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
                                                <td width="50%" class="shortFallValueTd" data-label="acount">$65,777</td>
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
                                              <td width="50%" class="shortFallValueTd" data-label="acount">$670,443</td>
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
                                              <td width="50%" class="shortFallValueTd" data-label="acount">$65,777</td>
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
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                    <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                    <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                  </svg>
                                </button>
                                <button class="btn round-btn disclosure-save d-none">
                                  <span>Save</span>
                                  <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                                    <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"/>
                                    <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"/>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="disclosure-text-wrapper">
                              <div class="disclosure-textarea" contenteditable="true">
                                This program illustrates the current values and assumptions of an Indexed Universal Life (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV) are for illustrative and educational purposes only, and are intended to produce insight and discussion points between you and a licensed agent. No claim is made that the IUL is superior to the CVs. Guarantees backed by the claims paying ability of the underwriting insurance company. These graphics and illustrations do not constitute tax, legal or accounting advice. Please consult your own legal or tax counsel to confirm how tax treatment applies to you. The hypothetical results are for illustrative purposes only and should not be deemed a representation of past or future results. Your experience may and likely will vary materially from these results. Tax-free access to cash values are typically done through a policy loan which can reduce death benefits, cash values, incur interest and could cause the policy to lapse. Additional premium payments may be needed to keep the policy in force and in the event of a lapse, outstanding policy loans in excess of unrecovered basis will be subject to ordinary income taxes. Tax laws are subject to change. These values are not guaranteed. Policies still incur costs and charges each year for administration and insurance. This could cause the cash value to go down. You may also lose cash value by surrendering the policy. Life Insurance costs, caps, and participation rates can be changed at the discretion of the insurance company within certain limits, which can positively or adversely affect the performance of the policy.Neither this software nor the presenting agent in any way guarantees future performance, and this presentation is null and void unless accompanied by an approved illustration from the insurance company presented.
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
              <!-- 2nd tab -->
              <div class="empty" data-class="empty-wrapper" data-empty="1">
                <div class="fill" data-class="empty-fill" draggable="true" data-fill="2">
                  <div class="report-client-list-div tab-id-2" id="comparativeGraphTabView">
                    <div class="ComparativeTableMainDiv active rightDivTop2">
                      <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                        <div class="d-flex align-items-center">
                          <div class="button-cover2 prstnRadioBtnHide">
                            <div class="radioBtnDiv r2" id="button-2">
                              <input id="rightCheckBox2" type="checkbox" checked class="checkbox2 commonRadioBtn1 rightCheckBox2" rightCheckAttr="2" onchange="rightCheckbox(this,event)" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <label for="rightCheckBox2" class="rghtTopHeadcommon">Comparative Graph</label>
                        </div>
                        <div class="rightLeftDoubleLIneDegine">
                          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                            <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                          </svg>
                        </div>
                      </div>
                      <div class="collapseDivMain collapseDiv2">
                        <hr class="collapseDivHr">
                        <div class="px-3 pt-3" id="comparativeValuesFluid">
                          <div class="container-fluid">
                            <div class="d-flex justify-content-between flex-gap-12">
                              <div class="flex-1">
                                <div class="distributionCard1 equalDistCard1 position-relative w-100">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Longevity</p>
                                      <p>LIRP Balance</p>
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
                                  <div class="d-flex justify-content-between">
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
                                          <input type="checkbox" class="checkbox2 commonRadioBtn1" checked />
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
                                  <div class="d-flex justify-content-between">
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
                                          <input type="checkbox" class="checkbox2 commonRadioBtn1" checked />
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
                                  <div class="d-flex justify-content-between">
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
                                          <input type="checkbox" class="checkbox2 commonRadioBtn1" checked />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
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
                                  <div class="d-flex justify-content-between">
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
                          <div class="container-fluid pb-2">
                            <div class="graph-container-div">
                              <canvas id="comparativeValuesChart" width="400" height="150"></canvas>
                              <div class="progressBarEachBtm comparative">
                                <div class="bar-container contribution-radio d-flex justify-content-between align-items-center">
                                  <div class="progressBarBtnDiv">
                                    <p>Annual Contribution</p>
                                  </div>
                                  <div class="d-flex">
                                    <div class="button-cover2" id="button-2">
                                      <div class="radioBtnDiv  r2">
                                        <input type="checkbox" class="checkbox2 commonRadioBtn1" checked="">
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
                                        <input type="checkbox" class="checkbox2 commonRadioBtn1" checked="">
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
                        <div class="container-fluid d-none">
                          <div class="disclosure-div px-3 py-1">
                            <p>This program illustrates the current values and assumptions of an Indexed Universal Life (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV) are for illustrative and educational purposes only, and are intended to produce insight and discussion points between you and a licensed agent. No claim is made that the IUL is superior to the CVs. Guarantees backed by the claims paying ability of the underwriting insurance company. These graphics and illustrations do not constitute tax, legal or accounting advice. Please consult your own legal or tax counsel to confirm how tax treatment applies to you. The hypothetical results are for illustrative purposes only and should not be deemed a representation of past or future results. Your experience may and likely will vary materially from these results. Tax-free access to cash values are typically done through a policy loan which can reduce death benefits, cash values, incur interest and could cause the policy to lapse. Additional premium payments may be needed to keep the policy in force and in the event of a lapse, outstanding policy loans in excess of unrecovered basis will be subject to ordinary income taxes. Tax laws are subject to change. These values are not guaranteed. Policies still incur costs and charges each year for administration and insurance. This could cause the cash value to go down. You may also lose cash value by surrendering the policy. Life Insurance costs, caps, and participation rates can be changed at the discretion of the insurance company within certain limits, which can positively or adversely affect the performance of the policy.Neither this software nor the presenting agent in any way guarantees future performance, and this presentation is null and void unless accompanied by an approved illustration from the insurance company presented.</p>

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
                          
                        <div class="bottom-disclosure px-3" id="disclosure2" data-dc="2">
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
                                      <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"/>
                                      <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"/>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div class="disclosure-text-wrapper">
                                <div class="disclosure-textarea" contenteditable="true">
                                  This program illustrates the current values and assumptions of an Indexed Universal Life (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV) are for illustrative and educational purposes only, and are intended to produce insight and discussion points between you and a licensed agent. No claim is made that the IUL is superior to the CVs. Guarantees backed by the claims paying ability of the underwriting insurance company. These graphics and illustrations do not constitute tax, legal or accounting advice. Please consult your own legal or tax counsel to confirm how tax treatment applies to you. The hypothetical results are for illustrative purposes only and should not be deemed a representation of past or future results. Your experience may and likely will vary materially from these results. Tax-free access to cash values are typically done through a policy loan which can reduce death benefits, cash values, incur interest and could cause the policy to lapse. Additional premium payments may be needed to keep the policy in force and in the event of a lapse, outstanding policy loans in excess of unrecovered basis will be subject to ordinary income taxes. Tax laws are subject to change. These values are not guaranteed. Policies still incur costs and charges each year for administration and insurance. This could cause the cash value to go down. You may also lose cash value by surrendering the policy. Life Insurance costs, caps, and participation rates can be changed at the discretion of the insurance company within certain limits, which can positively or adversely affect the performance of the policy.Neither this software nor the presenting agent in any way guarantees future performance, and this presentation is null and void unless accompanied by an approved illustration from the insurance company presented.
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
              <!-- tab 3 -->
              <div class="empty" data-class="empty-wrapper" data-empty="2">
                <div class="fill" data-class="empty-fill" draggable="true" data-fill="3">
                  <div class="report-client-list-div tab-id-3" id="makingThingsEqualTabView">
                    <div class="ComparativeTableMainDiv active rightDivTop3 ">
                      <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                        <div class="d-flex align-items-center">
                          <div class="button-cover2 prstnRadioBtnHide">
                            <div class="radioBtnDiv r2" id="button-2">
                              <input id="rightCheckBox3" type="checkbox" class="checkbox2 rightCheckBox3" rightCheckAttr="3"
                                onchange="rightCheckbox(this,event)" checked />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <label for="rightCheckBox3" class="rghtTopHeadcommon">Making Things Equal<span class="ms-3 equalThingTabTxt">The distribution amounts required to match the LIRP.</span></label>
                        </div>
                        <div class="rightLeftDoubleLIneDegine">
                          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                            <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                          </svg>
                        </div>
                      </div>
                      <div class="collapseDivMain collapseDiv3">
                        <hr class="collapseDivHr">
                        <div class="px-3 pt-3 pb-2">
                          <div class="d-flex justify-content-center">
                            <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist"
                              aria-orientation="vertical">
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard1" checked groupProgBar="1"
                                                onchange="groupProgressbar(this,event)" />
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
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard2" checked groupProgBar="2"
                                                onchange="groupProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnBlue" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
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
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard3" checked groupProgBar="3"
                                                onchange="groupProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnVoilet" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D"/>
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
                                    <div class="distributionCard1 equalDistCard4 position-relative w-100">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Distributions</p>
                                          <p class="redRadioSwtchpara">Annuity</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard4" checked groupProgBar="4"
                                                onchange="groupProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
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
                                                  <input type="checkbox" class="checkbox2 longevityMatchJSCls1 commonRadioBtn1" checked
                                                    longevityMatchAttr="1" onchange="longevityMatch(this, event)" />
                                                  <div class="knobs2"></div>
                                                  <div class="layer2"></div>
                                                </div>
                                              </div>
                                              <a class="ms-2 deleteButtonAncor" data-bs-target="#deleteAccountModal" data-bs-toggle="modal" >
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
                                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 longevityMatchJSCls2" checked longevityMatchAttr="2" onchange="longevityMatch(this, event)" />
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
                                                  <input type="checkbox" class="checkbox2 commonRadioBtn1 longevityMatchJSCls3" checked longevityMatchAttr="3" onchange="longevityMatch(this, event)" />
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 commonRadioBtn1 groupBaCard5" checked groupProgBar="5" onchange="groupProgressbar(this,event)" />
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
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard6" checked groupProgBar="6"
                                                onchange="groupProgressbar(this,event)" />
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
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard7" checked groupProgBar="7" onchange="groupProgressbar(this,event)" />
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
                                          <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
                                          <div class="add-note-input-inner">
                                            <input type="text" class="add-note-input form-control flex-1">
                                            <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 groupBaCard8" checked groupProgBar="8"
                                                onchange="groupProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
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
                                              <span class="thingEqualProg21">55%</span> </div>
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
                                                  <input type="checkbox" class="checkbox2 longevityMatchJSCls4 commonRadioBtn1" checked
                                                    longevityMatchAttr="4" onchange="longevityMatch(this, event)" />
                                                  <div class="knobs2"></div>
                                                  <div class="layer2"></div>
                                                </div>
                                              </div>
                                              <a class="ms-2 deleteButtonAncor" data-bs-target="#deleteAccountModal" data-bs-toggle="modal" >
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
                                                  <input type="checkbox" class="checkbox2 longevityMatchJSCls5 commonRadioBtn1" checked
                                                    longevityMatchAttr="5" onchange="longevityMatch(this, event)" />
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
                                                  <input type="checkbox" class="checkbox2 longevityMatchJSCls6 commonRadioBtn1" checked
                                                    longevityMatchAttr="6" onchange="longevityMatch(this, event)" />
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
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn disclosure-save d-none">
                                    <span>Save</span>
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                                      <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"/>
                                      <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"/>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div class="disclosure-text-wrapper">
                                <div class="disclosure-textarea" contenteditable="true">
                                  This program illustrates the current values and assumptions of an Indexed Universal Life (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV) are for illustrative and educational purposes only, and are intended to produce insight and discussion points between you and a licensed agent. No claim is made that the IUL is superior to the CVs. Guarantees backed by the claims paying ability of the underwriting insurance company. These graphics and illustrations do not constitute tax, legal or accounting advice. Please consult your own legal or tax counsel to confirm how tax treatment applies to you. The hypothetical results are for illustrative purposes only and should not be deemed a representation of past or future results. Your experience may and likely will vary materially from these results. Tax-free access to cash values are typically done through a policy loan which can reduce death benefits, cash values, incur interest and could cause the policy to lapse. Additional premium payments may be needed to keep the policy in force and in the event of a lapse, outstanding policy loans in excess of unrecovered basis will be subject to ordinary income taxes. Tax laws are subject to change. These values are not guaranteed. Policies still incur costs and charges each year for administration and insurance. This could cause the cash value to go down. You may also lose cash value by surrendering the policy. Life Insurance costs, caps, and participation rates can be changed at the discretion of the insurance company within certain limits, which can positively or adversely affect the performance of the policy.Neither this software nor the presenting agent in any way guarantees future performance, and this presentation is null and void unless accompanied by an approved illustration from the insurance company presented.
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
                  <div class="report-client-list-div tab-id-4" id="cumulativeValuesTabView">
                    <div class="ComparativeTableMainDiv active rightDivTop4">
                      <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                        <div class="d-flex align-items-center">
                          <div class="button-cover2 prstnRadioBtnHide">
                            <div class="radioBtnDiv r2" id="button-2">
                              <input id="rightCheckBox4" type="checkbox" checked class="checkbox2 rightCheckBox4" rightCheckAttr="4"
                                onchange="rightCheckbox(this,event)" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <label for="rightCheckBox4" class="rghtTopHeadcommon">Cumulative Values<span class="ms-3 equalThingTabTxt">What you get out of the account.</span></label>
                        </div>
                        <div class="rightLeftDoubleLIneDegine">
                          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                            <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                          </svg>
                        </div>
                      </div>
                      <div class="collapseDivMain collapseDiv4">
                        <hr class="collapseDivHr">
                        <div class="px-3 pt-3 pb-2">
                          <div class="d-flex justify-content-center mt-2">
                            <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist"
                              aria-orientation="vertical">
                              <div class="active" id="v-pills-annualFees1-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-annualFees1" type="button" role="tab"
                                aria-controls="v-pills-annualFees1" aria-selected="true">
                                Cumulative Income
                              </div>
                              <div id="v-pills-comulativeFees1-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-comulativeFees1" type="button" role="tab"
                                aria-controls="v-pills-comulativeFees1" aria-selected="false">Total Value
                              </div>
                            </div>
                          </div>
                          <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-annualFees1" role="tabpanel" aria-labelledby="v-pills-annualFees1-tab">
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard1" checked bigProgBar="1" onchange="bigProgressbar(this, event)" />
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
                                        <p class="ms-2 CardProgressnym carValue1 position-up2"><span>Cumulative Income</span><br /> $85,044</p>
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
                                    <div class="distributionCard1 equalDistCard2 position-relative w-100">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Cumulative Income</p>
                                          <p class="blueRadioSwtchpara">Account</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard2" checked bigProgBar="2" onchange="bigProgressbar(this,event)" />
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
                                    <div class="distributionCard1 equalDistCard3 position-relative w-100">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Cumulative Income</p>
                                          <p class="voiletRadioSwtchpara">401K / IRA</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard3" checked bigProgBar="3" onchange="bigProgressbar(this,event)" />
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
                                    <div class="distributionCard1 equalDistCard4 position-relative w-100">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Cumulative Income</p>
                                          <p class="redRadioSwtchpara">Annuity</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard4" checked bigProgBar="4" onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard5" checked bigProgBar="5" onchange="bigProgressbar(this,event)" />
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
                                        <p class="ms-2 CardProgressnym carValue1 position-up2"><span>Total Value</span><br/> $85,044</p>
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
                                    <div class="distributionCard1 equalDistCard2 position-relative w-100">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Total Value</p>
                                          <p class="blueRadioSwtchpara">Account</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard6" checked bigProgBar="6" onchange="bigProgressbar(this,event)" />
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
                                    <div class="distributionCard1 equalDistCard3 position-relative w-100">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Total Value</p>
                                          <p class="voiletRadioSwtchpara">401K / IRA</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard7" checked bigProgBar="7"
                                                onchange="bigProgressbar(this,event)" />
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
                                    <div class="distributionCard1 equalDistCard4 position-relative w-100">
                                      <div class="d-flex justify-content-between">
                                        <div class="distrbnCard1paras">
                                          <p>Total Value</p>
                                          <p class="redRadioSwtchpara">Annuity</p>
                                        </div>
                                        <div class="d-flex">
                                          <div class="button-cover2">
                                            <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 bigBaCard8" checked bigProgBar="8" onchange="bigProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
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
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn disclosure-save d-none">
                                    <span>Save</span>
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                                      <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"/>
                                      <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"/>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div class="disclosure-text-wrapper">
                                <div class="disclosure-textarea" contenteditable="true">
                                  This program illustrates the current values and assumptions of an Indexed Universal Life (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV) are for illustrative and educational purposes only, and are intended to produce insight and discussion points between you and a licensed agent. No claim is made that the IUL is superior to the CVs. Guarantees backed by the claims paying ability of the underwriting insurance company. These graphics and illustrations do not constitute tax, legal or accounting advice. Please consult your own legal or tax counsel to confirm how tax treatment applies to you. The hypothetical results are for illustrative purposes only and should not be deemed a representation of past or future results. Your experience may and likely will vary materially from these results. Tax-free access to cash values are typically done through a policy loan which can reduce death benefits, cash values, incur interest and could cause the policy to lapse. Additional premium payments may be needed to keep the policy in force and in the event of a lapse, outstanding policy loans in excess of unrecovered basis will be subject to ordinary income taxes. Tax laws are subject to change. These values are not guaranteed. Policies still incur costs and charges each year for administration and insurance. This could cause the cash value to go down. You may also lose cash value by surrendering the policy. Life Insurance costs, caps, and participation rates can be changed at the discretion of the insurance company within certain limits, which can positively or adversely affect the performance of the policy.Neither this software nor the presenting agent in any way guarantees future performance, and this presentation is null and void unless accompanied by an approved illustration from the insurance company presented.
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
                  <div class="report-client-list-div tab-id-5" id="legacyTabView">
                    <div class="ComparativeTableMainDiv active rightDivTop5">
                      <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                        <div class="d-flex align-items-center">
                          <div class="button-cover2 prstnRadioBtnHide">
                            <div class="radioBtnDiv r2" id="button-2">
                              <input id="rightCheckBox5" type="checkbox" checked class="checkbox2 rightCheckBox5" rightCheckAttr="5" onchange="rightCheckbox(this,event)" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <label for="rightCheckBox5" class="rghtTopHeadcommon">Legacy</label>
                        </div>
                        <div class="rightLeftDoubleLIneDegine">
                          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                            <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                          </svg>
                        </div>
                      </div>
                      <div class="collapseDivMain collapseDiv5">
                        <hr class="collapseDivHr">
                        <div class="px-3 pt-3 pb-2">
                          <div class="container-fluid">
                            <div class="d-flex justify-content-between flex-gap-12">
                              <div class="mt-3 flex-1">
                                <div class="distributionCard1 equalDistCard1 position-relative w-100">
                                  <div class="d-flex justify-content-between pb-1">
                                    <div class="distrbnCard1paras">
                                      <p>Legacy</p>
                                      <p>LifePro+</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn1 lagecyBigBaCard1" checked lagecyBigProgBar="1" onchange="lagecyBigProgressbar(this,event)" />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="mt-2 ">
                                    <p class="legacyCardPara">Ending Value (Age 95)</p>
                                  </div>
                                </div>
                              </div>
                              <div class="mt-3 flex-1">
                                <div class="distributionCard1 equalDistCard2 position-relative w-100">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Legacy</p>
                                      <p class="blueRadioSwtchpara">Brokerage Account</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv r2 blueRadioSwtch" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn1 lagecyBigBaCard2" checked lagecyBigProgBar="2" onchange="lagecyBigProgressbar(this,event)" />
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
                                  <div class="mt-2 ">
                                    <p class="legacyCardPara">Ending Value (Age 95)</p>
                                  </div>
                                </div>
                              </div>
                              <div class="mt-3 flex-1">
                                <div class="distributionCard1 equalDistCard3 position-relative w-100">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Legacy</p>
                                      <p class="voiletRadioSwtchpara">401K / IRA</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv r2 voiletRadioSwtch" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn1 lagecyBigBaCard3" checked lagecyBigProgBar="3" onchange="lagecyBigProgressbar(this,event)" />
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
                                  <div class="mt-2 ">
                                    <p class="legacyCardPara">Ending Value (Age 95)</p>
                                  </div>
                                </div>
                              </div>                              
                              <div class="mt-3 flex-1">
                                <div class="distributionCard1 equalDistCard4 position-relative w-100">
                                  <div class="d-flex justify-content-between">
                                    <div class="distrbnCard1paras">
                                      <p>Legacy</p>
                                      <p class="redRadioSwtchpara">Annuity</p>
                                    </div>
                                    <div class="d-flex">
                                      <div class="button-cover2">
                                        <div class="radioBtnDiv r2 redRadioSwtch" id="button-2">
                                          <input type="checkbox" class="checkbox2 commonRadioBtn1 lagecyBigBaCard4" checked lagecyBigProgBar="4" onchange="lagecyBigProgressbar(this,event)" />
                                          <div class="knobs2"></div>
                                          <div class="layer2"></div>
                                        </div>
                                      </div>
                                      <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                          <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="mt-2 ">
                                    <p class="legacyCardPara">Ending Value (Age 95)</p>
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
                              <div class="CompProgressAbsltCls legacy">
                                <div class="progressAllBarsDivMain">
                                  <div class="d-flex justify-content-between w-100">
                                    <div class=" cumulativeValuesProgrees progBarSecEachDiv9 bigBarsLagecyJsCls1">
                                      <div class="cumulativeprogreeDivcommon cumulativeProgLifePro bigBarHeightJs9">
                                        <div class="bottomComulativeIncome BottomcumulativeLifePro">
                                          <p>$<span class="bigBarNumberJsCls9">2,172,830</span></p>
                                        </div>
                                        <div class="shortFallCount">
                                          <p class="">SHORTFALL</p>
                                          <p>$3,163,031</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="cumulativeValuesProgrees progBarSecEachDiv10 cumulativeProgCommon10 bigBarsLagecyJsCls2">
                                      <div class="cumulativeprogreeDivcommon cumulativeProgAccount bigBarHeightJs10">
                                        <div class="bottomComulativeIncome BottomcumulativeAccount">
                                          <p>$<span class="bigBarNumberJsCls10">3,172,830</span></p>
                                        </div>
                                        <div class="shortFallCount">
                                          <p class="">SHORTFALL</p>
                                          <p>$3,163,031</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="cumulativeValuesProgrees progBarSecEachDiv11 cumulativeProgCommon11 bigBarsLagecyJsCls3">
                                      <div class="cumulativeprogreeDivcommon cumulativeProgIra bigBarHeightJs11">
                                        <div class="bottomComulativeIncome BottomcumulativeIra">
                                          <p>$<span class="bigBarNumberJsCls11">4,328,300</span></p>
                                        </div>
                                        <div class="shortFallCount">
                                          <p class="">SHORTFALL</p>
                                          <p>$3,163,031</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="cumulativeValuesProgrees progBarSecEachDiv12 cumulativeProgCommon12 bigBarsLagecyJsCls4">
                                      <div class="cumulativeprogreeDivcommon cumulativeProgAnnuity bigBarHeightJs12">
                                        <div class="bottomComulativeIncome BottomcumulativeAnnuity">
                                          <p>$<span class="bigBarNumberJsCls12">3,328,300</span></p>
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

                        <div class="bottom-disclosure px-3" id="disclosure5" data-dc="5">
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
                                      <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"/>
                                      <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"/>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div class="disclosure-text-wrapper">
                                <div class="disclosure-textarea" contenteditable="true">
                                  This program illustrates the current values and assumptions of an Indexed Universal Life (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV) are for illustrative and educational purposes only, and are intended to produce insight and discussion points between you and a licensed agent. No claim is made that the IUL is superior to the CVs. Guarantees backed by the claims paying ability of the underwriting insurance company. These graphics and illustrations do not constitute tax, legal or accounting advice. Please consult your own legal or tax counsel to confirm how tax treatment applies to you. The hypothetical results are for illustrative purposes only and should not be deemed a representation of past or future results. Your experience may and likely will vary materially from these results. Tax-free access to cash values are typically done through a policy loan which can reduce death benefits, cash values, incur interest and could cause the policy to lapse. Additional premium payments may be needed to keep the policy in force and in the event of a lapse, outstanding policy loans in excess of unrecovered basis will be subject to ordinary income taxes. Tax laws are subject to change. These values are not guaranteed. Policies still incur costs and charges each year for administration and insurance. This could cause the cash value to go down. You may also lose cash value by surrendering the policy. Life Insurance costs, caps, and participation rates can be changed at the discretion of the insurance company within certain limits, which can positively or adversely affect the performance of the policy.Neither this software nor the presenting agent in any way guarantees future performance, and this presentation is null and void unless accompanied by an approved illustration from the insurance company presented.
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
                  <div class="report-client-list-div tab-id-6" id="feeAnalysisTabView">
                    <div class="ComparativeTableMainDiv active rightDivTop6">
                      <div class="d-flex justify-content-between px-3 py-2 bb-grey">
                        <div class="d-flex align-items-center">
                          <div class="button-cover2 prstnRadioBtnHide">
                            <div class="radioBtnDiv r2" id="button-2">
                              <input id="rightCheckBox6" type="checkbox" checked class="checkbox2 commonRadioBtn1 rightCheckBox6" rightCheckAttr="6" onchange="rightCheckbox(this,event)" />
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
                            <div class="nav SwtchBtnRprtBldr wide nav-pills" role="tablist"
                              aria-orientation="vertical">
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
                                          <a class="ms-2 deleteButtonAncor deleteBtnVoilet" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
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
                                          <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
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
                                          <a class="ms-2 deleteButtonAncor deleteBtnBlue" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
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
                                          <a class="ms-2 deleteButtonAncor deleteBtnVoilet" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
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
                                          <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 feeGroupBarCard1" checked feeGroupProgBar="1" onchange="feeGroupProgressbar(this,event)" />
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 feeGroupBarCard2" checked feeGroupProgBar="2" onchange="feeGroupProgressbar(this,event)" />
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 feeGroupBarCard3" checked feeGroupProgBar="3" onchange="feeGroupProgressbar(this,event)" />
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
                                              <input type="checkbox" class="checkbox2 commonRadioBtn1 feeGroupBarCard4" checked feeGroupProgBar="4" onchange="feeGroupProgressbar(this,event)" />
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                          </div>
                                          <a class="ms-2 deleteButtonAncor deleteBtnRed" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
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
                                            <div class="position-absolute progressBarbtmNum feeVoiletNumBar1">$<span class="feeClrProgBar7">25,044</span>
                                            </div>
                                          </div>
                                          <div
                                            class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight8 groupedThirdBarsSigleClr3">
                                            <div class="CardProgressBig feeVoiletBar2 feeEqualPercent8">
                                            </div>
                                            <div class="position-absolute progressBarbtmNum feeVoiletNumBar2">$<span class="feeClrProgBar8">35,044</span>
                                            </div>
                                          </div>
                                          <div
                                            class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight9 groupedThirdBarsSigleClr4">
                                            <div class="CardProgressBig feeVoiletBar3 feeEqualPercent9">
                                            </div>
                                            <div class="position-absolute progressBarbtmNum feeVoiletNumBar3">$<span class="feeClrProgBar9">65,044</span>
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
                                            <div class="position-absolute progressBarbtmNum feeRedNumBar1">$<span class="feeClrProgBar10">15,044</span>
                                            </div>
                                          </div>
                                          <div
                                            class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight11 groupedThirdBarsSigleClr3">
                                            <div class="CardProgressBig feeRedBar2 feeEqualPercent11">
                                            </div>
                                            <div class="position-absolute progressBarbtmNum feeRedNumBar2">$<span class="feeClrProgBar11">35,044</span>
                                            </div>
                                          </div>
                                          <div
                                            class="bgImgNoneAndTabRadius feeProgressBarEachDiv feeProgressBarEachHeight12 groupedThirdBarsSigleClr4">
                                            <div class="CardProgressBig feeRedBar3 feeEqualPercent12">
                                            </div>
                                            <div class="position-absolute progressBarbtmNum feeRedNumBar3">$<span class="feeClrProgBar12">65,044</span>
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
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D"></path>
                                      <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D"></path>
                                      <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D"></path>
                                    </svg>
                                  </button>
                                  <button class="btn round-btn disclosure-save d-none">
                                    <span>Save</span>
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                                      <rect x="15.6938" y="2.42676" width="14.1407" height="2.12203" rx="1.06101" transform="rotate(135 15.6938 2.42676)" fill="#9D9D9D"/>
                                      <rect x="5.74683" y="12.4258" width="7.78182" height="2.12203" rx="1.06101" transform="rotate(-135 5.74683 12.4258)" fill="#9D9D9D"/>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div class="disclosure-text-wrapper">
                                <div class="disclosure-textarea" contenteditable="true">
                                  This program illustrates the current values and assumptions of an Indexed Universal Life (IUL) cash value insurance policy. Comparisons made to Comparative Vehicles (CV) are for illustrative and educational purposes only, and are intended to produce insight and discussion points between you and a licensed agent. No claim is made that the IUL is superior to the CVs. Guarantees backed by the claims paying ability of the underwriting insurance company. These graphics and illustrations do not constitute tax, legal or accounting advice. Please consult your own legal or tax counsel to confirm how tax treatment applies to you. The hypothetical results are for illustrative purposes only and should not be deemed a representation of past or future results. Your experience may and likely will vary materially from these results. Tax-free access to cash values are typically done through a policy loan which can reduce death benefits, cash values, incur interest and could cause the policy to lapse. Additional premium payments may be needed to keep the policy in force and in the event of a lapse, outstanding policy loans in excess of unrecovered basis will be subject to ordinary income taxes. Tax laws are subject to change. These values are not guaranteed. Policies still incur costs and charges each year for administration and insurance. This could cause the cash value to go down. You may also lose cash value by surrendering the policy. Life Insurance costs, caps, and participation rates can be changed at the discretion of the insurance company within certain limits, which can positively or adversely affect the performance of the policy.Neither this software nor the presenting agent in any way guarantees future performance, and this presentation is null and void unless accompanied by an approved illustration from the insurance company presented.
                                </div>
                              </div>
                              <div class="disclosure-footer">
                                <div class="row">
                                  <div class="col-md-12 pb-3">
                                    <p class="mb-1"><b>Total Value</b> means cumulative net distributions plus ending account value or death benefit. In other words, what you get out of the account.</p>
                                    <p class="mb-1"><b>Value Efficiency</b> means the ratio of total value to comprehensive fees. In other words, for every dollar of fees, what is the return you get for that fee in terms of total value?</p>
                                    <p class="mb-1"><b>Fees</b> include recurring fees (such as management fees and asset fees), transaction fees, and taxes. For the LIRP, fees include all current costs of insurance, including administrative, mortality, and coverage expenses, as detailed by the illustration.</p>
                                  </div>  
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
        </div>
      </main>
    </div>
  </section>
</template>
<script>
export default {
  props: ["sidebar"]
};
</script>
<style lang="">
</style>