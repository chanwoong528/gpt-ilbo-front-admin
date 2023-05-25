<script setup>
import { useUserStore } from "../store/userPinia";
const store = useUserStore();
</script>

<template>
  <main>
    Home Page
    <h3>{{ store.userInfo.email }}</h3>
  </main>
</template>

<style scoped></style>
