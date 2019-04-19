import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
    const { location } = this.props
    return (
      /* 装载路由 */
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames='my-node'>
          <Switch>
            {mainRouterConfig.map(this.renderNormalRoute)}
            {/* 根路由默认重定向到 /workbench */}
            <Redirect from='/' to='/workbench' />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}
export default withRouter(MainRoute)
