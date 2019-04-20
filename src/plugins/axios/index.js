import service from './axios'
/**
 * axios相关请求
 * @author admin
 * @date 2019/4/8
 * @param url 请求接口地址
 * @param reqGet get方法请求 param Object 请求参数 如: { params: { name: 'xxx' ...}}
 * @param reqPost post方法请求 data Object 请求参数 如: { name: 'xxx' ...}
 * @param
 */
const req = {
  // get请求
  reqGet(url, param = {}) {
    return service.get(url, { ...param })
  },
  // post请求
  reqPost(url, data = {}) {
    return service.post(url, data)
  },
  // 多个请求并发处理
  reqAll(reqArray = []) {
    if (reqArray.length) {
      return service.all(reqArray)
    }
    throw Error('axios.all params error !')
  }
}
export default req
