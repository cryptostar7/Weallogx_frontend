import { createRouter, createWebHistory } from "vue-router";
import { authCheck, isPlanActive } from "../services/helper";
import HomePage from "../views/pages/HomePage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/demo",
      name: "demo",
      component: () => import("../views/pages/DemoView.vue"),
    },
    {
      path: "/demo1",
      name: "demo1",
      component: () => import("../views/pages/DemoView1.vue"),
    },
    {
      path: "/stripe-source",
      name: "stripe-source",
      component: () => import("../views/pages/StripeSourceView.vue"),
    },
    {
      path: "/individual-client/:id",
      name: "individual-client",
      component: () => import("../views/pages/IndividualClientPage.vue"),
    },
    {
      path: "/create-new-scenario",
      name: "create-new-scenario",
      component: () => import("../views/pages/CreateNewScenario.vue"),
    },
    {
      path: "/illustration-data/:scenario?",
      name: "illustration-data",
      component: () => import("../views/pages/IllustrationData.vue"),
    },
    {
      path: "/comparative-vehicles",
      name: "comparative-vehicles",
      component: () => import("../views/pages/ComparativeVehicle.vue"),
    },
    {
      path: "/historical-simulations",
      name: "historical-simulations",
      component: () => import("../views/pages/HistoricalSimulationsPage.vue"),
    },
    {
      path: "/historical-simulations-after-no",
      name: "historical-simulations-after-no",
      component: () => import("../views/pages/HistoricalSimulationsPageAfterNo.vue"),
    },
    {
      path: "/historical-simulations-after-yes",
      name: "historical-simulations-after-yes",
      component: () => import("../views/pages/HistoricalSimulationsPageAfterYes.vue"),
    },
    {
      path: "/historical-simulations-from-scratch",
      name: "historical-simulations-from-scratch",
      component: () => import("../views/pages/HistoricalSimulationsFromScratchPage.vue"),
    },
    {
      path: "/review-summary",
      name: "review-summary",
      component: () => import("../views/pages/ReviewSummaryPage.vue"),
    },
    {
      path: "/report-builder",
      name: "report-builder",
      component: () => import("../views/pages/ReportBuilderPage.vue"),
    },
    {
      path: "/sign-up/:plan?",
      name: "signup",
      component: () => import("../views/pages/SignupPage.vue"),
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: () => import("../views/pages/SignInPage.vue"),
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: () => import("../views/pages/ResetPasswordPage.vue"),
    },
    {
      path: "/profile-details",
      name: "profile-details",
      component: () => import("../views/pages/ProfileDetailsPage.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../views/pages/PricingPage.vue"),
    },
    {
      path: "/current-plan",
      name: "current-plan",
      component: () => import("../views/pages/CurrentPlanPage.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../views/pages/PaymentPage.vue"),
    },
    {
      path: "/payment-thankyou",
      name: "payment-thankyou",
      component: () => import("../views/pages/PaymentThankYouPage.vue"),
    },
    {
      path: "/payment-method",
      name: "payment-method",
      component: () => import("../views/pages/PaymentMethodPage.vue"),
    },
    {
      path: "/payment-history",
      name: "payment-history",
      component: () => import("../views/pages/PaymentHistoryPage.vue"),
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../views/pages/ForgotPasswordPage.vue"),
    },
    {
      path: "/change-password",
      name: "change-password",
      component: () => import("../views/pages/ChangePasswordPage.vue"),
    },
    {
      path: "/edit-payment-method",
      name: "edit-payment-method",
      component: () => import("../views/pages/EditPaymentMethodPage.vue"),
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      component: () => import("../views/pages/EditProfilePage.vue"),
    },
    {
      path: "/:slug/:slug2?/:slug3?",
      name: "not found page",
      component: () => import("../views/pages/NotFoundPageView.vue"),
    },
  ],
});

const authRoutes = [
  'profile-details',
  'edit-profile',
  'edit-payment-method',
  'payment-history',
  'payment',
  'current-plan',
  'pricing',
  'change-password',
  'home',
  'create-new-scenario',
  'illustration-data',
  'comparative-vehicles',
  'historical-simulations',
  'historical-simulations-after-no',
  'historical-simulations-after-yes',
  'historical-simulations-from-scratch',
  'review-summary',
  'report-builder',
];

// these routes are secure with active plans
const secureRoutes = [
  // 'home',
  // 'create-new-scenario',
  // 'illustration-data',
  // 'comparative-vehicles',
  // 'historical-simulations',
  // 'historical-simulations-after-no',
  // 'historical-simulations-after-yes',
  // 'historical-simulations-from-scratch',
  // 'review-summary',
  // 'report-builder',
];

router.beforeEach((to, from, next) => {
  if (authRoutes.includes(to.name) || secureRoutes.includes(to.name)) {
    if (!authCheck()) {
      next(`${'/sign-in?next='}${to.fullPath}`);
      this.$toast.warning('Authorization required, please login.');
    }
    if(secureRoutes.includes(to.name) && authCheck() && !isPlanActive()){
      next('/current-plan');
      // this.$toast.warning('Your plan has been expired, please upgrade your plan to continue the service.');
    }    
  }
  if (to.name === 'sign-in') {
    if (authCheck()) {
      next('/profile-details');
    }
  }
  next();
});

export default router;