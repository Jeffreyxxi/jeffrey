import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/pcLogin'
import pcMainPage from '@/components/pcMainPage'
import pcResume from '@/components/pcResume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/pcMainPage',
      name: 'pcMainPage',
      component: pcMainPage,
      children: [
        {path: '/', alias: '/resume', component: pcResume}
      ]
    }
  ]
})
