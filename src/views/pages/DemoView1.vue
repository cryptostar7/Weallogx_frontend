<template lang="">
  <div>
    <button @click="testFunction()">testFunction</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFunction: function() {
      console.log(this.years);
      console.log([1, ...this.years.filter(i => i > 1).map(i => (this.years.includes(i / 5) ? i : ""))]);
    },
  },
  computed: {
    years() {
      return [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
      ];
    },
  },
};
</script>
<style lang="">
</style>