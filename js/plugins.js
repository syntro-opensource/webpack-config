const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/**
 * Exports the settings for plugins in webpack.config
 */
module.exports = () => {
  return [
    process.env.ANALYZE_BUNDLE && new BundleAnalyzerPlugin({analyzerPort: 8080})
  ].filter(plugin => plugin);
};
