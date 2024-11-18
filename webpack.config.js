var path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js", // 属性名: chunk的名称, 属性值: 入口模块(启动模块)
    a: ["./src/a.js", "./src/b.js"],  // 一个chunk中可以包含多个模块, 会将多个模块合并到一个chunk中
  },
  output: {
    path: path.resolve(__dirname, "target"),  // 必须配置一个绝对路径, 表示资源输出的目录
    filename: "scripts/[name]-[chunkhash:5].js" // 配置的是chunk资源合并后的js文件名,可以配置name,hash规则等
  },
  devtool: "source-map"
}