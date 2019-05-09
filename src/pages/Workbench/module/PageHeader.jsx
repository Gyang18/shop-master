import React, { Component } from 'react'
import { Avatar, Col, Row } from 'antd'

export default class PageHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='header-index-pageHeader'>
        <Row gutter={16} type='flex' align='middle' justify='space-between'>
          <Col span={18}>
            <div className='user-content' data-flex='main:left cross:center'>
              <div className='header'>
                <Avatar size='large' src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              </div>
              <div className='user-context'>
                <div className='title'>
                  <h4>早安，admin, 祝你开心每一天</h4>
                </div>
                <div className='labels'>
                  <p>某公司-前端开发 | 一只小菜鸟</p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className='right-hint' data-flex='main:right cross:center'>
              <div className='hint-item'>
                <p className='tit'>项目数</p>
                <p className='num'>56</p>
              </div>
              <div className='hint-item'>
                <p className='tit'> 团队内排名</p>
                <p className='num'>
                  8 / <font style={{ color: '#999', fontSize: 14 }}>24</font>
                </p>
              </div>
              <div className='hint-item'>
                <p className='tit'> 团队内排名</p>
                <p className='num'>
                  8 / <font style={{ color: '#999', fontSize: 14 }}>24</font>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
