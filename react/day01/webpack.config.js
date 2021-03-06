module.exports = {
  entry: {
    // 入口文件
    app: './src/main.js'
  },
  // 输出的配置
  output: {
    // 获取当前文件的绝对路径
    path: __dirname,
    // 输出文件名
    filename: "./src/bundle.js"
  },
  resolve: {
    extensions: ['.js','.vue','.json'],
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components')
    }
  },
  // 文件的处理方式
  module: {
    loaders: [
    {
      // 要处理的文件
      test: /\.js$/,
      // 排除文件目录
      exclude: /(node_modules)/,
      // 指定什么模块处理
      loader: 'babel-loader',
      // 处理的参数
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
}