import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

// import vue material components to use and their css file.
import { MdButton, MdDrawer } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueResource);

Vue.use(MdButton);
Vue.use(MdDrawer);

// Define the default http root (to our firebase db)
Vue.http.options.root = "https://domnoo-784f2.firebaseio.com/";

new Vue({
  el: "#app",
  render: h => h(App)
});
