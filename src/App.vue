<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <main class="container mx-auto p-4">
    <router-view />
  </main>
  <Footer />
</template>