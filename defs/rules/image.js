module.exports(ENV, {
  MODULES,
  THIRDPARTY
}) => {
  return {
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]',
        }
      }
    ]
  };
}
