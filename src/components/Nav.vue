<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../store/userPinia";
import { navItems } from "../router";

const router = useRouter();
const store = useUserStore();

const onClickLogout = () => {
  store.resetUserInfo();
  router.push("/auth");
};
</script>

<template>
  <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
    <v-tab
      v-for="nav in navItems.filter((nav) => {
        if (!!store.accessToken) return nav.level === 'login';
      })"
      :to="nav.path"
      >{{ nav.name }}</v-tab
    >
    <v-tab :value="3" v-if="!!store.accessToken" @click="onClickLogout">
      Log out
    </v-tab>
  </v-tabs>
</template>
