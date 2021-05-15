import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import config from "./firebaseConfig.js";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
firebase.initializeApp(config);
firebase.analytics();
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
  created() {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        store.dispatch("autoSignIn", firebaseUser);
      }
    });
  },
}).$mount("#app");
