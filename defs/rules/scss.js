const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

/**
 * Export the scss compilation rule
 */
module.exports = (ENV, {
  MODULES,
  THIRDPARTY,
}) => ({
  test: /\.(sa|sc|c)ss$/,
  exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
  use: [{
    loader: MiniCssExtractPlugin.loader,
  },
  {
    loader: 'css-loader',
    // options: { modules: /_export.scss$/ }
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          autoprefixer({ dangerousExtend: true }),
          // require('postcss-inline-svg')({
          //   paths: [
          //     path.resolve(__dirname, 'client/src/img/')
          //   ]
          // }),
          require('cssnano'),
        ],
      },
    },
  },
  {
    loader: 'sass-loader',
    options: {
      implementation: require('sass'),
    },
  },
  ],
});
