import React, { Component } from 'react'
import { Row, Col } from 'antd'
import registerBg from '@assets/register_bg.jpg'
import RegisterForm from './components/RegisterForm'
import './register.less'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='register' style={{ backgroundImage: `url(${registerBg})` }}>
        <div className='register-container'>
          <Row type='flex' justify='start' align='top'>
            <Col span={12} className='register-col'>
              <div className='hint-message'>
                <h3>LOGO</h3>
                <p>微商城后台管理系统</p>
                <p>初学react</p>
              </div>
            </Col>
            <Col span={12} className='register-col'>
              <div className='register-form'>
                <h3 style={{ color: '#333' }}>注册</h3>
                <RegisterForm />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
