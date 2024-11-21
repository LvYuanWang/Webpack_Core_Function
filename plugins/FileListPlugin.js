module.exports = class FileListPlugin {
  constructor(fileName = "fileList.txt") {
    this.fileName = fileName;
  }

  apply(compiler) {
    compiler.hooks.emit.tap('FileListPlugin', Compilation => {
      let fileListArr = [];
      console.log(Compilation.assets);
      for (const key in Compilation.assets) {
        fileListArr.push(`【${key}】
大小: ${Compilation.assets[key].size() / 1000}KB`)
      }
      const fileListText = fileListArr.join('\n\n');
      Compilation.assets[this.fileName] = {
        source() {
          return fileListText;
        },
        size() {
          return fileListText.length;
        }
      }
    })
  }
}