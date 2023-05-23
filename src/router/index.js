import { createRouter, createWebHistory } from "vue-router"


import Home from "../views/ViewHome.vue"
import Auth from "../views/ViewAuth.vue"
import Admin from "../views/ViewAdmin.vue"


const navItems = [
  { path: "/", name: "Home", component: Home },
  { path: "/auth", title: "Auth", component: Auth },
  { path: "/admin", title: "Admin", component: Admin },
  // { href: "/", title: "Category" },
];
const router = createRouter({
  history: createWebHistory(),
  routes: navItems
})

export default router