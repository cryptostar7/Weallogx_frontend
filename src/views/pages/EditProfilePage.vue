<template lang="">
    <div>
          <section class="authMaindiv-area">
    <div class="container middleContainer">

      <div class="editProfile">
        <div class="editProHeadingBack">
          <div class="headingDivPricing paymentHeading">
            <h1 class="headingArea">Edit <span>Profile</span></h1>
          </div>
          <div class="mt-15">
            <router-link to="/profile-details" class="backButton"><img src="@/assets/images/user/back-chev.svg" alt="">&nbsp;
            <span>Back</span></router-link>
          </div>
        </div>
        <div class="editProfileInnerDiv">

          <form action="#">
            <div class="editProfileDpMainDiv">
              <div class="editProfileDp">
                <div class="profile-imgDiv">
                  <img src="@/assets/images/user/profile-pic.png" alt="Profile Image" class="preview-pro-image">
                </div>
                <label for="pro-image-upload" class="editProfileIcon">
                  <input type="file" class="pro-image-upload-cls" id="pro-image-upload" hidden>
                  <img src="@/assets/images/user/edit-pen-icon.svg" alt="Edit Pen">
                </label>
              </div>
            </div>
            <div class="edit-profile-inputs-div">
              <div class="auth-form editProfileInpuDiv">
                <label for="firstName" class="active">First Name</label>
                <input type="text" id="firstName" value="Allianz">
              </div>
              <div class="auth-form editProfileInpuDiv">
                <label for="lastName" class="active">Last Name</label>
                <input type="text" id="lastName" value="Parse">
              </div>
              <div class="auth-form editProfileInpuDiv">
                <label for="email" class="active">Company Name</label>
                <input type="text" id="email" value="XYZ Private limited">
              </div>
              <div class="auth-form editProfileInpuDiv">
                <label for="phone" class="active">Email</label>
                <input type="text" id="phone" value="xyz2345@gmail.com">
              </div>
              <div class="auth-form editProfileInpuDiv">
                <label for="password" class="active">Phone</label>
                <input type="text" id="password" value="+19789876552">
              </div>
              <div class="auth-form editProfileInpuDiv">
                <label for="confirmPassword" class="active">Website</label>
                <input type="text" id="confirmPassword" value="www.xyzcompany.com">
              </div>

              <div class="auth-form editProfileInpuDiv">
                <label for="confirmPassword" class="active">Address</label>
                <input type="text" id="confirmPassword" value="123 N Main Street">
              </div>
              <div class="auth-form editProfileInpuDiv">
                <label for="confirmPassword" class="active">City</label>
                <input type="text" id="confirmPassword" value="New York">
              </div>
              <div class="auth-form editProfileInpuDiv">
                <label for="confirmPassword" class="active">State</label>
                <input type="text" id="confirmPassword" value="New York">
              </div>
              <div class="auth-form editProfileInpuDiv">
                <label for="confirmPassword" class="active">Zip Code</label>
                <input type="text" id="confirmPassword" value="10018">
              </div>
            </div>
            <div class="businessLogoUploadDiv">
              <label class="businessLogoLabel">Upload Business Logo</label>
              <div class="businessLogoInnerDiv">
                <div>
                  <div class="businessLogoImageDiv">
                    <img src="@/assets/images/user/business-logo-image.png" alt="logo" class="preview-business-image">
                  </div>
                  <p class="logoNoticePara">( *Logo with transparent background is recommended ) </p>

                  <div class="businesslogoUploadImgDiv">
                    <div>
                      <input type="file" id="business-logo-upload" class="business-image-upload-cls" hidden>
                      <label for="business-logo-upload"><img src="@/assets/images/user/logo-upload-icon.svg" alt="Upload"></label>
                      <p>Upload Logo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="authButtonDiv active">
              <button class="btn" type="submit">Update</button>
            </div>
          </form>
        </div>
        <router-link to="/profile-details" class="backButton editProbackBtn"><img src="@/assets/images/user/back-chev.svg" alt="">&nbsp;
            <span>Back</span></router-link>
      </div>
    </div>
  </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>