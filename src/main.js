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
console.log('🔍 Checking Sentry configuration...');
console.log('Environment:', environment);
console.log('Sentry DSN found:', !!sentryDSN);
console.log('Sentry DSN (first 50 chars):', sentryDSN ? sentryDSN.substring(0, 50) + '...' : 'NOT SET');
console.log('🔍 FULL DSN:', sentryDSN);
console.log('🔍 Project ID from DSN:', sentryDSN ? sentryDSN.split('/').pop() : 'N/A');

if (sentryDSN) {
    console.log('🔍 Initializing Sentry with DSN:', sentryDSN.substring(0, 50) + '...');
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
                console.log('📊 Sentry sending transaction:', transaction.name);
                return transaction;
            },
            // Add user context and additional data
            beforeSend(event) {
              console.log('📤 Sentry sending event:', event.type || 'unknown', event.message || event.exception?.values?.[0]?.value);
              // Add environment info to all events
              event.tags = {
                ...event.tags,
                environment: environment,
                build_env: import.meta.env.BUILD_ENV || 'unknown'
              };
              return event;
            }
        });
        
        console.log('✅ Sentry initialized successfully');
        
        // Send a test event to verify connection
        setTimeout(() => {
            console.log('🧪 Sending initial Sentry test message...');
            const client = Sentry.getCurrentHub().getClient();
            if (client) {
                console.log('🔍 Sentry client DSN:', client.getDsn()?.toString());
                console.log('🔍 Sentry client options:', client.getOptions());
            }
            
            Sentry.captureMessage('✅ WealthLogix Frontend Initialized - Sentry Connection Test', 'info');
            
            // Also send a test exception to verify error tracking
            setTimeout(() => {
                console.log('🧪 Sending test exception...');
                Sentry.captureException(new Error('✅ Test Exception - Frontend Init Verification'));
            }, 1000);
        }, 2000);
        
    } catch (error) {
        console.error('❌ Failed to initialize Sentry:', error);
    }
} else {
    console.warn('⚠️ Sentry DSN not found in environment variables');
    console.warn('Available env vars:', Object.keys(import.meta.env).filter(key => key.includes('SENTRY')));
}

app.mount("#app");


