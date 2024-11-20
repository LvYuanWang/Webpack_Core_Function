module.exports = {
  mode: "development",
  devtool: "source-map",
  module: { // 处理模块配置
    rules: [
      {
        test: /\.css$/,
        use: ["./loaders/style-loader.js"]
      }
    ]
  }
}