import { createRouter, createWebHistory } from "vue-router";
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
      path: "/demo",
      name: "demo",
      component: () => import("../views/pages/DemoView.vue"),
    },
    {
      path: "/individual-client/:id",
      name: "individual client",
      component: () => import("../views/pages/IndividualClientPage.vue"),
    },
    {
      path: "/create-new-scenario",
      name: "create new scenario",
      component: () => import("../views/pages/CreateNewScenario.vue"),
    },
    {
      path: "/illustration-data",
      name: "illustration data",
      component: () => import("../views/pages/IllustrationData.vue"),
    },
    {
      path: "/comparative-vehicles",
      name: "comparative vehicles",
      component: () => import("../views/pages/ComparativeVehicle.vue"),
    },
    {
      path: "/historical-simulations",
      name: "historical simulations",
      component: () => import("../views/pages/HistoricalSimulationsPage.vue"),
    },
    {
      path: "/historical-simulations-after-no",
      name: "historical simulations after no",
      component: () => import("../views/pages/HistoricalSimulationsPageAfterNo.vue"),
    },
    {
      path: "/historical-simulations-after-yes",
      name: "historical simulations after yes",
      component: () => import("../views/pages/HistoricalSimulationsPageAfterYes.vue"),
    }, 
    {
      path: "/historical-simulations-from-scratch",
      name: "historical simulations from scratch",
      component: () => import("../views/pages/HistoricalSimulationsFromScratchPage.vue"),
    },    
    {
      path: "/review-summary",
      name: "review summary",
      component: () => import("../views/pages/ReviewSummaryPage.vue"),
    },    
    {
      path: "/report-builder",
      name: "report builder",
      component: () => import("../views/pages/ReportBuilderPage.vue"),
    }, 

  ],
});

export default router;
