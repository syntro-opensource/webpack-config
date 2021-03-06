# webpack-config

![Dependabot](https://img.shields.io/badge/dependabot-active-brightgreen?logo=dependabot)
[![npm](https://img.shields.io/npm/dt/@syntro-opensource/webpack-config)](https://www.npmjs.com/package/@syntro-opensource/webpack-config)
[![npm (scoped)](https://img.shields.io/npm/v/@syntro-opensource/webpack-config)](https://www.npmjs.com/package/@syntro-opensource/webpack-config)

This NPM package provides a common webpack configuration, to be used accross
projects built by Syntro GmbH. It serves as a source of truth for configuration
and settings.

## Pyilosophy
The configuration in this package is intended to be used for projects,
where assets need to be pre-packed and displayed to a web frontend.

In the eyes of this package, every bundle
* has an entrypoint named `bundle.js`
* can contain `js` and styles
* has a separate subfolder in a `src/` and `dist/` directory


## Example configuration

While this package provides multiple config declarations, You need to import
them into your main webpack config.

```js
const Path = require('path');
const webpackConfig = require('@syntro-opensource/webpack-config');
const {
  resolves,
  modules,
  plugins,
} = webpackConfig;


const ENV = process.env.NODE_ENV;
const PATHS = {
  // The path where your modules are located
  MODULES: 'node_modules',
  // the root path, where your webpack.config.js is located.
  ROOT: Path.resolve(),
  // the root path to your source files
  SRC: Path.resolve('app/client/src'),
  // thirdparty folder containing copies of packages which wouldn't be available on NPM
  THIRDPARTY: 'thirdparty',
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
      resolve: resolves(ENV, PATHS),
      module: modules(ENV, PATHS),
      plugins: plugins(ENV, PATHS),
    }
];

module.exports = config;
```

You can then require the built bundles in your code or template.
