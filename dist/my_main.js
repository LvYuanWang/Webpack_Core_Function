(function (modulesObject) {
  var cacheData = {}; // 缓存数据

  function __webpack_require_(moduleId) {
    // 判断缓存区是否有该数据
    if (cacheData[moduleId]) {
      return cacheData[moduleId];
    }

    const func = modulesObject[moduleId];
    const module = {
      exports: {}
    }
    func(module, module.exports, __webpack_require_);
    const moduleValue = module.exports;

    cacheData[moduleId] = moduleValue;
    return moduleValue;
  }

  __webpack_require_("./src/index.js");
})({
  "./src/a.js": function (module, exports) {
    // module.exports = "a";
    // console.log('a.js file')
    // eval(): 表示执行括号中的代码字符串, 特点是代码字符串中的代码会被当做正常的代码执行, 报错的话会报错在代码字符串中
    eval("module.exports = \"a\"\nconsole.log('a.js file')\n//# sourceURL=webpack: ///./src/a.js?"); // sourceURL: 用于调试, 表示当前代码的来源
  },
  "./src/index.js": function (module, exports, require) {
    // console.log('index.js file');
    // const a = require('./src/a.js');
    // a.abc();
    // console.log(a);
    // eval(): 表示执行括号中的代码字符串, 特点是代码字符串中的代码会被当做正常的代码执行, 报错的话会报错在代码字符串中
    eval("console.log('index.js file')\nconst a = require(/*! ./a */ './src/a.js')\na.abc();\nconsole.log(a)\n//# sourceURL=webpack:///./src/index.js?");
  }
})