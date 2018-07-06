 /* eslint-disable */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import Router from 'vue-router'
// Components
import skills from '@/components/skills'
import questions from '@/components/questions'
import about from '@/components/about'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/skills',
      name: 'skills',
      component: skills
    },
    {
      path: '/',
      name: 'questions',
      component: questions
    },
    {
      path: '/about-me',
      name: 'about',
      component: about
    }
  ]
})

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);


