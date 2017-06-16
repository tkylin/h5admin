// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import FastClick from "fastclick";
import VueRouter from "vue-router";
import App from "./App";
import Login from "./components/Login";
import Home from "./components/Home";
import Hello from "./components/Hello";
import Password from "./components/Password";
import Agency from "./components/Agency";
import Authorize from "./components/Authorize";
import Player from "./components/Player";
import Record from "./components/Record";

const routes = [
  {path: '/', component: Login},
  {path: '/home', component: Home},
  {path: '/hello', component: Hello},
  {path: '/password', component: Password},
  {path: '/agency', component: Agency},
  {path: '/authorize', component: Authorize},
  {path: '/player', component: Player},
  {path: '/record', component: Record}
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
