import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalInfo from '../pages/Personal-Info/Personal-Info.vue'
import PersonalInfoEdit from '../pages/Personal-Info-Edit/Personal-Info-Edit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/personal-info',
      component: PersonalInfo
    },
    {
      path: '/personal-info-edit',
      component: PersonalInfoEdit
    },
  ]
})

export default router
