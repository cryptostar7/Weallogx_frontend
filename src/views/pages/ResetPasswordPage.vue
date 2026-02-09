<template lang="">
    <div>
        <navbar-component />
        <section class="authMaindiv-area">
            <div class="container middleContainer">
            <div class="authMainDiv">
                <img src="@/assets/images/user/auth-side-img.png" class="authImg" alt="image">
                <div class="authformRightPart">
                <div class="authInnerDiv">
                    <h1 class="headingArea">Reset <span>Password</span></h1>

                <!-- Cognito flow: Show verification code input -->
                <div v-if="isCognitoFlow">
                  <div class="auth-form">
                    <label for="confirmation_code">Verification Code</label>
                    <input
                      type="text"
                      id="confirmation_code"
                      v-model="confirmationCode"
                      @keyup="errors.confirmationCode = false"
                      maxlength="6"
                      placeholder="Enter 6-digit code"
                    >
                  </div>
                  <label class="error fs-14 d-block text-center" v-if="confirmationCode === ''">*This field is required.</label>
                  <label class="error fs-14 d-block text-center" v-if="errors.confirmationCode && errors.confirmationCode[0]">{{errors.confirmationCode[0]}}</label>
                  <p class="help-text text-center mb-3">Enter the 6-digit code sent to {{ email }}</p>
                </div>

                <div>
                    <div class="auth-form">
                        <label for="password">New Password</label>
                        <input type="password" id="password" v-model="password" @keyup="errors.password = false">
                    </div>
                  <label class="error fs-14 d-block text-center" v-if="password === ''">*This field is required.</label>
                  <label class="error fs-14 d-block text-center" v-if="errors.password && errors.password[0]">{{errors.password[0]}}</label>
                </div>

                  <div>
                    <div class="auth-form">
                        <label for="confirm_password">Confirm Password</label>
                        <input type="password" id="confirm_password" v-model="confirm_password" @keyup="errors.confirm_password = false">
                    </div>
                    <label class="error fs-14 d-block text-center" v-if="confirm_password=== ''">*This field is required.</label>
                    <label class="error fs-14 d-block text-center" v-if="errors.confirm_password && errors.confirm_password[0]">{{errors.confirm_password[0]}}</label>
                  </div>

                    <div class="authButtonDiv">
                        <a class="btn" @click="resetPassword()">Submit</a>
                    </div>

                    <router-link to="/forgot-password" class="backButton"><img src="@/assets/images/user/back-chev.svg" alt="">&nbsp; <span>Back</span></router-link>
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
import { getSearchParams, authHeader, getServerErrors } from "../../services/helper";
import { patch } from "../../network/requests";
import { getUrl } from "../../network/url";
import authService from "../../services/authService";

export default {
  components: { NavbarComponent, FotterComponent },
  data() {
    return {
      // Django flow parameters
      token: getSearchParams("token"),
      uidb64: getSearchParams("uidb64"),
      // Cognito flow parameters
      email: getSearchParams("email"),
      confirmationCode: null,
      // Common parameters
      password: null,
      confirm_password: null,
      errors: [],
    };
  },
  computed: {
    isCognitoFlow() {
      // If email parameter exists, it's Cognito flow (6-digit code)
      // If token/uidb64 exist, it's Django flow (email link)
      return !!this.email && !this.token && !this.uidb64;
    }
  },
  methods: {
    checkValidation: function() {
      this.errors = [];
      let valid = true;

      // Validate confirmation code for Cognito flow
      if (this.isCognitoFlow) {
        if (!this.confirmationCode) {
          this.confirmationCode = "";
          valid = false;
        } else if (!/^\d{6}$/.test(this.confirmationCode)) {
          this.errors.confirmationCode = ["Please enter a valid 6-digit code."];
          valid = false;
        }
      }

      if (!this.password) {
        this.password = "";
        valid = false;
      } else {
        if (this.password.length < 8) {
          this.errors.password = [
            "The password must be at least 8 characters.",
          ];
          valid = false;
        }
      }

      if (!this.confirm_password) {
        this.confirm_password = "";
        valid = false;
      } else {
        if (this.confirm_password !== this.password) {
          this.errors.confirm_password = ["Confirm password did not matched."];
          valid = false;
        }
      }

      return valid;
    },
    resetPassword() {
      if (!this.checkValidation()) {
        return false;
      }

      this.$store.dispatch("loader", true);

      // Prepare data based on flow type
      let resetData;
      if (this.isCognitoFlow) {
        // Cognito flow: email + confirmation_code + new_password
        resetData = {
          email: this.email,
          confirmation_code: this.confirmationCode,
          new_password: this.password
        };
      } else {
        // Django flow: uidb64 + token + new_password
        resetData = {
          uidb64: this.uidb64,
          token: this.token,
          password: this.password
        };
      }

      // Use authService for password reset (supports both Cognito and Django)
      authService.confirmPasswordReset(resetData)
        .then(response => {
          this.$store.dispatch("loader", false);
          this.$toast.success(response.message || 'Password reset successfully!');
          this.$router.push("/sign-in");
        })
        .catch(error => {
          this.$store.dispatch("loader", false);
          if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
            this.$toast.error(error.message);
          } else {
            this.errors = getServerErrors(error);
            this.$toast.error(error.response?.data?.message || "Password reset failed. Please try again.");
          }
        });
    },
  },
  mounted() {
    // Validate required parameters based on flow type
    if (this.isCognitoFlow) {
      // Cognito flow: email parameter required
      if (!this.email) {
        this.$toast.warning("Email address is required for password reset.");
        this.$router.push("/forgot-password");
        return;
      }
    } else {
      // Django flow: token and uidb64 required
      if (!this.token || !this.uidb64) {
        this.$toast.warning("Invalid or missing reset token.");
        this.$router.push("/forgot-password");
        return;
      }
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