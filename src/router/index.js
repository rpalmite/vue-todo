import Vue from 'vue'
import Router from 'vue-router'
import VueTodoApp from '@/components/VueTodoApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueTodoApp',
      component: VueTodoApp
    }
  ]
})
