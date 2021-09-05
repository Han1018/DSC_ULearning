import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import { signin } from "@/apis/auth/signin.js";
import { signout } from "@/apis/auth/signout.js";

export default new Vuex.Store({
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  state: {
    login: false,
    user: null,
    selectSubject: null,
    selectMajor: null,
    selectCourse: null,
    selectVidoe: null,
  },
  mutations: {
    async setUser(state, payload) {
      let auth = [];
      auth.push(payload);
      state.user = auth;
      if (payload == null) return;
    },
    setSubject(state, payload) {
      state.selectSubject = payload;
    },
    setMajor(state, payload) {
      state.selectMajor = payload;
    },
    setCourse(state, payload) {
      state.selectCourse = payload;
    },
    setVideo(state, payload) {
      state.selectVidoe = payload;
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
