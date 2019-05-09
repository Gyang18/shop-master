import React from 'react'
// 用户头部
import PageHeader from './module/PageHeader'
// 头部信息卡片
import PageHeadCard from './module/PageHeadCard'
// 页面选项卡
import PageTabs from './module/PageTabs'
import './Workbench.less'

const Workbench = () => {
  return (
    <div className='workbench'>
      <PageHeader />
      <div style={{ padding: '0 20px', marginTop: 20 }}>
        <PageHeadCard />
        <PageTabs />
      </div>
    </div>
  )
}
export default Workbench
