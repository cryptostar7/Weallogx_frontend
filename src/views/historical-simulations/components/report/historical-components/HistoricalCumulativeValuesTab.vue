<template lang="">
  <div class="empty report-card-wrapper" data-class="empty-wrapper" data-empty="4">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="5">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`">
        <div :class="`ComparativeTableMainDiv rightDivTop11 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox11" type="checkbox" :checked="activeTabs[keyId]"
                    class="checkbox2 rightCheckBox11" rightCheckAttr="11"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
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
          <div class="collapseDivMain collapseDiv11" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
              <div class="d-flex justify-content-center mt-2">
                <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist" aria-orientation="vertical">
                  <div class="active" id="historyCumulativeIncomeTab" data-bs-toggle="pill"
                    data-bs-target="#historyCumulativeIncome" type="button" role="tab"
                    aria-controls="historyTotalValueTab" aria-selected="true"> Cumulative Income </div>
                  <div id="historyTotalValueTab" data-bs-toggle="pill" data-bs-target="#historyTotalValue" type="button"
                    role="tab" aria-controls="historyCumulativeIncomeTab" aria-selected="false"> Total Value</div>
                </div>
              </div>
              <div class="tab-content" id="historyCumulativeValues">
                <div class="tab-pane fade show active" role="tabpanel" aria-labelledby="historyCumulativeIncomeTab"
                  id="historyCumulativeIncome">
                  <div class="container-fluid">
                    <div class="d-flex justify-content-between flex-gap-12">
                     
                      <div class="mt-3 flex-1" v-for="(item, index) in data.cummulative_income" :key="index">
                        <div :class="`distributionCard1 equalDistCard${1+index} position-relative d-flex flex-column  ${cards.cummulative_income[index].active ? '': 'inactive'}`">
                          <div class="d-flex justify-content-between align-items-center">
                            <div>
                              <p class="lh-1 mb-1 allCardHeadPara">Cumulative Income</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div :class="`radioBtnDiv r2 switch${index} ${index > 3 ? 'switch4 extra':''}`" id="button-2">
                                  <input type="checkbox" :class="`checkbox2 commonRadioBtn2 bigBaCard${18+index}`" :checked="cards.cummulative_income[index].active" v-model="cards.cummulative_income[index].active" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a :class="`ms-2 deleteButtonAncor deleteBtn${1+index}`" data-bs-target="#deleteAccountModal"
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
                          
                          <p :class="`cardRadioSwtchpara${1+index} d-flex align-items-center`">{{item.type}} <label :class="`p-relative ${index == 0 ? 'd-none' : 'd-block'}`"><img src="/src/assets/images/icons/info-icon.svg" alt="info" class="ms-1 info-icon-img"><img src="/src/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-1 dark-info-icon-img"><span :class="`info-message-rollingTime`"> <span>Rolling Time Period: {{item.period}} Years</span><br> <span>Starting Date: {{item.starting_date}}</span> </span></label></p>
                          <div class="pt-2 mt-auto d-flex">
                            <div :class="`pos-top CardProgressBar lightProgress${1+index} lessWidth boxProgressCommon${18+index} ${cards.cummulative_income[index].active ? '' : 'boxProgress'}`">
                              <div class="CardProgress"></div>
                              <!-- <p class="lineUnderBars"></p> -->
                            </div>
                            <div>
                              <p class="ms-2 comValCardPara1 position-up">Cumulative Income</p>
                              <p :class="`ms-2 CardProgressnym  cardRadioSwtchpara${1+index} position-up`">{{$numFormatWithDollar(item.income)}}</p>
                            </div>
                          </div>
                          <add-note-input-component />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="container-fluid">
                    <div class="CompMainProgrssBarDiv graph-area">
                      <div class="CompProgressAbsltCls legacy p-relative">
                        <div class="lines-div d-flex flex-column justify-content-between">
                          <div v-for="item in 9" :key="item" :class="`d-flex comulativeProgBrdrDivs ${item > 8 ? 'm-0 p-0': ''}`">
                            <p class="comulativeProgBrdr"></p>
                          </div>
                        </div>
                      
                        <div class="progressAllBarsDivMain">
                          <div class="d-flex justify-content-between w-100">
                            <div v-for="(item, index) in data.cummulative_income" :key="index" :class="`cumulativeValuesProgrees noHover bgImgNoneAndTabRadius progBarSecEachDiv${18+index} cumulativeProgCommon${1+index} bigBarsAreaJsCls${18+index} eachBarMainBgNone ${cards.cummulative_income[index].active ? '': 'bigbarsmaincolorDisable'}`">
                              <div :class="`cumulativeprogreeDivcommon cumulativeProgAccount${1+index} bigBarHeightJs${18+index}`" :style="{height: `${Number(item.income)*100/maxCummulativeIncome}%`}">
                                <div :class="`bottomComulativeIncome BottomcumulativeAccount${1+index}`">
                                  <p>$<span :class="`bigBarNumberJsCls${18+index}`">{{$numFormat(item.income)}}</span></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
                <div class="tab-pane fade" role="tabpanel" aria-labelledby="historyTotalValueTab"
                  id="historyTotalValue">
                  <div class="container-fluid">
                    <div class="d-flex justify-content-between flex-gap-12">
                      <div class="mt-3 flex-1" v-for="(item, index) in data.total_income" :key="index">
                        <div :class="`distributionCard1 equalDistCard${1+index} position-relative ${cards.total_income[index].active ? '': 'inactive'}`">
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="distrbnCard1paras">
                              <p class="allCardHeadPara1">Total Value</p>
                              <p class="d-none"></p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div :class="`radioBtnDiv r2 switch${index} ${index > 3 ? 'switch4 extra':''}`" id="button-2">
                                  <input type="checkbox" :class="`checkbox2 commonRadioBtn2 bigBaCard${23+index}`" :checked="cards.total_income[index].active" v-model="cards.total_income[index].active" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a :class="`ms-2 deleteButtonAncor deleteBtn${1+index}`" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
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
                          <p :class="`cardRadioSwtchpara${1+index} d-flex align-items-center`">{{item.type}} <label :class="`p-relative ${index == 0 ? 'd-none' : 'd-block'}`"><img src="/src/assets/images/icons/info-icon.svg" alt="info" class="ms-1 info-icon-img"><img src="/src/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-1 dark-info-icon-img"><span :class="`info-message-rollingTime`"> <span>Rolling Time Period: {{item.period}} Years</span><br> <span>Starting Date: {{item.starting_date}}</span> </span></label></p>
                          <div class="mt-2 d-flex">
                            <div :class="`CardProgressBar lessWidth lightProgress${1+index} boxProgressCommon${23+index}  ${cards.total_income[index].active ? '' : 'boxProgress'}`">
                              <div class="CardProgress"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <div class="position-up">
                              <p class="ms-2 comValCardPara1">Total Value</p>
                              <p :class="`ms-2 CardProgressnym cardRadioSwtchpara${1+index}`">{{$numFormatWithDollar(item.income)}} </p>
                            </div>
                          </div>
                          <add-note-input-component />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="container-fluid">
                    <div class="CompMainProgrssBarDiv graph-area">
                      <div class="CompProgressAbsltCls legacy p-relative">
                        <div class="lines-div d-flex flex-column justify-content-between">
                         <div v-for="item in 9" :key="item" :class="`d-flex comulativeProgBrdrDivs ${item > 8 ? 'm-0 p-0': ''}`">
                            <p class="comulativeProgBrdr"></p>
                          </div>
                        </div>
                      
                        <div class="progressAllBarsDivMain">
                          <div class="d-flex justify-content-between w-100">
                            <div v-for="(item, index) in data.total_income" :key="index" :class="`cumulativeValuesProgrees noHover bgImgNoneAndTabRadius progBarSecEachDiv${23+index} cumulativeProgCommon2 bigBarsAreaJsCls${23+index} eachBarMainBgNone ${cards.total_income[index].active ? '': 'bigbarsmaincolorDisable'}`">
                              <div :class="`cumulativeprogreeDivcommon cumulativeProgAccount${1+index} bigBarHeightJs${23+index}`"  :style="{height: `${Number(item.income)*100/maxTotalIncome}%`}">
                                <div :class="`bottomComulativeIncome BottomcumulativeAccount${1+index}`">
                                  <p>$<span :class="`bigBarNumberJsCls${23+index}`">{{$numFormat(item.income)}}</span></p>
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
            <historical-disclosure-component :hideFee="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HistoricalDisclosureComponent from "./HistoricalDisclosureComponent.vue";
import AddNoteInputComponent from "../common/AddNoteInputComponent.vue";

export default {
  props: ["keyId"],
  components: { HistoricalDisclosureComponent, AddNoteInputComponent },
  data() {
    return {
      activeTabs: this.$store.state.data.simulationReportTabs.active,
      cards: {
        cummulative_income: [
          { id: 1, active: true },
          { id: 2, active: true },
          { id: 3, active: true },
          { id: 4, active: true },
          { id: 5, active: true },
        ],
        total_income: [
          { id: 1, active: true },
          { id: 2, active: true },
          { id: 3, active: true },
          { id: 4, active: true },
          { id: 5, active: true },
        ],
      },
      data: {
        cummulative_income: [
          {
            type: "LIRP",
            income: "",
          },
          {
            type: "Most Recent",
            income: "",
          },
          {
            type: "Worst",
            income: "",
          },
          {
            type: "Median",
            income: "",
          },
          {
            type: "Best",
            income: "",
          },
        ],
        total_income: [
          {
            type: "LIRP",
            income: "",
          },
          {
            type: "Most Recent",
            income: "",
          },
          {
            type: "Worst",
            income: "",
          },
          {
            type: "Median",
            income: "",
          },
          {
            type: "Best",
            income: "",
          },
        ],
      },
    };
  },
  mounted() {
    let card1 = this.historical.lirp_data;
    let card2 = this.historical.most_recent.result;
    let card3 = this.historical.min.result;
    let card4 = this.historical.median.result;
    let card5 = this.historical.max.result;

    if (card1) {
      this.data.cummulative_income[0].type = "LIRP";
      this.data.cummulative_income[0].income = card1.cummulative_income;

      this.data.total_income[0].type = "LIRP";
      this.data.total_income[0].income = card1.cummulative_income_total_value;
    }

    if (card2) {
      this.data.cummulative_income[1].type = "Most Recent";
      this.data.cummulative_income[1].income = card2.cummulative_income;
      this.data.cummulative_income[1].starting_date = this.$customDateFormat(card2.starting_date, 'M/D/y');
      this.data.cummulative_income[1].period = this.historical.discloser.period;

      this.data.total_income[1].type = "Most Recent";
      this.data.total_income[1].income = card2.cummulative_income_total_value;
      this.data.total_income[1].starting_date = this.$customDateFormat(card2.starting_date, 'M/D/y');
      this.data.total_income[1].period = this.historical.discloser.period;
    }

    if (card3) {
      this.data.cummulative_income[2].type = "Worst";
      this.data.cummulative_income[2].income = card3.cummulative_income;
      this.data.cummulative_income[2].starting_date = this.$customDateFormat(card3.starting_date, 'M/D/y');
      this.data.cummulative_income[2].period = this.historical.discloser.period;

      this.data.total_income[2].type = "Worst";
      this.data.total_income[2].income = card3.cummulative_income_total_value;
      this.data.total_income[2].starting_date = this.$customDateFormat(card3.starting_date, 'M/D/y');
      this.data.total_income[2].period = this.historical.discloser.period;
    }

    if (card4) {
      this.data.cummulative_income[3].type = "Median";
      this.data.cummulative_income[3].income = card4.cummulative_income;
      this.data.cummulative_income[3].starting_date = this.$customDateFormat(card4.starting_date, 'M/D/y');
      this.data.cummulative_income[3].period = this.historical.discloser.period;

      this.data.total_income[3].type = "Median";
      this.data.total_income[3].income = card4.cummulative_income_total_value;
      this.data.total_income[3].starting_date = this.$customDateFormat(card4.starting_date, 'M/D/y');
      this.data.total_income[3].period = this.historical.discloser.period;
    }

    if (card5) {
      this.data.cummulative_income[4].type = "Best";
      this.data.cummulative_income[4].income = card5.cummulative_income;
      this.data.cummulative_income[4].starting_date = this.$customDateFormat(card5.starting_date, 'M/D/y');
      this.data.cummulative_income[4].period = this.historical.discloser.period;

      this.data.total_income[4].type = "Best";
      this.data.total_income[4].income = card5.cummulative_income_total_value;
      this.data.total_income[4].starting_date = this.$customDateFormat(card5.starting_date, 'M/D/y');
      this.data.total_income[4].period = this.historical.discloser.period;
    }
  },
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (
        this.$store.state.app.presentation_mode &&
        this.$store.state.app.show_assets2
      ) {
        this.cards.cummulative_income.forEach(element => {
          element.active = false;
        });
        this.cards.total_income.forEach(element => {
          element.active = false;
        });
      } else {
        this.cards.cummulative_income.forEach(element => {
          element.active = true;
        });
        this.cards.total_income.forEach(element => {
          element.active = true;
        });
      }
    },
  },
  computed: {
    historical() {
      return this.$store.state.data.report.historical;
    },
    deletedItems() {
      return this.$store.state.data.report.deleted_historical_cv_ids;
    },
    maxCummulativeIncome() {
      let dst = this.data.cummulative_income;
      return Math.max(...[...dst.map(i => Number(i.income || 0))]);
    },
    maxTotalIncome() {
      let dst = this.data.total_income;
      return Math.max(...[...dst.map(i => Number(i.income || 0))]);
    },
  },
};
</script>
<style lang="">
</style>