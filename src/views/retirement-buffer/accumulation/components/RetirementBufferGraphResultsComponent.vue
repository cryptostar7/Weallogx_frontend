<template lang="">
  <div
    class="tab-pane fade"
    id="v-pills-graph"
    role="tabpanel"
    aria-labelledby="pills-home-tab"
  >
    <div
      :class="`nav market_buffer_account_tab graph_top_tab nav-pills ${
        graphIndexType === 'Historical Returns' ? '' : 'pe-none'
      }`"
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
        :class="marketAlone ? '' : 'active'"
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
        @setBuffer="(e) => (buffeAccountAllocation = e)"
      />
      <!-- Filter Buttons -->
      <retirement-buffer-result-filter-options
        class="graph_filter_btns"
        :disable="graphIndexType !== 'Historical Returns'"
      />

      <div class="graph_all_buttons">
        <div class="graph_select_div">
          <span class="sp_text">S&P 500</span>
          <div class="select-menu graph_select_menu">
            <div class="select-btn">
              <input
                type="text"
                class="sBtn-text"
                :value="graphIndexType"
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
                v-for="(item, index) in indexTypes"
                :key="index"
                :class="`option ${graphIndexType === item ? 'active' : ''}`"
                @click="graphIndexType = item"
              >
                <span class="option-text">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="common_each_graph_div graph_clr_1">
          Market Account ${{ accountAllocation.market || 0 }}
        </div>
        <div class="common_each_graph_div graph_clr_2 disable">
          Buffer Account ${{ accountAllocation.buffer || 0 }}
        </div>
        <div class="common_each_graph_div graph_clr_3 disable">Combined</div>
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
          graphIndexType === 'Historical Returns' ? '' : 'disable pe-none'
        }`"
      >
        <label for="net_distribution">Net Distributionsss</label>
        <div class="table_button button_r">
          <input
            type="checkbox"
            class="button_checkbox"
            id="net_distribution"
            v-model="showDistribution"
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
  components: { SliderWeightRange, CommonTooltipSvg, RetirementBufferResultFilterOptions },
  data() {
    return {
      showDistribution: 0,
      graphIndexType: "Historical Average",
      buffeAccountAllocation: 0,
    };
  },
  mounted() {
    this.setGraph();
    this.updateSliderRange();
  },
  methods: {
    setGraph: function () {
      let graphData = this.getDataSet();
      let maxAcc1 = Math.max(
        ...[
          Math.max(...(graphData.datasets[0].data || [])),
          Math.max(...(graphData.datasets[1].data || [])),
          Math.max(...(graphData.datasets[2].data || [])),
        ]
      );

      let maxAcc2 = Math.max(
        ...[
          Math.max(...(graphData.datasets[3].data || [])),
          Math.max(...(graphData.datasets[4].data || [])),
        ]
      );

      console.log("graphData");
      console.log(graphData);

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
              max: this.$roundFigureNum(Number(maxAcc1)).toFixed(0),

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
              max: this.$roundFigureNum(Number(maxAcc2 * 2)).toFixed(0),

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
    },
    getDataSet: function () {
      let results = this.results;

      let obj = {
        labels: this.years,
        datasets: [
          {
            borderColor: "#0E6651",
            borderWidth: 4,
            radius: 0,
            data: results.market.ending_balance,
          },
          {
            hidden: this.graphIndexType === "Historical Returns" ? false : true,
            borderColor: "#1660A4",
            borderWidth: 4,
            radius: 0,
            data: results.buffer.ending_balance,
          },
          {
            hidden: this.graphIndexType === "Historical Returns" ? false : true,
            borderColor: "#9D2B2B",
            borderWidth: 4,
            radius: 0,
            data: results.combined_ending_balance,
          },
          {
            yAxisID: "B",
            hidden: this.showDistribution ? false : true,
            backgroundColor: "rgba(20, 125, 100, 0.60)",
            borderColor: "rgba(14, 102, 81, 0.60)",
            radius: 2,
            data: results.market.net_distribution,
            type: "bar",
            borderRadius: 2,
            barThickness: 13,
          },
          {
            yAxisID: "B",
            hidden: this.showDistribution ? false : true,
            backgroundColor: "#1660A4",
            borderColor: "#142F62",
            radius: 2,
            data: results.buffer.net_distribution,
            type: "bar",
            borderRadius: 2,
            barThickness: 13,
          },
        ],
      };

      return obj;
    },
    updateSliderRange: function () {
      let obj = this.results;
      if (obj && obj.inputs) {
        let marketValue = 50;
        let bufferValue = 50;

        if (!this.marketAlone) {
          marketValue =
            100 -
            Number((obj.inputs.buffer_account_allocation * 100).toFixed(0));

          bufferValue = Number(
            (obj.inputs.buffer_account_allocation * 100).toFixed(0)
          );
        }

        if (obj && obj.inputs) {
          this.buffeAccountAllocation = obj.inputs.buffer_account_allocation;
        }

        this.$refs.sliderRangeRef.setMarketAccountAllocation(marketValue); // set market account allocation value in slider range
        this.$refs.sliderRangeRef.setBufferAccountAllocation(bufferValue); // set buffer account allocation value in slider range
      }
    },
    testFunction: function () {
      this.setGraph();
    },
    testFunction2: function () {
      console.log("line hidden");
    },
  },
  watch: {
    graphIndexType(e) {
      if (e !== "Historical Returns") {
        this.$store.dispatch("retirementBufferMarketAlone", true);
        this.showDistribution = false;
      }else{
        window.rbaGraphChart.setDatasetVisibility(0, true);
        window.rbaGraphChart.setDatasetVisibility(1, true);
        window.rbaGraphChart.setDatasetVisibility(2, true);
      }
    },
    results(e) {
      this.setGraph();
      this.updateSliderRange();
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
        window.rbaGraphChart.setDatasetVisibility(4, true);
      } else {
        window.rbaGraphChart.setDatasetVisibility(3, false);
        window.rbaGraphChart.setDatasetVisibility(4, false);
      }

      window.rbaGraphChart.update();
    },
    showDistribution(e) {
      if (e) {
        window.rbaGraphChart.setDatasetVisibility(3, true);
        window.rbaGraphChart.setDatasetVisibility(4, true);
      } else {
        window.rbaGraphChart.setDatasetVisibility(3, false);
        window.rbaGraphChart.setDatasetVisibility(4, false);
      }
      window.rbaGraphChart.update();
    },
  },
  computed: {
    indexTypes() {
      return ["Historical Average", "Historical Returns"];
    },
    results() {
      return this.$store.getters.getRetirementBufferResults();
    },
    marketAlone() {
      return this.$store.state.data.retirement_buffer.market_alone;
    },
    years() {
      let array = [];
      if (this.results && this.results.inputs) {
        for (
          let index = this.results.inputs.start_year;
          index <= this.results.inputs.end_year;
          index++
        ) {
          array.push(index);
        }
      }
      return array;
    },
    accountAllocation() {
      let account_value = this.results.inputs
        ? this.results.inputs.account_value
        : 0;
      let buffer_account_allocation = this.buffeAccountAllocation;

      let marketValue =
        100 - Number((buffer_account_allocation * 100).toFixed(0));

      let bufferValue = Number((buffer_account_allocation * 100).toFixed(0));

      // Market Account Value
      let mav =
        Number(
          ((account_value / 100) * marketValue).toFixed(0)
        ).toLocaleString() || 0;

      // Buffer Account Value
      let bav =
        Number(
          ((account_value / 100) * bufferValue).toFixed(0)
        ).toLocaleString() || 0;

      return { market: mav, buffer: bav };
    },
  },
};
</script>
<style lang=""></style>
