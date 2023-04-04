import Vue from 'vue'
import VueRouter from 'vue-router'

import PersonalInfo from '../pages/Personal-Info/Personal-Info.vue'
import PersonalInfoEdit from '../pages/Personal-Info-Edit/Personal-Info-Edit.vue'
import Projects from '../pages/Projects/Projects.vue'
import Project from '../pages/Projects/Project/Project.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/projects/:id',
      component: Project
    },
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
