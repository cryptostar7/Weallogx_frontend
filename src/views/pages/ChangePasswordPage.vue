<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <div class="editProfile">
          <div class="headingDivPricing paymentHeading">
            <h1 class="headingArea">Change <span>Password</span></h1>
          </div>
          <div class="editProfileInnerDiv">
            <form @submit="changePassword">
              <div class="change-password-main-div">
                <div class="change-password-inner-div">
                  <div class="changePasswordInputDiv">

                    <div class="auth-form ">
                      <label for="firstName">Current Password</label>
                      <input type="password" id="firstName" v-model="old_password" @keyup="errors.old_password = false">
                    </div>
                    <label class="error" v-if="old_password === ''">This field is required.</label>
                    <label class="error"
                      v-if="errors.old_password && errors.old_password[0]">{{errors.old_password[0]}}</label>
                  </div>

                  <div class="changePasswordInputDiv">
                    <div class="auth-form ">
                      <label for="lastName">New Password</label>
                      <input type="password" id="lastName" v-model="new_password" @keyup="errors.new_password = false">
                    </div>
                    <label class="error" v-if="new_password === ''">This field is required.</label>
                    <label class="error"
                      v-if="errors.new_password && errors.new_password[0]">{{errors.new_password[0]}}</label>
                  </div>

                  <div class="changePasswordInputDiv">
                    <div class="auth-form">
                      <label for="lastName">Confirm New Password</label>
                      <input type="password" id="lastName" v-model="confirm_new_password"
                        @keyup="errors.confirm_new_password = false">
                    </div>
                    <label class="error" v-if="confirm_new_password === ''">This field is required.</label>
                    <label class="error"
                      v-if="errors.confirm_new_password && errors.confirm_new_password[0]">{{errors.confirm_new_password[0]}}</label>
                  </div>


                  <div class="authButtonDiv">
                    <button class="btn" type="submit">Change Password</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <router-link to="/profile-details" class="backButton editProbackBtn"><img
              src="@/assets/images/user/back-chev.svg" alt="">&nbsp;
            <span>Back</span></router-link>
        </div>
      </div>
    </section>
    <fotter-component />
  </div>
</template>
<script>
import NavbarComponent from "./../components/common/UserNavbarComponent.vue";
import FotterComponent from "./../components/common/UserFooterComponent.vue";
import {
  getSearchParams,
  authHeader,
  getServerErrors,
  getFirstError,
} from "../../services/helper";
import { post } from "../../network/requests";
import { getUrl } from "../../network/url";
export default {
  components: { NavbarComponent, FotterComponent },
  data() {
    return {
      old_password: null,
      new_password: null,
      confirm_new_password: null,
      errors: [],
    };
  },
  methods: {
    checkValidation: function() {
      this.errors = [];
      let valid = true;
      if (!this.old_password) {
        this.old_password = "";
        valid = false;
      }

      if (!this.new_password) {
        this.new_password = "";
        valid = false;
      } else {
        if (this.new_password.length < 6) {
          this.errors.new_password = [
            "The password must be at least 6 characters.",
          ];
          valid = false;
        }
      }

      if (!this.confirm_new_password) {
        this.confirm_new_password = "";
        valid = false;
      } else {
        if (this.confirm_new_password !== this.new_password) {
          this.errors.confirm_new_password = [
            "Confirm password did not matched.",
          ];
          valid = false;
        }
      }

      return valid;
    },
    changePassword(e) {
      e.preventDefault();
      var data = {
        old_password: this.old_password,
        new_password: this.new_password,
        confirm_new_password: this.confirm_new_password,
      };

      if (!this.checkValidation()) {
        return false;
      }
      this.$store.dispatch("loader", true);
      post(getUrl("change-password"), data, authHeader())
        .then(response => {
          this.$store.dispatch("loader", false);
          this.$toast.success(response.data.message);
          this.$router.push("/sign-in");
        })
        .catch(error => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            this.errors = getServerErrors(error);
            this.$toast.error(getFirstError(error));
          }
          this.$store.dispatch("loader", false);
        });
    },
  },
  mounted() {
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
  margin-top: 5px;
}
</style>