<template lang="">
  <div>
    <table>
        <thead class="thead-dark">
          <draggable v-model="headers" tag="tr">
            <th v-for="header in headers" :key="header" scope="col">
              {{ header }}
            </th>
          </draggable>
        </thead>
      </table>
  </div>
</template>
<script>
import { VueDraggableNext } from "vue-draggable-next";

export default {
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      headers: ["id", "name", "sport"],
      dragging: false,
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