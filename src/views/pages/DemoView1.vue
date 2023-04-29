<template lang="">
  <div>
    <button @click="testFunction()">Test</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFunction: function(sid = 488) {
      var data = "2023-01-01T11:54:25.778130Z";
      // console.log(data);
      // console.log(new Date(data));

    console.log(this.$dateFormat(data))
    },
  },
};
</script>