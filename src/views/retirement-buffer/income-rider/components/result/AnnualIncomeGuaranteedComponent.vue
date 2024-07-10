<template lang>
  <div
    class="tab-pane fade active show"
    id="v-pills-annualFees1"
    role="tabpanel"
    aria-labelledby="v-pills-annualFees1-tab"
  >
    <!-- Card -->
    <annual-income-card-details-component />
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
                @click="
                  $store.dispatch(
                    'incomeRider/updateTargetAnalysisType',
                    'amount'
                  )
                "
                :class="targetAnalysis == 'amount' ? 'active' : ''"
                type="button"
                data-bs-toggle="pill"
                role="tab"
              >
                Amount
              </div>
              <div
                data-bs-toggle="pill"
                @click="
                  $store.dispatch(
                    'incomeRider/updateTargetAnalysisType',
                    'longevity'
                  )
                "
                :class="targetAnalysis == 'longevity' ? 'active' : ''"
                role="tab"
              >
                Longevity
              </div>
              <div
                data-bs-toggle="pill"
                @click="
                  $store.dispatch(
                    'incomeRider/updateTargetAnalysisType',
                    'return'
                  )
                "
                :class="targetAnalysis == 'return' ? 'active' : ''"
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
                @click="$store.dispatch('incomeRider/updateViewResult', 0)"
              >
                Individual
              </div>
              <div
                :class="`${showResult > 2 ? 'active' : ''}`"
                type="button"
                role="tab"
                aria-selected="false"
                @click="$store.dispatch('incomeRider/updateViewResult', 3)"
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
                      {{ inputs.income_rider_account_name }}
                      <span
                        v-if="irResult.annual_income_increase"
                        @click="
                          $store.dispatch(
                            'incomeRider/updateAnnualScheduleResultModal',
                            {
                              title: 'Increasing Annual Income Schedule',
                              data: irResult.annual_income_rider_distribution,
                            }
                          )
                        "
                        data-bs-toggle="modal"
                        data-bs-target="#incomeRiderScheduleTableModal"
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
                      ref="lineBarRef1"
                      id="line_bar_1"
                      :style="{
                        width: showResult >= 1 ? '100%' : 0,
                      }"
                    >
                      <label
                        class="amount-label-wrapper"
                        style="padding-left: 8px"
                        v-if="showResult >= 1"
                      >
                        <span id="wider_bar_1">{{
                          $numFormatWithDollar(
                            irResult.annual_income_rider_distribution.filter(
                              (item) => item > 0
                            )[0]
                          )
                        }}</span>
                        <span
                          v-if="irResult.annual_income_increase"
                          class="target-bar-span"
                          >Increasing by
                          {{ $percentFormat(irResult.annual_income_increase) }}
                          % per year</span
                        >
                      </label>
                    </div>
                  </div>
                  <div class="each-target-analysis-bar">
                    <p class="heading clr2">
                      {{ inputs.comparative_vehicle_account_name }}
                      - Flat Rate of Return
                      <span
                        v-if="irResult.annual_income_increase"
                        @click="
                          $store.dispatch(
                            'incomeRider/updateAnnualScheduleResultModal',
                            {
                              title: 'Increasing Annual Income Schedule',
                              data:
                                targetAnalysis == 'amount'
                                  ? irResult.annual_cv_distribution
                                  : irResult.optimization.optimal_distribution,
                            }
                          )
                        "
                        data-bs-toggle="modal"
                        data-bs-target="#incomeRiderScheduleTableModal"
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
                      ref="lineBarRef2"
                      id="line_bar_2"
                      :style="{
                        width:
                          showResult >= 2
                            ? getBarWidth(irResult.cv_longevity)
                            : 0,
                      }"
                    >
                      <label
                        class="amount-label-wrapper"
                        style="padding-left: 8px"
                      >
                        <span v-if="showResult >= 2">
                          <span id="wider_bar_2">{{
                            $numFormatWithDollar(
                              targetAnalysis == "amount"
                                ? irResult.annual_cv_distribution.filter(
                                    (item) => item > 0
                                  )[0]
                                : irResult.optimization.optimal_distribution.filter(
                                    (item) => item > 0
                                  )[0]
                            )
                          }}</span>
                          <span
                            v-if="irResult.annual_income_increase"
                            class="target-bar-span"
                            >Increasing by
                            {{
                              $percentFormat(irResult.annual_income_increase)
                            }}
                            % per year</span
                          >
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="each-target-analysis-bar">
                    <p class="heading clr3">
                      {{ inputs.comparative_vehicle_account_name }} - Historical
                      Market Returns
                      <span
                        v-if="irHistoricalResult.annual_income_increase"
                        @click="
                          $store.dispatch(
                            'incomeRider/updateAnnualScheduleResultModal',
                            {
                              title: 'Increasing Annual Income Schedule',
                              data:
                                targetAnalysis == 'amount'
                                  ? irHistoricalResult.annual_cv_distribution
                                  : irHistoricalResult.optimization
                                      .optimal_distribution,
                            }
                          )
                        "
                        data-bs-toggle="modal"
                        data-bs-target="#incomeRiderScheduleTableModal"
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
                      ref="lineBarRef3"
                      id="line_bar_3"
                      :style="{
                        width:
                          showResult > 2
                            ? getBarWidth(irHistoricalResult.cv_longevity)
                            : 0,
                      }"
                    >
                      <label
                        class="amount-label-wrapper"
                        style="padding-left: 8px"
                      >
                        <span v-if="showResult > 2">
                          <span id="wider_bar_3">{{
                            $numFormatWithDollar(
                              targetAnalysis == "amount"
                                ? irHistoricalResult.annual_cv_distribution.filter(
                                    (item) => item > 0
                                  )[0]
                                : irHistoricalResult.optimization.optimal_distribution.filter(
                                    (item) => item > 0
                                  )[0]
                            )
                          }}</span>
                          <span
                            v-if="irHistoricalResult.annual_income_increase"
                            class="target-bar-span"
                            >Increasing by
                            {{
                              $percentFormat(
                                irHistoricalResult.annual_income_increase
                              )
                            }}
                            % per year</span
                          >
                        </span>
                      </label>
                    </div>
                  </div>

                  <div class="scalling-div all-number-div w-100">
                    <span
                      class="all-number-div-span"
                      v-for="(item, index) in yearsLable"
                      :style="`left: ${(item / 33) * 100}%`"
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
import { mapState, mapGetters } from "vuex";
import AnnualIncomeCardDetailsComponent from "./AnnualIncomeCardDetailsComponent.vue";
import AnnualIncomeRiderSuccessProbabilityChart from "./AnnualIncomeRiderSuccessProbabilityChart.vue";
import { getIncomeRiderYearLabels } from "../../../../../services/helper";

export default {
  components: {
    AnnualIncomeCardDetailsComponent,
    AnnualIncomeRiderSuccessProbabilityChart,
  },
  methods: {
    adjustLabelPadding() {
      for (let i = 1; i <= 3; i++) {
        let lineBarRef = this.$refs[`lineBarRef${i}`];
        if (lineBarRef) {
          setTimeout(() => {
            let textLabel = lineBarRef.querySelector(".amount-label-wrapper");
            if (textLabel) {
              if (lineBarRef.offsetWidth <= textLabel.offsetWidth) {
                textLabel.style.paddingLeft = `${lineBarRef.offsetWidth + 6}px`;
                textLabel.classList.add("eachBarText");
              } else {
                textLabel.style.paddingLeft = `${8}px`;
                textLabel.classList.remove("eachBarText");
              }
            }
          }, [400]);
        }
      }
    },

    showNextHandler() {
      this.$store.dispatch("incomeRider/updateViewResult", this.showResult + 1);
    },
    getBarWidth(longevity) {
      return this.targetAnalysis != "longevity"
        ? (((longevity - 1) / this.irResult.year_count) * 100).toFixed(2) + "%"
        : "100%";
    },
  },
  watch: {
    targetAnalysis() {
      this.adjustLabelPadding();
    },
    showResult() {
      this.adjustLabelPadding();
    },
  },
  computed: {
    ...mapState({
      targetAnalysis: (state) => state.incomeRider.target_analysis_type,
      showResult: (state) => state.incomeRider.view_result,
      inputs: (state) => state.incomeRider.result.inputs || [],
    }),
    ...mapGetters({
      irResult: "incomeRider/irResult",
      irHistoricalResult: "incomeRider/irHistoricalResult",
    }),
    maxYearCount() {
      return this.irResult ? this.irResult.year_count : 0;
    },
    yearsLable() {
      let distribution1 = this.irResult.annual_income_rider_distribution;
      let distribution2 =
        this.targetAnalysis == "amount"
          ? this.irResult.annual_cv_distribution
          : this.irResult.optimization.optimal_distribution;
      let distribution3 =
        this.targetAnalysis == "amount"
          ? this.irHistoricalResult.annual_cv_distribution
          : this.irHistoricalResult.optimization.optimal_distribution;

      return getIncomeRiderYearLabels(
        distribution1,
        distribution2,
        distribution3
      );
    },
  },
};
</script>
<style lang></style>
