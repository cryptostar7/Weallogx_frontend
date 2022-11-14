<template lang="">
    <div class="reportBuilderLft2 px-3 py-4">
        <div class="reportBldrLftscroll checkbox-wrapper-2">
            <draggable class="dragArea list-group w-full" :list="list" @change="log">
                <div class="empty" data-empty="0" v-for="element in list" :key="element.id">
                    <div class="fill" draggable="true" data-fill="1">
                        <div :class="`reportBuilderLftInner px-10 mb-3 rightCollapseDivs7 ${activeTabs[element.key] ? 'active':''}`" @click="handleTabs(element.key)">
                            <div class="lftRadioBtnDiv">
                                <div class="button-cover">
                                    <div class="button r" id="button-1">
                                        <input type="checkbox" class="checkbox leftCheckBox7" :checked="activeTabs[element.key]" checkAttr="7"
                                            @change="() => $store.dispatch('toggleReportTabByID', element.key)" />
                                        <div class="knobs"></div>
                                        <div class="layer"></div>
                                    </div>
                                </div>
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
    };
  },
  methods: {
    collapseSection: function (key) {
      this.$store.dispatch("toggleReportTabByID", key);
    },
    handleTabs: function (id) {
      const element = document.querySelector("." + id);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style lang="">
</style>