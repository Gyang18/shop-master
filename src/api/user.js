/*
 * 管理员操作相关接口
 * */
import req from '@plug/axios'

// 用户登陆
export const userLogin = param => req.reqPost('/user/login', { ...param })
// 用户注册
export const userRegister = param => req.reqPost('/admin/register', { params: param })
