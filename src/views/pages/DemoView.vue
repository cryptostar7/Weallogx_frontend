<template lang>
  <div>
    <button @click="testFunction">Test Function</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFunction() {
      let distribution1 = [
        0, 0, 0, 0, 0, 0, 0, 117000, 117843, 118692, 119547, 120408, 121276,
        122150, 123030, 123916, 124809, 125708, 126614, 127526, 128445, 129370,
        130302, 25327, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      let distribution2 = [
        0, 0, 0, 0, 10, 0, 0, 117000, 234843, 353535, 473082, 593490, 714766,
        836916, 959945, 1083861, 1208670, 1334378, 1460992, 1588517, 1716962,
        1846332, 1976634, 2001961, 2001961, 2001961, 2001961, 2001961, 2001961,
        2001961, 2001961, 2001961, 2001961,
      ];
      let distribution3 = [
        0, 0, 0, 0, 0, 1, 0, 117000, 234843, 353535, 473082, 593490, 714766,
        836916, 959945, 1083861, 1208670, 1334378, 1460992, 1588517, 1716962,
        1846332, 1976634, 2107875, 2240061, 2373200, 2507298, 2642362, 2778399,
        2915416, 3053420, 3192419, 3332419,
      ];

      let maxYear = 33;
      let minYear = 1;
      let yearsLabel = [];
      let nonZeroFirstIndex = [];
      for (let i = 0; i < maxYear; i++) {
        if (distribution1[i] && !nonZeroFirstIndex.length) {
          nonZeroFirstIndex.push(i + 1);
        }

        if (distribution2[i] && nonZeroFirstIndex.length < 2) {
          nonZeroFirstIndex.push(i + 1);
        }

        if (distribution3[i] && nonZeroFirstIndex.length < 3) {
          nonZeroFirstIndex.push(i + 1);
        }
      }

      minYear = Math.min(...nonZeroFirstIndex);

      for (let index = minYear; index <= maxYear; index++) {
        yearsLabel.push(index);        
      }

      console.log(yearsLabel);
    },
  },
};
</script>
<style lang></style>
