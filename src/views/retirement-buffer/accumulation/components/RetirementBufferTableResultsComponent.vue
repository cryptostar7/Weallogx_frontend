<template lang="">
  <div
    class="tab-pane fade active show"
    id="v-pills-table"
    role="tabpanel"
    aria-labelledby="pills-home-tab"
  >
    <div
      :class="`nav market_buffer_account_tab table_top_tab nav-pills ${
        indexType === 'Historical Returns' ? '' : 'pe-none'
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
        :class="`rb-tab ${marketAlone ? 'active' : ''}`"
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
        :class="`rb-tab ${marketAlone ? '' : 'active'} ${
          indexType === 'Historical Average' ? 'disable' : ''
        }`"
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
        @setBuffer="(e) => $store.dispatch('updateBuffeAccountAllocation', e)"
      />
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="w-21 px-1 h-100">
            <!-- Filter Buttons -->
            <retirement-buffer-result-filter-options
              class="table_filter_btns"
              ref="filterResultRef"
              :disable="indexType !== 'Historical Returns'"
            />
            <div class="table-wrapper-with-boarder">
              <table class="retirement_table_area first">
                <thead>
                  <tr>
                    <th width="25%">
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
                            :class="`option ${
                              indexType === item ? 'active' : ''
                            }`"
                            @click="$emit('setIndexType', item)"
                          >
                            <span class="option-text">{{ item }}</span>
                          </li>
                        </ul>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(item, index) in $props.years" :key="index">
                    <td>{{ item }}</td>
                    <td :class="returns[index] < 0 ? 'red_text' : ''">
                      {{ Number((returns[index] * 100).toFixed(2)) }}%
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
                            @click="
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
                      <p class="fs-15">Net Distribution</p>
                    </th>
                    <th class="dropdown-table-head align-bottom">
                      <p class="fs-15">Ending Balance</p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(item, index) in $props.years" :key="index">
                    <td
                      v-if="results.market"
                      :class="
                        results.market.net_distribution[index] > 0
                          ? 'green_text'
                          : ''
                      "
                    >
                      <p v-if="results.market.net_distribution[index]">
                        {{
                          $numFormatWithDollar(
                            results.market.net_distribution[index]
                          )
                        }}
                      </p>
                      <p v-else class="visible-hidden m-0">null</p>
                    </td>
                    <td v-else>&nbsp;</td>
                    <td v-if="results.market">
                      {{
                        $numFormatWithDollar(
                          results.market.ending_balance[index]
                        )
                      }}
                    </td>
                    <td v-else>&nbsp;</td>
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
              <span v-if="accountAllocation.bonus">(including {{ accountAllocation.bonus }}% bonus) </span>
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
                            @click="
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
                      <p class="fs-15">Net Distribution</p>
                    </th>
                    <th class="dropdown-table-head align-bottom">
                      <p class="fs-15">Ending Balance</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in $props.years" :key="index">
                    <td
                      v-if="results.buffer"
                      :class="
                        !results.buffer.buffer_returns[index] ? 'zero_text' : ''
                      "
                    >
                      {{
                        Number(
                          (results.buffer.buffer_returns[index] * 100).toFixed(
                            2
                          )
                        )
                      }}%
                    </td>
                    <td v-else class="zero_text"></td>
                    <td
                      v-if="results.buffer"
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
                    <td v-else>&nbsp;</td>
                    <td v-if="results.buffer">
                      {{
                        $numFormatWithDollar(
                          results.buffer.ending_balance[index]
                        )
                      }}
                    </td>
                    <td v-else>&nbsp;</td>
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
                  <tr v-for="(item, index) in years" :key="index">
                    <td v-if="results.total_ending_balance">
                      {{
                        $numFormatWithDollar(
                          results.total_ending_balance[index]
                        ) || "&nbsp;"
                      }}
                    </td>
                    <td v-else>&nbsp;</td>
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
  props: ["indexType", "accountAllocation", "years", "indexTypes"],
  emits: ["setIndexType"],
  watch: {
    "$props.indexType"(e) {
      if (e !== "Historical Returns") {
        this.$store.dispatch("retirementBufferMarketAlone", true);
      }
    },
  },
  computed: {
    showDistribution() {
      return this.$store.state.data.retirement_buffer.show_distribution;
    },
    marketAlone() {
      return this.$store.state.data.retirement_buffer.market_alone;
    },
    results() {
      return this.$store.getters.getRetirementBufferResults();
    },
    returns() {
      return (
        this.$store.state.data.retirement_buffer.auccumulation_results
          .returns || []
      );
    },
  },
};
</script>
<style lang=""></style>
