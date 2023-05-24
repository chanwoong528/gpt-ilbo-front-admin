<script setup>
import { RouterView, useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <ul>
    <li>
      <router-link to="/">Go to Home</router-link>
    </li>
    <li>
      <router-link to="/auth">Go to Auth</router-link>
    </li>
    <li>
      <router-link to="/admin">Go to Admin</router-link>
    </li>
  </ul>
</template>
