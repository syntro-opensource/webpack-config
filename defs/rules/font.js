/* eslint-disable  no-unused-vars */
module.exports = (ENV, {
  MODULES,
  THIRDPARTY,
}) => ({
/* eslint-enable  no-unused-vars */
  test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  type: 'asset/resource',
  generator: {
    filename: 'fonts/[hash][ext][query]'
  }
  // use: [{
  //   loader: 'file-loader',
  //   options: {
  //     name: '[name].[ext]',
  //     outputPath: 'fonts', // where the fonts will go
  //     publicPath: 'fonts', // override the default path
  //   },
  // },
  // ],
});
