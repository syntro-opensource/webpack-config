/* eslint-disable  no-unused-vars */
module.exports = (ENV, {
  MODULES,
  THIRDPARTY,
}) => ({
/* eslint-enable  no-unused-vars */
  test: /\.(png|jpe?g|gif)$/,
  type: 'asset/resource',
  generator: {
    filename: 'images/[hash][ext][query]',
  },
});
