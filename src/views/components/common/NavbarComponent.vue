<template>
  <nav class="navbar navbar-expand-lg fixed-top top-navbar report-top-navbar">
    <div class="container-fluid px-0">
      <router-link class="navbar-brand" to="/"
        ><img
          :src="companyLogo"
          class="img-fluid"
          alt="Wealthlogix Logo"
          width="170"
      /></router-link>
      <div
        class="collapse navbar-collapse overWriteNavCollapse show"
        id="navbar"
      >
        <theme-dropdown type="1" />
        <ul class="navbar-nav ms-auto my-2 my-lg-0">
          <li class="nav-item dropdown top-user-dropdown ms-4">
            <a
              class="nav-link dropdown-toggle no-after"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span
                ><img :src="avatar" class="img-fluid" alt="User"
              /></span>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li v-if="!$isTscUser()">
                <router-link to="/profile-details" class="dropdown-item"
                  >Profile</router-link
                >
              </li>
              <li v-if="$isAdminUser()">
                <router-link to="/admin" class="dropdown-item"
                  >Admin Panel</router-link
                >
              </li>
              <li v-if="isLoggedInFromAdmin">
                <a class="dropdown-item cursor-pointer" @click="returnToAdmin()"
                  ><i class="fas fa-arrow-left me-1"></i>Return to Admin</a
                >
              </li>
              <li>
                <a class="dropdown-item cursor-pointer" @click="logout()"
                  >Logout</a
                >
              </li>
            </ul>
          </li>
        </ul>
        <button id="menuBtn" class="btn menu-btn d-block d-md-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#b1b0b0"
            class="menu-icon bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>

          <svg
            class="close-icon d-none bi bi-x-lg"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="#b1b0b0"
            viewBox="0 0 16 16"
          >
            <path
              d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
            />
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
import UserIcon from "../../../assets/images/icons/user.svg";
import {
  authHeader,
  getAccessToken,
  getRefreshToken,
  getComapanyLogo,
  setComapanyLogo,
  setCurrentUser,
  authCheck,
  getCurrentUser,
  hasAdminSession,
  restoreAdminSessionFromBackup,
} from "../../../services/helper";
export default {
  components: { ThemeDropdown },
  data() {
    return {
      profileImage: "",
    };
  },
  mounted() {
    if (this.$store.state.data.user) {
      this.profileImage = this.$store.state.data.user.avatar;
    } else {
      this.getProfile();
    }

    if (!this.profileImage) {
      this.profileImage = UserIcon;
    }

    var menuBtn = document.getElementById("menuBtn");
    var menuIcon = false;
    var closeIcon = false;
    var sidebar = document.querySelector(".sidebar");

    if (menuBtn) {
      menuIcon = menuBtn.querySelector(".menu-icon");
      closeIcon = menuBtn.querySelector(".close-icon");

      menuBtn.addEventListener("click", function (e) {
        menuIcon.classList.toggle("d-none");
        closeIcon.classList.toggle("d-none");
        if (sidebar) {
          sidebar.classList.toggle("show");
        }
      });
    }

    document.addEventListener("mouseup", function (e) {
      e.stopPropagation();
      if (sidebar && sidebar.classList.contains("show")) {
        if (
          !e.target.parentNode.closest(".sidebar") &&
          !e.target.closest(".menu-btn")
        ) {
          if (menuIcon) {
            menuIcon.classList.remove("d-none");
          }
          if (closeIcon) {
            closeIcon.classList.add("d-none");
          }
          sidebar.classList.remove("show");
        }
      }
    });
  },
  computed: {
    isLoggedInFromAdmin() {
      return sessionStorage.getItem('login_from_admin') === '1' && hasAdminSession();
    }
  },
  methods: {
    getProfile: function () {
      get(getUrl("profile"), authHeader())
        .then((response) => {
          let user = response.data.data;
          if (user.avatar) {
            this.profileImage = user.avatar;
          }
          setComapanyLogo(
            user.business_logo_green,
            user.business_logo_blue,
            user.business_logo_dark
          );
          this.$store.dispatch("user", user);
          setCurrentUser({
            first_name: user.first_name,
            last_name: user.last_name,
            role_type: user.role_type,
            avatar: user.avatar,
            is_staff: user.is_staff,
            is_superuser: user.is_superuser,
          });
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
        });
    },
    logout: function () {
      if (authCheck()) {
        this.$store.dispatch("loader", true);
        post(
          getUrl("logout"),
          { refresh: getRefreshToken() },
          { headers: { Authorization: `Bearer ${getAccessToken()}` } }
        )
          .then((response) => {
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("access_token");
            localStorage.removeItem("plan_active");
            localStorage.removeItem("currentUser");
            this.$store.dispatch("loader", false);
            this.$store.dispatch("user", false);
            
            // Check both sessionStorage and localStorage for admin login flag
            const isFromAdmin = sessionStorage.getItem("login_from_admin") || localStorage.getItem("login_from_admin");
            
            if (isFromAdmin) {
              // Clear both storages
              sessionStorage.removeItem("login_from_admin");
              sessionStorage.removeItem("access_token");
              sessionStorage.removeItem("currentUser");
              localStorage.removeItem("login_from_admin");
              window.location.href = this.$adminUrl();
            } else {
              this.$toast.success(response.data.message);
              window.location.href = "/sign-in";
            }
          })
          .catch((error) => {
            this.$store.dispatch("loader", false);
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              this.$toast.error(error.response.data.messages[0].message);
            }
          });
      }
    },
    returnToAdmin: function() {
      if (restoreAdminSessionFromBackup()) {
        this.$toast.success('Returned to admin session');
        this.$router.push('/admin');
      } else {
        this.$toast.error('Failed to restore admin session');
      }
    },
  },
  computed: {
    companyLogo() {
      let logos = getComapanyLogo();
      let logo = logos.dark;
      let theme = this.$store.state.app.current_theme;
      if (theme === "light-green") {
        logo = logos.green;
      }
      if (theme === "light-blue") {
        logo = logos.blue;
      }
      return logo;
    },
    avatar() {
      if (this.$store.state.data.user && this.$store.state.data.user.avatar) {
        return this.$store.state.data.user.avatar;
      }

      if (getCurrentUser() && getCurrentUser().avatar) {
        return getCurrentUser().avatar;
      }

      return UserIcon;
    },
  },
};
</script>
