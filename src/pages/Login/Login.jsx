import React, { Component } from 'react'
import loginBg from '@assets/login-bg.png'
import LoginForm from './components/LoginForm'
import './login.less'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='login-page' style={{ backgroundImage: `url(${loginBg})` }}>
        <div className='login-container'>
          <h2 className='slogan'>
            欢迎使用 <br /> 微商城管理系统
          </h2>
          <LoginForm />
        </div>
      </div>
    )
  }
}
