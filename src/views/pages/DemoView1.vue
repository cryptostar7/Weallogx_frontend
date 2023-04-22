
<template lang="">
  <div>
    <button @click="testFunction()">Object</button>
  </div>
</template>
<script>
import { remove } from '../../network/requests';
import { authHeader } from '../../services/helper';
export default {
  methods: {
    testFunction: function() {
      remove('https://wlxpy.bizbybot.com/auth/vehicle-type3/63/', authHeader()).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })
    },
  },
};
</script>
<style lang="">
</style>