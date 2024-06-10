<template lang="">
  <section
    :class="`main-section widthClass mainsectionjs1 lftComulativeHistoricalTab1 sectionCommonJs1 ${
      sidebar.collapse ? 'active' : ''
    }`"
  >
    <div class="inner-section reportbuilderRightInner" id="fsdfasdf">
      <div
        class="d-block sidebar reportSideBar collapse px-0 darkModeSidebarBg"
      >
        <button
          class="sidebar-arrow"
          @click="() => (sidebar.collapse = !sidebar.collapse)"
          sideColapseAttr="1"
          :style="{
            transform: sidebar.collapse
              ? 'translateY(-50%) rotate(180deg)'
              : 'translateY(-50%) rotate(360deg)',
          }"
        >
          <svg
            class="sidebarArrowImgJs1"
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.25"
              y="5.45312"
              width="7"
              height="1.5"
              rx="0.75"
              transform="rotate(-45 0.25 5.45312)"
              fill="#23669E"
            />
            <rect
              x="1.3125"
              y="4.5"
              width="7"
              height="1.5"
              rx="0.75"
              transform="rotate(45 1.3125 4.5)"
              fill="#23669E"
            />
          </svg>
        </button>
        <div
          class="position-sticky h-100 sidebar-inner sidebarInnerJs1 px-0 py-0 position-relative"
          :style="{ display: sidebar.collapse ? 'none' : 'block' }"
        >
          <div class="reportBuilderLft1 px-10 py-4">
            <h3 class="fs-26 bold-fw text-white mb-20" @click="testFunction()">
              Report Builder
            </h3>
            <div class="reportBuilderLftSwtch">
              <button
                :class="`btn reportSwtchLeft ${
                  sidebar.currentTab === 'comparative' ? 'active' : ''
                }`"
                @click="() => (sidebar.currentTab = 'comparative')"
              >
                Comparative Analysis
              </button>
              <button
                :class="`btn reportSwtchLeft ${
                  sidebar.currentTab === 'historical' ? 'active' : ''
                }`"
                @click="showHistoricalReport()"
              >
                Historical Simulations
              </button>
            </div>
          </div>
          <sidebar-tabs-list
            :list="list.comparative"
            v-if="sidebar.currentTab === 'comparative'"
          />
          <sidebar-tabs-list
            :list="list.historical"
            v-if="sidebar.currentTab === 'historical'"
          />
        </div>
      </div>
      <main
        class="ms-sm-autopx-md-4 report-builder-right-area comparative-sections"
      >
        <div class="right-area-inner p-relative">
          <div class="right-area-wrapper" v-if="ComparativeDataLoaded">
            <client-detail-component />
            <div
              :class="`tab-wrapper-1 ${
                sidebar.currentTab === 'comparative' ? '' : 'd-none'
              }`"
            >
              <draggable
                class="dragArea list-group w-full"
                :list="list.comparative"
              >
                <comparative-parent-tab
                  v-for="component in list.comparative"
                  :key="component.id"
                  :tabID="component.id"
                  :keyId="component.key"
                  :sidebar="sidebar.collapse"
                />
              </draggable>
            </div>
            <div
              :class="`tab-wrapper-2 ${
                sidebar.currentTab === 'historical' ? '' : 'd-none'
              }`"
              v-if="
                HistoricalDataLoaded &&
                !historicalDataErrorMessage &&
                Object.keys($store.state.data.report.historical).length
              "
            >
              <draggable
                class="dragArea list-group w-full"
                :list="list.historical"
              >
                <historical-parent-tab
                  v-for="component in list.historical"
                  :key="component.id"
                  :tabID="component.id"
                  :keyId="component.key"
                  :sidebar="sidebar.collapse"
                />
              </draggable>
            </div>
            <ReportError
              v-if="HistoricalDataLoaded && historicalDataErrorMessage"
              :message="historicalDataErrorMessage"
            />
          </div>
        </div>
      </main>
    </div>
    <share-report-modal />
  </section>
</template>
<script>
import SidebarTabsList from "./SidebarTabsList.vue";
import ComparativeParentTab from "./ComparativeParentTab.vue";
import HistoricalParentTab from "./HistoricalParentTab.vue";
import ClientDetailComponent from "./ClientDetailComponent.vue";
import ShareReportModal from "./../modal/ShareReportModal.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { get } from "../../../network/requests";
import { authHeader } from "../../../services/helper";
import { getUrl } from "../../../network/url";
import ReportError from "../common/ReportError.vue";

export default {
  components: {
    SidebarTabsList,
    ComparativeParentTab,
    HistoricalParentTab,
    ClientDetailComponent,
    ShareReportModal,
    ReportError,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      enabled: true,
      dragging: false,
      sidebar: {
        collapse: false,
        currentTab: "comparative",
      },
      ComparativeDataLoaded: false,
      HistoricalDataLoaded: false,
      historicalDataErrorMessage: "",
    };
  },
  methods: {
    testFunction: function () {
      console.log(this.ComparativeDataLoaded);
      console.log(this.HistoricalDataLoaded);
      console.log(this.historicalDataErrorMessage);
      console.log(Object.keys(this.$store.state.data.report.historical).length);
    },
    getComparativeData: function (id) {
      // get default data
      this.getData(id, "comparative_report", "comparativeReport");
      // get longevity data
      this.getData(
        id,
        "comparative_report_longevity",
        "comparativeReportLongevity"
      );
      // get ending data
      this.getData(
        id,
        "comparative_report_ending_value",
        "comparativeReportEndingValue"
      );
      // get death benefit data
      this.getData(
        id,
        "comparative_report_death_benefit",
        "comparativeReportDeathBenefit"
      );
      // get ror longevity data
      this.getData(
        id,
        "comparative_report_longevity_ror",
        "comparativeReportRorLongevity"
      );
      // get ror ending data
      this.getData(
        id,
        "comparative_report_ending_value_ror",
        "comparativeReportRorEndingValue"
      );
      // get ror death benefit data
      this.getData(
        id,
        "comparative_report_death_benefit_ror",
        "comparativeReportRorDeathBenefit"
      );

      // get all notes of active report
      this.getNotes();
      this.getDesclosures();
    },
    // fetch comparative report data from API
    getData: function (id, url, store) {
      this.$store.dispatch("loader", true);
      let api_url = `${getUrl(url)}${this.$route.params.report}`;
      if (this.$route.params.view_token) {
        api_url += `?view_token=${this.$route.params.view_token}`;
      }
      get(api_url, authHeader())
        .then((response) => {
          this.$store.dispatch(store, response.data);
          this.$store.dispatch("loader", false);
          // setTimeout(() => {
            if (!this.$store.state.app.loader_count) {
              this.ComparativeDataLoaded = true;
              setTimeout(() => this.updateElementJs(), 100);
            }
          // }, 100);
        })
        .catch((error) => {
          this.$toast.error(error.message);
          this.$store.dispatch("loader", false);
        });
    },

    // Temporary functions start
    getComparativeReportRorDeathBenefit: function () {
      get(
        getUrl("comparative_report_death_benefit_ror") +
          this.$route.params.report,
        authHeader()
      )
        .then((response) => {
          this.$store.dispatch(
            "comparativeReportRorDeathBenefit",
            response.data
          );
          this.$store.dispatch("loader", false);

          setTimeout(() => {
            if (!this.$store.state.app.loader_count) {
              this.ComparativeDataLoaded = true;
              setTimeout(() => this.updateElementJs(), 100);
            }
          }, 100);
        })
        .catch((error) => {
          this.$toast.error(error.message);
          this.$store.dispatch("loader", false);
        });
    },

    getComparativeReportRorEndingValue: function () {
      get(
        getUrl("comparative_report_ending_value_ror") +
          this.$route.params.report,
        authHeader()
      )
        .then((response) => {
          this.$store.dispatch(
            "comparativeReportRorEndingValue",
            response.data
          );
          this.getComparativeReportRorDeathBenefit();
        })
        .catch((error) => {
          this.$toast.error(error.message);
          this.$store.dispatch("loader", false);
        });
    },

    getComparativeReportRorLongevity: function () {
      get(
        getUrl("comparative_report_longevity_ror") + this.$route.params.report,
        authHeader()
      )
        .then((response) => {
          this.$store.dispatch("comparativeReportRorLongevity", response.data);
          this.getComparativeReportRorEndingValue();
        })
        .catch((error) => {
          this.$toast.error(error.message);
          this.$store.dispatch("loader", false);
        });
    },

    getComparativeReportDeathBenefit: function () {
      get(
        getUrl("comparative_report_death_benefit") + this.$route.params.report,
        authHeader()
      )
        .then((response) => {
          this.$store.dispatch("comparativeReportDeathBenefit", response.data);
          this.getComparativeReportRorLongevity();
        })
        .catch((error) => {
          this.$toast.error(error.message);
          this.$store.dispatch("loader", false);
        });
    },

    getComparativeReportEndingValue: function () {
      get(
        getUrl("comparative_report_ending_value") + this.$route.params.report,
        authHeader()
      )
        .then((response) => {
          this.$store.dispatch("comparativeReportEndingValue", response.data);
          this.getComparativeReportDeathBenefit();
        })
        .catch((error) => {
          this.$toast.error(error.message);
          this.$store.dispatch("loader", false);
        });
    },

    getComparativeReportLongevity: function () {
      get(
        getUrl("comparative_report_longevity") + this.$route.params.report,
        authHeader()
      )
        .then((response) => {
          this.$store.dispatch("comparativeReportLongevity", response.data);
          this.getComparativeReportEndingValue();
        })
        .catch((error) => {
          this.$toast.error(error.message);
          this.$store.dispatch("loader", false);
        });
    },

    // Temporary functions end
    getReports: function () {
      let id = this.$route.params.report;
      this.$store.dispatch("loader", true);

      get(
        getUrl("comparative_report") + this.$route.params.report,
        authHeader()
      )
        .then((response) => {
          this.$store.dispatch("comparativeReport", response.data);
          this.getComparativeReportLongevity();
        })
        .catch((error) => {
          this.$toast.error(error.message);
          this.$store.dispatch("loader", false);
        });
    },
    // get historical report data
    getHistoricalData: function () {
      get(
        `${getUrl("historical_report")}${this.$route.params.report}`,
        authHeader()
      )
        .then((response) => {
          if (response.data && response.data.message) {
            this.historicalDataErrorMessage = response.data.message;
          } else {
            if(response.data && response.data.lirp_data){
              this.$store.dispatch("historicalReport", response.data)
            }
          }

          setTimeout(() => {
          this.HistoricalDataLoaded = true;
          }, 1000);
          
          if (this.sidebar.currentTab === "historical") {
            this.$store.dispatch("loader", false);
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error(error.message);
          this.HistoricalDataLoaded = true;
          if (this.sidebar.currentTab === "historical") {
            this.$store.dispatch("loader", false);
          }
        });
    },

    getCurrentReportInfo: function () {
      let api_url = `${getUrl("report")}${this.$route.params.report}`;
      if (this.$route.params.view_token) {
        api_url += `?view_token=${this.$route.params.view_token}`;
      }
      get(api_url, authHeader())
        .then((response) => {
          this.$store.dispatch("shareReportData", {
            name: "report_id",
            data: response.data.data.id,
          });
          this.$store.dispatch("shareReportData", {
            name: "report_link",
            data: `${this.$appUrl()}/report/${response.data.data.id}/${
              response.data.data.view_token
            }`,
          });

          let saved_action = response.data.data.saved_action;
          if (
            saved_action &&
            saved_action.active_tabs &&
            saved_action.active_tabs.comparative
          ) {
            // update sidebar tab switch toggle actions
            this.$store.dispatch("activeReportTabs", saved_action.active_tabs);
          }
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },

    // get all notes of current report
    getNotes: function () {
      get(
        `${getUrl("notes")}?report=${this.$route.params.report}`,
        authHeader()
      ).then((response) => {
        this.$store.dispatch("notes", response.data);
      });
    },

    // get all disclosures of current report
    getDesclosures: function () {
      get(
        `${getUrl("disclosures")}?report=${this.$route.params.report}`,
        authHeader()
      ).then((response) => {
        this.$store.dispatch("disclosures", response.data);
      });
    },

    updateElementJs: function () {
      let eachInput = document.querySelectorAll(".tableHeadInputs");
      eachInput.forEach(function (eachInputFun) {
        eachInputFun.addEventListener("click", function (e) {
          this.removeAttribute("readonly");
        });
        eachInputFun.addEventListener("focusout", function (e) {
          this.readOnly = true;
        });
      });
    },

    // display historica report section
    showHistoricalReport: function () {
      if (this.HistoricalDataLoaded) {
        this.sidebar.currentTab = "historical";
      }
      if (!this.HistoricalDataLoaded) {
        this.sidebar.currentTab = "historical";
        this.$store.dispatch("loader", true);
      }
    },
  },
  mounted() {
    if (this.$route.query.present === "true" || this.$route.params.view_token) {
      this.$store.dispatch("presentation", true);
    }

    // fetch comarative reports data from API
    if (this.$route.params.report) {
     // this.getComparativeData(this.$route.params.report);
      this.getReports();
      this.getHistoricalData();
      this.getCurrentReportInfo();
    }
  },
  watch: {
    "$route.params.report"() {
      if (this.$route.params.report) {
        this.getComparativeData(this.$route.params.report);
        this.getHistoricalData();
      }
    },
    "sidebar.currentTab"(e) {
      this.$store.dispatch("current_sidebar_tab", e);
    },
  },
  computed: {
    list() {
      return this.$store.state.data.reportTabs;
    },
    comparativeReport() {
      return this.$store.state.data.report.comparative;
    },
  },
};
</script>
<style>
.pointer-none {
  pointer-events: none;
}
</style>
