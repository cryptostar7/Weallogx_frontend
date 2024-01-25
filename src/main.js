import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import helpers from './helpers'
import Toaster from "@meforma/vue-toaster";
import VueCryptojs from 'vue-cryptojs'
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import './assets/css/user/style.css';
import './assets/css/retirement-buffer/style.css';
import "./assets/css/custom.css";
import "./assets/css/dark-green.css";
import "./assets/css/light-blue.css";
import "./assets/css/dark-blue.css";
import "./assets/css/responsive.css";
import "./assets/js/popper.min.js";
import "./assets/js/bootstrap.min.js";
import "./assets/css/user/style.css";
import "./assets/css/user/external.css";
import "./assets/css/calculator.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(helpers);
app.use(VueCryptojs);
app.use(Toaster, { position: 'top-right', duration: 5000 });
app.config.unwrapInjectedRef = true;

var environment = import.meta.env.MODE;
if (environment !== 'development') {
    Sentry.init({
        app,
        dsn: "https://8382628070ff48c58e2a77cce957c93f@o4504347597799424.ingest.sentry.io/4504473756631040",
        integrations: [
          new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracePropagationTargets: [environment, "http://wlxvue.bizbybot.com/", /^\//],
          }),
        ],
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
      });
}

app.mount("#app");


