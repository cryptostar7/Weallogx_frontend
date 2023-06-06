<template lang="">
  <div  :class="`empty report-card-wrapper ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="1">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="2">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`" id="comparativeGraphTabView">
        <div :class="`ComparativeTableMainDiv rightDivTop2 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey tab-head">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox2" type="checkbox" :checked="activeTabs[keyId]" class="checkbox2 commonRadioBtn1 rightCheckBox2" rightCheckAttr="2"  @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
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
              <div class="container-fluid cards-area">
                <div class="d-flex justify-content-between flex-gap-12">
                  <div v-for="(item, index) in data" :key="index" :class="`flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
                    <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100 ${cards[index].active ? '':'inactive'}`">
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <p :class="`cardMainHeading${1+index}`">{{cv_name[index]}}</p>                 
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
                      <div class="d-flex justify-content-between mt-2px">
                        <div :class="`compGraphtopPara d-flex bgChangerComGraph${1+index}`">
                          <p class="fs-12 me-1">Longevity</p>
                          <p>{{item.longevity_year}} Years</p>
                        </div>
                      </div>
                      <div :class="`compGraphSmallBdr compGraphSmallBdrClr${1+index} pt-1 mb-two`">
                        <p></p>
                      </div>
                      <div class="d-flex justify-content-between">
                        <div :class="`compGraphtopPara bgChangerComGraph${1+index}`">
                          <p>Cumulative Income</p>
                          <p>{{$numFormatWithDollar(item.cumulative_income)}}</p>
                        </div>
                        <div class="compGraphtopParaTwo">
                          <p>Rate of Return</p>
                          <p>{{Number(item.ror || 0).toFixed(2)}}%</p>
                        </div>
                        <div class="compGraphtopParaTwo">
                          <p>IRR</p>
                          <p>{{Number(item.irr || 0).toFixed(2)}}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid pb-2">
                <div class="graph-container-div graph-area">
                  <div class="comparative-graph-container w-100">
                    <canvas id="comparativeValuesChart" width="400" height="350"></canvas>
                  </div>
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
            <!-- <button @click="testFunction">testFunction</button> -->
            <comparative-disclosure-component v-if="activeTabs[keyId]" :currentTab="2"  />
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
      // cards: this.$store.state.data.reportTabs.active_cards.cmp_comparative_graph.cards,
      // graphs: this.$store.state.data.reportTabs.active_cards.cmp_comparative_graph.graphs,
      data: [
        {
          type: "",
          longevity_year: "",
          cumulative_income: 0,
          ror: "",
          irr: "",
        },
        {
          type: "",
          longevity_year: "",
          cumulative_income: 0,
          ror: "",
          irr: "",
        },
        {
          type: "",
          longevity_year: "",
          cumulative_income: 0,
          ror: "",
          irr: "",
        },
        {
          type: "",
          longevity_year: "",
          cumulative_income: 0,
          ror: "",
          irr: "",
        },
      ],
    };
  },
  mounted() {
    if (this.comparative.cv_1) {
      this.mapData(); // set longevity cards data
      this.setGraph(); // generate graph
    }
  },
  methods: {
    // returns dataset variable data for the graph
    getDataSet: function() {
      let cv = [];
      let cv1 = [];
      let cv2 = [];
      let cv3 = [];
      let contribution = [];
      let distribution = [];
      let years = [];
      if (Object.values(this.comparative.cv_1).length) {
        let chart = Object.values(this.comparativeLirp).length
          ? this.comparativeLirp.chart_output
          : false;
        let chart1 = Object.values(this.comparative_main.cv_1).length
          ? this.comparative_main.cv_1.comparison.chart_output
          : false;
        let chart2 = Object.values(this.comparative_main.cv_2).length
          ? this.comparative_main.cv_2.comparison.chart_output
          : false;
        let chart3 = Object.values(this.comparative_main.cv_3).length
          ? this.comparative_main.cv_3.comparison.chart_output
          : false;

        cv = chart ? chart["comperative_account_value"] : [];
        cv1 = chart1 ? chart1["net_balance"] : [];
        cv2 = chart2 ? chart2["net_balance"] : [];
        cv3 = chart3 ? chart3["net_balance"] : [];

        years = chart1 ? chart1.year : [];
        contribution = chart ? chart["Deposits"] : [];
        distribution = chart ? chart["distributions"] : [];
      }

      let dataset = {
        labels: [
          1,
          ...years
            .filter(i => i > 1)
            .map(i => (years.includes(i / 5) ? i : "")),
        ],
        // labels: years,
        datasets: [
          {
            borderColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#1660A4"
                : this.$appTheme() == "dark-green" ? "#26AB8B" : "#0E6651",
            pointBackgroundColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#1660A4"
                : "#0E6651",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data: cv.map(i => i.toFixed(0)),
            TooltipLabelStyle: {
              backgroundColor: "white",
              borderColor: "white",
            },
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
            data: this.deletedItems.includes(1)
              ? []
              : cv1.map(i => i.toFixed(0)) || [],
          },
          {
            borderColor: "#763CA3",
            pointBackgroundColor: "#763CA3",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data: this.deletedItems.includes(2)
              ? []
              : cv2.map(i => i.toFixed(0)) || [],
          },
          {
            borderColor: "#9D2B2B",
            pointBackgroundColor: "#9D2B2B",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data: this.deletedItems.includes(3)
              ? []
              : cv3.map(i => i.toFixed(0)) || [],
          },
          {
            barPercentage: 0,
            barThickness: 12,
            backgroundColor: "rgba(14, 103, 82, .4)",
            pointBackgroundColor: "rgba(14, 103, 82, 1)",
            pointBorderWidth: 1,
            radius: 0,
            data: contribution || [],
            type: "bar",
            borderRadius: 2,
            yAxisID: "B",
          },
          {
            barPercentage: 0,
            barThickness: 12,
            backgroundColor: "rgba(131, 159, 175, .7)",
            pointBackgroundColor: "rgba(131, 159, 175, 1)",
            pointBorderWidth: 1,
            radius: 2,
            data: distribution || [],
            type: "bar",
            borderRadius: 2,
            yAxisID: "B",
          },
        ],
      };
      return dataset;
    },
    // Render graph
    setGraph: function() {
      if (window.comparativeGraphChart) {
        // clear the old initialized graph
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
          Math.max(...(graphData.datasets[0].data || [])),
          Math.max(...(graphData.datasets[1].data || [])),
          Math.max(...(graphData.datasets[2].data || [])),
          Math.max(...(graphData.datasets[3].data || [])),
        ]
      );
      let maxAcc2 = Math.max(
        ...[
          Math.max(...(graphData.datasets[4].data || [])),
          Math.max(...(graphData.datasets[5].data || [])),
        ]
      );

      const comparativeValuesConfig = {
        type: "line",
        data: graphData,
        options: {
          maintainAspectRatio: false,
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
            tooltip: {
              callbacks: {
                labelPointStyle: function(context) {
                  return {
                    pointStyle: "triangle",
                    rotation: 0,
                  };
                },
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
                color: "transparent",
              },
              min: 1,
              ticks: {
                align: "start",
                font: {
                  size: 12,
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
              max: this.$roundFigureNum(Number(maxAcc1)).toFixed(0),
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
            B: {
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
              max: this.$roundFigureNum(Number(maxAcc2 * 2)).toFixed(0),
              ticks: {
                align: "start",
                padding: 8,
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
          graphData.datasets[1].borderColor = "#089875";
        } else if (screenMode == "dark-green") {
          graphData.datasets[0].borderColor = "#26AB8B";
          graphData.datasets[1].borderColor = "#23669E";
        } else {
          graphData.datasets[0].borderColor = "#0E6651";
          graphData.datasets[1].borderColor = "#1660A4";
        }
        window.comparativeGraphChart.update();
      });

      var assestShowHide = document.querySelector(".showAssetsCheckBox");
      if (assestShowHide) {
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
            let topTable = document.getElementById("comparativeTableTabView");
            topTable.scrollIntoView();
          });
      }
    },
    testFunction: function() {
      console.log(this.comparative);
    },
    // to get the longevity year
    getYear: function(array, age) {
      let year = array.filter(i => i);
      year = year.length;
      return age[year];
    },
    // map API data for the CV cards
    mapData: function() {
      if (this.comparative.cv_1) {
        let chart = this.comparativeLirp;
        let chart1 = this.comparative.cv_1;
        let chart2 = this.comparative.cv_2;
        let chart3 = this.comparative.cv_3;

        if (chart) {
          this.data[0].ror = chart.rate_of_return;
          this.data[0].longevity_year = chart.chart_output.year.length;
          this.data[0].irr = chart.irr_percent;
          this.data[0].cumulative_income = chart.cummulative_income;
        }

        if (Object.values(chart1).length) {
          this.data[1].ror = chart1.comparison.ror;
          this.data[1].irr = this.comparative_main.cv_1.comparison.irr_percent;
          this.data[1].longevity_year = this.getYear(
            this.comparative_main.cv_1.comparison.chart_output.net_balance,
            chart1.comparison.chart_output.year
          );

          this.data[1].cumulative_income = chart1.comparison.cummulative_income;
        }

        if (Object.values(chart2).length) {
          this.data[2].ror = chart2.comparison.ror;
          this.data[2].irr = this.comparative_main.cv_2.comparison.irr_percent;
          this.data[2].longevity_year = this.getYear(
            this.comparative_main.cv_2.comparison.chart_output.net_balance,
            chart2.comparison.chart_output.year
          );
          this.data[2].cumulative_income = chart2.comparison.cummulative_income;
        }

        if (Object.values(chart3).length) {
          this.data[3].ror = chart3.comparison.ror;
          this.data[3].irr = this.comparative_main.cv_3.comparison.irr_percent;
          this.data[3].longevity_year = this.getYear(
            this.comparative_main.cv_3.comparison.chart_output.net_balance,
            chart2.comparison.chart_output.year
          );
          this.data[3].cumulative_income = chart3.comparison.cummulative_income;
        }
      }
    },
    // set deleted cv id in hidden input
    setActionId: function(id) {
      document.getElementById("comparative_cv_delete_id").value = id;
    },
  },
  computed: {
    cards() {
      return this.$store.state.data.reportTabs.active_cards
        .cmp_comparative_graph.cards;
    },
    graphs() {
      return this.$store.state.data.reportTabs.active_cards
        .cmp_comparative_graph.graphs;
    },
    deletedItems() {
      return this.$store.state.data.report.deleted_cv_ids;
    },
    cv_name() {
      return this.$store.state.data.report.cv_names;
    },
    comparative_main() {
      return this.$store.state.data.report.comparative;
    },
    comparative() {
      return this.$store.state.data.report.comparative_longevity;
    },
    comparative_ror_longevity() {
      return this.$store.state.data.report.comparative_ror_longevity;
    },
    comparativeLirp() {
      return this.$store.state.data.report.comparative.lirp_data;
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
    "comparative.cv_1.length"() {
      console.log("graph set");
      this.setGraph();
    },
    "deletedItems.length"(val) {
      this.setGraph();
    },
  },
};
</script>
<style lang="">
</style>