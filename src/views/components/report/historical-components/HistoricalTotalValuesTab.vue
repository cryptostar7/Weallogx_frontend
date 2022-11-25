<template lang="">
  <div class="empty" data-class="empty-wrapper" data-empty="3">
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
                  <div class="flex-1" v-for="(item, index) in data" :key="index">
                    <div :class="`distributionCard1 equalDistCard${1+index} position-relative ${cards[index].active ? '': 'inactive'}`">
                      <div class="d-flex justify-content-between">
                        <div class="distrbnCard1paras">
                          <p>Total Value</p>
                          <p :class="`cardRadioSwtchpara${1+index}`">{{item.type}}</p>
                        </div>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div :class="`radioBtnDiv r2 switch${index} ${index > 3 ? 'switch3 extra':''}`" id="button-2">
                              <input type="checkbox" class="checkbox2 commonRadioBtn2" :checked="cards[index].active" v-model="cards[index].active" />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <a :class="`ms-2 deleteButtonAncor deleteBtn${1+index}`" data-bs-target="#deleteAccountModal"
                            data-bs-toggle="modal">
                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                stroke="#9D9D9D" />
                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5"
                                transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="mt-2 d-flex ">
                        <div :class="`CardProgressBar lessWidth lightProgress${1+index} boxProgressCommon${14+index} totalValueProgress${1+index} ${cards[index].active ? '':'boxProgress'}`">
                          <div class="CardProgress"></div>
                          <p class="lineUnderBars"></p>
                        </div>
                        <p :class="`ms-2 CardProgressnym cardRadioSwtchpara${1+index}`">{{$numFormatWithDollar(item.total_value)}}
                        </p>
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
            <historical-disclosure-component />
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
      data: [
        {
          type: "LIRP",
          total_value: 6510354,
        },
        {
          type: "Most Recent",
          total_value: 4110354,
        },
        {
          type: "Worst",
          total_value: 2510354,
        },
        {
          type: "Mediam",
          total_value: 3310354,
        },
        {
          type: "Best",
          total_value: 3310354,
        },
      ],
    };
  },
  mounted() {
    const getOrCreateLegendList = (chart, id) => {
      const legendContainer = document.getElementById(id);
      return legendContainer;
    };
    // Total Value Graph starts
    const htmlLegendPlugin3 = {
      id: "htmlLegend",
      afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
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
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
        items.forEach((item, index) => {
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
        });
      },
    };

    const totalValueLabels = [1, 5, 10, 15, 20, 25, 30, 35];

    const totalValueData = {
      labels: totalValueLabels,
      datasets: [
        {
          borderColor:
            this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
              ? "#1660A4"
              : "#0E6651",
          borderWidth: 4,
          borderDash: [10, 10],
          radius: 0,
          data: [15000, 20000, 30000, 40000, 25000, 1000, 35000, 38000, 42000],
        },
        {
          borderColor:
            this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
              ? "#0E6651"
              : "#1660A4",
          borderWidth: 4,
          radius: 0,
          data: [17000, 22000, 32000, 35000, 43000, 28000, 31000, 29000, 32000],
        },
        {
          borderColor: "#763CA3",
          borderWidth: 4,
          radius: 0,
          data: [19000, 26000, 60000, 55000, 9000, 13000, 45000, 33000, 34000],
        },
        {
          borderColor: "#FF4C00",
          borderWidth: 4,
          radius: 0,
          data: [25000, 28000, 50000, 45000, 15000, 29000, 33000, 40000, 60000],
        },
        {
          borderColor: "#9D2B2B",
          radius: 0,
          data: [29000, 31000, 35000, 40000, 30000, 50000, 55000, 45000, 20000],
        },
      ],
    };

    const totalValueConfig = {
      type: "line",
      data: totalValueData,
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
            max: 75000,
            ticks: {
              padding: 8,
              stepSize: 15000,
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

    const totalValueChart = new Chart(
      document.getElementById("totalValueChart"),
      totalValueConfig
    );

    var redioInp = document.querySelector(".dropdown-menu");
    redioInp.addEventListener("click", function(e) {
      let screenMode = localStorage.getItem("mode");
      if (screenMode == "light-blue" || screenMode == "dark-blue") {
        totalValueData.datasets[0].borderColor = "#1660A4";
        totalValueData.datasets[1].borderColor = "#0E6651";
        totalValueChart.update();
      } else {
        totalValueData.datasets[0].borderColor = "#0E6651";
        totalValueData.datasets[1].borderColor = "#1660A4";
        totalValueChart.update();
      }
    });
  },
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (this.$store.state.app.presentation_mode && this.$store.state.app.show_assets2) {
        this.cards.forEach(element => {
          element.active = false;
        });
      }
    },
  },
};
</script>
<style lang="">
</style>