<template lang>
  <div class="bottom-disclosure pt-0 px-3" id="disclosure1" data-dc="1">
    <div class="disclosure-textarea" contenteditable="true">
      <b>Disclosure:</b> This tool is designed to provide insight and
      opportunities for discussion regarding certain retirement income
      strategies, including annuities, that may prove beneficial amid a myriad
      of potential outcomes. THIS IS NOT AN ANNUITY ILLUSTRATION. IT IS A
      PORTRAYAL OF A CONCEPT. Certain elements of the financial vehicle
      presented may be guaranteed and will be under a heading indicating such.
      While every reasonable effort is made to ensure proper calculations and
      their portrayal, it is impossible for any software or advisor to
      accurately predict your future. Unpredictable variables can and likely
      will cause material changes in the outcomes projected, other than those
      that are guaranteed, if any. Any retirement strategy should only be
      undertaken after discussion with appropriate financial, legal, and tax
      advisors. The data presented in no way predicts what your future income
      will be in reality other than those that are guaranteed. No implication is
      asserted that undertaking any strategy, including the one contemplated
      here, is superior to a another strategy. Claims paying ability of an
      insurance company are backed by its financial ratings and fiscal health.
      Historical market returns use the raw data of the S&P 500 ({{
        indexAllocations[inputs.index_allocation]
          ? indexAllocations[inputs.index_allocation].sp
          : 0
      }}%) and a blended bond mix ({{
        indexAllocations[inputs.index_allocation]
          ? indexAllocations[inputs.index_allocation].bond
          : 0
      }}%) for the most recent
      {{ inputs ? inputs.plan_through_age - inputs.current_age+1 : 0 }} years.
      This does not constitute financial, legal, or tax advice to you. Past
      performance is never guarantee or indicative of future results.
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      inputs: (state) => state.incomeRider.result.inputs || [],
    }),
    indexAllocations() {
      return {
        equities_and_bonds_60_40: { sp: 60, bond: 40 },
        equities_and_bonds_50_50: { sp: 50, bond: 50 },
        equities_and_bonds_40_60: { sp: 40, bond: 60 },
        s_and_p_500: { sp: 100, bond: 0 },
      };
    },
  },
};
</script>
<style lang></style>
