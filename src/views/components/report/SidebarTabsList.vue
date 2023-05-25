<template lang="">
    <div class="reportBuilderLft2 px-3 py-4">
        <div class="reportBldrLftscroll checkbox-wrapper-2">
            <draggable class="dragArea list-group w-full" :list="list">
                <div  data-empty="0" v-for="element in list" :key="element.id" :class="`empty ${$store.state.app.presentation_mode && !activeTabs[element.key] ? 'd-none':''}`">
                    <div class="fill p-relative" data-fill="1">
                        <div :class="`reportBuilderLftInner px-10 mb-3 rightCollapseDivs7 ${activeTabs[element.key] ? 'active':''} ${element.key === presentation_tab ? 'linkActive':''}`" @click="handleTabs(element.key)">
                            <div class="lftRadioBtnDiv">
                                <label>{{ element.name }}</label>
                            </div>
                            <div class="dragBtn">
                                <svg :class="`${activeTabs[element.key] ? 'leftLinesColor':''} deactiveColor leftTwoLineImg7`" width="13" height="7"
                                    viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                                    <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                                </svg>
                            </div>
                        </div>
                        <div class="button-cover">
                            <div class="button r" id="button-1">
                                <input type="checkbox" class="checkbox leftCheckBox7" :checked="activeTabs[element.key]" checkAttr="7"
                                    @change="() => $store.dispatch('toggleReportTabByID', element.key)" />
                                <div class="knobs"></div>
                                <div class="layer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </draggable>
        </div>
    </div>
</template>
<script>
import { VueDraggableNext } from "vue-draggable-next";
export default {
  props: ["list"],
  components: { draggable: VueDraggableNext },
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      presentation_tab:'',
    };
  },
  methods: {
    collapseSection: function (key) {
      this.$store.dispatch("toggleReportTabByID", key);
    },
    handleTabs: function (id) {
      const element = document.querySelector("." + id);
      this.presentation_tab = id;
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style lang="">
</style>