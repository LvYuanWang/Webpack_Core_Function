var loaderUtils = require("loader-utils"); // 使用loader-utils模块

module.exports = function (sourceCode) {
  // sourceCode: 是原始的资源文件内容
  const options = loaderUtils.getOptions(this); // 获取loader传递的参数
  const regExp = new RegExp(options.changeBeforeText, "g");
  // const newContent = sourceCode.replace(regExp, "var").replace(/输出/g, "console.log").replace(/提醒/g, "alert").replace(/导入/g, "require");
  return sourceCode.replace(regExp, options.changeAfterText);  // 使用loader可以对资源文件进行处理，然后返回处理后的内容
}