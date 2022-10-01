<template lang="">
  <div>
    <div class="" style="width:200px; border:2px solid black">
      <span draggable="true" ref="ref1" class="btn">drag</span>
    </div>
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