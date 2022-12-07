<template lang="">
  <div>
    <button v-on:click="getdata()">Get Data</button>
  </div>
</template>
<script>
import { post } from './../../network/requests.js';
import { getUrl } from './../../network/url.js';

export default {
  name: "App",
  data() {
    return {
      accountdata: [],
    };
  },
  methods: {
    getdata() {
      let url = getUrl("signup");
      let data = {};
      var formdata = new FormData();
      formdata.append("firstname", "Hariom");
      formdata.append("lastname", "Prajapati");
      formdata.append("email", "hariom1@gmail.com");
      formdata.append("phone_number", "8840860841");
      formdata.append("password", "123456");
      formdata.append("confirm_password", "123456");
      formdata.append("stripe_source_id", "src_1MBuwCSJJRL1HZKGK7sZEb4W");
      
      post(url, formdata)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>
