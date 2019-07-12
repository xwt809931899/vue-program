import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/pages/Shouye'
import Sort from '@/pages/Sort'
import Boxlife from '@/pages/Boxlife'
import Shopcar from '@/pages/Shopcar'
import Mine from '@/pages/Mine'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shouye',
      component: Shouye
    },
    {
      path: '/Sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/Boxlife',
      name: 'Boxlife',
      component: Boxlife
    },
    {
      path: '/Shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
