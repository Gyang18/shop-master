/**
 * 定义路由应用
 * * */
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
// 中文化
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import BasicLayout from './layouts/BasicLayout'
import UserLayout from './layouts/UserLayout'
/**
 * 按照layout 对路由进行分组
 *
 * * */
moment.locale('zh-cn')
const router = () => {
  return (
    <LocaleProvider locale={zhCN}>
      <BrowserRouter>
        <Switch>
          <Route path='/user' component={UserLayout} />
          <Route path='/' component={BasicLayout} />
        </Switch>
      </BrowserRouter>
    </LocaleProvider>
  )
}

export default router()
