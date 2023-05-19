import { defineStore } from "pinia";

// The state is defined as a function returning the initial state
// The getters are functions that receive the state as a first argument
// The actions are functions that can be asynchronous

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLoggedIn: false,
      isAdmin: false,
      accToken: "",
      refToken: "",
      user: {},
    }
  },
  actions: {
    //can be async
    login(userInfo) {

    },


  },
  getters: {
    logout(state) {
      //reset userinfo
    }

  }
}


)
