/**
 * 定义路由应用
 * * */
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import BasicLayout from './layouts/BasicLayout'
import UserLayout from './layouts/UserLayout'
/**
 * 按照layout 对路由进行分组
 *
 * * */
const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/user' component={UserLayout} />
        <Route path='/' component={BasicLayout} />
      </Switch>
    </BrowserRouter>
  )
}

export default router()
