import { createRouter, createWebHistory } from "vue-router";
import { authCheck, isPlanActive, isTscUser, isAdminUser } from "../services/helper";
import HomePage from "../views/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/demo/:id?",
      name: "demo",
      component: () => import("../views/pages/DemoView.vue"),
    },
    {
      path: "/health",
      name: "health-check",
      component: () => import("../views/pages/HealthCheck.vue"),
    },
    {
      path: "/stripe-source",
      name: "stripe-source",
      component: () => import("../views/pages/StripeSourceView.vue"), // Only for testing
    },
    {
      path: "/individual-client/:id",
      name: "individual-client",
      component: () => import("../views/pages/IndividualClientPage.vue"),
    },
    {
      path: "/scenario-details/:scenario?",
      name: "scenario-details",
      component: () => import("../views/pages/CreateNewScenario.vue"),
    },
    {
      path: "/illustration-data/:scenario",
      name: "illustration-data",
      component: () => import("../views/pages/IllustrationData.vue"),
    },
    {
      path: "/comparative-vehicles/:scenario",
      name: "comparative-vehicles",
      component: () => import("../views/pages/ComparativeVehicle.vue"),
    },
    {
      path: "/select-historical-simulations/:scenario",
      name: "select-historical-simulations",
      component: () => import("../views/pages/HistoricalSimulationsPage.vue"),
    },
    {
      path: "/scenario-complete/:scenario",
      name: "scenario-complete",
      component: () => import("../views/pages/HistoricalSimulationsPageAfterNo.vue"),
    },
    {
      path: "/historical-index-strategy-allocation/:scenario",
      name: "historical-index-strategy-allocation",
      component: () => import("../views/pages/HistoricalSimulationsPageAfterYes.vue"),
    },
    {
      path: "/historical-simulations/:scenario?",
      name: "historical-simulations",
      component: () => import("../views/pages/HistoricalSimulationsFromScratchPage.vue"),
    },
    {
      path: "/review-summary/:scenario?",
      name: "review-summary",
      component: () => import("../views/pages/ReviewSummaryPage.vue"),
    },
    {
      path: "/report-builder/:report?",
      name: "report-builder",
      component: () => import("../views/pages/ReportBuilderPage.vue"),
    },
    {
      path: "/report/:report/:view_token",
      name: "report",
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
      path: "/user-login-with-token",
      name: "user-login-with-token",
      component: () => import("../views/pages/UserLoginWithToken.vue"),
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
      path: "/index-strategy-calculator",
      name: "index-strategy-calculator",
      component: () => import("../views/pages/IndexStrategyCalculatorPage.vue"),
    },
    {
      path: "/index-strategy-calculator-run",
      name: "index-strategy-calculator-run",
      component: () => import("../views/pages/IndexStrategyCalculatorRun.vue"),
    },
    {
      path: "/tax-score-card",
      name: "tax-score-card",
      component: () => import("../views/pages/TaxScoreCard.vue"),
    },
    {
      path: "/tsc-login",
      name: "tsc-login",
      component: () => import("../views/pages/TscLogin.vue"),
    },
    {
      path: "/tax-risk-analysis",
      name: "tax-risk-analysis",
      component: () => import("../views/pages/TaxRiskAnalysis.vue"),
    },
    {
      path: "/tech-error",
      name: "tech-error",
      component: () => import("../views/pages/TechnicalError.vue"),
    },
    // Standalone Historical Simulatation Routes
    {
      path: "/historical/simulations",
      name: "historical-simulations-list",
      component: () => import("../views/historical-simulations/pages/SimulationsListPage.vue"),
    },
    {
      path: "/historical/client/:id",
      name: "historical-client",
      component: () => import("../views/historical-simulations/pages/IndividualClientPage.vue"),
    },
    {
      path: "/historical/simulation-details/:simulation?",
      name: "historical-simulation-details",
      component: () => import("../views/historical-simulations/pages/SimulationDetailsPage.vue"),
    },
    {
      path: "/historical/illustration-data/:simulation",
      name: "historical-illustration-data",
      component: () => import("../views/historical-simulations/pages/IllustrationDataPage.vue"),
    },
    {
      path: "/historical/parameters/:simulation",
      name: "historical-parameters",
      component: () => import("../views/historical-simulations/pages/SimulationParametersPage.vue"),
    },
    {
      path: "/historical/simulation-review/:simulation?",
      name: "historical-simulation-review",
      component: () => import("../views/historical-simulations/pages/ReviewSummaryPage.vue"),
    },
    {
      path: "/historical/report-builder/:report?",
      name: "historical-report-builder",
      component: () => import("../views/historical-simulations/pages/ReportBuilderPage.vue"),
    },
    {
      path: "/historical/report/:report/:view_token",
      name: "historical-report",
      component: () => import("../views/historical-simulations/pages/ReportBuilderPage.vue"),
    },
    // Retirement Buffer Section Routes
    {
      path: "/retirement-buffer",
      name: "retirement-buffer",
      component: () => import("../views/retirement-buffer/RetirementBufferChooseCategoryPage.vue"),
    },
    {
      path: "/retirement-buffer/accumulation/params",
      name: "retirement-buffer-accumulation-params",
      component: () => import("../views/retirement-buffer/accumulation/RetirementBufferParamsPage.vue"),
    },
    {
      path: "/retirement-buffer/accumulation/result",
      name: "retirement-buffer-accumulation-result",
      component: () => import("../views/retirement-buffer/accumulation/RetirementBufferResultPage.vue"),
    },
    {
      path: "/retirement-buffer/income-rider",
      name: "retirement-buffer-income-rider",
      component: () => import("@/views/retirement-buffer/income-rider/IncomeRider.vue"),
    },
    {
      path: "/retirement-buffer/income-rider/result",
      name: "retirement-buffer-income-rider-result",
      component: () => import("@/views/retirement-buffer/income-rider/IncomeRiderResultPage.vue"),
    },
    // Admin Panel Routes
    {
      path: "/admin",
      name: "AdminDashboard",
      component: () => import("../views/admin/pages/AdminDashboard.vue"),
      meta: { requiresAdmin: true }
    },
    {
      path: "/admin/users",
      name: "AdminUserList",
      component: () => import("../views/admin/pages/AdminUserList.vue"),
      meta: { requiresAdmin: true }
    },
    {
      path: "/admin/users/create",
      name: "AdminUserCreate",
      component: () => import("../views/admin/pages/AdminUserCreate.vue"),
      meta: { requiresAdmin: true }
    },
    {
      path: "/admin/users/:id",
      name: "AdminUserDetail",
      component: () => import("../views/admin/pages/AdminUserDetail.vue"),
      meta: { requiresAdmin: true }
    },
    {
      path: "/admin/users/:id/edit",
      name: "AdminUserEdit",
      component: () => import("../views/admin/pages/AdminUserEdit.vue"),
      meta: { requiresAdmin: true }
    },
    {
      path: "/:pathMatch(.*)*",
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
  'scenario-details',
  'illustration-data',
  'comparative-vehicles',
  'historical-simulations',
  'scenario-complete',
  'historical-index-strategy-allocation',
  'historical-simulation',
  'review-summary',
  'report-builder',
  'index-strategy-calculator',
  'index-strategy-calculator-run',
  'historical-simulations-list',
  'historical-simulation-details',
  'historical-illustration-data',
  'historical-parameters',
  'historical-report-builder',
  'retirement-buffer',
  'retirement-buffer-accumulation-params',
  'retirement-buffer-accumulation-result',
  'retirement-buffer-income-rider',
  'retirement-buffer-income-rider-result'
];

// these routes are secure with active plans
const secureRoutes = [
  // 'home',
  // 'scenario-details',
  // 'illustration-data',
  // 'comparative-vehicles',
  // 'historical-simulations',
  // 'scenario-complete',
  // 'historical-index-strategy-allocation',
  // 'historical-simulations',
  // 'review-summary',
  // 'report-builder',
];

// Tax score card routes
const tscRoutes = [
  'tax-score-card',
];

router.beforeEach((to, from, next) => {
  // Check if route requires admin access
  if (to.meta.requiresAdmin) {
    if (!authCheck()) {
      // Clear expired tokens
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("plan_active");
      
      // Redirect to sign-in with return path
      next(`/sign-in?next=${encodeURIComponent(to.fullPath)}`);
      return;
    }
    
    if (!isAdminUser()) {
      // Redirect non-admin users to home page
      next('/profile-details');
      return;
    }
  }

  // Check if route requires authentication
  if (authRoutes.includes(to.name) || secureRoutes.includes(to.name) || tscRoutes.includes(to.name)) {
    if (!authCheck()) {
      // Clear expired tokens
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("plan_active");
      
      // Redirect to sign-in with return path
      next(`/sign-in?next=${encodeURIComponent(to.fullPath)}`);
      return; // Important: return early to prevent calling next() again
    }

    // TSC user redirect
    if (isTscUser() && !tscRoutes.includes(to.name)) {
      next('/tax-score-card');
      return;
    }

    // Plan active check for secure routes
    if (secureRoutes.includes(to.name) && authCheck() && !isPlanActive()) {
      next('/current-plan');
      return;
    }
  }
  
  // Redirect to profile if already logged in and trying to access sign-in
  if (to.name === 'sign-in' && authCheck()) {
    next('/profile-details');
    return;
  }
  
  // Allow navigation
  next();
});

export default router;