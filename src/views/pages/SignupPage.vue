<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <div class="authMainDiv">
          <img src="@/assets/images/user/auth-side-img.png" class="authImg" alt="image">
          <form class="authformRightPart" @submit="submitForm">
            <div class="authInnerDiv">
              <h1 class="headingArea2 fs-32">Create an Account</h1>
              <p class="subheading">And let the epic journey begin...</p>
              <span class="heading-underline"></span>
              <div class="d-flex flex-gap-10">
                <div>
                  <div class="auth-form">
                    <label for="first_name" :class="user.first_name ? 'active' : ''">First Name</label>
                    <input type="text" id="first_name" v-model="user.first_name" autocomplete="off" placeholder=" ">
                  </div>
                  <label class="error fs-14 d-block text-center" v-if="user.first_name === ''">*This field is required.</label>
                  <label class="error fs-14 d-block text-center" v-if="errors.first_name && errors.first_name[0]">{{errors.first_name[0]}}</label>
                </div>
                <div class="auth-form">
                  <label for="lastName" :class="user.last_name ? 'active' : ''">Last Name</label>
                  <input type="text" id="lastName" v-model="user.last_name" autocomplete="off" placeholder=" ">
                </div>
              </div>
              <div>
                <div class="auth-form">
                  <label for="email" :class="user.email ? 'active' : ''">Email</label>
                  <input type="text" id="email" v-model="user.email" @keyup="errors.email = false" autocomplete="off" placeholder=" ">
                </div>
                  <label class="error fs-14 d-block text-center" v-if="user.email === ''">*This field is required.</label>
                  <label class="error fs-14 d-block text-center" v-if="errors.email && errors.email[0]">{{errors.email[0]}}</label>
              </div>
              <div>
                <div class="auth-form">
                  <label for="phone" :class="user.phone_number ? 'active' : ''">Phone</label>
                  <input type="text" id="phone" v-model="user.phone_number" @keyup="errors.phone_number = false" autocomplete="off" placeholder=" ">
                </div>
                  <label class="error fs-14 d-block text-center" v-if="user.phone_number === ''">*This field is required.</label>
                  <label class="error fs-14 d-block text-center" v-if="errors.phone_number && errors.phone_number[0]">{{errors.phone_number[0]}}</label>
              </div>
              <div>
                <div class="auth-form">
                  <label for="password" :class="user.password ? 'active' : ''">Password</label>
                  <input type="password" id="password" v-model="user.password" @keyup="errors.password = false" autocomplete="off" placeholder=" ">
                </div>
                  <label class="error fs-14 d-block text-center" v-if="user.password === ''">*This field is required.</label>
                  <label class="error fs-14 d-block text-center" v-if="errors.password && errors.password[0]">{{errors.password[0]}}</label>
              </div>
              <div>
                <div class="auth-form">
                  <label for="confirmPassword" :class="user.confirm_password ? 'active' : ''">Confirm Password</label>
                  <input type="password" id="confirmPassword" v-model="user.confirm_password" @keyup="errors.confirm_password = false" autocomplete="off" placeholder=" ">
                </div>
                  <label class="error fs-14 d-block text-center" v-if="user.confirm_password === ''">*This field is required.</label>
                  <label class="error fs-14 d-block text-center" v-if="errors.confirm_password && errors.confirm_password[0]">{{errors.confirm_password[0]}}</label>
              </div>
              <div class="authButtonDiv">
                <p class="text-align-center mb-3 fs-14 pt-3">On signing up, you will get the <span class="bold">{{currentSignupPlan}}</span></p>
                <button class="btn" type="submit">{{user.stripe_source_id ? 'Continue': 'Sign Up'}}</button>
              </div>
              <p class="authButtomPara">Already have an account? &nbsp;
                <router-link to="/sign-in">Sign In</router-link>
              </p>
            </div>
          </form>
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
  getServerErrors,
  setRefreshToken,
  setAccessToken,
  getSearchParams,
  setCurrentUser,
} from "../../services/helper";
export default {
  components: { NavbarComponent, FotterComponent },
  data() {
    return {
      user: {
        first_name: null,
        last_name: "",
        email: null,
        phone_number: null,
        password: null,
        confirm_password: null,
        stripe_source_id: null,
        plan_type: null,
      },
      errors: [],
      serverError: [],
      server: [],
    };
  },
  methods: {
    isValidEmail: function() {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test(this.user.email)
      ) {
        return true;
      }
      return false;
    },
    isValidPhone: function() {
      if (
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(
          this.user.phone_number
        ) &&
        this.user.phone_number.length > 5 &&
        this.user.phone_number.length < 14
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
        if (this.user.password.length < 8) {
          this.errors.password = [
            "The password must be at least 8 characters.",
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
    submitForm: function(e) {
      e.preventDefault();

      if (!this.checkValidation()) {
        return false;
      }

      this.$store.dispatch("loader", true);
      if (this.user.stripe_source_id) {
        post(getUrl("signup"), this.user)
          .then(response => {
            this.$store.dispatch("userTempForm", false);
            setRefreshToken(response.data.data.tokens.refresh);
            setAccessToken(response.data.data.tokens.access);
            setCurrentUser({
              first_name: this.user.first_name,
              last_name: this.user.last_name,
              role_type: this.user.role_type,
            avatar: this.user.avatar,
            });
            localStorage.setItem("plan_active", 1);
            this.server.status = true;
            this.server.message = response.data.message;
            this.$store.dispatch("loader", false);
            this.$toast.success(this.server.message);
            this.$router.push("/profile-details");
          })
          .catch(error => {
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              this.errors = getServerErrors(error);
              this.server.status = false;
              this.server.message = this.errors.message;
              this.$toast.error(this.server.message);
            }
            this.$store.dispatch("loader", false);
          });


      } else {
        this.$store.dispatch("userTempForm", this.user);
        post(getUrl("user-exists"), {email:this.user.email})
         .then((response) => {
            this.$router.push(`${"payment-method"}${getSearchParams("plan") ? `?plan=${getSearchParams("plan")}` : ""}`);
            this.$store.dispatch("loader", false);
         }).catch((error) => {
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              this.$toast.error(error.response.data.message);
            }
            this.$store.dispatch("loader", false);
        });
      }
    },
  },
  mounted() {
    this.user.plan_type = this.$store.getters.getPlan(getSearchParams("plan"));
    if (this.$store.state.forms.temp_user) {
      this.user = this.$store.state.forms.temp_user;
      this.$store.state.forms.temp_user = null;
    }
    if (this.$store.state.errors.temp_user) {
      this.errors = this.$store.state.errors.temp_user;
      this.$store.state.errors.temp_user = null;
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
  computed: {
    currentSignupPlan(){
      let name = "7-Day Free Trial!";
      if(this.user.plan_type === "MONTHLY_PLAN"){
        name = "Monthly Plan";  
      }

      if(this.user.plan_type === "YEARLY_PLAN"){
        name = "Yearly Plan";  
      }

      return name;
    }
  }
};
</script>
<style>
.error {
  color: red;
}
</style>