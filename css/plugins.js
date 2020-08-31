const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

/**
 * Exports plugins for scss modules
 */
module.exports = () => {
  return [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new StylelintPlugin({
      fix: true
    })
  ]
};
