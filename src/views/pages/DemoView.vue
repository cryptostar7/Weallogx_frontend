<template lang="">
  <div>
    <button @click="testFunction()">Test</button>
  </div>
</template>
<script>
import { get } from '../../network/requests';
import { authHeader } from '../../services/helper';
export default {
  methods: {
    testFunction: function() {
      get('https://wlxpy.bizbybot.com/auth/existing-illustrationdata/94/', authHeader()).then((response) => {
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