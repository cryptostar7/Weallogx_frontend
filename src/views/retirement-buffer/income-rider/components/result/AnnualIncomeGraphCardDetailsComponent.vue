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
                  $arraySum(irResult.annual_income_rider_distribution)
                )
              }}</span>
            </p>
            <p class="cardRadioSwtchpara1 d-flex justify-content-between">
              <span>Longevity</span>
              <span>{{ irResult.income_rider_longevity }} Years</span>
            </p>
            <p
              :class="`cardRadioSwtchpara1 d-flex justify-content-between m-0 ${
                irResult.shortfall_surplus_years > 0
                  ? 'text-success'
                  : 'text-danger'
              }`"
            >
              <span>{{
                irResult.shortfall_surplus_years > 0 ? "Surplus" : "Shortfall"
              }}</span>
              <span v-if="irResult.shortfall_surplus_years"
                >{{ irResult.shortfall_surplus_years }}
                -
                {{ $numFormatWithDollar(irResult.shortfall_surplus_value) }}</span
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
                $numFormatWithDollar($arraySum(irResult.annual_cv_distribution))
              }}</span>
            </p>
            <p class="cardRadioSwtchpara2 d-flex justify-content-between">
              <span>Longevity</span>
              <span>{{ irResult.cv_longevity }} Years</span>
            </p>
            <p
              :class="`cardRadioSwtchpara2 d-flex justify-content-between m-0 ${
                irResult.shortfall_surplus_value > 0
                  ? 'text-success'
                  : 'text-danger'
              }`"
            >
              <span>{{
                irResult.shortfall_surplus_value > 0 ? "Surplus" : "Shortfall"
              }}</span>
              <span class="" v-if="irResult.shortfall_surplus_value"
                >{{ irResult.shortfall_surplus_years }}
                -
                {{ $numFormatWithDollar(irResult.shortfall_surplus_value) }}</span
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
                  $arraySum(irHistoricalResult.annual_cv_distribution)
                )
              }}</span>
            </p>
            <p class="cardRadioSwtchpara3 d-flex justify-content-between">
              <span>Longevity</span>
              <span>{{ irHistoricalResult.cv_longevity }} Years</span>
            </p>

            <p
              :class="`cardRadioSwtchpara3 d-flex justify-content-between m-0 ${
                irHistoricalResult.shortfall_surplus_value > 0
                  ? 'text-success'
                  : 'text-danger'
              }`"
            >
              <span>{{
                irHistoricalResult.shortfall_surplus_value > 0
                  ? "Surplus"
                  : "Shortfall"
              }}</span>
              <span class v-if="irHistoricalResult.shortfall_surplus_value"
                >{{ irHistoricalResult.shortfall_surplus_years }}
                -
                {{
                  $numFormatWithDollar(
                    irHistoricalResult.shortfall_surplus_value
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
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      showResult: (state) => state.incomeRider.view_result,
    }),
    ...mapGetters({
      irResult: "incomeRider/irResult",
      irHistoricalResult: "incomeRider/irHistoricalResult",
    })
  },
};
</script>
<style lang></style>
