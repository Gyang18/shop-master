import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import NotFound from '@comp/NotFound'
import { mainRouterConfig } from '../../routerConfig'
import '@/styles/animate.css'

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
      /* <TransitionGroup> */
      /*  <CSSTransition key={location.key} timeout={200} classNames='page'> */
      /*  </CSSTransition> */
      /* </TransitionGroup> */
      <Switch>
        {mainRouterConfig.map(this.renderNormalRoute)}
        {/* 根路由默认重定向到 /workbench */}
        <Redirect exact from='/' to='/workbench' />
        {/* 未匹配到的路由重定向到 NotFound */}
        <Route component={NotFound} />
      </Switch>
    )
  }
}
export default MainRoute
