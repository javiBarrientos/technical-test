import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { ProductService } from "@/service/ProductsService";

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
  },

  actions: {
    getProducts({ commit }) {
      ProductService.getProducts().then((data) =>
        commit("SAVE_PRODUCTS", data)
      );
    },
    getCategories({ commit }) {
      ProductService.getCategories().then((data) =>
        commit("SAVE_CATEGORIES", data)
      );
    },
  },

  mutations: {
    SAVE_PRODUCTS(state, products) {
      state.products = products;
    },
    SAVE_CATEGORIES(state, category) {
      state.categories = category;
    },
  },

  getters: {
    products(state) {
      return state.products;
    },
    categories(state) {
      return state.categories;
    },
  },
});
