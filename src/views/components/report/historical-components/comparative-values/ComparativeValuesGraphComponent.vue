<template lang="">
  <div class="tab-pane fade" id="v-pills-compGraph" role="tabpanel" aria-labelledby="pills-home-tab">
    <div class="d-flex justify-content-center mt-2">
      <div class="nav mltplSwtchDiv nav-pills cv-pills" role="tablist" aria-orientation="vertical">
        <div class="pill-btn active" id="card-mostRecent-tab" data-bs-toggle="pill" data-bs-target="#card-mostRecent"
          type="button" role="tab" aria-controls="card-mostRecent" aria-selected="true" @click="() => tsa_type = 'most_recent'">Most Recent</div>
        <div class="pill-btn" id="card-worst-tab" data-bs-toggle="pill" data-bs-target="#card-worst" type="button"
          role="tab" aria-controls="card-worst" aria-selected="true"  @click="() => tsa_type = 'worst'">Worst</div>
        <div class="pill-btn" id="card-median-tab" data-bs-toggle="pill" data-bs-target="#card-median" type="button"
          role="tab" aria-controls="card-median" aria-selected="true"  @click="() => tsa_type = 'median'">Median</div>
        <div class="pill-btn" id="card-best-tab" data-bs-toggle="pill" data-bs-target="#card-best" type="button"
          role="tab" aria-controls="card-best" aria-selected="true"  @click="() => tsa_type = 'best'">Best</div>
      </div>
    </div>
    <div class="px-3 py-3" id="comparativeValues2Fluid">
      <div class="container-fluid">
        <div class="d-flex justify-content-between flex-gap-12">
          <div  v-for="(item, index) in data[0].categories"  :class="`flex-1 ${index === tsa_type ? '':'d-none'}`" :key="item.id">
            <div class="tab-content h-100">
              <div class="tab-pane fade h-100 show active" id="card-mostRecent" role="tabpanel"
                aria-labelledby="card-mostRecent-tab">
                <div :class="`distributionCard1 equalDistCard1 position-relative w-100 ${longevity_first_check ? '' : 'inactive'}`">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <p class="allCardHeadPara">Longevity</p>
                    </div>
                    <div class="d-flex">
                      <div class="button-cover2">
                        <div class="radioBtnDiv greenRadioSwtch r2" id="button-2">
                          <input type="checkbox" class="checkbox2 commonRadioBtn2" v-model="longevity_first_check"/>
                          <div class="knobs2"></div>
                          <div class="layer2"></div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                  <p class="cardRadioSwtchpara1">{{item.type}}</p>
                  <div class="d-flex justify-content-between mt-1">
                    <div class="compGraphtopPara bgChangerComGraph1">
                      <p>Longevity</p>
                      <p class="cardRadioSwtchpara1">{{item.longevity_years}}</p>
                    </div>
                    <div class="compGraphtopPara bgChangerComGraph1">
                      <p class="text-end">Cumulative Income</p>
                      <p class="text-end">{{$numFormatWithDollar(item.cummulative_income)}}</p>
                    </div>
                  </div>
                  <div class="compGraphSmallBdr compGraphSmallBdrClr1 pt-1 mb-two">
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



          <div class="flex-1" v-for="(card, index) in cards" :key="card.id">
            <div :class="`distributionCard1 equalDistCard${2+index} position-relative w-100 ${card.active ? '':'inactive'}`">
              <div class="d-flex justify-content-between align-items-center">
                <div class="distrbnCard1paras">
                  <p class="allCardHeadPara">Longevity</p>
                </div>
                <div class="d-flex">
                  <div class="button-cover2">
                    <div :class="`radioBtnDiv r2 switch${1+index} extra`" id="button-2">
                      <input type="checkbox" class="checkbox2 commonRadioBtn2" :checked="card.active" @change="() => card.active = !card.active" />
                      <div class="knobs2"></div>
                      <div class="layer2"></div>
                    </div>
                  </div>
                  <a :class="`ms-2 deleteButtonAncor deleteBtn${2+index}`" data-bs-target="#deleteAccountModal"
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
              <p :class="`cardRadioSwtchpara${2+index}`">{{data[card.id].type}}</p>
              <div class="d-flex justify-content-between mt-1">
                <div :class="`compGraphtopPara bgChangerComGraph${2+index}`">
                  <p>Longevity</p>
                  <p>{{data[card.id].longevity_years}}</p>
                </div>
                <div :class="`compGraphtopPara bgChangerComGraph${2+index}`">
                  <p class="text-end">Cumulative Income</p>
                  <p class="text-end">{{$numFormatWithDollar(data[card.id].cummulative_income)}}</p>
                </div>
              </div>
              <div :class="`compGraphSmallBdr compGraphSmallBdrClr${2+index} pt-1 mb-two`">
                <p></p>
              </div>
              <div class="d-flex">
                <div class="compGraphtopParaTwo">
                  <p>Rate of Return</p>
                  <p>{{data[card.id].ror}}</p>
                </div>
                <div class="compGraphtopParaTwo cardParLeftMar">
                  <p>IRR</p>
                  <p>{{data[card.id].irr}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="graph-container-div">
          <canvas id="comparativeValues2Chart" width="400" height="150"></canvas>
          <div class="progressBarEachBtm comparative">
            <div class="bar-container contribution-radio d-flex justify-content-between align-items-center">
              <div class="progressBarBtnDiv">
                <p>Annual Contribution</p>
              </div>
              <div class="d-flex">
                <div class="button-cover2" id="button-2">
                  <div class="radioBtnDiv  r2">
                    <input type="checkbox" class="checkbox2 commonRadioBtn2" :checked="graphs.annual_contribution" @change="graphs.annual_contribution = !graphs.annual_contribution">
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
                    <input type="checkbox" class="checkbox2 commonRadioBtn2" :checked="graphs.annual_distribution" @change="graphs.annual_distribution = !graphs.annual_distribution">
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
      ],
      longevity_first_check: true,
      tsa_type: "most_recent",
      graphs: {
        annual_contribution: true,
        annual_distribution: true,
      },
      data: [
        {
          categories: {
            most_recent: {
              type: "TSA - Most Recent",
              longevity_years: "35 Years+",
              cummulative_income: 6510354,
              ror: "21.4%",
              irr: "33.55%",
            },
            worst: {
              type: "TSA- Worst",
              longevity_years: "22 Years",
              cummulative_income: 6510354,
              ror: "14.4%",
              irr: "10.55%",
            },
            median: {
              type: "TSA - Median",
              longevity_years: "65 Years",
              cummulative_income: 6510354,
              ror: "44.6%",
              irr: "05.55%",
            },
            best: {
              type: "TSA - Best",
              longevity_years: "33 Years+",
              cummulative_income: 6510354,
              ror: "36.4%",
              irr: "11.55%",
            },
          },
        },
        {
          type: "Brokerage Account Balance",
          longevity_years: "41 Years",
          cummulative_income: 4110354,
          ror: "14.4%",
          irr: "44.22%",
        },
        {
          type: "401/IRA Balance",
          longevity_years: "25 Years+",
          cummulative_income: 2510354,
          ror: "14.4%",
          irr: "07.15%",
        },
        {
          type: "Annuity Balance",
          longevity_years: "33 Years",
          cummulative_income: 3310354,
          ror: "14.4%",
          irr: "31.55%",
        },
      ],
    };
  },
  mounted() {
    const getOrCreateLegendList = (chart, id) => {
      const legendContainer = document.getElementById(id);
      return legendContainer;
    };

    const pillBtns = document
      .querySelector(".cv-pills")
      .querySelectorAll(".pill-btn");
    pillBtns.forEach(function(pillBtn) {
      pillBtn.addEventListener("click", function() {
        comparativeValues2Chart.update();
      });
    });

    const htmlLegendPlugin4 = {
      id: "comparativeValues2",
      afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
        console.log(document.getElementById(options.containerID));
        let checkboxes = [
          ...document
            .getElementById(options.containerID)
            .querySelectorAll("input[type=checkbox]"),
        ];
        let pillIndex;
        pillBtns.forEach(function(pill, index) {
          if (pill.classList.contains("active")) {
            pillIndex = index;
          }
        });
        let itemToAdd = checkboxes[pillIndex];
        checkboxes.splice(0, 4, itemToAdd);
        items.forEach((item, index) => {
          if (checkboxes[index]) {
            checkboxes[index].onclick = e => {
              if (index < 4) {
                let distributionCard = e.target.closest(".distributionCard1");
                distributionCard.classList.toggle("inactive");
              }
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
          }
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
            chart.setDatasetVisibility(item.datasetIndex, false);
          }
          chart.update();
        });
      },
      showAll(chart, options) {
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
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

    const comparativeValues2Labels = [1, 5, 10, 15, 20, 25, 30, 35];

    const comparativeValues2Data = {
      labels: comparativeValues2Labels,
      datasets: [
        {
          borderColor:
            this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
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
            this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
              ? "#0E6651"
              : "#1660A4",
          borderWidth: 4,
          radius: 0,
          data: [
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
          data: [
            1900000,
            2600000,
            4000000,
            480000,
            900000,
            1300000,
            4500000,
            3300000,
          ],
        },
        {
          borderColor: "#9D2B2B",
          borderWidth: 4,
          radius: 0,
          data: [
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
          // borderColor: '#0E6651',
          backgroundColor: "rgba(14, 103, 82, .4)",
          // borderWidth: 4,
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
          // borderSkipped: false,
        },
        {
          backgroundColor: "rgba(131, 159, 175, .6)",
          // borderWidth: 4,
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

    const comparativeValues2Config = {
      type: "line",
      data: comparativeValues2Data,
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
          comparativeValues2: {
            containerID: "comparativeValues2Fluid",
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
            max: 5000000,
            // stacked: true,
            ticks: {
              padding: 8,
              stepSize: 1250000,
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
            max: 1000000,
            ticks: {
              padding: 8,
              stepSize: 250000,
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
      plugins: [htmlLegendPlugin4],
    };

    const comparativeValues2Chart = new Chart(
      document.getElementById("comparativeValues2Chart"),
      comparativeValues2Config
    );

    var redioInp = document.querySelector(".dropdown-menu");
    redioInp.addEventListener("click", function(e) {
      let screenMode = localStorage.getItem("mode");
      if (screenMode == "light-blue" || screenMode == "dark-blue") {
        comparativeValues2Data.datasets[0].borderColor = "#1660A4";
        comparativeValues2Data.datasets[1].borderColor = "#0E6651";
        comparativeValues2Chart.update();
      } else {
        comparativeValues2Data.datasets[0].borderColor = "#0E6651";
        comparativeValues2Data.datasets[1].borderColor = "#1660A4";
        comparativeValues2Chart.update();
      }
    });

    var assestShowHide2 = document.querySelector(".showAssetsCheckBox2");

    document
      .querySelector(".presentationModeBtn")
      .addEventListener("click", function() {
        if (assestShowHide2.classList.contains("on")) {
          htmlLegendPlugin4.hideAll(
            comparativeValues2Chart,
            comparativeValues2Config.options
          );
        }
      });

    document
      .querySelector(".fullScreenCloseBtn")
      .addEventListener("click", function() {
        htmlLegendPlugin4.showAll(
          comparativeValues2Chart,
          comparativeValues2Config.options
        );
      });
  },
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (
        this.$store.state.app.presentation_mode &&
        this.$store.state.app.show_assets2
      ) {
        this.cards.forEach(element => {
          element.active = false;
          this.graphs.annual_contribution = false;
          this.graphs.annual_distribution = false;
        });
      } else {
        this.cards.forEach(element => {
          element.active = true;
          this.graphs.annual_contribution = true;
          this.graphs.annual_distribution = true;
        });
      }
    },
  },
};
</script>
<style lang="">
</style>