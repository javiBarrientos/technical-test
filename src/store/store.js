import Vue from "vue";
import Vuex from "vuex";
import { ProductService } from "@/service/ProductsService";
import { filterByCategory } from "@/function/filters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    category: "",
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
    getCategory({ commit }, data) {
      commit("SAVE_CATEGORY", data);
    },
  },

  mutations: {
    SAVE_PRODUCTS(state, products) {
      state.products = products;
    },
    SAVE_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SAVE_CATEGORY(state, category) {
      state.category = category;
    },
  },

  getters: {
    products(state) {
      return filterByCategory(state.products, state.category);
    },
    categories(state) {
      return state.categories;
    },
    category(state) {
      return state.category;
    },
  },
});
