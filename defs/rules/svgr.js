module.exports = (ENV, {
  MODULES,
  THIRDPARTY,
}) => ({
  test: /\.svg$/,
  exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
  issuer: /\.jsx?$/,
  use: [{
    loader: '@svgr/webpack',
  }, 'url-loader'],
});
