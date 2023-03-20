<template>
    <nav class="navbar navbar-expand-lg fixed-top top-navbar report-top-navbar">
    <div class="container-fluid px-0">
      <router-link class="navbar-brand" to="/"><img :src="companyLogo" class="img-fluid" alt="Wealthlogix Logo" width="170"></router-link>
      <div class="collapse navbar-collapse overWriteNavCollapse show" id="navbar">
        <theme-dropdown type="1"/>
        <ul class="navbar-nav ms-auto my-2 my-lg-0">
          <li class="nav-item dropdown top-user-dropdown ms-4">
            <a class="nav-link dropdown-toggle no-after" href="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <span><img src="@/assets/images/icons/user.svg" class="img-fluid" alt="User"></span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><router-link to="/profile-details" class="dropdown-item">Profile</router-link></li>
              <li><a class="dropdown-item" @click="logout()">Logout</a></li>
            </ul>
          </li>
        </ul>
        <button id="menuBtn" class="btn menu-btn d-block d-md-none">
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
import { get, post } from "../../../network/requests";
import {
  authHeader,
  getAccessToken,
  getRefreshToken,
  getComapanyLogo,
  setComapanyLogo ,
  setCurrentUser ,
  getFirstError,
  authCheck,
} from "../../../services/helper";
export default {
  components: { ThemeDropdown },
  mounted() {
    if (!this.$store.state.data.user) {
      this.getProfile();
    }
    const menuBtn = document.getElementById("menuBtn");
    const menuIcon = menuBtn.querySelector(".menu-icon");
    const closeIcon = menuBtn.querySelector(".close-icon");
    const sidebar = document.querySelector(".sidebar");

    menuBtn.addEventListener("click", function (e) {
      menuIcon.classList.toggle("d-none");
      closeIcon.classList.toggle("d-none");
      if(sidebar) {
        sidebar.classList.toggle("show");
      }
    });

    document.addEventListener("mouseup", function (e) {
      e.stopPropagation();
      if(sidebar && sidebar.classList.contains("show")) {
        if (!e.target.parentNode.closest(".sidebar") && !e.target.closest(".menu-btn")) {
          menuIcon.classList.remove("d-none");
          closeIcon.classList.add("d-none");
          sidebar.classList.remove("show");
        }
      }
    });
  },
  methods: {
    getProfile: function() {
      get(getUrl("profile"), authHeader())
        .then(response => {
          let user = response.data.data;
          setComapanyLogo(user.business_logo_green, user.business_logo_blue, user.business_logo_dark)
          this.$store.dispatch("user", user);
          setCurrentUser({
            first_name: user.first_name,
            last_name: user.last_name,
          });
        })
        .catch(error => {
          console.log(error);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } 
        });
    },
    logout: function() {
      if (authCheck()) {
        this.$store.dispatch("loader", true);
        post(
          getUrl("logout"),
          { refresh: getRefreshToken() },
          { headers: { Authorization: `Bearer ${getAccessToken()}` } }
        )
          .then(response => {
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("access_token");
            localStorage.removeItem("plan_active");
            localStorage.removeItem("currentUser");

            // localStorage.removeItem("remember");
            this.$store.dispatch("loader", false);
            this.$store.dispatch("user", false);
            this.$toast.success(response.data.message);
            this.$router.push("/sign-in");
          })
          .catch(error => {
            console.log(error);
            this.$store.dispatch("loader", false);
            if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
              this.$toast.error(error.message);
            } else {
              this.$toast.error(error.response.data.messages[0].message);
            }
          });
      }
    },
  },
  computed:{
    companyLogo(){
      let logos = getComapanyLogo();
      let logo = logos.dark;
      let theme = this.$store.state.app.current_theme; 
      if(theme === 'light-green'){
         logo = logos.green;
      }
      if(theme === 'light-blue'){
         logo = logos.blue;
      }
      return logo;
    }
  }
};
</script>
