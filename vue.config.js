const webpack = require('webpack')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 公共路径(必须有的)
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: "assets",
  productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
  devServer: {
    open: true
    // proxy: {
    //   '/api': {
    //     // target: 'http://192.168.1.112:9080',
    //     target: 'http://192.168.0.83:9080',
    //     pathRewrite: { '^/api': '' },
    //     changeOrigin: true,
    //     secure: false // 接受 运行在 https 上的服务
    //   }
    // }
  },
  chainWebpack(config) {
    config.entry('main')
      .add('babel-polyfill')

    config.resolve.alias
      .set('@', resolve('src'))
      .set('views', resolve('src/views'))
      .set('base', resolve('src/components/base'))
      .set('core', resolve('src/core'))

    config.plugin('context')
      .use(webpack.ContextReplacementPlugin,
        [/moment[/\\]locale$/, /zh-cn/])
  },
  // node_modules依赖项es6语法未转换问题
  transpileDependencies: [
    'vuex-persist'
  ]
}
