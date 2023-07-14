<template lang="">
  <div :class="`empty report-card-wrapper ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="5">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="6">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`" id="feeAnalysisTabView">
        <div :class="`ComparativeTableMainDiv rightDivTop6 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey tab-head">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox6" type="checkbox" :checked="activeTabs[keyId]" class="checkbox2 commonRadioBtn1 rightCheckBox6" rightCheckAttr="6" @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <div class="d-flex">
                <label for="rightCheckBox6" class="rghtTopHeadcommon activeTabs[keyId]">Fee Analysis <span
                  class="ms-3 equalThingTabTxt" id="feeSubText"></span></label>
                <!-- <p></p> -->
              </div>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv6" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
              <div class="d-flex justify-content-center tab-menu">
                <div class="nav SwtchBtnRprtBldr wide nav-pills" role="tablist" aria-orientation="vertical">
                  <div class="active" id="v-pills-annualFees-tab" data-bs-toggle="pill" data-bs-target="#v-pills-annualFees" type="button" role="tab" aria-controls="v-pills-annualFees" aria-selected="true" @click="manageText($event, 1)">
                    Annual Fees </div>
                  <div id="v-pills-comulativeFees-tab" data-bs-toggle="pill" data-bs-target="#v-pills-comulativeFees" type="button" role="tab" aria-controls="v-pills-comulativeFees" aria-selected="false" @click="manageText($event, 2)">Cumulative
                    Fees </div>
                  <div id="v-pills-valueEfficiency-tab" data-bs-toggle="pill" data-bs-target="#v-pills-valueEfficiency" type="button" role="tab" aria-controls="v-pills-valueEfficiency" aria-selected="false" @click="manageText($event, 3)">Value Efficiency </div>
                  <div id="v-pills-expenseRatio-tab" data-bs-toggle="pill" data-bs-target="#v-pills-expenseRatio" type="button" role="tab" aria-controls="v-pills-expenseRatio" aria-selected="false" @click="manageText($event, 4)">Expense Ratio </div>
                </div>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <annual-fee-tab /> 
                <cummulative-fee-tab /> 
                <value-efficiency-fee-tab /> 
                <expense-ratio-tab />
              </div>
            </div>
            <comparative-disclosure-component v-if="activeTabs[keyId]" :feetab="true" :currentTab="6"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ComparativeDisclosureComponent from "./ComparativeDisclosureComponent.vue";
  import AnnualFeeTab from "./FeeAnalysisComponent/AnnualFeeTab.vue";
  import CummulativeFeeTab from "./FeeAnalysisComponent/CummulativeFeeTab.vue";
  import ValueEfficiencyFeeTab from "./FeeAnalysisComponent/ValueEfficiencyFeeTab.vue";
  import ExpenseRatioTab from "./FeeAnalysisComponent/ExpenseRatioTab.vue";

  export default {
    props: ["keyId"],
    components: { ComparativeDisclosureComponent, AnnualFeeTab, CummulativeFeeTab, ValueEfficiencyFeeTab, ExpenseRatioTab },
    data() {
      return {
        activeTabs: this.$store.state.data.reportTabs.active,
      };
    },
    methods: {
      hideItsBar: function(e, idx){
        let expenseCard = document.querySelector(".expenseCard");
        let targetBar = expenseCard.querySelectorAll(".cumulativeprogreeDivcommon")[idx];
        targetBar.classList.toggle("d-none");
      },
      manageText: function(e, idx){
        if(e.target.classList.contains("active") && idx == 3){
          document.getElementById("feeSubText").textContent = "For ever dollar in fees, how much value do you receive in return?";
        }else if(e.target.classList.contains("active") && idx == 4){
          document.getElementById("feeSubText").textContent = "Average total value expense ratio";
        }else{
          document.getElementById("feeSubText").textContent = "";
        }
      }
    },

  };
</script>
