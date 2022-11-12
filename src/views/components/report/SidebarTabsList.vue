<template lang="">
    <div class="reportBuilderLft2 px-3 py-4">
        <div class="reportBldrLftscroll checkbox-wrapper-2">
            <draggable class="dragArea list-group w-full" :list="list" @change="log">
                <div class="empty" data-empty="0" v-for="(element, index) in list" :key="index">
                    <div class="fill" draggable="true" data-fill="1">
                        <div class="reportBuilderLftInner active px-10 mb-3 rightCollapseDivs7" data-id="7">
                            <div class="lftRadioBtnDiv">
                                <div class="button-cover">
                                    <div class="button r" id="button-1">
                                        <input type="checkbox" class="checkbox leftCheckBox7" checked checkAttr="7"
                                            @click="collapseSection(index)" />
                                        <div class="knobs"></div>
                                        <div class="layer"></div>
                                    </div>
                                </div>
                                <label>{{ element.name }}</label>
                            </div>
                            <div class="dragBtn">
                                <svg class="leftLinesColor deactiveColor leftTwoLineImg7" width="13" height="7"
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
  methods: {
    collapseSection : function(id){
        this.list[id].active = !this.list[id].active
    }
  }
};
</script>
<style lang="">
</style>