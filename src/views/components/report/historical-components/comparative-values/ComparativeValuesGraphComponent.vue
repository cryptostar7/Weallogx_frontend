<template lang="">
  <div class="tab-pane fade" id="v-pills-compGraph" role="tabpanel" aria-labelledby="pills-home-tab">
    <div class="d-flex justify-content-center mt-2">
      <div class="nav mltplSwtchDiv nav-pills cv-pills" role="tablist" aria-orientation="vertical">
        <div class="pill-btn active" id="card-mostRecent-tab" data-bs-toggle="pill" type="button" role="tab" aria-controls="card-mostRecent" aria-selected="true" @click="() => tsa_type = 'most_recent'">Most Recent</div>
        <div class="pill-btn" id="card-worst-tab" data-bs-toggle="pill" data-bs-target="#card-worst" type="button"
          role="tab" aria-controls="card-worst" aria-selected="true"  @click="() => tsa_type = 'worst'">Worst</div>
        <div class="pill-btn" id="card-median-tab" data-bs-toggle="pill" data-bs-target="#card-median" type="button"
          role="tab" aria-controls="card-median" aria-selected="true"  @click="() => tsa_type = 'median'">Median</div>
        <div class="pill-btn" id="card-best-tab" data-bs-toggle="pill" data-bs-target="#card-best" type="button"
          role="tab" aria-controls="card-best" aria-selected="true"  @click="() => tsa_type = 'best'">Best</div>
      </div>
    </div>
    <button @click="testFunction">testFunction</button>
    <div class="px-3 py-3" id="comparativeValuesFluid2">
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

          <div class="flex-1" v-for="(card, index) in cards" >
            <div :class="`distributionCard1 equalDistCard${2+index} position-relative w-100 ${card.active ? '':'inactive'}`" :key="card.id">
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
                  <a :class="`ms-2 deleteButtonAncor deleteBtn${2+index}`" data-bs-target="#deleteAccountModal" data-bs-toggle="modal">
                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path  d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"  stroke="#9D9D9D" />
                      <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5"  transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                    </svg>
                  </a>
                </div>
              </div>  
 
              <div v-if="data[card.id] && data[card.id].categories">

                <p :class="`cardRadioSwtchpara${2+index}`">{{data[card.id].categories[tsa_type].type}}</p>
                <div class="d-flex justify-content-between mt-1">
                  <div :class="`compGraphtopPara bgChangerComGraph${2+index}`">
                    <p>Longevity</p>
                    <p>{{data[card.id].categories[tsa_type].longevity_years}}</p>
                  </div>
                  <div :class="`compGraphtopPara bgChangerComGraph${2+index}`">
                    <p class="text-end">Cumulative Income</p>
                    <p class="text-end">{{$numFormatWithDollar(data[card.id].categories[tsa_type].cummulative_income)}}</p>
                  </div>
                </div>
                <div :class="`compGraphSmallBdr compGraphSmallBdrClr${2+index} pt-1 mb-two`">
                  <p></p>
                </div>
                <div class="d-flex">
                  <div class="compGraphtopParaTwo">
                    <p>Rate of Return</p>
                    <p>{{data[card.id].categories[tsa_type].ror}}</p>
                  </div>
                  <div class="compGraphtopParaTwo cardParLeftMar">
                    <p>IRR</p>
                    <p>{{data[card.id].categories[tsa_type].irr}}</p>
                  </div>
                </div>
              </div>
       
          
            </div>
          </div>

        </div>
      </div>

        <div class="container-fluid pb-2">
          <div class="graph-container-div graph-area" id="comparativeGraphArea2">
            <div class="comparative-graph-container w-100 pt-md-3">
              <canvas id="comparativeValuesChart2" width="400" height="350"></canvas>
            </div>
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
          categories: {
            most_recent: {
              type: "Brokerage - Most Recent",
              longevity_years: "35 Years+",
              cummulative_income: 6510354,
              ror: "21.4%",
              irr: "33.55%",
            },
            worst: {
              type: "Brokerage- Worst",
              longevity_years: "22 Years",
              cummulative_income: 6510354,
              ror: "14.4%",
              irr: "10.55%",
            },
            median: {
              type: "Brokerage - Median",
              longevity_years: "65 Years",
              cummulative_income: 6510354,
              ror: "44.6%",
              irr: "05.55%",
            },
            best: {
              type: "Brokerage - Best",
              longevity_years: "33 Years+",
              cummulative_income: 6510354,
              ror: "36.4%",
              irr: "11.55%",
            },
          },
        },
        {
          categories: {
            most_recent: {
              type: "401/IRA Balance",
              longevity_years: "35 Years+",
              cummulative_income: 6510354,
              ror: "21.4%",
              irr: "33.55%",
            },
            worst: {
              type: "401/IRA- Worst",
              longevity_years: "22 Years",
              cummulative_income: 6510354,
              ror: "14.4%",
              irr: "10.55%",
            },
            median: {
              type: "401/IRA - Median",
              longevity_years: "65 Years",
              cummulative_income: 6510354,
              ror: "44.6%",
              irr: "05.55%",
            },
            best: {
              type: "401/IRA - Best",
              longevity_years: "33 Years+",
              cummulative_income: 6510354,
              ror: "36.4%",
              irr: "11.55%",
            },
          },
        },
        {
          categories: {
            most_recent: {
              type: "Annuity Balance",
              longevity_years: "35 Years+",
              cummulative_income: 6510354,
              ror: "21.4%",
              irr: "33.55%",
            },
            worst: {
              type: "Annuity- Worst",
              longevity_years: "22 Years",
              cummulative_income: 6510354,
              ror: "14.4%",
              irr: "10.55%",
            },
            median: {
              type: "Annuity - Median",
              longevity_years: "65 Years",
              cummulative_income: 6510354,
              ror: "44.6%",
              irr: "05.55%",
            },
            best: {
              type: "Annuity - Best",
              longevity_years: "33 Years+",
              cummulative_income: 6510354,
              ror: "36.4%",
              irr: "11.55%",
            },
          },
        },
      ],
    };
  },
  mounted() {
    if (this.comparative.cv_1) {
      this.mapData(); // set longevity cards data
      // cvGraphInputToogle${index}
      console.log("this.cards");
      console.log(this.graphs);
      this.setGraph(); // generate graph
    }
  },
  methods: {
    filterData: function(data, type) {
      let finalData = {};

      if (data.chart_output) {
        let chart_data = data.chart_output;
        let list = chart_data.age;
        let duration = this.historicalLirp.chart_output.year || [];
        if (list.length) {
          let distributions =
            chart_data.distributions || chart_data.tax_free_distributions;
          let account_value =
            chart_data.net_balance ||
            chart_data.eoy_accumulation_value_after_credit;
          finalData = {
            cummulative_income: data.cummulative_income || data.final_balance,
            type: type,
            ror: data.index_average,
            irr: data.irr_percent,
            longevity_years: this.getYear(account_value, duration) + ' Years',
          };
          finalData.account_value = account_value;
        }
      }
      return finalData;
    },
    mapColumn1Data: function() {
      return {
        data: {
          id: 0,
          categories: {
            most_recent: this.filterData(
              this.historical.most_recent.result,
              "TSA - Most Recent"
            ),
            worst: this.filterData(this.historical.min.result, "TSA - Worst"),
            median: this.filterData(
              this.historical.median.result,
              "TSA - Median"
            ),
            best: this.filterData(this.historical.max.result, "TSA - Best"),
          },
        },
      };
    },
    mapColumn2Data: function() {
      return {
        data: {
          id: 1,
          categories: {
            most_recent: this.filterData(
              this.historical.most_recent.taxable_most_recent,
              "Brokerage Account - Most Recent"
            ),
            worst: this.filterData(
              this.historical.min.taxable_min,
              "Brokerage Account - Worst"
            ),
            median: this.filterData(
              this.historical.median.taxable_median,
              "Brokerage Account - Median"
            ),
            best: this.filterData(
              this.historical.max.taxable_max,
              "Brokerage Account - Best"
            ),
          },
        },
      };
    },
    mapColumn3Data: function() {
      return {
        data: {
          id: 2,
          categories: {
            most_recent: this.filterData(
              this.historical.most_recent.pre_tax_most_recent,
              "401K/IRA - Most Recent"
            ),
            worst: this.filterData(
              this.historical.min.pre_tax_min,
              "401K/IRA - Worst"
            ),
            median: this.filterData(
              this.historical.median.pre_tax_median,
              "401K/IRA - Median"
            ),
            best: this.filterData(
              this.historical.max.pre_tax_max,
              "401K/IRA - Best"
            ),
          },
        },
      };
    },
    mapColumn4Data: function() {
      return {
        data: {
          id: 3,
          categories: {
            most_recent: this.filterData(
              this.historical.most_recent.tda_most_recent,
              "Annuity - Most Recent"
            ),
            worst: this.filterData(
              this.historical.min.tda_min,
              "Annuity - Worst"
            ),
            median: this.filterData(
              this.historical.median.tda_median,
              "Annuity - Median"
            ),
            best: this.filterData(
              this.historical.max.tda_max,
              "Annuity - Best"
            ),
          },
        },
      };
    },
    // returns dataset variable data for the graph
    getDataSet: function() {
      let cv = [];
      let cv1 = [];
      let cv2 = [];
      let cv3 = [];
      let contribution = [];
      let distribution = [];
      let years = [];

      if (Object.values(this.historical).length) {
        let chart = Object.values(this.historicalLirp).length
          ? this.historicalLirp.chart_output
          : false;
        years = chart ? chart.year : [];
        contribution =
          chart && this.graphs.annual_contribution ? chart["Deposits"] : [];
        distribution =
          chart && this.graphs.annual_distribution
            ? chart["distributions"]
            : [];

        chart = this.mapColumn1Data().data.categories[this.tsa_type];
        let chart1 = this.mapColumn2Data().data.categories[this.tsa_type];
        let chart2 = this.mapColumn3Data().data.categories[this.tsa_type];
        let chart3 = this.mapColumn4Data().data.categories[this.tsa_type];

        cv = chart
          ? chart.account_value.map((i, idx) => {
              return { x: idx, y: i.toFixed(0) };
            })
          : [];
        cv1 = chart1
          ? chart1.account_value.map((i, idx) => {
              return { x: idx, y: i.toFixed(0) };
            })
          : [];
        cv2 = chart2
          ? chart2.account_value.map((i, idx) => {
              return { x: idx, y: i.toFixed(0) };
            })
          : [];
        cv3 = chart3
          ? chart3.account_value.map((i, idx) => {
              return { x: idx, y: i.toFixed(0) };
            })
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
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#1660A4"
                : this.$appTheme() == "dark-green" ? "#26AB8B" : "#0E6651",
            pointBackgroundColor:
              this.$appTheme() == "light-blue" ||
              this.$appTheme() == "dark-blue"
                ? "#1660A4"
                : this.$appTheme() == "dark-green" ? "#26AB8B" : "#0E6651",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            // data: !this.cards[0].active ? [] : cv.map(i => i.toFixed(0)),
            data: cv.map(i => i.y),
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
            data:
              this.deletedItems.includes(1) || !this.cards[0].active
                ? []
                : // : cv1.map(i => i.toFixed(0)) || [],
                  cv1.map(i => i.y) || [],
          },
          {
            borderColor: "#763CA3",
            pointBackgroundColor: "#763CA3",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data:
              this.deletedItems.includes(2) || !this.cards[1].active
                ? []
                : // : cv2.map(i => i.toFixed(0)) || [],
                  cv2.map(i => i.y) || [],
          },
          {
            borderColor: "#9D2B2B",
            pointBackgroundColor: "#9D2B2B",
            borderWidth: 4,
            pointBorderWidth: 1,
            radius: 0,
            data:
              this.deletedItems.includes(3) || !this.cards[2].active
                ? []
                : // : cv3.map(i => i.toFixed(0)) || [],
                  cv3.map(i => i.y) || [],
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
      if (window.comparativeGraphChart2) {
        // clear the old initialized graph
        window.comparativeGraphChart2.destroy();
      }

      const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        return legendContainer;
      };

      const current_tsa = this.tsa_type;

      const htmlLegendPlugin1 = {
        id: "comparativeValues2",
        afterUpdate(chart, args, options) {
          const ul = getOrCreateLegendList(chart, options.containerID);
          const items = chart.options.plugins.legend.labels.generateLabels(
            chart
          );
          let checkboxes = document
            .getElementById(options.containerID)
            .querySelectorAll("input[type=checkbox]");

            let tsa_indexes = {
              most_recent:0,
              worst:1,
              median:2,
              best:3,
            };

            let tsa_index = tsa_indexes[current_tsa];
            let newCheckboxes = []
            checkboxes.forEach((element, index) => {
              if(index === tsa_index || index > 3){
                newCheckboxes.push(element);
              }
            });

            checkboxes = newCheckboxes;
          items.forEach((item, index) => {
            if (checkboxes[index]) {
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
            }
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

      const comparativeValuesChart2 = document.getElementById(
        "comparativeValuesChart2"
      );
      const comparativeGraphArea2 = document.querySelector(
        "#comparativeGraphArea2"
      );

      const totalDuration = 4500;
      const delayBetweenPoints =
        totalDuration / graphData.datasets[0].data.length;
      const previousY = ctx =>
        ctx.index === 0
          ? ctx.chart.scales.y.getPixelForValue(
              graphData.datasets[0].data.length
            )
          : ctx.chart
              .getDatasetMeta(ctx.datasetIndex)
              .data[ctx.index - 1].getProps(["y"], true).y;

      let animationTimeout = false;

      // Function to handle the intersection changes
      function handleIntersection(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            // If the graph is visible, animate it
            animateChart(window.comparativeGraphChart2);
            observer.unobserve(entry.target);
            window.comparativeGraphChart2.config.options.animation = {};
            animationTimeout = true;
          } else {
            // If the graph is not visible, stop the animation
            window.comparativeGraphChart2.stop();
          }
        });
      }

      // Create a new Intersection Observer instance
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.25,
      });

      // Start observing the chart container
      observer.observe(comparativeGraphArea2);

      function animateChart(chart) {
        chart.options.animation = {
          x: {
            type: "number",
            easing: "linear",
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx) {
              if (ctx.type !== "data" || ctx.xStarted) {
                return 0;
              }
              ctx.xStarted = true;
              return ctx.index * delayBetweenPoints;
            },
          },
          y: {
            type: "number",
            easing: "linear",
            duration: delayBetweenPoints,
            from: 0,
            delay(ctx) {
              if (ctx.type !== "data" || ctx.yStarted) {
                return 0;
              }
              ctx.yStarted = true;
              return ctx.index * delayBetweenPoints;
            },
          },
        };
        chart.update();
      }

      let bordercolors;

      let screenMode = localStorage.getItem("mode");
      if (screenMode == "light-blue") {
        bordercolors = ["#1660A4", "#089875", "#763CA3", "#9D2B2B", "#eee"];
      } else if (screenMode == "dark-blue") {
        bordercolors = ["#1660A4", "#089875", "#763CA3", "#9D2B2B", "#333"];
      } else if (screenMode == "dark-green") {
        bordercolors = ["#26AB8B", "#23669E", "#763CA3", "#9D2B2B", "#333"];
      } else {
        bordercolors = ["#0E6651", "#1660A4", "#763CA3", "#9D2B2B", "#eee"];
      }

      const highlightLine = {
        id: "highlightLine",
        beforeDatasetsDraw(chart, args, plugins) {
          let { data } = chart;
          const datasetMetaArray = chart.getSortedVisibleDatasetMetas();
          if (animationTimeout) {
            setTimeout(() => {
              animationTimeout = false;
            }, totalDuration);
          } else {
            for (let i = 0; i < datasetMetaArray.length; i++) {
              const dataMetaSet = datasetMetaArray[i];
              const index = dataMetaSet.index;
              if (
                index <= 3 &&
                dataMetaSet.data.some(dataPoint => dataPoint.active)
              ) {
                data.datasets[index].borderColor = bordercolors[index];
                // data.datasets[index].borderWidth = 6;
                chart.update();
                break;
              }
            }
          }
        },
        afterEvent(chart, args) {
          let { data } = chart;
          if (args.inChartArea) {
            function setBorderColor(active, index, borderColor) {
              return active ? borderColor : bordercolors[4];
            }
            chart.getDatasetMeta(0).data[0]
              ? (data.datasets[0].borderColor = setBorderColor(
                  chart.getDatasetMeta(0).data[0].active,
                  0,
                  bordercolors[0]
                ))
              : bordercolors[4];
            chart.getDatasetMeta(1).data[0]
              ? (data.datasets[1].borderColor = setBorderColor(
                  chart.getDatasetMeta(1).data[0].active,
                  1,
                  bordercolors[1]
                ))
              : bordercolors[4];
            chart.getDatasetMeta(2).data[0]
              ? (data.datasets[2].borderColor = setBorderColor(
                  chart.getDatasetMeta(2).data[0].active,
                  2,
                  bordercolors[2]
                ))
              : bordercolors[4];
            chart.getDatasetMeta(3).data[0]
              ? (data.datasets[3].borderColor = setBorderColor(
                  chart.getDatasetMeta(3).data[0].active,
                  3,
                  bordercolors[3]
                ))
              : bordercolors[4];
          }
          args.changed = true;
        },
      };

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
            comparativeValues2: {
              containerID: "comparativeValuesFluid2",
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
        plugins: [htmlLegendPlugin1, highlightLine],
      };

      window.comparativeGraphChart2 = new Chart(
        document.getElementById("comparativeValuesChart2"),
        comparativeValuesConfig
      );

      function resetColors(chart) {
        comparativeValuesConfig.data.datasets[0].borderColor = bordercolors[0];
        comparativeValuesConfig.data.datasets[1].borderColor = bordercolors[1];
        comparativeValuesConfig.data.datasets[2].borderColor = bordercolors[2];
        comparativeValuesConfig.data.datasets[3].borderColor = bordercolors[3];
        chart.update();
      }

      const graphContainer = document.querySelector(
        ".comparative-graph-container"
      );

      graphContainer.addEventListener("mouseout", e => {
        if (animationTimeout) {
          setTimeout(() => {
            animationTimeout = false;
          }, totalDuration);
        } else {
          resetColors(window.comparativeGraphChart2);
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
          bordercolors = ["#1660A4", "#089875", "#763CA3", "#9D2B2B", "#eee"];
          resetColors(window.comparativeGraphChart2);
        } else if (screenMode == "dark-blue") {
          graphData.datasets[0].borderColor = "#1660A4";
          graphData.datasets[0].pointBackgroundColor = "#1660A4";
          graphData.datasets[1].borderColor = "#089875";
          graphData.datasets[1].pointBackgroundColor = "#089875";
          bordercolors = ["#1660A4", "#089875", "#763CA3", "#9D2B2B", "#333"];
        } else if (screenMode == "dark-green") {
          graphData.datasets[0].borderColor = "#26AB8B";
          graphData.datasets[0].pointBackgroundColor = "#26AB8B";
          graphData.datasets[1].borderColor = "#23669E";
          graphData.datasets[1].pointBackgroundColor = "#23669E";
          bordercolors = ["#26AB8B", "#23669E", "#763CA3", "#9D2B2B", "#333"];
          resetColors(window.comparativeGraphChart2);
        } else {
          graphData.datasets[0].borderColor = "#0E6651";
          graphData.datasets[0].pointBackgroundColor = "#0E6651";
          graphData.datasets[1].borderColor = "#1660A4";
          graphData.datasets[1].pointBackgroundColor = "#1660A4";
          bordercolors = ["#0E6651", "#1660A4", "#763CA3", "#9D2B2B", "#eee"];
          resetColors(window.comparativeGraphChart2);
        }
        window.comparativeGraphChart2.update();
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
              htmlLegendPlugin1.hideAll(
                window.comparativeGraphChart2,
                comparativeValuesConfig.options
              );
            }
          });

        document
          .querySelector(".fullScreenCloseBtn")
          .addEventListener("click", function() {
            htmlLegendPlugin1.showAll(
              window.comparativeGraphChart2,
              comparativeValuesConfig.options
            );
            let topTable = document.getElementById("comparativeTableTabView");
            topTable.scrollIntoView();
          });
      }
    },
    testFunction: function() {
      console.log(this.data);
    },
    // to get the longevity year
    getYear: function(array, age) {
      let year = array.filter(i => i);
      year = year.length;
      return age[year-1];
    },
    // map API data for the CV cards
    mapData: function() {
      console.log("this.mapColumn1Data()");
      console.log(this.mapColumn1Data().data);
      console.log(this.mapColumn2Data().data);
      console.log(this.mapColumn3Data().data);
      console.log(this.mapColumn4Data().data);

      this.data[0] = this.mapColumn1Data().data;
      this.data[1] = this.mapColumn2Data().data;
      this.data[2] = this.mapColumn3Data().data;
      this.data[3] = this.mapColumn4Data().data;
    },
    // set deleted cv id in hidden input
    setActionId: function(id) {
      document.getElementById("comparative_cv_delete_id").value = id;
    },
  },
  computed: {
    toggleActions() {
      return JSON.stringify(this.cards) + JSON.stringify(this.graphs);
    },
    historical() {
      return this.$store.state.data.report.historical;
    },
    deletedItems() {
      return this.$store.state.data.report.deleted_historical_cv_ids;
    },
    cv_name() {
      return this.$store.state.data.report.cv_names;
    },
    comparative() {
      return this.$store.state.data.report.comparative_longevity;
    },
    comparative_ror_longevity() {
      return this.$store.state.data.report.comparative_ror_longevity;
    },
    historicalLirp() {
      return this.$store.state.data.report.historical.lirp_data;
    },
  },
  watch: {
    toggleActions() {
      // this.setGraph();
    },
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
    tsa_type(val) {
      this.setGraph();
    },
  },
};
</script>
<style lang="">
</style>