<template lang="">
  <div>
    <p>{{myText}}</p>
    <input type="text" ref="inputRef" />
    <button @click="testFunc">Click</button>
  </div>
</template>
<script>
export default {
  methods: {
    testFunc: function(){
      console.log(this.$refs.inputRef.value);
    }
  },
  computed:{
    myText(){
      return this.$refs.inputRef ?  this.$refs.inputRef.value : '';
    }
  }
}
</script>
<style lang="">
  
</style>