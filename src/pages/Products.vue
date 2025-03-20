<script setup>
import { useProductStore } from "../stores/productStore";
import { useCartStore } from "../stores/cartStore";
import { onMounted } from "vue";

const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Products</h1>

    <div v-if="productStore.products.length === 0" class="text-gray-500">Loading products...</div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="product in productStore.products" :key="product.id" class="border p-4 rounded shadow">
        <img :src="product.image" :alt="product.title" class="h-32 w-full object-cover mb-2" />
        <h2 class="text-lg font-semibold">{{ product.title }}</h2>
        <p class="text-gray-600">${{ product.price }}</p>
        <button 
          @click="cartStore.addToCart(product)"
          class="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
