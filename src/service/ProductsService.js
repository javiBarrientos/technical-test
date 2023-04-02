import { CategoriesUrl, ProductsUrl } from "@/vars/GlobalVars";

export const ProductService = {
  async getProducts() {
    const response = await fetch(ProductsUrl)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => {
        throw new Error(`API PRODUCTS ${err}`);
      });
    return response;
  },

  async getCategories() {
    const response = await fetch(CategoriesUrl)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => {
        throw new Error(`API CATEGORIES ${err}`);
      });
    return response;
  },
};
