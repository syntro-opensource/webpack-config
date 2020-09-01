const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * Export the scss compilation rule
 */
module.exports = (ENV, {MODULES, THIRDPARTY}) => {
  return {
    test: /\.(sa|sc|c)ss$/,
    exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
    use: [{
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader',
        // options: { modules: /_export.scss$/ }
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'sass-loader',
        options: {
          implementation: require("sass")
        }
      }
    ]
  };
}
