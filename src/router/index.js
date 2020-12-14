import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    children: [{
        path: '/',
        component: () => import('../views/index/index.vue'),
        children: [{
            path: '/',
            component: () => import('../views/index/admin.vue')
          },
          {
            path: 'photo',
            component: () => import('../views/index/photo.vue')
          },
          {
            path: 'shoplist',
            component: () => import('../views/index/shoplist.vue')
          }
        ]
      }, {
        path: '/Shop',
        component: () => import('../views/Shop/index.vue'),
        children: [{
            path: '/',
            component: () => import('../views/Shop/list.vue')
          },
          {
            path: 'detail',
            component: () => import('../views/Shop/detail.vue')
          },
          {
            path: 'type',
            component: () => import('../views/Shop/type.vue')
          },
          {
            path: 'price',
            component: () => import('../views/Shop/price.vue')
          },
        ]
      },
      {
        path: '/Buy',
        component: () => import('../views/Buy/index.vue'),
        children:[
          {
            path:"/",
            component:()=>import ('../views/Buy/buy.vue')
          },

        ]
      },
      {
        path: '/Until',
        component: () => import('../views/Until/index.vue'),
        children:[
          {
            path:"/",
            component:()=>import ('../views/Until/until.vue')
          },

        ]
      },
      {
        path: '/Good',
        component: () => import('../views/Good/index.vue'),
        children:[
          {
            path:"/",
            component:()=>import ('../views/Good/good.vue')
          },

        ]
      }
    ]
  }

]

const router = new VueRouter({
  routes
})







//全局路由守卫
router.beforeEach((to, form, next) => {
  if (to.path == '/') {
    next()
  } else {
    if (localStorage.getItem('token')) {
      //拿到登录的时间
      var time=localStorage.getItem('time')
      //现在时间
      var now=(new Date().getTime())/1000
      // console.log(now);

      if(now-time>=5){ //超时到20秒时清楚存储并返回页面
        next('/')
        localStorage.clear()
      }else{
        next()
      }
      
    } else {
      next('/')
    }
  }
})

export default router