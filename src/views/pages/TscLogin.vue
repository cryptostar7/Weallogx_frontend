<template lang="">
  <div></div>
</template>
<script>
import { get } from "../../network/requests";
import { getUrl } from "../../network/url";
import { setAccessToken, setRefreshToken, setCurrentUser } from "../../services/helper";

export default {
  mounted() {
    console.log(this.$route.query);
    this.setUserSession();
  },
  methods: {
    setUserSession: function (e) {
      this.$store.dispatch("loader", true);
      let token = this.$route.query.token;
      let refresh = this.$route.query.refresh;
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      // to save the profile detail in vuex store
      get(getUrl("profile"), headers)
        .then((response) => {
          let user = response.data.data;
          console.log(response.data);
          setRefreshToken(refresh);
          setAccessToken(token);
          setCurrentUser({
            first_name: user.first_name,
            last_name: user.last_name,
            role_type: user.role_type,
            avatar: user.avatar,
          });

          this.$store.dispatch("user", user); // set user data in vuex store
          this.$store.dispatch("loader", false);

          // redrect to tax score card page
          this.$router.push("/tax-score-card");
        })
        .catch((error) => {
          console.log(error);
          this.$store.dispatch("loader", false);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            this.$toast.error("Invalid User.");
            // window.location.href = "https://wlxvue.bizbybot.com/sign-in";
          }
        });
    },
  },
};
</script>
<style lang=""></style>
