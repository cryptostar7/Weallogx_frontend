<template lang="">
  <div  :class="`empty ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none':''}`" data-class="empty-wrapper" data-empty="1">
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="2">
      <div :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '':'presentdeActive'}`">
        <div :class="`ComparativeTableMainDiv rightDivTop8 ${activeTabs[keyId] ? 'active':''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input id="rightCheckBox8" type="checkbox" :checked="activeTabs[keyId]"
                    class="checkbox2 rightCheckBox8" 
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)" />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox8" class="rghtTopHeadcommon">Income Analysis <span
                  class="ms-3 equalThingTabTxt">(Graph)</span></label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv8" :style="{display:activeTabs[keyId] ? 'block':'none'}">
            <hr class="collapseDivHr">
            <div class="px-3 pt-3 pb-2">
              <div class="container-fluid">
                <div class="d-flex justify-content-between flex-gap-12">
                  <div class="flex-1" v-for="(item, index) in data" :key="index"> 
                    <div :class="`distributionCard1 equalDistCard${1+index} position-relative ${cards[index].active ? '': 'inactive'}`">
                      <div class="d-flex justify-content-between">
                        <div class="distrbnCard1paras">
                          <p>Annual Income</p>
                          <p :class="`cardRadioSwtchpara${1+index}`">{{item.type}}</p>
                        </div>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div :class="`radioBtnDiv r2 switch${index} ${index > 3 ? 'switch4 extra':''}`" id="button-2">
                              <input type="checkbox" :class="`checkbox2 commonRadioBtn2 bigBaCard${13+index}`" :checked="cards[index].active" v-model="cards[index].active"/>
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
                        <div :class="`CardProgressBar lessWidth lightProgress${1+index} boxProgressCommon${13+index} ${cards[index].active ? '' : 'boxProgress'}`">
                          <div class="CardProgress"></div>
                          <!-- <p class="lineUnderBars"></p> -->
                        </div>
                        <p :class="`ms-2 CardProgressnym cardRadioSwtchpara${1+index}`">{{$numFormatWithDollar(data[index].annual_income)}}
                        </p>
                      </div>

                       <add-note-input-component :historical="true"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <div class="CompMainProgrssBarDiv">
                  <div class="w-100">
                    <div v-for="item in 8" :key="item" :class="`d-flex comulativeProgBrdrDivs ${item > 7 ? 'm-0 p-0':''}`">
                      <p class="comulativeProgBrdr"></p>
                    </div>
                  </div>
                  <div class="CompProgressAbsltCls income">
                    <div class="progressAllBarsDivMain">
                      <div class="d-flex justify-content-between w-100">
                        <div v-for="(item, index) in data" :key="index" :class="`cumulativeValuesProgrees bgImgNoneAndTabRadius progBarSecEachDiv${13+index} cumulativeProgCommon${13+index} bigBarsAreaJsCls${13+index} eachBarMainBgNone ${cards[index].active ? '': 'bigbarsmaincolorDisable'}`">
                          <div :class="`cumulativeprogreeDivcommon cumulativeProgAccount${1+index} bigBarHeightJs${13+index}`" :style="{height:item.income_in_percent}">
                            <div :class="`bottomComulativeIncome BottomcumulativeAccount${1+index}`">
                              <p>$<span :class="`bigBarNumberJsCls${1+index}`">{{$numFormat(item.total_income)}}</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
import AddNoteInputComponent from "../comman/AddNoteInputComponent.vue";

export default {
  props: ["keyId"],
  components: { HistoricalDisclosureComponent, AddNoteInputComponent },
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
          annual_income: 45000,
          total_income: 4504500,
          income_in_percent: "45%",
        },
        {
          type: "Most Recent",
          annual_income: 33000,
          total_income: 3303300,
          income_in_percent: "33%",
        },
        {
          type: "Worst",
          annual_income: 55624,
          total_income: 5565564,
          income_in_percent: "55%",
        },
        {
          type: "Median",
          annual_income: 25645,
          total_income: 2562565,
          income_in_percent: "25%",
        },
        {
          type: "Best",
          annual_income: 25645,
          total_income: 2562565,
          income_in_percent: "25%",
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