import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'


import router from "./router"

import App from './App.vue'




const pinia = createPinia();

loadFonts()

createApp(App)
  .use(pinia)
  .use(router)
  .use(VueCookies, { expires: "1d" })
  .use(vuetify)
  .mount('#app')

