import { createRouter, createWebHistory } from 'vue-router'
import Auth from "../pages/Auth.vue"
import Home from "../pages/Home.vue"



const navItems = [
  { path: "/", name: "Home", component: Home },
  { path: "/auth", title: "Auth", component: Auth },
  // { href: "/", title: "Category" },
];

const router = createRouter({
  history: createWebHistory(),
  routes: navItems
})

export default router