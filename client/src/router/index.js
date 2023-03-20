import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalInfo from '../pages/Personal-Info/Personal-Info.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/personal-info',
      component: PersonalInfo
    },
  ]
})

export default router
