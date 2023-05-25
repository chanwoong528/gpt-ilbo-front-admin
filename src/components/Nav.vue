<script setup>
import { RouterView, useRouter } from "vue-router";
import { useUserStore } from "../store/userPinia";

const router = useRouter();
const store = useUserStore();

const onClickLogout = () => {
  router.push("/auth");
  store.$reset();
};
</script>

<template>
  <ul>
    <li>
      <router-link to="/">Go to Home</router-link>
    </li>

    <li>
      <router-link to="/admin">Go to Admin</router-link>
    </li>
    <li v-if="!store.accessToken">
      <router-link to="/auth">Go to Auth</router-link>
    </li>
    <li v-if="!!store.accessToken">
      <button @click="onClickLogout">Log out</button>
    </li>
  </ul>
</template>
