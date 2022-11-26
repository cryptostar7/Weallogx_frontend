<template lang="">
    <div>
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
                    <router-link to="/forgot-password" class="backButton"><img src="images/back-chev.svg" alt="">&nbsp; <span>Back</span></router-link>
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