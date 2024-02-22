<template lang="">
  <div>
    <button @click="testFuntcion">Test</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFuntcion: function() {
      let value = 1140000;
      console.log(this.$roundFigureNum(value));
    }
  }
}
</script>
<style lang="">
  
</style>