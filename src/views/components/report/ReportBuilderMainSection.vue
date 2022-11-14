<template lang="">
  <section
    :class="`main-section widthClass mainsectionjs1 lftComulativeHistoricalTab1 sectionCommonJs1 ${sidebar.collapse ? 'active':''}`">
    <div class="inner-section reportbuilderRightInner">
      <div class="d-block sidebar reportSideBar collapse px-0 darkModeSidebarBg">
        <button class="sidebar-arrow" @click="() => sidebar.collapse = !sidebar.collapse" sideColapseAttr="1"
          :style="{transform:sidebar.collapse ?'rotate(180deg)':'rotate(360deg)'}"><svg class="sidebarArrowImgJs1"
            width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.25" y="5.45312" width="7" height="1.5" rx="0.75" transform="rotate(-45 0.25 5.45312)"
              fill="#23669E" />
            <rect x="1.3125" y="4.5" width="7" height="1.5" rx="0.75" transform="rotate(45 1.3125 4.5)"
              fill="#23669E" />
          </svg>
        </button>
        <div class="position-sticky h-100 sidebar-inner sidebarInnerJs1 px-0 py-0 position-relative"
          :style="{display: sidebar.collapse ? 'none' : 'block'}">
          <div class="reportBuilderLft1 px-10 py-4">
            <h3 class="fs-26 bold-fw text-white mb-20">Report Builder</h3>
            <div class="reportBuilderLftSwtch">
              <button :class="`btn reportSwtchLeft ${sidebar.currentTab === 'comparative' ? 'active':''}`" @click="() => sidebar.currentTab = 'comparative'">Comparative
                Analysis</button>
              <button :class="`btn reportSwtchLeft ${sidebar.currentTab === 'historical' ? 'active':''}`" @click="() => sidebar.currentTab = 'historical'">Historical
                Simulations</button>
            </div>
          </div>
          <sidebar-tabs-list :list="list.comparative" v-if="sidebar.currentTab === 'comparative'"/>
          <sidebar-tabs-list :list="list.historical" v-if="sidebar.currentTab === 'historical'"/>
        </div>
      </div>
      <main class="ms-sm-autopx-md-4 report-builder-right-area comparative-sections">
        <div class="right-area-inner p-relative">
          <div class="right-area-wrapper">
            <client-detail-component />
            <div class="tab-wrapper-1" v-if="sidebar.currentTab === 'comparative'">
              <draggable class="dragArea list-group w-full" :list="list.comparative" @change="log">
              <comparative-parent-tab v-for="component in list.comparative" :key="component.id" :tabID="component.id" :keyId="component.key" />
             </draggable>
            </div>
            <div class="tab-wrapper-2" v-if="sidebar.currentTab === 'historical'">
              <draggable class="dragArea list-group w-full" :list="list.historical" @change="log">
                <historical-parent-tab v-for="component in list.historical" :key="component.id" :tabID="component.id" :keyId="component.key"/>
               </draggable>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import SidebarTabsList from "./SidebarTabsList.vue";
import ComparativeParentTab from "./ComparativeParentTab.vue";
import HistoricalParentTab from "./HistoricalParentTab.vue";
import ClientDetailComponent from "./ClientDetailComponent.vue";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  components: {
    SidebarTabsList,
    ComparativeParentTab,
    HistoricalParentTab,
    ClientDetailComponent,
    draggable: VueDraggableNext,
  },

  props: ["sidebar"],
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
  mounted() {
    console.log('called');
    // When Scrolling
    var scrollingDiv = document.querySelector(".right-area-inner");
    scrollingDiv.addEventListener("scroll", function (e) {
      let sectionHeadingDiv = e.target.querySelector(".section-heading-div");
      if (e.target.scrollTop > 70) {
        sectionHeadingDiv.classList.add("bottom-border");
      } else {
        sectionHeadingDiv.classList.remove("bottom-border");
      }
    });

    // Able position change on drag start
    const fills = document.querySelectorAll(".fill");
    const empties = document.querySelectorAll(".empty");
    let shuffleElement;
    let shuffleParentElement;
    // Fill listeners
    for (const fill of fills) {
      fill.addEventListener("dragstart", dragStart);
      fill.addEventListener("dragend", dragEnd);
    }
    // Loop through empty boxes and add listeners
    for (const empty of empties) {
      empty.addEventListener("dragover", dragOver);
      empty.addEventListener("dragenter", dragEnter);
      empty.addEventListener("dragleave", dragLeave);
      empty.addEventListener("drop", dragDrop);
    }
    // Drag Functions
    function dragStart(e) {
      this.className += " hold";
      setTimeout(() => (this.className = "visible"), 0);
      shuffleElement = e.currentTarget;
      shuffleParentElement = e.currentTarget.parentElement;
    }
    function dragEnd() {
      this.className = "fill";
    }
    function dragOver(e) {
      e.preventDefault();
    }
    function dragEnter(e) {
      e.preventDefault();
      this.className += " hovered";
    }
    function dragLeave() {
      this.className = "empty";
    }
    function dragDrop() {
      this.className = "empty";
      let tabWrapper =
        this.closest(".checkbox-wrapper-1") ||
        this.closest(".tab-wrapper-1") ||
        this.closest(".checkbox-wrapper-2") ||
        this.closest(".tab-wrapper-2");

      let parent = null;
      if (tabWrapper.classList.contains("checkbox-wrapper-1")) {
        parent = document.querySelector(".tab-wrapper-1");
      } else if (tabWrapper.classList.contains("tab-wrapper-1")) {
        parent = document.querySelector(".checkbox-wrapper-1");
      } else if (tabWrapper.classList.contains("checkbox-wrapper-2")) {
        parent = document.querySelector(".tab-wrapper-2");
      } else if (tabWrapper.classList.contains("tab-wrapper-2")) {
        parent = document.querySelector(".checkbox-wrapper-2");
      }

      let isRight = false;
      if (this.getAttribute("data-class") == "empty-wrapper") {
        isRight = true;
      }

      const shuffleWithElement = this.querySelector(".fill");
      this.innerHTML = "";
      this.append(shuffleElement);
      if (shuffleWithElement) {
        shuffleParentElement.innerHTML = "";
        shuffleParentElement.append(shuffleWithElement);
      } else {
        return;
      }

      let shuffleNumbers = [];
      shuffleNumbers.push(
        +shuffleElement.closest(".empty").getAttribute("data-empty"),
        +shuffleWithElement.closest(".empty").getAttribute("data-empty")
      );
      if (isRight == true) {
        shuffleCheckboxes(parent, shuffleNumbers);
      } else {
        shuffleSections(parent, shuffleNumbers);
      }
    }

    // const tabWrapper = document.querySelector(".tab-wrapper");
    function shuffleSections(parent, nums) {
      const emptyWrappers = parent.querySelectorAll(
        "[data-class='empty-fill']"
      );
      const emptyWrapperArray = [...emptyWrappers];

      const parentWrappers = [
        ...parent.querySelectorAll("[data-class='empty-wrapper']"),
      ];
      tempSection = emptyWrapperArray[nums[0]];
      emptyWrapperArray[nums[0]] = emptyWrapperArray[nums[1]];
      emptyWrapperArray[nums[1]] = tempSection;
      emptyWrapperArray.forEach(function (section, index) {
        parentWrappers[index].innerHTML = "";
        parentWrappers[index].append(section);
      });
    }

    function shuffleCheckboxes(parent, nums) {
      const emptyWrappers = parent.querySelectorAll(".empty");
      const emptyWrapperArray = [...emptyWrappers];
      tempSection = emptyWrapperArray[nums[0]];
      emptyWrapperArray[nums[0]] = emptyWrapperArray[nums[1]];
      emptyWrapperArray[nums[1]] = tempSection;
      parent.innerHTML = "";
      emptyWrapperArray.forEach(function (section) {
        parent.append(section);
      });
    }

    // Able position change on drag start inside the table
    const fillInners = document.querySelectorAll(".fill-inner");
    const emptyInners = document.querySelectorAll(".empty-inner");
    let shuffleElementInner;
    let shuffleParentElementInner;
    // Fill listeners
    for (const fill of fillInners) {
      fill.addEventListener("dragstart", innerdragStart);
      fill.addEventListener("dragend", innerdragEnd);
    }
    // Loop through empty boxes and add listeners
    for (const empty of emptyInners) {
      empty.addEventListener("dragover", innerdragOver);
      empty.addEventListener("dragenter", innerdragEnter);
      empty.addEventListener("dragleave", innerdragLeave);
      empty.addEventListener("drop", function (e) {
        e.stopPropagation();
        innerdragDrop(this);
      });
    }
    // Drag Functions
    function innerdragStart(e) {
      this.className += " hold";
      setTimeout(() => (this.className = "visible"), 0);
      shuffleElementInner = e.currentTarget;
      shuffleParentElementInner = e.currentTarget.parentElement;
    }
    function innerdragEnd() {
      this.className = "fill-inner";
    }
    function innerdragOver(e) {
      e.preventDefault();
    }
    function innerdragEnter(e) {
      e.preventDefault();
      this.className += " hovered";
    }
    function innerdragLeave() {
      this.className = "empty-inner";
    }
    function innerdragDrop(div) {
      const tableFluid = div
        .closest(".table-fluid")
        .querySelector(".summary-row");
      this.className = "empty-inner";
      const shuffleWithElement = div.querySelector(".fill-inner");
      this.innerHTML = "";
      div.append(shuffleElementInner);
      if (shuffleWithElement) {
        shuffleParentElementInner.innerHTML = "";
        shuffleParentElementInner.append(shuffleWithElement);
      }

      let shuffleNumbers = [];
      shuffleNumbers.push(
        +div.getAttribute("data-empty"),
        +shuffleParentElementInner.getAttribute("data-empty")
      );
      shuffleTableColumns(tableFluid, shuffleNumbers);
    }

    // const emptyTableArray = [];
    function shuffleTableColumns(parent, nums) {
      let tableArr = [...parent.querySelectorAll(".summary-draggable")];
      tempSection = tableArr[nums[0] - 1].innerHTML;
      tableArr[nums[0] - 1].innerHTML = "";
      tableArr[nums[0] - 1].innerHTML = tableArr[nums[1] - 1].innerHTML;
      tableArr[nums[1] - 1].innerHTML = "";
      tableArr[nums[1] - 1].innerHTML = tempSection;
    }
  },
};
</script>
<style lang="">
</style>
