<template lang="">
  <div>
    <button @click="testFunction()">Map Object</button>
  </div>
</template>
<script>
import { mapClientList, authHeader } from "../../services/helper";
import { getUrl } from "../../network/url";
import { get } from "../../network/requests";
export default {

  methods: {
    testFunction: function() {
      this.$store.dispatch("loader", true);
      get('https://wlxpy.bizbybot.com/report/calc/', authHeader())
        .then(response => {
          console.log(response.data);
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error.message);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },
  },
};
</script>
<style lang="">
</style>