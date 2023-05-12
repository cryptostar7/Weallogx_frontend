<template lang="">
  <div  :class="`empty ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="4">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="5">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`" id="legacyTabView">
        <div :class="`ComparativeTableMainDiv rightDivTop5 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey tab-head">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox5" type="checkbox" :checked="activeTabs[keyId]" class="checkbox2 rightCheckBox5" rightCheckAttr="5"  @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
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
          <div class="collapseDivMain collapseDiv5" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
              <div class="container-fluid">
                <div class="d-flex justify-content-between flex-gap-12">
                  <div v-for="(item, index) in data" :key="index" :class="`mt-3 flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
                    <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100 ${cards[index].active ? '': 'inactive'}`">
                        <div class="d-flex justify-content-between align-items-center"><div>
                          <p class="allCardHeadPara">Legacy</p>
                        </div>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div :class="`radioBtnDiv r2 switch${index}`" id="button-2">
                              <input type="checkbox" :class="`checkbox2 commonRadioBtn1 lagecyBigBaCard${1+index}`" :checked="cards[index].active" v-model="cards[index].active"/>
                            <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <a :class="`ms-2 deleteButtonAncor deleteBtn${1+index} ${index ? '':'d-none'}`" @click="setActionId(index)" data-bs-target="#DeleteComparativeCvModal" data-bs-toggle="modal">
                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"  xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                            </svg>
                          </a>
                        </div>
                      </div>                      
                      <p :class="`cardRadioSwtchpara${1+index}`">{{cv_name[index]}}</p>
                      <div class="mt-2 ">
                        <p class="legacyCardPara">Ending Value (Age {{item.age}})</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="container-fluid">
                <div class="CompMainProgrssBarDiv">
                  <div class="w-100">
                    <div v-for="(item, index) in 8" :key="index" :class="`d-flex comulativeProgBrdrDivs ${index > 6 ?'m-0 p-0' : ''}`">
                      <p class="comulativeProgBrdr"></p>
                    </div>
                  </div>
                  <div class="CompProgressAbsltCls legacy">
                    <div class="progressAllBarsDivMain">
                      <div class="d-flex justify-content-between w-100">
                        <div v-for="(item, index) in data" :key="index" :class="`cumulativeValuesProgrees p-relative progBarSecEachDiv9 bigBarsLagecyJsCls${1+index} ${cards[index].active ? '': 'bigbarsmaincolorDisable'} ${deletedItems.includes(index) ? 'd-none':''}`">
                          <div :class="`cumulativeprogreeDivcommon cumulativeProgLifePro${1+index} bigBarHeightJs${1+index} ${getPercentValue(item.shortfall, item.ending_value) > 35 ? 'p-relative' : 'p-static'}`"  :style="{height: `${getPercentValue(item.shortfall, item.ending_value)}%`}">
                            <div :class="`bottomComulativeIncome BottomcumulativeLifePro${1+index}`">
                              <p>$<span :class="`bigBarNumberJsCls${1+index}`">{{$numFormat(item.ending_value)}}</span></p>
                            </div>
                            <div class="shortFallCount">
                              <p class="">SHORTFALL</p>
                              <p>${{$numFormat(item.shortfall)}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <comparative-disclosure-component v-if="activeTabs[keyId]" :currentTab="5"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ComparativeDisclosureComponent from "./ComparativeDisclosureComponent.vue";

export default {
  props: ["keyId"],
  components: { ComparativeDisclosureComponent },
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      cards: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
        { id: 4, active: true },
      ],
      data: [
        {
          type: "",
          ending_value: "",
          age: "",
          shortfall: "",
          shortfall_percentage: "",
        },
        {
          type: "",
          ending_value: 61477,
          age: "",
          shortfall: "",
          shortfall_percentage: "",
        },
        {
          type: "",
          ending_value: "",
          age: "",
          shortfall: "",
          shortfall_percentage: "",
        },
        {
          type: "",
          ending_value: "",
          age: "",
          shortfall: "",
          shortfall_percentage: "",
        },
      ],
    };
  },
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (
        this.$store.state.app.presentation_mode &&
        this.$store.state.app.show_assets1
      ) {
        this.cards.forEach(element => {
          element.active = false;
        });
      } else {
        this.cards.forEach(element => {
          element.active = true;
        });
      }
    },
  },
  mounted() {
    this.mapData();
  },
  methods: {
    testFunction: function() {
      console.log(this.data);
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
      if (this.comparative.cv_1) {
        let chart = this.comparative.lirp_data;
        let chart1 = this.comparative.cv_1;
        let chart2 = this.comparative.cv_2;
        let chart3 = this.comparative.cv_3;
        let death_benefit = 0;

        if (chart) {
          this.data[0].ending_value = chart.ending_age;
          this.data[0].shortfall = chart.shortfall;
          this.data[0].age = chart.ending_age;
        }

        if (chart1) {
          let tempEnding = chart.chart_output.death_benefit;
          death_benefit = tempEnding[tempEnding.length - 1];
          let netBalance = chart1.comparison.chart_output.net_balance;

          this.data[0].ending_value = tempEnding[tempEnding.length - 1];
          this.data[1].ending_value = netBalance[netBalance.length - 1];
          this.data[1].shortfall =
            death_benefit - netBalance[netBalance.length - 1];
          let age1 = chart1.comparison.chart_output.Age;
          this.data[1].age = age1[age1.length - 1];
        }

        if (Object.values(chart2).length) {
          let netBalance = chart2.comparison.chart_output.net_balance;
          this.data[2].ending_value = netBalance[netBalance.length - 1];
          this.data[2].shortfall =
            death_benefit - netBalance[netBalance.length - 1];

          let age2 = chart2.comparison.chart_output.Age;
          this.data[2].age = age2[age2.length - 1];
        }

        if (Object.values(chart3).length) {
          let netBalance = chart3.comparison.chart_output.net_balance;
          this.data[3].ending_value = netBalance[netBalance.length - 1];
          this.data[3].shortfall =
            death_benefit - netBalance[netBalance.length - 1];
          let age3 = chart3.comparison.chart_output.Age;
          this.data[3].age = age3[age3.length - 1];
        }
      }
    },
  },
  computed: {
    deletedItems() {
      return this.$store.state.data.report.deleted_cv_ids;
    },
    cv_name() {
      return this.$store.state.data.report.cv_names;
    },
    comparative() {
      return this.$store.state.data.report.comparative || false;
    },
  },
};
</script>
<style lang="">
</style>