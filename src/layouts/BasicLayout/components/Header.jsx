import React from 'react'
import { Layout, Icon } from 'antd'

const Headers = Layout.Header

const Header = props => {
  return (
    <Headers style={{ background: '#fff' }}>
      <Icon className='trigger' type={props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={props.toggle} />
    </Headers>
  )
}
export default Header()
