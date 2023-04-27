import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage/MainPage.vue'
import Roadmap from '../pages/Roadmap/Roadmap.vue'
import PersonalInfo from '../pages/Personal-Info/Personal-Info.vue'
import PersonalInfoEdit from '../pages/Personal-Info-Edit/Personal-Info-Edit.vue'
import Employees from '../pages/Employees/Employees.vue'
import Faq from '../pages/Faq/Faq.vue'
import Welcome from '../pages/Welcome/Welcome.vue'
import SurveyPage from '../pages/SurveyPage/SurveyPage.vue'
import AuthPage from '../pages/AuthPage/AuthPage.vue'
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
      path: '/roadmap',
      component: Roadmap
    },
    {
      path: '/employees',
      component: Employees
    },
    {
      path: '/auth',
      component: AuthPage
    },
    {
      path: '/welcome',
      component: Welcome
    },
    {
      path: '/survey',
      component: SurveyPage
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
      path: '/faq',
      component: Faq
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
