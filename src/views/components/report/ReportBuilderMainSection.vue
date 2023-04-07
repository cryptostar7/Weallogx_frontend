<template lang="">
  <section :class="`main-section widthClass mainsectionjs1 lftComulativeHistoricalTab1 sectionCommonJs1 ${sidebar.collapse ? 'active':''}`">
    <div class="inner-section reportbuilderRightInner" id="fsdfasdf">
      <div class="d-block sidebar reportSideBar collapse px-0 darkModeSidebarBg">
        <button class="sidebar-arrow" @click="() => sidebar.collapse = !sidebar.collapse" sideColapseAttr="1" :style="{transform:sidebar.collapse ? 'rotate(180deg)' : 'rotate(360deg)'}">
          <svg class="sidebarArrowImgJs1" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.25" y="5.45312" width="7" height="1.5" rx="0.75" transform="rotate(-45 0.25 5.45312)" fill="#23669E" />
            <rect x="1.3125" y="4.5" width="7" height="1.5" rx="0.75" transform="rotate(45 1.3125 4.5)" fill="#23669E" />
          </svg>
        </button>
        <div class="position-sticky h-100 sidebar-inner sidebarInnerJs1 px-0 py-0 position-relative" :style="{display: sidebar.collapse ? 'none' : 'block'}">
          <div class="reportBuilderLft1 px-10 py-4">
            <h3 class="fs-26 bold-fw text-white mb-20">Report Builder</h3>
            <div class="reportBuilderLftSwtch">
              <button :class="`btn reportSwtchLeft ${sidebar.currentTab === 'comparative' ? 'active':''}`" @click="() => sidebar.currentTab = 'comparative'">Comparative Analysis</button>
              <button :class="`btn reportSwtchLeft ${sidebar.currentTab === 'historical' ? 'active':''}`" @click="() => sidebar.currentTab = 'historical'">Historical Simulations</button>
            </div>
          </div>
          <sidebar-tabs-list :list="list.comparative" v-if="sidebar.currentTab === 'comparative'"/>
          <sidebar-tabs-list :list="list.historical" v-if="sidebar.currentTab === 'historical'"/>
        </div>
      </div>
      <main class="ms-sm-autopx-md-4 report-builder-right-area comparative-sections">
        <div class="right-area-inner p-relative">
          <div class="right-area-wrapper" v-if="Object.keys(comparativeReport).length">
            <client-detail-component />
              <div :class="`tab-wrapper-1 ${sidebar.currentTab === 'comparative' ? '':'d-none'}`">
                <draggable class="dragArea list-group w-full" :list="list.comparative">
                  <comparative-parent-tab v-for="component in list.comparative" :key="component.id" :tabID="component.id" :keyId="component.key" />
                </draggable>
              </div>
            <div :class="`tab-wrapper-2 ${sidebar.currentTab === 'historical' ? '':'d-none'}`">
              <draggable class="dragArea list-group w-full" :list="list.historical">
                <historical-parent-tab v-for="component in list.historical" :key="component.id" :tabID="component.id" :keyId="component.key"/>
              </draggable>
            </div>
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

export default {
  components: {
    SidebarTabsList,
    ComparativeParentTab,
    HistoricalParentTab,
    ClientDetailComponent,
    ShareReportModal,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      enabled: true,
      dragging: false,
      list: this.$store.state.data.reportTabs,
      sidebar: {
        collapse: false,
        currentTab: "comparative",
      },
    };
  },
  methods: {
    testFunction: function() {
      console.log(this.comparativeReport);
    },

    getComparativeData: function(id) {
      // get default data
      this.getData(id, "comparative_report", "comparativeReport");
      // get longevity data
      this.getData(id, "comparative_report_longevity", "comparativeReportLongevity");
      // get ending data
      this.getData(id, "comparative_report_ending_value", "comparativeReportEndingValue");
      // get death benefit data
      this.getData(id, "comparative_report_death_benefit", "comparativeReportDeathBenefit");
      // get ror longevity data
      this.getData(id, "comparative_report_longevity_ror", "comparativeReportRorLongevity");
      // get ror ending data
      this.getData(id, "comparative_report_ending_value_ror", "comparativeReportRorEndingValue");
      // get ror death benefit data
      this.getData(id, "comparative_report_death_benefit_ror", "comparativeReportRorDeathBenefit");
    },
    getData: function(id, url, store) {
      this.$store.dispatch("loader", true);
      get(getUrl(url), authHeader())
        .then(response => {
          console.log(url);
          console.log(response.data);
          this.$store.dispatch(store, response.data);
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error.message);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },
  },
  mounted() {
    console.log("report builder");
    this.getComparativeData(this.$route.params.scenario);
    let eachInput = document.querySelectorAll(".tableHeadInputs");
    eachInput.forEach(function(eachInputFun) {
      eachInputFun.addEventListener("click", function(e) {
        this.removeAttribute("readonly");
      });
      eachInputFun.addEventListener("focusout", function(e) {
        this.readOnly = true;
      });
    });

    let addNoteBtns = document.querySelectorAll(".AddNoteBtn");
    let addNoteInputs = document.querySelectorAll(".add-note-input");
    let addNoteParas = document.querySelectorAll(".add-note-para");
    addNoteBtns.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        e.target.classList.add("d-none");
        let parentDiv = e.target.closest(".addNotesMainDiv");
        let addNoteInputDiv = parentDiv.querySelector(".add-note-input-div");
        let addNoteInput = addNoteInputDiv.querySelector(".form-control");
        addNoteInputDiv.classList.remove("d-none");
        addNoteInput.focus();
      });
    });
    addNoteInputs.forEach(function(input) {
      input.addEventListener("focusout", function(e) {
        let val = input.value;
        let parentDiv = e.target.closest(".addNotesMainDiv");
        let addNoteButton = parentDiv.querySelector(".AddNoteBtn");
        let addNoteInputDiv = parentDiv.querySelector(".add-note-input-div");
        let addNotePara = parentDiv.querySelector(".add-note-para");
        let addNoteInputDivInner = parentDiv.querySelector(
          ".add-note-input-inner"
        );
        if (val) {
          addNotePara.innerHTML = val;
          addNotePara.classList.remove("d-none");
          addNoteInputDivInner.classList.add("d-none");
        } else {
          addNoteInputDiv.classList.add("d-none");
          addNoteButton.classList.remove("d-none");
        }
      });

      input.addEventListener("keyup", function(e) {
        let val = input.value;
        let parentDiv = e.target.closest(".addNotesMainDiv");
        let addNoteButton = parentDiv.querySelector(".AddNoteBtn");
        let addNoteInputDiv = parentDiv.querySelector(".add-note-input-div");
        let addNotePara = parentDiv.querySelector(".add-note-para");
        let addNoteInputDivInner = parentDiv.querySelector(
          ".add-note-input-inner"
        );
        if (e.key == "Enter") {
          if (val) {
            addNotePara.innerHTML = val;
            addNotePara.classList.remove("d-none");
            addNoteInputDivInner.classList.add("d-none");
          } else {
            addNoteInputDiv.classList.add("d-none");
            addNoteButton.classList.remove("d-none");
          }
        }
      });
    });

    addNoteParas.forEach(function(para) {
      para.addEventListener("click", function(e) {
        e.target.classList.add("d-none");
        let parentDiv = e.target.closest(".add-note-input-div");
        let addNoteInputDivInner = parentDiv.querySelector(
          ".add-note-input-inner"
        );
        let addNoteInput = addNoteInputDivInner.querySelector(".form-control");
        addNoteInputDivInner.classList.remove("d-none");
        addNoteInput.focus();
      });
    });
  },
  computed: {
    comparativeReport() {
      return this.$store.state.data.report.comparative;
    },
  },
};
</script>
<style lang="">
</style>
