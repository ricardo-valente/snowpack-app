const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

const options = { browsers: 'last 2 versions' };

module.exports = {
  plugins: [cssnano(), postcssPresetEnv(options)]
};
