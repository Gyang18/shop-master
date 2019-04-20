import axios from 'axios'
import { message } from 'antd'
import configs from './config'
// 创建一个 axios 实例
const service = axios.create({
  baseURL: configs.baseURL,
  timeout: configs.timeout,
  header: configs.header
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 发送失败
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    const { code } = dataAxios
    // 根据 code 进行判断
    if (code === undefined) {
      // 如果没有 code 代表这不是项目后端开发的接口 比如可能是获取后端传过来的文件
      dataAxios.data = null
    } else {
      // 有 code 代表这是一个后端接口 可以进行进一步的判断
      switch (code) {
        case 200:
          // 获取成功
          return dataAxios
        case 100:
          // 获取失败
          message.error(dataAxios.msg)
          break
        default:
          // 其他 code
          message.error(dataAxios.msg)
          break
      }
    }
    return dataAxios
  },
  err => {
    let msg = ''
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          msg = '请求错误'
          break
        case 401:
          msg = '未授权，请登录'
          break
        case 403:
          msg = '拒绝访问'
          break
        case 404:
          msg = `请求地址出错: ${err.response.config.url}`
          break
        case 408:
          msg = '请求超时'
          break
        case 500:
          msg = '服务器内部错误'
          break
        case 501:
          msg = '服务未实现'
          break
        case 502:
          msg = '网关错误'
          break
        case 503:
          msg = '服务不可用'
          break
        case 504:
          msg = '网关超时'
          break
        case 505:
          msg = 'HTTP版本不受支持'
          break
        default:
          msg = '请求失败！'
          break
      }
    }
    message.error(msg)
    return Promise.reject(err)
  }
)

export default service
