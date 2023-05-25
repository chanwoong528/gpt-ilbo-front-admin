import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/ViewHome.vue"
import Auth from "../views/ViewAuth.vue"
import Admin from "../views/ViewAdmin.vue"

const navItems = [
  { path: "/", name: "Home", component: Home, level: "login" },
  { path: "/admin", name: "Admin", component: Admin, level: "login" },
  { path: "/auth", name: "Auth", component: Auth, level: "none" },
  // { href: "/", title: "Category" },
];
export const router = createRouter({
  history: createWebHistory(),
  routes: navItems
})

export default router





