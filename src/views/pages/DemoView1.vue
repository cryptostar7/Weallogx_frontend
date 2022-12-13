<template lang="">
  <div>
    <button @click="redirectPage()">Navigate</button>
  </div>
</template>
<script>
export default {
  methods:{
    redirectPage:function(){
      this.$router.push('/users/eduardo')
    }
  }
}
</script>
<style lang="">
  
</style>