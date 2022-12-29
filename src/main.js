import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import helpers from './helpers'
import Toaster from "@meforma/vue-toaster";
import VueCryptojs from 'vue-cryptojs'

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


// import "./assets/css/user/style.css";
// import "./assets/css/user/external.css";


const app = createApp(App);

app.use(router);
app.use(store);
app.use(helpers);
app.use(VueCryptojs);
app.use(Toaster, {position:'top-right', duration:5000});

app.config.errorHandler = err => {
    console.log('Exception: ', err)
}

app.mount("#app");


