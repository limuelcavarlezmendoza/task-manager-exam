import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        this.products = await response.json();
      } catch (error) {
        console.error("Failed to load products: ", error);
      }
    },
  },
});
