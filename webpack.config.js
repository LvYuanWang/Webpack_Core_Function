const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    // index: "./index.js",
    main: "./main.js",
    // c: "./test/a/b/c.js",
    // a: "./a.js"
  },
  // __dirname: 当前文件所在目录的绝对路径
  context: path.resolve(__dirname, "src"),  // 该配置项指定了 entry以及loader 文件的基硨目录，绝对路径
  output: {
    path: path.resolve(__dirname, "dist"),
    // 将执行的结果暴露给library配置项指定的名称, 需要配合libraryTarget一起使用
    library: "webpackCoreFunction",
    libraryTarget: "var"
  },
  target: "web", // 配置打包后文件的运行环境node || web(默认)
  module: {
    rules: [],  // 配置loader
    noParse: /jquery/  // 不解析正则表达式匹配的模块, 通常用来忽略大型的单模块库
  },
  // 配置webpack如何寻找模块所对应的文件
  resolve: {
    modules: ["./src", "abc", "node_modules"],  // 配置webpack去哪些目录下寻找第三方模块
    extensions: [".js", ".json", ".css", ".vue", ".jsx"],  // 配置webpack在引入模块时可以省略的后缀名
    alias: {  // 配置模块别名
      "@": path.resolve(__dirname, "src"),
      "_": __dirname
    }
  },
  externals: {  // 配置不需要webpack打包的模块
    lodash: "_"
  },
  stats: {  // 控制台输出信息
    modules: false, // 不输出模块信息
    // ...
  },
}