# webpack-config

This NPM package provides a common webpack configuration, to be used accross
projects built by Syntro GmbH. It serves as a source of truth for configuration
and settings.


## Example configuration

While this package provides multiple config declarations, You need to import
them into your main webpack config.

```js
const Path = require('path');
const webpackConfig = require('@syntro-opensource/webpack-config');
const {
  resolveJS,
  moduleJS,
  pluginJS,
} = webpackConfig;


const ENV = process.env.NODE_ENV;
const PATHS = {
  // the root path, where your webpack.config.js is located.
  ROOT: Path.resolve(),
  // your node_modules folder name, or full path
  MODULES: 'node_modules',
  // relative path from your css files to your other files, such as images and fonts
  FILES_PATH: '../',
  // thirdparty folder containing copies of packages which wouldn't be available on NPM
  THIRDPARTY: 'thirdparty',
  // the root path to your javascript source files
  SRC: Path.resolve('client/src'),
};

const config = [
    {
      name: 'js',
      entry: {
        main: 'js/src/main.js'
      },
      output: {
        path: 'js/dist',
        filename: '[name].bundle.js',
      },
      devtool: (ENV !== 'production') ? 'source-map' : '',
      resolve: resolveJS(ENV, PATHS),
      module: moduleJS(ENV, PATHS),
      plugins: pluginJS(ENV, PATHS),
    }
];

module.exports = config;
```
