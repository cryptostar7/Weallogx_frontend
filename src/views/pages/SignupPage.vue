<template lang="">
  <div>
    <div v-if="!showTermsModal">
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
                      <!-- <label for="first_name" :class="user.first_name ? 'active' : ''">First Name</label> -->
                      <input 
                        type="text" 
                        id="first_name" 
                        v-model="user.first_name" 
                        autocomplete="off" 
                        :placeholder="user.first_name ? user.first_name : 'First Name'"
                      />
                    </div>
                    <label class="error fs-14 d-block text-center" v-if="user.first_name === ''">*This field is required.</label>
                    <label class="error fs-14 d-block text-center" v-if="errors.first_name && errors.first_name[0]">{{errors.first_name[0]}}</label>
                  </div>
                  <div class="auth-form">
                    <!-- <label for="lastName" :class="user.last_name ? 'active' : ''">Last Name</label> -->
                    <input 
                      type="text" 
                      id="lastName" 
                      v-model="user.last_name" 
                      autocomplete="off" 
                      :placeholder="user.last_name ? user.last_name : 'Last Name'"
                    />
                  </div>
                </div>
                <div>
                  <div class="auth-form">
                    <!-- <label for="email" :class="user.email ? 'active' : ''">Email</label> -->
                    <input 
                      type="text"
                      id="email"
                      v-model="user.email" 
                      @keyup="errors.email = false" 
                      autocomplete="off" 
                      :placeholder="user.email ? user.email : 'Email'"
                    />
                  </div>
                    <label class="error fs-14 d-block text-center" v-if="user.email === ''">*This field is required.</label>
                    <label class="error fs-14 d-block text-center" v-if="errors.email && errors.email[0]">{{errors.email[0]}}</label>
                </div>
                <div>
                  <div class="auth-form">
                    <!-- <label for="phone" :class="user.phone_number ? 'active' : ''">Phone</label> -->
                    <input 
                      type="text" 
                      id="phone" 
                      v-model="user.phone_number" 
                      @keyup="errors.phone_number = false" 
                      autocomplete="off" 
                      :placeholder="user.phone_number ? user.phone_number : 'Phone'"
                    />
                  </div>
                    <label class="error fs-14 d-block text-center" v-if="user.phone_number === ''">*This field is required.</label>
                    <label class="error fs-14 d-block text-center" v-if="errors.phone_number && errors.phone_number[0]">{{errors.phone_number[0]}}</label>
                </div>
                <div>
                  <div class="auth-form">
                    <!-- <label for="password" :class="user.password ? 'active' : ''">Password</label> -->
                    <input 
                      type="password" 
                      id="password" 
                      v-model="user.password" 
                      @keyup="errors.password = false" 
                      autocomplete="off" 
                      :placeholder="user.password ? user.password : 'Password'"
                    />
                  </div>
                    <label class="error fs-14 d-block text-center" v-if="user.password === ''">*This field is required.</label>
                    <label class="error fs-14 d-block text-center" v-if="errors.password && errors.password[0]">{{errors.password[0]}}</label>
                </div>
                <div>
                  <div class="auth-form">
                    <!-- <label for="confirmPassword" :class="user.confirm_password ? 'active' : ''">Confirm Password</label> -->
                    <input 
                      type="password" 
                      id="confirmPassword" 
                      v-model="user.confirm_password" 
                      @keyup="errors.confirm_password = false" 
                      autocomplete="off" 
                      :placeholder="user.confirm_password ? user.confirm_password : 'Confirm Password' "
                    />
                  </div>
                    <label class="error fs-14 d-block text-center" v-if="user.confirm_password === ''">*This field is required.</label>
                    <label class="error fs-14 d-block text-center" v-if="errors.confirm_password && errors.confirm_password[0]">{{errors.confirm_password[0]}}</label>
                </div>
                <div style="margin-top: 20px;">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <input type="checkbox" id="terms" v-model="user.terms_accepted" @click="openTermsModal" style="width: 20px; height: 20px;">
                    <label for="terms" style="font-size: 14px; margin: 0;">
                      I agree to the Terms and Conditions
                    </label>
                  </div>
                  <label class="error fs-14 d-block text-center" v-if="errors.terms_accepted && errors.terms_accepted[0]">{{ errors.terms_accepted[0] }}</label>
                </div>
                <div class="authButtonDiv">
                  <p v-if="user.plan_type === 'MONTHLY_PLAN'" class="text-align-center mb-3 fs-14 pt-3">
                    You are signing up for the monthly plan. 
                    <a href="https://app.wealthlogix.com/sign-up?plan=annual" class="bold">Switch to annual.</a>
                  </p>
                  <p v-else-if="user.plan_type === 'YEARLY_PLAN'" class="text-align-center mb-3 fs-14 pt-3">
                    You are signing up for the annual plan.
                  </p>
                  <p v-else class="text-align-center mb-3 fs-14 pt-3">
                    On signing up, you will get the <span class="bold">7-Day Free Trial!</span>
                  </p>
                  <div>

                  </div>
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
    <eula-component :isVisible="showTermsModal" @close="showTermsModal = false" @agree="acceptTerms" />
  </div>
</template>
<script>
import NavbarComponent from "./../components/common/UserNavbarComponent.vue";
import FotterComponent from "./../components/common/UserFooterComponent.vue";
import { post } from "../../network/requests";
import { getUrl } from "../../network/url";
import EulaComponent from "../components/eula/EulaModal.vue";
import {
  getServerErrors,
  setRefreshToken,
  setAccessToken,
  getSearchParams,
  setCurrentUser,
} from "../../services/helper";
export default {
  components: { NavbarComponent, FotterComponent, EulaComponent },
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
        terms_accepted: false,
      },
      showTermsModal: false,
      errors: [],
      serverError: [],
      server: [],
    };
  },
  methods: {
    openTermsModal() {
      if (!this.user.terms_accepted) {
        this.showTermsModal = true;
      }
    },
    acceptTerms() {
      this.user.terms_accepted = true;
      this.showTermsModal = false;
    },
    isValidEmail: function() {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test(this.user.email)
      ) {
        return true;
      }
      return false;
    },
    proceedWithSignUp: function () {
      this.showEULA = false;
      console.log("User accepted the EULA. Proceeding...");
    },
    isValidPhone: function() {
      const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
      const regexTest = phoneRegex.test(this.user.phone_number);
      const lengthValid = this.user.phone_number && this.user.phone_number.length > 5 && this.user.phone_number.length < 14;
      
      console.log("Phone validation debug:");
      console.log("  Phone number:", this.user.phone_number);
      console.log("  Length:", this.user.phone_number ? this.user.phone_number.length : 0);
      console.log("  Regex test:", regexTest);
      console.log("  Length valid:", lengthValid);
      
      if (regexTest && lengthValid) {
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

      if (!this.user.terms_accepted) {
        this.errors.terms_accepted = ["You must accept the terms and conditions."];
        valid = false;
      }

      return valid;
    },
    submitForm: function(e) {
      e.preventDefault();
      console.log("=== SIGNUP FORM SUBMITTED ===");
      console.log("Phone number:", this.user.phone_number);
      console.log("Phone validation result:", this.isValidPhone());

      if (!this.checkValidation()) {
        console.log("Validation failed, errors:", this.errors);
        return false;
      }
      console.log("Validation passed, proceeding...");

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
            const redirectUrl = `${"/payment-method"}${getSearchParams("plan") ? `?plan=${getSearchParams("plan")}` : ""}`;
            console.log("=== SIGNUP REDIRECT ===");
            console.log("Redirecting to:", redirectUrl);
            console.log("Current path:", this.$route.path);
            this.$router.push(redirectUrl);
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