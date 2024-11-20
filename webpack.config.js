module.exports = {
  mode: "development",
  // entry: "./src/testIndex.js",
  module: { // 处理模块配置
    rules: [  // 规则
      // 规则是从下往上执行的
      {
        test: /testIndex\.js$/, // 匹配资源文件的规则, 只能使用正则表达式
        // 写法1
        // use: [  // 匹配到资源文件后，使用哪些规则模块进行处理
        //   {
        //     loader: "./loaders/test-loader.js", // 使用的loader模块路径, 该字符串会被放置到require中
        //     options: {
        //       changeVar: "未知数"
        //     } // 向对应的loader传递的参数
        //   }
        // ]
        // 写法2-简写
        use: ["./loaders/test-loader.js?changeBeforeText=输出&changeAfterText=console.log", "./loaders/test-loader.js?changeBeforeText=未知数&changeAfterText=var", "./loaders/test-loader.js?changeBeforeText=导入&changeAfterText=require", "./loaders/test-loader.js?changeBeforeText=提醒&changeAfterText=alert"]
      }, // 规则1
      {
        test: /index\.js$/,
        use: ["./loaders/loader1.js", "./loaders/loader2.js"]
      }, // 规则2
      {
        test: /\.js$/,
        use: ["./loaders/loader3.js", "./loaders/loader4.js"]
      }, // 规则3
    ]
  }
}