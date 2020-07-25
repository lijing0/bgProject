import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
const router = new Router({
=======
export default new Router({
>>>>>>> e690d598025a76903db44d1bd40be9cb7c928883
  //路由模式
  mode: 'history',
  routes: [{
      path: '/login',
      component: () => import('@/components/pages/login')
    },
    {
      path: '/index',
      component: () => import('@/components/pages/index'),
      children: [{
          path: '/menu',
          component: () => import('@/pages/menu/menu'),
          meta: { //自定义对象
            name: '菜单管理'
          }
        },
        {
          path: '/user',
          component: () => import('@/components/views/user'),
          meta: { //自定义对象
            name: '管理员管理'
          }
        },
        {
          path: '/goods',
          component: () => import('@/pages/goods/goods'),
<<<<<<< HEAD
          meta: {
            name: '商品管理'
=======
          meta:{
              name:'商品管理'
>>>>>>> e690d598025a76903db44d1bd40be9cb7c928883
          }
        }, {
          path: '/home',
          component: () => import('@/components/views/home')
        },
        {
          path: '/role',
          component: () => import('@/components/views/role'),
          meta: {
            name: '角色管理'
          }
        },
        {
<<<<<<< HEAD
          path: '/sort',
          component: () => import('@/components/views/sort'),
          meta: {
            name: '商品分类'
          }
        },
        {
          path: '/specs',
          component: () => import('@/components/views/specs'),
          meta: {
            name: '商品规格'
          }
        },
        {
          path: '/member',
          component: () => import('@/pages/member/member'),
          meta: {
            name: '会员管理'
          }
        },
        {
          path: '/banner',
          component: () => import('@/pages/banner/banner'),
          meta: {
            name: '轮播图管理'
          }
        },
        {
          path: '/seck',
          component: () => import('@/pages/seck/seck'),
          meta: {
            name: '限时秒杀管理'
          }
        },
        {
          path: '',
          redirect: '/home'
        }
=======
            path: '/sort',
            component: () => import('@/components/views/sort'),
            meta: {
              name: '商品分类'
            }
          },
          {
            path: '/specs',
            component: () => import('@/components/views/specs'),
            meta: {
              name: '商品规格'
            }
          },
          {
            path: '/member',
            component: () => import('@/pages/member/member'),
            meta:{
                name:'会员管理'
            }
          },
          {
            path: '/banner',
            component: () => import('@/pages/banner/banner'),
            meta:{
                name:'轮播图管理'
            }
          },
          {
            path: '/seck',
            component: () => import('@/pages/seck/seck'),
            meta:{
                name:'限时秒杀管理'
            }
          },
>>>>>>> e690d598025a76903db44d1bd40be9cb7c928883
      ]
    },
    {
      path: '*',
<<<<<<< HEAD
      redirect: '/index'
    }
  ]
})

//路由导航守卫之钩子函数
router.beforeEach((to, from, next) => {
  //如果跳转的页面是登录页 ，就继续
  if (to.path == '/login') {
    next()
    return
  }
  //如果缓存没数据，就重新登录
  if(!sessionStorage.getItem('userInfo')){
      next('/login')
  }
  //如果你的缓存有值 你就可以继续
  next()

})

export default router
=======
      redirect: '/login'
    }
  ]
})
>>>>>>> e690d598025a76903db44d1bd40be9cb7c928883
