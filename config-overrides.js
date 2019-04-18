/**
 * creata-react-app 自定义webpack配置
 *
 * * */
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
  // 实现按需加载antd 组件与css
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  // 启用less
  addLessLoader({
    strictMath: true,
    noIeCompat: true
  }),
  // 设置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@comp': path.resolve(__dirname, 'src/components'),
    '@layouts': path.resolve(__dirname, 'src/layouts'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@plug': path.resolve(__dirname, 'src/plugins'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  })
)
