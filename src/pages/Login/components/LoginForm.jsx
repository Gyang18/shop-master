import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd/lib/index'
import { withRouter } from 'react-router-dom'

class NoramlForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values) {
          this.props.history.replace('/')
        }
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='login-from'>
        <h4 className='login-title'>登陆</h4>
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <Form.Item>
            {getFieldDecorator('用户名', {
              rules: [{ required: true, message: '请输入你的用户名' }]
            })(<Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='用户名' />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('登陆密码', {
              rules: [{ required: true, message: '请输入你的登陆密码' }]
            })(
              <Input
                prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                type='password'
                placeholder='登陆密码'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>记住我</Checkbox>)}
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' className='login-form-button' block>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const LoginForm = Form.create({ name: 'login_form' })(withRouter(NoramlForm))
export default LoginForm
