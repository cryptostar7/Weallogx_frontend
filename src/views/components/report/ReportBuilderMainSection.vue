<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="main-section widthClass" id="mainSection">
    <div class="inner-section reportbuilderRightInner">
      <div class="d-md-block sidebar collapse px-0 darkModeSidebarBg">
        <button
          class="sidebar-arrow"
          id="sidebarArrow"
          @click="sideBarCollapse()"
        >
          <svg
            id="sidebarArrowImg"
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.25"
              y="5.45312"
              width="7"
              height="1.5"
              rx="0.75"
              transform="rotate(-45 0.25 5.45312)"
              fill="#23669E"
            />
            <rect
              x="1.3125"
              y="4.5"
              width="7"
              height="1.5"
              rx="0.75"
              transform="rotate(45 1.3125 4.5)"
              fill="#23669E"
            />
          </svg>
        </button>
        <div
          class="
            position-sticky
            h-100
            sidebar-inner
            px-0
            py-0
            position-relative
          "
          id="sidebarInner"
        >
          <div class="reportBuilderLft1 px-3 py-4">
            <h3 class="fs-26 bold-fw text-white mb-20">Report Builder</h3>
            <div class="reportBuilderLftSwtch">
              <button
                class="btn reportSwtchLeft active"
                id="job-seeker-switch-btn"
              >
                Comparative Analysis
              </button>
              <button class="btn reportSwtchLeft" id="job-employer-btn">
                Historical Simulations
              </button>
            </div>
          </div>
          <div class="reportBuilderLft2 px-3 py-4" style="height: 100%">
            <div class="reportBldrLftscroll">
              <div
                class="reportBuilderLftInner active px-3 py-3 mb-3"
                id="reportBuilderLftInner1"
              >
                <div class="lftRadioBtnDiv">
                  <div class="button-cover">
                    <div class="button r" id="button-1">
                      <input
                        type="checkbox"
                        id="reportBldrCheckbox1"
                        class="checkbox"
                        checked
                        @change="myFunction1()"
                      />
                      <div class="knobs"></div>
                      <div class="layer"></div>
                    </div>
                  </div>
                  <label for="reportBldrCheckbox1">Comparative Table</label>
                </div>
                <div>
                  <svg
                    class="leftLinesColor deactiveColor"
                    id="leftTwoLineImg1"
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="5.5"
                      width="13"
                      height="1.5"
                      rx="0.75"
                      fill="#C2C2C2"
                    />
                    <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                  </svg>
                </div>
              </div>
              <div
                class="reportBuilderLftInner active px-3 py-3 mb-3"
                id="reportBuilderLftInner2"
              >
                <div class="lftRadioBtnDiv">
                  <div class="button-cover">
                    <div class="button r" id="button-1">
                      <input
                        type="checkbox"
                        id="reportBldrCheckbox2"
                        class="checkbox"
                        checked
                        @change="myFunction2()"
                      />
                      <div class="knobs"></div>
                      <div class="layer"></div>
                    </div>
                  </div>
                  <label for="reportBldrCheckbox2">Comparative Graph</label>
                </div>
                <div>
                  <svg
                    class="leftLinesColor deactiveColor"
                    id="leftTwoLineImg2"
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="5.5"
                      width="13"
                      height="1.5"
                      rx="0.75"
                      fill="#C2C2C2"
                    />
                    <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                  </svg>
                </div>
              </div>
              <div
                class="reportBuilderLftInner active px-3 py-3 mb-3"
                id="reportBuilderLftInner3"
              >
                <div class="lftRadioBtnDiv">
                  <div class="button-cover">
                    <div class="button r" id="button-1">
                      <input
                        type="checkbox"
                        id="reportBldrCheckbox3"
                        class="checkbox"
                        @change="myFunction3()"
                        checked
                      />
                      <div class="knobs"></div>
                      <div class="layer"></div>
                    </div>
                  </div>
                  <label for="reportBldrCheckbox3">Making Things Equal</label>
                </div>
                <div>
                  <svg
                    class="leftLinesColor deactiveColor"
                    id="leftTwoLineImg3"
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="5.5"
                      width="13"
                      height="1.5"
                      rx="0.75"
                      fill="#C2C2C2"
                    />
                    <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                  </svg>
                </div>
              </div>
              <div
                class="reportBuilderLftInner active px-3 py-3 mb-3"
                id="reportBuilderLftInner4"
              >
                <div class="lftRadioBtnDiv">
                  <div class="button-cover">
                    <div class="button r" id="button-1">
                      <input
                        type="checkbox"
                        id="reportBldrCheckbox4"
                        class="checkbox"
                        checked
                        @change="myFunction4()"
                      />
                      <div class="knobs"></div>
                      <div class="layer"></div>
                    </div>
                  </div>
                  <label for="reportBldrCheckbox4">Cumulative Values</label>
                </div>
                <div>
                  <svg
                    class="leftLinesColor deactiveColor"
                    id="leftTwoLineImg4"
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="5.5"
                      width="13"
                      height="1.5"
                      rx="0.75"
                      fill="#C2C2C2"
                    />
                    <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                  </svg>
                </div>
              </div>
              <div
                class="reportBuilderLftInner active px-3 py-3 mb-3"
                id="reportBuilderLftInner5"
              >
                <div class="lftRadioBtnDiv">
                  <div class="button-cover">
                    <div class="button r" id="button-1">
                      <input
                        type="checkbox"
                        id="reportBldrCheckbox5"
                        class="checkbox"
                        checked
                        @change="myFunction5()"
                      />
                      <div class="knobs"></div>
                      <div class="layer"></div>
                    </div>
                  </div>
                  <label for="reportBldrCheckbox5">Legacy</label>
                </div>
                <div>
                  <svg
                    class="leftLinesColor deactiveColor"
                    id="leftTwoLineImg5"
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="5.5"
                      width="13"
                      height="1.5"
                      rx="0.75"
                      fill="#C2C2C2"
                    />
                    <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                  </svg>
                </div>
              </div>
              <div
                class="reportBuilderLftInner active px-3 py-3 mb-3"
                id="reportBuilderLftInner6"
              >
                <div class="lftRadioBtnDiv">
                  <div class="button-cover">
                    <div class="button r" id="button-1">
                      <input
                        type="checkbox"
                        id="reportBldrCheckbox6"
                        class="checkbox"
                        checked
                        @change="myFunction6()"
                      />
                      <div class="knobs"></div>
                      <div class="layer"></div>
                    </div>
                  </div>
                  <label for="reportBldrCheckbox6">Fee Analysis</label>
                </div>
                <div>
                  <svg
                    class="leftLinesColor deactiveColor"
                    id="leftTwoLineImg6"
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="5.5"
                      width="13"
                      height="1.5"
                      rx="0.75"
                      fill="#C2C2C2"
                    />
                    <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main class="ms-sm-autopx-md-4 right-area">
        <div class="right-area-inner p-relative">
          <div class="right-area-wrapper">
            <div
              class="
                section-heading-div section-heading-bg
                d-flex
                justify-content-between
                gap-20
                flex-wrap flex-md-nowrap
                align-items-center
              "
            >
              <div class="d-flex align-items-center">
                <button
                  class="reportBuilderBr"
                  data-bs-target="#reportNameChangeModal"
                  data-bs-toggle="modal"
                >
                  Br
                </button>
                <div>
                  <h2 class="fs-28 bold-fw m-0 ms-2 reportBuilderBrTxt">
                    Bryant, Roger
                    <span class="fs-20 medium-fw">Allianz Parse</span>
                  </h2>
                </div>
              </div>
            </div>
            <!-- tab 1 -->
            <div class="client-list-div">
              <div class="ComparativeTableMainDiv active" id="rightDiv1">
                <div class="d-flex justify-content-between px-3 py-3">
                  <div class="d-flex align-items-center">
                    <div class="button-cover2">
                      <div class="radioBtnDiv r2" id="button-2">
                        <input
                          type="checkbox"
                          class="checkbox2"
                          checked
                          id="rightCheckBox1"
                          @change="rightCheckbox1()"
                        />
                        <div class="knobs2"></div>
                        <div class="layer2"></div>
                      </div>
                    </div>
                    <label for="rightCheckBox1" class="rghtTopHeadcommon"
                      >Comparative Table</label
                    >
                  </div>
                  <div class="rightLeftDoubleLIneDegine">
                    <svg
                      width="13"
                      height="7"
                      viewBox="0 0 13 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="5.5"
                        width="13"
                        height="1.5"
                        rx="0.75"
                        fill="#C2C2C2"
                      />
                      <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div
                    class="commonCollapse comparativeLessDiv"
                    id="collapseDiv1"
                  >
                    <hr class="collapseDivHr" />
                    <div class="px-3 py-3">
                      <div class="position-relative">
                        <div class="d-flex align-items-center float-end">
                          <div class="radioBtnDiv r2" id="button-2">
                            <input
                              type="checkbox"
                              class="checkbox2"
                              id="showAssets"
                            />
                            <div class="knobs2"></div>
                            <div class="layer2"></div>
                          </div>
                          <label
                            for="showAssets"
                            class="ms-2 fs-12 semi-bold-fw showAssetsTxt"
                            >Show assets one by one</label
                          >
                        </div>
                        <div class="collapseDivmdlHd text-center">
                          Target Analysis
                        </div>
                      </div>
                      <br />
                      <div class="d-flex justify-content-center mt-2">
                        <div
                          class="nav SwtchBtnRprtBldr nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <div
                            class="active"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-distribution"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-distribution"
                            aria-selected="true"
                          >
                            Distribution
                          </div>
                          <div
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-rate-of-return"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-rate-of-return"
                            aria-selected="false"
                          >
                            Rate of Return
                          </div>
                        </div>
                      </div>
                      <div class="tab-content">
                        <div
                          class="tab-pane fade show active"
                          id="v-pills-distribution"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div class="d-flex justify-content-center mt-2">
                            <div
                              class="nav mltplSwtchDiv nav-pills"
                              id="v-pills-tab"
                              role="tablist"
                              aria-orientation="vertical"
                            >
                              <div
                                class="active"
                                id="v-pills-default-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-default"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-default"
                                aria-selected="true"
                              >
                                Amount
                              </div>
                              <div
                                id="v-pills-longevity-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-longevity"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-longevity"
                                aria-selected="true"
                              >
                                Longevity
                              </div>
                              <div
                                id="v-pills-endingvalue-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-endingvalue"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-endingvalue"
                                aria-selected="true"
                              >
                                Ending Value
                              </div>
                              <div
                                id="v-pills-deathBenifit-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-deathBenifit"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-deathBenifit"
                                aria-selected="true"
                              >
                                Death Benefit
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-rate-of-return"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div class="d-flex justify-content-center mt-2">
                            <div
                              class="nav mltplSwtchDiv nav-pills"
                              id="v-pills-tab"
                              role="tablist"
                              aria-orientation="vertical"
                            >
                              <div
                                class="active"
                                id="v-pills-default-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-default"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-default"
                                aria-selected="true"
                              >
                                Default
                              </div>
                              <div
                                id="v-pills-longevity-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-longevity"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-longevity"
                                aria-selected="true"
                              >
                                Longevity
                              </div>
                              <div
                                id="v-pills-endingvalue-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-endingvalue"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-endingvalue"
                                aria-selected="true"
                              >
                                Ending Value
                              </div>
                              <div
                                id="v-pills-deathBenifit-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-deathBenifit"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-deathBenifit"
                                aria-selected="true"
                              >
                                Death Benefit
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="container-fluid mt-5">
                        <div class="row tablesMainDiv">
                          <div class="col-3 col-md-2 px-1">
                            <div class="d-flex">
                              <div
                                class="
                                  reportTablesDiv
                                  reportTablesDiv1
                                  customMarginTop
                                "
                              >
                                <table class="table">
                                  <thead>
                                    <th>Yr</th>
                                    <th>Age</th>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        1
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        2
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        3
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        4
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        5
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        6
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        7
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        8
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        9
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        10
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        11
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        12
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        13
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        14
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        15
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        16
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        17
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        18
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        19
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        20
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        21
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        22
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        23
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        24
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        25
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        26
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        27
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        28
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        29
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        30
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        31
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        32
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        33
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        34
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        35
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        36
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        37
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="table1Td" data-label="Year">
                                        38
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        34
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!-- 1 end -->

                              <div
                                class="
                                  reportTablesDiv
                                  ms-2
                                  reportTablesDiv2
                                  customMarginTop
                                "
                              >
                                <table class="table">
                                  <thead>
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
                            <!--  -->
                            <div class="reportTablesDiv reportTablesDiv3">
                              <div class="lifeProPlus">
                                <div class="row">
                                  <div class="col-12">
                                    <button class="btn float-end">
                                      <svg
                                        class="lifeProEditBtn"
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          x="0.575"
                                          y="2.57598"
                                          width="9.85"
                                          height="9.85"
                                          rx="1.425"
                                          fill="transparent"
                                          stroke="#0E6651"
                                          stroke-width="1.15"
                                        />
                                        <path
                                          d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                          fill="#0E6651"
                                          stroke="#0E6651"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                                <div class="row mt-3">
                                  <div class="col-md-4">
                                    <p class="lifeProPlusPara1">
                                      RATE OF RETURN (RoR)
                                    </p>
                                    <p class="lifeProPlusPara2">6.15%</p>
                                  </div>
                                  <div class="col-md-8">
                                    <p class="lifeProPlusPara1">
                                      INTERNAL RATE OF RETURN (IRR)
                                    </p>
                                    <p class="lifeProPlusPara2">5.65%</p>
                                  </div>
                                </div>
                                <div class="lifeProBtmDiv lifeProBtmDiv1">
                                  <p>LifePro+</p>
                                </div>
                              </div>
                              <table class="table table3 mt-1 w-100">
                                <thead>
                                  <th>Distributions</th>
                                  <th>Account value</th>
                                  <th>Surrender value</th>
                                  <th>Death Benefit</th>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                  <tr>
                                    <td class="blankTd" data-label="blank">
                                      -
                                    </td>
                                    <td data-label="acount">$65,777</td>
                                    <td data-label="surrender">$65,777</td>
                                    <td data-label="death">$65,777</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            class="col-4 col-md-2 px-1"
                            id="table4MainTopDiv"
                          >
                            <!--  -->
                            <div class="empty">
                              <div class="fill" draggable="true">
                                <div class="reportTablesDiv reportTablesDiv4">
                                  <div
                                    class="
                                      lifeProPlus
                                      position-relative
                                      borderRghtTopNone
                                    "
                                    id="table4CmnClr"
                                  >
                                    <div class="dblLineAbslt">
                                      <img
                                        src="@/assets/images/icons/double-line.svg"
                                        alt="line"
                                      />
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div class="float-end mt-3">
                                          <div
                                            class="d-flex align-items-center"
                                          >
                                            <a
                                              href="#"
                                              class="viewBtnAccount"
                                              id="acountViewBtn"
                                              @click="accountDivHide()"
                                              >&nbsp;<svg
                                                width="19"
                                                height="12"
                                                viewBox="0 0 19 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M9.39118 1C5.53587 1 2.88599 3.65157 1.7016 5.14103C1.23825 5.72373 1.24669 6.52522 1.71937 7.10039C2.93001 8.57358 5.61753 11.2 9.39118 11.2C13.1273 11.2 15.9092 8.62559 17.2004 7.14471C17.7187 6.55025 17.7276 5.69829 17.2185 5.09586C15.9534 3.59865 13.2078 1 9.39118 1Z"
                                                  fill="white"
                                                  stroke="#1660A4"
                                                  stroke-width="1.25"
                                                />
                                                <circle
                                                  cx="9.49922"
                                                  cy="6.0998"
                                                  r="2.55"
                                                  fill="white"
                                                  stroke="#1660A4"
                                                  stroke-width="1.25"
                                                /></svg
                                            ></a>
                                            <a
                                              href="#"
                                              class="hideBtnAccount"
                                              id="acountHideBtn"
                                              @click="accountDivShow()"
                                            >
                                              <svg
                                                width="19"
                                                height="12"
                                                viewBox="0 0 19 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M9.29743 1C5.44212 1 2.79224 3.65157 1.60785 5.14103C1.1445 5.72373 1.15294 6.52522 1.62562 7.10039C2.83626 8.57358 5.52378 11.2 9.29743 11.2C13.0335 11.2 15.8155 8.62559 17.1066 7.14471C17.625 6.55025 17.6338 5.69829 17.1248 5.09586C15.8597 3.59865 13.1141 1 9.29743 1Z"
                                                  fill="white"
                                                  stroke="#1660A4"
                                                  stroke-width="1.25"
                                                />
                                                <circle
                                                  cx="9.40547"
                                                  cy="6.10078"
                                                  r="2.55"
                                                  fill="white"
                                                  stroke="#1660A4"
                                                  stroke-width="1.25"
                                                />
                                                <rect
                                                  x="0.625"
                                                  y="0.333984"
                                                  width="21"
                                                  height="1.25"
                                                  rx="0.625"
                                                  transform="rotate(30 0.625 0.333984)"
                                                  fill="#1660A4"
                                                />
                                              </svg>
                                            </a>

                                            <a
                                              href="#"
                                              class="editBtnAccount mx-3"
                                              id="accountEditBtnHide"
                                              >&nbsp;<svg
                                                width="13"
                                                height="13"
                                                viewBox="0 0 13 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  x="0.575"
                                                  y="2.57598"
                                                  width="9.85"
                                                  height="9.85"
                                                  rx="1.425"
                                                  fill="white"
                                                  stroke="#1660A4"
                                                  stroke-width="1.15"
                                                />
                                                <path
                                                  d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                  stroke="#1660A4"
                                                  stroke-width="1.25"
                                                />
                                              </svg>
                                            </a>
                                            <a
                                              href="#"
                                              data-bs-target="#deleteAccountModal"
                                              data-bs-toggle="modal"
                                              class="deleteBtnAccount"
                                              id="accountDeleteBtnHide"
                                              >&nbsp;<svg
                                                width="12"
                                                height="13"
                                                viewBox="0 0 12 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"
                                                  stroke="#1660A4"
                                                  stroke-width="1.25"
                                                />
                                                <rect
                                                  x="8.35156"
                                                  y="5.41406"
                                                  width="1.25"
                                                  height="4.70588"
                                                  rx="0.625"
                                                  transform="rotate(90 8.35156 5.41406)"
                                                  fill="#1660A4"
                                                />
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row mt-4">
                                      <div class="col-md-4">
                                        <p
                                          class="lifeProPlusPara3"
                                          id="acountColorCommon"
                                        >
                                          RoR
                                        </p>
                                        <p
                                          class="lifeProPlusPara2"
                                          id="acountColorCommon"
                                        >
                                          6.50%
                                        </p>
                                      </div>
                                      <div class="col-md-8">
                                        <p
                                          class="lifeProPlusPara3"
                                          id="acountColorCommon"
                                        >
                                          IRR
                                        </p>
                                        <p
                                          class="lifeProPlusPara2"
                                          id="acountColorCommon"
                                        >
                                          3.82%
                                        </p>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div
                                          class="lifeProBtmDiv lifeProBtmDiv2"
                                          id="acntBottomTxt"
                                        >
                                          <p>Account</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <table
                                    class="table table4 mt-1"
                                    id="table4Hide"
                                  >
                                    <thead>
                                      <th>Distributions</th>
                                      <th>Net Balance</th>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>

                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>

                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>

                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-4 col-md-2 px-1"
                            id="table5MainTopDiv"
                          >
                            <!--  -->
                            <div class="empty">
                              <div class="fill" draggable="true">
                                <div class="reportTablesDiv reportTablesDiv5">
                                  <div
                                    class="
                                      lifeProPlus
                                      position-relative
                                      borderRghtTopNone
                                    "
                                    id="table5CmnClr"
                                  >
                                    <div class="dblLineAbslt">
                                      <img
                                        src="@/assets/images/icons/double-line.svg"
                                        alt="line"
                                      />
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div class="float-end mt-3">
                                          <div
                                            class="d-flex align-items-center"
                                          >
                                            <a
                                              href="#"
                                              class="viewBtnIra"
                                              id="iraViewBtn"
                                              @click="iraDivHide()"
                                              >&nbsp;<svg
                                                width="19"
                                                height="12"
                                                viewBox="0 0 19 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M9.39118 1C5.53587 1 2.88599 3.65157 1.7016 5.14103C1.23825 5.72373 1.24669 6.52522 1.71937 7.10039C2.93001 8.57358 5.61753 11.2 9.39118 11.2C13.1273 11.2 15.9092 8.62559 17.2004 7.14471C17.7187 6.55025 17.7276 5.69829 17.2185 5.09586C15.9534 3.59865 13.2078 1 9.39118 1Z"
                                                  fill="white"
                                                  stroke="#763CA3"
                                                  stroke-width="1.25"
                                                />
                                                <circle
                                                  cx="9.49922"
                                                  cy="6.0998"
                                                  r="2.55"
                                                  fill="white"
                                                  stroke="#763CA3"
                                                  stroke-width="1.25"
                                                /></svg
                                            ></a>
                                            <a
                                              href="#"
                                              class="hideBtnIra"
                                              id="iraHideBtn"
                                              @click="iraDivShow()"
                                            >
                                              <svg
                                                width="19"
                                                height="12"
                                                viewBox="0 0 19 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M9.29743 1C5.44212 1 2.79224 3.65157 1.60785 5.14103C1.1445 5.72373 1.15294 6.52522 1.62562 7.10039C2.83626 8.57358 5.52378 11.2 9.29743 11.2C13.0335 11.2 15.8155 8.62559 17.1066 7.14471C17.625 6.55025 17.6338 5.69829 17.1248 5.09586C15.8597 3.59865 13.1141 1 9.29743 1Z"
                                                  fill="white"
                                                  stroke="#763CA3"
                                                  stroke-width="1.25"
                                                />
                                                <circle
                                                  cx="9.40547"
                                                  cy="6.10078"
                                                  r="2.55"
                                                  fill="white"
                                                  stroke="#763CA3"
                                                  stroke-width="1.25"
                                                />
                                                <rect
                                                  x="0.625"
                                                  y="0.333984"
                                                  width="21"
                                                  height="1.25"
                                                  rx="0.625"
                                                  transform="rotate(30 0.625 0.333984)"
                                                  fill="#763CA3"
                                                />
                                              </svg>
                                            </a>
                                            <a
                                              href="#"
                                              class="editBtnIra mx-3"
                                              id="iraEditBtnHide"
                                              >&nbsp;<svg
                                                width="13"
                                                height="13"
                                                viewBox="0 0 13 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  x="0.575"
                                                  y="2.57598"
                                                  width="9.85"
                                                  height="9.85"
                                                  rx="1.425"
                                                  fill="white"
                                                  stroke="#763CA3"
                                                  stroke-width="1.15"
                                                />
                                                <path
                                                  d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                  stroke="#763CA3"
                                                  stroke-width="1.15"
                                                />
                                              </svg>
                                            </a>
                                            <a
                                              href="#"
                                              data-bs-target="#deleteIraModal"
                                              data-bs-toggle="modal"
                                              class="deleteBtnIra"
                                              id="iraDeleteBtnHide"
                                              >&nbsp;<svg
                                                width="12"
                                                height="13"
                                                viewBox="0 0 12 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"
                                                  stroke="#763CA3"
                                                  stroke-width="1.25"
                                                />
                                                <rect
                                                  x="8.35156"
                                                  y="5.41406"
                                                  width="1.25"
                                                  height="4.70588"
                                                  rx="0.625"
                                                  transform="rotate(90 8.35156 5.41406)"
                                                  fill="#763CA3"
                                                />
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row mt-4">
                                      <div class="col-md-4">
                                        <p class="lifeProPlusPara5">RoR</p>
                                        <p class="lifeProPlusPara2">6.50%</p>
                                      </div>
                                      <div class="col-md-8">
                                        <p class="lifeProPlusPara5">IRR</p>
                                        <p class="lifeProPlusPara2">3.82%</p>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div
                                          class="lifeProBtmDiv lifeProBtmDiv3"
                                          id="iraBottomTxt"
                                        >
                                          <p>401K / IRA</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <table
                                    class="table table5 mt-1"
                                    id="table5Hide"
                                  >
                                    <thead>
                                      <th>Distributions</th>
                                      <th>Net Balance</th>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>

                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>

                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-4 col-md-2 px-1"
                            id="table6MainTopDiv"
                          >
                            <!--  -->
                            <div class="empty">
                              <div class="fill" draggable="true">
                                <div class="reportTablesDiv reportTablesDiv6">
                                  <div
                                    class="
                                      lifeProPlus
                                      position-relative
                                      borderRghtTopNone
                                    "
                                    id="table6CmnClr"
                                  >
                                    <div class="dblLineAbslt">
                                      <img
                                        src="@/assets/images/icons/double-line.svg"
                                        alt="line"
                                      />
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div class="float-end mt-3">
                                          <div
                                            class="d-flex align-items-center"
                                          >
                                            <a
                                              href="#"
                                              class="viewBtnAnnuity"
                                              id="annuityViewBtn"
                                              @click="annuityDivHide()"
                                              >&nbsp;<svg
                                                width="19"
                                                height="12"
                                                viewBox="0 0 19 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M9.39118 1C5.53587 1 2.88599 3.65157 1.7016 5.14103C1.23825 5.72373 1.24669 6.52522 1.71937 7.10039C2.93001 8.57358 5.61753 11.2 9.39118 11.2C13.1273 11.2 15.9092 8.62559 17.2004 7.14471C17.7187 6.55025 17.7276 5.69829 17.2185 5.09586C15.9534 3.59865 13.2078 1 9.39118 1Z"
                                                  fill="white"
                                                  stroke="#9D2B2B"
                                                  stroke-width="1.25"
                                                />
                                                <circle
                                                  cx="9.49922"
                                                  cy="6.0998"
                                                  r="2.55"
                                                  fill="white"
                                                  stroke="#9D2B2B"
                                                  stroke-width="1.25"
                                                /></svg
                                            ></a>
                                            <a
                                              href="#"
                                              class="hideBtnAnnuity"
                                              id="annuityHideBtn"
                                              @click="annuityDivShow()"
                                            >
                                              <svg
                                                width="19"
                                                height="12"
                                                viewBox="0 0 19 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M9.29743 1C5.44212 1 2.79224 3.65157 1.60785 5.14103C1.1445 5.72373 1.15294 6.52522 1.62562 7.10039C2.83626 8.57358 5.52378 11.2 9.29743 11.2C13.0335 11.2 15.8155 8.62559 17.1066 7.14471C17.625 6.55025 17.6338 5.69829 17.1248 5.09586C15.8597 3.59865 13.1141 1 9.29743 1Z"
                                                  fill="white"
                                                  stroke="#9D2B2B"
                                                  stroke-width="1.25"
                                                />
                                                <circle
                                                  cx="9.40547"
                                                  cy="6.10078"
                                                  r="2.55"
                                                  fill="white"
                                                  stroke="#9D2B2B"
                                                  stroke-width="1.25"
                                                />
                                                <rect
                                                  x="0.625"
                                                  y="0.333984"
                                                  width="21"
                                                  height="1.25"
                                                  rx="0.625"
                                                  transform="rotate(30 0.625 0.333984)"
                                                  fill="#9D2B2B"
                                                />
                                              </svg>
                                            </a>
                                            <a
                                              href="#"
                                              class="editBtnAnnuity mx-3"
                                              id="annuityEditBtnHide"
                                              >&nbsp;<svg
                                                width="13"
                                                height="13"
                                                viewBox="0 0 13 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  x="0.575"
                                                  y="2.57598"
                                                  width="9.85"
                                                  height="9.85"
                                                  rx="1.425"
                                                  fill="white"
                                                  stroke="#9D2B2B"
                                                  stroke-width="1.15"
                                                />
                                                <path
                                                  d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                                  stroke="#9D2B2B"
                                                  stroke-width="1.15"
                                                />
                                                <path
                                                  d="M4.80078 8.50156L5.33049 6.96094L6.40078 8.02L4.80078 8.50156Z"
                                                  stroke="#9D2B2B"
                                                  stroke-width="1.15"
                                                />
                                              </svg>
                                            </a>
                                            <a
                                              href="#"
                                              data-bs-target="#deleteAnnuityModal"
                                              data-bs-toggle="modal"
                                              class="deleteBtnAnnuity"
                                              id="annuityDeleteBtnHide"
                                              >&nbsp;<svg
                                                width="12"
                                                height="13"
                                                viewBox="0 0 12 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M1.9682 10.6877L1.10988 2.09945C1.05105 1.51078 1.51332 1 2.10492 1H9.90056C10.4902 1 10.9518 1.50753 10.8961 2.09452L10.0807 10.6828C10.0319 11.1961 9.60083 11.5882 9.08516 11.5882H2.96324C2.44947 11.5882 2.01929 11.1989 1.9682 10.6877Z"
                                                  stroke="#9D2B2B"
                                                  stroke-width="1.25"
                                                />
                                                <rect
                                                  x="8.35156"
                                                  y="5.41406"
                                                  width="1.25"
                                                  height="4.70588"
                                                  rx="0.625"
                                                  transform="rotate(90 8.35156 5.41406)"
                                                  fill="#9D2B2B"
                                                />
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row mt-4">
                                      <div class="col-md-4">
                                        <p class="lifeProPlusPara7">RoR</p>
                                        <p class="lifeProPlusPara2">6.50%</p>
                                      </div>
                                      <div class="col-md-8">
                                        <p class="lifeProPlusPara7">IRR</p>
                                        <p class="lifeProPlusPara2">3.82%</p>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div
                                          class="lifeProBtmDiv lifeProBtmDiv4"
                                          id="annuityBottomTxt"
                                        >
                                          <p>Annuity</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <table
                                    class="table table6 mt-1"
                                    id="table6Hide"
                                  >
                                    <thead>
                                      <th>Distributions</th>
                                      <th>Net Balance</th>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>

                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>

                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>

                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>

                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>

                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>

                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                      <tr>
                                        <td class="blankTd" data-label="blank">
                                          -
                                        </td>
                                        <td data-label="acount">$65,777</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p class="compSumAnlysPara mt-2">Summary Analysis</p>
                        <div class="mt-2">
                          <div class="row">
                            <div class="col-3 col-md-2 px-1">
                              <div
                                class="
                                  reportTablesDiv
                                  reportTablesDiv1
                                  SummaryTableDiv1
                                "
                              >
                                <table class="table mt-1 secondTable">
                                  <thead>
                                    <th
                                      style="
                                        background: none !important;
                                        border: none;
                                      "
                                    ></th>
                                    <th
                                      style="
                                        border-radius: 6px;
                                        vertical-align: middle;
                                      "
                                    >
                                      Deposits
                                    </th>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td
                                        class="table1Td"
                                        data-label="Year"
                                        style="border: none"
                                      >
                                        Totals
                                      </td>
                                      <td class="table1Td" data-label="Age">
                                        $328,885
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        colspan="2"
                                        class="table1Td totalValueTd"
                                        data-label="Age"
                                      >
                                        Total Value
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        colspan="2"
                                        class="table1Td shortFallTd"
                                        style="text-align: left"
                                        data-label="Age"
                                      >
                                        Shortfall
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="col-9 col-md-4 px-1">
                              <div class="reportTablesDiv reportTablesDiv3">
                                <table class="table table3 mt-1 secondTable">
                                  <thead>
                                    <th
                                      colspan="2"
                                      style="
                                        border-radius: 6px;
                                        vertical-align: middle;
                                      "
                                    >
                                      Distributions
                                    </th>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td data-label="surrender">$65,777</td>
                                      <td data-label="death">$65,777</td>
                                    </tr>

                                    <tr>
                                      <td data-label="surrender">$65,777</td>
                                      <td data-label="death">$65,777</td>
                                    </tr>
                                    <tr>
                                      <td data-label="surrender">$65,777</td>
                                      <td data-label="death">$65,777</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>

                            <div
                              class="col-4 col-md-2 px-1"
                              id="bottomTable4MainTopDiv"
                            >
                              <div class="empty">
                                <div class="fill" draggable="true">
                                  <div class="reportTablesDiv reportTablesDiv4">
                                    <table
                                      class="table table4 mt-1"
                                      id="bottomTable4Hide"
                                    >
                                      <thead>
                                        <th
                                          colspan="2"
                                          style="
                                            border-radius: 6px;
                                            vertical-align: middle;
                                          "
                                        >
                                          Distributions
                                        </th>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td
                                            class="blankTd"
                                            data-label="blank"
                                          >
                                            -
                                          </td>
                                          <td data-label="acount">
                                            dddgfhftdd
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            class="blankTd"
                                            data-label="blank"
                                          >
                                            -
                                          </td>
                                          <td data-label="acount">$65,777</td>
                                        </tr>
                                        <tr>
                                          <td
                                            class="blankTd"
                                            data-label="blank"
                                          >
                                            -
                                          </td>
                                          <td data-label="acount">$65,777</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-4 col-md-2 px-1"
                              id="bottomTable5MainTopDiv"
                            >
                              <div class="empty" id="table5MainTopDiv">
                                <div class="fill" draggable="true">
                                  <div class="reportTablesDiv reportTablesDiv5">
                                    <table
                                      class="table table5 mt-1"
                                      id="bottomTable5Hide"
                                    >
                                      <thead>
                                        <th
                                          colspan="2"
                                          style="
                                            border-radius: 6px;
                                            vertical-align: middle;
                                          "
                                        >
                                          Distributions
                                        </th>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td
                                            class="blankTd"
                                            data-label="blank"
                                          >
                                            -
                                          </td>
                                          <td data-label="acount">$65,777</td>
                                        </tr>
                                        <tr>
                                          <td
                                            class="blankTd"
                                            data-label="blank"
                                          >
                                            -
                                          </td>
                                          <td data-label="acount">$65,777</td>
                                        </tr>
                                        <tr>
                                          <td
                                            class="blankTd"
                                            data-label="blank"
                                          >
                                            -
                                          </td>
                                          <td data-label="acount">$65,777</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-4 col-md-2 px-1"
                              id="bottomTable6MainTopDiv"
                            >
                              <div class="empty">
                                <div class="fill" draggable="true">
                                  <div class="reportTablesDiv reportTablesDiv6">
                                    <table
                                      class="table table6 mt-1"
                                      id="bottomTable6Hide"
                                    >
                                      <thead>
                                        <th
                                          colspan="2"
                                          style="
                                            border-radius: 6px;
                                            vertical-align: middle;
                                          "
                                        >
                                          Distributions
                                        </th>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td
                                            class="blankTd"
                                            data-label="blank"
                                          >
                                            -
                                          </td>
                                          <td data-label="acount">$65,777</td>
                                        </tr>
                                        <tr>
                                          <td
                                            class="blankTd"
                                            data-label="blank"
                                          >
                                            -
                                          </td>
                                          <td data-label="acount">$65,777</td>
                                        </tr>
                                        <tr>
                                          <td
                                            class="blankTd"
                                            data-label="blank"
                                          >
                                            -
                                          </td>
                                          <td data-label="acount">$65,777</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-3 mb-3" id="hideOnCollapse">
                  <div
                    class="comparativeSeeAllBtn mt-2"
                    id="comparativeSeeAllBtn"
                  >
                    <button class="btn form-control" @click="showMore()">
                      + SEE ALL
                    </button>
                  </div>
                  <div class="comparativeSeeAllBtn" id="comparativeSeeLessBtn">
                    <button class="btn form-control" @click="showLess()">
                      - SEE Less
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 2nd tab -->
            <div class="client-list-div">
              <div class="ComparativeTableMainDiv active" id="rightDiv2">
                <div class="d-flex justify-content-between px-3 py-3">
                  <div class="d-flex align-items-center">
                    <div class="button-cover2">
                      <div class="radioBtnDiv r2" id="button-2">
                        <input
                          type="checkbox"
                          checked
                          class="checkbox2"
                          id="rightCheckBox2"
                          @change="rightCheckbox2()"
                        />
                        <div class="knobs2"></div>
                        <div class="layer2"></div>
                      </div>
                    </div>
                    <label for="rightCheckBox2" class="rghtTopHeadcommon"
                      >Comparative Graph</label
                    >
                  </div>
                  <div class="rightLeftDoubleLIneDegine">
                    <svg
                      width="13"
                      height="7"
                      viewBox="0 0 13 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="5.5"
                        width="13"
                        height="1.5"
                        rx="0.75"
                        fill="#C2C2C2"
                      />
                      <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                    </svg>
                  </div>
                </div>
                <div class="collapseDivMain" id="collapseDiv2">
                  <!-- <hr class="collapseDivHr">
                  <div class="px-3 py-3">

                    Content HERE


                  </div> -->
                </div>
              </div>
            </div>
            <!-- tab 3 -->
            <div class="client-list-div">
              <div class="ComparativeTableMainDiv active" id="rightDiv3">
                <div class="d-flex justify-content-between px-3 py-3">
                  <div class="d-flex align-items-center">
                    <div class="button-cover2">
                      <div class="radioBtnDiv r2" id="button-2">
                        <input
                          type="checkbox"
                          class="checkbox2"
                          id="rightCheckBox3"
                          @change="rightCheckbox3()"
                          checked
                        />
                        <div class="knobs2"></div>
                        <div class="layer2"></div>
                      </div>
                    </div>
                    <label for="rightCheckBox3" class="rghtTopHeadcommon"
                      >Making Things Equal
                      <span class="ms-3 equalThingTabTxt"
                        >The distribution amounts required to match the
                        LIRP.</span
                      ></label
                    >
                  </div>
                  <div class="rightLeftDoubleLIneDegine">
                    <svg
                      width="13"
                      height="7"
                      viewBox="0 0 13 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="5.5"
                        width="13"
                        height="1.5"
                        rx="0.75"
                        fill="#C2C2C2"
                      />
                      <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                    </svg>
                  </div>
                </div>
                <div class="collapseDivMain" id="collapseDiv3">
                  <hr class="collapseDivHr" />
                  <div class="px-3 py-3">
                    <div class="d-flex justify-content-center mt-2">
                      <div
                        class="nav SwtchBtnRprtBldr nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <div
                          class="active"
                          id="v-pills-distribution-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-distribution"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-distribution"
                          aria-selected="true"
                        >
                          Distribution
                        </div>
                        <div
                          id="v-pills-rate-of-return-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-rate-of-return"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-rate-of-return"
                          aria-selected="false"
                        >
                          Rate of Return
                        </div>
                      </div>
                    </div>
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-md-3 mt-5">
                          <div class="distributionCard1 equalDistCard1">
                            <div class="d-flex justify-content-between">
                              <div class="distrbnCard1paras">
                                <p>Distributions</p>
                                <p>LifePro+</p>
                              </div>
                              <div class="d-flex">
                                <div class="button-cover2">
                                  <div
                                    class="radioBtnDiv greenRadioSwtch r2"
                                    id="button-2"
                                  >
                                    <input
                                      type="checkbox"
                                      class="checkbox2"
                                      checked
                                    />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                  </div>
                                </div>
                                <a
                                  class="ms-2 deleteButtonAncor deleteBtnGreen"
                                >
                                  <svg
                                    width="9"
                                    height="10"
                                    viewBox="0 0 9 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                      stroke="#9D9D9D"
                                    />
                                    <rect
                                      x="6.11719"
                                      y="4.31055"
                                      width="1"
                                      height="3.52941"
                                      rx="0.5"
                                      transform="rotate(90 6.11719 4.31055)"
                                      fill="#9D9D9D"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div class="mt-2 d-flex">
                              <div class="CardProgressBar greenProgress1">
                                <div
                                  class="CardProgress"
                                  style="height: 50%"
                                ></div>
                              </div>
                              <p class="ms-3 CardProgressnym carValue1">
                                $85,044
                              </p>
                            </div>
                            <div class="d-flex justify-content-center">
                              <a href="javascript:void(0)" class="AddNoteBtn"
                                >Add Note</a
                              >
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div class="col-md-3 mt-5">
                          <div class="distributionCard1 equalDistCard2">
                            <div class="d-flex justify-content-between">
                              <div class="distrbnCard1paras">
                                <p>Distributions</p>
                                <p class="blueRadioSwtchpara">Account</p>
                              </div>
                              <div class="d-flex">
                                <div class="button-cover2">
                                  <div
                                    class="radioBtnDiv r2 blueRadioSwtch"
                                    id="button-2"
                                  >
                                    <input
                                      type="checkbox"
                                      class="checkbox2"
                                      checked
                                    />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                  </div>
                                </div>
                                <a class="ms-2 deleteButtonAncor deleteBtnBlue">
                                  <svg
                                    width="9"
                                    height="10"
                                    viewBox="0 0 9 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                      stroke="#9D9D9D"
                                    />
                                    <rect
                                      x="6.11719"
                                      y="4.31055"
                                      width="1"
                                      height="3.52941"
                                      rx="0.5"
                                      transform="rotate(90 6.11719 4.31055)"
                                      fill="#9D9D9D"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div class="mt-2 d-flex">
                              <div class="CardProgressBar blueProgress1">
                                <div
                                  class="CardProgress blueProgress2"
                                  style="height: 50%"
                                ></div>
                              </div>
                              <p
                                class="ms-3 CardProgressnym blueRadioSwtchpara"
                              >
                                $85,044
                              </p>
                              <p
                                class="ms-3 CardProgressnym blueRadioSwtchpara"
                              >
                                $85,044
                              </p>
                              <p
                                class="ms-3 CardProgressnym blueRadioSwtchpara"
                              >
                                $85,044
                              </p>
                            </div>
                            <div class="d-flex justify-content-center">
                              <a href="javascript:void(0)" class="AddNoteBtn"
                                >Add Note</a
                              >
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div class="col-md-3 mt-5">
                          <div class="distributionCard1 equalDistCard3">
                            <div class="d-flex justify-content-between">
                              <div class="distrbnCard1paras">
                                <p>Distributions</p>
                                <p class="voiletRadioSwtchpara">401K / IRA</p>
                              </div>
                              <div class="d-flex">
                                <div class="button-cover2">
                                  <div
                                    class="radioBtnDiv r2 voiletRadioSwtch"
                                    id="button-2"
                                  >
                                    <input
                                      type="checkbox"
                                      class="checkbox2"
                                      checked
                                    />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                  </div>
                                </div>
                                <a
                                  class="ms-2 deleteButtonAncor deleteBtnVoilet"
                                >
                                  <svg
                                    width="9"
                                    height="10"
                                    viewBox="0 0 9 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                      stroke="#9D9D9D"
                                    />
                                    <rect
                                      x="6.11719"
                                      y="4.31055"
                                      width="1"
                                      height="3.52941"
                                      rx="0.5"
                                      transform="rotate(90 6.11719 4.31055)"
                                      fill="#9D9D9D"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div class="mt-2 d-flex">
                              <div class="CardProgressBar voiletProgress1">
                                <div
                                  class="CardProgress voiletProgress2"
                                  style="height: 50%"
                                ></div>
                              </div>
                              <p
                                class="
                                  ms-3
                                  CardProgressnym
                                  voiletRadioSwtchpara
                                "
                              >
                                $85,044
                              </p>
                              <p
                                class="
                                  ms-2
                                  CardProgressnym
                                  voiletRadioSwtchpara
                                "
                              >
                                $85,044
                              </p>
                              <p
                                class="
                                  ms-2
                                  CardProgressnym
                                  voiletRadioSwtchpara
                                "
                              >
                                $85,044
                              </p>
                            </div>
                            <div class="d-flex justify-content-center">
                              <a href="javascript:void(0)" class="AddNoteBtn"
                                >Add Note</a
                              >
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div class="col-md-3 mt-5">
                          <div class="distributionCard1 equalDistCard4">
                            <div class="d-flex justify-content-between">
                              <div class="distrbnCard1paras">
                                <p>Distributions</p>
                                <p class="redRadioSwtchpara">Annuity</p>
                              </div>
                              <div class="d-flex">
                                <div class="button-cover2">
                                  <div
                                    class="radioBtnDiv r2 redRadioSwtch"
                                    id="button-2"
                                  >
                                    <input
                                      type="checkbox"
                                      class="checkbox2"
                                      checked
                                    />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                  </div>
                                </div>
                                <a class="ms-2 deleteButtonAncor deleteBtnRed">
                                  <svg
                                    width="9"
                                    height="10"
                                    viewBox="0 0 9 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                      stroke="#9D9D9D"
                                    />
                                    <rect
                                      x="6.11719"
                                      y="4.31055"
                                      width="1"
                                      height="3.52941"
                                      rx="0.5"
                                      transform="rotate(90 6.11719 4.31055)"
                                      fill="#9D9D9D"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div class="mt-2 d-flex">
                              <div class="CardProgressBar redProgress1">
                                <div
                                  class="CardProgress redProgress2"
                                  style="height: 50%"
                                ></div>
                              </div>
                              <p class="ms-3 CardProgressnym redRadioSwtchpara">
                                $85,044
                              </p>
                              <p class="ms-3 CardProgressnym redRadioSwtchpara">
                                $85,044
                              </p>
                              <p class="ms-3 CardProgressnym redRadioSwtchpara">
                                $85,044
                              </p>
                            </div>
                            <div class="d-flex justify-content-center">
                              <a href="javascript:void(0)" class="AddNoteBtn"
                                >Add Note</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="container-fluid">
                      <div class="mainProgrssBarDiv mt-2">
                        <div>
                          <!--  -->
                          <div class="d-flex mainProgBrdrDivs">
                            <p class="mainProgBrdrPara">$90,000</p>
                            <p class="mainProgBrdr"></p>
                          </div>
                          <div class="d-flex mainProgBrdrDivs">
                            <p class="mainProgBrdrPara">$75,000</p>
                            <p class="mainProgBrdr"></p>
                          </div>
                          <div class="d-flex mainProgBrdrDivs">
                            <p class="mainProgBrdrPara">$60,000</p>
                            <p class="mainProgBrdr"></p>
                          </div>
                          <div class="d-flex mainProgBrdrDivs">
                            <p class="mainProgBrdrPara">$45,000</p>
                            <p class="mainProgBrdr"></p>
                          </div>
                          <div class="d-flex mainProgBrdrDivs">
                            <p class="mainProgBrdrPara">$30,000</p>
                            <p class="mainProgBrdr"></p>
                          </div>
                          <div class="d-flex mainProgBrdrDivs">
                            <p class="mainProgBrdrPara">$15,000</p>
                            <p class="mainProgBrdr"></p>
                          </div>
                          <div class="d-flex mainProgBrdrDivs m-0 p-0">
                            <p class="mainProgBrdrPara">$0</p>
                            <p class="mainProgBrdr"></p>
                          </div>
                          <!--  -->
                        </div>
                        <div class="progressAbsltCls">
                          <div
                            style="
                              display: flex;
                              justify-content: space-between;
                              width: 100%;
                            "
                          >
                            <div class="progressBarEachDivMain">
                              <div class="d-flex">
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig1"
                                    id="thingEqualPercent1"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt1
                                    "
                                  >
                                    $<span id="thingEqualProg1">85044</span>
                                  </div>
                                </div>
                                <!--  -->
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig2"
                                    style="height: 50%"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt2
                                    "
                                  >
                                    $85,044
                                  </div>
                                </div>
                                <!--  -->
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig3"
                                    style="height: 50%"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt3
                                    "
                                  >
                                    $85,044
                                  </div>
                                </div>
                                <!--  -->
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig4"
                                    style="height: 50%"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt4
                                    "
                                  >
                                    $85,044
                                  </div>
                                </div>
                              </div>
                              <div class="progressBarEachBtm">
                                <div class="d-flex justify-content-between">
                                  <div class="progressBarBtnDiv">
                                    <p>mainProgrssBarDiv</p>
                                    <p>Longevity</p>
                                  </div>
                                  <div class="d-flex">
                                    <div class="button-cover2">
                                      <div class="radioBtnDiv r2" id="button-2">
                                        <input
                                          type="checkbox"
                                          class="checkbox2"
                                          checked
                                        />
                                        <div class="knobs2"></div>
                                        <div class="layer2"></div>
                                      </div>
                                    </div>
                                    <a class="ms-2 deleteButtonAncor">
                                      <img
                                        src="@/assets/images/icons/delete-icon.svg"
                                        alt="delete"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--  -->
                            <div class="progressBarEachDivMain">
                              <div class="d-flex">
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig1"
                                    style="height: 50%"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt1
                                    "
                                  >
                                    $85,044
                                  </div>
                                </div>
                                <!--  -->
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig2"
                                    style="height: 50%"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt2
                                    "
                                  >
                                    $85,044
                                  </div>
                                </div>
                                <!--  -->
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig3"
                                    style="height: 50%"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt3
                                    "
                                  >
                                    $85,044
                                  </div>
                                </div>
                                <!--  -->
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig4"
                                    style="height: 50%"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt4
                                    "
                                  >
                                    $85,044
                                  </div>
                                </div>
                              </div>
                              <div class="progressBarEachBtm">
                                <div class="d-flex justify-content-between">
                                  <div class="progressBarBtnDiv">
                                    <p>mainProgrssBarDiv</p>
                                    <p>Longevity</p>
                                  </div>
                                  <div class="d-flex">
                                    <div class="button-cover2">
                                      <div class="radioBtnDiv r2" id="button-2">
                                        <input
                                          type="checkbox"
                                          class="checkbox2"
                                          checked
                                        />
                                        <div class="knobs2"></div>
                                        <div class="layer2"></div>
                                      </div>
                                    </div>
                                    <a class="ms-2 deleteButtonAncor">
                                      <img
                                        src="@/assets/images/icons/delete-icon.svg"
                                        alt="delete"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--  -->
                            <div class="progressBarEachDivMain">
                              <div class="d-flex">
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig1"
                                    style="height: 50%"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt1
                                    "
                                  >
                                    $85,044
                                  </div>
                                </div>
                                <!--  -->
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig2"
                                    style="height: 50%"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt2
                                    "
                                  >
                                    $85,044
                                  </div>
                                </div>
                                <!--  -->
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig3"
                                    style="height: 50%"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt3
                                    "
                                  >
                                    $85,044
                                  </div>
                                </div>
                                <!--  -->
                                <div class="progressBarEachDiv">
                                  <div
                                    class="CardProgressBig CardProgressBig4"
                                    style="height: 50%"
                                  ></div>
                                  <div
                                    class="
                                      position-absolute
                                      progressBarbtmNum
                                      progressBarOvrwrt4
                                    "
                                  >
                                    $85,044
                                  </div>
                                </div>
                              </div>
                              <div class="progressBarEachBtm">
                                <div class="d-flex justify-content-between">
                                  <div class="progressBarBtnDiv">
                                    <p>mainProgrssBarDiv</p>
                                    <p>Longevity</p>
                                  </div>
                                  <div class="d-flex">
                                    <div class="button-cover2">
                                      <div class="radioBtnDiv r2" id="button-2">
                                        <input
                                          type="checkbox"
                                          class="checkbox2"
                                          checked
                                          attr="1"
                                        />
                                        <div class="knobs2"></div>
                                        <div class="layer2"></div>
                                      </div>
                                    </div>
                                    <a class="ms-2 deleteButtonAncor">
                                      <img
                                        src="@/assets/images/icons/delete-icon.svg"
                                        alt="delete"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- tab 4 -->
            <div class="client-list-div">
              <div class="ComparativeTableMainDiv active" id="rightDiv4">
                <div class="d-flex justify-content-between px-3 py-3">
                  <div class="d-flex align-items-center">
                    <div class="button-cover2">
                      <div class="radioBtnDiv r2" id="button-2">
                        <input
                          type="checkbox"
                          checked
                          class="checkbox2"
                          id="rightCheckBox4"
                          @change="rightCheckbox4()"
                        />
                        <div class="knobs2"></div>
                        <div class="layer2"></div>
                      </div>
                    </div>
                    <label for="rightCheckBox4" class="rghtTopHeadcommon"
                      >Cumulative Values<span class="ms-3 equalThingTabTxt"
                        >What you get out of the account.</span
                      ></label
                    >
                  </div>
                  <div class="rightLeftDoubleLIneDegine">
                    <svg
                      width="13"
                      height="7"
                      viewBox="0 0 13 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="5.5"
                        width="13"
                        height="1.5"
                        rx="0.75"
                        fill="#C2C2C2"
                      />
                      <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                    </svg>
                  </div>
                </div>
                <div class="collapseDivMain" id="collapseDiv4">
                  <hr class="collapseDivHr" />
                  <div class="px-3 py-3">
                    <div class="d-flex justify-content-center mt-2">
                      <div
                        class="nav SwtchBtnRprtBldr nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <div
                          class="active"
                          id="v-pills-cumulative-income-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-cumulative-income"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-cumulative-income"
                          aria-selected="true"
                        >
                          Cumulative Income
                        </div>
                        <div
                          id="v-pills-total-value-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-total-value"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-total-value"
                          aria-selected="false"
                        >
                          Total Value
                        </div>
                      </div>
                    </div>
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-md-3 mt-5">
                          <div class="distributionCard1 equalDistCard1">
                            <div class="d-flex justify-content-between">
                              <div class="distrbnCard1paras">
                                <p>Cumulative Income</p>
                                <p>LifePro+</p>
                              </div>
                              <div class="d-flex">
                                <div class="button-cover2">
                                  <div
                                    class="radioBtnDiv r2 greenRadioSwtch"
                                    id="button-2"
                                  >
                                    <input
                                      type="checkbox"
                                      class="checkbox2"
                                      checked
                                    />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                  </div>
                                </div>
                                <a
                                  class="ms-2 deleteButtonAncor deleteBtnGreen"
                                >
                                  <svg
                                    width="9"
                                    height="10"
                                    viewBox="0 0 9 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                      stroke="#9D9D9D"
                                    />
                                    <rect
                                      x="6.11719"
                                      y="4.31055"
                                      width="1"
                                      height="3.52941"
                                      rx="0.5"
                                      transform="rotate(90 6.11719 4.31055)"
                                      fill="#9D9D9D"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div class="mt-2 d-flex">
                              <div class="CardProgressBar greenProgress1">
                                <div
                                  class="CardProgress"
                                  style="height: 50%"
                                ></div>
                              </div>
                              <p class="ms-3 CardProgressnym carValue1">
                                <span>Cumulative Income</span><br />
                                $85,044
                              </p>
                            </div>
                            <div class="d-flex justify-content-center">
                              <a href="javascript:void(0)" class="AddNoteBtn"
                                >Add Note</a
                              >
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div class="col-md-3 mt-5">
                          <div class="distributionCard1 equalDistCard2">
                            <div class="d-flex justify-content-between">
                              <div class="distrbnCard1paras">
                                <p>Cumulative Income</p>
                                <p class="blueRadioSwtchpara">Account</p>
                              </div>
                              <div class="d-flex">
                                <div class="button-cover2">
                                  <div
                                    class="radioBtnDiv r2 blueRadioSwtch"
                                    id="button-2"
                                  >
                                    <input
                                      type="checkbox"
                                      class="checkbox2"
                                      checked
                                    />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                  </div>
                                </div>
                                <a class="ms-2 deleteButtonAncor deleteBtnBlue">
                                  <svg
                                    width="9"
                                    height="10"
                                    viewBox="0 0 9 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                      stroke="#9D9D9D"
                                    />
                                    <rect
                                      x="6.11719"
                                      y="4.31055"
                                      width="1"
                                      height="3.52941"
                                      rx="0.5"
                                      transform="rotate(90 6.11719 4.31055)"
                                      fill="#9D9D9D"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div class="mt-2 d-flex">
                              <div class="CardProgressBar blueProgress1">
                                <div
                                  class="CardProgress blueProgress2"
                                  style="height: 50%"
                                ></div>
                              </div>
                              <p
                                class="ms-3 CardProgressnym blueRadioSwtchpara"
                              >
                                <span>Cumulative Income</span><br />
                                $85,044
                              </p>
                              <p
                                class="
                                  ms-3
                                  CardProgressnym
                                  commonRedRadioSwtchpara
                                "
                              >
                                <span>Shortfall</span><br />
                                $85,044
                              </p>
                            </div>
                            <div class="d-flex justify-content-center">
                              <a href="javascript:void(0)" class="AddNoteBtn"
                                >Add Note</a
                              >
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div class="col-md-3 mt-5">
                          <div class="distributionCard1 equalDistCard3">
                            <div class="d-flex justify-content-between">
                              <div class="distrbnCard1paras">
                                <p>Cumulative Income</p>
                                <p class="voiletRadioSwtchpara">401K / IRA</p>
                              </div>
                              <div class="d-flex">
                                <div class="button-cover2">
                                  <div
                                    class="radioBtnDiv r2 voiletRadioSwtch"
                                    id="button-2"
                                  >
                                    <input
                                      type="checkbox"
                                      class="checkbox2"
                                      checked
                                    />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                  </div>
                                </div>
                                <a
                                  class="ms-2 deleteButtonAncor deleteBtnVoilet"
                                >
                                  <svg
                                    width="9"
                                    height="10"
                                    viewBox="0 0 9 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                      stroke="#9D9D9D"
                                    />
                                    <rect
                                      x="6.11719"
                                      y="4.31055"
                                      width="1"
                                      height="3.52941"
                                      rx="0.5"
                                      transform="rotate(90 6.11719 4.31055)"
                                      fill="#9D9D9D"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div class="mt-2 d-flex">
                              <div class="CardProgressBar voiletProgress1">
                                <div
                                  class="CardProgress voiletProgress2"
                                  style="height: 50%"
                                ></div>
                              </div>
                              <p
                                class="
                                  ms-3
                                  CardProgressnym
                                  voiletRadioSwtchpara
                                "
                              >
                                <span>Cumulative Income</span><br />
                                $85,044
                              </p>
                              <p
                                class="
                                  ms-2
                                  CardProgressnym
                                  commonRedRadioSwtchpara
                                "
                              >
                                <span>Shortfall</span><br />
                                $85,044
                              </p>
                            </div>
                            <div class="d-flex justify-content-center">
                              <a href="javascript:void(0)" class="AddNoteBtn"
                                >Add Note</a
                              >
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div class="col-md-3 mt-5">
                          <div class="distributionCard1 equalDistCard4">
                            <div class="d-flex justify-content-between">
                              <div class="distrbnCard1paras">
                                <p>Cumulative Income</p>
                                <p class="redRadioSwtchpara">Annuity</p>
                              </div>
                              <div class="d-flex">
                                <div class="button-cover2">
                                  <div
                                    class="radioBtnDiv r2 redRadioSwtch"
                                    id="button-2"
                                  >
                                    <input
                                      type="checkbox"
                                      class="checkbox2"
                                      checked
                                    />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                  </div>
                                </div>
                                <a class="ms-2 deleteButtonAncor deleteBtnRed">
                                  <svg
                                    width="9"
                                    height="10"
                                    viewBox="0 0 9 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                      stroke="#9D9D9D"
                                    />
                                    <rect
                                      x="6.11719"
                                      y="4.31055"
                                      width="1"
                                      height="3.52941"
                                      rx="0.5"
                                      transform="rotate(90 6.11719 4.31055)"
                                      fill="#9D9D9D"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div class="mt-2 d-flex">
                              <div class="CardProgressBar redProgress1">
                                <div
                                  class="CardProgress redProgress2"
                                  style="height: 50%"
                                ></div>
                              </div>
                              <p class="ms-3 CardProgressnym redRadioSwtchpara">
                                <span>Cumulative Income</span><br />
                                $85,044
                              </p>
                              <p
                                class="
                                  ms-3
                                  CardProgressnym
                                  commonRedRadioSwtchpara
                                "
                              >
                                <span>Shortfall</span><br />
                                $85,044
                              </p>
                            </div>
                            <div class="d-flex justify-content-center">
                              <a href="javascript:void(0)" class="AddNoteBtn"
                                >Add Note</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="container-fluid">
                      <div class="CompMainProgrssBarDiv mt-2">
                        <div class="w-100">
                          <!--  -->
                          <div class="d-flex comulativeProgBrdrDivs">
                            <p class="comulativeProgBrdrPara">$8 M</p>
                            <p class="comulativeProgBrdr"></p>
                          </div>
                          <div class="d-flex comulativeProgBrdrDivs">
                            <p class="comulativeProgBrdrPara">$7 M</p>
                            <p class="comulativeProgBrdr"></p>
                          </div>
                          <div class="d-flex comulativeProgBrdrDivs">
                            <p class="comulativeProgBrdrPara">$6 M</p>
                            <p class="comulativeProgBrdr"></p>
                          </div>
                          <div class="d-flex comulativeProgBrdrDivs">
                            <p class="comulativeProgBrdrPara">$5 M</p>
                            <p class="comulativeProgBrdr"></p>
                          </div>
                          <div class="d-flex comulativeProgBrdrDivs">
                            <p class="comulativeProgBrdrPara">$4 M</p>
                            <p class="comulativeProgBrdr"></p>
                          </div>
                          <div class="d-flex comulativeProgBrdrDivs">
                            <p class="comulativeProgBrdrPara">$3 M</p>
                            <p class="comulativeProgBrdr"></p>
                          </div>
                          <div class="d-flex comulativeProgBrdrDivs">
                            <p class="comulativeProgBrdrPara">$2 M</p>
                            <p class="comulativeProgBrdr"></p>
                          </div>
                          <div class="d-flex comulativeProgBrdrDivs">
                            <p class="comulativeProgBrdrPara">$1 M</p>
                            <p class="comulativeProgBrdr"></p>
                          </div>
                          <div class="d-flex comulativeProgBrdrDivs m-0 p-0">
                            <p class="comulativeProgBrdrPara">$0</p>
                            <p class="comulativeProgBrdr"></p>
                          </div>
                          <!--  -->
                        </div>
                        <div class="CompProgressAbsltCls">
                          <div
                            style="
                              display: flex;
                              justify-content: space-between;
                              width: 100%;
                            "
                          >
                            <div class="d-flex justify-content-between w-100">
                              <div class="cumulativeValuesProgrees">
                                <div
                                  class="
                                    cumulativeprogreeDivcommon
                                    cumulativeProgLifePro
                                  "
                                  style="height: 40%"
                                >
                                  <div
                                    class="
                                      bottomComulativeIncome
                                      BottomcumulativeLifePro
                                    "
                                  >
                                    <p>$4,172,830</p>
                                  </div>
                                  <div class="shortFallCount">
                                    <p class="">SHORTFALL</p>
                                    <p>$3,163,031</p>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                              <div class="cumulativeValuesProgrees">
                                <div
                                  class="
                                    cumulativeprogreeDivcommon
                                    cumulativeProgAccount
                                  "
                                  style="height: 47%"
                                >
                                  <div
                                    class="
                                      bottomComulativeIncome
                                      BottomcumulativeAccount
                                    "
                                  >
                                    <p>$4,172,830</p>
                                  </div>
                                  <div class="shortFallCount">
                                    <p class="">SHORTFALL</p>
                                    <p>$3,163,031</p>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                              <div class="cumulativeValuesProgrees">
                                <div
                                  class="
                                    cumulativeprogreeDivcommon
                                    cumulativeProgIra
                                  "
                                  style="height: 28%"
                                >
                                  <div
                                    class="
                                      bottomComulativeIncome
                                      BottomcumulativeIra
                                    "
                                  >
                                    <p>$4,172,830</p>
                                  </div>
                                  <div class="shortFallCount">
                                    <p class="">SHORTFALL</p>
                                    <p>$3,163,031</p>
                                  </div>
                                </div>
                              </div>
                              <!--  -->
                              <div class="cumulativeValuesProgrees">
                                <div
                                  class="
                                    cumulativeprogreeDivcommon
                                    cumulativeProgAnnuity
                                  "
                                  style="height: 20%"
                                >
                                  <div
                                    class="
                                      bottomComulativeIncome
                                      BottomcumulativeAnnuity
                                    "
                                  >
                                    <p>$4,172,830</p>
                                  </div>
                                  <div class="shortFallCount">
                                    <p class="">SHORTFALL</p>
                                    <p>$3,163,031</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <!--  -->
                          </div>
                          <!--  -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- tab 5-->
            <div class="client-list-div">
              <div class="ComparativeTableMainDiv active" id="rightDiv5">
                <div class="d-flex justify-content-between px-3 py-3">
                  <div class="d-flex align-items-center">
                    <div class="button-cover2">
                      <div class="radioBtnDiv r2" id="button-2">
                        <input
                          type="checkbox"
                          checked
                          class="checkbox2"
                          id="rightCheckBox5"
                          @change="rightCheckbox5()"
                        />
                        <div class="knobs2"></div>
                        <div class="layer2"></div>
                      </div>
                    </div>
                    <label for="rightCheckBox5" class="rghtTopHeadcommon"
                      >Legacy</label
                    >
                  </div>
                  <div class="rightLeftDoubleLIneDegine">
                    <svg
                      width="13"
                      height="7"
                      viewBox="0 0 13 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="5.5"
                        width="13"
                        height="1.5"
                        rx="0.75"
                        fill="#C2C2C2"
                      />
                      <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                    </svg>
                  </div>
                </div>
                <div class="collapseDivMain" id="collapseDiv5">
                  <hr class="collapseDivHr" />
                  <div class="px-3 py-3">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="blankMultiDiv"></div>
                      </div>
                      <!--  -->
                      <div class="col-md-3">
                        <div class="blankMultiDiv"></div>
                      </div>
                      <!--  -->
                      <div class="col-md-3">
                        <div class="blankMultiDiv"></div>
                      </div>
                      <!--  -->
                      <div class="col-md-3">
                        <div class="blankMultiDiv"></div>
                      </div>
                      <!--  -->
                    </div>
                    <div class="row mt-4">
                      <div class="col-12">
                        <div class="blankSingleiDiv"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- tab 6-->
            <div class="client-list-div">
              <div class="ComparativeTableMainDiv active" id="rightDiv6">
                <div class="d-flex justify-content-between px-3 py-3">
                  <div class="d-flex align-items-center">
                    <div class="button-cover2">
                      <div class="radioBtnDiv r2" id="button-2">
                        <input
                          type="checkbox"
                          checked
                          class="checkbox2"
                          id="rightCheckBox6"
                          @change="rightCheckbox6()"
                        />
                        <div class="knobs2"></div>
                        <div class="layer2"></div>
                      </div>
                    </div>
                    <label for="rightCheckBox6" class="rghtTopHeadcommon"
                      >Fee Analysis</label
                    >
                  </div>
                  <div class="rightLeftDoubleLIneDegine">
                    <svg
                      width="13"
                      height="7"
                      viewBox="0 0 13 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="5.5"
                        width="13"
                        height="1.5"
                        rx="0.75"
                        fill="#C2C2C2"
                      />
                      <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                    </svg>
                  </div>
                </div>
                <div class="collapseDivMain" id="collapseDiv6">
                  <hr class="collapseDivHr" />
                  <div class="px-3 py-3">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="blankMultiDiv"></div>
                      </div>
                      <!--  -->
                      <div class="col-md-3">
                        <div class="blankMultiDiv"></div>
                      </div>
                      <!--  -->
                      <div class="col-md-3">
                        <div class="blankMultiDiv"></div>
                      </div>
                      <!--  -->
                      <div class="col-md-3">
                        <div class="blankMultiDiv"></div>
                      </div>
                      <!--  -->
                    </div>
                    <div class="row mt-4">
                      <div class="col-12">
                        <div class="blankSingleiDiv"></div>
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
  components: { RouterLink },
  methods: {
    myFunction1: function () {
      var checkBox = document.getElementById("reportBldrCheckbox1");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner1");
        element.classList.add("active");

        document.getElementById("rightCheckBox1").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox1");
        //  right div show
        document.getElementById("collapseDiv1").style.display = "block";
        var rightDiv1 = document.getElementById("rightDiv1");
        rightDiv1.classList.add("active");
        // hide see all/ less button
        document.getElementById("hideOnCollapse").style.display = "block";
        // change color of lines
        document
          .getElementById("leftTwoLineImg1")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner1");
        element.classList.remove("active");
        document.getElementById("rightCheckBox1").checked = false;
        //  right div hide
        document.getElementById("collapseDiv1").style.display = "none";
        var rightDiv1 = document.getElementById("rightDiv1");
        rightDiv1.classList.remove("active");
        document.getElementById("hideOnCollapse").style.display = "none";
        // hide see all/ less button
        document.getElementById("hideOnCollapse").style.display = "none";
        // change color of lines
        document
          .getElementById("leftTwoLineImg1")
          .classList.remove("leftLinesColor");
      }
    },
    myFunction2: function () {
      var checkBox = document.getElementById("reportBldrCheckbox2");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner2");
        element.classList.add("active");

        document.getElementById("rightCheckBox2").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox2");
        //  right div show
        document.getElementById("collapseDiv2").style.display = "block";
        var rightDiv2 = document.getElementById("rightDiv2");
        rightDiv2.classList.add("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg2")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner2");
        element.classList.remove("active");
        document.getElementById("rightCheckBox2").checked = false;
        //  right div hide
        document.getElementById("collapseDiv2").style.display = "none";
        var rightDiv2 = document.getElementById("rightDiv2");
        rightDiv2.classList.remove("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg2")
          .classList.remove("leftLinesColor");
      }
    },
    myFunction3: function () {
      var checkBox = document.getElementById("reportBldrCheckbox3");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner3");
        element.classList.add("active");

        document.getElementById("rightCheckBox3").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox3");
        //  right div show
        document.getElementById("collapseDiv3").style.display = "block";
        var rightDiv3 = document.getElementById("rightDiv3");
        rightDiv3.classList.add("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg3")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner3");
        element.classList.remove("active");
        document.getElementById("rightCheckBox3").checked = false;
        //  right div hide
        document.getElementById("collapseDiv3").style.display = "none";
        var rightDiv3 = document.getElementById("rightDiv3");
        rightDiv3.classList.remove("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg3")
          .classList.remove("leftLinesColor");
      }
    },
    myFunction4: function () {
      var checkBox = document.getElementById("reportBldrCheckbox4");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner4");
        element.classList.add("active");

        document.getElementById("rightCheckBox4").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox4");
        //  right div show
        document.getElementById("collapseDiv4").style.display = "block";
        var rightDiv4 = document.getElementById("rightDiv4");
        rightDiv4.classList.add("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg4")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner4");
        element.classList.remove("active");
        document.getElementById("rightCheckBox4").checked = false;
        //  right div hide
        document.getElementById("collapseDiv4").style.display = "none";
        var rightDiv4 = document.getElementById("rightDiv4");
        rightDiv4.classList.remove("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg4")
          .classList.remove("leftLinesColor");
      }
    },
    myFunction5: function () {
      var checkBox = document.getElementById("reportBldrCheckbox5");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner5");
        element.classList.add("active");

        document.getElementById("rightCheckBox5").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox5");
        //  right div show
        document.getElementById("collapseDiv5").style.display = "block";
        var rightDiv5 = document.getElementById("rightDiv5");
        rightDiv5.classList.add("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg5")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner5");
        element.classList.remove("active");
        document.getElementById("rightCheckBox5").checked = false;
        //  right div hide
        document.getElementById("collapseDiv5").style.display = "none";
        var rightDiv5 = document.getElementById("rightDiv5");
        rightDiv5.classList.remove("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg5")
          .classList.remove("leftLinesColor");
      }
    },
    myFunction6: function () {
      var checkBox = document.getElementById("reportBldrCheckbox6");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner6");
        element.classList.add("active");

        document.getElementById("rightCheckBox6").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox6");
        //  right div show
        document.getElementById("collapseDiv6").style.display = "block";
        var rightDiv6 = document.getElementById("rightDiv6");
        rightDiv6.classList.add("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg6")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner6");
        element.classList.remove("active");
        document.getElementById("rightCheckBox6").checked = false;
        //  right div hide
        document.getElementById("collapseDiv6").style.display = "none";
        var rightDiv6 = document.getElementById("rightDiv6");
        rightDiv6.classList.remove("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg6")
          .classList.remove("leftLinesColor");
      }
    },
    rightCheckbox1: function () {
      var checkBox = document.getElementById("rightCheckBox1");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner1");
        element.classList.add("active");

        document.getElementById("reportBldrCheckbox1").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox1");
        //  right div show
        document.getElementById("collapseDiv1").style.display = "block";
        var rightDiv1 = document.getElementById("rightDiv1");
        rightDiv1.classList.add("active");
        // hide see all/ less button
        document.getElementById("hideOnCollapse").style.display = "block";
        // change color of lines
        document
          .getElementById("leftTwoLineImg1")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner1");
        element.classList.remove("active");
        document.getElementById("reportBldrCheckbox1").checked = false;
        //  right div hide
        document.getElementById("collapseDiv1").style.display = "none";
        var rightDiv1 = document.getElementById("rightDiv1");
        rightDiv1.classList.remove("active");
        // hide see all/ less button
        document.getElementById("hideOnCollapse").style.display = "none";
        // change color of lines
        document
          .getElementById("leftTwoLineImg1")
          .classList.remove("leftLinesColor");
      }
    },
    rightCheckbox2: function () {
      var checkBox = document.getElementById("rightCheckBox2");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner2");
        element.classList.add("active");

        document.getElementById("reportBldrCheckbox2").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox2");
        //  right div show
        document.getElementById("collapseDiv2").style.display = "block";
        var rightDiv2 = document.getElementById("rightDiv2");
        rightDiv2.classList.add("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg2")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner2");
        element.classList.remove("active");
        document.getElementById("reportBldrCheckbox2").checked = false;
        //  right div hide
        document.getElementById("collapseDiv2").style.display = "none";
        var rightDiv2 = document.getElementById("rightDiv2");
        rightDiv2.classList.remove("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg2")
          .classList.remove("leftLinesColor");
      }
    },
    rightCheckbox3: function () {
      var checkBox = document.getElementById("rightCheckBox3");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner3");
        element.classList.add("active");

        document.getElementById("reportBldrCheckbox3").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox3");
        //  right div show
        document.getElementById("collapseDiv3").style.display = "block";
        var rightDiv3 = document.getElementById("rightDiv3");
        rightDiv3.classList.add("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg3")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner3");
        element.classList.remove("active");
        document.getElementById("reportBldrCheckbox3").checked = false;
        //  right div hide
        document.getElementById("collapseDiv3").style.display = "none";
        var rightDiv3 = document.getElementById("rightDiv3");
        rightDiv3.classList.remove("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg3")
          .classList.remove("leftLinesColor");
      }
    },
    rightCheckbox4: function () {
      var checkBox = document.getElementById("rightCheckBox4");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner4");
        element.classList.add("active");

        document.getElementById("reportBldrCheckbox4").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox4");
        //  right div show
        document.getElementById("collapseDiv4").style.display = "block";
        var rightDiv4 = document.getElementById("rightDiv4");
        rightDiv4.classList.add("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg4")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner4");
        element.classList.remove("active");
        document.getElementById("reportBldrCheckbox4").checked = false;
        //  right div hide
        document.getElementById("collapseDiv4").style.display = "none";
        var rightDiv4 = document.getElementById("rightDiv4");
        rightDiv4.classList.remove("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg4")
          .classList.remove("leftLinesColor");
      }
    },
    rightCheckbox5: function () {
      var checkBox = document.getElementById("rightCheckBox5");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner5");
        element.classList.add("active");

        document.getElementById("reportBldrCheckbox5").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox5");
        //  right div show
        document.getElementById("collapseDiv5").style.display = "block";
        var rightDiv5 = document.getElementById("rightDiv5");
        rightDiv5.classList.add("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg5")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner5");
        element.classList.remove("active");
        document.getElementById("reportBldrCheckbox5").checked = false;
        //  right div hide
        document.getElementById("collapseDiv5").style.display = "none";
        var rightDiv5 = document.getElementById("rightDiv5");
        rightDiv5.classList.remove("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg5")
          .classList.remove("leftLinesColor");
      }
    },
    rightCheckbox6: function () {
      var checkBox = document.getElementById("rightCheckBox6");
      if (checkBox.checked == true) {
        var element = document.getElementById("reportBuilderLftInner6");
        element.classList.add("active");

        document.getElementById("reportBldrCheckbox6").checked = true;
        var RghtCheckBox = document.getElementById("rightCheckBox6");
        //  right div show
        document.getElementById("collapseDiv6").style.display = "block";
        var rightDiv6 = document.getElementById("rightDiv6");
        rightDiv6.classList.add("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg6")
          .classList.add("leftLinesColor");
      } else {
        var element = document.getElementById("reportBuilderLftInner6");
        element.classList.remove("active");
        document.getElementById("reportBldrCheckbox6").checked = false;
        //  right div hide
        document.getElementById("collapseDiv6").style.display = "none";
        var rightDiv6 = document.getElementById("rightDiv6");
        rightDiv6.classList.remove("active");
        // change color of lines
        document
          .getElementById("leftTwoLineImg6")
          .classList.remove("leftLinesColor");
      }
    },
    sideBarCollapse: function () {
      const element = document.getElementById("mainSection");
      let text = element.getAttribute("class");
      if (text == "main-section widthClass") {
        document.getElementById("mainSection").classList.add("active");
        document.getElementById("sidebarInner").style.display = "none";
        document.getElementById("sidebarArrowImg").style.transform =
          "rotate(180deg)";
      } else {
        document.getElementById("mainSection").classList.remove("active");
        document.getElementById("sidebarInner").style.display = "block";
        document.getElementById("sidebarArrowImg").style.transform =
          "rotate(360deg)";
      }
    },
    accountDivHide: function () {
      document.getElementById("table4MainTopDiv").classList.add("order-last");
      document.getElementById("acntBottomTxt").classList.add("acntBottomTxt");
      document.getElementById("table4CmnClr").classList.add("table4CmnClr");
      document.getElementById("acountViewBtn").style.display = "none";
      document.getElementById("acountHideBtn").style.display = "block";
      document.getElementById("table4Hide").classList.add("table4Hide");
      document.getElementById("table4Hide").classList.remove("table4");
      document.getElementById("table4Hide").classList.add("tableCommonColor");
      document
        .getElementById("accountEditBtnHide")
        .classList.add("disableBtnsAccount");
      document
        .getElementById("accountDeleteBtnHide")
        .classList.add("disableBtnsAccount");
      document.getElementById("bottomTable4Hide").classList.add("table4Hide");
      document.getElementById("bottomTable4Hide").classList.remove("table4");
      document
        .getElementById("bottomTable4Hide")
        .classList.add("tableCommonColor");
      document.getElementById("bottomTable4Hide").classList.add("order-last");
      document
        .getElementById("bottomTable4MainTopDiv")
        .classList.add("order-last");
    },
    accountDivShow: function () {
      document
        .getElementById("table4MainTopDiv")
        .classList.remove("order-last");
      document
        .getElementById("acntBottomTxt")
        .classList.remove("acntBottomTxt");
      document.getElementById("table4CmnClr").classList.remove("table4CmnClr");
      document.getElementById("acountViewBtn").style.display = "block";
      document.getElementById("acountHideBtn").style.display = "none";
      document.getElementById("table4Hide").classList.remove("table4Hide");
      document.getElementById("table4Hide").classList.add("table4");
      document.getElementById("table4Hide").classList.add("tableCommonColor");
      document
        .getElementById("accountEditBtnHide")
        .classList.remove("disableBtnsAccount");
      document
        .getElementById("accountDeleteBtnHide")
        .classList.remove("disableBtnsAccount");
      document
        .getElementById("bottomTable4Hide")
        .classList.remove("table4Hide");
      document.getElementById("bottomTable4Hide").classList.add("table4");
      document
        .getElementById("bottomTable4Hide")
        .classList.remove("tableCommonColor");
      document
        .getElementById("bottomTable4Hide")
        .classList.remove("order-last");
      document
        .getElementById("bottomTable4MainTopDiv")
        .classList.remove("order-last");
    },
    iraDivHide: function () {
      document.getElementById("table5MainTopDiv").classList.add("order-last");
      document.getElementById("iraBottomTxt").classList.add("iraBottomTxt");
      document.getElementById("table5CmnClr").classList.add("table5CmnClr");
      document.getElementById("iraViewBtn").style.display = "none";
      document.getElementById("iraHideBtn").style.display = "block";
      document.getElementById("table5Hide").classList.add("table5Hide");
      document.getElementById("table5Hide").classList.remove("table5");
      document.getElementById("table5Hide").classList.add("tableCommonColor");
      document.getElementById("iraEditBtnHide").classList.add("disableBtnsIra");
      document
        .getElementById("iraDeleteBtnHide")
        .classList.add("disableBtnsIra");
      document.getElementById("bottomTable5Hide").classList.add("table5Hide");
      document.getElementById("bottomTable5Hide").classList.remove("table5");
      document
        .getElementById("bottomTable5Hide")
        .classList.add("tableCommonColor");
      document.getElementById("bottomTable5Hide").classList.add("order-last");
      document
        .getElementById("bottomTable5MainTopDiv")
        .classList.add("order-last");
    },
    iraDivShow: function () {
      document
        .getElementById("table5MainTopDiv")
        .classList.remove("order-last");
      document.getElementById("iraBottomTxt").classList.remove("iraBottomTxt");
      document.getElementById("table5CmnClr").classList.remove("table5CmnClr");
      document.getElementById("iraViewBtn").style.display = "block";
      document.getElementById("iraHideBtn").style.display = "none";
      document.getElementById("table5Hide").classList.remove("table5Hide");
      document.getElementById("table5Hide").classList.add("table5");
      document.getElementById("table5Hide").classList.add("tableCommonColor");
      document
        .getElementById("iraEditBtnHide")
        .classList.remove("disableBtnsIra");
      document
        .getElementById("iraDeleteBtnHide")
        .classList.remove("disableBtnsIra");
      document
        .getElementById("bottomTable5Hide")
        .classList.remove("table5Hide");
      document.getElementById("bottomTable5Hide").classList.add("table5");
      document
        .getElementById("bottomTable5Hide")
        .classList.remove("tableCommonColor");
      document
        .getElementById("bottomTable5Hide")
        .classList.remove("order-last");
      document
        .getElementById("bottomTable5MainTopDiv")
        .classList.remove("order-last");
    },
    annuityDivHide: function () {
      document.getElementById("table6MainTopDiv").classList.add("order-last");
      document
        .getElementById("annuityBottomTxt")
        .classList.add("annuityBottomTxt");
      document.getElementById("table6CmnClr").classList.add("table6CmnClr");
      document.getElementById("annuityViewBtn").style.display = "none";
      document.getElementById("annuityHideBtn").style.display = "block";
      document.getElementById("table6Hide").classList.add("table6Hide");
      document.getElementById("table6Hide").classList.remove("table6");
      document.getElementById("table6Hide").classList.add("tableCommonColor");
      document
        .getElementById("annuityEditBtnHide")
        .classList.add("disableBtnsAnnuity");
      document
        .getElementById("annuityDeleteBtnHide")
        .classList.add("disableBtnsAnnuity");
      document.getElementById("bottomTable6Hide").classList.add("table6Hide");
      document.getElementById("bottomTable6Hide").classList.remove("table6");
      document
        .getElementById("bottomTable6Hide")
        .classList.add("tableCommonColor");
      document
        .getElementById("bottomTable6MainTopDiv")
        .classList.add("order-last");
    },
    annuityDivShow: function () {
      document
        .getElementById("table6MainTopDiv")
        .classList.remove("order-last");
      document
        .getElementById("annuityBottomTxt")
        .classList.remove("annuityBottomTxt");
      document.getElementById("table6CmnClr").classList.remove("table6CmnClr");
      document.getElementById("annuityViewBtn").style.display = "block";
      document.getElementById("annuityHideBtn").style.display = "none";
      document.getElementById("table6Hide").classList.remove("table6Hide");
      document.getElementById("table6Hide").classList.add("table6");
      document.getElementById("table6Hide").classList.add("tableCommonColor");
      document
        .getElementById("annuityEditBtnHide")
        .classList.remove("disableBtnsAnnuity");
      document
        .getElementById("annuityDeleteBtnHide")
        .classList.remove("disableBtnsAnnuity");
      document
        .getElementById("bottomTable6Hide")
        .classList.remove("table6Hide");
      document.getElementById("bottomTable6Hide").classList.add("table6");
      document
        .getElementById("bottomTable6Hide")
        .classList.remove("tableCommonColor");
      document
        .getElementById("bottomTable6MainTopDiv")
        .classList.remove("order-last");
    },
    showMore: function () {
      document.getElementById("comparativeSeeAllBtn").style.display = "none";
      document.getElementById("comparativeSeeLessBtn").style.display = "block";
      document
        .getElementById("collapseDiv1")
        .classList.remove("comparativeLessDiv");
      document
        .getElementById("collapseDiv1")
        .classList.add("comparativeFullDiv");
    },
    showLess: function () {
      document.getElementById("comparativeSeeAllBtn").style.display = "block";
      document.getElementById("comparativeSeeLessBtn").style.display = "none";
      document
        .getElementById("collapseDiv1")
        .classList.add("comparativeLessDiv");
      document
        .getElementById("collapseDiv1")
        .classList.remove("comparativeFullDiv");
    },
  },
};
</script>
