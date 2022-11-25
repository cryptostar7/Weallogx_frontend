           <template lang="">
  <div class="tab-pane fade show active" id="v-pills-compTable" role="tabpanel" aria-labelledby="pills-home-tab">
    <div class="d-flex justify-content-center mt-2">
      <div class="nav mltplSwtchDiv nav-pills">
        <div class="active" id="v-pills-mostRecent-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mostRecent"
          type="button" role="tab" aria-controls="v-pills-mostRecent" aria-selected="true" @click="() => tsa_type = 'most_recent'">Most Recent</div>
        <div id="v-pills-worst-tab" data-bs-toggle="pill" data-bs-target="#v-pills-worst" type="button" role="tab"
          aria-controls="v-pills-worst" aria-selected="true" @click="() => tsa_type = 'worst'">Worst</div>
        <div id="v-pills-median-tab" data-bs-toggle="pill" data-bs-target="#v-pills-median" type="button" role="tab"
          aria-controls="v-pills-median" aria-selected="true" @click="() => tsa_type = 'median'">Median</div>
        <div id="v-pills-best-tab" data-bs-toggle="pill" data-bs-target="#v-pills-best" type="button" role="tab"
          aria-controls="v-pills-best" aria-selected="true" @click="() => tsa_type = 'best'">Best</div>
      </div>
    </div>
    <!-- Comparative Values Table starts  -->
    <div :class="`tableCollapseDiv tableDivHeight3 ${showAll ? 'comparativeFullDiv' : 'comparativeLessDiv3'}`">
      <div class="container-fluid table-fluid reportbuilder-container-div mt-5">
        <div class="row tablesMainDiv">
          <div class="col-md-2 pe-2">
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
                      <a href="javascript:void(0)" data-bs-target="#deleteAccountModal" data-bs-toggle="modal"
                        class="deleteBtnLirp disableBtnsForAll">&nbsp;<svg width="12" height="13" viewBox="0 0 12 13"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <tr>
                      <th>Yr</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in table.distributions" :key="index">
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
                    <tr v-for="(item, index) in table.distributions" :key="index">
                      <td data-label="Year">{{$numFormatWithDollar(item.deposits)}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-md-10 ps-0 pe-3">
            <div class="row">
              <div class="col-md-3 pe-1">
                <div class="tab-content">
                  <!-- most recent tab -->
                  <div class="tab-pane fade show active" >
                    <div class="reportTablesDiv reportTablesDiv8">
                      <div class="lifeProPlus position-relative tablesCmnClr">
                        <div class="row">
                          <div class="col-12">
                            <div class="d-flex align-items-center justify-content-between mt-2 allActionBtns me-0">
                              <div class="d-flex w-100 justify-content-end align-items-center">
                                <a href="javascript:void(0)" class="editBtnLirp disableBtnsForAll">&nbsp;<svg width="13"
                                    height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <p class="lirpPara8 m-0 mb-1">Strategy Avg</p>
                            <p class="lirpPara2 m-0 mb-1">{{table.data[0].catogories[tsa_type].strategy_average}}</p>
                          </div>
                          <div class="d-flex justify-content-between">
                            <p class="lirpPara8 m-0 mb-1">Strateguy CAGR</p>
                            <p class="lirpPara2 m-0 mb-1">{{table.data[0].catogories[tsa_type].strategy_cagr}}</p>
                          </div>
                          <div class="d-flex justify-content-between">
                            <p class="lirpPara8 m-0 mb-1">IRR</p>
                            <p class="lirpPara2 m-0 mb-1">{{table.data[0].catogories[tsa_type].irr}}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="lifeProBtmDiv lirpBtmDiv8 commonBottomTxt">
                              <p>{{table.data[0].catogories[tsa_type].type}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table class="table tableCommonForDisable  mt-1 tableCommonHide">
                        <thead class="heading-tr">
                          <tr>
                            <th>Distributions</th>
                            <th>Account Value</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in table.data[0].catogories[tsa_type].list" :key="index">
                                <td class="blankTd" data-label="blank">{{$numFormatWithDollar(item.distributions)}}</td>
                                <td data-label="acount">{{$numFormatWithDollar(item.account_value)}}</td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-9 pe-3">
                <draggable v-model="draggableColumns" :draggable="$store.state.app.presentation_mode ? '' : '.drag-item'" tag="div" class="row">
                    <div v-for="(header, index) in draggableColumns" :key="index" :class="`drag-item px-1 col-md-4 drag-col ${header.active ? '':'order-last'}`">
                      <div class="empty-inner" data-empty="1">
                        <div class="fill-inner" draggable="true" data-fill="1">
                          <div :class="`commonTableMainTopDiv${8+header.id} ${header.active ? '':'commonTableCls'}`">
                            <div :class="`reportTablesDiv reportTablesDiv${3+header.id}`">
                              <div class="lifeProPlus position-relative borderRghtTopNone tablesCmnClr">
                                <div class="dblLineAbslt" :style="{'cursor': !$store.state.app.presentation_mode ? 'move' : 'default'}">
                                  <img src="@/assets/images/icons/double-line.svg" alt="line"  v-if="!$store.state.app.presentation_mode">
                                </div>
                                <div class="row">
                                  <div class="col-12">
                                    <div :class="`d-flex align-items-center justify-content-between mt-2 allActionBtns switch${header.id}`">
                                      <div :class="`radioBtnDiv r2 switch${header.id}`" id="button-2">
                                        <input type="checkbox" class="checkbox2 commonRadioBtn2" :checked="header.active" @change="() => header.active = !header.active">
                                        <div class="knobs2"></div>
                                        <div class="layer2"></div>
                                      </div>
                                      <div class="d-flex align-items-center">
                                        <a href="javascript:void(0)" class="hideBtnAccount commonShowBtn showBtn10">
                                          <svg width="19" height="12" viewBox="0 0 19 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                              d="M9.29743 1C5.44212 1 2.79224 3.65157 1.60785 5.14103C1.1445 5.72373 1.15294 6.52522 1.62562 7.10039C2.83626 8.57358 5.52378 11.2 9.29743 11.2C13.0335 11.2 15.8155 8.62559 17.1066 7.14471C17.625 6.55025 17.6338 5.69829 17.1248 5.09586C15.8597 3.59865 13.1141 1 9.29743 1Z"
                                              fill="white" stroke="#1660A4" stroke-width="1.25" />
                                            <circle cx="9.40547" cy="6.10078" r="2.55" fill="white" stroke="#1660A4"
                                              stroke-width="1.25" />
                                            <rect x="0.625" y="0.333984" width="21" height="1.25" rx="0.625"
                                              transform="rotate(30 0.625 0.333984)" fill="#1660A4" />
                                          </svg>
                                        </a>
                                        <a href="javascript:void(0)"
                                          class="editBtnAccount editBtn mx-2 disableBtnsForAll">&nbsp;<svg width="13"
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
                                          data-bs-toggle="modal" class="deleteBtnAccount deleteBtn disableBtnsForAll">&nbsp;<svg
                                            width="12" height="13" viewBox="0 0 12 13" fill="none"
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
                                  <div class="d-flex justify-content-between">
                                    <p :class="`lifeProPlusPara${1+header.id+header.id} m-0 mb-1`">Strategy Avg</p>
                                    <p class="lifeProPlusPara2 m-0 mb-1">{{table.data[header.id].strategy_average}}</p>
                                  </div>
                                  <div class="d-flex justify-content-between">
                                    <p :class="`lifeProPlusPara${1+header.id+header.id} m-0 mb-1`">Strategy CAGR</p>
                                    <p class="lifeProPlusPara2 m-0 mb-1">{{table.data[header.id].strategy_cagr}}</p>
                                  </div>
                                  <div class="d-flex justify-content-between">
                                    <p :class="`lifeProPlusPara${1+header.id+header.id} m-0 mb-1`">IRR</p>
                                    <p class="lifeProPlusPara2 m-0 mb-1">{{table.data[header.id].irr}}</p>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-12">
                                    <div :class="`lifeProBtmDiv lifeProBtmDiv${1+header.id} commonBottomTxt`">
                                      <p>{{table.data[header.id].type}}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <table class="table tableCommonForDisable  mt-1 tableCommonHide">
                                <thead class="heading-tr">
                                  <tr>
                                    <th>Distributions</th>
                                    <th>Account Value</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(item, index) in table.data[header.id].list" :key="index">
                                    <td class="blankTd" data-label="blank">{{$numFormatWithDollar(item.distributions)}}</td>
                                    <td data-label="acount">{{$numFormatWithDollar(item.account_value)}}</td>
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
           <div class="row">
            <div class="col-md-2 pe-2"> 
              <div class="reportTablesDiv reportTablesDiv1 SummaryTableDiv1">
                <table class="table mt-1 secondTable td-first summaryTableFont">
                  <thead>
                    <tr>
                    <th width="80" style="background: none!important; border: none;"></th>
                    <th class="heading-tr shiftBorder" style="border-radius:6px;vertical-align: middle;">
                      Deposits</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="table1Td" data-label="Year" style="border:none">Totals
                      </td>
                      <td class="table1Td" data-label="Age">{{$numFormatWithDollar(summary_data.deposits.totals)}}</td>
                    </tr>
                    <tr>
                      <td colspan="2" class="table1Td totalValueTd" data-label="Age">Total Value
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" class="table1Td shortFallTd" style="text-align: left;" data-label="Age">Shortfall
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-10 ps-0 pe-3">
                <div class="row">
                    <div class="col-md-3 pe-1">
                           <div class="reportTablesDiv reportTablesDiv8">
                            <table class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
                            <thead class="heading-tr">
                                <th colspan="2" style="border-radius:6px;vertical-align: middle;">
                                Distributions
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                <td width="50%" data-label="acount">{{$numFormatWithDollar(summary_data.data[0].distribution.total)}}</td>
                                <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[0].net_balance.total)}}</td>
                                </tr>
                                <tr>
                                <td width="50%" data-label="acount">{{$numFormatWithDollar(summary_data.data[0].distribution.total_value)}}</td>
                                <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[0].net_balance.total_value)}}</td>
                                </tr>
                                <tr>
                                <td width="50%" data-label="acount">{{$numFormatWithDollar(summary_data.data[0].distribution.shortfall)}}</td>
                                <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[0].net_balance.shortfall)}}</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-9 pe-3">
                         <div class="row">
                            <div v-for="(header, index) in draggableColumns" :key="index" :class="`col-md-4 px-1 commonBottomTableMainTopDiv${8+header.id} summary-draggable ${ header.active ? '' : 'order-last'} ${ header.active ? '' : 'commonTableCls'}`">
                                <div :class="`reportTablesDiv reportTablesDiv${3+header.id} `">
                                    <table class="table mt-1 w-100 tableCommonForDisable tableCommonHide summaryTableFont">
                                        <thead class="heading-tr">
                                            <tr>
                                                <th colspan="2" style="border-radius:6px;vertical-align: middle;">Distributions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td width="50%" data-label="acount">{{$numFormatWithDollar(summary_data.data[header.id].distribution.total)}}</td>
                                            <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[header.id].net_balance.total)}}</td>
                                            </tr>
                                            <tr>
                                            <td width="50%" data-label="acount">{{$numFormatWithDollar(summary_data.data[header.id].distribution.total_value)}}</td>
                                            <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[header.id].net_balance.total_value)}}</td>
                                            </tr>
                                            <tr>
                                            <td width="50%" data-label="acount">{{$numFormatWithDollar(summary_data.data[header.id].distribution.shortfall)}}</td>
                                            <td width="50%" class="blankTd" data-label="blank">{{$numFormatWithDollar(summary_data.data[header.id].net_balance.shortfall)}}</td>
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
            <div class="comparativeSeeAllBtn  mt-2" id="comparativeSeeAllBtn3">
              <button class="btn form-control" @click="() => showAll = !showAll">{{showAll ? '- SEE LESS' : '+ SEE ALL'}}</button>
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
  data() {
    return {
      draggableColumns: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
      ],
      showAll: false,
      tsa_type: "most_recent",
      table: {
        distributions: [
          { year: 1, age: 28, deposits: "65777" },
          { year: 1, age: 28, deposits: "65777" },
          { year: 1, age: 28, deposits: "65777" },
          { year: 1, age: 28, deposits: "65777" },
          { year: 1, age: 28, deposits: "65777" },
        ],
        data: [
          {
            id: 0,
            catogories: {
              most_recent: {
                strategy_average: "8.15%",
                strategy_cagr: "1.14%",
                irr: "5.76%",
                type: "TSA - Most Recent",
                list: [
                  { distributions: 12354, net_balance: "" },
                  { distributions: 45684, net_balance: "" },
                  { distributions: 66544, net_balance: "" },
                  { distributions: 95645, net_balance: "" },
                  { distributions: 95564, net_balance: "" },
                ],
              },
              worst: {
                strategy_average: "6.15%",
                strategy_cagr: "3.14%",
                irr: "2.76%",
                type: "TSA - Worst",
                list: [
                  { distributions: 89745, net_balance: "" },
                  { distributions: 45684, net_balance: "" },
                  { distributions: 66544, net_balance: "" },
                  { distributions: 95645, net_balance: "" },
                  { distributions: 95564, net_balance: "" },
                ],
              },
              median: {
                strategy_average: "4.15%",
                strategy_cagr: "6.14%",
                irr: "1.76%",
                type: "TSA - Median",
                list: [
                  { distributions: 33148, net_balance: "" },
                  { distributions: 45684, net_balance: "" },
                  { distributions: 66544, net_balance: "" },
                  { distributions: 95645, net_balance: "" },
                  { distributions: 95564, net_balance: "" },
                ],
              },
              best: {
                strategy_average: "7.15%",
                strategy_cagr: "5.14%",
                irr: "1.76%",
                type: "TSA - Best",
                list: [
                  { distributions: 25466, net_balance: "" },
                  { distributions: 45684, net_balance: "" },
                  { distributions: 66544, net_balance: "" },
                  { distributions: 95645, net_balance: "" },
                  { distributions: 95564, net_balance: "" },
                ],
              },
            },
          },
          {
            id: 1,
            strategy_average: "6.15%",
            strategy_cagr: "6.15%",
            irr: "5.65%",
            type: "Brokerage Account",
            list: [
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
            ],
          },
          {
            id: 2,
            strategy_average: "6.15%",
            strategy_cagr: "6.15%",
            irr: "5.65%",
            type: "401K/IRA",
            list: [
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
            ],
          },
          {
            id: 3,
            strategy_average: "6.15%",
            strategy_cagr: "6.15%",
            irr: "5.65%",
            type: "Annuity",
            list: [
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
              {
                distributions: "",
                account_value: 65777,
                surrender_value: 65777,
                death_benifit: 65777,
                net_balance: 65777,
              },
            ],
          },
        ],
      },
      summary_data: {
        deposits: { totals: 328885, total_values: "", shortfall: "" },
        data: [
          {
            id: 0,
            distribution: {
              total: 6577,
              total_value: 6577,
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
              total: 6577,
              total_value: 6577,
              shortfall: 6577,
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
              total: 6577,
              total_value: 6577,
              shortfall: 68577,
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
              total: 6577,
              total_value: 6577,
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
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (
        this.$store.state.app.presentation_mode &&
        this.$store.state.app.show_assets2
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
  },
};
</script>
<style lang="">
</style>