<script setup>
import { useUserStore } from "./store/userPinia";

import { RouterView, useRouter } from "vue-router";
const store = useUserStore();
const router = useRouter();

router.beforeEach((to, from) => {
  console.log(store.accessToken);

  if (to.name !== "Auth" && !store.accessToken) {
    return { name: "Auth" };
  }
});
</script>

<template>
  <RouterView />
</template>
