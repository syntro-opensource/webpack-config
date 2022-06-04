# Configuring the Linters

This config generator users **ESLint** and **Stylelint** to check code during
development and enforce correct patterns. For styles, there is also the autoprefixer,
which automatically prefixes css rules for different browsers.

To use these tools efficiently, your project must provide a every bundle must
provide a browserslist config and every bundle must provide an ESLint and
Stylelint config (if applicable).

## Browserslist Config

We use [Autoprefixer](https://github.com/postcss/autoprefixer) to automatically
add prefixes according to a given set of browsers. ESLint & Stylelint might also
use this list.

The best way to provide a list is to add a `browserslist` key to your `package.json`
file and define your browsers there:
```json
"browserslist": [
  ...
]
```

If you want to use our definitions, then install the definition-module:
```
npm i --save-dev @syntro-opensource/browserslist-config-base
```
and add it to the list:
```json
"browserslist": [
  "extends @syntro-opensource/browserslist-config-base"
],
```

## ESLint Config
ESLint needs an `.eslintrc` file in the root of a bundle to know how to treat
the js code. The simplest case is to simply extend our internal config:
```
npm i --save-dev @syntro-opensource/eslint-config-base
```
and then create a config file:
```yaml
# client/src/bundle_1/.eslintrc
extends: "@syntro-opensource/eslint-config-base"
```

### React
If you are using react, you will have to tell ESLint a bit more:
```yaml
# client/src/react_bundle/.eslintrc
extends: "@syntro-opensource/eslint-config-base"
parser: "@babel/eslint-parser"
parserOptions:
  babelOptions:
    presets:
      - "@babel/preset-react"
```
You can extend this as you see fit, for example with resolver aliases.

If needed, you can also create a `.babelrc` file to add stuff for modules that
rely on it (like the `i18next-extract` or `@babel/plugin-proposal-export-default-from`
plugin).

## Stylelint Config
If your bundle contains stylesheets (most likely scss), Stylelint will lint the
files before bundling. To configure eslint, add a `.stylelintrc` file to your bundle
root:

```yaml
# client/src/bundle_1/.stylelintrc
extends:
    - '@syntro-opensource/webpack-config/stylelint-config'
rules: # optional
    selector-max-id: null
    scss/dollar-variable-pattern: null
```
By using the `extends:` key, you can directly extend our internal config (or any other you like)
