
<template lang="">
  <div>
    <button @click="testFunction2()">All</button>
    <button @click="testFunction()">Object</button>
  </div>
</template>
<script>
import { remove } from "../../network/requests";
import { authHeader } from "../../services/helper";
export default {
  methods: {
    testFunction: function(sid = 488) {
      var data = this.getData();
      data = data.filter(i => i.detail_id === sid)[0] || [];
      return data.scenario_id;
    },

    testFunction2: function() {
      var data = this.getData();
      console.log(data);
    },
    getData: function() {
      return [
        {
          scenario_id: 112,
          detail_id: 366,
        },
        {
          scenario_id: 168,
          detail_id: 478,
        },
        {
          scenario_id: 163,
          detail_id: 473,
        },
        {
          scenario_id: 191,
          detail_id: 501,
        },
        {
          scenario_id: 174,
          detail_id: 484,
        },
        {
          scenario_id: 184,
          detail_id: 494,
        },
        {
          scenario_id: 185,
          detail_id: 495,
        },
        {
          scenario_id: 107,
          detail_id: 361,
        },
        {
          scenario_id: 157,
          detail_id: 467,
        },
        {
          scenario_id: 164,
          detail_id: 474,
        },
        {
          scenario_id: 182,
          detail_id: 492,
        },
        {
          scenario_id: 189,
          detail_id: 499,
        },
        {
          scenario_id: 190,
          detail_id: 500,
        },
        {
          scenario_id: 177,
          detail_id: 487,
        },
        {
          scenario_id: 178,
          detail_id: 488,
        },
        {
          scenario_id: 132,
          detail_id: 442,
        },
        {
          scenario_id: 165,
          detail_id: 475,
        },
        {
          scenario_id: 172,
          detail_id: 482,
        },
        {
          scenario_id: 90,
          detail_id: 411,
        },
        {
          scenario_id: 91,
          detail_id: 412,
        },
        {
          scenario_id: 114,
          detail_id: 426,
        },
        {
          scenario_id: 115,
          detail_id: 427,
        },
        {
          scenario_id: 124,
          detail_id: 435,
        },
        {
          scenario_id: 133,
          detail_id: 443,
        },
        {
          scenario_id: 134,
          detail_id: 444,
        },
        {
          scenario_id: 141,
          detail_id: 451,
        },
        {
          scenario_id: 139,
          detail_id: 449,
        },
        {
          scenario_id: 140,
          detail_id: 450,
        },
        {
          scenario_id: 108,
          detail_id: 422,
        },
        {
          scenario_id: 169,
          detail_id: 479,
        },
        {
          scenario_id: 173,
          detail_id: 483,
        },
        {
          scenario_id: 188,
          detail_id: 498,
        },
        {
          scenario_id: 186,
          detail_id: 496,
        },
        {
          scenario_id: 138,
          detail_id: 448,
        },
      ];
    },
  },
};
</script>