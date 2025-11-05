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
                <div>
                    <div class="auth-form">
                        <label for="email">New Password</label>
                        <input type="password" id="email" v-model="password" @keyup="errors.password = false">
                    </div>
                  <label class="error fs-14 d-block text-center" v-if="password === ''">*This field is required.</label>
                  <label class="error fs-14 d-block text-center" v-if="errors.password && errors.password[0]">{{errors.password[0]}}</label>
                </div>

                  <div>
                    <div class="auth-form">
                        <label for="email">Confirm Password</label>
                        <input type="password" id="email" v-model="confirm_password" @keyup="errors.confirm_password = false">
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
import { getSearchParams, authHeader } from "../../services/helper";
import { patch } from "../../network/requests";
import { getUrl } from "../../network/url";
export default {
  components: { NavbarComponent, FotterComponent },
  data() {
    return {
      token: getSearchParams("token"),
      uidb64: getSearchParams("uidb64"),
      password: null,
      confirm_password: null,
      errors: [],
    };
  },
  methods: {
    checkValidation: function() {
      this.errors = [];
      let valid = true;

      if (!this.password) {
        this.password = "";
        valid = false;
      } else {
        if (this.password.length < 6) {
          this.errors.password = [
            "The password must be at least 6 characters.",
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
      var data = {
        password: this.password,
        token: this.token,
        uidb64: this.uidb64,
      };
      if (!this.checkValidation()) {
        return false;
      }
      this.$store.dispatch("loader", true);
      patch(getUrl("reset-password"), data, authHeader())
        .then(response => {
          this.$store.dispatch("loader", false);
          this.$toast.success(response.data.message);
          this.$router.push("/sign-in");
        })
        .catch(error => {
          this.$store.dispatch("loader", false);
          if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
            this.$toast.error(error.message);
          } else {
            this.errors = getServerErrors(error);
            this.$toast.error("Something went wrong.");
          }
        });
    },
  },
  mounted() {
    if (!this.token || !this.uidb64) {
      this.$toast.warning("Invalid token.");
      this.$router.push("/forgot-password");
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