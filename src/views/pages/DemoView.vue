<template lang="">
  <div>
    
  </div>
</template>
<script>
export default {
  mounted(){
    this.$refs.ref1.addEventListener('drag', (e) => {
      console.log(e.target.width);
    })
  }
}
</script>
<style lang="">
  
</style>