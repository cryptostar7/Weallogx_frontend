<template lang="">
  <div>
    <form @submit="handleForm" id="fsdfdsfds">
      <input type="file" accept=".pdf" id="upload_file"/>
      <button class="" type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  methods: {
    handleForm: function(e) {
      e.preventDefault();
      var file = document.getElementById("upload_file").files[0];
      var data = new FormData();
      data.append('pdffile', file);
      data.append('page', '4');
      data.append('business', 'Allianz');
      
      axios.post('http://137.184.233.130/extract/', data).then((response) => {
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