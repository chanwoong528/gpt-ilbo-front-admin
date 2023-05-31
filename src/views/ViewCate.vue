<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/userPinia";
import { POSTCate } from "../apis/ApiCate";

const store = useUserStore();
const title = ref("");
const description = ref("");
const cateList = ref([]);
const createCategory = async () => {
  let params = { title: title, description: description };
  await POSTCate(params);
};
</script>

<template>
  <section>
    <header>
      <h2>Category Page</h2>
    </header>
    <v-form fast-fail @submit.prevent="createCategory" class="user-form">
      <v-text-field v-model="title" label="Title"></v-text-field>

      <v-textarea v-model="description" label="Description"></v-textarea>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
    <section class="category-list">
      <header>
        <h3>Category List</h3>
      </header>
      <ul>
        <li v-if="cateList.length > 0" v-for="item in cateList">
          <v-card
            :key="item.id"
            :title="`Title: ${item.title}`"
            :text="`Description: ${item.description}`"
            width="400"
          ></v-card>
        </li>
        <li v-else>
          <v-card width="400" title="Category does not exist"></v-card>
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
.category-list {
  margin-top: 30px;
}
</style>
