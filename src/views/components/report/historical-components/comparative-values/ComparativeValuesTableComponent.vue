<template lang="">
  <div
    class="tab-pane fade show active"
    id="v-pills-compTable"
    role="tabpanel"
    aria-labelledby="pills-home-tab"
  >
    <div class="d-flex justify-content-center mt-2">
      <div class="nav mltplSwtchDiv nav-pills">
        <div
          class="active"
          id="v-pills-mostRecent-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-mostRecent"
          type="button"
          role="tab"
          aria-controls="v-pills-mostRecent"
          aria-selected="true"
          @click="() => (tsa_type = 'most_recent')"
        >
          Most Recent
        </div>
        <div
          id="v-pills-worst-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-worst"
          type="button"
          role="tab"
          aria-controls="v-pills-worst"
          aria-selected="true"
          @click="() => (tsa_type = 'worst')"
        >
          Worst
        </div>
        <div
          id="v-pills-median-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-median"
          type="button"
          role="tab"
          aria-controls="v-pills-median"
          aria-selected="true"
          @click="() => (tsa_type = 'median')"
        >
          Median
        </div>
        <div
          id="v-pills-best-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-best"
          type="button"
          role="tab"
          aria-controls="v-pills-best"
          aria-selected="true"
          @click="() => (tsa_type = 'best')"
        >
          Best
        </div>
      </div>
    </div>
    <!-- Comparative Values Table starts  -->
    <div
      :class="`tableCollapseDiv tableDivHeight3 ${
        showAll ? 'comparativeFullDiv' : 'comparativeLessDiv3'
      }`"
    >
      <div
        class="container-fluid table-fluid reportbuilder-container-div mt-5 pt-3"
      >
        <div class="row tablesMainDiv">
          <div class="col-md-2 pe-2">
            <div
              class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr visible-hidden"
            >
              <div class="dblLineAbslt">
                <img src="@/assets/images/icons/double-line.svg" alt="line" />
              </div>
              <div class="row">
                <div class="col-12">
                  <div
                    class="d-flex align-items-center justify-content-between mt-2 allActionBtns"
                  >
                    <div class="radioBtnDiv r2 greenRadioSwtch" id="button-2">
                      <input
                        type="checkbox"
                        class="checkbox2 commonRadioBtn2"
                        checked="true"
                      />
                      <div class="knobs2"></div>
                      <div class="layer2"></div>
                    </div>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0)"
                        data-bs-target="#deleteAccountModal"
                        data-bs-toggle="modal"
                        class="deleteBtnLirp disableBtnsForAll"
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
                  <p class="lirpPara8 m-0 mb-1">Strategy Avg</p>
                  <p class="lirpPara2 m-0 mb-1">10.15%</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="lirpPara8 m-0 mb-1">Strategy CAGR</p>
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
                    <p>
                      <input
                        type="text"
                        value="&nbsp;"
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
                <table class="table">
                  <thead class="heading-tr">
                    <tr>
                      <th>Yr</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in table.distributions"
                      :key="index"
                    >
                      <td class="table1Td" data-label="Year">
                        {{ item.year }}
                      </td>
                      <td class="table1Td" data-label="Age">{{ item.age }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- 1 end -->
              <div class="reportTablesDiv ms-2 reportTablesDiv2">
                <table class="table">
                  <thead class="heading-tr">
                    <tr>
                      <th>Deposits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in table.distributions"
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
          <div class="col-md-10 ps-0 pe-3">
            <div class="row">
              <div :class="`pe-1 col-md-${12 / totalCV}`">
                <div class="tab-content">
                  <!-- most recent tab -->
                  <div class="tab-pane fade show active">
                    <div class="reportTablesDiv reportTablesDiv8">
                      <div class="lifeProPlus position-relative tablesCmnClr">
                        <div class="row">
                          <div class="col-12">
                            <div
                              class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0"
                            >
                              <div
                                class="d-flex w-100 justify-content-end align-items-center"
                              >
                                <a
                                  href="javascript:void(0)"
                                  class="editBtnLirp disableBtnsForAll visible-hidden w-0"
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row eachCardParaRow">
                          <div class="d-flex justify-content-between">
                            <p class="lirpPara8 m-0 mb-1">Strategy Avg</p>
                            <p class="lirpPara2 m-0 mb-1">
                              {{
                                table.data[0].categories[tsa_type]
                                  .strategy_average
                              }}
                            </p>
                          </div>
                          <div class="d-flex justify-content-between">
                            <p class="lirpPara8 m-0 mb-1">Strategy CAGR</p>
                            <p class="lirpPara2 m-0 mb-1">
                              {{
                                table.data[0].categories[tsa_type].strategy_cagr
                              }}
                            </p>
                          </div>
                          <div class="d-flex justify-content-between">
                            <p class="lirpPara8 m-0 mb-1">IRR</p>
                            <p class="lirpPara2 m-0 mb-1">
                              {{ table.data[0].categories[tsa_type].irr }}
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
                                  v-model="
                                    table.data[0].categories[tsa_type].type
                                  "
                                  class="tableHeadInputs"
                                  readonly
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table
                        class="table tableCommonForDisable mt-1 tableCommonHide"
                      >
                        <thead class="heading-tr">
                          <tr>
                            <th>Distributions</th>
                            <th>Account Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(item, index) in table.data[0].categories[
                              tsa_type
                            ].list"
                            :key="index"
                          >
                            <td data-label="blank">
                              <span class="td-bold">{{
                                $numFormatWithDollar(item.distributions)
                              }}</span>
                            </td>
                            <td data-label="acount">
                              {{ $numFormatWithDollar(item.account_value) }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div :class="`col-md-test-9 pe-3 col-md-${12 - 12 / totalCV}`">
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
                    :key="index"
                    :class="`drag-item px-1 drag-col ${
                      header.active ? '' : 'order-last'
                    } ${index + 2 > totalCV ? 'd-none' : ''} col-md-${
                      12 / (totalCV - 1)
                    }`"
                  >
                    <div class="empty-inner" data-empty="1">
                      <div class="fill-inner" draggable="true" data-fill="1">
                        <div
                          :class="`commonTableMainTopDiv${8 + header.id} ${
                            header.active ? '' : 'commonTableCls'
                          }`"
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
                                  cursor: !$store.state.app.presentation_mode
                                    ? 'move'
                                    : 'default',
                                }"
                              >
                                <img
                                  src="@/assets/images/icons/double-line.svg"
                                  alt="line"
                                  v-if="!$store.state.app.presentation_mode"
                                />
                              </div>
                              <div class="row">
                                <div class="col-12">
                                  <div
                                    :class="`d-flex align-items-center justify-content-between mt-2 allActionBtns switch${header.id}`"
                                  >
                                    <div
                                      :class="`radioBtnDiv r2 switch${header.id}`"
                                      id="button-2"
                                    >
                                      <input
                                        type="checkbox"
                                        class="checkbox2 commonRadioBtn2"
                                        :checked="header.active"
                                        @change="
                                          () => (header.active = !header.active)
                                        "
                                      />
                                      <div class="knobs2"></div>
                                      <div class="layer2"></div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                      <a
                                        href="javascript:void(0)"
                                        class="editBtnAccount editBtn mx-2 disableBtnsForAll visible-hidden w-0"
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
                                        href="javascript:void(0)"
                                        class="d-none editBtnAccount doneBtnLirp disableBtnsForAll"
                                        >&nbsp;<svg
                                          width="13"
                                          height="12"
                                          viewBox="0 0 13 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clip-path="url(#clip0_1862_4)">
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
                                <div class="d-flex justify-content-between">
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
                                        table.data[header.id].categories[
                                          tsa_type
                                        ].strategy_average
                                      ).toFixed(2)
                                    }}%
                                  </p>
                                </div>
                                <div class="d-flex justify-content-between">
                                  <p
                                    :class="`lifeProPlusPara${
                                      1 + header.id + header.id
                                    } m-0 mb-1`"
                                  >
                                    Strategy CAGR
                                  </p>
                                  <p class="lifeProPlusPara2 m-0 mb-1">
                                    {{
                                      Number(
                                        table.data[header.id].categories[
                                          tsa_type
                                        ].strategy_cagr
                                      ).toFixed(2)
                                    }}%
                                  </p>
                                </div>
                                <div class="d-flex justify-content-between">
                                  <p
                                    :class="`lifeProPlusPara${
                                      1 + header.id + header.id
                                    } m-0 mb-1`"
                                  >
                                    IRR
                                  </p>
                                  <p class="lifeProPlusPara2 m-0 mb-1">
                                    {{
                                      Number(
                                        table.data[header.id].categories[
                                          tsa_type
                                        ].irr
                                      ).toFixed(2)
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
                                        v-model="
                                          table.data[header.id].categories[
                                            tsa_type
                                          ].type
                                        "
                                        class="tableHeadInputs"
                                        readonly
                                      />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <table
                              class="table tableCommonForDisable mt-1 tableCommonHide"
                            >
                              <thead class="heading-tr">
                                <tr>
                                  <th>Distributions</th>
                                  <th>Account Value</th>
                                </tr>
                              </thead>
                              <tbody
                                v-if="
                                  table.data[header.id].categories[tsa_type]
                                    .list.length
                                "
                              >
                                <tr
                                  v-for="(item, index) in table.data[header.id]
                                    .categories[tsa_type].list"
                                  :key="index"
                                >
                                  <td data-label="blank">
                                    <span
                                      :class="`td-bold ${
                                        table.data[header.id].categories[
                                          tsa_type
                                        ].list[index + 1]
                                          ? `${
                                              table.data[header.id].categories[
                                                tsa_type
                                              ].list[index + 1].distributions <
                                              1
                                                ? 'text-danger'
                                                : ''
                                            }`
                                          : ''
                                      }`"
                                      >{{
                                        $numFormatWithDollar(item.distributions)
                                      }}</span
                                    >
                                  </td>
                                  <td data-label="acount">
                                    {{
                                      $numFormatWithDollar(item.account_value)
                                    }}
                                  </td>
                                </tr>
                              </tbody>
                              <tbody v-else>
                                <tr
                                  v-for="(item, index) in table.data[0]
                                    .categories[tsa_type].list.length"
                                  :key="index"
                                >
                                  <td data-label="blank">
                                    <span class="td - bold"></span>
                                  </td>
                                  <td data-label="acount"></td>
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
          </div>
        </div>
        <p class="compSumAnlysPara mt-2">Summary Analysis</p>
        <div class="row summary-analysis">
          <div class="col-md-2 pe-2">
            <div class="reportTablesDiv reportTablesDiv1 SummaryTableDiv1">
              <table class="table mt-1 secondTable td-first summaryTableFont">
                <thead>
                  <tr>
                    <th
                      style="background: none !important; border: 0 !important"
                    ></th>
                  </tr>
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
                    <td class="table1Td totalValueTd" data-label="Age">
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
                      <span class="text-success">Surplus/</span
                      ><span class="text-danger">Shortfall</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-md-10 ps-0 pe-3">
            <div class="row">
              <div :class="`col-md-${12 / totalCV} pe-1`">
                <div class="reportTablesDiv reportTablesDiv8">
                  <table
                    class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont"
                  >
                    <thead class="heading-tr">
                      <tr>
                        <th style="border-radius: 6px; vertical-align: middle">
                          {{ table.data[0].categories[tsa_type].type }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Age">
                          {{
                            $numFormatWithDollar(summary_data.deposits.totals)
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%" data-label="acount">
                          {{
                            $numFormatWithDollar(
                              summary_data.data[0].categories[tsa_type]
                                .distribution.total
                            )
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%" data-label="acount">
                          {{
                            $numFormatWithDollar(
                              summary_data.data[0].categories[tsa_type]
                                .distribution.total_value
                            )
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td
                          width="50%"
                          data-label="acount"
                          :class="
                            summary_data.data[0].categories[tsa_type]
                              .distribution.shortfall > 0
                              ? 'text-success'
                              : 'text-danger'
                          "
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div :class="`col-md-${12 - 12 / totalCV} pe-3`">
                <div class="row">
                  <div
                    v-for="(header, index) in draggableColumns"
                    :key="index"
                    :class="`col-md-${12 / (totalCV - 1)}
                    ${index + 2 > totalCV ? 'd-none' : ''}
                    px-1 commonBottomTableMainTopDiv${
                      8 + header.id
                    } summary-draggable ${header.active ? '' : 'order-last'} ${
                      header.active ? '' : 'commonTableCls'
                    }`"
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
                              colspan="2"
                              style="border-radius: 6px; vertical-align: middle"
                            >
                              {{
                                table.data[header.id].categories[tsa_type].type
                              }}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Age">
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
                                  summary_data.data[header.id].categories[
                                    tsa_type
                                  ].distribution.total
                                )
                              }}
                            </td>
                          </tr>
                          <tr>
                            <td width="50%" data-label="acount">
                              {{
                                $numFormatWithDollar(
                                  summary_data.data[header.id].categories[
                                    tsa_type
                                  ].distribution.total_value
                                )
                              }}
                            </td>
                          </tr>
                          <tr>
                            <td class="extra-td-styles">
                              <table width="100%">
                                <tbody>
                                  <tr>
                                    <td class="inner-td"></td>
                                    <td
                                      width="50%"
                                      data-label="acount"
                                      :class="
                                        summary_data.data[header.id].categories[
                                          tsa_type
                                        ].distribution.shortfall > 0
                                          ? 'text-success'
                                          : 'text-danger'
                                      "
                                    >
                                      {{
                                        $numFormatWithDollar(
                                          summary_data.data[header.id]
                                            .categories[tsa_type].distribution
                                            .shortfall
                                        ).replace("-", "")
                                      }}
                                    </td>
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
        <div class="mt-3 pt-5">
          <div class="px-3 pb-3 pt-3 seeAllBtnMainDiv">
            <div class="comparativeSeeAllBtn mt-2" id="comparativeSeeAllBtn3">
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
    </div>
    <!-- Comparative Values Table ends  -->
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
export default {
  components: { draggable: VueDraggableNext },
  props: ["currentTab"],
  data() {
    return {
      draggableColumns: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
      ],
      showAll: false,
      totalCV: 4,
      tsa_type: "most_recent",
      table: {
        distributions: [],
        data: [
          {
            id: 0,
            categories: {
              most_recent: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "TSA - Most Recent",
                list: [],
              },
              worst: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "TSA - Worst",
                list: [],
              },
              median: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "TSA - Median",
                list: [],
              },
              best: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "TSA - Best",
                list: [],
              },
            },
          },

          {
            id: 1,
            categories: {
              most_recent: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "Brokerage Account - Most Recent",
                list: [],
              },
              worst: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "Brokerage Account - Worst",
                list: [],
              },
              median: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "Brokerage Account - Median",
                list: [],
              },
              best: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "Brokerage Account - Best",
                list: [],
              },
            },
          },

          {
            id: 2,
            categories: {
              most_recent: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "401K/IRA - Most Recent",
                list: [],
              },
              worst: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "401K/IRA - Worst",
                list: [],
              },
              median: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "401K/IRA - Median",
                list: [],
              },
              best: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "401K/IRA - Best",
                list: [],
              },
            },
          },

          {
            id: 3,
            categories: {
              most_recent: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "Annuity - Most Recent",
                list: [],
              },
              worst: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "Annuity - Worst",
                list: [],
              },
              median: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "Annuity - Median",
                list: [],
              },
              best: {
                strategy_average: "",
                strategy_cagr: "",
                irr: "",
                type: "Annuity - Best",
                list: [],
              },
            },
          },
        ],
      },
      summary_data: {
        deposits: { totals: "", total_values: "", shortfall: "" },
        data: [
          {
            id: 0,
            categories: {
              most_recent: {
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
              worst: {
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
              median: {
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
              best: {
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
            },
          },
          {
            id: 1,
            categories: {
              most_recent: {
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
              worst: {
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
              median: {
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
              best: {
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
            },
          },
          {
            id: 2,
            categories: {
              most_recent: {
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
              worst: {
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
              median: {
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
              best: {
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
            },
          },
          {
            id: 3,
            categories: {
              most_recent: {
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
              worst: {
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
              median: {
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
              best: {
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
            },
          },
        ],
      },
    };
  },
  methods: {
    filterDeposits: function () {
      var data = this.historical.lirp_data;
      let tempList = [];
      if (data.chart_output) {
        let chart_data = data.chart_output;
        let age = chart_data.Age;
        if (age.length) {
          for (let i = 0; i < age.length; i++) {
            tempList.push({
              age: age ? age[i] : null,
              year: chart_data.year ? chart_data.year[i] : null,
              deposits: chart_data.Deposits ? chart_data.Deposits[i] : null,
            });
          }
        }
      }

      return tempList;
    },
    filterData: function (data, type) {
      let finalData = {
        strategy_average: "",
        strategy_cagr: "",
        irr: "",
        type: type,
        list: [],
      };

      if (data.net_balance) {
        let list = data.net_balance;
        if (list.length) {
          let tempList = [];
          let distributions =
            data.distributions
          let account_value =
            data.net_balance
          for (let i = 0; i < list.length; i++) {
            tempList.push({
              distributions: distributions ? distributions[i] : null,
              account_value: account_value ? account_value[i] : null,
            });
          }
          finalData.list = tempList;
          finalData.strategy_average = data.strategy_avg;
          finalData.strategy_cagr = data.strategy_cagr;
          finalData.irr = data.irr_percent;
        }
      }
      return finalData;
    },
    mapColumn1Data: function () {
      return {
        data: {
          id: 0,
          categories: {
            most_recent: this.filterData(
              this.historical.recent.comparative_values.rolling_data,
              "TSA - Most Recent"
            ),
            worst: this.filterData(this.historical.worst.comparative_values.rolling_data, "TSA - Worst"),
            median: this.filterData(
              this.historical.median.comparative_values.rolling_data,
              "TSA - Median"
            ),
            best: this.filterData(this.historical.best.comparative_values.rolling_data, "TSA - Best"),
          },
        },
        summary: {
          id: 0,
          categories: {
            most_recent: {
              distribution: {
                total:
                  this.historical.recent.comparative_values.rolling_data.summary_analysis.distributions,
                total_value:
                  this.historical.recent.comparative_values.rolling_data.summary_analysis.total_value,
                shortfall: 0
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },

            worst: {
              distribution: {
                total: this.historical.worst.comparative_values.rolling_data.summary_analysis.distributions,
                total_value:
                  this.historical.worst.comparative_values.rolling_data.summary_analysis.total_value,
                shortfall: 0
              },
              net_balance: { total: "0", total_value: "0", shortfall: "0" },
            },

            median: {
              distribution: {
                total: this.historical.median.comparative_values.rolling_data.summary_analysis.distributions,
                total_value:
                  this.historical.median.comparative_values.rolling_data.summary_analysis.total_value,
                shortfall: 0
              },
              net_balance: { total: "0", total_value: "0", shortfall: "0" },
            },

            best: {
              distribution: {
                total: this.historical.best.comparative_values.rolling_data.summary_analysis.distributions,
                total_value:
                  this.historical.best.comparative_values.rolling_data.summary_analysis.total_value,
                shortfall: 0
              },
              net_balance: { total: "0", total_value: "0", shortfall: "0" },
            },
          },
        },
      };
    },
    mapColumn2Data: function () {
      return {
        data: {
          id: 1,
          categories: {
            most_recent: this.filterData(
              this.historical.recent.comparative_values.cv1_data,
              "Brokerage Account - Most Recent"
            ),
            worst: this.filterData(
              this.historical.worst.comparative_values.cv1_data,
              "Brokerage Account - Worst"
            ),
            median: this.filterData(
              this.historical.median.comparative_values.cv1_data,
              "Brokerage Account - Median"
            ),
            best: this.filterData(
              this.historical.best.comparative_values.cv1_data,
              "Brokerage Account - Best"
            ),
          },
        },
        summary: {
          id: 1,
          categories: {
            most_recent: {
              distribution: {
                total:
                  this.historical.recent.comparative_values.cv1_data.summary_analysis.distributions,
                total_value:
                  this.historical.recent.comparative_values.cv1_data.summary_analysis.total_value,
                shortfall:
                  this.historical.recent.comparative_values.cv1_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },

            worst: {
              distribution: {
                total: this.historical.worst.comparative_values.cv1_data.distributions,
                total_value: this.historical.worst.comparative_values.cv1_data.total_value,
                shortfall: this.historical.worst.comparative_values.cv1_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },

            median: {
              distribution: {
                total: this.historical.median.comparative_values.cv1_data.summary_analysis.distributions,
                total_value: this.historical.median.comparative_values.cv1_data.summary_analysis.total_value,
                shortfall: this.historical.median.comparative_values.cv1_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },

            best: {
              distribution: {
                total: this.historical.best.comparative_values.cv1_data.summary_analysis.distributions,
                total_value: this.historical.best.comparative_values.cv1_data.summary_analysis.total_value,
                shortfall: this.historical.best.comparative_values.cv1_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },
          },
        },
      };
    },
    mapColumn3Data: function () {
      return {
        data: {
          id: 2,
          categories: {
            most_recent: this.filterData(
              this.historical.recent.comparative_values.cv2_data,
              "401K/IRA - Most Recent"
            ),
            worst: this.filterData(
              this.historical.worst.comparative_values.cv2_data,
              "401K/IRA - Worst"
            ),
            median: this.filterData(
              this.historical.median.comparative_values.cv2_data,
              "401K/IRA - Median"
            ),
            best: this.filterData(
              this.historical.best.comparative_values.cv2_data,
              "401K/IRA - Best"
            ),
          },
        },
        summary: {
          id: 2,
          categories: {
            most_recent: {
              distribution: {
                total:
                  this.historical.recent.comparative_values.cv2_data.summary_analysis.distributions,
                total_value:
                  this.historical.recent.comparative_values.cv2_data.summary_analysis.total_value,
                shortfall:
                  this.historical.recent.comparative_values.cv2_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },

            worst: {
              distribution: {
                total: this.historical.worst.comparative_values.cv2_data.summary_analysis.distributions,
                total_value:
                  this.historical.worst.comparative_values.cv2_data.summary_analysis.total_value,
                shortfall:
                  this.historical.worst.comparative_values.cv2_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },

            median: {
              distribution: {
                total: this.historical.median.comparative_values.cv2_data.summary_analysis.distributions,
                total_value: this.historical.median.comparative_values.cv2_data.summary_analysis.total_value,
                shortfall: this.historical.median.comparative_values.cv2_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },

            best: {
              distribution: {
                total: this.historical.best.comparative_values.cv2_data.summary_analysis.distributions,
                total_value: this.historical.best.comparative_values.cv2_data.summary_analysis.total_value,
                shortfall: this.historical.best.comparative_values.cv2_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },
          },
        },
      };
    },
    mapColumn4Data: function () {
      return {
        data: {
          id: 3,
          categories: {
            most_recent: this.filterData(
              this.historical.recent.comparative_values.cv3_data,
              "Annuity - Most Recent"
            ),
            worst: this.filterData(
              this.historical.worst.comparative_values.cv3_data,
              "Annuity - Worst"
            ),
            median: this.filterData(
              this.historical.median.comparative_values.cv3_data,
              "Annuity - Median"
            ),
            best: this.filterData(
              this.historical.best.comparative_values.cv3_data,
              "Annuity - Best"
            ),
          },
        },
        summary: {
          id: 3,
          categories: {
            most_recent: {
              distribution: {
                total:
                  this.historical.recent.comparative_values.cv3_data.summary_analysis.distributions,
                total_value:
                  this.historical.recent.comparative_values.cv3_data.summary_analysis.total_value,
                shortfall:
                  this.historical.recent.comparative_values.cv3_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },

            worst: {
              distribution: {
                total: this.historical.worst.comparative_values.cv3_data.summary_analysis.distributions,
                total_value: this.historical.worst.comparative_values.cv3_data.summary_analysis.total_value,
                shortfall: this.historical.worst.comparative_values.cv3_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },

            median: {
              distribution: {
                total: this.historical.median.comparative_values.cv3_data.summary_analysis.distributions,
                total_value: this.historical.median.comparative_values.cv3_data.summary_analysis.total_value,
                shortfall: this.historical.median.comparative_values.cv3_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },

            best: {
              distribution: {
                total: this.historical.best.comparative_values.cv3_data.summary_analysis.distributions,
                total_value: this.historical.best.comparative_values.cv3_data.summary_analysis.total_value,
                shortfall: this.historical.best.comparative_values.cv3_data.summary_analysis.surplus,
              },
              net_balance: { total: "", total_value: "", shortfall: "" },
            },
          },
        },
      };
    },
    mapData: function () {
      let cvCount = 4;
      this.table.data[0] = this.mapColumn1Data().data;
      this.table.data[1] = this.mapColumn2Data().data;
      if(this.historical.recent.comparative_values.cv2_data) {
        this.table.data[2] = this.mapColumn3Data().data;
      }
      else{
        cvCount--;
      }
      if(this.historical.recent.comparative_values.cv3_data) {
        this.table.data[3] = this.mapColumn4Data().data;
      }
      else {
        cvCount--;
      }

      this.totalCV = cvCount;

      this.summary_data.data[0] = this.mapColumn1Data().summary;
      this.summary_data.data[1] = this.mapColumn2Data().summary;
      if(this.historical.recent.comparative_values.cv2_data) {
        this.summary_data.data[2] = this.mapColumn3Data().summary;
      }
      if(this.historical.recent.comparative_values.cv3_data) {
        this.summary_data.data[3] = this.mapColumn4Data().summary;
      }
  
      this.summary_data.deposits.totals =
        this.historical.lirp_data.total_deposit;
    },
    // set table description text
    setTabDescription: function () {
      let description = "";
      if (this.tsa_type === "most_recent") {
        description = `For the Most Recent ${this.rollingTime}-year rolling time period, how do the comparative vehicles stack up to the TSA?`;
      }

      if (this.tsa_type === "worst") {
        description = `For the Worst ${this.rollingTime}-year rolling time period, how do the comparative vehicles stack up to the TSA?`;
      }

      if (this.tsa_type === "median") {
        description = `For the Median ${this.rollingTime}-year rolling time period, how do the comparative vehicles stack up to the TSA?`;
      }

      if (this.tsa_type === "best") {
        description = `For the Best ${this.rollingTime}-year rolling time period, how do the comparative vehicles stack up to the TSA?`;
      }
      document.getElementById("hs_cmp_value_description_text").innerText =
        description;
    },
  },
  mounted() {
    this.table.distributions = this.filterDeposits();
    this.mapData();
    if (this.currentTab === "table") {
      this.setTabDescription();
    }
  },
  computed: {
    historical() {
      return this.$store.state.data.report.historical;
    },
    rollingTime() {
      return this.$store.state.data.report.historical.best.discloser
        ? this.$store.state.data.report.historical.best.discloser.period
        : "0";
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
    tsa_type() {
      this.setTabDescription();
    },
    "$props.currentTab"(val) {
      if (val === "graph") {
        this.setTabDescription();
      }
    },
  },
};
</script>
