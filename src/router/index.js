import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Home from '../views/home'
import Welcome from '../views/welcome'
import NotFound from '../views/404'
import auth from '../utils/auth'
import Article from '../views/article'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Home,
    children: [
      { path: '/', component: Welcome },
      { path: '/article', component: Article }
    ]
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  routes
})

// 前置导航守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !auth.getUser().token) return next('/login')
  next()
})
export default router
