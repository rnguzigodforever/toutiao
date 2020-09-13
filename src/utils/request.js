import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn',
  timeout: 1100000
  // headers:{}
})
// 请求拦截器
request.interceptors.request.use(function (config) {
// 请求发起经过会经过这里
  const { user } = store.state
  // config:本次请求的请求配置对象
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  // tips:这里一定要返回config配置对象, 否则 请求头就停在这里发不出去
  return config
}, function (error) {
  return Promise.reject(error)
})
export default request
