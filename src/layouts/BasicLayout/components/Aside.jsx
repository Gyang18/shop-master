import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { asideMenu } from '../../../menuConfig'

const { Sider } = Layout
const Aside = props => {
  // 当前页面地址
  const pathName = props.location.pathname === '/' ? '/workbench' : props.location.pathname
  // 侧边栏状态
  const { collapsed } = props
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className='logo'>
        <h1>LOGO</h1>
      </div>
      <Menu theme='dark' mode='inline' selectedKeys={[pathName]}>
        {asideMenu.map(grid => (
          <Menu.Item key={grid.path} title={grid.name}>
            <Link to={{ pathName: grid.path, state: { title: grid.name } }} className='aside-nav-item'>
              <Icon type={grid.icon || null} />
              <span>{grid.name}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}
export default withRouter(Aside)
