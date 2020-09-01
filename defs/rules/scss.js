const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

SUPPORTED_BROWSERS = [
  ">= 0.2%",
  "last 1 major version",
  "not dead",
  "Chrome >= 45",
  "Firefox >= 38",
  "Edge >= 12",
  "Explorer >= 10",
  "iOS >= 9",
  "Safari >= 9",
  "Android >= 4.4",
  "Opera >= 30"
];

/**
 * Export the scss compilation rule
 */
module.exports = (ENV, {
  MODULES,
  THIRDPARTY
}) => {
  return {
    test: /\.(sa|sc|c)ss$/,
    exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
    use: [{
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader',
        // options: { modules: /_export.scss$/ }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({browsers:SUPPORTED_BROWSERS}),
            require('postcss-inline-svg')({
              paths: [
                path.resolve(__dirname, 'client/src/img/')
              ]
            }),
            require('cssnano'),
          ]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          implementation: require("sass")
        }
      }
    ]
  };
}
