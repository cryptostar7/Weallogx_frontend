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
  getAccessToken,
  getCurrentUser,
  setAdminTokens,
  getAdminUser,
} from "../../services/helper";

export default {
  mounted() {
    this.verfyUser();
  },
  methods: {
    verfyUser: function (e) {
      this.$store.dispatch("loader", true);
      let token = this.$route.query.token;
      
      if (!token) {
        this.$toast.error("No login token provided.");
        this.$store.dispatch("loader", false);
        window.location.href = this.$adminUrl();
        return;
      }

      // Check if current user is admin and preserve their session
      const currentToken = getAccessToken();
      const currentUser = getCurrentUser();
      if (currentToken && currentUser && (currentUser.is_staff || currentUser.is_superuser)) {
        // Store admin session in separate keys
        setAdminTokens(
          currentToken,
          localStorage.getItem('refresh_token') ? JSON.parse(localStorage.getItem('refresh_token')).value : null,
          currentUser
        );
      }

      // For admin-generated tokens, we directly use the JWT token
      if (token.startsWith('eyJ')) {
        // This is a JWT token from admin login-as-user
        // Use sessionStorage to avoid overwriting admin tokens in other tabs
        const now = new Date();
        const ttl = 12 * 60 * 60 * 1000; // 12 hours
        const tokenData = {
          value: token,
          expiry: now.getTime() + ttl,
          rememberMe: false
        };
        sessionStorage.setItem('access_token', JSON.stringify(tokenData));
        sessionStorage.setItem("login_from_admin", "1");
        this.getUseDataWithSessionToken();
      } else {
        // Legacy remember token flow
        post(
          getUrl("login-with-token"),
          { remember_token: token }
        )
          .then((response) => {
            setRefreshToken(response.data.data.tokens.refresh);
            setAccessToken(response.data.data.tokens.access);
            localStorage.setItem("login_from_admin", 1);
            this.getUseData();
          })
          .catch((error) => {
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
      }
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
    getUseDataWithSessionToken: function () {
      // Create auth header using sessionStorage token
      const tokenStr = sessionStorage.getItem('access_token');
      let authHeaders = {};
      if (tokenStr) {
        const token = JSON.parse(tokenStr);
        authHeaders = { headers: { 'Authorization': `Bearer ${token.value}` } };
      }
      
      get(getUrl("profile"), authHeaders)
        .then((response) => {
          this.$store.dispatch("loader", false);
          let user = response.data.data;
          // Store user data in sessionStorage too for this tab
          sessionStorage.setItem('currentUser', JSON.stringify({
            first_name: user.first_name,
            last_name: user.last_name,
            role_type: user.role_type,
            avatar: user.avatar,
            is_staff: user.is_staff,
            is_superuser: user.is_superuser,
          }));

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
