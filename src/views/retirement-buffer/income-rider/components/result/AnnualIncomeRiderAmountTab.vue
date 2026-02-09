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
                :style="`height: ${bar1Height}%`"
              >
              </div>

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr2 bar2"
                :style="`height: ${bar2Height}%`"
              >
              </div>

              <div
                :class="[
                  'target-analysis-bottom-bar-area bottom-clr1', 'bar1',
                  isLabelAbove ? 'above' : ''
                ]"
                :style="`bottom: ${labelPosition}%`">
                <p>
                  <span class="bigBarNumberJsCls2">{{optimalBalanceDifferenceFormatted(optimization)}}</span>
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
            <span>{{
              $numFormatWithDollar(optimization.optimal_beginning_balance)
            }}</span>.
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
                :style="`height: ${bar1HistoricalHeight}%`"
              >
              </div>

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr4 bar2"
                :style="`height: ${bar2HistoricalHeight}%`"
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
                    >{{optimalBalanceDifferenceFormatted(historicalOptimization)}}</span
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
            using historical returns for the last {{yearCount}}
            years to match the {{ inputs.income_rider_account_name }}'s
            income production is
            <span>{{
              $numFormatWithDollar(historicalOptimization.optimal_beginning_balance)
            }}</span>.
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

  methods: {

    optimalBalanceDirection(optimization) {
      const balance = Number(this.inputs.total_balance);
      const optimalBalance = Number(optimization.optimal_beginning_balance);
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

    optimalBalanceBarHeight(optimization) {
      const balance = Number(this.inputs.total_balance);
      const maxBalance = this.maxBalance()
      const height = 100 * optimization.optimal_beginning_balance / maxBalance
      return height
    },

    maxBalance() {
      return Math.max(
        Number(this.inputs.total_balance),
        Number(this.optimization.optimal_beginning_balance),
        Number(this.historicalOptimization.optimal_beginning_balance)
      );
    },

    optimalBalanceDifference(optimization) {
      return optimization.optimal_beginning_balance - this.inputs.total_balance
    },

    optimalBalanceDifferenceFormatted(optimization) {
      const difference = this.optimalBalanceDifference(optimization)
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

    yearCount() {return this.inputs.plan_through_age - this.inputs.current_age + 1},
    direction() {return this.optimalBalanceDirection(this.optimization)},
    historicalDirection() {return this.optimalBalanceDirection(this.historicalOptimization)},
    barHeight() {return this.balanceBarHeight()},
    optimalBarHeight() {return this.optimalBalanceBarHeight(this.optimization)},
    optimalHistoricalBarHeight() {return this.optimalBalanceBarHeight(this.historicalOptimization)},

    // bar1 (orange, behind) should always be taller so it shows at top
    bar1Height() {return Math.max(this.barHeight, this.optimalBarHeight)},
    bar2Height() {return Math.min(this.barHeight, this.optimalBarHeight)},
    bar1HistoricalHeight() {return Math.max(this.barHeight, this.optimalHistoricalBarHeight)},
    bar2HistoricalHeight() {return Math.min(this.barHeight, this.optimalHistoricalBarHeight)},

    isLabelAbove() {
      return this.bar1Height - this.bar2Height < 9
    },

    labelPosition() {
      // Position label at top of bar2 (the shorter front bar with white line)
      return this.bar2Height
    },

    isHistoricalLabelAbove() {
      return this.bar1HistoricalHeight - this.bar2HistoricalHeight < 9
    },

    historicalLabelPosition() {
      // Position label at top of bar2 (the shorter front bar with white line)
      return this.bar2HistoricalHeight
    },

    optimization() {
        return this.irResult.optimization.beginning_balance
    },
    historicalOptimization() {
        return this.irHistoricalResult.optimization.beginning_balance
    },
  },
};
</script>
<style lang></style>
