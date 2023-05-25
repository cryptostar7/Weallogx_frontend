<template lang="">
  <div class="tab-pane fade show active" id="v-pills-annualFees" role="tabpanel"
    aria-labelledby="v-pills-annualFees-tab">
    <div class="container-fluid" id="annualFeesFluid">
      <div class="d-flex justify-content-between flex-gap-12">
        <div v-for="(item, index) in data" :key="index" :class="`mt-3 flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
          <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100  ${cards[index].active ? '':'inactive'}`">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <p class="allCardHeadPara">Annual Fees</p>
              </div>
              <div class="d-flex">
                <div class="button-cover2">
                  <div :class="`radioBtnDiv r2 switch${index}`" id="button-2">
                    <input type="checkbox" class="checkbox2 commonRadioBtn1"  :checked="cards[index].active" @change="() => cards[index].active = !cards[index].active" />
                    <div class="knobs2"></div>
                    <div class="layer2"></div>
                  </div>
                </div>
                <a :class="`ms-2 deleteButtonAncor deleteBtn${1+index} ${index ? '':'d-none'}`" @click="setActionId(index)" data-bs-target="#DeleteComparativeCvModal" data-bs-toggle="modal">
                  <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                    <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                  </svg>
                </a>
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
        <canvas id="annualFeesChart" width="500" height="116"></canvas>
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
      let annualFeesData = {
        labels: [],
        datasets: [
          {
            borderColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#1660A4" : this.$appTheme() == "dark-green" ? "#26AB8B"
                : "#0E6651",
            pointBackgroundColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue" 
                ? "#1660A4" ? this.$appTheme() == "dark-green" : "#26AB8B"
                : "#0E6651",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data: [],
          },
          {
            borderColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#089875"
                : "#1660A4",
            pointBackgroundColor:
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
            borderColor: "#763CA3",
            pointBackgroundColor: "#763CA3",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data: [],
          },
          {
            borderColor: "#9D2B2B",
            pointBackgroundColor: "#9D2B2B",
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

        if (chart1) {
          annualFeesData.datasets[0].data = chart.chart_output.fees.map(i => i.toFixed(0)) || [];
          let years = chart.chart_output.year;
          annualFeesData.labels = [
            1,
            ...years.map(i => (years.includes(i / 5) ? i : "")),
          ];
        }

        if (!this.deletedItems.includes(1) && Object.values(chart1).length) {
          if (chart1.type === "pretax") {
            annualFeesData.datasets[1].data =
              chart1.comparison.chart_output_data.comprehensive_fees_data.map(i => i.toFixed(0));
          } else {
            annualFeesData.datasets[1].data =
              chart1.comparison.chart_output.comprehensive_fees.map(i => i.toFixed(0));
          }
        }

        if (!this.deletedItems.includes(2) && Object.values(chart2).length) {
          if (chart2.type === "pretax") {
            annualFeesData.datasets[2].data =
              chart2.comparison.chart_output_data.comprehensive_fees_data.map(i => i.toFixed(0));
          } else {
            annualFeesData.datasets[2].data =
              chart2.comparison.chart_output.comprehensive_fees.map(i => i.toFixed(0));
          }
        }

        if (!this.deletedItems.includes(3) && Object.values(chart3).length) {
          if (chart3.type === "pretax") {
            annualFeesData.datasets[3].data =
              chart3.comparison.chart_output_data.comprehensive_fees_data.map(i => i.toFixed(0));
          } else {
            annualFeesData.datasets[3].data =
              chart3.comparison.chart_output.comprehensive_fees.map(i => i.toFixed(0));
          }
        }
      }
      return annualFeesData;
    },
    setGraph: function() {
      if (window.annualChart) {
        window.annualChart.destroy();
      }

      const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        return legendContainer;
      };

      const htmlLegendPlugin1 = {
        id: "anuualFeesLegend",
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

      const annualFeesConfig = {
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
            anuualFeesLegend: {
              containerID: "annualFeesFluid",
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
        plugins: [htmlLegendPlugin1],
      };

      window.annualChart = new Chart(
        document.getElementById("annualFeesChart"),
        annualFeesConfig
      );

      var redioInp = document.querySelector(".dropdown-menu");
      redioInp.addEventListener("click", function(e) {
        let screenMode = localStorage.getItem("mode");
        if (screenMode == "light-blue" || screenMode == "dark-blue") {
          graphData.datasets[0].borderColor = "#1660A4";
          graphData.datasets[1].borderColor = "#089875";
        }else if(screenMode == "dark-green"){
          graphData.datasets[0].borderColor = "#26AB8B";
          graphData.datasets[1].borderColor = "#23669E";
        } else {
          graphData.datasets[0].borderColor = "#0E6651";
          graphData.datasets[1].borderColor = "#1660A4";
        }
        window.annualChart.update();
      });

      var assestShowHide = document.querySelector(".showAssetsCheckBox");
      document
        .querySelector(".presentationModeBtn")
        .addEventListener("click", function() {
          if (assestShowHide.classList.contains("on")) {
            htmlLegendPlugin1.hideAll(
              window.annualChart,
              annualFeesConfig.options
            );
          }
        });

      document
        .querySelector(".fullScreenCloseBtn")
        .addEventListener("click", function() {
          htmlLegendPlugin1.showAll(
            window.annualChart,
            annualFeesConfig.options
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