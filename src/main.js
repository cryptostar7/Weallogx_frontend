import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import helpers from './helpers'
import Toaster from "@meforma/vue-toaster";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import './assets/css/user/style.css';
import "./assets/css/custom.css";
import './assets/css/retirement-buffer/style.css';
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
app.use(Toaster, { position: 'top-right', duration: 5000 });
app.config.unwrapInjectedRef = true;

var environment = import.meta.env.MODE;
var appUrl = "__VITE_APP_URL__" === "__VITE_APP_URL__" ? import.meta.env.VITE_APP_URL : "__VITE_APP_URL__";
var sentryDSN = import.meta.env.VITE_SENTRY_DSN_KEY;

// Initialize Sentry for error tracking and performance monitoring

if (sentryDSN) {
    try {
        Sentry.init({
            app,
            dsn: sentryDSN,
            environment: environment,
            debug: environment === 'development', // Enable debug mode in development
            integrations: [
              new BrowserTracing({
                routingInstrumentation: Sentry.vueRouterInstrumentation(router),
                tracePropagationTargets: [environment, appUrl, /^\//],
              }),
            ],
            // Set tracesSampleRate to 1.0 to capture 100%
            // of transactions for performance monitoring.
            // We recommend adjusting this value in production
            tracesSampleRate: environment === 'development' ? 1.0 : 0.1,
            // Ensure events are sent in development
            beforeSendTransaction(transaction) {
                return transaction;
            },
            // Add user context and additional data
            beforeSend(event) {
              // Add environment info to all events
              event.tags = {
                ...event.tags,
                environment: environment,
                build_env: import.meta.env.BUILD_ENV || 'unknown'
              };
              return event;
            }
        });
        
        
    } catch (error) {
    }
} else {
}

app.mount("#app");


