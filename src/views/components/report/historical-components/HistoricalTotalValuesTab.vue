<template lang="">
  <div  :class="`empty report-card-wrapper ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="3">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="4">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`">
        <div :class="`ComparativeTableMainDiv rightDivTop10 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox10" type="checkbox" :checked="activeTabs[keyId]"
                    class="checkbox2 rightCheckBox10" rightCheckAttr="10"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox10" class="rghtTopHeadcommon">Total Value<span
                  class="ms-3 equalThingTabTxt">(Graph)</span></label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv10" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
              <div class="container-fluid" id="totalValueFluid">
                <div class="d-flex justify-content-between flex-gap-12">
                  <div v-for="(item, index) in data" :key="index" :class="`flex-1 ${deletedItems.includes(index) ? 'd-none':''}`">
                    <div :class="`distributionCard1 equalDistCard${1+index} position-relative ${cards[index].active ? '': 'inactive'}`">
                      <div class="d-flex justify-content-between align-items-center">
                        <p class="allCardHeadPara">Total Value</p>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div :class="`radioBtnDiv r2 switch${index} ${index > 3 ? 'switch4 extra':''}`" id="button-2">
                              <input type="checkbox" class="checkbox2 commonRadioBtn2" :checked="cards[index].active" v-model="cards[index].active" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                        </div>
                      </div>                      
                      <p :class="`cardRadioSwtchpara${1+index} d-flex align-items-center`">{{item.type}} <label :class="`p-relative ${index == 0 ? 'd-none' : 'd-block'}`"><img src="/src/assets/images/icons/info-icon.svg" alt="info" class="ms-1 info-icon-img"><img src="/src/assets/images/icons/dark-i-icon.svg" alt="info" class="ms-1 dark-info-icon-img"><span :class="`info-message-rollingTime`"> <span>Rolling Time Period: {{item.period}} Years</span><br> <span>Starting Date: {{item.starting_date}}</span> </span></label></p>
                      <div class="mt-2 d-flex ">
                        <div :class="`CardProgressBar lessWidth lightProgress${1+index} boxProgressCommon${14+index} totalValueProgress${1+index} ${cards[index].active ? '':'boxProgress'}`">
                          <div class="CardProgress"></div>
                          <p class="lineUnderBars"></p>
                        </div>
                        <p :class="`ms-2 CardProgressnym cardRadioSwtchpara${1+index}`">{{$numFormatWithDollar(item.total_value)}}</p>
                      </div>
                      <add-note-input-component :historical="true"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <div class="graph-container-div graph-area" id="totalValueGraphArea">
                  <div class="total-value-graph-container w-100 pt-md-3">
                    <canvas id="totalValueChart" width="500" height="200"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <historical-disclosure-component :hideFee="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HistoricalDisclosureComponent from "./HistoricalDisclosureComponent.vue";
import AddNoteInputComponent from "../comman/AddNoteInputComponent.vue";

export default {
  props: ["keyId"],
  components: { HistoricalDisclosureComponent, AddNoteInputComponent },
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      cards: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
        { id: 4, active: true },
        { id: 5, active: true },
      ],
      data: [{}, {}, {}, {}, {}],
    };
  },
  mounted() {
    let card1 = this.historical.lirp_data;
    let card2 = this.historical.most_recent;
    let card3 = this.historical.min;
    let card4 = this.historical.median;
    let card5 = this.historical.max;

    if (card1) {
      this.data[0].type = "LIRP";
      this.data[0].total_value = card1.cummulative_income_total_value;
    }

    if (card2) {
      this.data[1].type = "Most Recent";
      this.data[1].total_value = card2.result.cummulative_income_total_value;
      this.data[1].starting_date = this.$customDateFormat(card2.result.starting_date, 'M/D/y');
      this.data[1].period = this.historical.discloser.period;
    }

    if (card3) {
      this.data[2].type = "Worst";
      this.data[2].total_value = card3.result.cummulative_income_total_value;
      this.data[2].starting_date = this.$customDateFormat(card3.result.starting_date, 'M/D/y');
      this.data[2].period = this.historical.discloser.period;
    }

    if (card4) {
      this.data[3].type = "Median";
      this.data[3].total_value = card4.result.cummulative_income_total_value;
      this.data[3].starting_date = this.$customDateFormat(card4.result.starting_date, 'M/D/y');
      this.data[3].period = this.historical.discloser.period;
    }

    if (card5) {
      this.data[4].type = "Best";
      this.data[4].total_value = card5.result.cummulative_income_total_value;
      this.data[4].starting_date = this.$customDateFormat(card5.result.starting_date, 'M/D/y');
      this.data[4].period = this.historical.discloser.period;
    }

    this.setGraph();
  },
  methods: {
    setActionId: function(id) {
      document.getElementById("historical_cv_delete_id").value = id;
    },
    getDataSet: function() {
      let card1 = this.historical.lirp_data;
      let card2 = this.historical.most_recent.result;
      let card3 = this.historical.min.result;
      let card4 = this.historical.median.result;
      let card5 = this.historical.max.result;

      let value1 = [];
      let value2 = [];
      let value3 = [];
      let value4 = [];
      let value5 = [];
      let years = [];

      if (card1) {
        value1 = card1.chart_output.total_values.map((i, idx) => { return {x: idx+1, y: i.toFixed(0)}}) || [];
        years = card1.chart_output.year;
      }

      if (!this.deletedItems.includes(1) && card2) {
        value2 = card2.chart_output.total_value.map((i, idx) => { return {x: idx+1, y: i.toFixed(0)}}) || [];;
      }

      if (!this.deletedItems.includes(2) && card3) {
        value3 = card3.chart_output.total_value.map((i, idx) => { return {x: idx+1, y: i.toFixed(0)}}) || [];;
      }

      if (!this.deletedItems.includes(3) && card4) {
        value4 = card4.chart_output.total_value.map((i, idx) => { return {x: idx+1, y: i.toFixed(0)}}) || [];;
      }

      if (!this.deletedItems.includes(4) && card5) {
        value5 = card5.chart_output.total_value.map((i, idx) => { return {x: idx+1, y: i.toFixed(0)}}) || [];;
      }

      var dataset = {
        labels: [1, ...years.map(i => (years.includes(i / 5) ? i : ""))],
        datasets: [
          {
            borderColor:
              this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue" ? "#1660A4"
                : this.$appTheme() == "dark-green" ? "#26AB8B" : "#0E6651",
            pointBackgroundColor:
              this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue" ? "#1660A4" : 
              this.$appTheme() == "dark-green" ? "#26AB8B" : "#0E6651",
            borderWidth: 4,
            borderDash: [10, 10],
            radius: 0,
            data: value1,
          },
          {
            borderColor:
              this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue" ? "#089875"
                : "#1660A4",
            pointBackgroundColor:
              this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue" ? "#089875"
                : "#1660A4",
            borderWidth: 4,
            radius: 0,
            data: value2,
          },
          {
            borderColor: "#763CA3",
            borderWidth: 4,
            radius: 0,
            data: value3,
          },
          {
            borderColor: "#9D2B2B",
            borderWidth: 4,
            radius: 0,
            data: value4,
          },
          {
            borderColor: "#FF4C00",
            borderWidth: 4,
            radius: 0,
            data: value5,
          },
        ],
      };
      return dataset;
    },
    setGraph: function() {
      if (window.totalValueGraphChart) {
        window.totalValueGraphChart.destroy();
      }

      const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        return legendContainer;
      };
      // Total Value Graph starts
      const htmlLegendPlugin3 = {
        id: "htmlLegend",
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
              let distributionCard = e.target.closest(".distributionCard1");
              distributionCard.classList.toggle("inactive");
              const { type } = chart.config;
              document
                .querySelector(".totalValueProgress" + (index + 1))
                .classList.toggle("boxProgress");
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
          Math.max(...graphData.datasets[0].data.map(i => i.y)),
          Math.max(...graphData.datasets[1].data.map(i => i.y)),
          Math.max(...graphData.datasets[2].data.map(i => i.y)),
          Math.max(...graphData.datasets[3].data.map(i => i.y)),
          Math.max(...graphData.datasets[4].data.map(i => i.y)),
        ]
      );

      const totalValueChart = document.getElementById("totalValueChart");
      const totalValueGraphArea = document.querySelector("#totalValueGraphArea");

      const totalDuration = 4500;
      const delayBetweenPoints = totalDuration / graphData.datasets[0].data.length;
      const previousY = (totalValueChart) => totalValueChart.index === 0 ? totalValueChart.chart.scales.y.getPixelForValue(graphData.datasets[0].data.length) : totalValueChart.chart.getDatasetMeta(totalValueChart.datasetIndex).data[totalValueChart.index - 1].getProps(['y'], true).y;

      let animationTimeout = false;

      // Function to handle the intersection changes
      function handleIntersection(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            // If the graph is visible, animate it
            animateChart(window.totalValueGraphChart);
            observer.unobserve(entry.target);
            window.totalValueGraphChart.config.options.animation = {};  
            animationTimeout = true;    
          } else {
            // If the graph is not visible, stop the animation
            window.totalValueGraphChart.stop();
          }
        });
      }

      // Create a new Intersection Observer instance
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.25 
      });

      // Start observing the chart container
      observer.observe(totalValueGraphArea);

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
        bordercolors = ["#1660A4", "#089875", '#763CA3', "#9D2B2B", "#FF4C00", "#eee"];
      } else if (screenMode == "dark-blue"){
        bordercolors = ["#1660A4", "#089875", '#763CA3', "#9D2B2B", "#FF4C00", "#333"];
      } else if (screenMode == "dark-green") {
        bordercolors = ["#26AB8B", "#23669E", '#763CA3', "#9D2B2B", "#FF4C00", "#333"];
      } else {
        bordercolors = ["#0E6651", "#1660A4", '#763CA3', "#9D2B2B", "#FF4C00", "#eee"];
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
              if(dataMetaSet.data.some(dataPoint => dataPoint.active)){
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
              return active ? borderColor : bordercolors[5];
            }
            chart.getDatasetMeta(0).data[0] ? data.datasets[0].borderColor = setBorderColor(chart.getDatasetMeta(0).data[0].active, 0, bordercolors[0]) : bordercolors[5];
            chart.getDatasetMeta(1).data[0] ? data.datasets[1].borderColor = setBorderColor(chart.getDatasetMeta(1).data[0].active, 1, bordercolors[1]) : bordercolors[5];
            chart.getDatasetMeta(2).data[0] ? data.datasets[2].borderColor = setBorderColor(chart.getDatasetMeta(2).data[0].active, 2, bordercolors[2]) : bordercolors[5];
            chart.getDatasetMeta(3).data[0] ? data.datasets[3].borderColor = setBorderColor(chart.getDatasetMeta(3).data[0].active, 3, bordercolors[3]) : bordercolors[5];
            chart.getDatasetMeta(4).data[0] ? data.datasets[4].borderColor = setBorderColor(chart.getDatasetMeta(4).data[0].active, 4, bordercolors[4]) : bordercolors[5];
          }
          args.changed = true;
        }
      }

      const totalValueConfig = {
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
            legend: false,
            htmlLegend: {
              containerID: "totalValueFluid",
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
              max: Number(maxAxis).toFixed(0),
              ticks: {
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
        plugins: [htmlLegendPlugin3, highlightLine],
      };

      window.totalValueGraphChart = new Chart(
        document.getElementById("totalValueChart"),
        totalValueConfig
      );

      function resetColors(chart){
        chart.config.data.datasets[0].borderColor = bordercolors[0];
        chart.config.data.datasets[1].borderColor = bordercolors[1];
        chart.config.data.datasets[2].borderColor = bordercolors[2];
        chart.config.data.datasets[3].borderColor = bordercolors[3];
        chart.config.data.datasets[4].borderColor = bordercolors[4];
        chart.update();
      }


      totalValueGraphArea.addEventListener("mouseleave", (e) => {
         if(animationTimeout){
            setTimeout(() => {
              animationTimeout = false;
            }, totalDuration);
          }else{
          resetColors(window.totalValueGraphChart);
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
          bordercolors = ["#1660A4", "#089875", '#763CA3', "#9D2B2B", "#FF4C00", "#eee"];
          resetColors(window.totalValueGraphChart)
        } else if (screenMode == "dark-blue") {
          graphData.datasets[0].borderColor = "#1660A4";
          graphData.datasets[0].pointBackgroundColor = "#1660A4";
          graphData.datasets[1].borderColor = "#089875";
          graphData.datasets[1].pointBackgroundColor = "#089875";
          bordercolors = ["#1660A4", "#089875", '#763CA3', "#9D2B2B", "#FF4C00", "#333"];
          resetColors(window.totalValueGraphChart)
        } else if (screenMode == "dark-green") {
          graphData.datasets[0].borderColor = "#26AB8B";
          graphData.datasets[0].pointBackgroundColor = "#26AB8B";
          graphData.datasets[1].borderColor = "#23669E";
          graphData.datasets[1].pointBackgroundColor = "#23669E";
          bordercolors = ["#26AB8B", "#23669E", '#763CA3', "#9D2B2B", "#FF4C00", "#333"];
          resetColors(window.totalValueGraphChart)
        } else {
          graphData.datasets[0].borderColor = "#0E6651";
          graphData.datasets[0].pointBackgroundColor = "#0E6651";
          graphData.datasets[1].borderColor = "#1660A4";
          graphData.datasets[1].pointBackgroundColor = "#1660A4";
          bordercolors = ["#0E6651", "#1660A4", '#763CA3', "#9D2B2B", "#FF4C00", "#eee"];
          resetColors(window.totalValueGraphChart)
        }
        window.totalValueGraphChart.update();
      });

      var assestShowHide2 = document.querySelector(".showAssetsCheckBox");

      assestShowHide2.addEventListener("click", e => {
        e.target.classList.toggle("on");
      });

      document
        .querySelector(".presentationModeBtn")
        .addEventListener("click", function() {
          if (assestShowHide2.classList.contains("on")) {
            htmlLegendPlugin3.hideAll(
              window.totalValueGraphChart,
              totalValueConfig.options
            );
          }
        });

      // document
      //   .querySelector(".fullScreenCloseBtn")
      //   .addEventListener("click", function() {
      //     htmlLegendPlugin3.showAll(totalValueChart, totalValueConfig.options);
      //   });
    },
  },
  computed: {
    historical() {
      return this.$store.state.data.report.historical;
    },
    deletedItems() {
      return this.$store.state.data.report.deleted_historical_cv_ids;
    },
  },
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (
        this.$store.state.app.presentation_mode &&
        this.$store.state.app.show_assets2
      ) {
        this.cards.forEach(element => {
          element.active = false;
        });
      }
    },
    "deletedItems.length"(val) {
      // this.setGraph();
    },
  },
};
</script>
<style lang="">
</style>