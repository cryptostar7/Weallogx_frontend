<template lang="">
  <div>
    <button @click="testFunction()">testFunction</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFunction: function() {
      console.log(this.object);
    },
  },
  computed: {
    object() {
     return {
      fees: '4544',
      fees: '3534',
      fees: '4325',
      fees: '5532',
     };
    },
  },
};
</script>
<style lang="">
</style>