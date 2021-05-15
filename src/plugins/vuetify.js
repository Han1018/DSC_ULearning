import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#ef5350",
        secondary: "#ffb300",
        tertiary: "#ef9a9a",
        quaternary: "#263238",
        quinary: "#ffffff",
      },
    },
  },
});
