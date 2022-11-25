<template lang="">
  <div  :class="`empty ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="2">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="3">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`">
        <div :class="`ComparativeTableMainDiv rightDivTop9 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox9" type="checkbox" class="checkbox2 rightCheckBox9" rightCheckAttr="9"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" :checked="activeTabs[keyId]" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox9" class="rghtTopHeadcommon">IRR Analysis<span
                  class="ms-3 equalThingTabTxt">(Graph)</span></label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv9" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
              <div class="container-fluid">
                <div class="d-flex justify-content-between flex-gap-12">
                  <div v-for="(item, index) in data" :key="index" class="flex-1">
                    <div :class="`distributionCard1 equalDistCard${1+index} position-relative ${cards[index].active ? '':'inactive'}`">
                      <div class="d-flex justify-content-between">
                        <div class="distrbnCard1paras">
                          <p>IRR</p>
                          <p :class="`cardRadioSwtchpara${1+index}`">Most Recent</p>
                        </div>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div :class="`radioBtnDiv r2 switch${index} ${index > 3 ? 'switch3 extra':''}`" id="button-2">
                              <input type="checkbox" :class="`checkbox2 commonRadioBtn2 commonRadioBtn1 irrBarCard${1+index}`" :checked="cards[index].active" v-model="cards[index].active"/>
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                          <a :class="`ms-2 deleteButtonAncor deleteBtn${1+index}`" data-bs-target="#deleteAccountModal"
                            data-bs-toggle="modal">
                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M1.30521 8.04062L0.711442 2.09945C0.65261 1.51078 1.11489 1 1.70649 1H7.00212C7.59175 1 8.05337 1.50753 7.99764 2.09452L7.43356 8.0357C7.38482 8.54906 6.95371 8.94118 6.43804 8.94118H2.30025C1.78648 8.94118 1.3563 8.55185 1.30521 8.04062Z"
                                stroke="#9D9D9D" />
                              <rect x="6.11719" y="4.31055" width="1" height="3.52941" rx="0.5"
                                transform="rotate(90 6.11719 4.31055)" fill="#9D9D9D" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="mt-2 d-flex ">
                        <div :class="`CardProgressBar lessWidth switchBg lightProgress${1+index} irrBoxProgressCommon${1+index} ${cards[index].active ? '':'boxProgress'}`">
                          <div class="CardProgress" style="height: 50%;"></div>
                          <!-- <p class="lineUnderBars"></p> -->
                        </div>
                        <div>
                          <p class="ms-2 irrCardPara1">Internal Rate of Return</p>
                          <p :class="`ms-2 irrCardParaTop${1+index}`">{{item.internal_rate_of_return}}</p>
                          <p class="ms-2 irrCardPara1">Taxable Equivalent</p>
                          <p :class="`ms-2 irrCardParaBtm${1+index}`">{{item.taxable_equivalent}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid ">
                <div class="irrMainProgrssBarDiv">
                  <div>
                    <div v-for="item, in 7" :key="item" :class="`d-flex mainProgBrdrDivs ${item > 6 ? 'm-0 p-0' : ''}`">
                      <p class="mainProgBrdr"></p>
                    </div>
                  </div>
                  <div class="irrAbsltCls">
                    <div class="progressAllBarsDivMain">
                      <div v-for="(item, index) in data" :key="index" class="progressBarEachDivMain">
                        <div :class="`d-flex irrGroupedBars${1+index} ${cards[index].active ? '': 'feebarGroupDisplayNone'}`">
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig irrBarHeight1" :style="{height: item.internal_rate_of_return}">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg1">
                              <span class="`irrEachBarValue1">{{item.internal_rate_of_return}}</span>
                            </div>
                          </div>
                          <div class="progressBarEachDiv eachBarMainBgNone">
                            <div class="CardProgressBig irrBarHeight2" :style="{height: item.taxable_equivalent}">
                            </div>
                            <div class="position-absolute progressBarbtmNum irrvaluebarbg2">
                              <span class="irrEachBarValue2">{{item.taxable_equivalent}}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <historical-disclosure-component />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HistoricalDisclosureComponent from "./HistoricalDisclosureComponent.vue";

export default {
  props: ["keyId"],
  components: { HistoricalDisclosureComponent },
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      cards: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
        { id: 4, active: true },
        { id: 5, active: true },
      ],
      data: [
        {
          type: "LIRP",
          internal_rate_of_return: "65%",
          taxable_equivalent: "40%",
        },
        {
          type: "Most Recent",
          internal_rate_of_return: "41%",
          taxable_equivalent: "100%",
        },
        {
          type: "Worst",
          internal_rate_of_return: "25%",
          taxable_equivalent: "30%",
        },
        {
          type: "Mediam",
          internal_rate_of_return: "33%",
          taxable_equivalent: "65%",
        },
        {
          type: "Best",
          internal_rate_of_return: "33%",
          taxable_equivalent: "65%",
        },
      ],
    };
  },
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (
        this.$store.state.app.presentation_mode &&
        this.$store.state.app.show_assets2
      ) {
        this.cards.forEach((element) => {
          element.active = false;
        });
      } else {
        this.cards.forEach((element) => {
          element.active = true;
        });
      }
    },
  },
};
</script>
<style lang="">
</style>