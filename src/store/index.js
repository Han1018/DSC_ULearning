import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { signin } from "@/apis/auth/signin.js";
import { signout } from "@/apis/auth/signout.js";

export default new Vuex.Store({
  state: {
    login: false,
    user: null,
  },
  mutations: {
    async setUser(state, payload) {
      let auth = [];
      auth.push(payload);
      state.user = auth;
      if (payload == null) return;
    },
  },
  actions: {
    userSignIn() {
      signin();
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", payload);
    },
    userSignOut({ commit }) {
      signout();
      commit("setUser", null);
    },
  },
  modules: {},
});
