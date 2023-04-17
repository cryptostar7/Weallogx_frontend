
<template lang="">
  <div>
    <button @click="testFunction()">Object</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFunction: function() {
      console.log(this.inputId);
    },

    getPercent: function() {
      console.log(1000 * 100 / 10500);
    },
  },
  computed: {
    inputId() {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < 10) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    },
  },
};
</script>
<style lang="">
</style>