import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import logo from '../views/logo.vue'
import About from '../views/About.vue'
import Rules from '../views/Rules.vue'
import Contact from '../views/Contact.vue'
import Games from '../views/Games.vue'
const routes = [
  {
    path: '/',
    name: 'logo',
    component: logo
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Rules',
    name: 'Rules',
    component: Rules
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Info',
    name: 'Games',
    component: Games
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
