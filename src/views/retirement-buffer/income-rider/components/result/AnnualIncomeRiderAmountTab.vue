<template lang>
  <div class="row mt-5">

    <div class="col-md-6">
      <div class="target-analysis-bar-main-div">
        <div class="d-flex flex-column">
          <div class="d-flex gap-4 justify-content-center w-100">
            <div class="target-analysis-bar">
              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr1"
                :style="`height: ${growthRateBarHeight()}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr1">
                  <p>
                    <span class="bigBarNumberJsCls2"
                      >{{ $percentFormat(inputs.growth_rate) }}%</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="target-analysis-bar">
              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr2"
                :style="`height: ${optimalGrowthRateBarHeight()}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr2">
                  <p>
                    <span class="bigBarNumberJsCls2"
                      >{{
                        $percentFormat(
                          irResult.optimization.optimal_growth_rate || 0
                        )
                      }}%</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p class="bar-long-para">
            The required constant rate of return for the
            {{ inputs.comparative_vehicle_account_name }} to match the
            {{ inputs.income_rider_account_name }}’s income production is
            <span
              >{{
                $percentFormat(irResult.optimization.optimal_growth_rate || 0)
              }}%</span
            >.
          </p>
        </div>
      </div>
    </div>





    <div class="col-md-6">
      <div class="target-analysis-bar-main-div">
        <div class="d-flex flex-column">
          <div class="d-flex gap-4 justify-content-center w-100">
            <div class="target-analysis-bar">
              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr1"
                :style="`height: ${growthRateBarHeight()}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr1">
                  <p>
                    <span class="bigBarNumberJsCls2"
                      >{{ $percentFormat(inputs.growth_rate) }}%</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="target-analysis-bar">
              <div
                class="target-analysis-inner-bar income-rider-inner-bar inner-clr2"
                :style="`height: ${optimalGrowthRateBarHeight()}%`"
              >
                <div class="target-analysis-bottom-bar-area bottom-clr2">
                  <p>
                    <span class="bigBarNumberJsCls2"
                      >{{
                        $percentFormat(
                          irResult.optimization.optimal_growth_rate || 0
                        )
                      }}%</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p class="bar-long-para">
            The required constant rate of return for the
            {{ inputs.comparative_vehicle_account_name }} to match the
            {{ inputs.income_rider_account_name }}’s income production is
            <span
              >{{
                $percentFormat(irResult.optimization.optimal_growth_rate || 0)
              }}%</span
            >.
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
      success_required: 0,
      pieData: {
        speed: 30,
        percent: 0,
        colorSlice: "#4A8ECD",
        colorCircle: "#9DC6EB",
        round: true,
      },
    };
  },
  mounted() {
    // if (this.irSimulationResult) {
    //   this.pieData.percent = this.irSimulationResult.success_percentage;
    //   this.success_required = this.irSimulationResult.success_count;
    // }
  },
  methods: {
    growthRateBarHeight() {
      let value1 = Number(this.irResult.optimization.optimal_growth_rate);
      let value2 = Number(this.inputs.growth_rate);

      if (value2 >= value1) {
        return 100;
      }

      let unit = value2 / value1;
      return unit * 100;
    },
    optimalGrowthRateBarHeight() {
      let value1 = Number(this.inputs.growth_rate);
      let value2 = Number(this.irResult.optimization.optimal_growth_rate);

      if (value2 >= value1) {
        return 100;
      }

      let unit = value2 / value1;
      return unit * 100;
    },
  },
  computed: {
    ...mapState({
      inputs: (state) => state.incomeRider.result.inputs || [],
      resultType: (state) => state.incomeRider.result_type,
    }),
    ...mapGetters({
      irResult: "incomeRider/irResult",
    //   irSimulationResult: "incomeRider/irSimulationResult",
    }),
  },
  watch: {
    // irSimulationResult() {
    // },
  },
};
</script>
<style lang></style>
