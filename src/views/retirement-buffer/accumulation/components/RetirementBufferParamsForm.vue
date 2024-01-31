<template lang="">
  <div class="after_heading_div">
    <div class="accumulation_strategy_div">
      <div class="accumulation_strategy_box">
        <div class="accumulation_strategy_box_head">
          <h2>Accumulation Strategy</h2>
          <img src="@/assets/images/icons/analytics.svg" alt="Analytics" />
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
                  v-model="totalBalance"
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
                  <li
                    :class="`option ${
                      accountType === 'taxable' ? 'active' : ''
                    }`"
                    @click="accountType === 'taxable'"
                  >
                    <span class="option-text">Taxable</span>
                  </li>
                  <li
                    :class="`option ${
                      accountType === 'pretax' ? 'active' : ''
                    }`"
                    @click="accountType === 'pretax'"
                  >
                    <span class="option-text">Pre-tax</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="form_section_each_inputs width25">
              <div class="form_section_label_div">
                <label for="annual-distribution" class="main_label"
                  >Annual Distribution</label
                >
                <div class="label-right-div">
                  <label for="selectDollar" class="label_checkbox">
                    <input
                      type="radio"
                      name="annual-distribution"
                      checkBoxAttr="1"
                      id="selectDollar"
                      hidden
                      :checked="annualDistributionType === 'dollar'"
                      @click="annualDistributionType = 'dollar'"
                    />
                    <label for="selectDollar"></label>
                    <span>$</span>
                  </label>
                  <label for="selectPercent" class="label_checkbox">
                    <input
                      type="radio"
                      name="annual-distribution"
                      checkBoxAttr="2"
                      id="selectPercent"
                      hidden
                      :checked="annualDistributionType === 'percent'"
                      @click="annualDistributionType = 'percent'"
                    />
                    <label for="selectPercent"></label>
                    <span>%</span>
                  </label>
                </div>
              </div>
              <div
                :class="`form_section_input_div ${
                  annualDistributionType === 'dollar' ? '' : 'd-none'
                }`"
              >
                <input
                  type="text"
                  placeholder="Annual Distribution"
                  class="dollar_inp"
                  id="annual-distribution"
                  ref="annualDistributionDollarRef"
                  v-model="annualDistribution"
                />
                <span class="dollar">$</span>
              </div>
              <div
                :class="`form_section_input_div ${
                  annualDistributionType === 'percent' ? '' : 'd-none'
                }`"
              >
                <input
                  type="number"
                  placeholder="Annual Distribution"
                  class="percent_inp"
                  ref="annualDistributionPercentRef"
                  v-model="annualDistribution"
                />
                <span class="percent">%</span>
              </div>
            </div>
            <div class="form_section_each_inputs width25">
              <div class="form_section_label_div">
                <label for="tax-rate" class="main_label"
                  >Tax Rate <span class="optional">(optional)</span></label
                >
              </div>
              <div class="form_section_input_div">
                <input
                  type="number"
                  placeholder="Total Balance"
                  class="percent_inp"
                  id="tax-rate"
                  ref="taxRateRef"
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
                  readonly
                  ref="marketValueRef"
                />
                <span class="dollar">$</span>
              </div>
            </div>

            <!-- Slider Weight Range Start -->

            <slider-weight-range
              ref="sliderRangeRef"
              :disabled="totalBalance ? false : true"
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
                  readonly
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
                    ><common-tooltip-svg />
                    <span
                      >What is the buffer account’s cap rate? If none, leave
                      blank.</span
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
                  ref="capRateRef"
                />
                <span class="percent">%</span>
              </div>
            </div>
            <div class="form_section_each_inputs width20">
              <div class="form_section_label_div">
                <label for="margin" class="main_label"
                  >Margin
                  <span>
                    <common-tooltip-svg />
                    <span
                      >If your buffer account uses a margin or spread, enter it
                      here. If none, leave blank.</span
                    ></span
                  ></label
                >
              </div>
              <div class="form_section_input_div">
                <input
                  type="text"
                  placeholder="Margin"
                  class="percent_inp"
                  id="margin"
                  ref="marginRef"
                />
                <span class="percent">%</span>
              </div>
            </div>
            <div class="form_section_each_inputs width20">
              <div class="form_section_label_div">
                <label for="per-rate" class="main_label">Par Rate</label>
              </div>
              <div class="form_section_input_div">
                <input
                  type="text"
                  placeholder="Par Rate"
                  class="percent_inp"
                  id="per-rate"
                  ref="parRateRef"
                  v-model="parRate"
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
                  placeholder="Floor"
                  class="percent_inp"
                  id="floor"
                  ref="floorRef"
                  v-model="floor"
                />
                <span class="percent">%</span>
              </div>
            </div>
            <div class="form_section_each_inputs width20">
              <div class="form_section_label_div">
                <label for="premium-bonus" class="main_label"
                  >Premium Bonus <span class="optional">optional</span
                  ><span
                    ><common-tooltip-svg />
                    <span
                      >If your buffer account offers a an upfront premium bonus,
                      enter that amount here.</span
                    ></span
                  >
                </label>
              </div>
              <div class="form_section_input_div">
                <input
                  type="number"
                  placeholder="Premium Bonus"
                  class="percent_inp"
                  id="premium-bonus"
                  ref="premiumBonusRef"
                />
                <span class="percent">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        :class="`run_btn ${allowSubmit ? '' : 'disable'}`"
        @click="submitHandler()"
      >
        Run
      </button>
      <button class="reset_btn" @click="resetForm()">Reset</button>
    </div>
  </div>
</template>
<script>
import { getNumber, authHeader } from "../../../../services/helper";
import SliderWeightRange from "../../common-components/SliderWeightRange.vue";
import CommonTooltipSvg from "../../../components/common/CommonTooltipSvg.vue";

import { post } from "../../../../network/requests";
import { getUrl } from "../../../../network/url";
export default {
  components: { SliderWeightRange, CommonTooltipSvg },
  data() {
    return {
      accountType: "taxable",
      totalBalance: "",
      annualDistribution: "",
      parRate: "100",
      floor: "0",
      annualDistributionType: "dollar",
    };
  },
  mounted() {
    let maInput = this.$refs.marketValueRef;
    let bfInput = this.$refs.bufferValueRef;

    this.$refs.totalBalanceRef.addEventListener("input", (e) => {
      let leftSpanValue =
        this.$refs.sliderRangeRef.getMarketAccountAllocation();
      let val = getNumber(e.target.value);
      bfInput.value = val - ((val * leftSpanValue) / 100).toFixed(0);
      this.updateTextView(bfInput);
      maInput.value = ((val * leftSpanValue) / 100).toFixed(0);
      this.updateTextView(maInput);
    });

    let rb_results = localStorage.getItem("rb_result");
    if (rb_results) {
      rb_results = JSON.parse(rb_results);
      this.setFormInputs(rb_results.inputs);
    }
    console.log(rb_results);
  },
  methods: {
    // Update the market account input value
    changeMarketValue: function (e) {
      let maInput = this.$refs.marketValueRef;
      maInput.value = (
        (getNumber(this.$refs.totalBalanceRef.value) * e) /
        100
      ).toFixed(0);
      this.updateTextView(maInput);
    },
    // Update the buffer account input value
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
    // Return form inputs data
    getFormInputs: function () {
      let data = {};
      data.account_value = getNumber(this.$refs.totalBalanceRef.value);
      data.buffer_account_allocation =
        this.$refs.sliderRangeRef.getBufferAccountAllocation() / 100;
      if (this.annualDistributionType === "dollar") {
        data.annual_distribution = getNumber(
          this.$refs.annualDistributionDollarRef.value
        );
      } else {
        data.annual_distribution =
          getNumber(this.$refs.annualDistributionPercentRef.value) / 100;
      }
      data.tax_rate = getNumber(this.$refs.taxRateRef.value) / 100;
      data.floor = getNumber(this.$refs.floorRef.value) / 100;
      data.par_rate = getNumber(this.$refs.parRateRef.value) / 100;
      data.margin = getNumber(this.$refs.marginRef.value) / 100;
      data.cap = getNumber(this.$refs.capRateRef.value) / 100;
      data.bonus = getNumber(this.$refs.premiumBonusRef.value) / 100;
      return data;
    },
    // Set form inputs data
    setFormInputs: function (data) {
      this.totalBalance = data.account_value.toLocaleString();
      this.$refs.totalBalanceRef.value = this.totalBalance;
      this.annualDistribution = data.annual_distribution.toLocaleString();
      this.$refs.annualDistributionDollarRef.value = this.annualDistribution;
      this.$refs.taxRateRef.value = Number((data.tax_rate * 100).toFixed(2));
      this.floor = Number((data.floor * 100).toFixed(2)) || "0";
      this.$refs.floorRef.value = this.floor;
      this.parRate = Number((data.par_rate * 100).toFixed(2));
      this.$refs.parRateRef.value = this.parRate;
      this.$refs.marginRef.value = Number((data.margin * 100).toFixed(2));
      this.$refs.capRateRef.value = Number((data.cap * 100).toFixed(2));
      this.$refs.premiumBonusRef.value = Number((data.bonus * 100).toFixed(2));

      let marketValue =
        100 - Number((data.buffer_account_allocation * 100).toFixed(0));

      let bufferValue = Number(
        (data.buffer_account_allocation * 100).toFixed(0)
      );

      // Market Account Value
      let mav = Number(
        ((data.account_value / 100) * marketValue).toFixed(0)
      ).toLocaleString();

      // Buffer Account Value
      let bav = Number(
        ((data.account_value / 100) * bufferValue).toFixed(0)
      ).toLocaleString();

      this.$refs.marketValueRef.value = mav; // set market account value for readonly input
      this.$refs.bufferValueRef.value = bav; // set buffer account value for readonly input
      this.$refs.sliderRangeRef.setMarketAccountAllocation(marketValue); // set market account allocation value in slider range
      this.$refs.sliderRangeRef.setBufferAccountAllocation(bufferValue); // set buffer account allocation value in slider range
    },
    resetForm: function () {
      this.totalBalance = "";
      this.$refs.totalBalanceRef.value = "";
      this.annualDistribution = "";
      this.$refs.annualDistributionDollarRef.value = "";
      this.$refs.annualDistributionPercentRef.value = "";
      this.$refs.taxRateRef.value = "";
      this.floor = "0";
      this.$refs.floorRef.value = "0";
      this.parRate = "100";
      this.$refs.parRateRef.value = "100";
      this.$refs.marginRef.value = "";
      this.$refs.capRateRef.value = "";
      this.$refs.premiumBonusRef.value = "";
      this.$refs.marketValueRef.value = "";
      this.$refs.bufferValueRef.value = "";
      this.$refs.sliderRangeRef.resetSlider();
    },
    submitHandler: function () {
      console.log(this.getFormInputs());
      this.$store.dispatch("loader", true);
      post(
        `${getUrl("retirement-buffer")}${this.accountType}`,
        this.getFormInputs(),
        authHeader()
      )
        .then((response) => {
          console.log(response.data);
          this.$store.dispatch("loader", false);
          localStorage.setItem("rb_account_type", this.accountType); // Save account type field value in local storage
          localStorage.setItem("rb_distribution_type", this.accountType); // Save account distribution type value in local storage
          localStorage.setItem("rb_result", JSON.stringify(response.data)); // Save API result in local storage to display the data on results page
          this.$router.push("/retirement-buffer/accumulation/result"); // Redirect on results page
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            this.$toast.error("Something went wrong!");
          }
          this.$store.dispatch("loader", false);
        });
    },
  },
  computed: {
    allowSubmit() {
      if (
        this.totalBalance &&
        this.annualDistribution &&
        this.parRate &&
        this.floor
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang=""></style>
