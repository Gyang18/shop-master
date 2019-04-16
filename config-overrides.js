/**
 * creata-react-app 自定义配置
 *
 * * */
// eslint-disable
const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
  // 实现按需加载antd 组件与css
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)
