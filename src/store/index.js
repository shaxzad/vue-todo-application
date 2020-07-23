import Vuex from "vuex";
import Vue from "vue";
import Todos from "./modules/todos";

Vue.use(Vuex);

// create Store
export default new Vuex.Store({
  modules: {
    Todos,
  },
});
