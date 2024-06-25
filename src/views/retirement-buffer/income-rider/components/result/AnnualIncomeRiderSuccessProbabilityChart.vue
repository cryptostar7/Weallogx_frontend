<template lang>
  <div class="row mt-5">
    <div class="col-md-6">
      <div class="target-analysis-bar-main-div">
        <div class="d-flex flex-column">
          <div class="d-flex gap-4 justify-content-center w-100">
            <div class="target-analysis-bar">
              <div
                class="target-analysis-inner-bar inner-clr1"
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
                class="target-analysis-inner-bar inner-clr2"
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
            <span>{{ success_required }}</span
            >.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-6 position-relative border-before-col">
      <p class="target-analysis-success-prob-para mb-2">
        Success Probability
      </p>
      <div
        :class="`ir${
          currentTab || ''
        }Pie pie target-analysis-progress-pie mx-auto`"
        :data-pie="JSON.stringify(pieData)"
        data-pie-index="2"
      ></div>
      <p class="pie-long-para">
        The probability that the
        {{ inputs.comparative_vehicle_account_name }} will match the
        {{ inputs.income_rider_account_name }}’s income production relying upon
        market returns is <span>{{ pieData.percent }}%</span>.
      </p>
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
        colorSlice: "#1660A4",
        colorCircle: "#609BD2",
        round: true,
      },
    };
  },
  mounted() {
    if (this.ir_simulation_result && this.ir_simulation_result.guaranteed) {
      this.pieData.percent =
        this.ir_simulation_result.guaranteed.success_percentage;
      this.success_required =
        this.ir_simulation_result.guaranteed.success_count;
    }

    this.generatePieChart();
  },
  methods: {
    generatePieChart: function () {
      // Summary card pie start
      // start the animation when the element is in the page view
      let className = `.ir${this.$props.currentTab || ""}Pie`;
      const elements = [].slice.call(document.querySelectorAll(className));
      window.circleProgress = new CircularProgressBar("pie");
      if ("IntersectionObserver" in window) {
        const config = {
          root: null,
          rootMargin: "0px",
          threshold: 0.75,
        };
        const ovserver = new IntersectionObserver((entries, observer) => {
          entries.map((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
              window.circleProgress.initial(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, config);

        elements.map((item) => {
          ovserver.observe(item);
        });
      } else {
        elements.map((element) => {
          window.circleProgress.initial(element);
        });
      }
    },
    updatePieChart: function () {
      if (this.ir_simulation_result && this.ir_simulation_result.guaranteed) {
        this.success_required =
          this.ir_simulation_result.guaranteed.success_count;
        this.pieData.percent =
          this.ir_simulation_result.guaranteed.success_percentage;
        window.circleProgress.animationTo({
          index: 1,
          percent: this.ir_simulation_result.guaranteed.success_percentage,
        });
      }
    },
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
    }
  },
  computed: {
    ...mapState({
      ir_simulation_result: (state) =>
        state.incomeRider.data.ir_simulation_result,
      inputs: (state) => state.incomeRider.data.result.inputs || [],
    }),
    ...mapGetters({
      irResult: "incomeRider/irResult",
    })
  },
  watch: {
    ir_simulation_result(e) {
      this.updatePieChart();
    },
  },
};
</script>
<style lang></style>
