<template lang>
  <div class="container-fluid cards-area">
    <div
      class="common-card-div1 d-flex justify-content-between flex-gap-12"
      id="card-amount-1"
    >
      <div class="mt-3 flex-1">
        <div
          :class="`incomeRiderCard incomeCard1 w-100 ${
            showResult > 0 || cardsVisible ? '' : 'disable'
          }`"
        >
          <div class="d-flex gap-2 h-100">
            <div
              class="CardProgressBar lightProgress1 boxProgressCommon1"
            ></div>
            <div class="w-100">
              <p class="allCardHeadPara mb-1">
                {{ inputs.income_rider_account_name }}
                <span hidden>Flat Rate of Return</span>
              </p>
              <p class="cardRadioSwtchpara1 mb-1 d-flex justify-content-between">
                <span>Total Distributions</span>
                <span>{{
                  $numFormatWithDollar(cards.card1.totalDistribution) || '$0'
                }}</span
                >
              </p>
              <p class="cardRadioSwtchpara1 mb-1 d-flex justify-content-between">
                <span>Longevity</span>
                <span>{{ cards.card1.longevity }} Years</span>
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
            showResult > 1 || cardsVisible ? '' : 'disable'
          }`"
        >
          <div class="d-flex gap-2 h-100">
            <div
              class="CardProgressBar lightProgress2 boxProgressCommon1"
            ></div>
            <div class="w-100">
              <p class="allCardHeadPara mb-1">
                {{ inputs.comparative_vehicle_account_name }}
                <span
                  >Rate of Return
                  <span class="ror-percent"
                    >- {{ $percentFormat(inputs.growth_rate) }}%</span
                  ></span
                >
              </p>
              <p class="cardRadioSwtchpara2 mb-1 d-flex justify-content-between">
                <span>Total Distributions</span>
                <span>{{
                  $numFormatWithDollar(cards.card2.totalDistribution) || '$0'
                }}</span>
              </p>
              <p class="cardRadioSwtchpara2 mb-1 d-flex justify-content-between">
                <span>Longevity</span>
                <span
                  >{{ cards.card2.longevity }}
                  Years</span
                >
              </p>
              <p class="cardRadioSwtchpara2 d-flex justify-content-between m-0">
                <span>{{
                  card2_shortfall_surplus >= 0 ? "Shortfall" : "Surplus"
                }}</span>
                <span
                  v-if="
                    card2_shortfall_surplus || cards.card2.shortfall_surplus_years
                  "
                  :class="
                    card2_shortfall_surplus >= 0 ? 'shortFall' : 'surPlus'
                  "
                >
                  <span
                    v-if="
                      targetAnalysis != 'longevity' &&
                      cards.card2.shortfall_surplus_years
                    "
                    >{{ cards.card2.shortfall_surplus_years }} Years -</span
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
            showResult > 2 || cardsVisible ? '' : 'disable'
          }`"
        >
          <div class="d-flex gap-2 h-100">
            <div
              class="CardProgressBar lightProgress3 boxProgressCommon1"
            ></div>
            <div class="w-100">
              <p class="allCardHeadPara mb-1">
                {{ inputs.comparative_vehicle_account_name }}
                <span>{{ inputs.index_allocation == "s_and_p_500" ? 'S&P 500' : inputs.index_allocation == "equities_and_bonds_60_40" ? 'Equities & Bonds 60/40' : inputs.index_allocation == "equities_and_bonds_50_50" ? 'Equities & Bonds 50/50' : 'Equities & Bonds 40/60' }}</span>
              </p>
              <p class="cardRadioSwtchpara3 mb-1 d-flex justify-content-between">
                <span>Total Distributions</span>
                <span>{{
                  $numFormatWithDollar(cards.card3.totalDistribution) || '$0'
                }}</span>
              </p>
              <p class="cardRadioSwtchpara3 mb-1 d-flex justify-content-between">
                <span>Longevity</span>
                <span
                  >{{ cards.card3.longevity }}
                  Years</span
                >
              </p>
              <p class="cardRadioSwtchpara3 d-flex justify-content-between m-0">
                <span>{{
                  card3_shortfall_surplus >= 0 ? "Shortfall" : "Surplus"
                }}</span>
                <span
                  v-if="
                    cards.card3.shortfall_surplus_years ||
                    card3_shortfall_surplus
                  "
                  :class="
                    card3_shortfall_surplus >= 0 ? 'shortFall' : 'surPlus'
                  "
                >
                  <span
                    v-if="
                      targetAnalysis != 'longevity' &&
                      cards.card3.shortfall_surplus_years
                    "
                    >{{ cards.card3.shortfall_surplus_years }} Years - </span
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
      cards: "incomeRider/cards",
    }),
    card2_shortfall_surplus() {
      return this.cards.card2["shortfall_surplus"]
    },
    card3_shortfall_surplus() {
      return this.cards.card3["shortfall_surplus"]
    },
    cardsVisible() {
      return ['return', 'amount'].includes(this.targetAnalysis)
    },
  },
};
</script>
<style lang></style>
