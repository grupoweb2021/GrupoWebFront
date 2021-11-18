import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from "../../src/core/authStore/auth.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  }
});
