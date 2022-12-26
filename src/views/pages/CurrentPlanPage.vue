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
              <div v-if="current_plan">
                <img src="@/assets/images/user/plan-rocket.svg" alt="Plan">
                <h6 v-if="!current_plan.active" class="text-danger">No active plan!</h6>
                <h6 v-if="current_plan.active">You are using {{$getPlanName(current_plan.plan_type)}}</h6>
                <p v-if="current_plan.active">{{timeleft}} <span>{{timeleft > 1 ? 'days' :'day'}} left</span></p>
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
  data() {
    return {
      timeleft: 0,
    };
  },
  methods: {
    getRemainingTime: function(start, end) {
      let remainingTime = {
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
        percentage: 0.1,
        timeleft: false,
      };

      if (new Date() < new Date(end)) {
        let a = new Date(end).getTime();
        let b = new Date().getTime();
        let c = new Date(start).getTime();
        let difference = a - b;

        if (difference > 0) {
          remainingTime = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString(),
            minutes: Math.floor((difference / 1000 / 60) % 60).toString(),
            seconds: Math.floor((difference / 1000) % 60).toString(),
            percentage: 100 - Math.floor((b - c) / (a - c) * 100),
            timeleft: true,
          };
        }
      }
      console.log(remainingTime);
      this.timeleft = remainingTime.timeleft ? remainingTime.days : 0;
      return remainingTime;
    },
    getCurrentPlan: function() {
      get(getUrl("current_plan"), authHeader())
        .then(response => {
          console.log(response);
          this.getRemainingTime(
            response.data.data.start_date,
            response.data.data.end_date
          );
          this.$store.dispatch("currentPlan", response.data.data);
          localStorage.setItem(
            "plan_active",
            response.data.data.active ? 1 : 0
          );
        })
        .catch(error => {
          console.log(error);
          this.$toast.error(getFirstError(error));
        });
    },
  },
  mounted() {
    let plan = this.$store.state.data.current_plan;
    if (!plan) {
      this.getCurrentPlan();
    } else {
      this.getRemainingTime(plan.start_date, plan.end_date);
      localStorage.setItem("plan_active", plan.active ? 1 : 0);
    }
  },
  computed: {
    current_plan() {
      return this.$store.state.data.current_plan;
    },
  },
};
</script>
