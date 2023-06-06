<template lang="">
  <div>
    <button @click="testFunction()">testFunction</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFunction: function() {
      let value = 950396;
      let a = value.toString();
      let b = a.substr(1);
      let c = "1".padEnd(a.length, "0");
      console.log(c);
    },
  },
  computed: {
    object() {
      return {
        fees: "4544",
        fees: "3534",
        fees: "4325",
        fees: "5532",
      };
    },
  },
};
</script>
<style lang="">
</style>