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
      var page = 4;
      var data = new FormData();
      data.append("pdffile", file);
      data.append("page", page);
      data.append("business", "Allianz");

      axios
        .post("https://wlxpy.bizbybot.com/pdf/extract/", data)
        .then(response => {
          console.log(response.data[page].map((i) => Object.values(i)));
          console.log(response.data);
          
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="">
</style>