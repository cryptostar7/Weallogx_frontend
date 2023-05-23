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
      let a = value.toString();
      let b = a.substr(1);
      let c = "1".padEnd(a.length -1, "0");
      let d = Number(c) - Number(b);
      d = Math.abs(d);
      return d + Number(b) + Number(a);
    },
  },
};
</script>
<style lang="">
</style>