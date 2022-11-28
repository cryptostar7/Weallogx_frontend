<template lang="">
<div>
  <navbar-component />
<section class="authMaindiv-area">
  <div class="container middleContainer">
    <div class="authMainDiv">
      <img src="@/assets/images/user/auth-side-img.png" class="authImg" alt="image">
      <div class="authformRightPart">
        <div class="authInnerDiv">
          <h1 class="headingArea">Sign up for <span>Account</span></h1>
          <form action="#">
            <div class="d-flex flex-gap-10">
              <div class="auth-form">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName">
              </div>
              <div class="auth-form">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName">
              </div>
            </div>
            <div class="auth-form">
              <label for="email">Email</label>
              <input type="text" id="email">
            </div>
            <div class="auth-form">
              <label for="phone">Phone</label>
              <input type="text" id="phone">
            </div>
            <div class="auth-form">
              <label for="password">Password</label>
              <input type="text" id="password">
            </div>
            <div class="auth-form">
              <label for="confirmPassword">Confirm Password</label>
              <input type="text" id="confirmPassword">
            </div>

            <div class="authButtonDiv">
              <p class="text-align-center mb-5 fs-14">You are signing up for: <span class="bold">14-Day Free
                  Trial</span></p>
              <a class="btn" type="submit">Sign Up</a>
            </div>
            <p class="authButtomPara">Already have an account? &nbsp;
              <router-link to="/sign-in" >Sign In</router-link>
            </p>
          </form>
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
export default {
   components:{NavbarComponent, FotterComponent}
};
</script>
