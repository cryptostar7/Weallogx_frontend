<template lang="">
  <div  :class="`empty ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="4">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="5">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`" id="legacyTabView">
        <div :class="`ComparativeTableMainDiv rightDivTop5 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox5" type="checkbox" :checked="activeTabs[keyId]"
                    class="checkbox2 rightCheckBox5" rightCheckAttr="5"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox5" class="rghtTopHeadcommon">Legacy</label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv5" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
              <div class="container-fluid">
                <div class="d-flex justify-content-between flex-gap-12">
                  <div class="mt-3 flex-1" v-for="(item, index) in data" :key="index">
                    <div :class="`distributionCard1 equalDistCard${1+index} position-relative w-100 ${cards[index].active ? '': 'inactive'}`">
                      <div class="d-flex justify-content-between">
                        <div class="distrbnCard1paras">
                          <p>Legacy</p>
                          <p :class="`cardRadioSwtchpara${1+index}`">{{item.type}}</p>
                        </div>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div :class="`radioBtnDiv r2 switch${index}`" id="button-2">
                              <input type="checkbox" :class="`checkbox2 commonRadioBtn1 lagecyBigBaCard${1+index}`" :checked="cards[index].active" v-model="cards[index].active"/>
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
                      <div class="mt-2 ">
                        <p class="legacyCardPara">Ending Value (Age {{item.age}})</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="container-fluid">
                <div class="CompMainProgrssBarDiv">
                  <div class="w-100">
                    <div v-for="(item, index) in 8" :key="index" :class="`d-flex comulativeProgBrdrDivs ${index > 6 ?'m-0 p-0' : ''}`">
                      <p class="comulativeProgBrdr"></p>
                    </div>
                  </div>
                  <div class="CompProgressAbsltCls legacy">
                    <div class="progressAllBarsDivMain">
                      <div class="d-flex justify-content-between w-100">
                        <div v-for="(item, index) in data" :key="index" :class="`cumulativeValuesProgrees progBarSecEachDiv9 bigBarsLagecyJsCls${1+index} ${cards[index].active ? '': 'bigbarsmaincolorDisable'}`">
                          <div :class="`cumulativeprogreeDivcommon cumulativeProgLifePro${1+index} bigBarHeightJs${1+index}`"  :style="{height:item.shortfall_percentage}">
                            <div :class="`bottomComulativeIncome BottomcumulativeLifePro${1+index}`">
                              <p>$<span :class="`bigBarNumberJsCls${1+index}`">{{$numFormat(item.ending_value)}}</span></p>
                            </div>
                            <div class="shortFallCount">
                              <p class="">SHORTFALL</p>
                              <p>${{$numFormat(item.shortfall)}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <comparative-disclosure-component v-if="activeTabs[keyId]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ComparativeDisclosureComponent from "./ComparativeDisclosureComponent.vue";

export default {
  props: ["keyId"],
  components: { ComparativeDisclosureComponent },
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      cards: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
        { id: 4, active: true },
      ],
      data: [
        {
          type: "LifePro+",
          ending_value: 65477,
          age: 65,
          shortfall: 45000,
          shortfall_percentage: "40%",
        },
        {
          type: "Brokerage Account",
          ending_value: 61477,
          age: 41,
          shortfall: 33000,
          shortfall_percentage: "100%",
        },
        {
          type: "401/IRA",
          ending_value: 35477,
          age: 25,
          shortfall: 55624,
          shortfall_percentage: "30%",
        },
        {
          type: "Annuity",
          ending_value: 75477,
          age: 33,
          shortfall: 25645,
          shortfall_percentage: "65%",
        },
      ],
    };
  },
  watch: {
    "$store.state.app.presentation_mode"(val) {
      if (
        this.$store.state.app.presentation_mode &&
        this.$store.state.app.show_assets1
      ) {
        this.cards.forEach(element => {
          element.active = false;
        });
      } else {
        this.cards.forEach(element => {
          element.active = true;
        });
      }
    },
  },
};
</script>
<style lang="">
</style>