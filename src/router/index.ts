import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
]

const router = createRouter({
  // URLにハッシュ(#)を付与するか
  history: createWebHashHistory(),
  //history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
