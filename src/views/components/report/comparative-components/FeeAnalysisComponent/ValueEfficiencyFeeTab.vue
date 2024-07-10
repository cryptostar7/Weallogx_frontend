<template lang="">
  <div class="tab-pane fade show" id="v-pills-valueEfficiency" role="tabpanel"
    aria-labelledby="v-pills-valueEfficiency-tab">
    <div class="container-fluid cards-area">
      <div class="d-flex justify-content-between flex-gap-12">
        <div v-for="(item, index) in data" :key="index" :class="`mt-3 flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
          <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100 ${cards[index].active ? '' : 'inactive'}`">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <p class="allCardHeadPara">Value Efficiency</p>
              </div>
              <div class="d-flex">
                <div class="button-cover2">
                  <div :class="`radioBtnDiv switch${index} r2`" id="button-2">
                    <input type="checkbox" class="checkbox2 commonRadioBtn1 feeGroupBarCard1" :checked="cards[index].active" @change="() => cards[index].active = !cards[index].active"/>
                    <div class="knobs2"></div>
                    <div class="layer2"></div>
                  </div>
                </div>
              </div>
            </div>            
            <p :class="`cardRadioSwtchpara${1+index}`">{{cv_name[index]}}</p>
            <div class="d-flex justify-content-between color color1">
              <p class="legacyCardPara">Value Efficiency</p>
              <p class="legacyCardPara2 text-right">${{$numFormat(Number(item.value_efficiency).toFixed(2))}}</p>
            </div>
            <div class="d-flex justify-content-between color color2">
              <p class="legacyCardPara">Total Fees</p>
              <p class="legacyCardPara2 text-right">${{$numFormat(Number(item.total_fees).toFixed(2))}}</p>
            </div>
            <div class="d-flex justify-content-between color color3">
              <p class="legacyCardPara">Total Value </p>
              <p class="legacyCardPara2 text-right">${{$numFormat(Number(item.total_value).toFixed(2))}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="container-fluid mt-20">
      <div class="feeMainProgrssBarDiv graph-area">

        <div class="feeProgressAbsltCls p-relative">
          <div class="lines-div d-flex flex-column justify-content-between">
            <div v-for="(item, index) in 6" :key="index" :class="`d-flex feeMainProgBrdrDivs ${index > 4 ? 'mb-0' : ''}`">
              <p class="feeMainProgBrdr ${index > 5 ? 'mb-0' : ''}`"></p>
            </div>
          </div>
          <div :class="`progressAllBarsDivMain flex-gap-12 ${activeCards == 2 ? 'twoEffect' : ''}`">
            <div v-for="(item, index) in data" :key="index" :class="`feeProgressBarEachDivMain feeDivDisplayNone${1+index} ${cards[index].active ? '' : 'feebarGroupDisplayNone'}  ${deletedItems.includes(index) ? 'd-none':''}`">
              <div class="d-flex groupedFourBars2">
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv">
                  <div :class="`CardProgressBig feeAnalysisLeftBar${1+index}`" :style="{height: `${Number(item.value_efficiency)*100/maxEfficiency}%`}">
                  </div>
                  <div :class="`position-absolute progressBarbtmNum feeAnalysisLeftBarBtm${1+index}`">
                    $<span>{{$numFormat(item.value_efficiency.toFixed(2))}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv">
                  <div :class="`CardProgressBig feeAnalysisMiddleBar${1+index}`" :style="{height:  `${Number(item.total_fees)*100/maxFees}%`}">
                  </div>
                  <div :class="`position-absolute progressBarbtmNum feeAnalysismiddleBarBtm${1+index}`">
                    $<span>{{$numFormat(item.total_fees.toFixed(2))}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv">
                  <div :class="`CardProgressBig feeAnalysisRightBar${1+index}`" :style="{height:  `${Number(item.total_value)*100/maxTotalValue}%`}">
                  </div>
                  <div :class="`position-absolute progressBarbtmNum feeAnalysisrightBarBtm${1+index}`">
                    $<span>{{$numFormat(item.total_value.toFixed(2))}}</span>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          type: "",
          value_efficiency: 0,
          total_fees: 0,
          total_value: 0,
        },
        {
          type: "",
          value_efficiency: 0,
          total_fees: 0,
          total_value: 0,
        },
        {
          type: "",
          value_efficiency: 0,
          total_fees: 0,
          total_value: 0,
        },
        {
          type: "",
          value_efficiency: 0,
          total_fees: 0,
          total_value: 0,
        },
      ],
    };
  },
  mounted() {
    if (this.comparative) {
      this.mapData();
    }
  },
  methods: {
    // map the data from API
    mapData: function() {
      if (this.comparative.cv_1) {
        let chart = this.comparative.lirp_data;
        let chart1 = this.comparative.cv_1;
        let chart2 = this.comparative.cv_2;
        let chart3 = this.comparative.cv_3;

        if (chart) {
          this.data[0].total_fees = chart.fee_data || 0;
          let lirpTotal = chart.chart_output.total_valaue_data;
          this.data[0].total_value = lirpTotal[lirpTotal.length - 1] || 0;
          this.data[0].value_efficiency =
            this.data[0].total_value / this.data[0].total_fees;
        }

        if (chart1) {
          this.data[1].total_fees = chart1.comparison.total_comprehensive_fees;
          let cv1Total = chart1.comparison.chart_output.Total_value.filter(
            i => i
          );
          this.data[1].total_value = cv1Total[cv1Total.length - 1];
          this.data[1].value_efficiency =
            this.data[1].total_value / this.data[1].total_fees;
        }

        if (Object.values(chart2).length) {
          this.data[2].total_fees = chart2.comparison.total_comprehensive_fees;
          let cv2Total = chart2.comparison.chart_output.Total_value.filter(
            i => i
          );
          this.data[2].total_value = cv2Total[cv2Total.length - 1];
          this.data[2].value_efficiency =
            this.data[2].total_value / this.data[2].total_fees;
        }

        if (Object.values(chart3).length) {
          this.data[3].total_fees = chart3.comparison.total_comprehensive_fees;
          let cv3Total = chart3.comparison.chart_output.Total_value.filter(
            i => i
          );
          this.data[3].total_value = cv3Total[cv3Total.length - 1];
          this.data[3].value_efficiency =
            this.data[3].total_value / this.data[3].total_fees;
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
  computed: {
    cards() {
      return this.$store.state.data.reportTabs.active_cards.cmp_fee_analysis.value_efficiency_fee;
    },
    deletedItems() {
      return this.$store.state.data.report.deleted_cv_ids;
    },
    activeCards() {
      return 4 - this.deletedItems.length;
    },
    cv_name() {
      return this.$store.state.data.report.cv_names;
    },
    comparative() {
      return this.$store.state.data.report.comparative || false;
    },
    maxEfficiency() {
      let data = this.data;
      return Math.max(...[...data.map(i => Number(i.value_efficiency))]);
    },
    maxFees() {
      let data = this.data;
      return Math.max(
        ...[
          ...data.map(i => Number(i.total_fees)),
          ...data.map(i => Number(i.total_value)),
        ]
      );
    },

    maxTotalValue() {
      let data = this.data;
      return Math.max(
        ...[
          ...data.map(i => Number(i.total_fees)),
          ...data.map(i => Number(i.total_value)),
        ]
      );
    },
  },
};
</script>
<style lang="">
</style>