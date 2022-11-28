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
            <form action="/reset-password">

              <div class="auth-form">
                <label for="email">Email</label>
                <input type="text" id="email">
              </div>

              <div class="authButtonDiv">
                <router-link to="/reset-password" class="btn" type="submit">Send Reset Link</router-link>
              </div>
              <router-link to="/sign-in" class="backButton"><img src="@/assets/images/user/back-chev.svg" alt="">&nbsp;
                <span>Back</span></router-link>
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
<style lang="">
    
</style>