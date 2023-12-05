<template lang="">
  <div>
    <strategy-weight-component
      :visible="!$props.tabs.tab2 && !$props.tabs.tab3"
    />
    <stretagy-weight-first-component
      :visible="$props.tabs.tab2 && !$props.tabs.tab3"
      ref="swRef1"
    />
    <stretagy-weight-second-component
      :visible="$props.tabs.tab3"
      ref="swRef2"
    />
  </div>
</template>
<script>
import StrategyWeightComponent from "./../historical-simulation/StrategyWeightComponent.vue";
import StretagyWeightFirstComponent from "./../historical-simulation/StretagyWeightfirstcomponent.vue";
import StretagyWeightSecondComponent from "./../historical-simulation/StretagyWeightSecondcomponent.vue";
export default {
  props: ["tabs"],
  components: {
    StrategyWeightComponent,
    StretagyWeightFirstComponent,
    StretagyWeightSecondComponent,
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
