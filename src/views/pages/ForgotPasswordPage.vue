<template lang="">
    <div>
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>