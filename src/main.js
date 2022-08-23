import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Preparing Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faBookOpen,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faBook,
  faBookOpen,
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
  faComments
);

import "animate.css";

const app = createApp(App);

app.use(createPinia());
app.component("awesomeIcon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
