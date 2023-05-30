import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/ViewHome.vue";
import Auth from "../views/ViewAuth.vue";
import Admin from "../views/ViewAdmin.vue";
import MyPage from "../views/ViewMypage.vue";
import News from "../views/ViewNews.vue";


export const navItems = [
  { path: "/", name: "Home", component: Home, level: "login" },
  { path: "/admin", name: "Admin", component: Admin, level: "login" },
  { path: "/auth", name: "Auth", component: Auth, level: "none" },
  { path: "/mypage", name: "MyPage", component: MyPage, level: "login" },
  { path: "/news", name: "News", component: News, level: "login" },
];
export const router = createRouter({
  history: createWebHistory(),
  routes: navItems
})

export default router





