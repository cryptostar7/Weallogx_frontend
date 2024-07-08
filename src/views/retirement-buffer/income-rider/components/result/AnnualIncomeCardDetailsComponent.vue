<template lang>
  <div class="container-fluid cards-area">
    <div
      class="common-card-div1 d-flex justify-content-between flex-gap-12"
      id="card-amount-1"
    >
      <div class="mt-3 flex-1">
        <div
          :class="`incomeRiderCard incomeCard1 w-100 ${
            showResult > 0 ? '' : 'disable'
          }`"
        >
          <div class="d-flex gap-2 h-100">
            <div
              class="CardProgressBar lightProgress1 boxProgressCommon1"
            ></div>
            <div class="w-100">
              <p class="allCardHeadPara mb-2">
                {{ inputs.income_rider_account_name }}
                <span hidden>Flat Rate of Return</span>
              </p>
              <p class="cardRadioSwtchpara1 d-flex justify-content-between">
                <span>Total Distributions</span>
                <span>
                  {{
                    $numFormatWithDollar(
                      $arraySum(irResult.annual_income_rider_distribution)
                    )
                  }}</span
                >
              </p>
              <p class="cardRadioSwtchpara1 d-flex justify-content-between">
                <span>Longevity</span>
                <span>{{ irResult.income_rider_longevity }} Years</span>
              </p>
              <p
                class="cardRadioSwtchpara1 d-flex justify-content-between m-0 text-success"
              >
                <span>Shortfall</span>
               <span>None</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 flex-1">
        <div
          :class="`incomeRiderCard incomeCard2 w-100 ${
            showResult > 1 ? '' : 'disable'
          }`"
        >
          <div class="d-flex gap-2 h-100">
            <div
              class="CardProgressBar lightProgress2 boxProgressCommon1"
            ></div>
            <div class="w-100">
              <p class="allCardHeadPara mb-2">
                {{ inputs.comparative_vehicle_account_name }}
                <span
                  >Rate of Return 
                  <span class="ror-percent">- {{ $percentFormat(inputs.growth_rate) }}%</span></span
                >
              </p>
              <p class="cardRadioSwtchpara2 d-flex justify-content-between">
                <span>Total Distributions</span>
                <span>{{
                  $numFormatWithDollar(
                    $arraySum(irResult.annual_cv_distribution)
                  )
                }}</span>
              </p>
              <p class="cardRadioSwtchpara2 d-flex justify-content-between">
                <span>Longevity</span>
                <span
                  >{{
                    targetAnalysis != "longevity"
                      ? irResult.cv_longevity
                      : irResult.year_count
                  }}
                  Years</span
                >
              </p>
              <p class="cardRadioSwtchpara2 d-flex justify-content-between m-0">
                <span>{{
                  card2_shortfall_surplus >= 0 ? "Shortfall" : "Surplus"
                }}</span>
                <span
                  v-if="
                    card2_shortfall_surplus || irResult.shortfall_surplus_years
                  "
                  :class="
                    card2_shortfall_surplus >= 0 ? 'shortFall' : 'surPlus'
                  "
                >
                  <span
                    v-if="
                      targetAnalysis != 'longevity' &&
                      irResult.shortfall_surplus_years
                    "
                    >{{ irResult.shortfall_surplus_years }} Years -</span
                  >
                  {{
                    $numFormatWithDollar(
                      card2_shortfall_surplus.toString().replace("-", "")
                    ) || "$0"
                  }}</span
                >
                <span v-else>None</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 flex-1">
        <div
          :class="`incomeRiderCard incomeCard3 w-100 ${
            showResult > 2 ? '' : 'disable'
          }`"
        >
          <div class="d-flex gap-2 h-100">
            <div
              class="CardProgressBar lightProgress3 boxProgressCommon1"
            ></div>
            <div class="w-100">
              <p class="allCardHeadPara mb-2">
                {{ inputs.comparative_vehicle_account_name }}
                <span>Historical Returns</span>
              </p>
              <p class="cardRadioSwtchpara3 d-flex justify-content-between">
                <span>Total Distributions</span>
                <span>{{
                  $numFormatWithDollar(
                    $arraySum(irHistoricalResult.annual_cv_distribution)
                  )
                }}</span>
              </p>
              <p class="cardRadioSwtchpara3 d-flex justify-content-between">
                <span>Longevity</span>
                <span
                  >{{
                    targetAnalysis != "longevity"
                      ? irHistoricalResult.cv_longevity
                      : irResult.year_count
                  }}
                  Years</span
                >
              </p>
              <p class="cardRadioSwtchpara3 d-flex justify-content-between m-0">
                <span>{{
                  card3_shortfall_surplus >= 0 ? "Shortfall" : "Surplus"
                }}</span>
                <span
                  v-if="
                    irHistoricalResult.shortfall_surplus_years ||
                    card3_shortfall_surplus
                  "
                  :class="
                    card3_shortfall_surplus >= 0 ? 'shortFall' : 'surPlus'
                  "
                >
                  <span
                    v-if="
                      targetAnalysis != 'longevity' &&
                      irHistoricalResult.shortfall_surplus_years
                    "
                    >{{ irHistoricalResult.shortfall_surplus_years }} Years - </span
                  >{{
                    $numFormatWithDollar(
                      card3_shortfall_surplus.toString().replace("-", "")
                    ) || "$0"
                  }}
                </span>
                <span v-else>None</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      inputs: (state) => state.incomeRider.result.inputs || [],
      targetAnalysis: (state) => state.incomeRider.target_analysis_type,
      showResult: (state) => state.incomeRider.view_result,
    }),
    ...mapGetters({
      irResult: "incomeRider/irResult",
      irHistoricalResult: "incomeRider/irHistoricalResult",
    }),

    card2_shortfall_surplus() {
      if (this.targetAnalysis != "longevity") {
        return this.irResult.shortfall_surplus_value;
      } else {
        return (
          this.$arraySum(this.irResult.annual_income_rider_distribution) -
          this.$arraySum(
            this.targetAnalysis == "amount"
              ? this.irResult.annual_cv_distribution
              : this.irResult.optimization.optimal_distribution
          )
        );
      }
    },
    card3_shortfall_surplus() {
      if (this.targetAnalysis != "longevity") {
        return this.irHistoricalResult.shortfall_surplus_value;
      } else {
        return (
          this.$arraySum(
            this.irHistoricalResult.annual_income_rider_distribution
          ) -
          this.$arraySum(
            this.targetAnalysis == "amount"
              ? this.irHistoricalResult.annual_cv_distribution
              : this.irHistoricalResult.optimization.optimal_distribution
          )
        );
      }
    },
  },
};
</script>
<style lang></style>
