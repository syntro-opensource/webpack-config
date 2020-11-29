/* eslint-disable  no-unused-vars */
module.exports = (ENV, {
  MODULES,
  THIRDPARTY,
}) => ({
/* eslint-enable  no-unused-vars */
  test: /\.(png|jpe?g|gif)$/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'images/[name].[ext]',
    },
  },
  ],
});
