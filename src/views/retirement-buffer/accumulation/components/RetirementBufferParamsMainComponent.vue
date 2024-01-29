<template lang="">
  <main class="right-area">
    <div class="right-area-inner">
      <div class="right-area-wrapper">
        <section class="padding_right_section">
          <div class="common_box_div">
            <div class="common_heading_div">
              <h1>Retirement Buffer</h1>
            </div>
            <div class="after_heading_div">
              <div class="accumulation_strategy_div">
                <div class="accumulation_strategy_box">
                  <div class="accumulation_strategy_box_head">
                    <h2>Accumulation Strategy</h2>
                    <img
                      src="@/assets/images/icons/analytics.svg"
                      alt="Analytics"
                    />
                  </div>
                  <div class="accumulation_strategy_inner_box">
                    <p class="form_section_para">Account Details</p>
                    <div class="form_section_input_row">
                      <div class="form_section_each_inputs width25">
                        <div class="form_section_label_div">
                          <label for="total-balance" class="main_label"
                            >Total Balance</label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Total Balance"
                            class="dollar_inp"
                            id="total-balance"
                            ref="totalBalanceRef"
                          />
                          <span class="dollar">$</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width25">
                        <div class="form_section_label_div">
                          <label for="account-type" class="main_label"
                            >Account Type</label
                          >
                        </div>
                        <div class="select-menu accumulation_select_menu">
                          <div class="select-btn">
                            <input
                              type="text"
                              class="sBtn-text"
                              value="Taxable"
                              readonly="true"
                              id="account-type"
                            />
                            <i
                              ><img
                                src="@/assets/images/icons/select-chevron.svg"
                                alt="Chevron"
                            /></i>
                          </div>
                          <ul class="options">
                            <li class="option active">
                              <span class="option-text">Taxable</span>
                            </li>
                            <li class="option">
                              <span class="option-text">Pre-tax</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width25">
                        <div class="form_section_label_div">
                          <label for="annual-ditribution" class="main_label"
                            >Annual Distribution</label
                          >
                          <div class="label-right-div">
                            <label for="selectDollar" class="label_checkbox">
                              <input
                                type="radio"
                                name="annual-ditribution"
                                checkBoxAttr="1"
                                id="selectDollar"
                                hidden
                                checked
                              />
                              <label for="selectDollar"></label>
                              <span>$</span>
                            </label>
                            <label for="selectPercent" class="label_checkbox">
                              <input
                                type="radio"
                                name="annual-ditribution"
                                checkBoxAttr="2"
                                id="selectPercent"
                                hidden
                              />
                              <label for="selectPercent"></label>
                              <span>%</span>
                            </label>
                          </div>
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Total Balance"
                            class="dollar_inp multiTypeInp_1"
                            id="annual-ditribution"
                          />
                          <span class="dollar">$</span>
                        </div>
                        <div class="form_section_input_div d-none">
                          <input
                            type="number"
                            placeholder="Total Balance"
                            class="percent_inp multiTypeInp_2"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width25">
                        <div class="form_section_label_div">
                          <label for="tax-rate" class="main_label"
                            >Tax Rate
                            <span class="optional">(optional)</span></label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="number"
                            placeholder="Total Balance"
                            class="percent_inp"
                            id="tax-rate"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                    </div>
                    <p class="form_section_para mt-3">Allocation</p>
                    <div class="form_section_input_row">
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="market-account-value" class="main_label"
                            >Market Account Value</label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Total Balance"
                            class="dollar_inp"
                            id="market-account-value"
                            ref="marketValueRef"
                          />
                          <span class="dollar">$</span>
                        </div>
                      </div>

                      <!-- Slider Weight Range Start -->

                      <slider-weight-range
                        ref="sliderRangeRef"
                        @changeMarketValue="changeMarketValue"
                        @changeBufferValue="changeBufferValue"
                      />

                      <!-- Slider Weight Range End -->
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="buffer-account-value" class="main_label"
                            >Buffer Account Value</label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Total Balance"
                            class="dollar_inp"
                            id="buffer-account-value"
                            ref="bufferValueRef"
                          />
                          <span class="dollar">$</span>
                        </div>
                      </div>
                    </div>
                    <p class="form_section_para mt-3">Buffer Account</p>
                    <div class="form_section_input_row">
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="cap-rate" class="main_label"
                            >Cap Rate
                            <span
                              ><svg
                                class="label-common-tooltip-svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="Group 1968">
                                  <circle
                                    id="Ellipse 190"
                                    cx="6.5"
                                    cy="6.5"
                                    r="6.5"
                                    fill="#D0D0D0"
                                  ></circle>
                                  <circle
                                    id="Ellipse 191"
                                    cx="6.5"
                                    cy="3.5"
                                    r="1"
                                    fill="white"
                                  ></circle>
                                  <rect
                                    id="Rectangle 753"
                                    x="5.75"
                                    y="5.5"
                                    width="1.5"
                                    height="5"
                                    rx="0.75"
                                    fill="white"
                                  ></rect>
                                </g>
                              </svg>
                              <span
                                >What is the buffer account’s cap rate? If none,
                                leave blank.</span
                              >
                            </span>
                          </label>
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Cap Rate"
                            class="percent_inp"
                            id="cap-rate"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="margin" class="main_label"
                            >Margin
                            <span
                              ><svg
                                class="label-common-tooltip-svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="Group 1968">
                                  <circle
                                    id="Ellipse 190"
                                    cx="6.5"
                                    cy="6.5"
                                    r="6.5"
                                    fill="#D0D0D0"
                                  ></circle>
                                  <circle
                                    id="Ellipse 191"
                                    cx="6.5"
                                    cy="3.5"
                                    r="1"
                                    fill="white"
                                  ></circle>
                                  <rect
                                    id="Rectangle 753"
                                    x="5.75"
                                    y="5.5"
                                    width="1.5"
                                    height="5"
                                    rx="0.75"
                                    fill="white"
                                  ></rect>
                                </g></svg><span
                                >If your buffer account uses a margin or spread,
                                enter it here. If none, leave blank.</span
                              ></span
                            ></label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Cap Rate"
                            class="percent_inp"
                            id="margin"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="per-rate" class="main_label"
                            >Par Rate</label
                          >
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Cap Rate"
                            class="percent_inp"
                            id="per-rate"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="floor" class="main_label">Floor</label>
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="text"
                            placeholder="Cap Rate"
                            class="percent_inp"
                            id="floor"
                            value="0"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                      <div class="form_section_each_inputs width20">
                        <div class="form_section_label_div">
                          <label for="premium-bonus" class="main_label"
                            >Premium Bonus <span class="optional">optional</span
                            ><span
                              ><svg
                                class="label-common-tooltip-svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="Group 1968">
                                  <circle
                                    id="Ellipse 190"
                                    cx="6.5"
                                    cy="6.5"
                                    r="6.5"
                                    fill="#D0D0D0"
                                  ></circle>
                                  <circle
                                    id="Ellipse 191"
                                    cx="6.5"
                                    cy="3.5"
                                    r="1"
                                    fill="white"
                                  ></circle>
                                  <rect
                                    id="Rectangle 753"
                                    x="5.75"
                                    y="5.5"
                                    width="1.5"
                                    height="5"
                                    rx="0.75"
                                    fill="white"
                                  ></rect>
                                </g></svg><span
                                >If your buffer account offers a an upfront
                                premium bonus, enter that amount here.</span
                              ></span
                            >
                          </label>
                        </div>
                        <div class="form_section_input_div">
                          <input
                            type="number"
                            placeholder="Total Balance"
                            class="percent_inp"
                            id="premium-bonus"
                          />
                          <span class="percent">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="run_btn /*disable*/"
                  @click="
                    $router.push('/retirement-buffer/accumulation/result')
                  "
                >
                  Run
                </button>
                <button class="reset_btn">reset</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
<script>
import { getNumber } from "../../../../services/helper";
import SliderWeightRange from "../../common-components/SliderWeightRange.vue";
export default {
  components: { SliderWeightRange },
  methods: {
    changeMarketValue: function (e) {
      let maInput = this.$refs.marketValueRef;
      maInput.value = (
        (getNumber(this.$refs.totalBalanceRef.value) * e) /
        100
      ).toFixed(0);
      this.updateTextView(maInput);
    },
    changeBufferValue: function (e) {
      let bfInput = this.$refs.bufferValueRef;
      bfInput.value = (
        (getNumber(this.$refs.totalBalanceRef.value) * e) /
        100
      ).toFixed(0);
      this.updateTextView(bfInput);
    },
    // Add Comma after 3 digit
    updateTextView: function (_obj) {
      var num = getNumber(_obj.value);
      if (num == 0) {
        _obj.value = "";
      } else {
        _obj.value = num.toLocaleString();
      }
    },
  },
};
</script>
<style lang=""></style>
