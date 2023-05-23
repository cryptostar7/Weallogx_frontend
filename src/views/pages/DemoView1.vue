<template lang="">
  <div>
    <button @click="testFunction()">Get Average</button>
  </div>
</template>
<script>
export default {
  methods: {
    getAvgData: function(totalValue=[], fees=[]) {
      let total = totalValue.filter(i => i);
      total = total[total.length - 1];
      return (this.average(fees)/total)*100;
    },
    average: function(list) {
      return list.reduce((prev, curr) => prev + curr) / list.length;
    },
  },
  computed: {
    fees() {
      return [
        2899.8,
        5918.5,
        9060.97,
        12332.29,
        15737.73,
        19282.81,
        22314.21,
        23156.91,
        24031.43,
        24938.98,
        25880.8,
        26858.19,
        27872.49,
        28925.09,
        30017.45,
        31151.05,
        32327.47,
        33548.32,
        34815.27,
        32392.62,
        29878.47,
        27269.38,
        24561.75,
        21751.87,
        18835.87,
        15809.76,
        12669.36,
        9410.36,
        6028.29,
        2518.49,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
      ];
    },
    totalValue() {
      return [
        104100.0,
        212469.0,
        325281.0,
        442718.0,
        564970.0,
        692236.0,
        718378.0,
        745507.0,
        773661.0,
        802879.0,
        833200.0,
        864665.0,
        897319.0,
        931207.0,
        966374.0,
        1002869.0,
        1040742.0,
        1080046.0,
        1120834.0,
        1158783.0,
        1193788.0,
        1225735.0,
        1254510.0,
        1279994.0,
        1302061.0,
        1320583.0,
        1335426.0,
        1346451.0,
        1353513.0,
        1356464.0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ];
    },
  },
};
</script>
<style lang="">
</style>