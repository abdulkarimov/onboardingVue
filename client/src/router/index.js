import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage/MainPage.vue'
import PersonalInfo from '../pages/Personal-Info/Personal-Info.vue'
import PersonalInfoEdit from '../pages/Personal-Info-Edit/Personal-Info-Edit.vue'
import Employees from '../pages/Employees/Employees.vue'
import Projects from '../pages/Projects/Projects.vue'
import Project from '../pages/Projects/Project/Project.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: MainPage
    },  
    {
      path: '/employees',
      component: Employees
    },
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
