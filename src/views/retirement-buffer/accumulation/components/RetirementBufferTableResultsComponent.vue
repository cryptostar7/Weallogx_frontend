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
              <table class="retirement_table_area sticky-header first">
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
                :class="`retirement_table_area sticky-header ${
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
                :class="`retirement_table_area sticky-header ${
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
              <table class="retirement_table_area sticky-header">
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

let tables = [];
let isPresentationClicked = false;
function getOffset(element) {
  var x = 0;
  var y = 0;
  while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
    x += element.offsetLeft - element.scrollLeft;
    y += element.offsetTop - element.scrollTop;
    element = element.offsetParent;
  }
  return { top: y, left: x };
}

function Table(element) {
  this.element = element;
  this.element.querySelectorAll("thead").forEach(thead => {
    if (thead.classList.contains("cloned")) {
      thead.remove();
    }
  });
  this.originalHeader = element.getElementsByTagName("thead")[0];
  this.floatingHeader = this.originalHeader.cloneNode(true);
  this.top = 0;
  this.bottom = 0;
  this.originalThs = this.originalHeader.getElementsByTagName("th");
  this.floatingThs = this.floatingHeader.getElementsByTagName("th");

  if (!this.element.style.position) {
    this.element.style.position = "relative";
  }
  this.floatingHeader.setAttribute("aria-hidden", "true");
  this.floatingHeader.classList.add("cloned");
  this.floatingHeader.style.position = "absolute";
  this.floatingHeader.style.top = "0";

  this.refreshHeaderSize();
  this.attachFloatHeader();
}

Table.prototype.refreshHeaderSize = function() {
  var offset = getOffset(this.element);
  var trs = this.element.getElementsByTagName("tr");
  var padding;
  this.top = offset.top;
  this.bottom = this.element.offsetHeight - trs[trs.length - 1].offsetHeight;
  for (var i = 0; i < this.originalThs.length; i++) {
    var th = this.originalThs[i];
    this.floatingThs[i].style.width = Math.ceil(th.offsetWidth) + 1 + "px";
    this.floatingThs[i].style.height = th.offsetHeight + "px";
  }
};

Table.prototype.refreshHeaderWidth = function() {
  for (var i = 0; i < this.originalThs.length; i++) {
    var th = this.originalThs[i];
    this.floatingThs[i].style.width = Math.ceil(th.offsetWidth) + 1 + "px";
    this.floatingThs[i].style.height = th.offsetHeight + "px";
  }
};

Table.prototype.attachFloatHeader = function() {
  this.element.insertBefore(this.floatingHeader, this.element.firstChild);
};

export default {
  components: {
    SliderWeightRange,
    CommonTooltipSvg,
    RetirementBufferResultFilterOptions,
  },
  props: ["indexType", "accountAllocation", "years", "indexTypes", "tabType", "sidebar"],
  emits: ["setIndexType"],
  mounted() {
    setTimeout(() => {
      this.init();
    }, 3000);

    window.addEventListener("scroll", this.windowScroll);
    const sidebar = document.querySelector(".indexSidebar");
    sidebar.addEventListener("click", (e) => {
      if(e.target.closest(".sidebar-arrow-1")){
        this.refreshHeaderSizes();
      }
    });
  },
  watch: {
    "$props.indexType"(e) {
      console.log("indextype")
      if (e !== "Historical Returns") {
        this.$store.dispatch("retirementBufferMarketAlone", true);
      }
    },
    // "$props.sidebar"(value) {
    //   this.handleSidebar(value);
    // },
    "$props.tabType"(e) {
      console.log(e);
      if(e == "table"){
        setTimeout(() => {
          this.refreshHeaderSizes();
        }, 250);        
      }
    }
  },
  updated() {
    this.init();
  },
  methods: {
    init: function() {
      tables = [];
      var matches = document.querySelectorAll("table.sticky-header");
      for (var i = 0; i < matches.length; i++) {
        if (matches[i].tagName === "TABLE") {
          tables.push(new Table(matches[i]));
        }
      }
    },
    refreshHeaderSizes: function() {
      for (var i = 0; i < tables.length; i++) {
        tables[i].refreshHeaderSize();
      }
      // if (this.$store.state.app.presentation_mode) {
      //   for (var i = 0; i < tables.length; i++) {
      //     tables[i].refreshHeaderSize();
      //   }
      //   return;
      // }
    },
    getScrollTop: function() {
      if (typeof window.pageYOffset !== "undefined") {
        return window.pageYOffset;
      }
      var docElement = document.documentElement;
      if (!docElement.clientHeight) {
        docElement = document.body;
      }
      return docElement.scrollTop;
    },
    windowScroll: function() {
      for (var i = 0; i < tables.length; i++) {
        var windowTop = this.getScrollTop();
        if (windowTop > tables[i].top) {
          tables[i].floatingHeader.style.top =
            Math.min(windowTop - tables[i].top, tables[i].bottom) + (isPresentationClicked ? 0 : 38) + "px";
        } else {
          tables[i].floatingHeader.style.top = "0";
        }
      }
    },
    handleSidebar: function(status) {
      console.log(status);
      this.refreshHeaderSizes();
      return status;
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
