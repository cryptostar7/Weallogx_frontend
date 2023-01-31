<template lang="">
  <div  :class="`empty ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="5">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="6">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`">
        <div :class="`ComparativeTableMainDiv rightDivTop12 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox12" type="checkbox" :checked="activeTabs[keyId]"
                    class="checkbox2 rightCheckBox12" rightCheckAttr="12"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox12" class="rghtTopHeadcommon">Comparative Values</label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="comparativeLessDiv collapseDiv12" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <div class="d-flex justify-content-center mt-2">
              <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist" aria-orientation="vertical">
                <div class="active" data-bs-toggle="pill" data-bs-target="#v-pills-compTable" type="button" role="tab"
                  aria-controls="v-pills-compTable" aria-selected="true">
                  Table
                </div>
                <div data-bs-toggle="pill" data-bs-target="#v-pills-compGraph" type="button" role="tab"
                  aria-controls="v-pills-compGraph" aria-selected="false">Graph</div>
              </div>
            </div>
            <div :class="`commonCollapse comparativeLessDiv3  position-relative`">
              <!-- <hr class="collapseDivHr"> -->
              <div class="tab-content">
              <comparative-values-table-component />
              <comparative-values-graph-component />
              </div>
            </div>
            <historical-disclosure-component :hideFee="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HistoricalDisclosureComponent from "./HistoricalDisclosureComponent.vue";
import ComparativeValuesGraphComponent from "./comparative-values/ComparativeValuesGraphComponent.vue";
import ComparativeValuesTableComponent from "./comparative-values/ComparativeValuesTableComponent.vue";

export default {
  props: ["keyId"],
  components: { HistoricalDisclosureComponent, ComparativeValuesGraphComponent, ComparativeValuesTableComponent },
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
    }
  },
};
</script>
<style lang="">
</style>