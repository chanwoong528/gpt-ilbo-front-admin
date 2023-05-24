import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({ id: null, accessToken: "", refreshToken: "", name: "", email: "", role: "" }),
  getters: {
    userInfo: (state) => {
      return state
    }

  },
  actions: {
    login(loginUserInfo) {
      this.id = loginUserInfo.id;
      this.accessToken = loginUserInfo.accessToken
      this.refreshToken = loginUserInfo.refreshToken
      this.name = loginUserInfo.name
      this.email = loginUserInfo.email
      this.role = loginUserInfo.role
    }
  },
})
