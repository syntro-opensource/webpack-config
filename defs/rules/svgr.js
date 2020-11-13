module.exports = (ENV, {
  MODULES,
  THIRDPARTY,
}) => ({
  test: /\.svg$/,
  exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
  issuer: {
    test: /\.jsx?$/,
  },
  use: [{
    loader: '@svgr/webpack',
  }, 'url-loader'],
});
