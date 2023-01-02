import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import helpers from './helpers'
import Toaster from "@meforma/vue-toaster";
import VueCryptojs from 'vue-cryptojs'
import { Notifier } from '@airbrake/browser'

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import './assets/css/user/style.css';
import "./assets/css/custom.css";
import "./assets/css/dark-green.css";
import "./assets/css/light-blue.css";
import "./assets/css/dark-blue.css";
import "./assets/css/responsive.css";
import "./assets/js/popper.min.js";
import "./assets/js/bootstrap.min.js";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(helpers);
app.use(VueCryptojs);
app.use(Toaster, { position: 'top-right', duration: 5000 });

var environment = import.meta.env.MODE;
if (environment !== 'development') {

    var airbrake = new Notifier({
        environment: environment,
        projectId: 473230,
        projectKey: '8f10291cf0f98b06a27bc65dc46d8f56'
    });

    // send error message to airbrake dashboard
    app.config.errorHandler = function (err, _vm, info) {
        var message = {
            error: err,
            params: { info: info }
        };
        airbrake.notify(message)
        console.log(message);
    }
}

app.mount("#app");


