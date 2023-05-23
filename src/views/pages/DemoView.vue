<template lang="">
  <div>
    <button @click="testFunction()">Test</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFunction: function() {
      console.log(this.roundFigureNum(1320423));
    },
    roundFigureNum: function(value) {
      return Math.ceil(Number(value) / 10000) * 10000;
    },
  },
};
</script>
<style lang="">
</style>