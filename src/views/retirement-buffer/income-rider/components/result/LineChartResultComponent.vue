<template lang>
  <div class="ComparativeTableMainDiv rightDivTop4 active">
    <div class="d-flex justify-content-between px-3 py-2 bb-grey tab-head">
      <div class="d-flex align-items-center">
        <label for="rightCheckBox4" class="rghtTopHeadcommon nowrap"
          >Annual Income</label
        >
        <label class="rghtTopHeadcommon">
          <div class="annual-income-text-para ms-2 fs-12 mt-1">
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
              :class="`${resultType == 'potential' ? 'active' : ''} ${
                !inputs.non_guaranteed_income_first_year ? 'disabled' : ''
              }`"
              @click="
                inputs.non_guaranteed_income_first_year
                  ? $store.dispatch('incomeRider/updateResultType', 'potential')
                  : false
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
      <annual-income-disclosure-component />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AnnualIncomeGuaranteedComponent from "./AnnualIncomeGuaranteedComponent.vue";
import AnnualIncomeDisclosureComponent from "./AnnualIncomeDisclosureComponent.vue";

export default {
  components: {
    AnnualIncomeGuaranteedComponent,
    AnnualIncomeDisclosureComponent,
  },
  computed: {
    ...mapState({
      inputs: (state) => state.incomeRider.result.inputs || [],
      resultType: (state) => state.incomeRider.result_type,
    }),
  },
};
</script>
<style lang></style>
