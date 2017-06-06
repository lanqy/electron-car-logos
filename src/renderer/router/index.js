import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/list'
import Detail from '../components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List,
      props: true
    },
    {
      path: '/car/:country',
      name: 'List',
      component: List,
      props: true
    },
    {
      path: '/car/:cate/:id',
      name: 'Detail',
      component: Detail,
      props: true
    }
  ],
  mode: 'history'
})
