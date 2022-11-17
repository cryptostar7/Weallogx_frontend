<template lang="">
  <div>
    <h3 v-on:click="getdata()">Hello</h3>
    <h4>{{ accountdata.Name }}</h4>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      accountdata: [],
    };
  },
  methods: {
    async getdata() {
      let result = await axios
        .get("http://localhost/EPS/AI-ISO-API/api/customer/account")
        .then((result) => {
          console.log(result.data);
          this.accountdata = result.data;
        });
    },
  },
};
</script>
