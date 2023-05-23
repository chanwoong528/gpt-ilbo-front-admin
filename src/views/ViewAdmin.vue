<script>
import { POSTUser, GETUsers } from "../apis/ApiUser";

export default {
  data() {
    return {
      name: "",
      nameRules: [
        // (value) => {
        //   if (value?.length > 3) return true;
        //   return "First name must be at least 3 characters.";
        // },
      ],
      email: "",
      emailRules: [
        // (value) => {
        //   if (/[^0-9]/.test(value)) return true;
        //   return "Last name can not contain digits.";
        // },
      ],
      itemsPerPage: 5,
      headers: [
        { title: "Name", align: "end", key: "name" },
        { title: "Email", align: "end", key: "email" },
      ],
      dataSource: [],
    };
  },
  methods: {
    async createUser() {
      // fetch call
      let userData = { name: this.name, email: this.email, role: "admin" };
      const res = await POSTUser(userData);
      if (res.code === 201) {
        this.getUserList();
      }
      this.email = "";
      this.name = "";
    },
    async getUserList() {
      let userListData = await GETUsers();
      console.log("!!!!   ", userListData.data);
      this.dataSource = userListData.data;
    },
  },
  mounted() {
    this.getUserList();
  },
};
</script>

<template>
  <main>
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataSource" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </main>
</template>

<style scoped>
.user-form {
}
.user-table {
  margin-top: 30px;
  border: 10px solid;
}
</style>
