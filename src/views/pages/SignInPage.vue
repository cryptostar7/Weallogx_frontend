<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <div class="authMainDiv">
          <img src="@/assets/images/user/auth-side-img.png" class="authImg" alt="image">
          <div class="authformRightPart">
            <div class="authInnerDiv">
              <h1 class="headingArea">Sign in to <span>Account</span></h1>
              <div>
                <div class="auth-form">
                  <label for="email">Email</label>
                  <input type="text" autocomplete="off" id="email" v-model="user.email" @keyup="errors.email = false">
                </div>
                <label class="error" v-if="user.email === ''">This field is required.</label>
                <label class="error" v-if="errors.email && errors.email[0]">{{errors.email[0]}}</label>
              </div>
              <div>
                <div class="auth-form">
                  <label for="password">Password</label>
                  <input type="password" id="password" v-model="user.password" @keyup="errors.password = false">
                </div>
                <label class="error" v-if="user.password === ''">This field is required.</label>
                <label class="error" v-if="errors.password && errors.password[0]">{{errors.password[0]}}</label>
              </div>
              <div class="rememberAndForgetDiv">
                <div>
                  <input type="checkbox" id="remember_me" @click="rememberMe = !rememberMe" :checked="rememberMe">&nbsp;<label for="remember_me">Remember Me</label>
                </div>
                <div>
                  <router-link to="/forgot-password"><span>Forgot Password?</span></router-link>
                </div>
              </div>
              <div class="authButtonDiv">
                <a class="btn" @click="submitForm()">Sign In</a>
              </div>
              <p class="authButtomPara">Don’t have an account? &nbsp;<router-link to="/sign-up">Sign Up</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <fotter-component />
  </div>
</template>
<script>
import NavbarComponent from "./../components/common/UserNavbarComponent.vue";
import FotterComponent from "./../components/common/UserFooterComponent.vue";
import { post, get } from "../../network/requests";
import { getUrl } from "../../network/url";
import {
  getServerErrors,
  setRefreshToken,
  setAccessToken,
  getSearchParams,
  authHeader,
  getFirstError,
  setCurrentUser,
  setRememberMe,
  rememberMe,
} from "../../services/helper";
export default {
  components: { NavbarComponent, FotterComponent },
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      rememberMe: rememberMe() ? true : false,
      errors: [],
      serverError: [],
      server: [],
    };
  },
  methods: {
    isValidEmail: function() {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)
      ) {
        return true;
      }
      return false;
    },
    checkValidation: function() {
      this.errors = [];
      let valid = true;
      if (!this.user.email) {
        this.user.email = "";
        valid = false;
      } else {
        if (!this.isValidEmail()) {
          this.errors.email = ["Please enter a valid email address."];
          valid = false;
        }
      }

      if (!this.user.password) {
        this.user.password = "";
        valid = false;
      } else {
        if (this.user.password.length < 6) {
          this.errors.password = [
            "The password must be at least 6 characters.",
          ];
          valid = false;
        }
      }

      return valid;
    },
    submitForm: function() {
      if (!this.checkValidation()) {
        console.log(this.errors);
        return false;
      }
      this.$store.dispatch("loader", true);
      post(getUrl("login"), this.user)
        .then(response => {
          // set token in local storage
          setRefreshToken(response.data.data.tokens.refresh);
          setAccessToken(response.data.data.tokens.access);
          this.server.status = true;
          this.server.message = response.data.message;
          if (this.rememberMe) {
            setRememberMe({
              email: this.encryptString(this.user.email, "email"),
              password: this.encryptString(this.user.password, "password"),
            });
          } else {
            localStorage.removeItem("remember");
          }
          // get plan status 
          get(getUrl("current_plan"), authHeader())
            .then(response => {
              localStorage.setItem('plan_active', response.data.data.active ? 1 : 0);
              this.$store.dispatch('currentPlan', response.data.data);
              // to save the profile detail in vuex store 
              get(getUrl("profile"), authHeader())
                .then(response => {
                  setCurrentUser({first_name:response.data.data.first_name, last_name:response.data.data.last_name});
                  this.$store.dispatch("user", response.data.data);
                  this.$store.dispatch("loader", false);
                  this.$toast.success(this.server.message);
                  // redrect to next url if next param exist in url
                  if (getSearchParams("next")) {
                    this.$router.push(getSearchParams("next"));
                  } else {
                    this.$router.push("/profile-details");
                  }
                })
                .catch(error => {
                  console.log(error);
                  this.$store.dispatch("loader", false);
                  this.$toast.error(getFirstError(error));
                });
            })
            .catch(error => {
              console.log(error);
              this.$toast.error(getFirstError(error));
            });
        })
        .catch(error => {
          console.log(error);
          this.errors = getServerErrors(error);
          console.log(this.errors);
          this.server.status = false;
          this.server.message = this.errors.message;
          this.$store.dispatch("loader", false);
          this.$toast.error(this.server.message);
        });
    },
    encryptString: function(value, type) {
      // this function is used for encrypting the user login credentail 
      if (value && type) {
        return this.$CryptoJS.AES.encrypt(value, type).toString();
      }
      return 0;
    },
    decryptString: function(value, type) {
      // this function is used for decrypting the user login credentail 
      if (value && type) {
        return this.$CryptoJS.AES.decrypt(value, type).toString(
          this.$CryptoJS.enc.Utf8
        );
      }
      return 0;
    },
  },
  mounted() {
    if (rememberMe()) {
      // populate the email and password value in input field if remember me found true
      var remember = JSON.parse(rememberMe());
      this.user.email = this.decryptString(remember.email, "email");
      this.user.password = this.decryptString(remember.password, "password");
    }

    // below script is used for form inputs
    let eachInput = document.querySelectorAll(".auth-form input");
    eachInput.forEach(function(eachInputFun) {
      eachInputFun.addEventListener("keyup", function(e) {
        let eachLabel = this.closest(".auth-form");
        if (this.value == "") {
          eachLabel.firstElementChild.classList.remove("active");
        } else {
          eachLabel.firstElementChild.classList.add("active");
        }
      });
      eachInputFun.addEventListener("focus", function(e) {
        let eachLabelSec = this.closest(".auth-form");
        eachLabelSec.firstElementChild.classList.add("active");
      });
      eachInputFun.addEventListener("blur", function(e) {
        let eachLabelSec = this.closest(".auth-form");
        eachLabelSec.firstElementChild.classList.remove("active");
        if (this.value == "") {
          eachLabelSec.firstElementChild.classList.remove("active");
        } else {
          eachLabelSec.firstElementChild.classList.add("active");
        }
      });
    });
  },
};
</script>
<style>
.error {
  color: red;
}
</style>