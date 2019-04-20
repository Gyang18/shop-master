/**
 * axios 请求配置相关文件
 * @date 2019/4/8
 * @param {String} baseURL  请求接口地址
 * @param {Object} header   请求头设置
 * @param {Object} timeout  超时时间设置
 * @param {String} responseType  响应数据结构
 * @param {Number} maxReqNum  重发请求最大数
 * */
export default {
  baseURL: process.env.VUE_APP_REQURL, // 请求地址
  header: { 'Content-Type': 'application/json;charset=UTF-8' },
  timeout: 600000
}
