module.exports = (ENV, {
  MODULES,
  THIRDPARTY,
}) => ({
  test: /\.svg$/,
  exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
  issuer: /\.jsx?$/,
  type: 'asset',
  generator: {
    filename: 'svg/[hash][ext][query]',
  },
});
