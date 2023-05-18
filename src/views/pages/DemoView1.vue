<template lang="">
  <div>
    <button @click="testFunction()">Test</button>
  </div>
</template>
<script>
export default {
  methods: {
    roundFigureNum: function(value) {
      let a = value.toString();
      let b = a.substr(1);
      let c = "1".padEnd(a.length - 1, "0");
      return Number(c) - Number(b) + Number(a);
    },
    testFunction: function() {
      console.log(this.roundFigureNum(103392));
    },
  },
};
</script>
<style lang="">
</style>