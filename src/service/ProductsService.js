import { CategoriesUrl, ProductsUrl } from "@/vars/GlobalVars";
import axios from "axios";

export const ProductService = {
  async getProducts() {
    return axios.get(ProductsUrl).then((products) => products);
  },

  async getCategories() {
    return axios.get(CategoriesUrl).then((categories) => categories);
  },
};
