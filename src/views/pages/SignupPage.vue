<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <div class="authMainDiv">
          <img src="@/assets/images/user/auth-side-img.png" class="authImg" alt="image">
          <div class="authformRightPart">
            <div class="authInnerDiv">
              <h1 class="headingArea">Sign up for <span>Account</span></h1>
              <div class="d-flex flex-gap-10">
                <div>
                  <div class="auth-form">
                    <label for="first_Name" :class="user.first_name ? 'active' : ''">First Name</label>
                    <input type="text" id="first_Name" v-model="user.first_name">
                  </div>
                  <label class="error" v-if="user.first_name === ''">This field is required.</label>
                  <label class="error" v-if="errors.first_name && errors.first_name[0]">{{errors.first_name[0]}}</label>
                </div>
                <div class="auth-form">
                  <label for="lastName" :class="user.last_name ? 'active' : ''">Last Name</label>
                  <input type="text" id="lastName" v-model="user.last_name">
                </div>
              </div>
              <div>
                <div class="auth-form">
                  <label for="email" :class="user.email ? 'active' : ''">Email</label>
                  <input type="text" id="email" v-model="user.email" @keyup="errors.email = false">
                </div>
                  <label class="error" v-if="user.email === ''">This field is required.</label>
                  <label class="error" v-if="errors.email && errors.email[0]">{{errors.email[0]}}</label>
              </div>
              <div>
                <div class="auth-form">
                  <label for="phone" :class="user.phone_number ? 'active' : ''">Phone</label>
                  <input type="text" id="phone" v-model="user.phone_number" @keyup="errors.phone_number = false">
                </div>
                  <label class="error" v-if="user.phone_number === ''">This field is required.</label>
                  <label class="error" v-if="errors.phone_number && errors.phone_number[0]">{{errors.phone_number[0]}}</label>
              </div>
              <div>
                <div class="auth-form">
                  <label for="password" :class="user.password ? 'active' : ''">Password</label>
                  <input type="password" id="password" v-model="user.password" @keyup="errors.password = false">
                </div>
                  <label class="error" v-if="user.password === ''">This field is required.</label>
                  <label class="error" v-if="errors.password && errors.password[0]">{{errors.password[0]}}</label>
              </div>
              <div>
                <div class="auth-form">
                  <label for="confirmPassword" :class="user.confirm_password ? 'active' : ''">Confirm Password</label>
                  <input type="password" id="confirmPassword" v-model="user.confirm_password" @keyup="errors.confirm_password = false">
                </div>
                  <label class="error" v-if="user.confirm_password === ''">This field is required.</label>
                  <label class="error" v-if="errors.confirm_password && errors.confirm_password[0]">{{errors.confirm_password[0]}}</label>
              </div>
              <div class="authButtonDiv">
                <p class="text-align-center mb-5 fs-14">You are signing up for: <span class="bold">14-Day Free
                    Trial</span></p>
                <a class="btn" type="submit" @click="submitForm()">{{user.stripe_source_id ? 'Continue': 'Sign Up'}}</a>
              </div>
              <p class="authButtomPara">Already have an account? &nbsp;
                <router-link to="/sign-in">Sign In</router-link>
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
import { post } from "../../network/requests";
import { getUrl } from "../../network/url";
import {
  getFirstError,
  getServerErrors,
  setRefreshToken,
  setAccessToken,
getSearchParams,
} from "../../services/helper";
export default {
  components: { NavbarComponent, FotterComponent },
  data() {
    return {
      user: {
        firstname: null,
        first_name: null,
        last_name: null,
        email: null,
        phone_number: null,
        password: null,
        confirm_password: null,
        stripe_source_id: null,
        plan_type:null,
      },
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
    isValidPhone: function() {
      if (
        /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
          this.user.phone_number
        )
      ) {
        return true;
      }
      return false;
    },
    checkValidation: function() {
      this.errors = [];
      let valid = true;
      if (!this.user.first_name) {
        this.user.first_name = "";
        valid = false;
      }

      if (!this.user.email) {
        this.user.email = "";
        valid = false;
      } else {
        if (!this.isValidEmail()) {
          this.errors.email = ["Please enter a valid email address."];
          valid = false;
        }
      }

      if (!this.user.phone_number) {
        this.user.phone_number = "";
        valid = false;
      } else {
        if (!this.isValidPhone()) {
          this.errors.phone_number = ["Please enter a valid phone number."];
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

      if (!this.user.confirm_password) {
        this.user.confirm_password = "";
        valid = false;
      } else {
        if (this.user.confirm_password !== this.user.password) {
          this.errors.confirm_password = ["Confirm password did not matched."];
          valid = false;
        }
      }

      return valid;
    },
    submitForm: function() {
      if (!this.checkValidation()) {
        return false;
      }

      if (this.user.stripe_source_id) {
        this.$store.dispatch("loader", true);
        post(getUrl("signup"), this.user)
          .then(response => {
            console.log(response);
            setRefreshToken(response.data.data.tokens.refresh);
            setAccessToken(response.data.data.tokens.access);
            this.server.status = true;
            this.server.message = response.data.message;
            this.$store.dispatch("loader", false);
            this.$toast.success(this.server.message);
            this.$router.push("/profile-details");
          })
          .catch(error => {
            this.errors = getServerErrors(error);
            console.log(this.errors);
            this.server.status = false;
            this.server.message = this.errors.message;
            this.$store.dispatch("loader", false);
            this.$toast.error(this.server.message);
          });
      } else {
        this.$store.dispatch("userTempForm", this.user);
        this.$router.push(`${'payment-method'}${getSearchParams('plan') ? `?plan=${getSearchParams('plan')}`:''}`);
      }

    },
  },
  mounted() {
    this.user.plan_type = this.$store.getters.getPlan(getSearchParams('plan'));
    if(this.$store.state.forms.temp_user){
      this.user = this.$store.state.forms.temp_user;
      console.log(this.user);
      this.$store.state.forms.temp_user=null;
    }
    if (this.$store.state.errors.temp_user) {
      this.errors = this.$store.state.errors.temp_user;
      this.$store.state.errors.temp_user=null;
    }
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