<template lang="">
  <div>
    <form @submit="handleForm" id="fsdfdsfds">
      <input v-model="text" />
      <button class="" type="submit">Submit</button>
    </form>
      <input v-model="text" />

  </div>
</template>
<script>
export default {
  methods: {
    handleForm: function(e) {
      e.preventDefault();
      console.log(e.target.closest('form').querySelector("input").focus());
    },
  },
};
</script>
<style lang="">
</style>