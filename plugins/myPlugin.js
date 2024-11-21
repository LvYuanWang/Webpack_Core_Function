module.exports = class MyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("MyPlugin", (compilation) => {
      console.log("重新编译...")
    })
  }
}