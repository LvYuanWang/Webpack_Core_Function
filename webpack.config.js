// 导入 path 模块
const path = require("path");

// 在配置文件中不能使用 ES6 的语法导出, 因为在打包过程中配置文件是参与运行的, 打包结果不会参与运行, 所以可以使用 ES6 语法导出, 但是配置文件中不能使用 ES6 语法导出
module.exports = {
  // 入口文件配置: 默认为 ./src/index.js
  entry: "./src/main.js",
  // 出口文件配置
  output: {
    // 出口文件路径: 默认为 ./dist/main.js
    path: path.resolve(__dirname, "dist"),  // __dirname: 当前文件所在目录, path.resolve: 拼接路径
    filename: "buildResult.js",
  },
  // 打包结果选择什么模式
  mode: "production"
}