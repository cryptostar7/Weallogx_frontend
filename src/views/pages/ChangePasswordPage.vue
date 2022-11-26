<template lang="">
    <div>
        <section class="authMaindiv-area">
            <div class="container middleContainer">
            <div class="editProfile">
                <div class="headingDivPricing paymentHeading">
                <h1 class="headingArea">Change <span>Password</span></h1>
                </div>
                <div class="editProfileInnerDiv">
                <form action="#">
                    <div class="change-password-main-div">
                    <div class="change-password-inner-div">
                        <div class="auth-form changePasswordInputDiv">
                        <label for="firstName">Current Password</label>
                        <input type="password" id="firstName">
                        </div>
                        <div class="auth-form changePasswordInputDiv">
                        <label for="lastName">New Password</label>
                        <input type="password" id="lastName">
                        </div>
                        <div class="auth-form changePasswordInputDiv">
                        <label for="lastName">Confirm New Password</label>
                        <input type="password" id="lastName">
                        </div>
                        <div class="authButtonDiv" class="active">
                        <button class="btn" type="submit">Change Password</button>
                        </div>
                    </div>
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