import React from 'react'
import { Layout, Icon, Row, Col, Avatar } from 'antd'

const Headers = Layout.Header

const Header = props => {
  return (
    <Headers style={{ background: '#fff' }}>
      <Row type='flex' align='middle' justify='space-between'>
        <Col>
          <Icon className='trigger' type={props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={props.toggle} />
        </Col>
        <Col>
          <div className='nav-menu'>
            <div className='nav-item'>退出登陆</div>
            <div className='nav-item'>
              <Avatar size='large'>Gyang</Avatar>
              <span>admin</span>
            </div>
          </div>
        </Col>
      </Row>
    </Headers>
  )
}
export default Header
