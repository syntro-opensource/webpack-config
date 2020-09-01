module.exports = (ENV, {
  MODULES,
  THIRDPARTY
}) => {
  return {
    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts', // where the fonts will go
          publicPath: 'fonts' // override the default path
        }
      }
    ]
  };
}
