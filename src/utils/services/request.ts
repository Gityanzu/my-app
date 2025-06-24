import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '/api',
  timeout: 10000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截器
request.interceptors.response.use(
  res => res.data,
  error => {
    const { response } = error
    if (response?.status === 401) {
      // 可处理跳转登录逻辑
      console.warn('未授权，请重新登录')
    }
    return Promise.reject(error)
  }
)

export default request
