import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { mainRouterConfig } from '../../routerConfig'

class MainRoute extends Component {
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
        {mainRouterConfig.map(this.renderNormalRoute)}
        {/* 根路由默认重定向到 /workbench */}
        <Redirect from='/' to='/workbench' />
      </Switch>
    )
  }
}
export default MainRoute
