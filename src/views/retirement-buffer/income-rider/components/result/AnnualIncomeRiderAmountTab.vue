<template lang>
  <div class="row mt-5" id="target-analysis-amount-tab">

    <div class="col-md-6">
      <div class="target-analysis-bar-main-div">
        <div class="d-flex flex-column">
          <div class="d-flex gap-4 justify-content-center w-100">

            <div class="target-analysis-bar">
              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr1"
                :style="`height: ${balanceBarHeight()}%`"
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

            <div class="target-analysis-bar stacked">

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr3"
                :style="`height: ${optimalBalanceBarHeight()[1]}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr2">
                  <p>
                    <span class="bigBarNumberJsCls2">{{optimalBalanceDifference()}}</span>
                  </p>
                </div>                
              </div>

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr2"
                :style="`height: ${optimalBalanceBarHeight()[0]}%`"
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
                :style="`height: ${balanceBarHeight()}%`"
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

            <div class="target-analysis-bar stacked">

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr3"
                :style="`height: ${optimalHistoricalBalanceBarHeight()[1]}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr2">
                  <p>
                    <span class="bigBarNumberJsCls2"
                      >{{optimalHistoricalBalanceDifference()}}</span
                    >
                  </p>
                </div>                
              </div>

              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr2"
                :style="`height: ${optimalHistoricalBalanceBarHeight()[0]}%`"
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
  props: ["currentTab"],
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {

    balanceBarHeight() {
      const totalBalance = Number(this.inputs.total_balance);
      const optimalTotalBalance = Number(this.irResult.optimization.optimal_beginning_balance);
      return totalBalance / optimalTotalBalance * 100
    },

    optimalBalanceBarHeight() {

      const totalBalance = Number(this.inputs.total_balance);
      let optimalTotalBalance = Number(this.irResult.optimization.optimal_beginning_balance);

      const optimalHistoricalTotalBalance =
            Number(this.irHistoricalResult.optimization.optimal_beginning_balance);

      const maxOptimalTotalBalance = Math.max(optimalTotalBalance, optimalHistoricalTotalBalance)

      if (maxOptimalTotalBalance > totalBalance) {

        const bottomHeight = totalBalance / maxOptimalTotalBalance * 100

        const topHeight = (optimalTotalBalance - totalBalance) /
                          maxOptimalTotalBalance * 100

        return [bottomHeight, topHeight]

      } else {
        return [0, 0]
      }
    },

    optimalBalanceDifference() {
      const difference = this.irResult.optimization.optimal_beginning_balance -
                         this.inputs.total_balance
      const sign = difference < 0 ? '-' : '+'
      return `${sign}${this.$numFormatWithDollar(difference)}`
    },
    
    optimalHistoricalBalanceBarHeight() {

      const totalBalance = Number(this.inputs.total_balance);
      let optimalTotalBalance = Number(this.irResult.optimization.optimal_beginning_balance);

      const optimalHistoricalTotalBalance =
            Number(this.irHistoricalResult.optimization.optimal_beginning_balance);

      const maxOptimalTotalBalance = Math.max(optimalTotalBalance, optimalHistoricalTotalBalance)

      if (maxOptimalTotalBalance > totalBalance) {

        const bottomHeight = totalBalance / maxOptimalTotalBalance * 100

        const topHeight = (optimalHistoricalTotalBalance - totalBalance) /
                          maxOptimalTotalBalance * 100

        return [bottomHeight, topHeight]

      } else {
        return [0, 0]
      }
    },

    optimalHistoricalBalanceDifference() {
      const difference = this.irHistoricalResult.optimization.optimal_beginning_balance -
                         this.inputs.total_balance
      const sign = difference < 0 ? '-' : '+'
      return `${sign}${this.$numFormatWithDollar(difference)}`
    }
  },

  computed: {
    ...mapState({
      inputs: (state) => state.incomeRider.result.inputs || [],
      resultType: (state) => state.incomeRider.result_type,
    }),
    ...mapGetters({
      irResult: "incomeRider/irResult",
      irHistoricalResult: "incomeRider/irHistoricalResult",
    }),
  },
  watch: {
    // irSimulationResult() {
    // },
  },
};
</script>
<style lang></style>
