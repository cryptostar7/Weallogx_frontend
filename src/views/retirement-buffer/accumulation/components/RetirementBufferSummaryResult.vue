<template lang="">
  <div>
    <h2 class="summary_heading">Summary</h2>
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-md-6" v-if="marketResult">
          <div class="summary_each_card summary_card_clr_1">
            <h3 class="summary_each_card_heading">Market Account Alone</h3>
            <div class="summary_card_inner-div">
              <div class="each_card_left_part">
                <div class="container-fluid p-0">
                  <div class="row">
                    <div class="col-md-7 each_card_left_label">
                      Beginning Balance
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{
                        marketResult.beginning_balance
                          ? $numFormatWithDollar(marketResult.beginning_balance)
                          : "$0"
                      }}
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-7 each_card_left_label">
                      Ending Balance
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{
                        marketResult.market_ending_balance
                          ? $numFormatWithDollar(
                              marketResult.market_ending_balance
                            )
                          : "$0"
                      }}
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-7 each_card_left_label">
                      Total Distributions
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{
                        $numFormatWithDollar(
                          marketResult.total_distributions
                        ) || "$0"
                      }}
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-7 each_card_left_label">
                      Total Value
                      <span>
                        <common-tooltip-svg />
                        <span class="text-start full-width"
                          >Ending Balance + Total Distributions = Total
                          Value</span
                        ></span
                      >
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{
                        $numFormatWithDollar(
                          marketResult.market_ending_balance +
                            marketResult.total_distributions
                        ) || "$0"
                      }}
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-7 each_card_left_label">
                      Negative Years
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{ marketResult.rate_of_return_negative_years || 0 }}
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-7 each_card_left_label">
                      Average Rate of Return
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{
                        marketResult.average_rate_of_return
                          ? Number(
                              (
                                marketResult.average_rate_of_return * 100
                              ).toFixed(2)
                            )
                          : 0
                      }}%
                    </div>
                  </div>
                </div>
              </div>
              <div class="each_card_right_part">
                <p class="success_prob_para">
                  Success Probability
                  <span>
                    <common-tooltip-svg />
                    <span class="text-start"
                      >This shows the probability of success of the market
                      account alone after 10,000 simulations of randomized
                      returns</span
                    ></span
                  >
                </p>
                <div
                  class="pie progress_pie px-2"
                  :data-pie="JSON.stringify(pieData1)"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 px-2 mt-4 mt-md-0" v-if="marketBufferResult">
          <div
            :class="`summary_each_card summary_card_clr_2 ${
              marketAlone ? 'disable' : ''
            }`"
          >
            <h3 class="summary_each_card_heading summary_card_clr_2">
              Market + Buffer Account
            </h3>
            <div class="summary_card_inner-div">
              <div class="each_card_left_part">
                <div class="container-fluid p-0">
                  <div class="row">
                    <div class="col-md-7 each_card_left_label">
                      Beginning Balance
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{
                        marketBufferResult.beginning_balance
                          ? $numFormatWithDollar(
                              marketBufferResult.beginning_balance
                            )
                          : "$0"
                      }}
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-7 each_card_left_label">
                      Ending Balance
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{
                        marketBufferResult.total_ending_balance
                          ? $numFormatWithDollar(
                              marketBufferResult.total_ending_balance
                            )
                          : "$0"
                      }}
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-7 each_card_left_label">
                      Total Distributions
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{
                        $numFormatWithDollar(
                          marketBufferResult.total_distributions
                        ) || "$0"
                      }}
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-7 each_card_left_label">
                      Total Value
                      <span>
                        <common-tooltip-svg />
                        <span class="text-start full-width"
                          >Ending Balance + Total Distributions = Total
                          Value</span
                        ></span
                      >
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{
                        $numFormatWithDollar(
                          marketBufferResult.total_ending_balance +
                            marketBufferResult.total_distributions
                        ) || "$0"
                      }}
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-7 each_card_left_label">
                      Negative Years
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{
                        marketBufferResult.rate_of_return_negative_years || 0
                      }}
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-7 each_card_left_label">
                      Average Rate of Return
                    </div>
                    <div class="col-md-5 each_card_left_value">
                      {{
                        marketBufferResult.average_rate_of_return
                          ? Number(
                              (
                                marketBufferResult.average_rate_of_return * 100
                              ).toFixed(2)
                            )
                          : 0
                      }}%
                    </div>
                  </div>
                </div>
              </div>
              <div class="each_card_right_part">
                <p class="success_prob_para">
                  Success Probability
                  <span
                    ><common-tooltip-svg /><span class="right-0 text-start"
                      >This shows the probability of success of the market and
                      buffer accounts together after 10,000 simulations of
                      randomized returns</span
                    ></span
                  >
                </p>
                <div
                  class="pie progress_pie px-2"
                  :data-pie="JSON.stringify(pieData2)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CircularProgressBar from "../../../../assets/js/retirement-buffer/circularProgressBar.min.js";
import CommonTooltipSvg from "../../../components/common/CommonTooltipSvg.vue";

export default {
  components: { CommonTooltipSvg },
  data() {
    return {
      pieData1: {
        speed: 30,
        percent: 0,
        colorSlice: "#0E6651",
        colorCircle: "#6DAC9D",
        round: true,
      },
      pieData2: {
        speed: 30,
        percent: 0,
        colorSlice: "#1660A4",
        colorCircle: "#609BD2",
        round: true,
      },
    };
  },
  mounted() {
    if (this.simulations) {
      this.pieData1.percent = this.simulations.market_only_success_percentage;
      this.pieData2.percent = this.simulations.with_buffer_success_percentage;
    }

    this.generatePieChart();
  },
  methods: {
    updatePieChart: function () {
      if (this.simulations) {
        window.circleProgress.animationTo({
          index: 1,
          percent: this.simulations.market_only_success_percentage,
        });

        window.circleProgress.animationTo({
          index: 2,
          percent: this.simulations.with_buffer_success_percentage,
        });
      }
    },
    resetPieChart: function () {
      if (this.simulations) {
        window.circleProgress.animationTo({
          index: 1,
          percent: 0,
          speed: 0,
        });
        window.circleProgress.animationTo({
          index: 2,
          percent: 0,
          speed: 0,
        });
      }
    },
    generatePieChart: function () {
      // Summary card pie start
      // start the animation when the element is in the page view
      const elements = [].slice.call(document.querySelectorAll(".pie"));
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
  },
  computed: {
    marketAlone() {
      return this.$store.state.data.retirement_buffer.market_alone;
    },
    results() {
      return this.$store.getters.getRetirementBufferResults();
    },
    inputs() {
      return this.$store.state.data.retirement_buffer.auccumulation_results.inputs;
    },
    marketResult() {
      let rb = this.$store.state.data.retirement_buffer;
      if(rb.show_distribution){
        return rb.auccumulation_results.market_only_with_distribution.summary || {};
      }else{
        return rb.auccumulation_results.market_only_without_distribution.summary || {};
      }
    },
    marketBufferResult() {
      return this.results.summary ? this.results.summary : {};
    },
    simulations() {
      return this.$store.getters.getRetirementBufferSimulations() || [];
    },
  },
  watch: {
    marketAlone() {
      this.updatePieChart();
    },
    simulations(e) {
      this.updatePieChart();
    },
  },
};
</script>
<style lang=""></style>
