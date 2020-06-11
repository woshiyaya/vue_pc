// 存储用户信息
var key = 'hhh'
const setUser = (user) => {
  window.sessionStorage.setItem(key, JSON.stringify(user))
}
// 获取用户信息
const getUser = () => {
  return JSON.parse(window.sessionStorage.getItem(key) || '{}')
}
// 删除用户信息
const delUser = () => {
  window.sessionStorage.removeItem(key)
}
// 导出
export default {
  setUser,
  getUser,
  delUser
}
