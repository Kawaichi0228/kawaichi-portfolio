import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./styles/index.scss" // tailwind
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)
app.use(VueSmoothScroll)
app.use(store)
app.use(router)
app.mount("#app")
//createApp(App).use(store).use(router).mount("#app")
