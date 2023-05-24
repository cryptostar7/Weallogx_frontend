<template lang="">
  <div>
    <button @click="testFunction()">testFunction</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFunction: function(totalValue=[], fees=[]) {
      console.log(this.$sortName('hariom', 'prajapati'));
    },
  
  },
};
</script>
<style lang="">
</style>