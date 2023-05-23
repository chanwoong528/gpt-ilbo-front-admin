<script>
import { ref, reactive } from "vue";
import { POSTUser, GETUsers, PATCHUserActive } from "../apis/ApiUser";

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

      this.dataSource = userListData.data;
      console.log(userListData.data);
    },
    async toggleAdminRole(data) {
      let confirm = window.confirm("sure to give auth?");
      if (!!confirm) {
        let params = { userId: data.id, active: !data.active };
        const res = await PATCHUserActive(params);
        if (res.code === 204) {
          this.getUserList();
        }
      }
    },
  },
  mounted() {
    this.getUserList();
  },
};
</script>

<template>
  <main>
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
  </main>
</template>

<style scoped>
main {
  padding: 30px;
}
.user-form {
}
.user-table {
  margin-top: 40px;
}
</style>
