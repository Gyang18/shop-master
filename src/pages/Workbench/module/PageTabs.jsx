import React, { Component } from 'react'
import { Col, Row, Tabs } from 'antd'
import TabsHeadRight from './TabsHeadRight'
import MarketChart from './Chart/MarketChart'

const { TabPane } = Tabs
// 标签页右侧组件

export default class PageTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabsCurrent: 0
    }
  }

  // 数据切换
  changeData = id => {
    this.setState({
      tabsCurrent: id
    })
  }

  render() {
    return (
      <div className='tabs-wrapper'>
        <Tabs tabBarExtraContent={<TabsHeadRight tabsClick={this.changeData} tabsCurrent={this.state.tabsCurrent} />}>
          <TabPane tab='销售额' key='1'>
            <div className='market-container'>
              <Row gutter={16}>
                <Col span={16}>
                  <MarketChart title='销售统计' />
                </Col>
                <Col span={8}>
                  <p>右侧内容</p>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab='访问量' key='2'>
            <div className='market-container'>
              <Row gutter={16}>
                <Col span={16}>
                  <MarketChart title='访问统计' />
                </Col>
                <Col span={8}>
                  <p>右侧内容</p>
                </Col>
              </Row>
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
