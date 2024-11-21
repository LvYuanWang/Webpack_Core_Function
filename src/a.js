// 在未来如果你的打包代码需要在node环境中运行，那么你可以将target配置为node，这样打包后的代码就可以在node环境中运行了。
// const fs = require("fs");
// console.log(fs);

console.log('a.js file');

require('./b');

export default "a";