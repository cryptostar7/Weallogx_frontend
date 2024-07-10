<template lang="">
    <div class="tab-pane fade" id="v-pills-expenseRatio" role="tabpanel" aria-labelledby="v-pills-expenseRatio-tab">
        <div class="container-fluid">
        <div class="d-flex justify-content-between flex-gap-12">
            <div v-for="(item, index) in data" :key="index" :class="`mt-3 flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
                <div :class="`distributionCard1 equalDistCard{index+1} position-relative w-100`">
                    <div class="d-flex justify-content-between align-items-center">
                        <div><p class="allCardHeadPara">Expense Ratio</p></div>
                        <div class="d-flex">
                            <div class="button-cover2">
                                <div :class="`radioBtnDiv switch${index} r2`" id="button-2">
                                    <input type="checkbox" checked="true" class="checkbox2 commonRadioBtn1 feeGroupBarCard1" :checked="cards[index].active" @change="() => cards[index].active = !cards[index].active" />
                                    <div class="knobs2"></div>
                                    <div class="layer2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p :class="`cardRadioSwtchpara${index+1} mb-0`">{{cv_name[index]}}</p>
                </div>
            </div>
        </div>

        <div class="CompMainProgrssBarDiv expenseCard graph-area">
            <div class="CompProgressAbsltCls p-relative">
            <div class="lines-div d-flex flex-column justify-content-between">
                <div class="d-flex comulativeProgBrdrDivs">
                <p class="comulativeProgBrdr"></p>
                </div>
                <div class="d-flex comulativeProgBrdrDivs">
                <p class="comulativeProgBrdr"></p>
                </div>
                <div class="d-flex comulativeProgBrdrDivs">
                <p class="comulativeProgBrdr"></p>
                </div>
                <div class="d-flex comulativeProgBrdrDivs">
                <p class="comulativeProgBrdr"></p>
                </div>
                <div class="d-flex comulativeProgBrdrDivs">
                <p class="comulativeProgBrdr"></p>
                </div>
                <div class="d-flex comulativeProgBrdrDivs">
                <p class="comulativeProgBrdr"></p>
                </div>
                <div class="d-flex comulativeProgBrdrDivs m-0 p-0">
                <p class="comulativeProgBrdr"></p>
                </div>
            </div>
            <div class="progressAllBarsDivMain">
                <div class="d-flex justify-content-center align-items-end w-100 cumulative-value-bar" v-for="(item, index) in data" :key="index" :class="`mt-3 flex-1 ${deletedItems.includes(index) ? 'd-none':''} ${cards[index].active ? '' : 'invisible'}`">
                    <div :class="`cumulativeValuesProgrees progBarSecEachDiv${index+1} cumulativeProgCommon${index+1} bigBarsAreaJsCls1`">
                        <div :class="`cumulativeprogreeDivcommon cumulativeProgLifePro${index+1} bigBarHeightJs${index+1}`" :style="{height: `${Number(data[index].total_value_in_percent)*100/maxTotalValue}%`}">
                            <div :class="`bottomComulativeIncome BottomcumulativeLifePro${index+1}`"><p>
                                <span :class="`bigBarNumberJsCls${index+1}`">{{Number(item.total_value_in_percent).toFixed(2)}}%</span></p>
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
          total_value_in_percent: "",
        },
        {
          type: "",
          total_value_in_percent: "",
        },
        {
          type: "",
          total_value_in_percent: "",
        },
        {
          type: "",
          total_value_in_percent: "",
        },
      ],
    };
  },
  methods: {
    setActionId: function(id) {
      document.getElementById("comparative_cv_delete_id").value = id;
    },
    mapData: function() {
      if (this.comparative.cv_1) {
        let chart = this.comparative.lirp_data;
        let chart1 = this.comparative.cv_1;
        let chart2 = this.comparative.cv_2;
        let chart3 = this.comparative.cv_3;

        if (chart) {
          this.data[0].total_value_in_percent = chart.total_value_fee_ratio;
        }

        if (chart1) {
          let cv1_fees = chart1.comparison.chart_output.comprehensive_fees;
          if (chart1.type === "pretax") {
            cv1_fees =
              chart1.comparison.chart_output_data.comprehensive_fees_data;
          }
          this.data[1].total_value_in_percent = this.getAvgData(
            chart1.comparison.chart_output.Total_value,
            cv1_fees
          );
        }

        if (Object.values(chart2).length) {
          let cv2_fees = chart2.comparison.chart_output.comprehensive_fees;
          if (chart2.type === "pretax") {
            cv2_fees =
              chart2.comparison.chart_output_data.comprehensive_fees_data;
          }
          this.data[2].total_value_in_percent = this.getAvgData(
            chart2.comparison.chart_output.Total_value,
            cv2_fees
          );
        }

        if (Object.values(chart3).length) {
          let cv3_fees = chart3.comparison.chart_output.comprehensive_fees;
          if (chart3.type === "pretax") {
            cv3_fees =
              chart3.comparison.chart_output_data.comprehensive_fees_data;
          }
          this.data[3].total_value_in_percent = this.getAvgData(
            chart3.comparison.chart_output.Total_value,
            cv3_fees
          );
        }
      }
    },
    // calculation fot total value 
    getAvgData: function(totalValue = [], fees = []) {
      let total = totalValue.filter(i => i);
      total = total[total.length - 1];
      return this.$average(fees) / total * 100;
    },
  },
  mounted() {
    if (this.comparative) {
      this.mapData();
    }
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
    }
  },
  computed: {
    cards() {
      return this.$store.state.data.reportTabs.active_cards.cmp_fee_analysis.value_efficiency_expense_ratio;
    },
    deletedItems() {
      return this.$store.state.data.report.deleted_cv_ids;
    },
    cv_name() {
      return this.$store.state.data.report.cv_names;
    },
    maxTotalValue() {
      return Math.max(
        ...[...this.data.map(i => Number(i.total_value_in_percent))]
      );
    },
    comparative() {
      return this.$store.state.data.report.comparative || false;
    },
  },
};
</script>
<style lang="">
</style>