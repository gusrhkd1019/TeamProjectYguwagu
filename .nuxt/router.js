import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _47aba6f1 = () => interopDefault(import('..\\pages\\community.vue' /* webpackChunkName: "pages_community" */))
const _481cc238 = () => interopDefault(import('..\\pages\\map.vue' /* webpackChunkName: "pages_map" */))
const _254c360a = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages_news" */))
const _44e4390b = () => interopDefault(import('..\\pages\\season.vue' /* webpackChunkName: "pages_season" */))
const _1afe736c = () => interopDefault(import('..\\pages\\signin.vue' /* webpackChunkName: "pages_signin" */))
const _23611308 = () => interopDefault(import('..\\pages\\user\\profile\\index.vue' /* webpackChunkName: "pages_user_profile_index" */))
const _7cf15d4b = () => interopDefault(import('..\\pages\\user\\profile\\_uid\\index.vue' /* webpackChunkName: "pages_user_profile__uid_index" */))
const _7e6efb5a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _81b39e02 = () => interopDefault(import('..\\pages\\_field\\index.vue' /* webpackChunkName: "pages__field_index" */))
const _53911946 = () => interopDefault(import('..\\pages\\_field\\_store\\index.vue' /* webpackChunkName: "pages__field__store_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/community",
    component: _47aba6f1,
    name: "community"
  }, {
    path: "/map",
    component: _481cc238,
    name: "map"
  }, {
    path: "/news",
    component: _254c360a,
    name: "news"
  }, {
    path: "/season",
    component: _44e4390b,
    name: "season"
  }, {
    path: "/signin",
    component: _1afe736c,
    name: "signin"
  }, {
    path: "/user/profile",
    component: _23611308,
    name: "user-profile"
  }, {
    path: "/user/profile/:uid",
    component: _7cf15d4b,
    name: "user-profile-uid"
  }, {
    path: "/",
    component: _7e6efb5a,
    name: "index"
  }, {
    path: "/:field",
    component: _81b39e02,
    name: "field"
  }, {
    path: "/:field/:store",
    component: _53911946,
    name: "field-store"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
