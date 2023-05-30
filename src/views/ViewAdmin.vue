<script setup>
import { ref, reactive, onMounted } from "vue";
import { POSTUser, GETUsers, PATCHUserActive } from "../apis/ApiUser";

const name = ref("");
const email = ref("");
const dataSource = ref([]);
onMounted(async () => {
  await getUserList();
});
const createUser = async () => {
  let userData = { name: name.value, email: email.value, role: "admin" };
  const res = await POSTUser(userData);
  if (res.code === 201) {
    getUserList();
  }
  email.value = "";
  name.value = "";
};
const toggleAdminRole = async (item) => {
  let confirm = window.confirm("sure to give auth?");
  console.log(item);

  if (!!confirm) {
    let params = { userId: item.id, active: !item.active };
    const res = await PATCHUserActive(params);
    if (res.code === 204) {
      getUserList();
    }
  }
};
const getUserList = async () => {
  let userListData = await GETUsers();
  dataSource.value = userListData.data;
};
</script>

<template>
  <section>
    <header>
      <h2>Register Admin Page</h2>
    </header>
    <v-form fast-fail @submit.prevent="createUser" class="user-form">
      <v-text-field
        v-model="email"
        label="Email"
        :rules="nameRules"
      ></v-text-field>

      <v-text-field
        v-model="name"
        label="Name"
        :rules="emailRules"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
    <div class="user-table">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataSource" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>
              <v-switch
                label="Suspend"
                inset
                color="indigo"
                readonly
                v-model="item.active"
                @click="toggleAdminRole(item)"
              ></v-switch>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </section>
</template>

<style scoped>
main {
  padding: 30px;
}
/* .user-form {
} */
.user-table {
  margin-top: 40px;
}
</style>
