const loaderUtils = require("loader-utils");

function loader(sourceCode) {
  // 方法一: 使用 Base64 格式
  // const content = toBase64(sourceCode);

  // 方法二: 直接创建图片文件
  // const content = getFilePath.call(this, sourceCode);

  const { limit = 200 * 1024, fileName = "[contenthash:5].[ext]" } = loaderUtils.getOptions(this);
  let content = null;

  if (sourceCode.byteLength <= limit) {
    content = toBase64(sourceCode);
  } else {
    content = getFilePath.call(this, sourceCode, fileName);
  }

  return `module.exports = "${content}"`;
}

// raw: true 表示该 loader 要处理的是原始数据
loader.raw = true;

module.exports = loader;

// 方法一: 转Base64格式
function toBase64(buffer) {
  return "data:image/jpg;base64," + buffer.toString("base64");
}

// 方法二: 直接创建图片文件
function getFilePath(buffer, fileName) {
  const imgPath = loaderUtils.interpolateName(this, fileName, { content: buffer });
  // const imgPath = Math.random().toString(36).slice(2, 7) + ".jpg";
  this.emitFile(imgPath, buffer); // 将文件发射到输出目录
  return imgPath;
}