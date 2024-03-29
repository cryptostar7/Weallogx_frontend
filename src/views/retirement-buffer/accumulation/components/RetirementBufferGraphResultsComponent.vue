<template lang="">
  <div
    class="tab-pane fade"
    id="v-pills-graph"
    role="tabpanel"
    aria-labelledby="pills-home-tab"
  >
    <div
      :class="`nav market_buffer_account_tab graph_top_tab nav-pills`"
      role="tablist"
      aria-orientation="vertical"
    >
      <div
        :class="marketAlone ? 'active' : ''"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-market"
        type="button"
        role="tab"
        aria-controls="v-pills-market"
        aria-selected="true"
        @click="$store.dispatch('retirementBufferMarketAlone', true)"
      >
        Market Account Alone
      </div>
      <div
        data-bs-toggle="pill"
        data-bs-target="#v-pills-buffer"
        type="button"
        role="tab"
        aria-controls="v-pills-buffer"
        aria-selected="false"
        :class="`${marketAlone ? '' : 'active'}`"
        @click="$store.dispatch('retirementBufferMarketAlone', false)"
      >
        Market + Buffer Account
      </div>
    </div>
    <div
      :class="`table_graph_tab_main graph_tab_main ${
        marketAlone ? 'disable' : ''
      }`"
      id="retirementBufferGraphFluid"
    >
      <slider-weight-range
        ref="sliderRangeRef"
        sliderType="result"
        :disabled="marketAlone"
        @setBuffer="(e) => $store.dispatch('updateBuffeAccountAllocation', e)"
      />
      <!-- Filter Buttons -->
      <retirement-buffer-result-filter-options
        class="graph_filter_btns"
        :disable="indexType !== 'Historical Returns'"
      />

      <div class="graph_all_buttons">
        <div class="graph_select_div mx-wid-fit-content">
          <span class="sp_text" @click="testFunction">S&P 500</span>
          <div class="select-menu graph_select_menu">
            <div class="select-btn">
              <input
                type="text"
                class="sBtn-text"
                :value="indexType"
                readonly="true"
                id="account-type"
              />
              <i
                ><img
                  src="@/assets/images/icons/table-select-chevron.svg"
                  alt="Chevron"
              /></i>
            </div>
            <ul class="options">
              <li
                v-for="(item, index) in $props.indexTypes"
                :key="index"
                :class="`option ${indexType === item ? 'active' : ''}`"
                @click="$emit('setIndexType', item)"
              >
                <span class="option-text">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="common_each_graph_div graph_clr_1">
          Market Account Alone ${{ accountAllocation.market_alone || 0 }}
        </div>
        <div
          :class="`common_each_graph_div graph_clr_2 disable ${
            accountAllocation.buffer
          } ${marketAlone ? 'd-none' : ''}`"
        >
          Market + Buffer Account {{ 100 - bufferPercent }}/{{ bufferPercent }}
        </div>
        <!-- <div class="common_each_graph_div graph_clr_3 disable">Combined</div> -->
      </div>
      <canvas
        id="retirementBufferGraph"
        width="1942"
        height="728"
        style="
          display: block;
          box-sizing: border-box;
          height: 364px;
          width: 971px;
        "
      ></canvas>

      <div
        :class="`graph_net_distribution  ${
          indexType === 'Historical Returns' ? '' : 'disable pe-none'
        }`"
      >
        <label for="net_distribution">Net Distributions</label>
        <div class="table_button button_r">
          <input
            type="checkbox"
            class="button_checkbox"
            id="net_distribution"
            :checked="showDistribution"
            @change="
              $store.dispatch(
                'updateRbaNetDistributionDisplay',
                !showDistribution
              )
            "
          />
          <div class="button_knobs"></div>
          <div class="button_layer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SliderWeightRange from "../../common-components/SliderWeightRange.vue";
import RetirementBufferResultFilterOptions from "./RetirementBufferResultFilterOptions.vue";
import CommonTooltipSvg from "../../../components/common/CommonTooltipSvg.vue";

export default {
  components: {
    SliderWeightRange,
    CommonTooltipSvg,
    RetirementBufferResultFilterOptions,
  },
  data() {
    return {
      bufferPercent: null,
    };
  },
  props: ["indexType", "accountAllocation", "years", "indexTypes"],
  emits: ["setIndexType"],
  mounted() {
    this.setGraph();
  },
  methods: {
    testFunction() {
      console.log(this.bufferResult);
      console.log(this.marketResult);
      console.log(this.results2);
      console.log(this.results);
    },
    setGraph: function () {
      let graphData = this.getDataSet();
      let maxAcc1 = Math.max(
        ...[
          Math.max(...(graphData.datasets[0].data || [])),
          Math.max(...(graphData.datasets[1].data || [])),
        ]
      );

      let maxAcc2 = Math.max(
        ...[
          Math.max(...(graphData.datasets[2].data || [])),
          Math.max(...(graphData.datasets[3].data || [])),
        ]
      );

      const comparativeValuesConfig = {
        type: "line",
        data: graphData,
        options: {
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
              containerID: "retirementBufferGraphFluid",
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
              // max: 3000000,
              suggestedMax: this.$roundFigureNum(Number(maxAcc1)).toFixed(0),

              // stacked: true,
              ticks: {
                maxTicksLimit: 7,
                padding: 8,
                // stepSize: 1250000,
                callback: function (value, index, ticks) {
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
              display: "auto",
              position: "right",

              // grid line settings
              grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
                borderColor: "#E9E9E9",
                drawBorder: false,
                // tickLength: 5
              },
              min: 0,
              // max: 3000000,
              suggestedMax: this.$roundFigureNum(Number(maxAcc2 * 2)).toFixed(
                0
              ),
              ticks: {
                maxTicksLimit: 7,
                padding: 8,
                // stepSize: 250000,
                callback: function (value, index, ticks) {
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
      };

      if (window.rbaGraphChart) {
        // clear the old initialized graph
        window.rbaGraphChart.destroy();
      }

      window.rbaGraphChart = new Chart(
        document.getElementById("retirementBufferGraph"),
        comparativeValuesConfig
      );

      var redioInp = document.querySelector(".dropdown-menu");
      redioInp.addEventListener("click", function (e) {
        let screenMode = localStorage.getItem("mode");
        if (screenMode == "light-blue") {
          graphData.datasets[0].borderColor = "#1660A4";
          graphData.datasets[1].borderColor = "#0E6651";
          graphData.datasets[0].backgroundColor = "rgba(22, 96, 164, .4)";
          graphData.datasets[1].backgroundColor = "rgba(8, 152, 117, .35)";
          graphData.datasets[2].backgroundColor = "#287BC7";
          graphData.datasets[2].borderColor = "#1660A4";
          graphData.datasets[3].backgroundColor = "#147D64";
          graphData.datasets[3].borderColor = "#0E6651";
        } else if (screenMode == "dark-blue") {
          graphData.datasets[0].borderColor = "#1660A4";
          graphData.datasets[1].borderColor = "#26AB8B";
          graphData.datasets[0].backgroundColor = "rgba(22, 96, 164, .4)";
          graphData.datasets[1].backgroundColor = "rgba(8, 152, 117, .35)";
          graphData.datasets[2].backgroundColor = "#287BC7";
          graphData.datasets[2].borderColor = "#1660A4";
          graphData.datasets[3].backgroundColor = "#26AB8B";
          graphData.datasets[3].borderColor = "#0E6651";
        }else if (screenMode == "dark-green") {
          graphData.datasets[0].borderColor = "#26AB8B";
          graphData.datasets[1].borderColor = "#23669E";
          graphData.datasets[0].backgroundColor = "rgba(8, 152, 117, .35)";
          graphData.datasets[1].backgroundColor = "rgba(22, 96, 164, .4)";
          graphData.datasets[2].backgroundColor = "#26AB8B";
          graphData.datasets[2].borderColor = "#0E6651";
          graphData.datasets[3].backgroundColor = "#287BC7";
          graphData.datasets[3].borderColor = "#1660A4";
        } else {
          graphData.datasets[0].borderColor = "#0E6651";
          graphData.datasets[0].backgroundColor = "rgba(14, 102, 81, .4)";
          graphData.datasets[1].borderColor = "#1660A4";
          graphData.datasets[1].backgroundColor = "rgba(22, 96, 164, .35)";
          graphData.datasets[2].backgroundColor = "#147D64";
          graphData.datasets[2].borderColor = "#0E6651";
          graphData.datasets[3].backgroundColor = "#287BC7";
          graphData.datasets[3].borderColor = "#1660A4";
        }
        window.rbaGraphChart.update();
      });
    },
    getDataSet: function () {
      let results = this.results;
      let marketResult = this.marketResult;
      
      let obj = {
        labels: this.$props.years,
        datasets: [
          {
            fill: true,
            backgroundColor: this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue" ? "rgba(22, 96, 164, .4)" : "rgba(14, 102, 81, .20)",
            borderColor: this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
                ? "#1660A4" : this.$appTheme() == "light-green" ? "#0E6651" : "#26AB8B",
            borderWidth: 4,
            radius: 0,
            data: marketResult.market ? marketResult.market.ending_balance : [],
            order: 2
          },
          {
            fill: true,
            backgroundColor: this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue" ? "rgba(8, 152, 117, .2)" : "rgba(22, 96, 164, .20)",
            hidden: this.marketAlone ? true : false,
            borderColor:this.$appTheme() == "light-blue" ? "#0E6651" :  this.$appTheme() == "dark-blue" ? "#26AB8B" : "#1660A4",
            borderWidth: 4,
            radius: 0,
            data: results.total_ending_balance ? results.total_ending_balance : [],
            order: 1
          },
          {
            yAxisID: "B",
            hidden: this.showDistribution ? false : true,
            backgroundColor: this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
                ? "#287BC7" : this.$appTheme() == "light-green" ? "#147D64" : "#26AB8B",
            borderColor: this.$appTheme() == "light-blue" || this.$appTheme() == "dark-blue"
                ? "#1660A4" : this.$appTheme() == "light-green" ? "#0E6651" : "#0E6651",
            radius: 2,
            data: results.market ? results.market.net_distribution : [],
            type: "bar",
            borderRadius: 2,
            barThickness: 13,
            borderWidth: 2,
            order: 0
          },
          {
            yAxisID: "B",
            hidden: !this.marketAlone && this.showDistribution ? false : true,
            backgroundColor: this.$appTheme() == "light-blue" ? "#147D64" : this.$appTheme() == "dark-blue" ? "#26AB8B" : "#287BC7",
            borderColor: this.$appTheme() == "light-blue" ? "#0E6651" : this.$appTheme() == "dark-blue" ? "#0E6651" : "#1660A4",
            radius: 2,
            data: results.buffer ? results.buffer.net_distribution : [],
            type: "bar",
            borderRadius: 2,
            barThickness: 13,
            borderWidth: 2,
            order: 0
          },
        ],
      };

      return obj;
    },
  },
  watch: {
    "$store.state.data.retirement_buffer.buffer_allocation_weight"(val) {
      this.bufferPercent = (Number(val) * 100).toFixed(0);
    },
    "$props.indexType"(e) {
      if (e !== "Historical Returns") {
        this.$store.dispatch("retirementBufferMarketAlone", true);
      }
    },
    results(e) {
      setTimeout(() => {
        this.setGraph();
      }, 100);
    },
    marketAlone(e) {
      if (e) {
        window.rbaGraphChart.setDatasetVisibility(0, true);
        window.rbaGraphChart.setDatasetVisibility(1, false);
        window.rbaGraphChart.setDatasetVisibility(2, false);
      } else {
        window.rbaGraphChart.setDatasetVisibility(0, true);
        window.rbaGraphChart.setDatasetVisibility(1, true);
        window.rbaGraphChart.setDatasetVisibility(2, true);
      }

      if (this.showDistribution) {
        window.rbaGraphChart.setDatasetVisibility(3, true);
        if (!e) {
          window.rbaGraphChart.setDatasetVisibility(4, true);
        } else {
          window.rbaGraphChart.setDatasetVisibility(4, false);
        }
      } else {
        window.rbaGraphChart.setDatasetVisibility(3, false);
        if (e) {
          window.rbaGraphChart.setDatasetVisibility(4, false);
        }
      }
      window.rbaGraphChart.update();
      // this.setGraph();
    },
    showDistribution(e) {
      if (e) {
        window.rbaGraphChart.setDatasetVisibility(3, true);
        if (!this.marketAlone) {
          window.rbaGraphChart.setDatasetVisibility(4, true);
        } else {
          window.rbaGraphChart.setDatasetVisibility(4, false);
        }
      } else {
        window.rbaGraphChart.setDatasetVisibility(3, false);
        if (this.marketAlone) {
          window.rbaGraphChart.setDatasetVisibility(4, false);
        }
      }
      window.rbaGraphChart.update();
    },
  },
  computed: {
    showDistribution() {
      return this.$store.state.data.retirement_buffer.show_distribution;
    },
    results() {
      return this.$store.getters.getRetirementBufferResults() || [];
    },
    results2() {
      return this.$store.state.data.retirement_buffer || [];
    },
    marketAlone() {
      return this.$store.state.data.retirement_buffer.market_alone;
    },
    marketResult() {
      let rb = this.$store.state.data.retirement_buffer;
      if (rb.show_distribution) {
        return (
          rb.auccumulation_results.market_only_with_distribution || {}
        );
      } else {
        return (
          rb.auccumulation_results.market_only_without_distribution ||
          {}
        );
      }
    },
    bufferResult() {
      let rb = this.$store.state.data.retirement_buffer;
      if (rb.show_distribution) {
        return (
          rb.auccumulation_results || {}
        );
      } else {
        return (
          rb.auccumulation_results ||
          {}
        );
      }
    },
  },
};
</script>
<style lang=""></style>
