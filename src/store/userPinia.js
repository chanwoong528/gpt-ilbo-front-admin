import { defineStore } from "pinia";

const defaultState = { id: "", accessToken: "", refreshToken: "", name: "", email: "", role: "" }


export const useUserStore = defineStore('user', {
  state: () => ({ ...defaultState }),
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
    },
    resetUserInfo() {
      Object.assign(this, defaultState);
      $cookies.remove("accessToken");
      $cookies.remove("refreshToken");
    }

  },
})
