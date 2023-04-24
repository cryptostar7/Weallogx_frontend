<template lang="">
  <div  :class="`empty ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="3">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="4">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`"  id="cumulativeValuesTabView">
        <div :class="`ComparativeTableMainDiv rightDivTop4 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox4" type="checkbox" :checked="activeTabs[keyId]" class="checkbox2 rightCheckBox4" rightCheckAttr="4"  @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox4" class="rghtTopHeadcommon">Cumulative Values<span
                  class="ms-3 equalThingTabTxt">What you get out of the account.</span></label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv4" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
              <div class="d-flex justify-content-center mt-2">
                <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist" aria-orientation="vertical">
                  <div class="active" id="v-pills-annualFees1-tab" data-bs-toggle="pill"  data-bs-target="#v-pills-annualFees1" type="button" role="tab" aria-controls="v-pills-annualFees1"  aria-selected="true">Cumulative Income</div>
                  <div id="v-pills-comulativeFees1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-comulativeFees1"  type="button" role="tab" aria-controls="v-pills-comulativeFees1" aria-selected="false">Total Value</div>
                </div>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-annualFees1" role="tabpanel"  aria-labelledby="v-pills-annualFees1-tab">
                  <div class="container-fluid">
                    <div class="d-flex justify-content-between flex-gap-12">
                      <div v-for="(item, index) in data.cumulative_income" :key="index" :class="`mt-3 flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
                        <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100 ${cards.cumulative_income[index].active ? '': 'inactive'}`">
                          <div class="d-flex justify-content-between align-items-center">
                            <div>
                              <p  class="allCardHeadPara">Cumulative Income</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div :class="`radioBtnDiv r2 switch${index}`" id="button-2">
                                  <input type="checkbox" :class="`checkbox2 commonRadioBtn1 bigBaCard${1+index}`" :checked="cards.cumulative_income[index].active" v-model="cards.cumulative_income[index].active" />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a :class="`ms-2 deleteButtonAncor deleteBtn${1+index} ${index ? '':'d-none'}`" @click="setActionId(index)" data-bs-target="#DeleteComparativeCvModal"  data-bs-toggle="modal">
                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                  <path  d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"  stroke="#9D9D9D" />
                                  <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                </svg>
                              </a>
                            </div>
                          </div>                          
                          <p :class="`cardRadioSwtchpara${1+index}`">{{item.type}}</p>
                          <div class="mt-2 d-flex">
                            <div :class="`mt-1 CardProgressBar lightProgress${1+index} boxProgressCommon${1+index} ${cards.cumulative_income[index].active ? '': 'boxProgress'}`">
                              <div class="CardProgress"></div>
                              <p class="lineUnderBars"></p>
                            </div>
                            <p :class="`ms-2 CardProgressnym cardRadioSwtchpara${1+index} position-up2`">
                              <span>Cumulative Income</span><br />
                              {{$numFormatWithDollar(item.cumulative_income)}}
                            </p> 
                            <p class="ms-4 CardProgressnym commonRedRadioSwtchpara position-up2" v-if="index">
                              <span>Shortfall</span><br />
                              {{$numFormatWithDollar(item.shortfall)}}
                            </p>
                          </div>
                          <add-note-input-component reportType="comperative" noteType="comperative_cumulative_income" :cvType="1+index" :noteId="notes[index] ?  notes[index].id : null" :noteText="notes[index] ?  notes[index].text : null" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container-fluid">
                    <div class="CompMainProgrssBarDiv">
                      <div class="w-100">
                        <div v-for="(item, index) in 7" :key="index" :class="`d-flex comulativeProgBrdrDivs ${index > 5 ? 'm-0 p-0':''}`">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                      </div>
                      <div class="CompProgressAbsltCls">
                        <div class="progressAllBarsDivMain">
                          <div class="d-flex justify-content-between w-100">
                            <div v-for="(item, index) in data.cumulative_income" :key="index" :class="`cumulativeValuesProgrees progBarSecEachDiv${1+index} cumulativeProgCommon${1+index} bigBarsAreaJsCls${1+index} ${cards.cumulative_income[index].active ? '': 'bigbarsmaincolorDisable'} ${deletedItems.includes(index) ? 'd-none':''}`">
                              <div :class="`cumulativeprogreeDivcommon cumulativeProgLifePro${1+index} bigBarHeightJs${1+index} `" :style="{height: `${getPercentValue(item.shortfall, item.cumulative_income)}%`}">
                                <div :class="`bottomComulativeIncome BottomcumulativeLifePro${1+index}`">
                                  <p>$<span :class="`bigBarNumberJsCls${1+index}`">{{$numFormat(item.cumulative_income)}}</span></p>
                                </div>
                                <div class="shortFallCount">
                                  <p class="">SHORTFALL</p>
                                  <p>{{$numFormatWithDollar(item.shortfall)}}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- New tab -->
                <div class="tab-pane fade" id="v-pills-comulativeFees1" role="tabpanel" aria-labelledby="v-pills-comulativeFees1-tab">
                  <div class="container-fluid">
                    <div class="d-flex justify-content-between flex-gap-12">
                      <div v-for="(item, index) in data.total_value" :key="index" :class="`mt-3 flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
                        <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100 ${cards.total_value[index].active ? '': 'inactive'}`">
                          <div class="d-flex justify-content-between">
                            <div class="distrbnCard1paras">
                              <p>Total Value</p>
                              <p :class="`cardRadioSwtchpara${1+index}`">{{item.type}}</p>
                            </div>
                            <div class="d-flex">
                              <div class="button-cover2">
                                <div :class="`radioBtnDiv r2 switch${index}`" id="button-2">
                                  <input type="checkbox" :class="`checkbox2 commonRadioBtn1 bigBaCard${1+index}`"  :checked="cards.total_value[index].active" v-model="cards.total_value[index].active"  />
                                  <div class="knobs2"></div>
                                  <div class="layer2"></div>
                                </div>
                              </div>
                              <a :class="`ms-2 deleteButtonAncor deleteBtn${1+index} ${index ? '':'d-none'}`" @click="setActionId(index)" data-bs-target="#DeleteComparativeCvModal"  data-bs-toggle="modal">
                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                                  <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div class="mt-2 d-flex">
                            <div :class="`mt-1 CardProgressBar lightProgress${1+index} boxProgressCommon${1+index} ${cards.total_value[index].active ? '': 'boxProgress'}`">
                              <div :class="`CardProgress darkProgress${1+index}`"></div>
                              <p class="lineUnderBars"></p>
                            </div>

                            <p :class="`ms-2 CardProgressnym cardRadioSwtchpara${1+index} position-up2`">
                              <span>Cumulative Income</span><br />
                              {{$numFormatWithDollar(item.total_value)}}
                            </p> 
                            <p class="ms-4 CardProgressnym commonRedRadioSwtchpara position-up2" v-if="index">
                              <span>Shortfall</span><br />
                              {{$numFormatWithDollar(item.shortfall)}}
                            </p>
                          </div>
                          <add-note-input-component reportType="comperative" noteType="comperative_total_value" :cvType="1+index" :noteId="notes2[index] ?  notes2[index].id : null" :noteText="notes2[index] ?  notes2[index].text : null" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container-fluid">
                    <div class="CompMainProgrssBarDiv">
                      <div class="w-100">
                        <div v-for="(item, index) in 7" :key="index" :class="`d-flex comulativeProgBrdrDivs ${index > 5 ? 'm-0 p-0':''}`">
                          <p class="comulativeProgBrdr"></p>
                        </div>
                      </div>
                      <div class="CompProgressAbsltCls">
                        <div class="progressAllBarsDivMain">
                          <div class="d-flex justify-content-between w-100">
                            <div v-for="(item, index) in data.total_value" :key="index" :class="`cumulativeValuesProgrees progBarSecEachDiv${1+index} cumulativeProgCommon${1+index} bigBarsAreaJsCls${1+index} ${cards.total_value[index].active ? '': 'bigbarsmaincolorDisable'} ${deletedItems.includes(index) ? 'd-none':''}`">
                              <div :class="`cumulativeprogreeDivcommon cumulativeProgLifePro${1+index} bigBarHeightJs${1+index}`" :style="{height: `${getPercentValue(item.shortfall, item.total_value)}%`}">
                                <div :class="`bottomComulativeIncome BottomcumulativeLifePro${1+index}`">
                                  <p>$<span :class="`bigBarNumberJsCls${1+index}`">{{$numFormat(item.total_value)}}</span></p>
                                </div>
                                <div class="shortFallCount">
                                  <p class="">SHORTFALL</p>
                                  <p>{{$numFormatWithDollar(item.shortfall)}}</p>
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
            <comparative-disclosure-component v-if="activeTabs[keyId]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ComparativeDisclosureComponent from "./ComparativeDisclosureComponent.vue";
import AddNoteInputComponent from "../comman/AddNoteInputComponent.vue";

export default {
  props: ["keyId"],
  components: { ComparativeDisclosureComponent, AddNoteInputComponent },
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      cards: {
        cumulative_income: [
          { id: 1, active: true },
          { id: 2, active: true },
          { id: 3, active: true },
          { id: 4, active: true },
        ],
        total_value: [
          { id: 1, active: true },
          { id: 2, active: true },
          { id: 3, active: true },
          { id: 4, active: true },
        ],
      },
      data: {
        cumulative_income: [
          {
            type: "LifePro+",
            cumulative_income: "",
            shortfall: "",
          },
          {
            type: "Account",
            cumulative_income: "",
            shortfall: "",
          },
          {
            type: "401k/IRA",
            cumulative_income: "",
            shortfall: "",
          },
          {
            type: "Annuity",
            cumulative_income: "",
            shortfall: "",
          },
        ],
        total_value: [
          {
            type: "LifePro+",
            total_value: "",
            shortfall: "",
          },
          {
            type: "Account",
            total_value: "",
            shortfall: "",
          },
          {
            type: "401k/IRA",
            total_value: "",
            shortfall: "",
          },
          {
            type: "Annuity",
            total_value: "",
            shortfall: "",
          },
        ],
      },
    };
  },
  mounted() {
    this.mapData();
  },
  methods: {
    testFunction: function() {
      console.log(this.comparative);
    },
    setActionId: function(id) {
      document.getElementById("comparative_cv_delete_id").value = id;
    },
    getPercentValue: function(value1, value2) {
      value1 = Number(value1.toString().replaceAll("-", ""));
      value2 = Number(value2.toString().replace("-", ""));
      let unit =
        (Number(value1.toString().replace("-")) +
          Number(value2.toString().replace("-"))) /
        100;
      return value2 / unit;
    },
    mapData: function() {
      if (this.comparative.tax_result) {
        let chart1 = this.comparative.tax_result;
        let chart2 = this.comparative.pretax_result;
        let chart3 = this.comparative.tda_result;

        if (chart1) {
          this.data.cumulative_income[0].cumulative_income =
            chart1.comparison.cummulative_income;
          this.data.cumulative_income[0].shortfall =
            chart1.comparison.diff_from_lirp;
          this.data.cumulative_income[1].cumulative_income =
            chart1.comparison.cummulative_income;
          this.data.cumulative_income[1].shortfall =
            chart1.comparison.diff_from_lirp;

          this.data.total_value[0].total_value = chart1.comparison.total_value;
          this.data.total_value[0].shortfall = chart1.comparison.diff_from_lirp;
          this.data.total_value[1].total_value = chart1.comparison.total_value;
          this.data.total_value[1].shortfall = chart1.comparison.diff_from_lirp;
        }

        if (Object.values(chart2).length) {
          this.data.cumulative_income[2].cumulative_income =
            chart2.comparison.cummulative_income;
          this.data.cumulative_income[2].shortfall =
            chart2.comparison.diff_from_lirp;

          this.data.total_value[2].total_value = chart2.comparison.total_value;
          this.data.total_value[2].shortfall = chart2.comparison.diff_from_lirp;
        }

        if (Object.values(chart3).length) {
          this.data.cumulative_income[3].cumulative_income =
            chart3.comparison.cummulative_income;
          this.data.cumulative_income[3].shortfall =
            chart3.comparison.diff_from_lirp;

          this.data.total_value[3].total_value = chart3.comparison.total_value;
          this.data.total_value[3].shortfall = chart3.comparison.diff_from_lirp;
        }
      }
    },
  },
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (
        this.$store.state.app.presentation_mode &&
        this.$store.state.app.show_assets1
      ) {
        this.cards.cumulative_income.forEach(element => {
          element.active = false;
        });
        this.cards.total_value.forEach(element => {
          element.active = false;
        });
      } else {
        this.cards.cumulative_income.forEach(element => {
          element.active = true;
        });
        this.cards.total_value.forEach(element => {
          element.active = true;
        });
      }
    },
  },
  computed: {
    deletedItems() {
      return this.$store.state.data.report.deleted_cv_ids;
    },
    comparative() {
      return this.$store.state.data.report.comparative || false;
    },
    notes() {
      let note = this.$store.state.data.report.notes || [];
      if (note) {
        note = note.filter(
          i => i.note_type === "comperative_cumulative_income" && i.vehicle_type
        );

        let v1 = note.filter(i => i.vehicle_type === 1)[0] || null;
        let v2 = note.filter(i => i.vehicle_type === 2)[0] || null;
        let v3 = note.filter(i => i.vehicle_type === 3)[0] || null;
        let v4 = note.filter(i => i.vehicle_type === 4)[0] || null;
        note = [v1, v2, v3, v4];
      }
      return note;
    },
    notes2() {
      let note = this.$store.state.data.report.notes || [];
      if (note) {
        note = note.filter(
          i => i.note_type === "comperative_total_value" && i.vehicle_type
        );

        let v1 = note.filter(i => i.vehicle_type === 1)[0] || null;
        let v2 = note.filter(i => i.vehicle_type === 2)[0] || null;
        let v3 = note.filter(i => i.vehicle_type === 3)[0] || null;
        let v4 = note.filter(i => i.vehicle_type === 4)[0] || null;
        note = [v1, v2, v3, v4];
      }
      return note;
    },
  },
};
</script>
<style lang="">
</style>