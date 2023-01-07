<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <div class="authMainDiv">
          <img src="@/assets/images/user/auth-side-img.png" class="authImg" alt="image">
          <div class="authformRightPart">
            <div class="authInnerDiv">
              <h1 class="headingArea">Forgot <span>Password</span></h1>
              <!-- <form action="/reset-password"> -->
              <div>
                <div class="auth-form">
                  <label for="email">Email</label>
                  <input type="text" id="email" v-model="email" @keyup="errors.email = false">
                </div>
                <label class="error" v-if="email === ''">This field is required.</label>
                <label class="error" v-if="errors.email && errors.email[0]">{{errors.email[0]}}</label>
              </div>
              <div class="authButtonDiv">
                <a class="btn" @click="sendForgotRequest()">Send Reset Link</a>
              </div>
              <router-link to="/sign-in" class="backButton"><img src="@/assets/images/user/back-chev.svg" alt="">&nbsp;
                <span>Back</span></router-link>
              <!-- </form> -->
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
import { getUrl } from "../../network/url";
import { post } from "../../network/requests";
import { authHeader } from "../../services/helper";
export default {
  components: { NavbarComponent, FotterComponent },
  data() {
    return {
      email: null,
      errors: [],
    };
  },
  methods: {
    isValidEmail: function() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return true;
      }
      return false;
    },
    checkValidation: function() {
      this.errors = [];
      let valid = true;
      if (!this.email) {
        this.email = "";
        valid = false;
      } else {
        if (!this.isValidEmail()) {
          this.errors.email = ["Please enter a valid email address."];
          valid = false;
        }
      }
      return valid;
    },

    sendForgotRequest: function() {
      if (!this.checkValidation()) {
        console.log(this.errors);
        return false;
      }
      console.log(this.email);
      this.$store.dispatch("loader", true);
      post(getUrl("forgot-password"), { email: this.email }, authHeader())
        .then(response => {
          console.log(response.data.success);
          this.$store.dispatch("loader", false);
          this.$toast.success(response.data.success);
          // this.$router.push("/sign-in");
        })
        .catch(error => {
          console.log(error);
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