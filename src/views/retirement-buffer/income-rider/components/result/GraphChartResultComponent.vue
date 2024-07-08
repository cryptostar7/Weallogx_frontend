<template lang>
  <div class="ComparativeTableMainDiv rightDivTop4 active">
    <div class="d-flex justify-content-between px-3 py-2 bb-grey tab-head">
      <div class="d-flex align-items-center">
        <label for="rightCheckBox4" class="rghtTopHeadcommon nowrap"
          >Cumulative Income</label
        >
        <label class="rghtTopHeadcommon">
          <div class="annual-income-text-para ms-2 fs-12">
            How long can the {{ inputs.comparative_vehicle_account_name }} produce the same amount
            of income as the {{ inputs.income_rider_account_name }}’s Income Rider?
          </div>
        </label>
      </div>
      <div class="rightLeftDoubleLIneDegine">
        <svg
          width="13"
          height="7"
          viewBox="0 0 13 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2"></rect>
          <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2"></rect>
        </svg>
      </div>
    </div>
    <div class="collapseDivMain collapseDiv4" style="display: block">
      <hr class="collapseDivHr" />
      <div class="px-3 pt-3 pb-2">
        <div class="d-flex justify-content-center mt-2 tab-menu">
          <div
            class="nav SwtchBtnRprtBldr nav-pills"
            role="tablist"
            aria-orientation="vertical"
          >
            <div
              :class="resultType == 'guaranteed' ? 'active' : ''"
              @click="
                $store.dispatch('incomeRider/updateResultType', 'guaranteed')
              "
              id="v-pills-comulativeIncome1-tab"
              data-bs-toggle="pill"
              type="button"
              role="tab"
              aria-selected="true"
            >
              Guaranteed
            </div>
            <div
              :class="resultType == 'potential' ? 'active' : ''"
              @click="
                $store.dispatch('incomeRider/updateResultType', 'potential')
              "
              id="v-pills-comulativeIncome2-tab"
              data-bs-toggle="pill"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Potential
            </div>
          </div>
        </div>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade active show"
            id="v-pills-comulativeIncome1"
            role="tabpanel"
            aria-labelledby="v-pills-comulativeIncome1-tab"
          >
            <div class="container-fluid cards-area">
              <!-- Cards data -->
              <annual-income-graph-card-details-component />
            </div>
            <div class="container-fluid">
              <div class="CompMainProgrssBarDiv graph-area">
                <!-- Main tab 1 content start -->
                <div class="w-100 p-3">
                  <div class="position-relative">
                    <div class="collapseDivmdlHd text-center">
                      Target Analysis
                    </div>
                  </div>
                  <br />

                  <div class="d-flex justify-content-center mt-2">
                    <div
                      class="nav mltplSwtchDiv nav-pills"
                      role="tablist"
                      aria-orientation="vertical"
                      id="card-area-3"
                    >
                      <div
                        @click="
                          $store.dispatch(
                            'incomeRider/updateTargetAnalysisType',
                            'amount'
                          )
                        "
                        :class="targetAnalysis == 'amount' ? 'active' : ''"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-amount3"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-amount3"
                      >
                        Amount
                      </div>
                      <div
                        @click="
                          $store.dispatch(
                            'incomeRider/updateTargetAnalysisType',
                            'longevity'
                          )
                        "
                        :class="targetAnalysis == 'longevity' ? 'active' : ''"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-longevity3"
                        role="tab"
                        aria-controls="v-pills-longevity3"
                      >
                        Longevity
                      </div>
                      <div
                        @click="
                          $store.dispatch(
                            'incomeRider/updateTargetAnalysisType',
                            'return'
                          )
                        "
                        :class="targetAnalysis == '' ? 'active' : ''"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-return3"
                        role="tab"
                        aria-controls="v-pills-return3"
                      >
                        Return
                      </div>
                    </div>
                  </div>

                  <div class="tab-content">
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
                          @click="
                            $store.dispatch('incomeRider/updateViewResult', 0)
                          "
                        >
                          Individual
                        </div>
                        <div
                          :class="`${showResult > 2 ? 'active' : ''}`"
                          type="button"
                          role="tab"
                          aria-selected="false"
                          @click="
                            $store.dispatch('incomeRider/updateViewResult', 3)
                          "
                        >
                          Show All
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade active show"
                      id="v-pills-amount3"
                      role="tabpanel"
                    >
                      <!-- Amount tab start -->

                      <div class="tab-content">
                        <div
                          class="tab-pane fade active show"
                          id="v-pills-graphIndividual1"
                          role="tabpanel"
                        >
                          <!-- Income Rider Amount Graph Chart-->
                          <income-rider-amount-graph-chart-component />
                          <button
                            :class="`income-rider-show-next-btn ${
                              showResult > 2 ? 'disable' : ''
                            }`"
                            id="showMoreBtn"
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
                        <div
                          class="tab-pane fade"
                          id="v-pills-graphShowall1"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <!-- Amount showall tab start -->

                          <!-- Amount showall tab end -->
                        </div>
                      </div>
                      <!-- Amount tab end -->
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-longevity3"
                      role="tabpanel"
                    >
                      <!-- Longevity tab start -->
                      <div class="tab-content">
                        <div
                          class="tab-pane fade active show"
                          id="v-pills-graphIndividual2"
                          role="tabpanel"
                        >
                          <!-- Income Rider Longevity Chart -->
                          <income-rider-longevity-graph-chart-component />
                          <button
                            :class="`income-rider-show-next-btn  ${
                              showResult > 2 ? 'disable' : ''
                            }`"
                            id="showMoreBtn2"
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
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-graphShowall2"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <!-- Longevity showall tab start -->
                          2
                          <!-- Longevity showall tab end -->
                        </div>
                      </div>
                      <!-- Longevity tab end -->
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-return3"
                      role="tabpanel"
                    >
                      <annual-income-rider-success-probability-chart
                        currentTab="graph"
                      />
                    </div>
                  </div>
                </div>
                <!-- Main tab 1 content end -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <annual-income-disclosure-component />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AnnualIncomeDisclosureComponent from "./AnnualIncomeDisclosureComponent.vue";
import AnnualIncomeGraphCardDetailsComponent from "./AnnualIncomeGraphCardDetailsComponent.vue";
import IncomeRiderAmountGraphChartComponent from "./graph/IncomeRiderAmountGraphChartComponent.vue";
import IncomeRiderLongevityGraphChartComponent from "./graph/IncomeRiderLongevityGraphChartComponent.vue";
import AnnualIncomeRiderSuccessProbabilityChart from "./AnnualIncomeRiderSuccessProbabilityChart.vue";

export default {
  components: {
    AnnualIncomeDisclosureComponent,
    AnnualIncomeGraphCardDetailsComponent,
    IncomeRiderAmountGraphChartComponent,
    IncomeRiderLongevityGraphChartComponent,
    AnnualIncomeRiderSuccessProbabilityChart,
  },
  methods: {
    showNextHandler() {
      this.$store.dispatch("incomeRider/updateViewResult", this.showResult + 1);
    },
  },
  computed: {
    ...mapState({
      targetAnalysis: (state) => state.incomeRider.target_analysis_type,
      showResult: (state) => state.incomeRider.view_result,
      inputs: (state) => state.incomeRider.result.inputs || [],
      resultType: (state) => state.incomeRider.result_type,
    }),
  },
};
</script>
<style lang></style>
