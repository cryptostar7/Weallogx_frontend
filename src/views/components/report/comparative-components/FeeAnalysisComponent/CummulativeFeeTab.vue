<template lang="">
  <div class="tab-pane fade" id="v-pills-comulativeFees" role="tabpanel"
    aria-labelledby="v-pills-comulativeFees-tab">
    <div class="container-fluid" id="cumulativeFeesFluid">
        <div class="d-flex justify-content-between flex-gap-12">
            <div v-for="(item, index) in data" :key="index" :class="`mt-3 flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
                <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100  ${cards[index].active ? '':'inactive'}`">
                    <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="allCardHeadPara">Cumulative Fees</p>
                    </div>
                    <div class="d-flex">
                        <div class="button-cover2">
                          <div :class="`radioBtnDiv switch${index} r2`" id="button-2">
                              <input type="checkbox" class="checkbox2 commonRadioBtn1" :checked="cards[index].active" @change="() => cards[index].active != cards[index].active" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                          </div>
                        </div>
                    </div>
                    </div>                    
                    <p :class="`cardRadioSwtchpara${1+index}`">{{cv_name[index]}}</p>
                    <div class="mt-1 d-flex justify-content-between">
                    <p class="legacyCardPara">Total Value Expense Ratio</p>
                    <p class="legacyCardPara2 text-right">{{Number(item.total_value_in_percent).toFixed(2)}}%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="graph-container-div fh">
            <canvas id="cumulativeFeesChart" width="500" height="116"></canvas>
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
    // map data for cv cards from the API
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
          console.log(chart2.type);
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
    getAvgData: function(totalValue = [], fees = []) {
      let total = totalValue.filter(i => i);
      total = total[total.length - 1];
      return this.$average(fees) / total * 100;
    },
    getDataSet: function() {
      let cumulativeFeesData = {
        labels: [],
        datasets: [
          {
            fill: true,
            backgroundColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "rgba(22, 96, 164, .4)"
                : "rgba(14, 102, 81, .35)",
            borderColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue" 
                ? "#1660A4" : this.$appTheme() == "dark-green" ? "#26AB8B"
                : "#0E6651",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data: [],
          },
          {
            fill: true,
            backgroundColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "rgba(8, 152, 117, .5)"
                : "rgba(22, 96, 164, .3)",
            borderColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#089875"
                : "#1660A4",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data: [],
          },
          {
            fill: true,
            backgroundColor: "rgba(118, 60, 163, .3)",
            borderColor: "#763CA3",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data: [],
          },
          {
            fill: true,
            backgroundColor: "rgba(157, 43, 43, .3)",
            borderColor: "#9D2B2B",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data: [],
          },
        ],
      };

      if (this.comparative.cv_1) {
        let chart = this.comparative.lirp_data;
        let chart1 = this.comparative.cv_1;
        let chart2 = this.comparative.cv_2;
        let chart3 = this.comparative.cv_3;

        if (chart) {
          cumulativeFeesData.datasets[0].data =
            chart.chart_output.cummulative_fees || [];
          let years = chart.chart_output.year;
          cumulativeFeesData.labels = [
            1,
            ...years.map(i => (years.includes(i / 5) ? i : "")),
          ];
        }

        if (!this.deletedItems.includes(1) && Object.values(chart1).length) {
          cumulativeFeesData.datasets[1].data =
            chart1.comparison.chart_output.cummulative_fees;
        }

        if (!this.deletedItems.includes(2) && Object.values(chart2).length) {
          cumulativeFeesData.datasets[2].data =
            chart2.comparison.chart_output.cummulative_fees;
        }

        if (!this.deletedItems.includes(3) && Object.values(chart3).length) {
          cumulativeFeesData.datasets[3].data =
            chart3.comparison.chart_output.cummulative_fees;
        }
      }
      return cumulativeFeesData;
    },
    setGraph: function() {
      if (window.cumulativeChart) {
        window.cumulativeChart.destroy();
      }

      const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        return legendContainer;
      };

      // Fee Analysis - Cumulative Fees Graph Starts
      const htmlLegendPlugin2 = {
        id: "cumulativeFeesLegend",
        afterUpdate(chart, args, options) {
          const ul = getOrCreateLegendList(chart, options.containerID);
          const items = chart.options.plugins.legend.labels.generateLabels(
            chart
          );
          let checkboxes = document
            .getElementById(options.containerID)
            .querySelectorAll("input[type=checkbox]");

          items.forEach((item, index) => {
            checkboxes[index].onclick = e => {
              const { type } = chart.config;
              if (type === "pie" || type === "doughnut") {
                // Pie and doughnut charts only have a single dataset and visibility is per item
                chart.toggleDataVisibility(item.index);
              } else {
                chart.setDatasetVisibility(
                  item.datasetIndex,
                  !chart.isDatasetVisible(item.datasetIndex)
                );
              }
              chart.update();
            };
          });
        },
        hideAll(chart, options) {
          const items = chart.options.plugins.legend.labels.generateLabels(
            chart
          );
          items.forEach((item, index) => {
            const { type } = chart.config;
            if (type === "pie" || type === "doughnut") {
              // Pie and doughnut charts only have a single dataset and visibility is per item
              chart.toggleDataVisibility(item.index);
            } else {
              chart.setDatasetVisibility(item.datasetIndex, false);
            }
            chart.update();
          });
        },
        showAll(chart, options) {
          const items = chart.options.plugins.legend.labels.generateLabels(
            chart
          );
          items.forEach((item, index) => {
            const { type } = chart.config;
            if (type === "pie" || type === "doughnut") {
              // Pie and doughnut charts only have a single dataset and visibility is per item
              chart.toggleDataVisibility(item.index);
            } else {
              chart.setDatasetVisibility(item.datasetIndex, true);
            }
            chart.update();
          });
        },
      };

      let graphData = this.getDataSet();
      let maxAxis = Math.max(
        ...[
          Math.max(...graphData.datasets[0].data),
          Math.max(...graphData.datasets[1].data),
          Math.max(...graphData.datasets[2].data),
          Math.max(...graphData.datasets[3].data),
        ]
      );

      maxAxis = this.$roundFigureNum(maxAxis).toFixed(0);

      const cumulativeFeesConfig = {
        type: "line",
        data: graphData,
        options: {
          interaction: {
            intersect: false,
            mode: "index",
          },
          font: {
            size: 16,
            color: "#000",
          },
          responsive: true,
          plugins: {
            cumulativeFeesLegend: {
              containerID: "cumulativeFeesFluid",
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
                color: "transparent",
              },
              ticks: {
                font: {
                  size: 11,
                  family: "Inter",
                  weight: "500",
                },
              },
            },
            y: {
              grid: {
                borderColor: "#E9E9E9",
                drawBorder: false,
              },
              min: 0,
              max: maxAxis,
              ticks: {
                padding: 8,
                // stepSize: 15000,
                callback: function(value, index, ticks) {
                  value = value.toString();
                  value = value.split(/(?=(?:...)*$)/);
                  value = value.join(",");
                  return "$" + value;
                },
                font: {
                  size: 11,
                  family: "Inter",
                  weight: "500",
                },
              },
            },
          },
        },
        plugins: [htmlLegendPlugin2],
      };

      window.cumulativeChart = new Chart(
        document.getElementById("cumulativeFeesChart"),
        cumulativeFeesConfig
      );

      var redioInp = document.querySelector(".dropdown-menu");
      redioInp.addEventListener("click", function(e) {
        let screenMode = localStorage.getItem("mode");
        if (screenMode == "light-blue" || screenMode == "dark-blue") {
          graphData.datasets[0].borderColor = "#1660A4";
          graphData.datasets[1].borderColor = "#089875";
          graphData.datasets[0].backgroundColor =
            "rgba(22, 96, 164, .4)";
          graphData.datasets[1].backgroundColor =
            "rgba(8, 152, 117, .35)";
        }else if(screenMode == "dark-green"){
          graphData.datasets[0].borderColor = "#26AB8B";
          graphData.datasets[1].borderColor = "#23669E";
          graphData.datasets[0].backgroundColor =
            "rgba(8, 152, 117, .35)";
          graphData.datasets[1].backgroundColor =
            "rgba(22, 96, 164, .4)";
        } else {
          graphData.datasets[0].borderColor = "#0E6651";
          graphData.datasets[0].backgroundColor =
            "rgba(14, 102, 81, .4)";
          graphData.datasets[1].borderColor = "#1660A4";
          graphData.datasets[1].backgroundColor =
            "rgba(22, 96, 164, .35)";
          
        }
        window.cumulativeChart.update();
      });

      var assestShowHide = document.querySelector(".showAssetsCheckBox");
      document
        .querySelector(".presentationModeBtn")
        .addEventListener("click", function() {
          if (assestShowHide.classList.contains("on")) {
            htmlLegendPlugin2.hideAll(
              window.cumulativeChart,
              cumulativeFeesConfig.options
            );
          }
        });

      document
        .querySelector(".fullScreenCloseBtn")
        .addEventListener("click", function() {
          htmlLegendPlugin2.showAll(
            window.cumulativeChart,
            cumulativeFeesConfig.options
          );
        });
    },
  },
  mounted() {
    if (this.comparative) {
      this.mapData();
      setTimeout(() => this.setGraph(), 100);
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
    },
    "deletedItems.length"(val) {
      this.setGraph();
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