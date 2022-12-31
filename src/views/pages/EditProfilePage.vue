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
                    <img :src="profileImg ? profileImg : '/nav-user-icon.svg'" alt="Profile Image" class="preview-pro-image" >
                  </div>
                  <label for="pro-image-upload" class="editProfileIcon" >
                    <input type="file" accept="image/*" class="pro-image-upload-cls" id="pro-image-upload"  @change="addProfileImage" hidden>
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
                    <div class="businessLogoImageDiv" v-if="businessLogo">
                      <img :src="businessLogo" alt="logo" class="preview-business-image" >
                    </div>
                    <p class="logoNoticePara" >( *Logo with transparent background is recommended ) </p>
                    <div class="businesslogoUploadImgDiv" >
                      <div>
                        <input type="file" id="business-logo-upload" accept="image/*" class="business-image-upload-cls" @change="addBusinessLogo" hidden>
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
  setCurrentUser,
} from "../../services/helper";
export default {
  components: { NavbarComponent, FotterComponent },
  data() {
    return {
      user: {
        company_name: "",
        street_address: "",
        city: "",
        state: "",
        avatar: "",
        zip_code: "",
        website: null,
        business_logo: "",
        first_name: null,
        last_name: "",
        email: null,
        phone_number: null,
      },
      profileImg: "",
      businessLogo: "",
      profileImgFile: false,
      businessLogoFile: false,
      errors: [],
    };
  },
  methods: {
    addProfileImage: function(e) {
      if (e) {
        this.profileImgFile = e.target.files[0];
        this.profileImg = URL.createObjectURL(e.target.files[0]);
      }
    },
    addBusinessLogo: function(e) {
      if (e) {
        this.businessLogoFile = e.target.files[0];
        this.businessLogo = URL.createObjectURL(e.target.files[0]);
      }
    },
    getProfile: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("profile"), authHeader())
        .then(response => {
          console.log(response.data.data);
          this.user = response.data.data;
          this.profileImg = this.user.avatar;
          this.businessLogo = this.user.business_logo;
          this.$store.dispatch("user", this.user);
          setCurrentUser({
            first_name: this.user.first_name,
            last_name: this.user.last_name,
          });
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
      this.$store.dispatch("loader", true);
      console.log(this.user);
      this.user.phone_number = this.user.phone_number;
      this.user.user_id = this.user.id;
      var userData = this.user;
      var userData = new FormData();
      userData.append("company_name", this.user.company_name);
      userData.append("street_address", this.user.street_address);
      userData.append("city", this.user.city);
      userData.append("state", this.user.state);
      if (this.profileImgFile) {
        userData.append("avatar", this.profileImgFile);
      }
      if (this.businessLogoFile) {
        userData.append("business_logo", this.businessLogoFile);
      }
      userData.append("zip_code", this.user.zip_code);
      userData.append("website", this.user.website);
      userData.append("first_name", this.user.first_name);
      userData.append("last_name", this.user.last_name);
      userData.append("phone_number", this.user.phone_number);

      patch(`${getUrl("profile")}/${this.user.id}/`, userData, authHeader())
        .then(response => {
          console.log(response);
          this.getProfile();
          this.$toast.success(response.data.message);
          this.$store.dispatch("loader", false);
          // this.$router.push("/profile-details");
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loader", false);
          this.errors = getServerErrors(error);
          console.log(getFirstError(error));
          this.$toast.error(getFirstError(error));
        });
    },
  },
  mounted() {
    if (!this.$store.state.data.user) {
      this.getProfile();
    } else {
      this.user = this.$store.state.data.user;
      this.profileImg = this.user.avatar;
      this.businessLogo = this.user.business_logo;
    }
  },
};
</script>
<style>
.error {
  color: red;
}
</style>