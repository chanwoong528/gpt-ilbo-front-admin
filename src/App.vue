<script setup>
import { onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";
import { useUserStore } from "./store/userPinia";
import { GETLoginStatus } from "./apis/ApiAuth";

import Nav from "./components/Nav.vue";

const store = useUserStore();
const router = useRouter();
onMounted(async () => {
  console.log($cookies.get("accessToken"));
  let accessToken = $cookies.get("accessToken")
    ? $cookies.get("accessToken")
    : store.accessToken;
  if (!!accessToken) {
    const tokenDataRes = await GETLoginStatus(accessToken);
    if (tokenDataRes.code !== 200) {
      store.$reset();
      router.push({ path: "/auth" });
    } else {
      store.login(tokenDataRes.data);

      router.push({ path: router.currentRoute.value.path });
    }
  }
});
router.beforeEach((to, from) => {
  if (to.name !== "Auth" && !store.accessToken) {
    return { name: "Auth" };
  } else if (to.name === "Auth" && !!store.accessToken) {
    return { name: "Home" };
  }
});
</script>

<template>
  <Nav v-if="store.accessToken" />
  <RouterView />
</template>
