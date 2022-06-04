const {
  BundleAnalyzerPlugin,
} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

/**
 * Exports the settings for plugins in webpack.config
 */
module.exports = (ENV, { SRC }) => [
  process.env.ANALYZE_BUNDLE && new BundleAnalyzerPlugin({
    analyzerPort: 8080,
  }),
  new MiniCssExtractPlugin({
    filename: 'bundle.css',
  }),
  new StylelintPlugin({
    fix: true,
    context: SRC,
  }),
  new ESLintPlugin({
    fix: true,
  }),
].filter((plugin) => plugin);
