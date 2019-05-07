import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from './components/Header'
import Aside from './components/Aside'
import Footer from './components/Footer'
import MainRoute from './MainRoute'
import './index.less'

const { Content } = Layout
export default class BasicLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  clickToggle = () => {
    const newCollapsed = this.state.collapsed
    this.setState({
      collapsed: !newCollapsed
    })
  }

  render() {
    return (
      <Layout>
        <Aside collapsed={this.state.collapsed} />
        <Layout style={{ overflowY: 'auto', paddingTop: 64, position: 'relative' }}>
          <Header toggle={this.clickToggle} collapsed={this.state.collapsed} />
          <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
            <MainRoute />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}
