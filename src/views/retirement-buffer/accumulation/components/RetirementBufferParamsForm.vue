<template lang="">
  <div class="">
    <div class="accumulation_strategy_box_head">
      <h2>Accumulation Strategy</h2>
      <img src="@/assets/images/icons/analytics.svg" alt="Analytics" />
    </div>
    <div class="accumulation_strategy_inner_box">
      <p class="form_section_para" @click="testFunction">Account Details</p>
      <div class="form_section_input_row">
        <div class="form_section_each_inputs width25">
          <div class="form_section_label_div">
            <label for="total-balance" class="main_label">Total Balance</label>
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
            <label for="account-type" class="main_label">Account Type</label>
          </div>
          <div class="select-menu accumulation_select_menu">
            <div class="select-btn">
              <input
                type="text"
                class="sBtn-text"
                :value="accountType"
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
                v-for="(item, index) in accountTypes"
                :key="index"
                :class="`option ${accountType === item.name ? 'active' : ''}`"
                @click="accountType = item.name"
              >
                <span class="option-text">{{ item.name }}</span>
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
      accountType: "Taxable",
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

    if (this.rbaResults && this.rbaResults.inputs) {
      this.setFormInputs(this.rbaResults.inputs);
    }
  },
  methods: {
    testFunction: function () {
      console.log(this.rbaResults);
    },
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
      let annual_distribution = "";
      if (this.annualDistributionType === "dollar") {
        annual_distribution = getNumber(
          this.$refs.annualDistributionDollarRef.value
        );
      } else {
        annual_distribution =
          (data.account_value *
            getNumber(this.$refs.annualDistributionPercentRef.value)) /
          100;
      }

      if (
        this.accountType === "Pre-tax" ||
        this.accountType === "pre_tax_simulation"
      ) {
        data.annual_after_tax_distribution = annual_distribution;
      } else {
        data.annual_distribution = annual_distribution;
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
      if (localStorage.getItem("rba_account_type")) {
        this.accountType = localStorage.getItem("rba_account_type"); // Update account type field value
      }

      if (localStorage.getItem("rba_distribution_type")) {
        this.annualDistributionType = localStorage.getItem(
          "rba_distribution_type"
        ); // Update account distribution type value
      }

      this.totalBalance = data.account_value.toLocaleString();
      this.$refs.totalBalanceRef.value = this.totalBalance;

      if (
        this.accountType === "Pre-tax" ||
        this.accountType === "pre_tax_simulation"
      ) {
        this.annualDistribution =
          data.annual_after_tax_distribution.toLocaleString();
      } else {
        this.annualDistribution = data.annual_distribution.toLocaleString();
      }

      this.$refs.annualDistributionDollarRef.value = this.annualDistribution;

      if (this.annualDistributionType === "percent") {
        this.annualDistribution =
          (getNumber(this.annualDistribution) / data.account_value) * 100;
        this.$refs.annualDistributionPercentRef.value = this.annualDistribution;
      }

      this.$refs.taxRateRef.value =
        Number((data.tax_rate * 100).toFixed(2)) || "";
      this.floor = Number((data.floor * 100).toFixed(2)) || "0";
      this.$refs.floorRef.value = this.floor;
      this.parRate = Number((data.par_rate * 100).toFixed(2) || "");
      this.$refs.parRateRef.value = this.parRate;
      this.$refs.marginRef.value = Number((data.margin * 100).toFixed(2)) || "";
      this.$refs.capRateRef.value = Number((data.cap * 100).toFixed(2)) || "";
      this.$refs.premiumBonusRef.value =
        Number((data.bonus * 100).toFixed(2)) || "";

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
    submitForm: function () {
      this.getAccumulationResults("market_alone"); // Get market alone results from API
      this.getAccumulationResults("market_buffer"); // Get market+buffer results from API
    },
    getAccumulationResults: function (type) {
      this.$store.dispatch("loader", true);

      let endpoint = this.accountTypes.filter(
        (i) => i.name === this.accountType
      )[0].value;

      let payload = this.getFormInputs();
      payload.sort_type = 'average';

      if (type === "market_alone") {
        payload.buffer_account_allocation = 0;
      }

      post(`${getUrl("retirement-buffer")}${endpoint}`, payload, authHeader())
        .then((response) => {
         this.$store.dispatch("loader", false);
          localStorage.setItem("rba_account_type", this.accountType); // Save account type field value in local storage         
          this.$store.dispatch("retirementBufferDistributionType", this.annualDistributionType);
          this.$store.dispatch("retirementBufferAccumulationResults", {
            type: type,
            data: response.data,
          }); // Update results in vuexy store
          this.getSimulationData(`${endpoint}_simulation`, payload, type);
        })
        .catch((error) => {
          console.log(error);
          this.$store.dispatch("loader", false);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else if (error.code === "ERR_BAD_REQUEST") {
            if (error.response.data.error) {
              this.$toast.error(error.response.data.error[0]);
            } else {
              let field = Object.entries(error.response.data)[0][0];
              let message = Object.entries(error.response.data)[0][1][0];
              this.$toast.error(field + ": " + message);
            }
          } else {
            this.$toast.error(error.message);
          }
        });
    },
    getSimulationData: function (endpoint, payload, type) {
      this.$store.dispatch("loader", true);
      post(`${getUrl("retirement-buffer")}${endpoint}`, payload, authHeader())
        .then((response) => {
          this.$store.dispatch("loader", false);

          this.$store.dispatch("retirementBufferAccumulationSimulations", {
            type: type,
            data: response.data,
          }); // Update results in vuexy store

          this.$router.push("/retirement-buffer/accumulation/result"); // Redirect on results page
        })
        .catch((error) => {
          console.log(error);
          this.$store.dispatch("loader", false);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else if (error.code === "ERR_BAD_REQUEST") {
            if (error.response.data.error) {
              this.$toast.error(error.response.data.error[0]);
            } else {
              let field = Object.entries(error.response.data)[0][0];
              let message = Object.entries(error.response.data)[0][1][0];
              this.$toast.error(field + ": " + message);
            }
          } else {
            this.$toast.error(error.message);
          }
        });
    },
  },
  computed: {
    accountTypes() {
      return [
        { value: "taxable", name: "Taxable" },
        { value: "pre_tax", name: "Pre-tax" },
      ];
    },
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
    rbaResults() {
      return this.$store.state.data.retirement_buffer.auccumulation_results.market_buffer;
    },
  },
  watch: {
    allowSubmit(e) {
      this.$emit("setAllowSubmit", e);
    },
  },
};
</script>
<style lang=""></style>
