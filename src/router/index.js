import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloSwiper2 from '@/components/HelloSwiper2'
import Lazyload from '@/components/Lazyload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lazyload',
      component: Lazyload
    }
  ]
})
