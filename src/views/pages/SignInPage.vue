<template lang="">
    <div>
        <navbar-component />
        <section class="authMaindiv-area">
            <div class="container middleContainer">
            <div class="authMainDiv">
                <img src="@/assets/images/user/auth-side-img.png" class="authImg" alt="image">
                <div class="authformRightPart">
                <div class="authInnerDiv">
                    <h1 class="headingArea">Sign in to <span>Account</span></h1>
                    <form action="#">
                    <div class="auth-form">
                        <label for="email">Email</label>
                        <input type="text" id="email">
                    </div>
                    <div class="auth-form">
                        <label for="password">Password</label>
                        <input type="text" id="password">
                    </div>
                    <div class="rememberAndForgetDiv">
                        <div>
                        <input type="checkbox" id="remember_me">&nbsp<label for="remember_me">Remember Me</label>
                        </div>
                        <div><router-link to="/forgot-password"><span>Forgot Password?</span></router-link></div>
                    </div>
                    <div class="authButtonDiv">
                        <router-link class="btn" to="/profile-details" type="submit">Sign In</router-link>
                    </div>
                    <p class="authButtomPara">Don’t have an account? &nbsp;<router-link to="/sign-up">Sign Up</router-link></p>
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