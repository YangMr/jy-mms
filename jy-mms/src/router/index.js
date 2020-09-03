import Vue from "vue";
import VueRouter from "vue-router";
// 默认导入目录下的 index.vue 文件，等价于 ./views/login/index.vue
import Login from "../views/login"
import Layout from "../components/Layout"
Vue.use(VueRouter);

const routes = [
  {
    path : "/login",
    name : "login",
    component : Login
  },
  {
    path : "/",
    component : Layout
  }
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
