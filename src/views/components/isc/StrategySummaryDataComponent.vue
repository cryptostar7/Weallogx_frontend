<template lang="">
  <div class="table-graph-bottom-content-div">
    <div class="container-fluid px-0">
      <div class="row">
        <div class="col-sm-8">
          <p>Beginning Balance</p>
        </div>
        <div class="col-sm-4">
          <p>
            ${{
              $props.beginningBalance
                ? $numFormat($props.beginningBalance)
                : 0
            }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
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
                >Represents the net ending balance after all fees</span
              >
            </span>
          </p>
        </div>
        <div class="col-sm-4">
          <p>
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
          <p>
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
          <p
            :class="
              $props.summary.total_negative_years < 0 ? 'highlighted' : ''
            "
          >
            {{ $props.summary.total_negative_years }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <p class="p-relative">
            Average Rate of Return
            <button
              class="btn table-chevron-btn green collapsed"
              data-bs-toggle="collapse"
              href="#aror3"
              role="button"
              aria-expanded="false"
              aria-controls="aror3"
            ></button>
          </p>
        </div>
        <div class="col-sm-4">
          <p>
            {{
              $props.summary.average_return
                ? ($props.summary.average_return * 100).toFixed(2)
                : ""
            }}%
          </p>
        </div>
      </div>
      <div class="row collapse" id="aror3">
        <div class="col-sm-8">
          <p class="table-green-clr ms-2">Net Average Rate of Return</p>
        </div>
        <div class="col-sm-4">
          <p class="table-green-clr">
            {{
              $props.summary.net_average_return
                ? ($props.summary.net_average_return * 100).toFixed(2)
                : ""
            }}%
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <p class="p-relative">
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
            <button
              class="btn table-chevron-btn green collapsed"
              data-bs-toggle="collapse"
              href="#aror4"
              role="button"
              aria-expanded="false"
              aria-controls="aror4"
            ></button>
          </p>
        </div>
        <div class="col-sm-4">
          <p>
            {{
              $props.summary.actual_return
                ? ($props.summary.actual_return * 100).toFixed(2)
                : "0"
            }}%
          </p>
        </div>
      </div>
      <div class="row collapse" id="aror4">
        <div class="col-sm-8">
          <p class="table-green-clr ms-2">Net Actual Rate of Return</p>
        </div>
        <div class="col-sm-4">
          <p class="table-green-clr">
            {{
              $props.summary.net_actual_return
                ? ($props.summary.net_actual_return * 100).toFixed(2)
                : 0
            }}%
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <p>Standard Deviation</p>
        </div>
        <div class="col-sm-4">
          <p>
            {{
              $props.summary.standard_deviation
                ? ($props.summary.standard_deviation * 100).toFixed(2)
                : 0
            }}%
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <p>Sharpe Ratio</p>
        </div>
        <div class="col-sm-4">
          <p>
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
    props: ["beginningBalance", "summary", "taxRate"]
};
</script>
<style lang=""></style>
