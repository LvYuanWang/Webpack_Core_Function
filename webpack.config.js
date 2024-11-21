const proConfig = require('./webpack.pro');
const devConfig = require('./webpack.dev');
const baseConfig = require('./webpack.base');

module.exports = env => {
  if (env && env.pro) {
    return {
      ...proConfig,
      ...baseConfig
    }
  } else {
    return {
      ...devConfig,
      ...baseConfig
    }
  }
}