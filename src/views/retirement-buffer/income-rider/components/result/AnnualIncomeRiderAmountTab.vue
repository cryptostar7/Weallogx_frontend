<template lang>
  <div class="row mt-5" id="target-analysis-amount-tab">

    <div class="col-md-6">
      <div class="target-analysis-bar-main-div">
        <div class="d-flex flex-column">
          <div class="d-flex gap-4 justify-content-center w-100">

            <div class="target-analysis-bar">
              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr1 balance"
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

            <div :class="['target-analysis-bar', direction]">

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr3 bar1"
                :style="`height: ${optimalBarHeight}%`"
              >
              </div>

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr2 bar2"
                :style="`height: ${barHeight}%`"
              >
              </div>

              <div
                :class="[
                  'target-analysis-bottom-bar-area bottom-clr1', 'bar1',
                  isLabelAbove ? 'above' : ''
                ]"
                :style="`bottom: ${labelPosition}%`">
                <p>
                  <span class="bigBarNumberJsCls2">{{optimalBalanceDifferenceFormatted(irResult)}}</span>
                </p>
              </div>                

              <div class="target-analysis-bottom-bar-area bottom-clr2 bar2">
                <p>
                  <span class="bigBarNumberJsCls2"
                    >{{ $numFormatWithDollar(inputs.total_balance) }}</span>
                </p>
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
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr1 balance"
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

            <div :class="['target-analysis-bar', historicalDirection]">

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr3 bar1"
                :style="`height: ${optimalHistoricalBarHeight}%`"
              >
              </div>

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr2 bar2"
                :style="`height: ${barHeight}%`"
              >
              </div>

              <div
                :class="[
                  'target-analysis-bottom-bar-area bottom-clr3', 'bar1',
                  isHistoricalLabelAbove ? 'above' : ''
                ]"
                :style="`bottom: ${historicalLabelPosition}%`">
                <p>
                  <span class="bigBarNumberJsCls2"
                    >{{optimalBalanceDifferenceFormatted(irHistoricalResult)}}</span
                  >
                </p>
              </div>                

              <div class="target-analysis-bottom-bar-area bottom-clr2 bar2">
                <p>
                  <span class="bigBarNumberJsCls2"
                    >{{ $numFormatWithDollar(inputs.total_balance) }}</span>
                </p>
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
      direction: "increase",
      historicalDirection: "increase",
      barHeight: 0,
      bottomOptimalBarHeight: 0,
      optimalBarHeight: 0,
      bottomOptimalHistoricalBarHeight: 0,
      optimalHistoricalBarHeight: 0,
      labelPosition: 0,
      isLabelAbove: false,
      historicalLabelPosition: 0,
      isHistoricalLabelAbove: false,
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

      this.direction = this.optimalBalanceDirection(this.irResult)
      this.historicalDirection = this.optimalBalanceDirection(this.irHistoricalResult)

      this.barHeight = this.balanceBarHeight()
      this.optimalBarHeight = this.optimalBalanceBarHeight(this.irResult)
      this.optimalHistoricalBarHeight = this.optimalBalanceBarHeight(this.irHistoricalResult)

      if (this.optimalBarHeight > this.barHeight && this.optimalBarHeight - this.barHeight < 9) {
        this.labelPosition = this.optimalBarHeight
        this.isLabelAbove = true
      } else {
        this.labelPosition = Math.min(this.barHeight, this.optimalBarHeight)
        this.isLabelAbove = false
      }

      if (this.optimalHistoricalBarHeight > this.barHeight &&
          this.optimalHistoricalBarHeight - this.barHeight < 9) {
        this.historicalLabelPosition = this.optimalHistoricalBarHeight
        this.isHistoricalLabelAbove = true
      } else {
        this.historicalLabelPosition = Math.min(this.barHeight, this.optimalHistoricalBarHeight)
        this.isHistoricalLabelAbove = false
      }
    },

    optimalBalanceDirection(result) {
      const balance = Number(this.inputs.total_balance);
      const optimalBalance = Number(result.optimization.optimal_beginning_balance);
      return balance < optimalBalance ? "increase" : "decrease"
    },

    balanceBarHeight() {
      const balance = Number(this.inputs.total_balance);
      const maxBalance = this.maxBalance()
      if (balance < maxBalance) {
        return balance / maxBalance * 100
      } else {
        return 100
      }
    },

    optimalBalanceBarHeight(result) {
      const balance = Number(this.inputs.total_balance);
      const maxBalance = this.maxBalance()
      const height = 100 * result.optimization.optimal_beginning_balance / maxBalance
      return height
    },

    maxBalance() {
      return Math.max(
        Number(this.inputs.total_balance),
        Number(this.irResult.optimization.optimal_beginning_balance),
        Number(this.irHistoricalResult.optimization.optimal_beginning_balance)
      );
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
