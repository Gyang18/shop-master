import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { userRouterConfig } from '../../routerConfig'

export default class UserLayout extends Component {
  /*
   * 渲染路由组件
   * */
  renderNormalRoute = (item, index) => {
    return item.component ? <Route key={index} path={item.path} component={item.component} exact={item.exact} /> : null
  }

  render() {
    return (
      /* 装载路由 */
      <Switch>
        {userRouterConfig.map(this.renderNormalRoute)}
        {/* 根路由默认重定向到 /user */}
        <Redirect from='/user' to='/user/login' />
      </Switch>
    )
  }
}
