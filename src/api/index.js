// 对axios进行封装
import axios from 'axios'
import auth from '../utils/auth'
// 导入路由实例
import router from '../router'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// axios.defaults.headers.Authorization = `Bearer ${auth.getUser().token}`
// 配置请求拦截器
axios.interceptors.request.use(config => {
// 每次请求前追加token
  const user = auth.getUser()
  if (user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 配置响应拦截器
axios.interceptors.response.use(res => {
  return res
}, error => {
// 嵌套拦截业务
// token失效后天会报错，需要判断响应状态码是否是401，error.response.status为响应状态码
  if (error.response && error.response.status === 401) {
    // 拦截到登录页面
    router.push('/login')
  }
  return Promise.reject(error)
})
export default axios
