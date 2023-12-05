<template lang="">
  <div>
    <strategy-weight-component
      :visible="!$props.tabs.tab2 && !$props.tabs.tab3"
    />
    <strategy-weight-first-component
      :visible="$props.tabs.tab2 && !$props.tabs.tab3"
      ref="swRef1"
    />
    <strategy-weight-second-component
      :visible="$props.tabs.tab3"
      ref="swRef2"
    />
  </div>
</template>
<script>
import StrategyWeightComponent from "../historical-simulation/StrategyWeightComponent.vue";
import StrategyWeightFirstComponent from "../historical-simulation/StrategyWeightFirstcomponent.vue";
import StrategyWeightSecondComponent from "../historical-simulation/StrategyWeightSecondcomponent.vue";
export default {
  props: ["tabs"],
  components: {
    StrategyWeightComponent,
    StrategyWeightFirstComponent,
    StrategyWeightSecondComponent,
  },
  methods: {
    getRange: function () {
      let weighting = ["100%", "0%", "0%"];
      if (this.$props.tabs.tab2 && !this.$props.tabs.tab3) {
        weighting = this.$refs.swRef1.getRange();
      }

      if (this.$props.tabs.tab2 && this.$props.tabs.tab3) {
        weighting = this.$refs.swRef2.getRange();
      }

      return weighting;
    },
    setRange: function (w1, w2, w3) {
      if (this.$props.tabs.tab2 && !this.$props.tabs.tab3) {
        this.$refs.swRef1.setRange(w1, w2, w3);
      }

      if (this.$props.tabs.tab2 && this.$props.tabs.tab3) {
        this.$refs.swRef2.setRange(w1, w2, w3);
      }
    },
  },
};
</script>
<style lang=""></style>
