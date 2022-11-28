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
          // "Access-Control-Allow-Origin": "http://127.0.0.1:5173/",
          Accept: "application/json",
          "Cache-Control":
            "no-cache,must-revalidate,max-age=0,no-store,private",
          "Access-Control-Allow-Credentials": "true",
        },
        proxy: {
          host: "https://imperialadvance.my.salesforce.com",
        },
        withCredentials: true,
        responseType: "json",
        baseURL: "https://imperialadvance.my.salesforce.com",
      });

        var formdata = new FormData();
      formdata.append("grant_type", "password");
      formdata.append(
        "client_secret",
        "A7EBCE352D44E72F68CCDE41629C8D2D5DE149AAF41AECDF6FB5183D1EF1688E"
      );
      formdata.append(
        "client_id",
        "3MVG9JZ_r.QzrS7iR.meNd4qyMB0sH1xKBoY6ABT1aL8B7sagMTlhJtMQgKrekdraQgyyMv4j7LvKCAEi_fIF"
      );
      formdata.append("username", "anil@imperialadvance.com");
      formdata.append("password", "BWWBkm(dupu*N@8T");
      api
        .post(url, formdata)
        .then(response => {})
        .catch(error => {
          console.log(error);
        });
    },

    fetchData() {
 let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password))

      var formdata = new FormData();
      formdata.append("grant_type", "password");
      formdata.append(
        "client_secret",
        "A7EBCE352D44E72F68CCDE41629C8D2D5DE149AAF41AECDF6FB5183D1EF1688E"
      );
      formdata.append(
        "client_id",
        "3MVG9JZ_r.QzrS7iR.meNd4qyMB0sH1xKBoY6ABT1aL8B7sagMTlhJtMQgKrekdraQgyyMv4j7LvKCAEi_fIF"
      );
      formdata.append("username", "anil@imperialadvance.com");
      formdata.append("password", "BWWBkm(dupu*N@8T");

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
        headers: headers
      };

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

      fetch(
        "https://imperialadvance.my.salesforce.com/services/oauth2/token",
        requestOptions
      )
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
    },
  },
};




















</script>
