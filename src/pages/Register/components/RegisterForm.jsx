import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'

class NormalRegisterForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values) // eslint-disable-line
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 14 },
        sm: { span: 4 }
      },
      labelAlign: 'left',
      wrapperCol: {
        xs: { span: 22 },
        sm: { span: 18 }
      }
    }
    return (
      <div className='container'>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label='用户名'>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: '请填写用户名'
                }
              ]
            })(<Input placeholder='用户名' />)}
          </Form.Item>
          <Form.Item label='密码'>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '请输入密码'
                },
                {
                  min: 6,
                  message: '密码不得小于6位'
                }
              ]
            })(<Input type='password' placeholder='请设置密码' />)}
          </Form.Item>
          <Form.Item className='btn-group'>
            <Button type='primary' htmlType='submit' className='register-btn'>
              注册
            </Button>
          </Form.Item>
          <Form.Item>
            <p>
              已有账号， <Link to='/user/login'>去登陆</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
// 将form属性绑定至props
const RegisterForm = Form.create({ name: 'register_form' })(withRouter(NormalRegisterForm))
export default RegisterForm
