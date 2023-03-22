<template lang="">
  <div class="d-flex justify-content-center mt-4">
        <div class="w-75">
            <div class="d-flex align-items-center mb-2">
                <div class="form-check form-switch custom-switch ms-2">
                <input class="form-check-input" :id="`saveZIndexTemp${currentTab}`" type="checkbox" v-model="saveTemplate" role="switch">
                </div>
                <label :for="`saveZIndexTemp${currentTab}`" class="buttonSaveRadioPara">Save this Index Strategy as Template</label>
            </div>
            <div class="saveZIndexTempContent" v-if="saveTemplate">
                <form action="javascript:void(0)">
                    <label class="error text-center" v-if="errors[currentTab] && errors[currentTab][`template_name${currentTab}`]">{{errors[currentTab][`template_name${currentTab}`]}}</label>
                    <div class="form-group pt-2 less">
                        <label :for="`templateNameInput${currentTab}`" class="fs-12 medium-fw">Template Name</label>
                        <input type="text" :id="`templateNameInput${currentTab}`" class="form-control" @keypress="$emit('clearError', currentTab, `template_name${currentTab}`)"> 
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["currentTab"],
  emits: ["clearError"],
  inject: ["errors"],
  data() {
    return {
      saveTemplate: false,
    };
  },
};
</script>
<style lang="">
</style>