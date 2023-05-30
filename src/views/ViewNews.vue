<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/userPinia";
import { POSTPrompt } from "../apis/ApiNews";

const store = useUserStore();
const prompt = ref("");

const onSubmitPrompt = async () => {
  let resPostPromot = await POSTPrompt(prompt.value);
};
</script>

<template>
  <v-form fast-fail @submit.prevent="onSubmitPrompt" class="user-form">
    <v-textarea label="Prompt" v-model="prompt"></v-textarea>

    <v-btn type="submit" block class="mt-2">Submit</v-btn>
  </v-form>
</template>

<style scoped></style>
