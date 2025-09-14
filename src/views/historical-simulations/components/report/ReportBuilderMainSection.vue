<template lang="">
  <section
    :class="`main-section widthClass mainsectionjs1 lftComulativeHistoricalTab1 sectionCommonJs1 ${
      sidebar.collapse ? 'active' : ''
    }`"
  >
    <div class="inner-section reportbuilderRightInner">
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
            <h3 class="fs-26 bold-fw text-white mb-20">Report Builder</h3>
            <p class="history-simulation-para">Historical Simulations</p>
          </div>
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
          <div class="right-area-wrapper">
            <client-detail-component
              v-if="
                HistoricalDataLoaded &&
                Object.keys($store.state.data.report.historical).length
              "
            />
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
    
    <!-- PDF Generator Modal -->
    <PDFGeneratorModal
      modal-id="PDFGeneratorModal"
      :scenario-id="parseInt($route.params.report)"
      :scenario-name="historicalData ? historicalData.name || 'Historical Simulation' : 'Historical Simulation'"
      :client-name="historicalData ? (historicalData.client_name || 'Client Name') : 'Client Name'"
      report-type="historical"
      :report-tabs="reportTabs"
    />
  </section>
</template>
<script>
import SidebarTabsList from "./SidebarTabsList.vue";
import HistoricalParentTab from "./HistoricalParentTab.vue";
import ClientDetailComponent from "./ClientDetailComponent.vue";
import ShareReportModal from "./../modals/ShareReportModal.vue";
import PDFGeneratorModal from "../../../components/modal/PDFGeneratorModal.vue";
import ReportError from "../../../components/common/ReportError.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { get } from "../../../../network/requests";
import { authHeader } from "../../../../services/helper";
import { getUrl } from "../../../../network/url";

export default {
  components: {
    SidebarTabsList,
    HistoricalParentTab,
    ClientDetailComponent,
    ShareReportModal,
    PDFGeneratorModal,
    ReportError,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      enabled: true,
      dragging: false,
      sidebar: {
        collapse: false,
        currentTab: "historical",
      },
      HistoricalDataLoaded: false,
      historicalDataErrorMessage: "",
    };
  },
  methods: {
    // get historical report data
    getHistoricalData: function () {
      this.$store.dispatch("loader", true);
      get(
        `${getUrl("standalone-report")}${this.$route.params.report}/`,
        authHeader()
      )
        .then((response) => {
          this.HistoricalDataLoaded = true;
          if (response.data.message) {
            this.historicalDataErrorMessage = response.data.message;
          } else {
            if (Object.keys(response.data).length) {
              this.$store.dispatch("historicalReport", response.data);
            }
          }
          this.$store.dispatch("loader", false);
        })
        .catch((error) => {
          this.$toast.error(error.message);
          this.HistoricalDataLoaded = true;
          this.$store.dispatch("loader", false);
        });
    },

    getCurrentReportInfo: function () {
      let api_url = `${getUrl("simulation-report")}${
        this.$route.params.report
      }/`;
      if (this.$route.params.view_token) {
        api_url += `?view_token=${this.$route.params.view_token}`;
      }
      get(api_url, authHeader())
        .then((response) => {
          this.$store.dispatch("shareSimulationReportData", {
            name: "report_id",
            data: response.data.data.id,
          });
          this.$store.dispatch("shareSimulationReportData", {
            name: "report_link",
            data: `${this.$appUrl()}/historical/report/${
              response.data.data.id
            }/${response.data.data.view_token}`,
          });

          let saved_action = response.data.data.saved_action;
          if (
            saved_action &&
            saved_action.active_tabs &&
            saved_action.active_tabs.comparative
          ) {
            // update sidebar tab switch toggle actions
            this.$store.dispatch(
              "activeSimulationReportTabs",
              saved_action.active_tabs
            );
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
        `${getUrl("historical-notes")}?report=${this.$route.params.report}`,
        authHeader()
      ).then((response) => {
        this.$store.dispatch("notes", response.data);
      });
    },

    // get all disclosures of current report
    getDesclosures: function () {
      get(
        `${getUrl("historical-disclosures")}?report=${this.$route.params.report}`,
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
  },
  mounted() {
    if (this.$route.query.present === "true" || this.$route.params.view_token) {
      this.$store.dispatch("presentation", true);
    }
    // fetch historical simulation reports data from API
    if (this.$route.params.report) {
      this.getHistoricalData();
      this.getCurrentReportInfo();
      this.getNotes();
      this.getDesclosures();
    }
  },
  watch: {
    "$route.params.report"() {
      if (this.$route.params.report) {
        this.getHistoricalData();
      }
    },
    "sidebar.currentTab"(e) {
      this.$store.dispatch("current_sidebar_tab", e);
    },
  },
  computed: {
    list() {
      return this.$store.state.data.simulationReportTabs;
    },
    historicalData() {
      return this.$store.state.data.report.historical;
    },
    reportTabs() {
      // Get report tabs data from store or provide defaults
      const storeData = this.$store.state.data.reportTabs;
      
      // If no data in store, provide default components
      if (!storeData || (!storeData.comparative && !storeData.historical)) {
        return {
          comparative: [],
          historical: []
        };
      }
      
      return storeData;
    },
  },
};
</script>
<style>
.pointer-none {
  pointer-events: none;
}
</style>
