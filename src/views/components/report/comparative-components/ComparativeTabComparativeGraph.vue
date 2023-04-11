<template lang="">
  <div  :class="`empty ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="1">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="2">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`" id="comparativeGraphTabView">
        <div :class="`ComparativeTableMainDiv rightDivTop2 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox2" type="checkbox" :checked="activeTabs[keyId]" class="checkbox2 commonRadioBtn1 rightCheckBox2" rightCheckAttr="2"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox2" class="rghtTopHeadcommon">Comparative Graph</label>
            </div>
            <div class="rightLeftDoubleLIneDegine"> 
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv2" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3" id="comparativeValuesFluid">
              <div class="container-fluid">
                <div class="d-flex justify-content-between flex-gap-12">
                  <div v-for="(item, index) in data" :key="index" :class="`flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
                    <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100 ${cards[index].active ? '':'inactive'}`">
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <p class="allCardHeadPara">Longevity</p>                         
                        </div>                                
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div :class="`radioBtnDiv r2 switch${index}`" id="button-2">
                              <input type="checkbox" :id="`cvGraphInputToogle${index}`" class="checkbox2 commonRadioBtn1" :checked="cards[index].active" @change="() => cards[index].active = !cards[index].active" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <a :class="`ms-2 deleteButtonAncor ${index ? '':'d-none'} deleteBtn${1+index}`" @click="setActionId(index)" data-bs-target="#DeleteComparativeCvModal" data-bs-toggle="modal">
                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z" stroke="#9D9D9D" />
                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5" transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <p :class="`cardRadioSwtchpara${1+index}`">{{item.type}}</p>
                      <div class="d-flex justify-content-between mt-1">
                        <div :class="`compGraphtopPara bgChangerComGraph${1+index}`">
                          <p>Longevity</p>
                          <p>{{item.longevity_year}}</p>
                        </div>
                        <div :class="`compGraphtopPara bgChangerComGraph${1+index}`">
                          <p class="text-end">Cumulative Income</p>
                          <p class="text-end">{{$numFormatWithDollar(item.cumulative_income)}}</p>
                        </div>
                      </div>
                      <div :class="`compGraphSmallBdr compGraphSmallBdrClr${1+index} pt-1 mb-two`">
                        <p></p>
                      </div>
                      <div class="d-flex">
                        <div class="compGraphtopParaTwo">
                          <p>Rate of Return</p>
                          <p>{{item.ror}}</p>
                        </div>
                        <div class="compGraphtopParaTwo cardParLeftMar">
                          <p>IRR</p>
                          <p>{{item.irr}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid pb-2">
                <div class="graph-container-div">
                  <canvas id="comparativeValuesChart" width="400" height="150"></canvas>
                  <div class="progressBarEachBtm comparative">
                    <div class="bar-container contribution-radio d-flex justify-content-between align-items-center">
                      <div class="progressBarBtnDiv">
                        <p>Annual Contribution</p>
                      </div>
                      <div class="d-flex">
                        <div class="button-cover2" id="button-2">
                          <div class="radioBtnDiv  r2">
                            <input type="checkbox" class="checkbox2 commonRadioBtn1" :checked="graphs.annual_contribution" @change="graphs.annual_contribution = !graphs.annual_contribution">
                            <div class="knobs2"></div>
                            <div class="layer2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bar-container distribution-radio d-flex justify-content-between align-items-center">
                      <div class="progressBarBtnDiv">
                        <p>Annual Distribution</p>
                      </div>
                      <div class="d-flex">
                        <div class="button-cover2" id="button-2">
                          <div class="radioBtnDiv  r2">
                            <input type="checkbox" class="checkbox2 commonRadioBtn1" :checked="graphs.annual_distribution" @change="graphs.annual_distribution = !graphs.annual_distribution">
                            <div class="knobs2"></div>
                            <div class="layer2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="d-none" @click="setGraph()">Test Graph</button>
            <button class="d-none" @click="testFunction()">Test</button>            
            <comparative-disclosure-component />
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
      currentTheme: this.$store.state.app.current_theme,
      cards: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
        { id: 4, active: true },
      ],
      graphs: {
        annual_contribution: true,
        annual_distribution: true,
      },
      data: [
        {
          type: "LIRP Balance",
          longevity_year: "65 Years",
          cumulative_income: 5000000,
          ror: "45%",
          irr: "45%",
        },
        {
          type: "Brokerage Account Balance",
          longevity_year: "61 Years",
          cumulative_income: 5000000,
          ror: "21%",
          irr: "21%",
        },
        {
          type: "401/IRA Balance",
          longevity_year: "35 Years",
          cumulative_income: 5000000,
          ror: "98%",
          irr: "98%",
        },
        {
          type: "Annuity Balance",
          longevity_year: "75 Years",
          cumulative_income: 5000000,
          ror: "65%",
          irr: "65%",
        },
      ],
    };
  },
  mounted() {
    // this.setGraph();
  },
  methods: {
    getDataSet: function() {
      let dataset = {
        labels: [1, 5, 10, 15, 20, 25, 30, 35],
        datasets: [
          {
            borderColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#1660A4"
                : "#0E6651",
            borderWidth: 4,
            radius: 0,
            data: [
              600000,
              1250000,
              2500000,
              3000000,
              2000000,
              1500000,
              1000000,
              500000,
            ],
          },
          {
            borderColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#0E6651"
                : "#1660A4",
            borderWidth: 4,
            radius: 0,
            data: this.deletedItems.includes(1)
              ? []
              : [
                  1700000,
                  2200000,
                  3200000,
                  3500000,
                  4300000,
                  2800000,
                  3100000,
                  2900000,
                ],
          },
          {
            borderColor: "#763CA3",
            borderWidth: 4,
            radius: 0,
            data: this.deletedItems.includes(2)
              ? []
              : [
                  1900000,
                  900000,
                  2600000,
                  4000000,
                  480000,
                  900000,
                  1300000,
                  4500000,
                ],
          },
          {
            borderColor: "#9D2B2B",
            borderWidth: 4,
            radius: 0,
            data: this.deletedItems.includes(3)
              ? []
              : [
                  2500000,
                  2800000,
                  4800000,
                  4500000,
                  1500000,
                  2900000,
                  3300000,
                  4000000,
                ],
          },
          {
            backgroundColor: "rgba(14, 103, 82, .4)",
            radius: 0,
            data: [
              2900000,
              3100000,
              3500000,
              4000000,
              3000000,
              5000000,
              3500000,
              2500000,
            ],
            type: "bar",
            borderRadius: 2,
          },
          {
            backgroundColor: "rgba(131, 159, 175, .6)",
            radius: 2,
            data: [
              1400000,
              1500000,
              1700000,
              2000000,
              1500000,
              2500000,
              2400000,
              2300000,
            ],
            type: "bar",
            borderRadius: 2,
          },
        ],
      };

      dataset = this.mapData();
      return dataset;
    },
    mapData: function() {
      let cv1 = [];
      let cv2 = [];
      let cv3 = [];
      let contribution = [];
      let distribution = [];
      let years = [];
      console.log("............");
      console.log(this.comparative);
      if (this.comparative.tax_result) {
        let chart1 = this.comparative.tax_result.comparison.chart_output;
        let chart2 = this.comparative.pretax_result.comparison.chart_output;
        let chart3 = this.comparative.tda_result.comparison.chart_output;
        cv1 = chart1["BOY Balance"];
        cv2 = chart2["BOY pre-tax Balance"];
        cv3 = chart3["BOY Balance"];

        years = chart1.year;
        contribution = chart1.Deposits;
        distribution = chart1.distributions;

        // Expected output: 3

        // console.log(cv1);
        // console.log(cv2);
        // console.log(cv3);
        // console.log(years);
        // console.log(contribution);
        // console.log(distribution);
        // console.log('............');
      }

      let dataset = {
        labels: [1, ...years.map(i => (years.includes(i / 5) ? i : ""))],
        datasets: [
          {
            borderColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#1660A4"
                : "#0E6651",
            borderWidth: 4,
            radius: 0,
            data: cv1,
          },
          {
            borderColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#0E6651"
                : "#1660A4",
            borderWidth: 4,
            radius: 0,
            data: this.deletedItems.includes(1) ? [] : cv1,
          },
          {
            borderColor: "#763CA3",
            borderWidth: 4,
            radius: 0,
            data: this.deletedItems.includes(2) ? [] : cv2,
          },
          {
            borderColor: "#9D2B2B",
            borderWidth: 4,
            radius: 0,
            data: this.deletedItems.includes(3) ? [] : cv3,
          },
          {
            backgroundColor: "rgba(14, 103, 82, .4)",
            radius: 0,
            data: contribution,
            type: "bar",
            borderRadius: 2,
          },
          {
            backgroundColor: "rgba(131, 159, 175, .6)",
            radius: 2,
            data: distribution,
            type: "bar",
            borderRadius: 2,
          },
        ],
      };

      // console.log([Math.max(...dataset.datasets[1].data), Math.max(...dataset.datasets[2].data), Math.max(...dataset.datasets[3].data)]);
      // console.log(Math.max(...([Math.max(...dataset.datasets[1].data), Math.max(...dataset.datasets[2].data), Math.max(...dataset.datasets[3].data)])));

      return dataset;
    },

    setGraph: function() {
      if (window.comparativeGraphChart) {
        window.comparativeGraphChart.destroy();
      }

      const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        return legendContainer;
      };

      const htmlLegendPlugin0 = {
        id: "comparativeValues1",
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
      let maxAcc1 = Math.max(
        ...[
          Math.max(...graphData.datasets[1].data),
          Math.max(...graphData.datasets[2].data),
          Math.max(...graphData.datasets[3].data),
        ]
      );
      let maxAcc2 = Math.max(
        ...[
          Math.max(...graphData.datasets[1].data),
          Math.max(...graphData.datasets[2].data),
          Math.max(...graphData.datasets[3].data),
        ]
      );

      const comparativeValuesConfig = {
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
            comparativeValues1: {
              containerID: "comparativeValuesFluid",
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
              max: maxAcc1,
              // stacked: true,
              ticks: {
                padding: 8,
                // stepSize: 125000,
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
            y1: {
              type: "linear",
              display: true,
              position: "right",

              // grid line settings
              grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
                borderColor: "#E9E9E9",
                drawBorder: false,
                // tickLength: 5
              },
              min: 0,
              max: maxAcc1,
              ticks: {
                padding: 8,
                // stepSize: 25000,
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
        plugins: [htmlLegendPlugin0],
      };

      window.comparativeGraphChart = new Chart(
        document.getElementById("comparativeValuesChart"),
        comparativeValuesConfig
      );

      var redioInp = document.querySelector(".dropdown-menu");
      redioInp.addEventListener("click", function(e) {
        let screenMode = localStorage.getItem("mode");
        if (screenMode == "light-blue" || screenMode == "dark-blue") {
          graphData.datasets[0].borderColor = "#1660A4";
          graphData.datasets[1].borderColor = "#0E6651";
          window.comparativeGraphChart.update();
        } else {
          graphData.datasets[0].borderColor = "#0E6651";
          graphData.datasets[1].borderColor = "#1660A4";
          window.comparativeGraphChart.update();
        }
      });

      var assestShowHide = document.querySelector(".showAssetsCheckBox");

      assestShowHide.addEventListener("click", e => {
        e.target.classList.toggle("on");
      });

      document
        .querySelector(".presentationModeBtn")
        .addEventListener("click", function() {
          if (assestShowHide.classList.contains("on")) {
            htmlLegendPlugin0.hideAll(
              window.comparativeGraphChart,
              comparativeValuesConfig.options
            );
          }
        });

      document
        .querySelector(".fullScreenCloseBtn")
        .addEventListener("click", function() {
          htmlLegendPlugin0.showAll(
            window.comparativeGraphChart,
            comparativeValuesConfig.options
          );
        });
    },
    testFunction: function() {
      this.mapData();
    },
    setActionId: function(id) {
      document.getElementById("comparative_cv_delete_id").value = id;
    },
  },
  computed: {
    deletedItems() {
      return this.$store.state.data.report.deleted_cv_ids;
    },
    comparative() {
      return this.$store.state.data.report.comparative_longevity;
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
        this.graphs.annual_contribution = false;
        this.graphs.annual_distribution = false;
      } else {
        this.cards.forEach(element => {
          element.active = true;
        });
        this.graphs.annual_contribution = true;
        this.graphs.annual_distribution = true;
      }
    },
    "deletedItems.length"(val) {
      this.setGraph();
    },
    "comparative.length"() {
      this.setGraph();
    },
  },
};
</script>
<style lang="">
</style>