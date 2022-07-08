# webpack-config

![Dependabot](https://img.shields.io/badge/dependabot-active-brightgreen?logo=dependabot)
[![npm](https://img.shields.io/npm/dt/@syntro-opensource/webpack-config)](https://www.npmjs.com/package/@syntro-opensource/webpack-config)
[![npm (scoped)](https://img.shields.io/npm/v/@syntro-opensource/webpack-config)](https://www.npmjs.com/package/@syntro-opensource/webpack-config)

This NPM package provides a common webpack configuration, to be used accross
projects built by Syntro GmbH. It serves as a source of truth for configuration
and settings.

## Directory / Module Sturcture
The configuration in this package is intended to be used for projects,
where assets need to be pre-packed and displayed to a web frontend.

In the eyes of this package, every bundle
* has an entrypoint named `bundle.js`
* can contain `js`, javascript and styles
* has a separate subfolder in a `src/` and `dist/` directory

In a Silverstripe module, the structure would look like this:
```
client/
  ├─ dist/
  │   ├─ bundle_1/
  │   └─ bundle_2/
  │
  └─ src/
      ├─ bundle_1/
      │    ├─ bundle.js
      │    ├─ .eslintrc
      │    ├─ .stylelintrc
      │    ├─ (.babelrc)
      │    └─ (...)
      │
      └─ bundle_2/
```
> For the configuration of eslint and stylelint see the [Docs about lint config](docs/config.md).

## Using the Module Definitions

To set up a webpack build using this module, create a `webpack.config.js` file
in your project root. If we wanted to build the project with the structure
described in the previous section, your config should look like this:

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
  SRC: Path.resolve('client/src'),
  // thirdparty folder containing copies of packages which wouldn't be available on NPM
  THIRDPARTY: 'thirdparty',
};

const config = [
    {
      name: 'bundle1',
      entry: {
        main: Path.resolve(__dirname, 'client/src/bundle_1')
      },
      output: {
        path: Path.resolve(__dirname, 'client/dist/bundle_1'),
        filename: '[name].js',
      },
      devtool: (ENV !== 'production') ? 'source-map' : '',
      resolve: resolves(ENV, PATHS),
      module: modules(ENV, PATHS),
      plugins: plugins(ENV, PATHS),
    }, {
      name: 'bundle2',
      entry: {
        main: Path.resolve(__dirname, 'client/src/bundle_2')
      },
      output: {
        path: Path.resolve(__dirname, 'client/dist/bundle_2'),
        filename: '[name].js',
      },
      devtool: (ENV !== 'production') ? 'source-map' : '',
      resolve: resolves(ENV, PATHS),
      module: modules(ENV, PATHS),
      plugins: plugins(ENV, PATHS),
    }
];

// do any config manipulation here

module.exports = config;
```

Finally, add a script to your package.json file:
```json
{
  "scripts": {
    "watch": "webpack --watch --mode development",
    "build": "webpack --mode production",
  }
}
```

Now, build your bundles using `npm run build` or `npm run watch`.

## Docs

* [📚 ESLint & Stylelint & Browserslist configuration](docs/config.md)
* [📚 Import aliases](docs/eslint-import-resolver-alias.md)
