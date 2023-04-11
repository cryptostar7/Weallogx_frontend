<template lang="">
  <div>
    <button @click="testFunction()">Start</button>
    <button @click="testFunction1()">End</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFunction: function() {
      this.$store.dispatch("loader", true);
      this.$store.dispatch("loader", true);
      this.$store.dispatch("loader", true);
    },
    testFunction1: function() {
      this.$store.dispatch("loader", false);
    },
  },
};
</script>
<style lang="">
</style>