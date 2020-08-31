/**
 * Defines a default babel config
 */
module.exports = {
  presets: [
    '@babel/core',
    ['@babel/preset-env', {
      "targets": {
        "node": "current"
      }
    }],
    '@babel/preset-react',
  ],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
  ]
};
