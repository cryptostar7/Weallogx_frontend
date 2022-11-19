<template lang="">
  <div>
    <h3 @click="updateTheme()">Submit</h3>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
   updateTheme: function(){
    this.$store.dispatch('theme', 'light-green');
   }
  },
};
</script>