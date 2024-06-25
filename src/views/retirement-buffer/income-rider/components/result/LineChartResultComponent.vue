<template lang>
  <div class="ComparativeTableMainDiv rightDivTop4 active">
    <div class="d-flex justify-content-between px-3 py-2 bb-grey tab-head">
      <div class="d-flex align-items-center">
        <label for="rightCheckBox4" class="rghtTopHeadcommon nowrap"
          >Annual Income</label
        >
        <label class="rghtTopHeadcommon">
          <div class="annual-income-text-para ms-2 fs-12">
            How long can the
            {{ inputs.comparative_vehicle_account_name }} produce the same
            amount of income as the {{ inputs.income_rider_account_name }}’s
            Income Rider?
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
              id="v-pills-annualFees1-tab"
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
              id="v-pills-comulativeFees1-tab"
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
          <annual-income-guaranteed-component />
        </div>
      </div>
      <div class="bottom-disclosure pt-0 px-3" id="disclosure1" data-dc="1">
        <div class="disclosure-textarea" contenteditable="true">
          <b>Disclosure:</b> This tool is designed to provide insight and
          opportunities for discussion regarding certain retirement income
          strategies, including annuities, that may prove beneficial amid a
          myriad of potential outcomes. THIS IS NOT AN ANNUITY ILLUSTRATION. IT
          IS A PORTRAYAL OF A CONCEPT. Certain elements of the financial vehicle
          presented may be guaranteed and will be under a heading indicating
          such. While every reasonable effort is made to ensure proper
          calculations and their portrayal, it is impossible for any software or
          advisor to accurately predict your future. Unpredictable variables can
          and likely will cause material changes in the outcomes projected,
          other than those that are guaranteed, if any. Any retirement strategy
          should only be undertaken after discussion with appropriate financial,
          legal, and tax advisors. The data presented in no way predicts what
          your future income will be in reality other than those that are
          guaranteed. No implication is asserted that undertaking any strategy,
          including the one contemplated here, is superior to a another
          strategy. Claims paying ability of an insurance company are backed by
          its financial ratings and fiscal health. Historical market returns use
          the raw data of the S&P 500 [(60%)] and a blended bond mix [(40%]) for
          the most recent [33] years. This does not constitute financial, legal,
          or tax advice to you. Past performance is never guarantee or
          indicative of future results.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AnnualIncomeGuaranteedComponent from "./AnnualIncomeGuaranteedComponent.vue";

export default {
  components: {
    AnnualIncomeGuaranteedComponent,
  },
  computed: {
    ...mapState({
      inputs: (state) => state.incomeRider.data.result.inputs || [],
      resultType: (state) => state.incomeRider.data.result_type,
    }),
  },
};
</script>
<style lang></style>
