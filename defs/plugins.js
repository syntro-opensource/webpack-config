const webpack = require('webpack');
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

/**
 * Exports the settings for plugins in webpack.config
 */
module.exports = () => {
  return [
    process.env.ANALYZE_BUNDLE && new BundleAnalyzerPlugin({
      analyzerPort: 8080
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new StylelintPlugin({
      fix: true
    })
  ].filter(plugin => plugin);
};