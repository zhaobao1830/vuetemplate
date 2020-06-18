module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': [0, 'error', 'windows'], // 强制使用windows模式
    'import/extensions': 0, // import不需要写文件扩展名
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0, // 无下划线
    'space-before-function-paren': 0, // 忽略空格
    'indent': 0, // 忽略缩进
    semi: ['error', 'never'], // 无分号
    'no-plusplus': 0, // 禁止使用++，--
    'camelcase': 0, // 忽略强制驼峰命名
    "no-trailing-spaces": 0, // 忽略语句后面出现的空格
    "max-len": ["error", { "code": 1000 }] // 最多550行
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
