<template lang="">
  <div>
    <div class="" >
      <div class="" :style="{height:'300px', width: '400px', border: '2px solid black'}" @dragover="dragover" @dragleave="dragleave" @drop="drop">
        <input type="file" accept=".pdf" id="uploadFile" hidden @change="fileHandle" ref="file" />
      </div>
      <button @click="checkFunction">Check</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filelist: [],
    };
  },
  methods: {
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      // if (!event.currentTarget.classList.contains("bg-green-300")) {
      //   event.currentTarget.classList.remove("bg-gray-100");
      //   event.currentTarget.classList.add("bg-green-300");
      // }
    },
    dragleave(event) {
      // Clean up
      // event.currentTarget.classList.add("bg-gray-100");
      // event.currentTarget.classList.remove("bg-green-300");
    },
    drop(e) {
      e.preventDefault();
      console.log(e.dataTransfer.files);
      // this.$refs.file.files = e.dataTransfer.files;
      let file = e.dataTransfer.files[0];
      document.getElementById("uploadFile").files[0] = file;
    },
    fileHandle: function(e){
      console.log('file changed');
      console.log(e);
    },
    checkFunction: function (){
      console.log('test function');
      console.log(document.getElementById("uploadFile").files[0]);
    }
  },
};
</script>
<style>
[v-cloak] {
  display: none;
}
</style>