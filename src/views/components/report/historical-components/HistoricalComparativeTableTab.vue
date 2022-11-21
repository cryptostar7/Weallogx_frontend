<template lang="">
  <div class="empty" data-class="empty-wrapper" data-empty="0">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="1">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`">
        <div :class="`ComparativeTableMainDiv rightDivTop7 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox7" type="checkbox" class="checkbox2 rightCheckBox7"
                    :checked="activeTabs[keyId]" rightCheckAttr="7"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
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
            <div
              :class="`commonCollapse  ${showAll ? 'comparativeFullDiv' : 'comparativeLessDiv'} comparativeLessDiv2 collapseDiv7 position-relative tableDivHeight2`"
              :style="{display:activeTabs[keyId] ? 'block':'none'}">
              <hr class="collapseDivHr">
              <div class="px-3 py-3">
                <div class="position-relative">
                  <div class="d-flex align-items-center  float-end">
                    <div class="radioBtnDiv r2 prstnRadioBtnHide" id="button-2">
                      <input type="checkbox" class="checkbox2 showAssetsCheckBox2" id="showAssets2">
                      <div class="knobs2"></div>
                      <div class="layer2"></div>
                    </div>
                    <label for="showAssets2"
                      class="ms-2 fs-12 semi-bold-fw showAssetsTxt prstnRadioBtnHide cursor-pointer">Show assets one by
                      one</label>
                  </div>
                  <div class="collapseDivmdlHd text-center">Historical Simulations of a Theoretical Synthetic Asset
                    (TSA) <br> as a Proxy for the LIRP</div>
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
                                <a href="javascript:void(0)" class="editBtnLirp disableBtnsForAll">&nbsp;<svg width="13"
                                    height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425" fill="white"
                                      stroke="#1660A4" stroke-width="1.15"></rect>
                                    <path
                                      d="M11.4833 1.08865C11.2099 0.815283 10.7667 0.815282 10.4933 1.08865L5.08918 6.49277C4.60103 6.98093 4.60103 7.77239 5.08918 8.26054C5.57734 8.7487 6.36879 8.7487 6.85695 8.26054L12.2611 2.85642C12.5344 2.58305 12.5344 2.13983 12.2611 1.86647L11.4833 1.08865Z"
                                      stroke="#1660A4" stroke-width="1.25"></path>
                                  </svg>
                                </a>
                                <a href="javascript:void(0)" data-bs-target="#deleteAccountModal" data-bs-toggle="modal"
                                  class="deleteBtnLirp disableBtnsForAll">&nbsp;<svg width="12" height="13"
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
                              <tr>
                                <th>Yr</th>
                                <th>Age</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(item, index) in distributions" :key="index">
                                <td class="table1Td" data-label="Year">{{item.year}}</td>
                                <td class="table1Td" data-label="Age">{{item.age}}</td>
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
                              <tr v-for="(item, index) in distributions" :key="index">
                                <td data-label="Year">{{$numFormatWithDollar(item.deposits)}}</td>
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
                                    <a href="javascript:void(0)" class="editBtnLirp disableBtnsForAll">&nbsp;<svg
                                        width="13" height="13" viewBox="0 0 13 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.575" y="2.57598" width="9.85" height="9.85" rx="1.425" fill="white"
                                          stroke="#1660A4" stroke-width="1.15" />
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
                                <p class="lirpPara2 m-0 mb-1">{{data[0].illustration_rate}}</p>
                              </div>
                              <div class="d-flex justify-content-between">
                                <p class="lirpPara8 m-0 mb-1">Illustration CAGR</p>
                                <p class="lirpPara2 m-0 mb-1">{{data[0].illustration_carg}}</p>
                              </div>
                              <div class="d-flex justify-content-between">
                                <p class="lirpPara8 m-0 mb-1">IRR</p>
                                <p class="lirpPara2 m-0 mb-1">{{data[0].irr}}</p>
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
                              <tr>
                              <th>Distributions</th>
                              <th>Net Balance</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(item, index) in data[0].list" :key="index">
                                <td class="blankTd" data-label="blank">{{$numFormatWithDollar(item.net_balance)}}</td>
                                <td data-label="acount">{{$numFormatWithDollar(item.distributions)}}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <!-- draggable column -->
                    <div class="col">
                        <draggable v-model="draggableColumns" tag="div" class="row">
                          <div v-for="(header, index) in draggableColumns" :key="0" :class="`col-3  px-1 drag-col ${header.active ? '' : 'order-last'}`">
                            <div class="empty-inner" data-empty="1">
                              <div class="fill-inner" draggable="true" data-fill="1">
                                <div :class="`commonTableMainTopDiv${4+header.id} ${header.active ? '' : 'commonTableCls'}`">
                                  <div :class="`reportTablesDiv reportTablesDiv${3+header.id}`">
                                    <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                      <div class="dblLineAbslt">
                                        <img src="@/assets/images/icons/double-line.svg" alt="line">
                                      </div>
                                      <div class="row">
                                        <div class="col-12">
                                          <div
                                            class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0">
                                            <div :class="`radioBtnDiv r2 switch${header.id} extra`" id="button-2">
                                              <input type="checkbox" class="checkbox2 commonRadioBtn2"  :checked="header.active" hideattr="1" @click="() => header.active = !header.active">
                                              <div class="knobs2"></div>
                                              <div class="layer2"></div>
                                            </div>
                                            <div class="d-flex align-items-center">
                                              <a href="javascript:void(0)" class="editBtn editBtnAccount disableBtnsForAll">&nbsp;<svg
                                                  width="13" height="13" viewBox="0 0 13 13" fill="none"
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
                                          <p :class="`lifeProPlusPara${1+header.id+header.id} m-0 mb-1`">Strategy Avg</p>
                                          <p class="lifeProPlusPara2 m-0 mb-1">{{data[header.id].strategy_average}}</p>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                          <p :class="`lifeProPlusPara${1+header.id+header.id} m-0 mb-1`">Strategy CARG</p>
                                          <p class="lifeProPlusPara2 m-0 mb-1">{{data[header.id].strategy_carg}}</p>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                          <p :class="`lifeProPlusPara${1+header.id+header.id} m-0 mb-1`">IRR</p>
                                          <p class="lifeProPlusPara2 m-0 mb-1">{{data[header.id].irr}}</p>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-12">
                                          <div :class="`lifeProBtmDiv lifeProBtmDiv${1+header.id} commonBottomTxt`">
                                            <p>{{data[header.id].type}}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <table class="table tableCommonForDisable  mt-1 tableCommonHide">
                                      <thead class="heading-tr">
                                        <tr>
                                        <th>Distributions</th>
                                        <th>Net Balance</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr v-for="(item, index) in data[header.id].list" :key="index">
                                          <td class="blankTd" data-label="blank">{{$numFormatWithDollar(item.net_balance)}}</td>
                                          <td data-label="acount">{{$numFormatWithDollar(item.distributions)}}</td>
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
                  <div class="mt-2">
                    <div class="row">
                      <div class="col-3 col-md-2 px-1">
                        <div class="reportTablesDiv reportTablesDiv1 SummaryTableDiv1">
                          <table class="table mt-1 secondTable td-first summaryTableFont">
                            <thead>
                              <th width="80" style="background: none!important;border: none;"></th>
                              <th class="heading-tr shiftBorder" style="border-radius:6px;vertical-align: middle;">
                                Deposits</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="table1Td" data-label="Year" style="border:none">Totals</td>
                                <td class="table1Td" data-label="Age">{{$numFormatWithDollar(summary_data.deposits.totals)}}</td>
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
                            <table class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
                              <thead class="heading-tr">
                                <tr>
                                <th colspan="2" style="border-radius:6px;vertical-align: middle;">Distributions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td width="50%" data-label="acount">{{$numFormatWithDollar(summary_data.data[0].distribution.total) || '-'}}</td>
                                  <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[0].net_balance.total) || '-'}}</td>
                                </tr>
                                <tr>
                                  <td width="50%" data-label="acount">{{$numFormatWithDollar(summary_data.data[0].distribution.total_value) || '-'}}</td>
                                  <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[0].net_balance.total_value) || '-'}}</td>
                                </tr>
                                <tr>
                                  <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[0].distribution.surplus) || '-'}}</td>
                                  <td width="50%" class="blankTd" data-label="acount">{{$numFormatWithDollar(summary_data.data[0].net_balance.surplus) || '-'}}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-8">
                        <div class="row summary-row">
                          <div v-for="(header, index) in draggableColumns" :key="index" :class="`col-3 px-1 commonBottomTableMainTopDiv${4+header.id} summary-draggable ${ header.active ? '' : 'order-last'}`">
                            <div :class="`reportTablesDiv reportTablesDiv${3+header.id} ${ header.active ? '' : 'commonTableCls'}`">
                              <table class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
                                <thead class="heading-tr">
                                  <tr>
                                  <th colspan="2" style="border-radius:6px;vertical-align: middle;">Distributions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td width="50%" data-label="acount">{{$numFormatWithDollar(summary_data.data[header.id].distribution.total) || '-'}}</td>
                                    <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[header.id].net_balance.total) || '-'}}</td>
                                  </tr>
                                  <tr>
                                    <td width="50%" data-label="acount">{{$numFormatWithDollar(summary_data.data[header.id].distribution.total_value) || '-'}}</td>
                                    <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[header.id].net_balance.total_value) || '-'}}</td>
                                  </tr>
                                  <tr>
                                    <td width="50%" class="surplusTd" data-label="acount">{{$numFormatWithDollar(summary_data.data[header.id].distribution.surplus) || '-'}}</td>
                                    <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[header.id].net_balance.surplus) || '-'}}</td>
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
                  <div class="comparativeSeeAllBtn container-fluid  mt-2" id="comparativeSeeAllBtn2">
                    <button class="btn form-control" @click="() => showAll = !showAll">{{showAll ? '- SEE LESS' : '+ SEE ALL'}}</button>
                  </div>
                </div>
              </div>
              <historical-disclosure-component />
            </div>
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
  props: ["keyId"],
  components: { HistoricalDisclosureComponent, draggable: VueDraggableNext },
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      showAll: false,
      draggableColumns: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
        { id: 4, active: true },
      ],
      distributions: [
        { year: 1, age: 28, deposits: "65777" },
        { year: 1, age: 28, deposits: "65777" },
        { year: 1, age: 28, deposits: "65777" },
        { year: 1, age: 28, deposits: "65777" },
        { year: 1, age: 28, deposits: "65777" },
      ],
      data: [
        {
          illustration_rate: "6.25%",
          illustration_carg: "3.65%",
          strategy_average: "8.15%",
          strategy_carg: "1.14%",
          irr: "5.76%",
          list: [
            { distributions: 45455, net_balance: "" },
            { distributions: 45684, net_balance: "" },
            { distributions: 66544, net_balance: "" },
            { distributions: 95645, net_balance: "" },
            { distributions: 95564, net_balance: "" },
          ],
        },
        {
          illustration_rate: "5.25%",
          illustration_carg: "4.25%",
          strategy_average: "8.95%",
          strategy_carg: "2.14%",
          irr: "5.66%",
          list: [
            { distributions: 16546, net_balance: "" },
            { distributions: 65414, net_balance: "" },
            { distributions: 66544, net_balance: "" },
            { distributions: 32145, net_balance: "" },
            { distributions: 32322, net_balance: "" },
          ],
        },
        {
          illustration_rate: "6.25%",
          illustration_carg: "6.25%",
          strategy_average: "8.95%",
          strategy_carg: "4.14%",
          irr: "3.66%",
          list: [
            { distributions: 22223, net_balance: "" },
            { distributions: 64544, net_balance: "" },
            { distributions: 66544, net_balance: "" },
            { distributions: 32144, net_balance: "" },
            { distributions: 94456, net_balance: "" },
          ],
        },
        {
          illustration_rate: "3.25%",
          illustration_carg: "1.25%",
          strategy_average: "8.11%",
          strategy_carg: "4.25%",
          irr: "5.11%",
          list: [
            { distributions: 12554, net_balance: "" },
            { distributions: 89822, net_balance: "" },
            { distributions: 88456, net_balance: "" },
            { distributions: 33445, net_balance: "" },
            { distributions: 78746, net_balance: "" },
          ],
        },
        {
          illustration_rate: "6.25%",
          illustration_carg: "6.25%",
          strategy_average: "8.95%",
          strategy_carg: "4.14%",
          irr: "5.66%",
          list: [
            { distributions: 65445, net_balance: "" },
            { distributions: 97842, net_balance: "" },
            { distributions: 54555, net_balance: "" },
            { distributions: 23554, net_balance: "" },
            { distributions: 92112, net_balance: "" },
          ],
        },
      ],
      summary_data: {
        deposits: { totals: 328885, total_values: "", surplus: "" },
        data: [
          {
            id: 0,
            distribution: {
              total: 25655,
              total_value: 45135,
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
              total: 75611,
              total_value: 65141,
              surplus: 32474,
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
              total: 94213,
              total_value: 6577,
              surplus: 68577,
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
              total: 6577,
              total_value: 88444,
              surplus: 62577,
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
              total: 3377,
              total_value: 4511,
              surplus: 34544,
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
};
</script>
<style lang="">
</style>

 
