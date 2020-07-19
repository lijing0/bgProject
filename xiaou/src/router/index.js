import Vue from 'vue'
import Router from 'vue-router'
// 一级路由组件
import Index from '@/components/pages/index'
import GoodsDetail from '@/components/pages/goodsDetail'
import Classify from '@/components/pages/classify'
// 二级路由组件
// import Home from '@/components/views/home'
// import Car from '@/components/views/car'
// import Mine from '@/components/views/mine'
// import CarDetail from '@/components/views/carDetail'
// import List from '@/components/views/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component:Index,
      children:[
          {
            path:"/home",
            component:()=>import('@/components/views/home')
          },
          {
            path:"/car",
            component:()=>import('@/components/views/car')
          },
          {
            path:"/mine",
            component:()=>import('@/components/views/mine')
          },
          {
            path:'/list',
            component:()=>import('@/components/views/list')
          },
          {
            path:'/carDetail',
            component:()=>import('@/components/views/carDetail')
          },
          {
            path:"",
            redirect:"/home"
          },
      ]
    },
    {
      path:'/goodsDetail',
      component:GoodsDetail
    },
    {
      path:'/classify',
      component:Classify
    },
    {//重定向
      path:'*',
      redirect:'/index'
    }
    ]
})
