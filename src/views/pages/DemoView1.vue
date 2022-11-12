<template lang="">
  <div>
   <button @click="changeUser()" >Change User</button>
   <button @click="viewUser()" >View User</button>
   <button @click="updateUser()" >Update User</button>

  </div>
</template>
<script>
export default {
  mounted() {
    console.log("mounted");
    console.log(this.$store.state.user);
    console.log(this.$store.getters.firstName);
    console.log(this.$store.getters.lastName);
    console.log(this.$store.getters.prefixedName("Mr."));
  },
  methods: {
    changeUser: function () {
      this.$store.commit("changeName", "Hariom Prajapati");
      console.log(this.$store.state.user);
      console.log(this.$store.getters.firstName);
      console.log(this.$store.getters.lastName);
      console.log(this.$store.getters.prefixedName("Mr."));
    },
    viewUser: function () {
      console.log(this.$store.state.user);
      console.log(this.$store.getters.firstName);
      console.log(this.$store.getters.lastName);
      console.log(this.$store.getters.prefixedName("Mr."));
    },
    updateUser: function () {
      this.$store.dispatch("changeName", {
        newName: "New Name from Action",
      });
    },
  },
};
</script>
<style lang="">
</style>