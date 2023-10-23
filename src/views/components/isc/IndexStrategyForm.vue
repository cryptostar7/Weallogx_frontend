<template lang="">
  <div class="container-fluid index-strategy-inputs-div pb-0 mt-3">
    <div class="row">
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance">Start Year</label>
        <div class="select-menu">
          <div class="select-btn">
            <span class="sBtn-text">{{ startYear }}</span>
            <i
              ><img
                src="@/assets/images/icons/select-chevron.svg"
                alt="Chevron"
            /></i>
          </div>
          <ul class="options">
            <li
              v-for="(item, index) in years"
              :key="index"
              @click="startYear = item"
              :class="`option ${startYear === item ? 'active' : ''}`"
            >
              <span class="option-text">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance">End Year</label>
        <div class="select-menu">
          <div class="select-btn">
            <span class="sBtn-text">{{ endYear }}</span>
            <i
              ><img
                src="@/assets/images/icons/select-chevron.svg"
                alt="Chevron"
            /></i>
          </div>
          <ul class="options">
            <li
              v-for="(item, index) in years"
              :key="index"
              @click="endYear = item"
              :class="`option ${endYear === item ? 'active' : ''} ${
                startYear > item ? 'd-none' : ''
              }`"
            >
              <span class="option-text">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance">Index</label>
        <div class="select-menu">
          <div class="select-btn">
            <span class="sBtn-text">{{ indexStrategy }}</span>
            <i
              ><img
                src="@/assets/images/icons/select-chevron.svg"
                alt="Chevron"
            /></i>
          </div>
          <ul class="options">
            <li
              v-for="(item, index) in indexStrategies"
              :key="index"
              :class="`option ${
                indexStrategy === item.template_name ? 'active' : ''
              } ${item.max_year > startYear ? 'disabled' : ''}`"
              @click="indexStrategy = item.template_name"
            >
              <span class="option-text">{{ item.template_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label
          >Segment Duration (Years)
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
                />
                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1" fill="white" />
                <rect
                  id="Rectangle 753"
                  x="5.75"
                  y="5.5"
                  width="1.5"
                  height="5"
                  rx="0.75"
                  fill="white"
                />
              </g>
            </svg>
            <span>Is your strategy a 1, 2, or 3 years strategy?</span>
          </span></label
        >
        <div class="three-radio-button-input-div">
          <div>
            <input
              type="radio"
              :name="`segment-duration${$props.currentTab}`"
              :id="`segmentDuration1${$props.currentTab}`"
              :checked="segment === 1"
              hidden
            />
            <label
              :for="`segmentDuration1${$props.currentTab}`"
              @click="segment = 1"
              >1</label
            >
          </div>
          <div>
            <input
              type="radio"
              :name="`segment-duration${$props.currentTab}`"
              :id="`segmentDuration2${$props.currentTab}`"
              hidden
              :checked="segment === 2"
            />
            <label
              :for="`segmentDuration2${$props.currentTab}`"
              @click="segment = 2"
              >2</label
            >
          </div>
          <div>
            <input
              type="radio"
              :name="`segment-duration${$props.currentTab}`"
              :id="`segmentDuration3${$props.currentTab}`"
              hidden
              :checked="segment === 3"
            />
            <label
              :for="`segmentDuration3${$props.currentTab}`"
              @click="segment = 3"
              >3</label
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance"
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
                />
                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1" fill="white" />
                <rect
                  id="Rectangle 753"
                  x="5.75"
                  y="5.5"
                  width="1.5"
                  height="5"
                  rx="0.75"
                  fill="white"
                />
              </g>
            </svg>
            <span>What is your strategy’s cap rate? If none, leave blank.</span>
          </span></label
        >
        <div class="index-strategy-each-inputs">
          <input
            type="text"
            class="onlyPositiveNum"
            @keyup="
              (e) => {
                this.capRate = e.target.value;
                this.$emit('clearError', 'cap_rate');
              }
            "
            max="100"
            min="1"
          />
          <span>%</span>
        </div>
        <p class="error" v-if="errors[$props.currentTab].cap_rate">
          {{ errors[$props.currentTab].cap_rate }}
        </p>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance"
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
                />
                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1" fill="white" />
                <rect
                  id="Rectangle 753"
                  x="5.75"
                  y="5.5"
                  width="1.5"
                  height="5"
                  rx="0.75"
                  fill="white"
                />
              </g>
            </svg>
            <span
              >If your strategy uses a margin/spread, enter it here. Many
              multiyear strategies express the margin annually. For example, a 2
              year strategy might use a margin of 3% annually. You would put 6%
              here, in that case. If none, leave blank or put 0.</span
            >
          </span></label
        >
        <div class="index-strategy-each-inputs">
          <input
            type="text"
            class="onlyPositiveNum"
            @keyup="(e) => (margin = e.target.value)"
            max="100"
          />
          <span>%</span>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance">Par Rate</label>
        <div class="index-strategy-each-inputs">
          <input
            type="text"
            class="onlyPositiveNum"
            value="100"
            @keyup="
              (e) => {
                this.parRate = e.target.value;
                this.$emit('clearError', 'par_rate');
              }
            "
            max="1000"
            min="1"
          />
          <span>%</span>
        </div>
        <p class="error" v-if="errors[$props.currentTab].par_rate">
          {{ errors[$props.currentTab].par_rate }}
        </p>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance">Floor</label>
        <div class="index-strategy-each-inputs /*error*/">
          <input
            type="text"
            class="onlyPositiveNum"
            value="0"
            @keyup="
              (e) => {
                this.floor = e.target.value;
                this.$emit('clearError', 'floor');
              }
            "
            max="10"
          />
          <span>%</span>
        </div>
        <p class="error" v-if="errors[$props.currentTab].floor">
          {{ errors[$props.currentTab].floor }}
        </p>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance"
          >Performance Multiplier
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
                />
                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1" fill="white" />
                <rect
                  id="Rectangle 753"
                  x="5.75"
                  y="5.5"
                  width="1.5"
                  height="5"
                  rx="0.75"
                  fill="white"
                />
              </g>
            </svg>
            <span
              >If you are using a multiplier, enter that value here. For
              example, if your strategy has a 40% multiplier, you would enter
              1.4 here. If none, enter 1.</span
            >
          </span></label
        >
        <div class="index-strategy-each-inputs">
          <input
            type="text"
            class="onlyPositiveNum"
            @keyup="(e) => (PerformanceMultiplier = e.target.value)"
            min="1"
            max="100"
          />
        </div>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance"
          >Start Year<span
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
                />
                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1" fill="white" />
                <rect
                  id="Rectangle 753"
                  x="5.75"
                  y="5.5"
                  width="1.5"
                  height="5"
                  rx="0.75"
                  fill="white"
                />
              </g>
            </svg>
            <span>What year does the performance multiplier start?</span>
          </span></label
        >
        <div class="select-menu">
          <div class="select-btn">
            <span class="sBtn-text">{{ pmfStartYear }}</span>
            <i
              ><img
                src="@/assets/images/icons/select-chevron.svg"
                alt="Chevron"
            /></i>
          </div>
          <ul class="options">
            <li
              v-for="(item, index) in endYear - startYear"
              :key="index"
              :class="`option ${pmfStartYear === item ? 'active' : ''}`"
              @click="
                () => {
                  pmfStartYear = item;
                  this.$emit('clearError', 'pm_start_year');
                }
              "
            >
              <span class="option-text">{{ item }}</span>
            </li>
          </ul>
        </div>
        <p class="error" v-if="errors[$props.currentTab].pm_start_year">
          {{ errors[$props.currentTab].pm_start_year }}
        </p>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance"
          >Flat Credit/Bonus
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
                />
                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1" fill="white" />
                <rect
                  id="Rectangle 753"
                  x="5.75"
                  y="5.5"
                  width="1.5"
                  height="5"
                  rx="0.75"
                  fill="white"
                />
              </g>
            </svg>
            <span
              >If your strategy uses a flat credit or bonus, enter that value
              here.</span
            >
          </span></label
        >
        <div class="index-strategy-each-inputs">
          <input
            type="text"
            class="onlyPositiveNum"
            @keyup="
              (e) => {
                this.flatCreditBonus = e.target.value;
                this.$emit('clearError', 'flat_credit_bonus');
              }
            "
            max="5"
          />
          <span>%</span>
        </div>
        <p class="error" v-if="errors[$props.currentTab].flat_credit_bonus">
          {{ errors[$props.currentTab].flat_credit_bonus }}
        </p>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance"
          >Start Year<span
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
                />
                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1" fill="white" />
                <rect
                  id="Rectangle 753"
                  x="5.75"
                  y="5.5"
                  width="1.5"
                  height="5"
                  rx="0.75"
                  fill="white"
                />
              </g>
            </svg>
            <span>What year does the credit or bonus start?</span>
          </span></label
        >
        <div class="select-menu">
          <div class="select-btn">
            <span class="sBtn-text">{{ fcStartYear }}</span>
            <i
              ><img
                src="@/assets/images/icons/select-chevron.svg"
                alt="Chevron"
            /></i>
          </div>
          <ul class="options">
            <li
              v-for="(item, index) in endYear - startYear"
              :key="index"
              :class="`option ${fcStartYear === item ? 'active' : ''}`"
              @click="
                () => {
                  fcStartYear = item;
                  this.$emit('clearError', 'fc_start_year');
                }
              "
            >
              <span class="option-text">{{ item }}</span>
            </li>
          </ul>
        </div>
        <p class="error" v-if="errors[$props.currentTab].fc_start_year">
          {{ errors[$props.currentTab].fc_start_year }}
        </p>
      </div>
      <div class="col-md-6 col-lg-3 inp-mar-top">
        <label for="beginningBalance"
          >Strategy Fee<span
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
                />
                <circle id="Ellipse 191" cx="6.5" cy="3.5" r="1" fill="white" />
                <rect
                  id="Rectangle 753"
                  x="5.75"
                  y="5.5"
                  width="1.5"
                  height="5"
                  rx="0.75"
                  fill="white"
                />
              </g>
            </svg>
            <span
              >Enter all strategy related fees here (i.e. multiplier fees, high
              cap fees, etc.)</span
            >
          </span></label
        >
        <div class="index-strategy-each-inputs">
          <input
            type="text"
            class="onlyPositiveNum"
            @keyup="
              (e) => {
                this.StrategyFee = e.target.value;
                this.$emit('clearError', 'fee');
              }
            "
            max="100"
          />
          <span>%</span>
        </div>
        <p class="error" v-if="errors[$props.currentTab].fee">
          {{ errors[$props.currentTab].fee }}
        </p>
      </div>
    </div>

    <input
      type="hidden"
      :value="startYear"
      :id="`index_${$props.currentTab}_startYear`"
    />
    <input
      type="hidden"
      :value="endYear"
      :id="`index_${$props.currentTab}_endYear`"
    />
    <input
      type="hidden"
      :value="segment"
      :id="`index_${$props.currentTab}_segment`"
    />
    <input
      type="hidden"
      :value="pmfStartYear"
      :id="`index_${$props.currentTab}_pmfStartYear`"
    />
    <input
      type="hidden"
      :value="fcStartYear"
      :id="`index_${$props.currentTab}_fcStartYear`"
    />
    <input
      type="hidden"
      :value="indexStrategy"
      :id="`index_${$props.currentTab}_indexStrategy`"
    />
    <input
      type="hidden"
      :value="capRate"
      :id="`index_${$props.currentTab}_capRate`"
    />
    <input
      type="hidden"
      :value="margin"
      :id="`index_${$props.currentTab}_margin`"
    />
    <input
      type="hidden"
      :value="parRate"
      :id="`index_${$props.currentTab}_parRate`"
    />
    <input
      type="hidden"
      :value="floor"
      :id="`index_${$props.currentTab}_floor`"
    />
    <input
      type="hidden"
      :value="flatCreditBonus"
      :id="`index_${$props.currentTab}_flatCreditBonus`"
    />
    <input
      type="hidden"
      :value="PerformanceMultiplier"
      :id="`index_${$props.currentTab}_PerformanceMultiplier`"
    />
    <input
      type="hidden"
      :value="StrategyFee"
      :id="`index_${$props.currentTab}_StrategyFee`"
    />
  </div>
</template>
<script>
import config from "../../../services/config.js";
export default {
  props: ["activeTab", "currentTab"],
  emits: ["clearError"],
  inject: ["errors"],
  data() {
    return {
      startYear: 1960,
      endYear: 2022,
      segment: 1,
      pmfStartYear: 1,
      fcStartYear: 1,
      indexStrategy: "S&P 500",
      capRate: "",
      margin: "",
      parRate: 100,
      floor: 0,
      flatCreditBonus: "",
      PerformanceMultiplier: "1",
      StrategyFee: "",
    };
  },
  methods: {
    testFunction: function () {
      console.log(this.segment);
      console.log(document.getElementById("segmentDuration11").checked);
    },
  },
  computed: {
    years() {
      let array = [];
      let currentYear = new Date().getFullYear();
      for (let index = 1960; index < currentYear; index++) {
        array.push(index);
      }

      return array;
    },
    indexStrategies() {
      return config.ISC_INDEX_STRATEGIES;
    },
    maxStartYear() {
      return endYear - startYear;
    },
  },
};
</script>
<style lang=""></style>
