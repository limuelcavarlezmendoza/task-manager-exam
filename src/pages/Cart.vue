<script setup>
import { useCartStore } from "../stores/cartStore";  // ✅ Updated path

const cartStore = useCartStore();

const removeItem = (id) => {
    cartStore.removeFromCart(id)
}
</script>

<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
  
      <div v-if="cartStore.cart.length === 0" class="text-gray-500">
        Your cart is empty.
      </div>
  
      <div v-else class="space-y-4">
        <div v-for="item in cartStore.cart" :key="item.id" class="border p-4 rounded shadow flex items-center">
          <img :src="item.image" :alt="item.title" class="h-20 w-20 object-cover mr-4" />
          <div class="flex-1">
            <h2 class="text-lg font-semibold">{{ item.title }}</h2>
            <p class="text-gray-600">${{ item.price }} x {{ item.quantity }}</p>
          </div>
          <button
            @click="removeItem(item.id)"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
  
      <div class="mt-6 text-right">
        <h2 class="text-xl font-bold">Total: ${{ cartStore.totalPrice }}</h2>
      </div>
    </div>
  </template>