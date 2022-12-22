<template lang="">
  <div>
    <navbar-component />
    <section class="authMaindiv-area">
      <div class="container middleContainer">
        <header-component />
        <!-- Profile details Start -->
        <div class="payment-methodMain-div paymentMiddleDivMain">
          <sidebar-component />
          <div class="payment-right-card-main-div dashBoardRightDiv">
            <div class="current-plan-main-div">
              <div>
                <img src="@/assets/images/user/plan-rocket.svg" alt="Plan">
                <h6>You are using Free Trial</h6>
                <p>07 <span>days left</span></p>
                <a href="https://keithcooper439.lpages.co/plans/" class="plan-upgrad-button">Upgrade Plan</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Profile details end -->
      </div>
    </section>
    <fotter-component />
  </div>
</template>
<script>
import NavbarComponent from "./../components/common/UserNavbarComponent.vue";
import FotterComponent from "./../components/common/UserFooterComponent.vue";
import HeaderComponent from "./../components/user-dashboard/HeaderComponent.vue";
import SidebarComponent from "./../components/user-dashboard/SidebarComponent.vue";
import { get } from "../../network/requests";
import { getUrl } from "../../network/url";
import { getFirstError, authHeader } from "../../services/helper";
export default {
  components: {
    NavbarComponent,
    FotterComponent,
    HeaderComponent,
    SidebarComponent,
  },
  methods: {
    getCurrentPlan: function() {
      get(getUrl("current_plan"), authHeader())
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          this.$toast.error(getFirstError(error));
        });
    },
  },
  mounted() {
    this.getCurrentPlan();
  },
};
</script>
