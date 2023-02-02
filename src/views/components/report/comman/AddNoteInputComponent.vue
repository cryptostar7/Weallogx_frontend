<template lang="">
   <!-- <div class="d-flex justify-content-center addNotesMainDiv" :style="{bottom: historical ? '9px':''}">
        <button type="button" :class="`AddNoteBtn ${(note || active) ? 'd-none':''}`" @click="setActive">Add Note</button>
        <form :class="`add-note-input-div ${(note || active) ? '':'d-none'}`" @submit="handleNote">
            <p :class="`flex-1 add-note-para text-center mb-1 ${note && !active ? '':'d-none'}`" @click="setActive">{{note}}</p>
            <div :class="`add-note-input-inner`">
                <input type="text" class="add-note-input form-control flex-1" v-model="note" />
                <button class="btn" type="submit">
                  <img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check">
                </button>
            </div>
        </form>
    </div> -->
    <div class="d-flex justify-content-center addNotesMainDiv">
      <button type="button" class="AddNoteBtn">Add Note</button>
      <div class="add-note-input-div d-none">
        <p class="d-none flex-1 add-note-para text-center mb-1">This card is awesome.</p>
        <div class="add-note-input-inner">
          <input type="text" class="add-note-input form-control flex-1">
          <button class="btn"><img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check"></button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ["historical"],
  data() {
    return { active: false, note: "" };
  },
  methods: {
    setActive: function(e) {
      console.log(e.target.parentElement.querySelector('form').querySelector("input"));
      this.active = true;
      e.target.parentElement.querySelector('form').querySelector("input").focus();
    },
    handleNote: function(e) {
      e.preventDefault();
      this.active = false;
    },
  },
  mounted() {
    
  },
};
</script>
<style lang="">
</style>