<template lang="">
   <div class="d-flex justify-content-center addNotesMainDiv" :style="{bottom: historical ? '9px':''}">
        <button type="button" :class="`AddNoteBtn ${(note || active) ? 'd-none':''}`" @click="setActive">Add Note</button>
        <form :class="`add-note-input-div ${(note || active) ? '':'d-none'}`" @submit="handleNote">
            <p :class="`flex-1 add-note-para text-center mb-1 ${note && !active ? '':'d-none'}`" @click="setActive" >{{note}}</p>
            <div :class="`add-note-input-inner`">
                <input type="text" class="add-note-input form-control flex-1" v-model="note"  ref="input" @focusout="handleNote"/>
                <button class="btn" type="submit">
                  <img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check">
                </button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  props: ["historical", "type"],
  data() {
    return { active: false, note: "" };
  },
  methods: {
    testFunction: function() {
      this.$refs.input.click();
    },
    setActive: function(e) {
      this.active = true;
      setTimeout(() => this.$refs.input.focus(), 100);
    },
    handleNote: function(e) {
      e.preventDefault();
      this.active = false;
    },
  },
};
</script>
<style lang="">
</style>