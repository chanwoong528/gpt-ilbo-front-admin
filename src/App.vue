<script setup>
import { onMounted, ref } from "vue";
import { RouterView, useRouter } from "vue-router";
import { useUserStore } from "./store/userPinia";
import { GETLoginStatus } from "./apis/ApiAuth";

import Nav from "./components/Nav.vue";

const store = useUserStore();
const router = useRouter();
const accessTokenRef = ref(
  $cookies.get("accessToken") ? $cookies.get("accessToken") : ""
);

onMounted(async () => {
  let accessToken = accessTokenRef.value
    ? $cookies.get("accessToken")
    : store.accessToken;
  if (!!accessToken) {
    const tokenDataRes = await GETLoginStatus(accessToken);
    console.log(tokenDataRes.code);
    if (tokenDataRes.code !== 200) {
      accessTokenRef.value = "";
      store.resetUserInfo();
      router.push({ path: "/auth" });
    } else {
      store.login(tokenDataRes.data);
    }
  }
});
router.beforeEach((to, from) => {
  let accessToken = accessTokenRef.value
    ? accessTokenRef.value
    : store.accessToken;

  if (to.name !== "Auth" && !accessToken) {
    return { name: "Auth" };
  } else if (to.name === "Auth" && !!accessToken) {
    return { name: router.currentRoute.value.name };
  }
});
</script>

<template>
  <Nav v-if="store.accessToken" />
  <RouterView />
</template>
