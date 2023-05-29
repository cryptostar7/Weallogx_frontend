<template lang="">
  <div>
    <button @click="testFunction()">Test</button>
    <button @click="testFunction2()">Test 2</button>
  </div>
</template>
<script>
import { get } from '../../network/requests';
import { authHeader } from '../../services/helper';
export default {
  methods: {
    testFunction: function() {
      get('https://wlxpy.bizbybot.com/auth/template-sceneriodetails/', authHeader()).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })
    },
     testFunction2: function() {
      get('https://wlxpy.bizbybot.com/auth/template-sceneriodetails/6/', authHeader()).then((response) => {
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