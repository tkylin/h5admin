// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import FastClick from "fastclick";
import VueRouter from "vue-router";
import App from "./App";
import Login from "./components/Login";
import Home from "./components/Home";
import Hello from "./components/Hello";

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Login},
  {path: '/home', component: Home},
  {path: '/hello', component: Hello}
]

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
