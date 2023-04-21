<template lang="">
   <div class="d-flex justify-content-center addNotesMainDiv" :style="{bottom: historical ? '9px':''}">
        <button type="button" :class="`AddNoteBtn ${(note || active) ? 'd-none':''}`" @click="setActive">Add Note</button>
        <form :class="`add-note-input-div ${(note || active) ? '':'d-none'}`" @submit="submitHandler">
            <p :class="`flex-1 add-note-para text-center mb-1 ${note && !active ? '':'d-none'}`" @click="setActive" >{{note}}</p>
            <div :class="`add-note-input-inner`">
                <input type="text" :class="`add-note-input form-control flex-1 ${active ? '':'d-none'}`" v-model="note"  ref="input" @focusout="handleNote"/>
                <button :class="`btn ${active ? '':'d-none'}`" type="submit" ref="submitRef">
                  <img src="@/assets/images/icons/check-blue.svg" class="img-fluid" alt="Check">
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import { getUrl } from "../../../../network/url";
import { post, patch } from "../../../../network/requests";
import { authHeader } from "../../../../services/helper";

export default {
  props: ["historical", "noteType", "reportType", "cvType", "noteId", "noteText"],
  data() {
    return { active: false, note: "", note_id: null };
  },
  mounted() {
    if (this.$props.noteType) {
      console.log("this.$props.noteId", this.$props.noteId);
      this.note_id = this.$props.noteId;
      this.note = this.$props.noteText;
    }
  },
  methods: {
    saveNote: function() {
      let data = {
        report_id: this.$route.params.report,
        report_type: this.$props.reportType,
        note_type: this.$props.noteType,
        text: this.note,
        vehicle_type: this.$props.cvType,
      };

      if (this.note_id) {
        patch(`${getUrl("notes")}${this.note_id}/`, data, authHeader())
          .then(response => {
            console.log(response.data);
            console.log(response.data.id);
            this.$toast.success("Note saved successfully!");
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        post(getUrl("notes"), data, authHeader())
          .then(response => {
            console.log(response.data);
            this.note_id = response.data.id;
            this.$toast.success("Note added successfully!");
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    setActive: function(e) {
      this.active = true;
      setTimeout(() => this.$refs.input.focus(), 100);
    },
    handleNote: function(e) {
      e.preventDefault();
      this.active = false;
      this.saveNote();
    },
    submitHandler: function(e) {
      e.preventDefault();
      // setTimeout(() => this.$refs.input.blur(), 100);
      this.$refs.input.blur();
    },
  },
};
</script>
<style lang="">
</style>