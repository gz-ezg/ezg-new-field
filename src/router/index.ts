import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/index.vue";
import newField from"./module/newField"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  ...newField
  // {
  //   path: "/newField",
  //   name: "newField",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/newField/index.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
