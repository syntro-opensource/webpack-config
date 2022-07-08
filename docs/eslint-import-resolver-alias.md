# Import Aliases

In webpack, you can add aliases for file locations, allowing you to write
easier to read import statement. To do this, you can change the resolve config
to:

```js
// ...
resolve: {
    ...resolves(ENV, PATHS),
    alias: {
        ...resolves(ENV, PATHS).alias,
        'Components': Path.resolve(__dirname, 'app/client/src/backend/components/'),
    },
    extensions: [
        ...resolves(ENV, PATHS).extensions,
        '.json', '.js', '.jsx', '.gql', '.graphql'
    ],
},
// ...
```
This allows you to write
```jsx
import ComponentX from "Components/CopmponentX";
```
in your code.

In order for ESLint to understand this, you must add the `eslint-import-resolver-alias`
module:
```
npm i --save-dev eslint-import-resolver-alias
```
and add the same aliases to your `.eslintrc` config:

```yaml
# ...
settings:
  import/resolver:
    alias:
      map:
        - ['Components', './app/client/src/backend/components']
      extensions: ['.node', '.js', '.jsx', '.json']
```
