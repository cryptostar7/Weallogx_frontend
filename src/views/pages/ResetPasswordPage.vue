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
                    <form action="#">
                    <div class="auth-form">
                        <label for="email">New Password</label>
                        <input type="password" id="email">
                    </div>
                    <div class="auth-form">
                        <label for="email">Confirm Password</label>
                        <input type="password" id="email">
                    </div>
                    <div class="authButtonDiv">
                        <router-link to="/sign-in" class="btn" type="submit">Submit</router-link>
                    </div>
                    <router-link to="/forgot-password" class="backButton"><img src="@/assets/images/user/back-chev.svg" alt="">&nbsp; <span>Back</span></router-link>
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