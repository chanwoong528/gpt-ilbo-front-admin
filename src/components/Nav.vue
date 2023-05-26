<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../store/userPinia";

const router = useRouter();
const store = useUserStore();

const onClickLogout = () => {
  router.push("/auth");
  store.resetUserInfo();
};
</script>

<template>
  <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
    <v-tab to="/" :value="1">Go to Home</v-tab>
    <v-tab to="/admin" :value="2">Go to Admin</v-tab>
    <v-tab to="/auth" :value="3" v-if="!store.accessToken"> Go to Auth </v-tab>
    <v-tab :value="3" v-if="!!store.accessToken" @click="onClickLogout">
      Log out
    </v-tab>
  </v-tabs>
</template>
