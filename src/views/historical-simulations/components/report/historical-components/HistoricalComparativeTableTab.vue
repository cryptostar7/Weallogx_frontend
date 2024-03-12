<template lang="">
  <div
    :class="`empty ${
      $store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none' : ''
    }`"
    data-class="empty-wrapper"
    data-empty="0"
  >
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="1">
      <div
        :class="`report-client-list-div ${keyId} ${
          activeTabs[keyId] ? '' : 'presentdeActive'
        }`"
      >
        <div
          :class="`ComparativeTableMainDiv rightDivTop7 ${
            activeTabs[keyId] ? 'active' : ''
          }`"
        >
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input
                    id="rightCheckBox7"
                    type="checkbox"
                    class="checkbox2 rightCheckBox7"
                    :checked="activeTabs[keyId]"
                    rightCheckAttr="7"
                    @change="
                      () =>
                        $store.dispatch('toggleSimulationReportTabByID', keyId)
                    "
                  />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox7" class="rghtTopHeadcommon"
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
              :class="`commonCollapse  ${
                showAll ? 'comparativeFullDiv' : 'comparativeLessDiv'
              } comparativeLessDiv2 collapseDiv7 position-relative tableDivHeight2`"
              :style="{ display: activeTabs[keyId] ? 'block' : 'none' }"
            >
              <hr class="collapseDivHr" />
              <div class="px-3 py-3">
                <div class="position-relative">
                  <div class="d-flex align-items-center float-end">
                    <div class="radioBtnDiv r2 prstnRadioBtnHide" id="button-2">
                      <input
                        type="checkbox"
                        class="checkbox2 showAssetsCheckBox2"
                        id="showAssets2"
                        @change="() => $store.dispatch('toggleAssets2')"
                      />
                      <div class="knobs2"></div>
                      <div class="layer2"></div>
                    </div>
                    <label
                      for="showAssets2"
                      class="ms-2 fs-12 semi-bold-fw showAssetsTxt prstnRadioBtnHide cursor-pointer"
                      >Show assets one by one</label
                    >
                  </div>
                  <div class="collapseDivmdlHd text-center">
                    Historical Simulations of a Theoretical Synthetic Asset
                    (TSA) <br />
                    as a Proxy for the LIRP
                  </div>
                </div>
                <div
                  class="container-fluid table-fluid reportbuilder-container-div"
                >
                  <div class="row tablesMainDiv">
                    <div class="col-3 col-md-2 ps-0 pe-1">
                      <div
                        class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr visible-hidden"
                      >
                        <div class="dblLineAbslt">
                          <img
                            src="@/assets/images/icons/double-line.svg"
                            alt="line"
                          />
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div
                              class="d-flex align-items-center justify-content-between mt-2 allActionBtns"
                            >
                              <div
                                class="radioBtnDiv r2 greenRadioSwtch"
                                id="button-2"
                              >
                                <input
                                  type="checkbox"
                                  class="checkbox2"
                                  checked="true"
                                />
                                <div class="knobs2"></div>
                                <div class="layer2"></div>
                              </div>
                              <div class="d-flex align-items-center">
                                <!-- Edit button -->
                                <router-link
                                  :to="`/historical/illustration-data/${simulation_id}?report=${$route.params.report}`"
                                  class="editBtnLirp disableBtnsForAll"
                                  >&nbsp;
                                  <svg
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
                                    ></rect>
                                    <path
                                      d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                      stroke="#1660A4"
                                      stroke-width="1.25"
                                    ></path>
                                  </svg>
                                </router-link>
                                <!-- Delete button -->
                                <a
                                  href="javascript:void(0)"
                                  @click="setActionId(index)"
                                  data-bs-target="#DeleteHistoricalCvModal"
                                  data-bs-toggle="modal"
                                  class="deleteBtnLirp disableBtnsForAll"
                                  >&nbsp;
                                  <svg
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
                                    ></path>
                                    <rect
                                      x="8.35156"
                                      y="5.41406"
                                      width="1.25"
                                      height="4.70588"
                                      rx="0.625"
                                      transform="rotate(90 8.35156 5.41406)"
                                      fill="#1660A4"
                                    ></rect>
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
                            <div
                              class="lifeProBtmDiv lirpBtmDiv8 commonBottomTxt"
                            >
                              <p>
                                <input
                                  type="text"
                                  value="Allianz - LIRP"
                                  class="tableHeadInputs"
                                  readonly
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mt-1">
                        <div class="reportTablesDiv reportTablesDiv1">
                          <table class="table sticky-header-h">
                            <thead class="heading-tr">
                              <tr>
                                <th>Yr</th>
                                <th>Age</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(item, index) in distributions"
                                :key="index"
                              >
                                <td class="table1Td" data-label="Year">
                                  {{ item.year }}
                                </td>
                                <td class="table1Td" data-label="Age">
                                  {{ item.age }}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- 1 end -->
                        <div class="reportTablesDiv ms-1 reportTablesDiv2">
                          <table class="table sticky-header-h">
                            <thead class="heading-tr">
                              <tr>
                                <th>Deposits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(item, index) in distributions"
                                :key="index"
                              >
                                <td data-label="Year">
                                  {{ $numFormatWithDollar(item.deposits) }}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-md-2 ps-0 pe-1">
                      <div class="commonTableMainTopDiv4">
                        <div class="reportTablesDiv reportTablesDiv8">
                          <div
                            class="lifeProPlus position-relative tablesCmnClr"
                          >
                            <div class="row">
                              <div class="col-12">
                                <div
                                  class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0"
                                >
                                  <div
                                    class="d-flex w-100 justify-content-end align-items-center"
                                  >
                                    <!-- Edit button -->
                                    <router-link
                                      :to="`/historical/illustration-data/${simulation_id}?report=${$route.params.report}`"
                                      class="editBtnLirp disableBtnsForAll"
                                      >&nbsp;
                                      <svg
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
                                    </router-link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row eachCardParaRow">
                              <div class="d-flex justify-content-between">
                                <p class="lirpPara8 m-0 mb-1">
                                  Illustration Rate
                                </p>
                                <p class="lirpPara2 m-0 mb-1">
                                  {{
                                    Number(data[0].illustration_rate).toFixed(
                                      2
                                    )
                                  }}%
                                </p>
                              </div>
                              <div class="d-flex justify-content-between">
                                <p class="lirpPara8 m-0 mb-1">
                                  Illustration CAGR
                                </p>
                                <p class="lirpPara2 m-0 mb-1">
                                  {{
                                    Number(data[0].illustration_carg).toFixed(
                                      2
                                    )
                                  }}%
                                </p>
                              </div>
                              <div class="d-flex justify-content-between">
                                <p class="lirpPara8 m-0 mb-1">IRR</p>
                                <p class="lirpPara2 m-0 mb-1">
                                  {{ Number(data[0].irr).toFixed(2) }}%
                                </p>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-12">
                                <div
                                  class="lifeProBtmDiv lirpBtmDiv8 commonBottomTxt"
                                >
                                  <p>
                                    <input
                                      type="text"
                                      :value="cv_name[0]"
                                      class="tableHeadInputs"
                                      readonly
                                    />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <table
                            class="table sticky-header-h tableCommonForDisable mt-1 tableCommonHide"
                          >
                            <thead class="heading-tr">
                              <tr>
                                <th>Distributions</th>
                                <th>Net Balance</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(item, index) in data[0].list"
                                :key="index"
                              >
                                <td data-label="acount">
                                  <span class="td-bold">{{
                                    $numFormatWithDollar(item.distributions)
                                  }}</span>
                                </td>
                                <td data-label="blank">
                                  {{ $numFormatWithDollar(item.net_balance) }}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <!-- draggable column -->
                    <div class="col">
                      <draggable
                        v-model="draggableColumns"
                        :draggable="
                          $store.state.app.presentation_mode ? '' : '.drag-item'
                        "
                        tag="div"
                        class="row"
                      >
                        <div
                          v-for="(header, index) in draggableColumns"
                          :key="0"
                          :class="`drag-item col-3 col-md-${
                            12 / 4
                          }  ps-0 pe-1 drag-col ${
                            header.active ? '' : 'order-last'
                          }`"
                        >
                          <div class="empty-inner" data-empty="1">
                            <div
                              class="fill-inner"
                              draggable="true"
                              data-fill="1"
                            >
                              <div
                                :class="`commonTableMainTopDiv${
                                  4 + header.id
                                } ${header.active ? '' : 'commonTableCls'}`"
                              >
                                <div
                                  :class="`reportTablesDiv reportTablesDiv${
                                    3 + header.id
                                  }`"
                                >
                                  <div
                                    class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr"
                                  >
                                    <div
                                      class="dblLineAbslt"
                                      :style="{
                                        cursor: !$store.state.app
                                          .presentation_mode
                                          ? 'move'
                                          : 'default',
                                      }"
                                    >
                                      <img
                                        src="@/assets/images/icons/double-line.svg"
                                        alt="line"
                                        v-if="
                                          !$store.state.app.presentation_mode
                                        "
                                      />
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div
                                          class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0"
                                        >
                                          <div
                                            :class="`radioBtnDiv r2 switch${header.id} extra`"
                                            id="button-2"
                                          >
                                            <input
                                              type="checkbox"
                                              class="checkbox2 commonRadioBtn2"
                                              :checked="header.active"
                                              hideattr="1"
                                              @click="
                                                () =>
                                                  (header.active =
                                                    !header.active)
                                              "
                                            />
                                            <div class="knobs2"></div>
                                            <div class="layer2"></div>
                                          </div>
                                          <div
                                            :class="`d-flex align-items-center switch${header.id}`"
                                          >
                                            <p
                                              class="position-relative cursor-pointer top-1"
                                            >
                                              <img
                                                src="/src/assets/images/icons/info-icon.svg"
                                                alt="info"
                                                class="me-1 info-icon-img"
                                              /><img
                                                src="/src/assets/images/icons/dark-i-icon.svg"
                                                alt="info"
                                                class="me-1 dark-info-icon-img"
                                              /><span
                                                :class="`info-message-rollingTime ${
                                                  index + 1 ==
                                                  draggableColumns.length
                                                    ? 'right'
                                                    : ''
                                                }`"
                                              >
                                                <span
                                                  >Rolling Time Period:
                                                  {{
                                                    data[header.id].period
                                                  }}
                                                  Years</span
                                                ><br />
                                                <span
                                                  >Starting Date:
                                                  {{
                                                    data[header.id]
                                                      .starting_date
                                                  }}</span
                                                >
                                              </span>
                                            </p>
                                            <router-link
                                              :to="`/historical/parameters/${simulation_id}?report=${$route.params.report}`"
                                              class="editBtn editBtnAccount disableBtnsForAll"
                                              >&nbsp;
                                              <svg
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
                                            </router-link>
                                            <a
                                              href="javascript:void(0)"
                                              class="d-none editBtn editBtnAccount doneBtnAccount disableBtnsForAll"
                                              >&nbsp;<svg
                                                width="13"
                                                height="12"
                                                viewBox="0 0 13 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <g
                                                  clip-path="url(#clip0_1862_4)"
                                                >
                                                  <path
                                                    d="M8.17391 1H1V10.4007H11.0435V7.26713"
                                                    stroke="#0E6651"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                  />
                                                  <path
                                                    d="M3.86963 5.47654L6.26093 7.7148L12.0001 1.89532"
                                                    stroke="#0E6651"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                  />
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_1862_4">
                                                    <rect
                                                      width="12.5"
                                                      height="11.7"
                                                      fill="white"
                                                    />
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row eachCardParaRow">
                                      <div
                                        class="d-flex justify-content-between"
                                      >
                                        <p
                                          :class="`lifeProPlusPara${
                                            1 + header.id + header.id
                                          } m-0 mb-1`"
                                        >
                                          Strategy Avg
                                        </p>
                                        <p class="lifeProPlusPara2 m-0 mb-1">
                                          {{
                                            Number(
                                              data[header.id].strategy_average
                                            ).toFixed(2)
                                          }}%
                                        </p>
                                      </div>
                                      <div
                                        class="d-flex justify-content-between"
                                      >
                                        <p
                                          :class="`lifeProPlusPara${
                                            1 + header.id + header.id
                                          } m-0 mb-1`"
                                        >
                                          Strategy CARG
                                        </p>
                                        <p class="lifeProPlusPara2 m-0 mb-1">
                                          {{
                                            Number(
                                              data[header.id].strategy_carg
                                            ).toFixed(2)
                                          }}%
                                        </p>
                                      </div>
                                      <div
                                        class="d-flex justify-content-between"
                                      >
                                        <p
                                          :class="`lifeProPlusPara${
                                            1 + header.id + header.id
                                          } m-0 mb-1`"
                                        >
                                          IRR
                                        </p>
                                        <p class="lifeProPlusPara2 m-0 mb-1">
                                          {{
                                            Number(data[header.id].irr).toFixed(
                                              2
                                            )
                                          }}%
                                        </p>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div
                                          :class="`lifeProBtmDiv lifeProBtmDiv${
                                            1 + header.id
                                          } commonBottomTxt`"
                                        >
                                          <p>
                                            <input
                                              type="text"
                                              v-model="data[header.id].type"
                                              class="tableHeadInputs"
                                              readonly
                                            />
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <table
                                    class="table sticky-header-h tableCommonForDisable mt-1 tableCommonHide"
                                  >
                                    <thead class="heading-tr">
                                      <tr>
                                        <th>Distributions</th>
                                        <th>Net Balance</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        v-for="(item, index) in data[header.id]
                                          .list"
                                        :key="index"
                                      >
                                        <td data-labe.l="acount">
                                          <span
                                            v-if="
                                              $numFormatWithDollar(
                                                item.distributions
                                              )
                                            "
                                            :class="`td-bold`"
                                            >{{
                                              $numFormatWithDollar(
                                                item.distributions
                                              )
                                            }}</span
                                          >
                                        </td>
                                        <td data-label="blank">
                                          {{
                                            $numFormatWithDollar(
                                              item.net_balance
                                            )
                                          }}
                                        </td>
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
                        <div
                          class="reportTablesDiv reportTablesDiv1 SummaryTableDiv1"
                        >
                          <table
                            class="table mt-1 secondTable td-first summaryTableFont"
                          >
                            <thead>
                              <th
                                style="
                                  background: none !important;
                                  border: 0 !important;
                                "
                              ></th>
                            </thead>
                            <tbody>
                              <tr>
                                <td
                                  style="border-right: 0 !important"
                                  class="table1Td tableotalTd text-start"
                                  data-label="Year"
                                >
                                  Deposits
                                </td>
                                <!-- <td class="table1Td" data-label="Age">{{$numFormatWithDollar(summary_data.deposits.totals) }}</td> -->
                              </tr>
                              <tr>
                                <td
                                  style="border-right: 0 !important"
                                  class="table1Td totalValueTd"
                                  data-label="Age"
                                >
                                  Distributions
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style="border-right: 0 !important"
                                  class="table1Td totalValueTd"
                                  data-label="Age"
                                >
                                  Total Value
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="table1Td surplusTdMain"
                                  data-label="Age"
                                >
                                  <span class="text-success">Surplus/</span
                                  ><span class="text-danger">Shortfall</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-4 col-md-2 ps-0 pe-1">
                        <div class="commonBottomTableMainTopDiv4">
                          <div class="reportTablesDiv reportTablesDiv8">
                            <table
                              class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont"
                            >
                              <thead class="heading-tr">
                                <tr>
                                  <th
                                    style="
                                      border-radius: 6px;
                                      vertical-align: middle;
                                    "
                                  >
                                    {{ cv_name[0] }}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="" data-label="Age">
                                    {{
                                      $numFormatWithDollar(
                                        summary_data.deposits.totals
                                      )
                                    }}
                                  </td>
                                </tr>
                                <tr>
                                  <td width="50%" data-label="acount">
                                    {{
                                      $numFormatWithDollar(
                                        summary_data.data[0].distribution.total
                                      )
                                    }}
                                  </td>
                                  <!-- <td width="50%" data-label="blank">{{ $numFormatWithDollar(summary_data.data[0].net_balance.total) }}</td> -->
                                </tr>
                                <tr>
                                  <td width="50%" data-label="acount">
                                    {{
                                      $numFormatWithDollar(
                                        summary_data.data[0].distribution
                                          .total_value
                                      )
                                    }}
                                  </td>
                                  <!-- <td width="50%" data-label="blank">{{ $numFormatWithDollar(summary_data.data[0].net_balance.total_value) }}</td> -->
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-8">
                        <div class="row summary-row">
                          <div
                            v-for="(header, index) in draggableColumns"
                            :key="index"
                            :class="`col-3 ps-0 pe-1 commonBottomTableMainTopDiv${
                              4 + header.id
                            } summary-draggable ${
                              header.active ? '' : 'order-last'
                            } ${header.active ? '' : 'commonTableCls'}`"
                          >
                            <div
                              :class="`reportTablesDiv reportTablesDiv${
                                3 + header.id
                              } `"
                            >
                              <table
                                class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont"
                              >
                                <thead class="heading-tr">
                                  <tr>
                                    <th
                                      style="
                                        border-radius: 6px;
                                        vertical-align: middle;
                                      "
                                    >
                                      {{ data[header.id].type }}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td class="" data-label="Age">
                                      {{
                                        $numFormatWithDollar(
                                          summary_data.deposits.totals
                                        )
                                      }}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="50%" data-label="acount">
                                      {{
                                        $numFormatWithDollar(
                                          summary_data.data[header.id]
                                            .distribution.total
                                        )
                                      }}
                                    </td>
                                    <!-- <td width="50%" class="" data-label="blank">{{ $numFormatWithDollar(summary_data.data[header.id].net_balance.total) }}</td> -->
                                  </tr>
                                  <tr>
                                    <td width="50%" data-label="acount">
                                      {{
                                        $numFormatWithDollar(
                                          summary_data.data[header.id]
                                            .distribution.total_value
                                        )
                                      }}
                                    </td>
                                    <!-- <td width="50%" class="" data-label="blank">{{ $numFormatWithDollar(summary_data.data[header.id].net_balance.total_value) }}</td> -->
                                  </tr>
                                  <tr>
                                    <td class="extra-td-styles">
                                      <table width="100%">
                                        <tbody>
                                          <tr>
                                            <td class="inner-td"></td>
                                            <td
                                              width="50%"
                                              :class="
                                                summary_data.data[header.id]
                                                  .distribution.surplus >= 0
                                                  ? 'text-success'
                                                  : 'text-danger'
                                              "
                                              data-label="acount"
                                            >
                                              {{
                                                $numFormatWithDollar(
                                                  summary_data.data[header.id]
                                                    .distribution.surplus
                                                ).replace("-", "")
                                              }}
                                            </td>
                                            <!-- <td width="50%" :class="summary_data.data[header.id].net_balance.surplus >= 0  ? 'text-success' : 'text-danger'"  data-label="blank">{{ $numFormatWithDollar(summary_data.data[header.id].net_balance.surplus).replace("-", "") }}</td> -->
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
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
                  <div
                    class="comparativeSeeAllBtn mt-2"
                    id="comparativeSeeAllBtn2"
                  >
                    <button
                      class="btn form-control"
                      @click="() => (showAll = !showAll)"
                    >
                      {{ showAll ? "- SEE LESS" : "+ SEE ALL" }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <historical-disclosure-component
              :containerFluid="true"
              :hideFee="true"
              tabType="comperative_table"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HistoricalDisclosureComponent from "./HistoricalDisclosureComponent.vue";
import { VueDraggableNext } from "vue-draggable-next";
export default {
  props: ["keyId", "sidebar"],
  components: { HistoricalDisclosureComponent, draggable: VueDraggableNext },
  data() {
    return {
      activeTabs: this.$store.state.data.simulationReportTabs.active,
      showAll: false,
      draggableColumns: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
        { id: 4, active: true },
      ],
      distributions: [],
      data: [
        {
          illustration_rate: "",
          illustration_carg: "",
          strategy_average: "",
          strategy_carg: "",
          irr: "",
          type: "Allianz - LIRP",
          list: [],
        },
        {
          illustration_rate: "",
          illustration_carg: "",
          strategy_average: "",
          strategy_carg: "",
          irr: "",
          type: "TSA - Most Recent",
          list: [],
        },
        {
          illustration_rate: "",
          illustration_carg: "",
          strategy_average: "",
          strategy_carg: "",
          irr: "",
          type: "TSA - Worst",
          list: [],
        },
        {
          illustration_rate: "",
          illustration_carg: "",
          strategy_average: "",
          strategy_carg: "",
          irr: "",
          type: "TSA - Median",
          list: [],
        },
        {
          illustration_rate: "",
          illustration_carg: "",
          strategy_average: "",
          strategy_carg: "",
          irr: "",
          type: "TSA - Best",
          list: [],
        },
      ],
      summary_data: {
        deposits: { totals: "", total_values: "", surplus: "" },
        data: [
          {
            id: 0,
            distribution: {
              total: "",
              total_value: "",
              surplus: "",
            },
            net_balance: {
              total: "",
              total_value: "",
              surplus: "",
            },
          },
          {
            id: 1,
            distribution: {
              total: "",
              total_value: "",
              surplus: "",
            },
            net_balance: {
              total: "",
              total_value: "",
              surplus: "",
            },
          },
          {
            id: 2,
            distribution: {
              total: "",
              total_value: "",
              surplus: "",
            },
            net_balance: {
              total: "",
              total_value: "",
              surplus: "",
            },
          },
          {
            id: 3,
            distribution: {
              total: "",
              total_value: "",
              surplus: "",
            },
            net_balance: {
              total: "",
              total_value: "",
              surplus: "",
            },
          },
          {
            id: 4,
            distribution: {
              total: "",
              total_value: "",
              surplus: "",
            },
            net_balance: {
              total: "",
              total_value: "",
              surplus: "",
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.mapData();
  },
  methods: {
    handleSidebar: function (status) {
      return status;
    },
    setActionId: function (id) {
      document.getElementById("historical_cv_delete_id").value = id;
    },
    mapData: function () {
      if (this.table.lirp_data) {
        let data = this.table.lirp_data.chart_output;
        this.$store.dispatch("cvName", {
          index: 0,
          name: this.table.policy_nickname || "",
        });
        let list = data.Age;
        if (list.length) {
          let tempList = [];
          let tempDeposits = [];

          for (let i = 0; i < list.length; i++) {
            tempList.push({
              distributions: data.distributions ? data.distributions[i] : null,
              net_balance: data.comperative_account_value
                ? data.comperative_account_value[i]
                : null,
            });

            tempDeposits.push({
              year: data.year ? data.year[i] : null,
              age: data.Age ? data.Age[i] : null,
              deposits: data.Deposits ? data.Deposits[i] : null,
            });
          }

          this.data[0].list = tempList;
          this.data[0].illustration_rate =
            this.table.lirp_data.illustration_rate;
          this.data[0].illustration_carg =
            this.table.lirp_data.illustraton_cagr;
          this.data[0].irr = this.table.lirp_data.irr_percent;
          this.distributions = tempDeposits;
          this.summary_data.data[0].distribution.total =
            this.table.lirp_data.total_distribution;
          this.summary_data.data[0].distribution.total_value =
            this.table.lirp_data.cummulative_income_total_value;
          this.summary_data.data[0].distribution.surplus = 0;
          this.summary_data.deposits.totals =
            this.table.lirp_data.total_deposit;
        }
      }

      if (this.table.min.result) {
        let data = this.table.min.result.chart_output;
        let list = data.age;
        if (list.length) {
          let tempList = [];
          for (let i = 0; i < list.length; i++) {
            tempList.push({
              distributions: data.tax_free_distributions
                ? data.tax_free_distributions[i]
                : null,
              net_balance: data.eoy_accumulation_value_after_credit
                ? data.eoy_accumulation_value_after_credit[i]
                : null,
            });
          }
          this.data[2].list = tempList;
          this.data[2].period = this.table.discloser.period;
          this.data[2].starting_date = this.$customDateFormat(
            this.table.min.result.starting_date,
            "M/D/y"
          );
          this.data[2].strategy_average = this.table.min.result.stratgy_average;
          this.data[2].strategy_carg = this.table.min.result.tsa_cagr_percent;
          this.data[2].irr = this.table.min.result.irr_percent;
          this.summary_data.data[2].distribution.total =
            this.table.min.result.cummulative_distribution;
          this.summary_data.data[2].distribution.total_value =
            this.table.min.result.cummulative_income_total_value;
          this.summary_data.data[2].distribution.surplus =
            this.table.min.result.Surplus;
        }
      }

      if (this.table.most_recent) {
        let data = this.table.most_recent.result.chart_output;
        let list = data.age;

        if (list.length) {
          let tempList = [];
          for (let i = 0; i < list.length; i++) {
            tempList.push({
              distributions: data.tax_free_distributions
                ? data.tax_free_distributions[i]
                : null,
              net_balance: data.eoy_accumulation_value_after_credit
                ? data.eoy_accumulation_value_after_credit[i]
                : null,
            });
          }

          this.data[1].list = tempList;
          this.data[1].period = this.table.discloser.period;
          this.data[1].starting_date = this.$customDateFormat(
            this.table.most_recent.result.starting_date,
            "M/D/y"
          );
          this.data[1].strategy_average =
            this.table.most_recent.result.stratgy_average;
          this.data[1].strategy_carg =
            this.table.most_recent.result.tsa_cagr_percent;
          this.data[1].irr = this.table.most_recent.result.irr_percent;
          this.summary_data.data[1].distribution.total =
            this.table.most_recent.result.cummulative_distribution;
          this.summary_data.data[1].distribution.total_value =
            this.table.most_recent.result.cummulative_income_total_value;
          this.summary_data.data[1].distribution.surplus =
            this.table.most_recent.result.Surplus;
        }
      }

      if (this.table.median) {
        let data = this.table.median.result.chart_output;
        let list = data.age;
        if (list.length) {
          let tempList = [];
          for (let i = 0; i < list.length; i++) {
            tempList.push({
              distributions: data.tax_free_distributions
                ? data.tax_free_distributions[i]
                : null,
              net_balance: data.eoy_accumulation_value_after_credit
                ? data.eoy_accumulation_value_after_credit[i]
                : null,
            });
          }
          this.data[3].list = tempList;
          this.data[3].period = this.table.discloser.period;
          this.data[3].starting_date = this.$customDateFormat(
            this.table.median.result.starting_date,
            "M/D/y"
          );
          this.data[3].strategy_average =
            this.table.median.result.stratgy_average;
          this.data[3].strategy_carg =
            this.table.median.result.tsa_cagr_percent;
          this.data[3].irr = this.table.median.result.irr_percent;
          this.summary_data.data[3].distribution.total =
            this.table.median.result.cummulative_distribution;
          this.summary_data.data[3].distribution.total_value =
            this.table.median.result.cummulative_income_total_value;
          this.summary_data.data[3].distribution.surplus =
            this.table.median.result.Surplus;
        }
      }

      if (this.table.max) {
        let data = this.table.max.result.chart_output;
        let list = data.age;
        if (list.length) {
          let tempList = [];
          for (let i = 0; i < list.length; i++) {
            tempList.push({
              distributions: data.tax_free_distributions
                ? data.tax_free_distributions[i]
                : null,
              net_balance: data.eoy_accumulation_value_after_credit
                ? data.eoy_accumulation_value_after_credit[i]
                : null,
            });
          }
          this.data[4].list = tempList;
          this.data[4].period = this.table.discloser.period;
          this.data[4].starting_date = this.$customDateFormat(
            this.table.max.result.starting_date,
            "M/D/y"
          );
          this.data[4].strategy_average = this.table.max.result.stratgy_average;
          this.data[4].strategy_carg = this.table.max.result.tsa_cagr_percent;
          this.data[4].irr = this.table.max.result.irr_percent;
          this.summary_data.data[4].distribution.total =
            this.table.max.result.cummulative_distribution;
          this.summary_data.data[4].distribution.total_value =
            this.table.max.result.cummulative_income_total_value;
          this.summary_data.data[4].distribution.surplus =
            this.table.max.result.Surplus;
        }
      }
    },
  },
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (
        this.$store.state.app.presentation_mode &&
        this.$store.state.app.show_assets2
      ) {
        this.draggableColumns.forEach((element) => {
          element.active = false;
        });
      } else {
        this.draggableColumns.forEach((element) => {
          element.active = true;
        });
      }
    },
  },
  computed: {
    table() {
      return this.$store.state.data.report.historical;
    },
    cv_name() {
      return this.$store.state.data.report.cv_names;
    },
    simulation_id() {
      return this.$store.state.data.report.historical.simulation_id;
    },
  },
};
</script>
<style lang=""></style>
