module.exports = {
  mode: "development",
  // devtool: "source-map",
  module: { // 处理模块配置
    rules: [
      {
        test: /\.(jpg)|(png)|(svg)$/,
        use: [
          {
            loader: "./loaders/img-loader.js",
            options: {
              limit: 200 * 1024, // 200KB: 小于 200KB 的图片转为 Base64 格式
              fileName: "[contenthash:5].[ext]" // 输出文件名
            }
          }
        ],
      }
    ]
  }
}