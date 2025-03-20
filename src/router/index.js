import { createRouter, createWebHistory } from "vue-router"; 
import Home from "../pages/Home.vue";
import Products from "../pages/Products.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import Cart from "../pages/Cart.vue";
import Checkout from "../pages/Checkout.vue";

const routes = [ 
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/products/:id", component: ProductDetails, props: true },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   const isAuthenticated = authStore.isAuthenticated;

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next("/login");
//   } else if (to.meta.guestOnly && isAuthenticated) {
//     next("/");
//   } else {
//     next();
//   }
// });

export default router;
