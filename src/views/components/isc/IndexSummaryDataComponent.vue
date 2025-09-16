<template lang="">
  <div class="table-graph-bottom-content-div">
    <div class="container-fluid px-0">
      <div class="row">
        <div class="col-sm-7">
          <p>Beginning Balance</p>
        </div>
        <div class="col-sm-5">
          <p class="text-end">
            ${{
              $props.beginningBalance ? $numFormat($props.beginningBalance) : 0
            }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-7">
          <p>
            Ending Balance
            <span class="tooltips"
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
                  <circle
                    id="Ellipse 191"
                    cx="6.5"
                    cy="3.5"
                    r="1"
                    fill="white"
                  />
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
              <span class="w-225"
                >Represents the net ending balance after all taxes and
                fees</span
              >
            </span>
          </p>
        </div>
        <div class="col-sm-5">
          <p class="text-end">
            ${{
              $props.summary.ending_balance
                ? $numFormat($props.summary.ending_balance.toFixed(0))
                : "0"
            }}
          </p>
        </div>
      </div>
      <div v-if="$props.taxRate > 0" class="row">
        <div class="col-sm-8">
          <p>Total Taxes</p>
        </div>
        <div class="col-sm-4">
          <p class="highlighted text-end">
            ${{
              $props.summary.total_taxes
                ? $numFormat($props.summary.total_taxes.toFixed(0))
                : "0"
            }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <p>Years with Market Losses</p>
        </div>
        <div class="col-sm-4">
          <p class="highlighted text-end">
            {{ $props.summary.total_negative_years }}
          </p>
        </div>
      </div>

      <div :class="['row', this.equalizeRisk ? 'highlighted' : '']">
        <div class="col-sm-8">
          <p class="p-relative">
            <button
              :class="['btn', 'table-chevron-btn',
                this.equalizeRisk ? 'white' : 'blue',
                this.expandAverageReturn ? '' : 'collapsed',
              ]"
              @click="toggleAverageReturnSection"
            ></button>
            Average Rate of Return
          </p>
        </div>
        <div class="col-sm-4">
          <p class="text-end">
            {{averageReturn}}%
          </p>
        </div>
      </div>

      <div :class="[
        'row', this.expandAverageReturn ? '' : 'collapse', this.equalizeRisk ? 'highlighted' : ''
      ]">
        <div class="col-sm-8">
          <p class="table-blue-clr ms-2">Net Average Rate of Return</p>
        </div>
        <div class="col-sm-4">
          <p class="table-blue-clr text-end">
            {{netAverageReturn}}%
          </p>
        </div>
      </div>
      
      <div :class="['row', this.equalizeRisk ? 'highlighted' : '']">
        <div class="col-sm-8">
          <p class="p-relative">
            <button
              :class="['btn', 'table-chevron-btn',
                this.equalizeRisk ? 'white' : 'blue',
                this.expandActualReturn ? '' : 'collapsed',
              ]"
              @click="toggleActualReturnSection"
            ></button>
            Actual Rate of Return
            <span class="tooltips"
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
                  <circle
                    id="Ellipse 191"
                    cx="6.5"
                    cy="3.5"
                    r="1"
                    fill="white"
                  />
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
              <span class="w-250"
                >The Compound Annual Growth Rate (CAGR) is a more accurate
                measure of a portfolio’s performance</span
              >
            </span>
          </p>
        </div>
        <div class="col-sm-4">
          <p class="text-end">
            {{actualReturn}}%
          </p>
        </div>
      </div>

      <div :class="[
        'row', this.expandActualReturn ? '' : 'collapse', this.equalizeRisk ? 'highlighted' : ''
      ]">
        <div class="col-sm-8">
          <p class="table-blue-clr ms-2">Net Actual Rate of Return</p>
        </div>
        <div class="col-sm-4">
          <p class="table-blue-clr text-end">
            {{netActualReturn}}%
          </p>
        </div>
      </div>

      <div :class="['row', this.equalizeRisk ? 'highlighted' : '']">
        <div class="col-sm-8">
          <p>Standard Deviation</p>
        </div>
        <div class="col-sm-4 text-end">
          <p>
            {{standardDeviation}}%
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <p>Sharpe Ratio</p>
        </div>
        <div class="col-sm-4">
          <p class="text-end">
            {{
              $props.summary.sharpe_ratio
                ? $props.summary.sharpe_ratio.toFixed(2)
                : 0
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["beginningBalance", "summary", "taxRate", "equalizeRisk"],
  data() {
    return {
      averageReturn: "",
      netAverageReturn: "",
      actualReturn: "",
      netActualReturn: "",
      expandAverageReturn: false,
      expandActualReturn: false,
    };
  },
  mounted() {
    this.updateEqualizedRisk()
  },
  watch: {
    equalizeRisk(newValue, oldValue) {
      this.updateEqualizedRisk()
    },
  },
  methods: {
    updateEqualizedRisk() {
      const summary = this.equalizeRisk ? this.$props.summary.equalized_risk : this.$props.summary
      this.averageReturn = (summary.average_return * 100).toFixed(2)
      this.netAverageReturn = (summary.net_average_return * 100).toFixed(2)
      this.actualReturn = (summary.actual_return * 100).toFixed(2)
      this.netActualReturn = (summary.net_actual_return * 100).toFixed(2)
      this.standardDeviation = (summary.standard_deviation * 100).toFixed(2)
    },
    toggleAverageReturnSection() {
      this.expandAverageReturn = !this.expandAverageReturn
    },
    toggleActualReturnSection() {
      this.expandActualReturn = !this.expandActualReturn
    }
  }
};
</script>
<style lang=""></style>


