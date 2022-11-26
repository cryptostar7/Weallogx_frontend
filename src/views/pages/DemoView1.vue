<template lang="">
  <div>
    <h3 v-on:click="getdata()">Get Data</h3>
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
    getdata() {
      let url =
        "https://imperialadvance.my.salesforce.com/services/oauth2/token";
      let data = {
        grant_type: "password",
        client_id:
          "3MVG9JZ_r.QzrS7iR.meNd4qyMB0sH1xKBoY6ABT1aL8B7sagMTlhJtMQgKrekdraQgyyMv4j7LvKCAEi_fIF",
        client_secret:
          "A7EBCE352D44E72F68CCDE41629C8D2D5DE149AAF41AECDF6FB5183D1EF1688E",
        username: "anil@imperialadvance.com",
        password: "BWWBkm(dupu*N@8T",
       
      };

      const api = axios.create({
        Accept: "*/*",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          'Accept': "application/json",
          "Access-Control-Allow-Credentials": "true",
          'Authrization': "No Auth",
        },
         proxy: {
          host: 'http://127.0.0.1:5173',
        },
        withCredentials: true,
        responseType: "json",
        baseURL: "https://imperialadvance.my.salesforce.com",
      });

      api
        .post(url, data)
        .then(response => {})
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>
