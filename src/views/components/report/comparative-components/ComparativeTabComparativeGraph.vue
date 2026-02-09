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
                          <a :class="`ms-2 deleteButtonAncor ${index ? '':'d-none'} deleteBtn${1+index} ${$store.state.app.presentation_mode ? 'pointer-none' : ''}`" @click="setActionId(index)" data-bs-target="#DeleteComparativeCvModal" data-bs-toggle="modal">
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
                <div class="graph-container-div graph-area" id="comparativeGraphArea">
                  <div class="comparative-graph-container w-100 pt-md-3">
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

        cv = chart ? chart["comperative_account_value"].map((i, idx) => { return {x: idx, y: i.toFixed(0)}}) : [];
        cv1 = chart1 ? chart1["net_balance"].map((i, idx) => { return {x: idx, y: i.toFixed(0)}}) : [];
        cv2 = chart2 ? chart2["net_balance"].map((i, idx) => { return {x: idx, y: i.toFixed(0)}}) : [];
        cv3 = chart3 ? chart3["net_balance"].map((i, idx) => { return {x: idx, y: i.toFixed(0)}}) : [];

        years = chart1 ? chart1.year : [];
        contribution =
          chart && this.graphs.annual_contribution ? chart["Deposits"] : [];
        distribution =
          chart && this.graphs.annual_distribution
            ? chart["distributions"]
            : [];
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
              this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue" ? "#1660A4"
                : this.$appTheme() == "dark-green" ? "#26AB8B" : "#0E6651",
            pointBackgroundColor:
              this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue" ? "#1660A4"
                : this.$appTheme() == "dark-green" ? "#26AB8B" : "#0E6651",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            // data: !this.cards[0].active ? [] : cv.map(i => i.toFixed(0)),
            data: !this.cards[0].active ? [] : cv.map(i => i.y),
            TooltipLabelStyle: {
              backgroundColor: "white",
              borderColor: "white",
            },
          },
          {
            borderColor:
              this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue" ? "#089875"
                : "#1660A4",
            pointBackgroundColor:
              this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue" ? "#089875"
                : "#1660A4",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data:
              this.deletedItems.includes(1) || !this.cards[1].active
                ? []
                // : cv1.map(i => i.toFixed(0)) || [],
                : cv1.map(i => i.y) || [],
          },
          {
            borderColor: "#763CA3",
            pointBackgroundColor: "#763CA3",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data:
              this.deletedItems.includes(2) || !this.cards[2].active
                ? []
                // : cv2.map(i => i.toFixed(0)) || [],
                : cv2.map(i => i.y) || [],
          },
          {
            borderColor: "#9D2B2B",
            pointBackgroundColor: "#9D2B2B",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data:
              this.deletedItems.includes(3) || !this.cards[3].active
                ? []
                // : cv3.map(i => i.toFixed(0)) || [],
                : cv3.map(i => i.y) || [],
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
            hoverBorderWidth: 2,
            hoverBorderColor: "rgba(14, 103, 82, .85)",
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
            hoverBorderWidth: 2,
            hoverBorderColor: "rgba(131, 159, 175, 1)",
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

      const comparativeGraphArea = document.querySelector("#comparativeGraphArea");

      const totalDuration = 2500;
      const delayBetweenPoints = totalDuration / graphData.datasets[0].data.length;
      const previousY = ctx => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(graphData.datasets[0].data.length) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

      let animationTimeout = false;

      // Function to handle the intersection changes
      function handleIntersection(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            // If the graph is visible, animate it
            animateChart(window.comparativeGraphChart);
            observer.unobserve(entry.target);
            window.comparativeGraphChart.config.options.animation = {};
            animationTimeout = true;
          } else {
            // If the graph is not visible, stop the animation
            window.comparativeGraphChart.stop();
          }
        });
      }

      // Create a new Intersection Observer instance
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.25 
      });

      // Start observing the chart container
      observer.observe(comparativeGraphArea);

      function animateChart(chart) {
        chart.options.animation = {
           x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx) {
              if (ctx.type !== 'data' || ctx.xStarted) {
                return 0;
              }
              ctx.xStarted = true;
              return ctx.index * delayBetweenPoints;
            }
          },
          y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: 0,
            delay(ctx) {
              if (ctx.type !== 'data' || ctx.yStarted) {
                return 0;
              }
              ctx.yStarted = true;
              return ctx.index * delayBetweenPoints;
            }
          }
        };
        chart.update();
      }

      let bordercolors;

      let screenMode = localStorage.getItem("mode");
      if (screenMode == "light-blue") {
        bordercolors = ["#1660A4", "#089875", '#763CA3', "#9D2B2B", "#eee"];
      } else if (screenMode == "dark-blue"){
        bordercolors = ["#1660A4", "#089875", '#763CA3', "#9D2B2B", "#333"];
      } else if (screenMode == "dark-green") {
        bordercolors = ["#26AB8B", "#23669E", '#763CA3', "#9D2B2B", "#333"];
      } else {
        bordercolors = ["#0E6651", "#1660A4", '#763CA3', "#9D2B2B", "#eee"];
      }

      const highlightLine = {
        id: "highlightLine",
        beforeDatasetsDraw(chart, args, plugins){
          let { data } = chart;
          const datasetMetaArray = chart.getSortedVisibleDatasetMetas();
          if(animationTimeout){
            setTimeout(() => {
              animationTimeout = false;
            }, totalDuration);
          }else{
            for(let i = 0; i < datasetMetaArray.length; i++){
              const dataMetaSet = datasetMetaArray[i];
              const index = dataMetaSet.index;
              if(index <= 3 && dataMetaSet.data.some(dataPoint => dataPoint.active)){
                data.datasets[index].borderColor = bordercolors[index];
                chart.update();
                break;            
              }
            }
          } 
        },
        afterEvent(chart, args){
          let { data } = chart;
          if(args.inChartArea){
            function setBorderColor(active, index, borderColor){
              return active ? borderColor : bordercolors[4];
            }
            chart.getDatasetMeta(0).data[0] ? data.datasets[0].borderColor = setBorderColor(chart.getDatasetMeta(0).data[0].active, 0, bordercolors[0]) : bordercolors[4];
            chart.getDatasetMeta(1).data[0] ? data.datasets[1].borderColor = setBorderColor(chart.getDatasetMeta(1).data[0].active, 1, bordercolors[1]) : bordercolors[4];
            chart.getDatasetMeta(2).data[0] ? data.datasets[2].borderColor = setBorderColor(chart.getDatasetMeta(2).data[0].active, 2, bordercolors[2]) : bordercolors[4];
            chart.getDatasetMeta(3).data[0] ? data.datasets[3].borderColor = setBorderColor(chart.getDatasetMeta(3).data[0].active, 3, bordercolors[3]) : bordercolors[4];
          }
          args.changed = true;
        }
      }

      const comparativeValuesConfig = {
        type: "line",
        data: graphData,
        options: {
          maintainAspectRatio: false,
          interaction: {
            intersect: false,
            mode: "nearest",
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
              suggestedMax: this.$roundFigureNum(Number(maxAcc1)).toFixed(0),
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
              suggestedMax: this.$roundFigureNum(Number(maxAcc2 * 2)).toFixed(0),
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
        plugins: [htmlLegendPlugin0, highlightLine],
      };

      window.comparativeGraphChart = new Chart(
        document.getElementById("comparativeValuesChart"),
        comparativeValuesConfig
      );

      function resetColors(chart){
        comparativeValuesConfig.data.datasets[0].borderColor = bordercolors[0];
        comparativeValuesConfig.data.datasets[1].borderColor = bordercolors[1];
        comparativeValuesConfig.data.datasets[2].borderColor = bordercolors[2];
        comparativeValuesConfig.data.datasets[3].borderColor = bordercolors[3];
        chart.update();
      }

      const graphContainer = document.querySelector(".comparative-graph-container");

      graphContainer.addEventListener("mouseout", (e) => {
       if(animationTimeout){
          setTimeout(() => {
            animationTimeout = false;
          }, totalDuration);
        }else{
          resetColors(window.comparativeGraphChart);
        }   
      });

      var redioInp = document.querySelector(".dropdown-menu");
      redioInp.addEventListener("click", function(e) {
        let screenMode = localStorage.getItem("mode");
        if (screenMode == "light-blue") {
          graphData.datasets[0].borderColor = "#1660A4";
          graphData.datasets[0].pointBackgroundColor = "#1660A4";
          graphData.datasets[1].borderColor = "#089875";
          graphData.datasets[1].pointBackgroundColor = "#089875";
          bordercolors = ["#1660A4", "#089875", '#763CA3', "#9D2B2B", "#eee"];
          resetColors(window.comparativeGraphChart)
        } else if (screenMode == "dark-blue") {
          graphData.datasets[0].borderColor = "#1660A4";
          graphData.datasets[0].pointBackgroundColor = "#1660A4";
          graphData.datasets[1].borderColor = "#089875";
          graphData.datasets[1].pointBackgroundColor = "#089875";
          bordercolors = ["#1660A4", "#089875", '#763CA3', "#9D2B2B", "#333"];
        } else if (screenMode == "dark-green") {
          graphData.datasets[0].borderColor = "#26AB8B";
          graphData.datasets[0].pointBackgroundColor = "#26AB8B";
          graphData.datasets[1].borderColor = "#23669E";
          graphData.datasets[1].pointBackgroundColor = "#23669E";
          bordercolors = ["#26AB8B", "#23669E", '#763CA3', "#9D2B2B", "#333"];
          resetColors(window.comparativeGraphChart)
        } else {
          graphData.datasets[0].borderColor = "#0E6651";
          graphData.datasets[0].pointBackgroundColor = "#0E6651";
          graphData.datasets[1].borderColor = "#1660A4";
          graphData.datasets[1].pointBackgroundColor = "#1660A4";
          bordercolors = ["#0E6651", "#1660A4", '#763CA3', "#9D2B2B", "#eee"];
          resetColors(window.comparativeGraphChart)
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
    // to get the longevity year
    getYear: function(array, age) {
      let year = array.filter(i => i);
      year = year.length;
      return age[year] || age[year-1];
    },
    // map API data for the CV cards
    mapData: function() {
      if (this.comparative.cv_1) {
        let chart = this.comparativeLirp;
        let chart1 = this.comparative.cv_1;
        let chart2 = this.comparative.cv_2;
        let chart3 = this.comparative.cv_3;

        let cv_1_cummlative = this.comparative_main.cv_1;
        let cv_2_cummlative = this.comparative_main.cv_2;
        let cv_3_cummlative = this.comparative_main.cv_3;

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

          this.data[1].cumulative_income = cv_1_cummlative.comparison.cummulative_income;
        }

        if (Object.values(chart2).length) {
          this.data[2].ror = chart2.comparison.ror;
          this.data[2].irr = this.comparative_main.cv_2.comparison.irr_percent;
          this.data[2].longevity_year = this.getYear(
            this.comparative_main.cv_2.comparison.chart_output.net_balance,
            chart2.comparison.chart_output.year
          );
          this.data[2].cumulative_income = cv_2_cummlative.comparison.cummulative_income;
        }

        if (Object.values(chart3).length) {
          this.data[3].ror = chart3.comparison.ror;
          this.data[3].irr = this.comparative_main.cv_3.comparison.irr_percent;
          this.data[3].longevity_year = this.getYear(
            this.comparative_main.cv_3.comparison.chart_output.net_balance,
            chart2.comparison.chart_output.year
          );
          this.data[3].cumulative_income = cv_3_cummlative.comparison.cummulative_income;
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
    toggleActions() {
      return JSON.stringify(this.cards) + JSON.stringify(this.graphs);
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