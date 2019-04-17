/**
 * creata-react-app 自定义配置
 *
 * * */
const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  // 实现按需加载antd 组件与css
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true
  })
)
