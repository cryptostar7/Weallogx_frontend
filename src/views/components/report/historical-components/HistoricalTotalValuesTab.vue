<template lang="">
  <div  :class="`empty ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="3">
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
                <div class="graph-container-div">
                  <canvas id="totalValueChart" width="500" height="130"></canvas>
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
        value1 = card1.chart_output.total_values;
        years = card1.chart_output.Age;
      }

      if (!this.deletedItems.includes(1) && card2) {
        value2 = card2.chart_output.total_value;
      }

      if (!this.deletedItems.includes(2) && card3) {
        value3 = card3.chart_output.total_value;
      }

      if (!this.deletedItems.includes(3) && card4) {
        value4 = card4.chart_output.total_value;
      }

      if (!this.deletedItems.includes(4) && card5) {
        value5 = card5.chart_output.total_value;
      }

      var dataset = {
        labels: [1, ...years.map(i => (years.includes(i / 5) ? i : ""))],
        datasets: [
          {
            borderColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#1660A4"
                : "#0E6651",
            borderWidth: 4,
            borderDash: [10, 10],
            radius: 0,
            data: value1,
          },
          {
            borderColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#0E6651"
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
          Math.max(...graphData.datasets[0].data),
          Math.max(...graphData.datasets[1].data),
          Math.max(...graphData.datasets[2].data),
          Math.max(...graphData.datasets[3].data),
          Math.max(...graphData.datasets[4].data),
        ]
      );

      const totalValueConfig = {
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
        plugins: [htmlLegendPlugin3],
      };

      window.totalValueGraphChart = new Chart(
        document.getElementById("totalValueChart"),
        totalValueConfig
      );

      var redioInp = document.querySelector(".dropdown-menu");
      redioInp.addEventListener("click", function(e) {
        let screenMode = localStorage.getItem("mode");
        if (screenMode == "light-blue" || screenMode == "dark-blue") {
          graphData.datasets[0].borderColor = "#1660A4";
          graphData.datasets[1].borderColor = "#0E6651";
          window.totalValueGraphChart.update();
        } else {
          graphData.datasets[0].borderColor = "#0E6651";
          graphData.datasets[1].borderColor = "#1660A4";
          window.totalValueGraphChart.update();
        }
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