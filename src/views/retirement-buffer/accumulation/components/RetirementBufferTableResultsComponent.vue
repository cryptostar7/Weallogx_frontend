<template lang="">
  <div
    class="tab-pane fade active show"
    id="v-pills-table"
    role="tabpanel"
    aria-labelledby="pills-home-tab"
  >
    <div
      :class="`nav market_buffer_account_tab table_top_tab nav-pills ${
        tableIndexType === 'Historical Returns' ? '' : 'pe-none'
      }`"
      role="tablist"
      aria-orientation="vertical"
    >
      <div
        data-bs-toggle="pill"
        data-bs-target="#v-pills-market"
        type="button"
        role="tab"
        aria-controls="v-pills-market"
        aria-selected="true"
        :class="marketAlone ? 'active' : ''"
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
      :class="`table_graph_tab_main table_tab_main ${
        marketAlone ? 'disable' : ''
      }`"
    >
      <slider-weight-range
        ref="sliderRangeRef"
        sliderType="result"
        :disabled="marketAlone"
        @setBuffer="(e) => (buffeAccountAllocation = e)"
      />
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="w-21 px-1 h-100">
            <!-- Filter Buttons -->
            <retirement-buffer-result-filter-options
              class="table_filter_btns"
              :disable="tableIndexType !== 'Historical Returns'"
            />
            <div class="table-wrapper-with-boarder">
              <table class="retirement_table_area">
                <thead>
                  <tr>
                    <th width="25%" @click="testFunction">
                      <p class="visible-hidden mb-1">Year</p>
                      <p class="fs-15">Year</p>
                    </th>
                    <th class="dropdown-table-head">
                      <p class="fs-15 mb-1">S&P 500</p>

                      <div class="select-menu table_select_menu">
                        <div class="select-btn">
                          <input
                            type="text"
                            class="sBtn-text"
                            :value="tableIndexType"
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
                            :class="`option ${
                              tableIndexType === item ? 'active' : ''
                            }`"
                            @click="tableIndexType = item"
                          >
                            <span class="option-text">{{ item }}</span>
                          </li>
                        </ul>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(item, index) in years" :key="index">
                    <td>{{ item }}</td>
                    <td :class="results.returns[index] < 0 ? 'red_text' : ''">
                      {{ Number((results.returns[index] * 100).toFixed(2)) }}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="w-25 px-1 common_each_table_div table_clr_1 h-100">
            <p class="each_table_heading">
              Market Account ${{ accountAllocation.market }}
            </p>
            <div class="table-wrapper-with-boarder">
              <table
                :class="`retirement_table_area ${
                  showDistribution ? '' : 'table_checkbox_off'
                }`"
              >
                <thead>
                  <tr>
                    <th>
                      <div class="button_cover mt-2px mb-1">
                        <div class="table_button button_r">
                          <input
                            type="checkbox"
                            class="button_checkbox table_Checkbox_btn"
                            id="table_Check_1"
                            :checked="showDistribution"
                            @click="showDistribution = !showDistribution"
                          />
                          <div class="button_knobs"></div>
                          <div class="button_layer"></div>
                        </div>
                      </div>
                      <p class="fs-15">Net Distribution</p>
                    </th>
                    <th class="dropdown-table-head align-bottom">
                      <p class="fs-15">Ending Balance</p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(item, index) in results.market.net_distribution"
                    :key="index"
                  >
                    <td :class="item > 0 ? 'green_text' : ''">
                      <p v-if="item">{{ $numFormatWithDollar(item) }}</p>
                      <p v-else class="visible-hidden m-0">null</p>
                    </td>
                    <td>
                      {{
                        $numFormatWithDollar(
                          results.market.ending_balance[index]
                        )
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="w-40 px-1 common_each_table_div table_clr_2 disable h-100"
          >
            <p class="each_table_heading">
              Buffer Account
              <span class="buffer_value">${{ accountAllocation.buffer }}</span>
            </p>
            <div class="table-wrapper-with-boarder">
              <table
                :class="`retirement_table_area ${
                  showDistribution ? '' : 'table_checkbox_off'
                }`"
              >
                <thead>
                  <tr>
                    <th class="align-bottom">
                      <p class="fs-15">Buffered Returns</p>
                    </th>
                    <th>
                      <div class="button_cover mt-2px mb-1">
                        <div class="table_button button_r">
                          <input
                            type="checkbox"
                            class="button_checkbox table_Checkbox_btn"
                            id="table_Check_2"
                            :checked="showDistribution"
                            @click="showDistribution = !showDistribution"
                          />
                          <div class="button_knobs"></div>
                          <div class="button_layer"></div>
                        </div>
                      </div>
                      <p class="fs-15">Net Distribution</p>
                    </th>
                    <th class="dropdown-table-head align-bottom">
                      <p class="fs-15">Ending Balance</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in results.buffer.buffer_returns"
                    :key="index"
                  >
                    <td :class="!item ? 'zero_text' : ''">
                      {{ Number((item * 100).toFixed(2)) }}%
                    </td>
                    <td
                      :class="
                        results.buffer.net_distribution[index]
                          ? 'green_text'
                          : 'red_text'
                      "
                    >
                      {{
                        $numFormatWithDollar(
                          results.buffer.net_distribution[index]
                        )
                      }}
                    </td>
                    <td>
                      {{
                        $numFormatWithDollar(
                          results.buffer.ending_balance[index]
                        )
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="w-14 px-1 common_each_table_div table_clr_3 disable h-100"
          >
            <p class="each_table_heading">Combined</p>
            <div class="table-wrapper-with-boarder">
              <table class="retirement_table_area">
                <thead>
                  <tr>
                    <th>
                      <p class="fs-15 combined-th">
                        Combined Ending <br />
                        Balance
                      </p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(item, index) in results.combined_ending_balance"
                    :key="index"
                  >
                    <td>{{ $numFormatWithDollar(item) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
      showDistribution: true,
      tableIndexType: "Historical Average",
      buffeAccountAllocation: 0,
    };
  },
  mounted() {
    this.updateSliderRange();
  },
  methods: {
    testFunction: function () {
      console.log(this.results);
      console.log(this.simulations);
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
  },
  watch: {
    tableIndexType(e) {
      if (e !== "Historical Returns") {
        this.$store.dispatch("retirementBufferMarketAlone", true);
        this.showDistribution = false;
      }
    },
    results() {
      this.updateSliderRange();
    },
  },
  computed: {
    marketAlone() {
      return this.$store.state.data.retirement_buffer.market_alone;
    },
    indexTypes() {
      return ["Historical Average", "Historical Returns"];
    },
    results() {
      return this.$store.getters.getRetirementBufferResults();
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
