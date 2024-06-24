<template lang>
  <div
    class="tab-pane fade active show"
    id="v-pills-annualFees1"
    role="tabpanel"
    aria-labelledby="v-pills-annualFees1-tab"
  >
    <!-- Card -->
    <!-- :result="result.income_rider_guaranteed_fixed_return || {}" -->
    <annual-income-card-details-component :showResult="showResult" />
    <div class="container-fluid">
      <div class="CompMainProgrssBarDiv graph-area">
        <!-- Main tab 1 content start -->
        <div class="w-100 p-3">
          <div class="position-relative">
            <div class="collapseDivmdlHd text-center">Target Analysis</div>
          </div>
          <br />

          <div class="d-flex justify-content-center mt-2">
            <div
              class="nav mltplSwtchDiv nav-pills"
              role="tablist"
              aria-orientation="vertical"
              id="card-area-1"
            >
              <div
                @click="targetAnalysis = 'amount'"
                class="active"
                type="button"
                data-bs-toggle="pill"
                role="tab"
              >
                Amount
              </div>
              <div
                data-bs-toggle="pill"
                @click="targetAnalysis = 'longevity'"
                role="tab"
              >
                Longevity
              </div>
              <div
                data-bs-toggle="pill"
                @click="targetAnalysis = 'return'"
                role="tab"
              >
                Return
              </div>
            </div>
          </div>
          <div
            v-if="targetAnalysis != 'return'"
            class="d-flex justify-content-center mt-2 w-25 mx-auto"
          >
            <div
              class="nav SwtchBtnRprtBldr nav-pills"
              role="tablist"
              aria-orientation="vertical"
            >
              <div
                :class="`${showResult < 3 ? 'active' : ''}`"
                type="button"
                role="tab"
                aria-selected="true"
                @click="showResult = 1"
              >
                Individual
              </div>
              <div
                :class="`${showResult > 2 ? 'active' : ''}`"
                type="button"
                role="tab"
                aria-selected="false"
                @click="showResult = 3"
              >
                Show All
              </div>
            </div>
          </div>
          <div class="tab-content">
            <div
              v-if="targetAnalysis != 'return'"
              class="tab-pane fade active show"
              id="v-pills-amount"
              role="tabpanel"
            >
              <!-- Amount tab start -->
              <div class="tab-content">
                <div
                  class="tab-pane fade active show"
                  id="v-pills-individual1"
                  role="tabpanel"
                >
                  <!-- Amount individual tab start -->
                  <div class="each-target-analysis-bar">
                    <p class="heading clr1">
                      FIA - Income Rider
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#incomeRiderTableModal2"
                      >
                        <svg
                          class="ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 13 11"
                          fill="none"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="11.6923"
                            height="10"
                            rx="0.5"
                            stroke="black"
                          />
                          <rect
                            x="6.1899"
                            y="2.69772"
                            width="0.317308"
                            height="8.14423"
                            rx="0.158654"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                          <rect
                            x="12.5367"
                            y="2.69772"
                            width="0.317308"
                            height="12.375"
                            rx="0.158654"
                            transform="rotate(90 12.5367 2.69772)"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                          <rect
                            x="12.5367"
                            y="5.23678"
                            width="0.317308"
                            height="12.375"
                            rx="0.158654"
                            transform="rotate(90 12.5367 5.23678)"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                          <rect
                            x="12.5367"
                            y="7.77584"
                            width="0.317308"
                            height="12.375"
                            rx="0.158654"
                            transform="rotate(90 12.5367 7.77584)"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                        </svg>
                      </span>
                    </p>
                    <div
                      class="target-analysis-each-bars barClr1 text-white"
                      style="width: 100%"
                    >
                      <span id="wider_bar_1">{{
                        $numFormatWithDollar(
                          result.annual_income_rider_distribution.filter(
                            (item) => item > 0
                          )[0]
                        )
                      }}</span>
                      <span
                        v-if="result.annual_income_increase"
                        class="target-bar-span"
                        >Increasing by
                        {{ $percentFormat(result.annual_income_increase) }}
                        % per year</span
                      >
                    </div>
                  </div>
                  <div class="each-target-analysis-bar">
                    <p class="heading clr2">
                      Schwab Brokerage Account - Flat Rate of Return
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#incomeRiderTableModal2"
                      >
                        <svg
                          class="ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 13 11"
                          fill="none"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="11.6923"
                            height="10"
                            rx="0.5"
                            stroke="black"
                          />
                          <rect
                            x="6.1899"
                            y="2.69772"
                            width="0.317308"
                            height="8.14423"
                            rx="0.158654"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                          <rect
                            x="12.5367"
                            y="2.69772"
                            width="0.317308"
                            height="12.375"
                            rx="0.158654"
                            transform="rotate(90 12.5367 2.69772)"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                          <rect
                            x="12.5367"
                            y="5.23678"
                            width="0.317308"
                            height="12.375"
                            rx="0.158654"
                            transform="rotate(90 12.5367 5.23678)"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                          <rect
                            x="12.5367"
                            y="7.77584"
                            width="0.317308"
                            height="12.375"
                            rx="0.158654"
                            transform="rotate(90 12.5367 7.77584)"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                        </svg>
                      </span>
                    </p>
                    <div
                      class="target-analysis-each-bars barClr2 text-white"
                      :style="{ width: showResult >= 2 ? '100%' : 0 }"
                    >
                      <span v-if="showResult >= 2">
                        <span id="wider_bar_2">{{
                          $numFormatWithDollar(
                            targetAnalysis == "amount"
                              ? result.annual_cv_distribution.filter(
                                  (item) => item > 0
                                )[0]
                              : result.optimization.optimal_distribution.filter(
                                  (item) => item > 0
                                )[0]
                          )
                        }}</span>
                        <span
                          v-if="result.annual_income_increase"
                          class="target-bar-span"
                          >Increasing by
                          {{ $percentFormat(result.annual_income_increase) }}
                          % per year</span
                        >
                      </span>
                    </div>
                  </div>
                  <div class="each-target-analysis-bar">
                    <p class="heading clr3">
                      Schwab Brokerage Account - Historical Market Returns
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#incomeRiderTableModal2"
                      >
                        <svg
                          class="ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 13 11"
                          fill="none"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="11.6923"
                            height="10"
                            rx="0.5"
                            stroke="black"
                          />
                          <rect
                            x="6.1899"
                            y="2.69772"
                            width="0.317308"
                            height="8.14423"
                            rx="0.158654"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                          <rect
                            x="12.5367"
                            y="2.69772"
                            width="0.317308"
                            height="12.375"
                            rx="0.158654"
                            transform="rotate(90 12.5367 2.69772)"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                          <rect
                            x="12.5367"
                            y="5.23678"
                            width="0.317308"
                            height="12.375"
                            rx="0.158654"
                            transform="rotate(90 12.5367 5.23678)"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                          <rect
                            x="12.5367"
                            y="7.77584"
                            width="0.317308"
                            height="12.375"
                            rx="0.158654"
                            transform="rotate(90 12.5367 7.77584)"
                            stroke="black"
                            stroke-width="0.317308"
                          />
                        </svg>
                      </span>
                    </p>
                    <div
                      class="target-analysis-each-bars barClr3 text-white"
                      :style="{ width: showResult > 2 ? '100%' : 0 }"
                    >
                      <span v-if="showResult > 2" id="wider_bar_3">{{
                        $numFormatWithDollar(
                          targetAnalysis == "amount"
                              ? historical_result.annual_cv_distribution.filter(
                                  (item) => item > 0
                                )[0]
                              : historical_result.optimization.optimal_distribution.filter(
                                  (item) => item > 0
                                )[0]
                        )
                      }}</span>
                      <span v-if="showResult > 2" class="target-bar-span"
                        >Increasing by
                        {{
                          $percentFormat(
                            historical_result.annual_income_increase
                          )
                        }}
                        % per year</span
                      >
                    </div>
                  </div>
                  <div class="scalling-div">
                    <span
                      v-for="(item, index) in result ? result.year_count : 0"
                      :key="index"
                      >{{ item }}</span
                    >
                  </div>
                  <p class="scalling-div-label">Years</p>
                  <button
                    :class="`income-rider-show-next-btn ${
                      showResult > 2 ? 'disable' : ''
                    }`"
                    @click="showNextHandler"
                  >
                    Show Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      fill="none"
                    >
                      <rect
                        x="7.78125"
                        y="10"
                        width="10.9992"
                        height="3.14262"
                        rx="1.57131"
                        transform="rotate(-135 7.78125 10)"
                        fill="white"
                      />
                      <rect
                        x="6.03906"
                        y="7.78125"
                        width="10.9992"
                        height="3.14262"
                        rx="1.57131"
                        transform="rotate(-45 6.03906 7.78125)"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <!-- Amount individual tab end -->
                </div>
              </div>
              <!-- Amount tab end -->
            </div>

            <div
              class="tab-pane fade active show"
              v-if="targetAnalysis == 'return'"
              role="tabpanel"
            >
              <annual-income-rider-success-probability-chart />
            </div>
          </div>
        </div>
        <!-- Main tab 1 content end -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AnnualIncomeCardDetailsComponent from "./AnnualIncomeCardDetailsComponent.vue";
import AnnualIncomeRiderSuccessProbabilityChart from "./AnnualIncomeRiderSuccessProbabilityChart.vue";

export default {
  components: {
    AnnualIncomeCardDetailsComponent,
    AnnualIncomeRiderSuccessProbabilityChart,
  },
  data() {
    return {
      showResult: 1,
      targetAnalysis: "amount",
    };
  },
  methods: {
    showNextHandler() {
      this.showResult = this.showResult + 1;
    },
  },
  computed: {
    ...mapState({
      ir_result: (state) => state.incomeRider.data.result,
      inputs: (state) => state.incomeRider.data.result.inputs || [],
    }),
    result() {
      return this.ir_result.income_rider_guaranteed_fixed_return ?? [];
    },
    historical_result() {
      return this.ir_result.income_rider_guaranteed_index_allocation ?? [];
    },
  },
};
</script>
<style lang></style>
