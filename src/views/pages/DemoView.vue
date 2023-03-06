<template lang="">
  <div>
    <form @submit="handleForm" id="fsdfdsfds">
      <input type="file" accept=".pdf" id="upload_file"/>
      <button class="" type="submit">Submit</button>
    </form>
    <button class="" type="button" @click="getMLData()">click</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    handleForm: function(e) {
      e.preventDefault();
      var file = document.getElementById("upload_file").files[0];
      var data = new FormData();
      data.append("pdffile", file);
      data.append("page", "4");
      data.append("business", "Allianz");

      axios
        .post("http://137.184.233.130/extract/", data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getMLData: function() {
      var fileInput = document.getElementById("upload_file");

      var formdata = new FormData();
      formdata.append(
        "pdffile",
        fileInput.files[0],
        // "/C:/Users/HARIOM PRAJAPATI/Downloads/Remy Ill 6-8-21.pdf"
      );
      formdata.append("page", "4");
      formdata.append("business", "Allianz");

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://137.184.233.130/extract/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
    },
  },
};
</script>
