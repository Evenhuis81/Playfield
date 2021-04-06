import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import main from './main'
import auth from './auth'
import Categories from '../pages/admin/Categories.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  ...main,
  ...auth,
  { path: '/:pathMatch(.*)*', name: 'not-found', component: { template: `<div>PageNotFound</div>`} },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
