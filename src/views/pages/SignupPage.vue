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
                    <input
                      type="text"
                      id="company_name"
                      v-model="user.company_name"
                      autocomplete="off"
                      :placeholder="user.company_name ? user.company_name : 'Company Name'"
                    />
                  </div>
                  <label class="error fs-14 d-block text-center" v-if="user.company_name === ''">*This field is required.</label>
                  <label class="error fs-14 d-block text-center" v-if="errors.company_name && errors.company_name[0]">{{errors.company_name[0]}}</label>
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
                    <PasswordRequirements
                      v-if="cognitoEnabled"
                      :password="user.password"
                      :show-requirements="true"
                      @validation-change="handlePasswordValidation"
                    />
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
                  <!-- Individual Monthly -->
                  <p v-if="user.plan_type === 'MONTHLY_PLAN'" class="text-align-center mb-3 fs-14 pt-3">
                    You are signing up for the <span class="bold">Individual Monthly</span> plan ($129/month).
                    <br>
                    <a href="/sign-up?plan=annual" class="bold">Switch to annual</a>
                  </p>

                  <!-- Individual Annual -->
                  <p v-else-if="user.plan_type === 'YEARLY_PLAN'" class="text-align-center mb-3 fs-14 pt-3">
                    You are signing up for the <span class="bold">Individual Annual</span> plan ($1,188/year).
                    <br>
                    <a href="/sign-up?plan=monthly" class="bold">Switch to monthly</a>
                  </p>

                  <!-- Team Monthly -->
                  <p v-else-if="user.plan_type === 'TEAM_MONTHLY_PLAN'" class="text-align-center mb-3 fs-14 pt-3">
                    You are signing up for the <span class="bold">Team Monthly</span> plan.
                    <br>
                    <span class="bold">$387/month</span> for up to <span class="bold">5 team members</span>
                    <br>
                    <a href="/sign-up?plan=team_annual" class="bold">Switch to annual</a>
                  </p>

                  <!-- Team Annual -->
                  <p v-else-if="user.plan_type === 'TEAM_YEARLY_PLAN'" class="text-align-center mb-3 fs-14 pt-3">
                    You are signing up for the <span class="bold">Team Annual</span> plan.
                    <br>
                    <span class="bold">$3,564/year</span> for up to <span class="bold">5 team members</span>
                    <br>
                    <a href="/sign-up?plan=team_monthly" class="bold">Switch to monthly</a>
                  </p>

                  <!-- Free Trial -->
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

    <!-- Email Verification Modal for Cognito -->
    <email-verification-modal
      v-if="showEmailVerificationModal"
      :email="user.email"
      @verified="handleEmailVerified"
      @close="showEmailVerificationModal = false"
    />
  </div>
</template>
<script>
import NavbarComponent from "./../components/common/UserNavbarComponent.vue";
import FotterComponent from "./../components/common/UserFooterComponent.vue";
import { post } from "../../network/requests";
import { getUrl } from "../../network/url";
import EulaComponent from "../components/eula/EulaModal.vue";
import EmailVerificationModal from "../components/auth/EmailVerificationModal.vue";
import PasswordRequirements from "../../components/PasswordRequirements.vue";
import authService from "../../services/authService";
import { cognitoEnabled } from "../../services/amplify-config";
import {
  getServerErrors,
  setRefreshToken,
  setAccessToken,
  getSearchParams,
  setCurrentUser,
} from "../../services/helper";
export default {
  components: {
    NavbarComponent,
    FotterComponent,
    EulaComponent,
    EmailVerificationModal,
    PasswordRequirements
  },
  data() {
    return {
      user: {
        first_name: null,
        last_name: "",
        company_name: null,
        email: null,
        phone_number: null,
        password: null,
        confirm_password: null,
        stripe_source_id: null,
        plan_type: null,
        terms_accepted: false,
      },
      showTermsModal: false,
      showEmailVerificationModal: false,
      errors: [],
      serverError: [],
      server: [],
      cognitoEnabled: cognitoEnabled,
      isPasswordValid: false,
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
    handlePasswordValidation(isValid) {
      this.isPasswordValid = isValid;
    },
    handleEmailVerified() {
      // Email verified successfully - now log the user in
      this.showEmailVerificationModal = false;
      this.$store.dispatch("loader", true);

      // Login with the credentials
      authService.login({
        email: this.user.email,
        password: this.user.password,
        remember_me: false
      })
        .then(response => {
          if (response.mfaRequired) {
            // MFA is required - should not happen for new users, but handle it
            this.$toast.error('MFA required. Please contact support.');
            this.$store.dispatch("loader", false);
            return;
          }

          // Login successful - set user data and redirect
          if (response.data && response.data.user) {
            setCurrentUser({
              first_name: response.data.user.first_name || this.user.first_name,
              last_name: response.data.user.last_name || this.user.last_name,
              role_type: response.data.user.role_type,
              avatar: response.data.user.avatar,
            });
          }

          localStorage.setItem("plan_active", 1);
          this.$store.dispatch("loader", false);

          // Check if team plan - redirect to team management
          const isTeamPlan = this.user.plan_type === 'TEAM_MONTHLY_PLAN' ||
                             this.user.plan_type === 'TEAM_YEARLY_PLAN';

          if (isTeamPlan) {
            this.$toast.success('Welcome! Your team has been created. You can now invite team members.');
            this.$router.push("/team-management");
          } else {
            this.$toast.success('Email verified successfully! Welcome to WealthLogix.');
            this.$router.push("/profile-details");
          }
        })
        .catch(error => {
          this.$toast.error('Login failed after verification. Please try logging in manually.');
          this.$store.dispatch("loader", false);
          this.$router.push("/sign-in");
        });
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
    },
    isValidPhone: function() {
      const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
      const regexTest = phoneRegex.test(this.user.phone_number);
      const lengthValid = this.user.phone_number && this.user.phone_number.length > 5 && this.user.phone_number.length < 14;
      
      
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

      if (!this.user.company_name) {
        this.user.company_name = "";
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

      if (!this.checkValidation()) {
        return false;
      }

      this.$store.dispatch("loader", true);
      if (this.user.stripe_source_id) {
        // Use authService for registration (supports both Cognito and Django)
        authService.register(this.user)
          .then(response => {
            this.$store.dispatch("userTempForm", false);

            // Check if email verification is required (Cognito only)
            if (response.verificationRequired && response.cognitoEnabled) {
              this.$store.dispatch("loader", false);
              this.$toast.info('Please check your email for a verification code.');
              this.showEmailVerificationModal = true;
              return;
            }

            // Standard flow - store tokens and redirect
            if (response.data && response.data.tokens) {
              setRefreshToken(response.data.tokens.refresh);
              setAccessToken(response.data.tokens.access);
            }

            setCurrentUser({
              first_name: this.user.first_name,
              last_name: this.user.last_name,
              role_type: this.user.role_type,
              avatar: this.user.avatar,
            });
            localStorage.setItem("plan_active", 1);
            this.server.status = true;
            this.server.message = response.message;
            this.$store.dispatch("loader", false);

            // Check if team plan - redirect to team management
            const isTeamPlan = this.user.plan_type === 'TEAM_MONTHLY_PLAN' ||
                               this.user.plan_type === 'TEAM_YEARLY_PLAN';

            if (isTeamPlan) {
              this.$toast.success('Welcome! Your team has been created. You can now invite team members.');
              this.$router.push("/team-management");
            } else {
              this.$toast.success(this.server.message);
              this.$router.push("/profile-details");
            }
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