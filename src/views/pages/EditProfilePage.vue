<template lang="" >
  <div>
    <navbar-component />
    <section class="authMaindiv-area" >
      <div class="container middleContainer" >

        <div class="editProfile" >
          <div class="editProHeadingBack" >
            <div class="headingDivPricing paymentHeading" >
              <h1 class="headingArea" >Edit <span>Profile</span></h1>
            </div>
            <div class="mt-15" >
              <router-link to="/profile-details" class="backButton" ><img src="@/assets/images/user/back-chev.svg"
                  alt="" >&nbsp;
                <span>Back</span></router-link>
            </div>
          </div>
          <div class="editProfileInnerDiv" >
              <div class="editProfileDpMainDiv" >
                <div class="editProfileDp" >
                  <div class="profile-imgDiv" >
                    <img :src="profileImg ? profileImg : 'src/assets/images/user/profile-pic.png'" alt="Profile Image" class="preview-pro-image" >
                  </div>
                  <label for="pro-image-upload" class="editProfileIcon" >
                    <input type="file" class="pro-image-upload-cls" id="pro-image-upload"  @change="addImage" hidden>
                    <img src="@/assets/images/user/edit-pen-icon.svg" alt="Edit Pen" >
                  </label>
                </div>
              </div>
              
              <div class="edit-profile-inputs-div" >
                <div class="editProfileInpuDiv">
                  <div class="auth-form" >
                    <label for="firstName" class="active" >First Name</label>
                    <input type="text" id="firstName" v-model="user.first_name" @keyup="errors.first_name = false" >
                  </div>
                  <label class="error" v-if="user.first_name === ''" >This field is required.</label>
                  <label class="error" v-if="errors.first_name && errors.first_name[0]" >{{errors.first_name[0]}}</label>
                </div>

                <div class="editProfileInpuDiv">
                  <div class="auth-form" >
                    <label for="lastName" class="active" >Last Name</label>
                    <input type="text" id="lastName" v-model="user.last_name" @keyup="errors.last_name = false" >
                  </div>
                  <label class="error" v-if="errors.last_name && errors.last_name[0]" >{{errors.last_name[0]}}</label>
                </div>

                <div class="editProfileInpuDiv">
                  <div class="auth-form" >
                    <label for="email" class="active" >Company Name</label>
                    <input type="text" id="email" v-model="user.company_name" @keyup="errors.company_name = false" >
                  </div>
                  <!-- <label class="error" v-if="user.company_name === ''" >This field is required.</label> -->
                  <label class="error" v-if="errors.company_name && errors.company_name[0]" >{{errors.company_name[0]}}</label>
                </div>

                <div class="editProfileInpuDiv">
                  <div class="auth-form" >
                    <label for="phone" class="active" >Email</label>
                    <input type="text" id="phone" readonly v-model="user.email" @keyup="errors.email = false" >
                  </div>
                  <label class="error" v-if="user.email === ''" >This field is required.</label>
                  <label class="error" v-if="errors.email && errors.email[0]" >{{errors.email[0]}}</label>
                </div>

                <div class="editProfileInpuDiv">
                  <div class="auth-form" >
                    <label for="password" class="active" >Phone</label>
                    <input type="text" id="password" v-model="user.phone_number" @keyup="errors.phone_number = false" >
                  </div>
                  <label class="error" v-if="user.phone_number === ''" >This field is required.</label>
                  <label class="error" v-if="errors.phone_number && errors.phone_number[0]" >{{errors.phone_number[0]}}</label>
                </div>

                <div class="editProfileInpuDiv">
                  <div class="auth-form" >
                    <label for="confirmPassword" class="active" >Website</label>
                    <input type="text" id="confirmPassword" v-model="user.website" @keyup="errors.website = false" >
                  </div>
                  <!-- <label class="error" v-if="user.website === ''" >This field is required.</label> -->
                  <label class="error" v-if="errors.website && errors.website[0]" >{{errors.website[0]}}</label>
                </div>

                <div class="editProfileInpuDiv">
                  <div class="auth-form" >
                    <label for="confirmPassword" class="active" >Address</label>
                    <input type="text" id="confirmPassword" v-model="user.street_address" @keyup="errors.street_address = false" >
                  </div>
                  <!-- <label class="error" v-if="user.street_address === ''" >This field is required.</label> -->
                  <label class="error" v-if="errors.street_address && errors.street_address[0]" >{{errors.street_address[0]}}</label>
                </div>

                <div class="editProfileInpuDiv">
                  <div class="auth-form" >
                    <label for="confirmPassword" class="active" >City</label>
                    <input type="text" id="confirmPassword" v-model="user.city" @keyup="errors.city = false" >
                  </div>
                  <!-- <label class="error" v-if="user.city === ''" >This field is required.</label> -->
                  <label class="error" v-if="errors.city && errors.city[0]" >{{errors.city[0]}}</label>
                </div>

                <div class="editProfileInpuDiv">
                  <div class="auth-form" >
                    <label for="confirmPassword" class="active" >State</label>
                    <input type="text" id="confirmPassword" v-model="user.state" @keyup="errors.state = false" >
                  </div>
                  <!-- <label class="error" v-if="user.state === ''" >This field is required.</label> -->
                  <label class="error" v-if="errors.state && errors.state[0]" >{{errors.state[0]}}</label>
                </div>

                <div class="editProfileInpuDiv">
                  <div class="auth-form" >
                    <label for="confirmPassword" class="active" >Zip Code</label>
                    <input type="text" id="confirmPassword" maxlength="7" v-model="user.zip_code" @keyup="errors.zip_code = false" >
                  </div>
                  <!-- <label class="error" v-if="user.zip_code === ''" >This field is required.</label> -->
                  <label class="error" v-if="errors.zip_code && errors.zip_code[0]" >{{errors.zip_code[0]}}</label>
                </div>

              </div>
              <div class="businessLogoUploadDiv" >
                <label class="businessLogoLabel" >Upload Business Logo</label>
                <div class="businessLogoInnerDiv" >
                  <div>
                    <div class="businessLogoImageDiv" >
                      <img src="@/assets/images/user/business-logo-image.png" alt="logo" class="preview-business-image" >
                    </div>
                    <p class="logoNoticePara" >( *Logo with transparent background is recommended ) </p>

                    <div class="businesslogoUploadImgDiv" >
                      <div>
                        <input type="file" id="business-logo-upload" class="business-image-upload-cls" hidden>
                        <label for="business-logo-upload" ><img src="@/assets/images/user/logo-upload-icon.svg"
                            alt="Upload" ></label>
                        <p>Upload Logo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="authButtonDiv active" >
                <button class="btn" @click="updateProfile()" >Update</button>
              </div>
          </div>
          <router-link to="/profile-details" class="backButton editProbackBtn" ><img
              src="@/assets/images/user/back-chev.svg" alt="" >&nbsp;
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
import { get, put, patch } from "../../network/requests";
import { getUrl } from "../../network/url";
import {
  authHeader,
  getFirstError,
  getServerErrors,
} from "../../services/helper";
export default {
  components: { NavbarComponent, FotterComponent },
  data() {
    return {
      user: {
        company_name: null,
        street_address: null,
        city: null,
        state: null,
        avatar: null,
        zip_code: null,
        website: null,
        business_logo: null,
        first_name: null,
        last_name: null,
        email: null,
        phone_number: null,
      },
      profileImg: null,
      errors: [],
    };
  },
  methods: {
    addImage: function(e) {
      var image = new FormData();
      if (e) {
        this.user.avatar = e.target.files[0];
        console.log(this.user.avatar);
        image.append("avatar", e.target.files[0]);
        image.append("test", 'kgjdsgdfl');
        this.profileImg = URL.createObjectURL(e.target.files[0]);

        patch(
          `${getUrl("profile")}/${this.user.id}/`,
          image,
          authHeader()
        )
          .then(response => {
            console.log(response);
            this.$toast.success(response.data.message);
            // this.$router.push("/profile-details");
          })
          .catch(error => {
            console.log(error);
            this.errors = getServerErrors(error);
            console.log(getFirstError(error));
            this.$toast.error(getFirstError(error));
          });
      }
    },
    getProfile: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("profile"), authHeader())
        .then(response => {
          console.log(response.data.data);
          this.user = response.data.data;
          this.profileImg = this.user.avatar;
          this.$store.dispatch("user", this.user);
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loader", false);
        });
    },
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
      if (!this.user.firstname) {
        this.user.firstname = "";
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

      return valid;
    },
    updateProfile: function() {
      console.log(this.user);
      this.user.phone_number = this.user.phone_number;
      this.user.user_id = this.user.id;
      var userData = this.user;
      // var userData = new FormData();
      // userData.append("company_name", this.user.company_name);
      // userData.append("street_address", this.user.street_address);
      // userData.append("city", this.user.city);
      // userData.append("state", this.user.state);
      // userData.append("avatar", this.user.avatar);
      // userData.append("zip_code", this.user.zip_code);
      // userData.append("website", this.user.website);
      // // userData.append('business_logo', this.user.business_logo);
      // userData.append("first_name", this.user.first_name);
      // userData.append("last_name", this.user.last_name);
      // userData.append("email", this.user.email);
      // userData.append("phone_number", this.user.phone_number);

      patch(
        `${getUrl("profile")}/${this.user.id}/`,
        userData,
        authHeader()
      )
        .then(response => {
          console.log(response);
          this.$toast.success(response.data.message);
          this.$router.push("/profile-details");
        })
        .catch(error => {
          console.log(error);
          this.errors = getServerErrors(error);
          console.log(getFirstError(error));
          this.$toast.error(getFirstError(error));
        });
    },
  },
  mounted() {
    if (!this.$store.state.data.user) {
      this.getProfile();
      console.log("profile API called");
    } else {
      this.user = this.$store.state.data.user;
      this.profileImg = this.user.avatar;
    }
  },
};
</script>
<style>
.error {
  color: red;
}
</style>