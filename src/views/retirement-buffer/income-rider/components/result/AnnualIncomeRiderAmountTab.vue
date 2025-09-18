<template lang>
  <div class="row mt-5" id="target-analysis-amount-tab">

    <div class="col-md-6">
      <div class="target-analysis-bar-main-div">
        <div class="d-flex flex-column">
          <div class="d-flex gap-4 justify-content-center w-100">

            <div class="target-analysis-bar">
              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr1"
                :style="`height: ${this.barHeight}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr1">
                  <p>
                    <span class="bigBarNumberJsCls2"
                      >{{ $numFormatWithDollar(inputs.total_balance) }}</span
                    >
                  </p>
                </div>
              </div>
            </div>

            <div :class="['target-analysis-bar', barType]">

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr3"
                :style="`height: ${topOptimalBarHeight}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr2">
                  <p>
                    <span class="bigBarNumberJsCls2">{{optimalBalanceDifferenceFormatted(irResult)}}</span>
                  </p>
                </div>                
              </div>

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr2"
                :style="`height: ${bottomOptimalBarHeight}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr2">
                  <p>
                    <span class="bigBarNumberJsCls2"
                      >{{ $numFormatWithDollar(inputs.total_balance) }}</span>
                  </p>
                </div>                
              </div>
            </div>

          </div>

          <p class="bar-long-para">
            The required beginning balance for the {{ inputs.comparative_vehicle_account_name }}
            earning a flat {{ $percentFormat(inputs.growth_rate || 0) }}%
            to match the {{ inputs.income_rider_account_name }}'s income production is
            {{ $numFormatWithDollar(irResult.optimization.optimal_beginning_balance) }}.
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-6 position-relative border-before-col">
      <div class="target-analysis-bar-main-div">
        <div class="d-flex flex-column">
          <div class="d-flex gap-4 justify-content-center w-100">

            <div class="target-analysis-bar">
              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr1"
                :style="`height: ${barHeight}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr1">
                  <p>
                    <span class="bigBarNumberJsCls2"
                      >{{ $numFormatWithDollar(inputs.total_balance) }}</span
                    >
                  </p>
                </div>
              </div>
            </div>

            <div :class="['target-analysis-bar', historicalBarType]">

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr3"
                :style="`height: ${topOptimalHistoricalBarHeight}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr2">
                  <p>
                    <span class="bigBarNumberJsCls2"
                      >{{optimalBalanceDifferenceFormatted(irHistoricalResult)}}</span
                    >
                  </p>
                </div>                
              </div>

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr2"
                :style="`height: ${bottomOptimalHistoricalBarHeight}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr2">
                  <p>
                    <span class="bigBarNumberJsCls2"
                      >{{ $numFormatWithDollar(inputs.total_balance) }}</span>
                  </p>
                </div>                
              </div>
            </div>

          </div>
          <p class="bar-long-para">
            The required beginning balance for the {{ inputs.comparative_vehicle_account_name }}
            using historical returns for the last [number of years]
            years to match the {{ inputs.income_rider_account_name }}'s
            income production is
            {{ $numFormatWithDollar(irHistoricalResult.optimization.optimal_beginning_balance) }}.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import CircularProgressBar from "../../../../../assets/js/retirement-buffer/circularProgressBar.min.js";

export default {

  data() {
    return {
      barType: "stacked",
      historicalBarType: "stacked",
      barHeight: 0,
      bottomOptimalBarHeight: 0,
      topOptimalBarHeight: 0,
      bottomOptimalHistoricalBarHeight: 0,
      topOptimalHistoricalBarHeight: 0
    };
  },

  mounted() {
    this.updateParameters()
  },

  updated() {
    this.updateParameters()
  },

  methods: {

    updateParameters() {
      this.barType = this.balanceType(this.irResult)
      this.historicalBarType = this.balanceType(this.irHistoricalResult)

      this.barHeight = this.balanceBarHeight()

      const optimalBarHeights = this.optimalBalanceBarHeight(this.irResult)
      this.bottomOptimalBarHeight = optimalBarHeights[0]
      this.topOptimalBarHeight = optimalBarHeights[1]

      const optimalHistoricalBarHeights = this.optimalBalanceBarHeight(this.irHistoricalResult)
      this.bottomOptimalHistoricalBarHeight = optimalHistoricalBarHeights[0]
      this.topOptimalHistoricalBarHeight = optimalHistoricalBarHeights[1]
    },

    balanceType(result) {
      const balance = Number(this.inputs.total_balance);
      const optimalBalance = Number(result.optimization.optimal_beginning_balance);
      return balance < optimalBalance ? "stacked" : "overlapping"
    },

    balanceBarHeight() {
      const balance = Number(this.inputs.total_balance);
      const optimalBalance = Number(this.irResult.optimization.optimal_beginning_balance);
      if (balance < optimalBalance) {
        return balance / optimalBalance * 100
      } else {
        return 100
      }
    },

    optimalBalanceBarHeight(result) {

      const balance = Number(this.inputs.total_balance);
      let optimalBalance = Number(this.irResult.optimization.optimal_beginning_balance);

      const optimalHistoricalBalance =
            Number(this.irHistoricalResult.optimization.optimal_beginning_balance);

      const maxOptimalBalance = Math.max(optimalBalance, optimalHistoricalBalance)

      if (maxOptimalBalance > balance) {

        const bottomHeight = 100 * balance / maxOptimalBalance

        const topHeight = 100 * (result.optimization.optimal_beginning_balance - balance) /
                          maxOptimalBalance

        return [bottomHeight, topHeight]

      } else {
        const bottomHeight = 100
        const topHeight = 100 * result.optimization.optimal_beginning_balance / balance
        return [bottomHeight, topHeight]
      }
    },
  
    optimalBalanceDifference(result) {
      return result.optimization.optimal_beginning_balance - this.inputs.total_balance
    },

    optimalBalanceDifferenceFormatted(result) {
      const difference = this.optimalBalanceDifference(result)
      const sign = difference < 0 ? '' : '+'
      return `${sign}${this.$numFormatWithDollar(difference)}`
    },

  },

  computed: {
    ...mapState({
      inputs: (state) => state.incomeRider.result.inputs || [],
    }),
    ...mapGetters({
      irResult: "incomeRider/irResult",
      irHistoricalResult: "incomeRider/irHistoricalResult",
    }),
  },
};
</script>
<style lang></style>
