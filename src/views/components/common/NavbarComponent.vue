<template>
    <nav class="navbar navbar-expand-lg fixed-top top-navbar report-top-navbar">
    <div class="container-fluid px-0">
      <router-link class="navbar-brand" to="/"><img src="@/assets/images/logo.png" class="img-fluid" alt="Wealthlogix Logo"></router-link>
      <div class="collapse navbar-collapse overWriteNavCollapse show" id="navbar">
        <theme-dropdown type="1"/>
        <ul class="navbar-nav ms-auto my-2 my-lg-0">
          <li class="nav-item dropdown top-user-dropdown ms-4">
            <a class="nav-link dropdown-toggle no-after" href="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <span><img src="@/assets/images/icons/user.svg" class="img-fluid" alt="User"></span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" @click="logout()">Logout</a></li>
            </ul>
          </li>
        </ul>
        <button id="menuBtn" class="btn menu-btn d-block d-xl-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#b1b0b0"
            class="menu-icon bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>

          <svg class="close-icon d-none bi bi-x-lg" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#b1b0b0"
             viewBox="0 0 16 16">
            <path
              d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
import ThemeDropdown from "./ThemeDropdown.vue";
import { getUrl } from "../../../network/url";
import { post } from "../../../network/requests";
import {
  authHeader,
  getAccessToken,
  getRefreshToken,
  getFirstError,
  authCheck,
} from "../../../services/helper";
export default {
  components: { ThemeDropdown },
  methods: {
    logout: function() {
      if (authCheck()) {
        post(
          getUrl("logout"),
          { refresh: getRefreshToken() },
          { headers: { Authorization: `Bearer ${getAccessToken()}` } }
        )
          .then(response => {
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("access_token");
            this.$toast.success(response.data.message);
            this.$router.push("/sign-in");
          })
          .catch(err => {
            console.log(err);
            this.$toast.error(err.response.data.messages[0].message);
          });
      }
    },
  },
};
</script>
