import React from 'react'
import { Row, Col } from 'antd'

const Workbench = () => {
  return (
    <div className='workbench'>
      <Row type='flex' align='middle' justify='space-between'>
        <Col>个人信息左</Col>
        <Col>个人信息右</Col>
      </Row>
    </div>
  )
}
export default Workbench
