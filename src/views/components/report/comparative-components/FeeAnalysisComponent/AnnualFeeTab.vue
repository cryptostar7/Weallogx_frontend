<template lang="">
  <div class="tab-pane fade show active" id="v-pills-annualFees" role="tabpanel"
    aria-labelledby="v-pills-annualFees-tab">
    <div class="container-fluid" id="annualFeesFluid">
      <div class="d-flex justify-content-between flex-gap-12">
        <div class=" mt-3 flex-1" v-for="(item, index) in data" :key="index">
          <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100  ${cards[index].active ? '':'inactive'}`">
            <div class="d-flex justify-content-between pb-1">
              <div class="distrbnCard1paras">
                <p>Annual Fees</p>
                <p :class="`cardRadioSwtchpara${1+index}`">{{item.type}}</p>
              </div>
              <div class="d-flex">
                <div class="button-cover2">
                  <div :class="`radioBtnDiv r2 switch${index}`" id="button-2">
                    <input type="checkbox" class="checkbox2 commonRadioBtn1"  :checked="cards[index].active" @change="() => cards[index].active = !cards[index].active" />
                    <div class="knobs2"></div>
                    <div class="layer2"></div>
                  </div>
                </div>
                <a class="ms-2 deleteButtonAncor deleteBtnBlue" data-bs-target="#deleteAccountModal"
                  data-bs-toggle="modal">
                  <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                      stroke="#9D9D9D" />
                    <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5"
                      transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                  </svg>
                </a>
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
        { id: 1, active: false },
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

    const htmlLegendPlugin1 = {
      id: "anuualFeesLegend",
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

    const annualFeesLabels = [1, 5, 10, 15, 20, 25, 30, 35];

    const annualFeesData = {
      labels: annualFeesLabels,
      datasets: [
        {
          borderColor:
            this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
              ? "#1660A4"
              : "#0E6651",
          borderWidth: 4,
          radius: 0,
          data: [16000, 18000, 12000, 12000, 9000, 7000, 10000, 15000],
        },
        {
          borderColor:
            this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
              ? "#0E6651"
              : "#1660A4",
          borderWidth: 4,
          radius: 0,
          data: [5000, 7000, 14000, 18000, 25000, 14000, 9000, 10000],
        },
        {
          borderColor: "#763CA3",
          borderWidth: 4,
          radius: 0,
          data: [8000, 16000, 20000, 25000, 28000, 68000, 48000, 8000],
        },
        {
          borderColor: "#9D2B2B",
          borderWidth: 4,
          radius: 0,
          data: [3000, 10000, 9000, 16000, 26000, 48000, 38000, 4000],
        },
      ],
    };

    const annualFeesConfig = {
      type: "line",
      data: annualFeesData,
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
      plugins: [htmlLegendPlugin1],
    };

    const annualFeesChart = new Chart(
      document.getElementById("annualFeesChart"),
      annualFeesConfig
    );

    var redioInp = document.querySelector(".dropdown-menu");
    redioInp.addEventListener("click", function(e) {
      let screenMode = localStorage.getItem("mode");
      if (screenMode == "light-blue" || screenMode == "dark-blue") {
        annualFeesData.datasets[0].borderColor = "#1660A4";
        annualFeesData.datasets[1].borderColor = "#0E6651";
        annualFeesChart.update();
      } else {
        annualFeesData.datasets[0].borderColor = "#0E6651";
        annualFeesData.datasets[1].borderColor = "#1660A4";
        annualFeesChart.update();
      }
    });
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