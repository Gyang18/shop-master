module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
//让eslint能够识别alias别名
  "settings": {
    "import/resolver": {
      "webpack":{
        "config": "./webstorm.webpack.js"
      }
    }
  },
  rules: {
    // 关闭react默认的props-type验证
    'react/prop-types': [0],
    //关闭使用解构赋值的检测
    'react/destructuring-assignment': [0, 'always'],
    // 解决require报错问题
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-one-expression-per-line': [0]
  }
}
