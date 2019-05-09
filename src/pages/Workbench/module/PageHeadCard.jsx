import React, { Component } from 'react'
import { Col, Row, Icon, Tooltip } from 'antd'

export default class PageHeadCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='head-wrapper-card'>
        <Row gutter={16} type='flex' align='middle' justify='start'>
          <Col span={6} className='card-item'>
            <div className='content'>
              <div className='head' data-flex='main:justify cross:center'>
                <p>总销售额</p>
                <span>
                  <Tooltip title='指标说明'>
                    <Icon type='info-circle' />
                  </Tooltip>
                </span>
              </div>
              <div className='context'>
                <div className='money'>
                  <h3>¥ 126,560</h3>
                </div>
                <div className='chart-prop' data-flex='cross:center'>
                  <p>
                    周比例 <span>12%</span>
                    <Icon type='caret-up' style={{ fontSize: '12px', color: '#ff1213' }} />
                  </p>
                  <p>
                    日比例 <span>15%</span>
                    <Icon type='caret-down' style={{ fontSize: '12px', color: '#08cc11' }} />
                  </p>
                </div>
              </div>
              <div className='foot'>
                <p>日销售额 ￥12,890</p>
              </div>
            </div>
          </Col>
          <Col span={6} className='card-item'>
            <div className='content'>
              <div className='head' data-flex='main:justify cross:center'>
                <p>访问量</p>
                <span>
                  <Tooltip title='指标说明'>
                    <Icon type='info-circle' />
                  </Tooltip>
                </span>
              </div>
              <div className='context'>
                <div className='money'>
                  <h3>126,560</h3>
                </div>
                <div className='chart-prop' data-flex='cross:center'>
                  <p>
                    周比例 <span>12%</span>
                    <Icon type='caret-up' style={{ fontSize: '12px', color: '#ff1213' }} />
                  </p>
                  <p>
                    日比例 <span>15%</span>
                    <Icon type='caret-down' style={{ fontSize: '12px', color: '#08cc11' }} />
                  </p>
                </div>
              </div>
              <div className='foot'>
                <p>日访问量 12,890</p>
              </div>
            </div>
          </Col>
          <Col span={6} className='card-item'>
            <div className='content'>
              <div className='head' data-flex='main:justify cross:center'>
                <p>总销售额</p>
                <span>
                  <Tooltip title='指标说明'>
                    <Icon type='info-circle' />
                  </Tooltip>
                </span>
              </div>
              <div className='context'>
                <div className='money'>
                  <h3>¥ 126,560</h3>
                </div>
                <div className='chart-prop' data-flex='cross:center'>
                  <p>
                    周比例 <span>12%</span>
                    <Icon type='caret-up' style={{ fontSize: '12px', color: '#ff1213' }} />
                  </p>
                  <p>
                    日比例 <span>15%</span>
                    <Icon type='caret-down' style={{ fontSize: '12px', color: '#08cc11' }} />
                  </p>
                </div>
              </div>
              <div className='foot'>
                <p>日销售额 ￥12,890</p>
              </div>
            </div>
          </Col>
          <Col span={6} className='card-item'>
            <div className='content'>
              <div className='head' data-flex='main:justify cross:center'>
                <p>总销售额</p>
                <span>
                  <Tooltip title='指标说明'>
                    <Icon type='info-circle' />
                  </Tooltip>
                </span>
              </div>
              <div className='context'>
                <div className='money'>
                  <h3>¥ 126,560</h3>
                </div>
                <div className='chart-prop' data-flex='cross:center'>
                  <p>
                    周比例 <span>12%</span>
                    <Icon type='caret-up' style={{ fontSize: '12px', color: '#ff1213' }} />
                  </p>
                  <p>
                    日比例 <span>15%</span>
                    <Icon type='caret-down' style={{ fontSize: '12px', color: '#08cc11' }} />
                  </p>
                </div>
              </div>
              <div className='foot'>
                <p>日销售额 ￥12,890</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
