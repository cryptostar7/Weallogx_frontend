<template lang>
  <div
    class="common-card-div3 d-flex justify-content-between flex-gap-12"
    id="card-amount-3"
  >
    <div class="mt-3 flex-1">
      <div class="incomeRiderCard graph-card incomeCard1 w-100">
        <div class="d-flex gap-2 h-100">
          <div class="CardProgressBar lightProgress1 boxProgressCommon1"></div>
          <div class="w-100">
            <p class="allCardHeadPara mb-2">
              FIA - Income Rider
              <span hidden>Flat Rate of Return</span>
            </p>
            <p class="cardRadioSwtchpara1 d-flex justify-content-between">
              <span>Total Distributions</span>
              <span>{{
                $numFormatWithDollar(
                  $arraySum(result.annual_income_rider_distribution)
                )
              }}</span>
            </p>
            <p class="cardRadioSwtchpara1 d-flex justify-content-between">
              <span>Longevity</span>
              <span>{{ result.income_rider_longevity }} Years</span>
            </p>
            <p
              :class="`cardRadioSwtchpara1 d-flex justify-content-between m-0 ${
                result.shortfall_surplus_years > 0
                  ? 'text-success'
                  : 'text-danger'
              }`"
            >
              <span>{{
                result.shortfall_surplus_years > 0 ? "Surplus" : "Shortfall"
              }}</span>
              <span v-if="result.shortfall_surplus_years"
                >{{ result.shortfall_surplus_years }}
                -
                {{ $numFormatWithDollar(result.shortfall_surplus_value) }}</span
              >
              <span v-else>None</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 flex-1">
      <div
        :class="`incomeRiderCard graph-card incomeCard2 w-100 ${
          showResult > 1 ? '' : 'disable'
        }`"
      >
        <div class="d-flex gap-2 h-100">
          <div class="CardProgressBar lightProgress2 boxProgressCommon1"></div>
          <div class="w-100">
            <p class="allCardHeadPara mb-2">
              Schwab Brokerage
              <span>Flat Rate of Return</span>
            </p>
            <p class="cardRadioSwtchpara2 d-flex justify-content-between">
              <span>Total Distributions</span>
              <span>{{
                $numFormatWithDollar($arraySum(result.annual_cv_distribution))
              }}</span>
            </p>
            <p class="cardRadioSwtchpara2 d-flex justify-content-between">
              <span>Longevity</span>
              <span>{{ result.cv_longevity }} Years</span>
            </p>
            <p
              :class="`cardRadioSwtchpara2 d-flex justify-content-between m-0 ${
                result.shortfall_surplus_value > 0
                  ? 'text-success'
                  : 'text-danger'
              }`"
            >
              <span>{{
                result.shortfall_surplus_value > 0 ? "Surplus" : "Shortfall"
              }}</span>
              <span class="" v-if="result.shortfall_surplus_value"
                >{{ result.shortfall_surplus_years }}
                -
                {{ $numFormatWithDollar(result.shortfall_surplus_value) }}</span
              >
              <span v-else>None</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 flex-1">
      <div
        :class="`incomeRiderCard graph-card incomeCard3 w-100 ${
          showResult > 2 ? '' : 'disable'
        }`"
      >
        <div class="d-flex gap-2 h-100">
          <div class="CardProgressBar lightProgress3 boxProgressCommon1"></div>
          <div class="w-100">
            <p class="allCardHeadPara mb-2">
              Schwab Brokerage
              <span>Historical Returns</span>
            </p>
            <p class="cardRadioSwtchpara3 d-flex justify-content-between">
              <span>Total Distributions</span>
              <span>{{
                $numFormatWithDollar(
                  $arraySum(historical_result.annual_cv_distribution)
                )
              }}</span>
            </p>
            <p class="cardRadioSwtchpara3 d-flex justify-content-between">
              <span>Longevity</span>
              <span>{{ historical_result.cv_longevity }} Years</span>
            </p>

            <p
              :class="`cardRadioSwtchpara3 d-flex justify-content-between m-0 ${
                historical_result.shortfall_surplus_value > 0
                  ? 'text-success'
                  : 'text-danger'
              }`"
            >
              <span>{{
                historical_result.shortfall_surplus_value > 0
                  ? "Surplus"
                  : "Shortfall"
              }}</span>
              <span class v-if="historical_result.shortfall_surplus_value"
                >{{ historical_result.shortfall_surplus_years }}
                -
                {{
                  $numFormatWithDollar(
                    historical_result.shortfall_surplus_value
                  )
                }}</span
              >
              <span v-else>None</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["showResult"],
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
