import { createApp } from "vue";
import "./assets/styles/index.css";
import "./assets/styles/tailwind.css";
import App from "./App.vue";

import router from "./router";

import registerGlobalComponents from "./plugins/global-components";

const app = createApp(App);

app.use(router);

const icons = import.meta.glob("./components/icons/**/*.vue", { eager: true });

registerGlobalComponents(app);

app.mount("#app");
