import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
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

app.mount("#app");
 

