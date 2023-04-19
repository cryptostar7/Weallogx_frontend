<template lang="">
  <div class="tab-pane fade show" id="v-pills-valueEfficiency" role="tabpanel"
    aria-labelledby="v-pills-valueEfficiency-tab">
    <div class="container-fluid">
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
            <p :class="`cardRadioSwtchpara${1+index}`">{{item.type}}</p>
            <div class="mt-1 d-flex justify-content-between">
              <p class="legacyCardPara">Value Efficiency</p>
              <p class="legacyCardPara2 text-right">{{$numFormatWithDollar(item.value_efficiency.toFixed(2))}}</p>
            </div>
            <div class="mt-1 d-flex justify-content-between">
              <p class="legacyCardPara">Total Fees</p>
              <p class="legacyCardPara2 text-right">{{$numFormatWithDollar(item.total_fees.toFixed(2))}}</p>
            </div>
            <div class="mt-1 d-flex justify-content-between">
              <p class="legacyCardPara">Total Value </p>
              <p class="legacyCardPara2 text-right">{{$numFormatWithDollar(item.total_value.toFixed(2))}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="container-fluid mt-20">
      <div class="feeMainProgrssBarDiv">
        <div>
          <div v-for="(item, index) in 6" :key="index" :class="`d-flex feeMainProgBrdrDivs ${index > 4 ? 'm-0 p-0' : ''}`">
            <p class="feeMainProgBrdr"></p>
          </div>
        </div>

        <div class="feeProgressAbsltCls">
          <div class="progressAllBarsDivMain flex-gap-12">
            <div v-for="(item, index) in data" :key="index" :class="`feeProgressBarEachDivMain feeDivDisplayNone${1+index} ${cards[index].active ? '' : 'feebarGroupDisplayNone'}  ${deletedItems.includes(index) ? 'd-none':''}`">
              <div class="d-flex groupedFourBars2">
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv">
                  <div :class="`CardProgressBig feeAnalysisLeftBar${1+index}`" :style="{height: `${Number(item.value_efficiency)*100/maxFeeValue}%`}">
                  </div>
                  <div :class="`position-absolute progressBarbtmNum feeAnalysisLeftBarBtm${1+index}`">
                    $<span>{{$numFormat(item.value_efficiency.toFixed(2))}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv">
                  <div :class="`CardProgressBig feeAnalysisMiddleBar${1+index}`" :style="{height:  `${Number(item.total_fees)*100/maxFeeValue}%`}">
                  </div>
                  <div :class="`position-absolute progressBarbtmNum feeAnalysismiddleBarBtm${1+index}`">
                    $<span>{{$numFormat(item.total_fees.toFixed(2))}}</span>
                  </div>
                </div>
                <div
                  class="bgImgNoneAndTabRadius feeProgressBarEachDiv">
                  <div :class="`CardProgressBig feeAnalysisRightBar${1+index}`" :style="{height:  `${Number(item.total_value)*100/maxFeeValue}%`}">
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
      cards: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
        { id: 4, active: true },
      ],
      data: [
        {
          type: "LifePro+",
          value_efficiency_ratio: "1:6:15",
          value_efficiency: 454516,
          total_fees: 544565,
          total_value: 256556,
          value_efficiency_in_percent: "30%",
          total_fee_in_percent: "50%",
          total_value_in_percent: "70%",
        },
        {
          type: "Brokerage Account",
          value_efficiency_ratio: "1:6:15",
          value_efficiency: 454516,
          total_fees: 564640,
          total_value: 656455,
          value_efficiency_in_percent: "30%",
          total_fee_in_percent: "65%",
          total_value_in_percent: "20%",
        },
        {
          type: "401/IRA",
          value_efficiency_ratio: "1:6:15",
          value_efficiency: 454516,
          total_fees: 478922,
          total_value: 685455,
          value_efficiency_in_percent: "40%",
          total_fee_in_percent: "58%",
          total_value_in_percent: "35%",
        },
        {
          type: "Annuity",
          value_efficiency_ratio: "1:6:15",
          value_efficiency: 454516,
          total_fees: 845645,
          total_value: 465402,
          value_efficiency_in_percent: "19%",
          total_fee_in_percent: "48%",
          total_value_in_percent: "25%",
        },
      ],
    };
  },
  mounted() {
    if(this.comparative){
      this.mapData();
    }
  },
  methods: {
    mapData: function() {
      if (this.comparative.tax_result) {
        let chart1 = this.comparative.tax_result;
        let chart2 = this.comparative.pretax_result;
        let chart3 = this.comparative.tda_result;

        if (chart1) {
          this.data[0].value_efficiency_ratio = chart1.comparison.total_value_fee_ratio;
          this.data[0].value_efficiency = chart1.comparison.value_efficiency;
          this.data[0].total_fees = chart1.comparison.fees;
          this.data[0].total_value = chart1.comparison.total_value;
       
          this.data[1].value_efficiency = chart1.comparison.value_efficiency;
          this.data[1].value_efficiency_ratio = chart1.comparison.total_value_fee_ratio;
          this.data[1].total_fees = chart1.comparison.fees;
          this.data[1].total_value = chart1.comparison.total_value;
        }

        if (chart2) {
          this.data[2].value_efficiency = chart2.comparison.value_efficiency;
          this.data[2].value_efficiency_ratio = chart2.comparison.total_value_fee_ratio;
          this.data[2].total_fees = chart2.comparison.fees;
          this.data[2].total_value = chart2.comparison.total_value;
        }

        if (chart3) {
          this.data[3].value_efficiency = chart3.comparison.value_efficiency;
          this.data[3].value_efficiency_ratio = chart3.comparison.total_value_fee_ratio;
          this.data[3].total_fees = chart3.comparison.fees;
          this.data[3].total_value = chart3.comparison.total_value;
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
    deletedItems() {
      return this.$store.state.data.report.deleted_cv_ids;
    },
    comparative() {
      return this.$store.state.data.report.comparative || false;
    },
     maxFeeValue() {
      let data = this.data;
      return this.$roundFigureNum(
        Math.max(
          ...[
            ...data.map(i => Number(i.value_efficiency)),
            ...data.map(i => Number(i.total_fees)),
            ...data.map(i => Number(i.total_value)),
          ]
        )
      );
    },
  },
};
</script>
<style lang="">
</style>