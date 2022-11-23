<template lang="">
  <div class="tab-pane fade" id="v-pills-comulativeFees" role="tabpanel"
    aria-labelledby="v-pills-comulativeFees-tab">
    <div class="container-fluid" id="cumulativeFeesFluid">
        <div class="d-flex justify-content-between flex-gap-12">
            <div class="mt-3 flex-1" v-for="(item, index) in data" :key="index">
                <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100  ${cards[index].active ? '':'inactive'}`">
                    <div class="d-flex justify-content-between pb-1">
                    <div class="distrbnCard1paras">
                        <p>Cumulative Fees</p>
                        <p :class="`cardRadioSwtchpara${1+index}`">{{item.type}}</p>
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
                    <div class="mt-1 d-flex justify-content-between">
                    <p class="legacyCardPara">Total Value Fee Ratio</p>
                    <p class="legacyCardPara2 text-right">{{item.total_value_in_percent}}</p>
                    </div>
                    <div class="mt-1 d-flex justify-content-between">
                    <p class="legacyCardPara">Cumulative Income Fee Ratio</p>
                    <p class="legacyCardPara2 text-right">{{item.cumulative_income_in_percent}}</p>
                    </div>
                    <div class="mt-1 d-flex justify-content-between">
                    <p class="legacyCardPara">Death Benefit Fee Ratio</p>
                    <p class="legacyCardPara2 text-right">{{item.death_benifit_in_percent}}</p>
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
          type: "LifePro+",
          total_value_in_percent: "65%",
          cumulative_income_in_percent: "45%",
          death_benifit_in_percent: "45%",
        },
        {
          type: "Brokerage Account",
          total_value_in_percent: "61%",
          cumulative_income_in_percent: "33%",
          death_benifit_in_percent: "21%",
        },
        {
          type: "401/IRA",
          total_value_in_percent: "35%",
          cumulative_income_in_percent: "55%",
          death_benifit_in_percent: "98%",
        },
        {
          type: "Annuity",
          total_value_in_percent: "75%",
          cumulative_income_in_percent: "25%",
          death_benifit_in_percent: "65%",
        },
      ],
    };
  },
  mounted() {
    const getOrCreateLegendList = (chart, id) => {
      const legendContainer = document.getElementById(id);
      return legendContainer;
    };
    // Fee Analysis - Cumulative Fees Graph Starts
    const htmlLegendPlugin2 = {
      id: "cumulativeFeesLegend",
      afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
        let checkboxes = document
          .getElementById(options.containerID)
          .querySelectorAll("input[type=checkbox]");

        items.forEach((item, index) => {
          checkboxes[index].onclick = e => {
            // let distributionCard = e.target.closest(".distributionCard1");
            // distributionCard.classList.toggle("inactive");
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

    const cumulativeFeesLabels = [1, 5, 10, 15, 20, 25, 30, 35];

    const cumulativeFeesData = {
      labels: cumulativeFeesLabels,
      datasets: [
        {
          fill: true,
          backgroundColor:
            this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
              ? "rgba(22, 96, 164, .3)"
              : "rgba(14, 102, 81, .5)",
          borderColor:
            this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
              ? "#1660A4"
              : "#0E6651",
          borderWidth: 4,
          radius: 0,
          data: [15000, 20000, 30000, 40000, 25000, 1000, 35000, 40000],
        },
        {
          fill: true,
          backgroundColor:
            this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
              ? "rgba(14, 102, 81, .5)"
              : "rgba(22, 96, 164, .3)",
          borderColor:
            this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
              ? "#0E6651"
              : "#1660A4",
          borderWidth: 4,
          radius: 0,
          data: [17000, 22000, 32000, 35000, 43000, 28000],
        },
        {
          fill: true,
          backgroundColor: "rgba(118, 60, 163, .3)",
          borderColor: "#763CA3",
          borderWidth: 4,
          radius: 0,
          data: [19000, 26000, 30000, 35000, 50000, 45000, 60000, 75000],
        },
        {
          fill: true,
          backgroundColor: "rgba(157, 43, 43, .3)",
          borderColor: "#9D2B2B",
          borderWidth: 4,
          radius: 0,
          data: [25000, 28000, 50000, 45000, 15000, 29000, 33000],
        },
      ],
    };

    const cumulativeFeesConfig = {
      type: "line",
      data: cumulativeFeesData,
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
      plugins: [htmlLegendPlugin2],
    };

    const cumulativeFeesChart = new Chart(
      document.getElementById("cumulativeFeesChart"),
      cumulativeFeesConfig
    );

    var redioInp = document.querySelector(".dropdown-menu");
    redioInp.addEventListener("click", function(e) {
      let screenMode = localStorage.getItem("mode");
      if (screenMode == "light-blue" || screenMode == "dark-blue") {
        cumulativeFeesData.datasets[0].borderColor = "#1660A4";
        cumulativeFeesData.datasets[1].borderColor = "#0E6651";
        cumulativeFeesData.datasets[0].backgroundColor =
          "rgba(22, 96, 164, .3)";
        cumulativeFeesData.datasets[1].backgroundColor =
          "rgba(14, 102, 81, .5)";
        cumulativeFeesChart.update();
      } else {
        cumulativeFeesData.datasets[0].borderColor = "#0E6651";
        cumulativeFeesData.datasets[0].backgroundColor =
          "rgba(14, 102, 81, .5)";
        cumulativeFeesData.datasets[1].borderColor = "#1660A4";
        cumulativeFeesData.datasets[1].backgroundColor =
          "rgba(22, 96, 164, .3)";
        cumulativeFeesChart.update();
      }
    });

    cumulativeFeesData;
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
};
</script>
<style lang="">
</style>