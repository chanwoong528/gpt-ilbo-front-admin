<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/userPinia";
import { POSTLogin } from "../apis/ApiAuth";
let email = ref("");
let pw = ref("");

const store = useUserStore();
const router = useRouter();
const onSubmitLogin = async () => {
  let userData = { email: email.value, pw: pw.value };
  const resLogin = await POSTLogin(userData);
  if (resLogin.code === 200) {
    store.login(resLogin.data);
    router.push({ path: "/" });
  }
};
</script>

<template>
  <main>
    <section>
      <h3>{{ store.userInfo.id }}</h3>
      <h3>{{ store.userInfo.email }}</h3>
      <h3>{{ store.userInfo.name }}</h3>

      <v-card class="px-6 py-8 mx-auto" max-width="344">
        <h2>Login</h2>
        <v-form v-model="form" @submit.prevent="onSubmitLogin">
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Email"
          ></v-text-field>

          <v-text-field
            v-model="pw"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Password"
            placeholder="Enter your password"
            type="password"
          ></v-text-field>

          <br />

          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
          >
            Sign In
          </v-btn>
        </v-form>
      </v-card>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
}
main > section {
  width: 100%;
}
</style>
