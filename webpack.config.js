const MyPlugin = require("./plugins/myPlugin");

module.exports = {
  mode: "development",
  watch: true,
  plugins: [
    new MyPlugin()
  ]
}