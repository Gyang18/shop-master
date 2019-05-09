import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
import moment from 'moment'

// 选择日期
const { RangePicker } = DatePicker
// 日期格式
const dateFormat = 'YYYY/MM/DD'

export default class TabsHeadRight extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const Labels = [
      {
        label: '今日',
        id: 0
      },
      {
        label: '本周',
        id: 1
      },
      {
        label: '本月',
        id: 2
      },
      {
        label: '全年',
        id: 3
      }
    ]
    return (
      <div className='tabs-right-head' data-flex='cross:center'>
        <div className='labels'>
          {Labels.map(item => (
            <Button
              onClick={() => {
                this.props.tabsClick(item.id)
              }}
              className={`link-btn ${this.props.tabsCurrent === item.id ? 'active' : ''}`}
              key={item.id}
              type='link'
            >
              {item.label}
            </Button>
          ))}
        </div>
        <div className='choice-date'>
          <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat}
          />
        </div>
      </div>
    )
  }
}
