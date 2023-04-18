
<template lang="">
  <div>
    <button @click="testFunction()">Object</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFunction: function() {
       console.log(this.getPercentValue(-400, 600))
    },

    getPercentValue: function(value1, value2) {
      value1 = Number(value1.toString().replaceAll('-', ''));
      value2 = Number(value2.toString().replace('-', ''));
      let unit = (Number(value1.toString().replace('-'))+Number(value2.toString().replace('-')))/100;
      return value2/unit;
    },
  },
};
</script>
<style lang="">
</style>