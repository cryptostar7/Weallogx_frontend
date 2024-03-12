<template lang="">
  <div
    :class="`empty report-card-wrapper ${
      $store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none' : ''
    }`"
    data-class="empty-wrapper"
    data-empty="1"
  >
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="2">
      <div
        :class="`report-client-list-div ${keyId} ${
          activeTabs[keyId] ? '' : 'presentdeActive'
        }`"
      >
        <div
          :class="`ComparativeTableMainDiv rightDivTop8 ${
            activeTabs[keyId] ? 'active' : ''
          }`"
        >
          <div class="d-flex justify-content-between px-3 py-2 bb-grey">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input
                    id="rightCheckBox8"
                    type="checkbox"
                    :checked="activeTabs[keyId]"
                    class="checkbox2 rightCheckBox8"
                    @change="
                      () =>
                        $store.dispatch('toggleSimulationReportTabByID', keyId)
                    "
                  />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label
                for="rightCheckBox8"
                class="rghtTopHeadcommon"
                >Income Analysis
                <span class="ms-3 equalThingTabTxt">(Graph)</span></label
              >
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="5.5"
                  width="13"
                  height="1.5"
                  rx="0.75"
                  fill="#C2C2C2"
                />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div
            class="collapseDivMain collapseDiv8"
            :style="{ display: activeTabs[keyId] ? 'block' : 'none' }"
          >
            <hr class="collapseDivHr" />
            <div class="px-3 pt-3 pb-2">
              <div class="container-fluid">
                <div class="d-flex justify-content-between flex-gap-12">
                  <div
                    v-for="(item, index) in data"
                    :key="index"
                    :class="`flex-1 ${
                      deletedItems.includes(index) ? 'd-none' : ''
                    }`"
                  >
                    <div
                      :class="`distributionCard1 equalDistCard${
                        1 + index
                      } position-relative ${
                        cards[index].active ? '' : 'inactive'
                      }`"
                    >
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <p class="allCardHeadPara">Annual Income</p>
                        </div>
                        <div class="d-flex">
                          <div class="button-cover2">
                            <div
                              :class="`radioBtnDiv r2 switch${index} ${
                                index > 3 ? 'switch4 extra' : ''
                              }`"
                              id="button-2"
                            >
                              <input
                                type="checkbox"
                                :class="`checkbox2 commonRadioBtn2 bigBaCard${
                                  13 + index
                                }`"
                                :checked="cards[index].active"
                                v-model="cards[index].active"
                              />
                              <div class="knobs2"></div>
                              <div class="layer2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p
                        :class="`cardRadioSwtchpara${
                          1 + index
                        } d-flex align-items-center`"
                      >
                        {{ item.type }}
                        <label
                          :class="`p-relative ${
                            index == 0 ? 'd-none' : 'd-block'
                          }`"
                          ><img
                            src="/src/assets/images/icons/info-icon.svg"
                            alt="info"
                            class="ms-1 info-icon-img"
                          /><img
                            src="/src/assets/images/icons/dark-i-icon.svg"
                            alt="info"
                            class="ms-1 dark-info-icon-img"
                          /><span :class="`info-message-rollingTime`">
                            <span
                              >Rolling Time Period:
                              {{ data[index].period }} Years</span
                            ><br />
                            <span
                              >Starting Date:
                              {{ data[index].starting_date }}</span
                            >
                          </span></label
                        >
                      </p>
                      <div class="mt-2 d-flex">
                        <div
                          :class="`CardProgressBar lessWidth lightProgress${
                            1 + index
                          } boxProgressCommon${13 + index} ${
                            cards[index].active ? '' : 'boxProgress'
                          }`"
                        >
                          <div class="CardProgress"></div>
                        </div>
                        <p
                          :class="`ms-2 CardProgressnym cardRadioSwtchpara${
                            1 + index
                          }`"
                        >
                          {{ $numFormatWithDollar(data[index].annual_income) }}
                        </p>
                      </div>

                      <add-note-input-component
                        :historical="true"
                        reportType="historical"
                        noteType="income_analysis"
                        :sectionType="index"
                        :noteId="notes[index] ? notes[index].id : null"
                        :noteText="notes[index] ? notes[index].text : null"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <div class="CompMainProgrssBarDiv graph-area">
                  <div class="CompProgressAbsltCls legacy p-relative">
                    <div
                      class="lines-div d-flex flex-column justify-content-between"
                    >
                      <div
                        v-for="(item, index) in 7"
                        :key="index"
                        :class="`d-flex comulativeProgBrdrDivs ${
                          index > 5 ? 'm-0 p-0' : ''
                        }`"
                      >
                        <p class="comulativeProgBrdr"></p>
                      </div>
                    </div>
                    <!-- <div class="CompProgressAbsltCls income"> -->
                    <div
                      :class="`progressAllBarsDivMain ${
                        activeCards == 2 ? 'twoEffect' : ''
                      }`"
                    >
                      <div
                        class="d-flex justify-content-between align-items-end w-100 cumulative-value-bar"
                      >
                        <div
                          v-for="(item, index) in data"
                          :key="index"
                          :class="`cumulativeValuesProgrees noHover bgImgNoneAndTabRadius progBarSecEachDiv${
                            13 + index
                          } cumulativeProgCommon${13 + index} bigBarsAreaJsCls${
                            13 + index
                          } eachBarMainBgNone ${
                            cards[index].active ? '' : 'bigbarsmaincolorDisable'
                          } ${deletedItems.includes(index) ? 'd-none' : ''}`"
                        >
                          <div
                            :class="`cumulativeprogreeDivcommon cumulativeProgAccount${
                              1 + index
                            } bigBarHeightJs${13 + index}`"
                            :style="{
                              height: `${
                                (Number(data[index].annual_income) * 100) /
                                maxIncome
                              }%`,
                            }"
                          >
                            <div
                              :class="`bottomComulativeIncome BottomcumulativeAccount${
                                1 + index
                              }`"
                            >
                              <p>
                                $<span
                                  :class="`bigBarNumberJsCls${1 + index}`"
                                  >{{ $numFormat(item.annual_income) }}</span
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>
            <historical-disclosure-component
              :hideFee="true"
              tabType="income_analysis"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HistoricalDisclosureComponent from "./HistoricalDisclosureComponent.vue";
import AddNoteInputComponent from "../common/AddNoteInputComponent.vue";

export default {
  props: ["keyId"],
  components: { HistoricalDisclosureComponent, AddNoteInputComponent },
  data() {
    return {
      activeTabs: this.$store.state.data.simulationReportTabs.active,
      cards: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
        { id: 4, active: true },
        { id: 5, active: true },
      ],
      data: [{}, {}, {}, {}, {}],
    };
  },
  mounted() {
    let card1 = this.historical.lirp_data;
    let card2 = this.historical.most_recent.result;
    let card3 = this.historical.min.result;
    let card4 = this.historical.median.result;
    let card5 = this.historical.max.result;

    if (card1) {
      this.data[0].type = "LIRP";
      this.data[0].annual_income = card1.annual_income;
    }

    if (card2) {
      this.data[1].type = "Most Recent";
      this.data[1].annual_income = card2.annual_income;
      this.data[1].starting_date = this.$customDateFormat(
        card2.starting_date,
        "M/D/y"
      );
      this.data[1].period = this.historical.discloser.period;
    }

    if (card3) {
      this.data[2].type = "Worst";
      this.data[2].annual_income = card3.annual_income;
      this.data[2].starting_date = this.$customDateFormat(
        card3.starting_date,
        "M/D/y"
      );
      this.data[2].period = this.historical.discloser.period;
    }

    if (card4) {
      this.data[3].type = "Median";
      this.data[3].annual_income = card4.annual_income;
      this.data[3].starting_date = this.$customDateFormat(
        card4.starting_date,
        "M/D/y"
      );
      this.data[3].period = this.historical.discloser.period;
    }

    if (card5) {
      this.data[4].type = "Best";
      this.data[4].annual_income = card5.annual_income;
      this.data[4].starting_date = this.$customDateFormat(
        card5.starting_date,
        "M/D/y"
      );
      this.data[4].period = this.historical.discloser.period;
    }
  },
  methods: {
    setActionId: function (id) {
      document.getElementById("historical_cv_delete_id").value = id;
    },
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
  computed: {
    historical() {
      return this.$store.state.data.report.historical;
    },
    deletedItems() {
      return this.$store.state.data.report.deleted_historical_cv_ids;
    },
    activeCards() {
      return 4 - this.deletedItems.length;
    },
    maxIncome() {
      let dst = this.data;
      return Math.max(...[...dst.map((i) => Number(i.annual_income || 0))]);
    },
    notes() {
      let note = this.$store.state.data.report.notes || [];
      if (note) {
        note = note.filter(
          (i) =>
            i.note_type === "income_analysis" && i.report_type === "historical"
        );

        let c1 = note.filter((i) => i.section_type === "lirp")[0] || null;
        let c2 =
          note.filter((i) => i.section_type === "most_recent")[0] || null;
        let c3 = note.filter((i) => i.section_type === "worst")[0] || null;
        let c4 = note.filter((i) => i.section_type === "median")[0] || null;
        let c5 = note.filter((i) => i.section_type === "best")[0] || null;
        note = [c1, c2, c3, c4, c5];
      }
      return note;
    },
  },
};
</script>
<style lang=""></style>
