import React from 'react'
import { Layout, Icon, Row, Col, Avatar } from 'antd'

const Headers = Layout.Header

const Header = props => {
  return (
    <Headers style={{ background: '#fff' }}>
      <Row type='flex' align='middle' justify='space-between'>
        <Col span={12}>
          <Icon className='trigger' type={props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={props.toggle} />
        </Col>
        <Col offset={2} span={10}>
          <div className='nav-menu' data-flex='main:right cross:center'>
            <div className='nav-item icon-item'>
              <Icon type='exclamation-circle' />
              <span>意见反馈</span>
            </div>
            <div className='nav-item icon-item'>
              <span>
                <Icon type='question-circle' />
                使用文档
              </span>
            </div>
            <div className='nav-item icon-item'>
              <Icon type='logout' />
              退出登陆
            </div>
            <div className='nav-item'>
              <Avatar size='large' icon='user' />
              <span className='name'>admin</span>
            </div>
          </div>
        </Col>
      </Row>
    </Headers>
  )
}
export default Header
