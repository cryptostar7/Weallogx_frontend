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
              <draggable class="dragArea list-group w-full" :list="list" @change="log">
              <comparative-parent-tab v-for="component in list.comparative" :key="component.id" :tabID="component.id" :status="component.active"/>
             </draggable>
            </div>
            <div class="tab-wrapper-2" v-if="sidebar.currentTab === 'historical'">
              <draggable class="dragArea list-group w-full" :list="list" @change="log">
                <historical-parent-tab v-for="component in list.historical" :key="component.id" :tabID="component.id"/>
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
      list: {
        comparative: [
          { id: 1, name: "Comparative Table", active: true },
          { id: 2, name: "Comparative Graph", active: true },
          { id: 3, name: "Making Things Equal", active: true },
          { id: 4, name: "Comulative Values", active: true },
          { id: 5, name: "Lagacy", active: true },
          { id: 6, name: "Fee Analysis", active: true },
        ],
        historical: [
          { id: 1, name: "Comparative Table", active: true },
          { id: 2, name: "Income Analysis", active: true },
          { id: 3, name: "IRR Analysis", active: true },
          { id: 4, name: "Total Values", active: true },
          { id: 5, name: "Cumulative Values", active: true },
          { id: 6, name: "Comparative Values", active: true },
        ],
      },
      sidebar: {
        collapse: false,
        currentTab: "comparative",
      },
    };
  },
  methods: {
    log(event) {
      console.log(event);
    },
  },
};
</script>
<style lang="">
</style>
