module.exports(ENV, {
  MODULES,
  THIRDPARTY
}) => {
  return {
    test: /\.svg$/,
    exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
    issuer: {
      test: /\.jsx?$/
    },
    use: [{
      loader: '@svgr/webpack'
    }, 'url-loader'],
  };
}
