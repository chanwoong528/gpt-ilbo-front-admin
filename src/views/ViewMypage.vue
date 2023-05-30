<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/userPinia";

const store = useUserStore();
const newPw = ref("");
const newPwConf = ref("");
const oldPw = ref("");

const onSubmitPwChange = async () => {
  if (newPw !== newPwConf) {
    return alert("asdafas");
  } else {
  }
};
</script>

<template>
  <h2>My Page- {{ store.name }}</h2>

  <v-form fast-fail @submit.prevent="onSubmitPwChange" class="user-form">
    <v-text-field v-model="oldPw" label="Old Password"></v-text-field>
    <v-text-field
      v-model="newPw"
      label="New Password"
      :rules="[(v) => v === newPwConf || 'Error: password not same']"
    ></v-text-field>
    <v-text-field
      v-model="newPwConf"
      label="New Password Confirm"
      :rules="[(v) => v === newPw || 'Error: password not same']"
    ></v-text-field>

    <v-btn type="submit" block class="mt-2">Submit</v-btn>
  </v-form>
</template>

<style scoped></style>
