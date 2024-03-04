<template lang="">
  <div></div>
</template>
<script>
import { get, post } from "../../network/requests";
import { getUrl } from "../../network/url";
import {
  setAccessToken,
  setRefreshToken,
  setCurrentUser,
  authHeader,
} from "../../services/helper";

export default {
  mounted() {
    this.verfyUser();
  },
  methods: {
    verfyUser: function (e) {
      this.$store.dispatch("loader", true);
      let token = this.$route.query.token;
      // to save the profile detail in vuex store
      post(
        getUrl("login-with-token"),
        { remember_token: token }
      )
        .then((response) => {
          console.log(response.data);
          setRefreshToken(response.data.data.tokens.refresh);
          setAccessToken(response.data.data.tokens.access);
          localStorage.setItem("login_from_admin", 1);
          this.getUseData();
        })
        .catch((error) => {
          console.log(error);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            this.$toast.error("Token expired or invalid.");
          }

          this.$store.dispatch("loader", false);
          window.location.href = this.$adminUrl();
        });
    },
    getUseData: function () {
      get(getUrl("profile"), authHeader())
        .then((response) => {
          this.$store.dispatch("loader", false);
          let user = response.data.data;
          setCurrentUser({
            first_name: user.first_name,
            last_name: user.last_name,
            role_type: user.role_type,
            avatar: user.avatar,
          });

          this.$store.dispatch("user", user); // set user data in vuex store
          this.$store.dispatch("loader", false);
          this.$router.push("/");
        })
        .catch(() => {
          this.$toast.error("Token expired or invalid.");
          window.location.href = this.$adminUrl();
        });
    },
  },
};
</script>
<style lang=""></style>
