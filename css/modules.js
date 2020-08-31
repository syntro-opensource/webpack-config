const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Path = require('path');

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
]
/**
 * Exports settings for javascript modules
 *
 * @param {string} ENV Environment
 * @param {string} MODULES
 * @param {string} THIRDPARTY
 * @returns {{rules: Array.<*>}}
 */
module.exports = (ENV, {
  MODULES,
  THIRDPARTY,
  SRC
}) => {
  return {
    rules: [{
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
            sourceMap: true,
            plugins: [
              autoprefixer({browsers:SUPPORTED_BROWSERS}),
              require('postcss-inline-svg')({
                paths: [
                  Path.resolve(SRC, 'img/')
                ]
              }),
              require('cssnano'),
              // More postCSS modules here if needed
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: require("sass"),
          }
        }
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
      use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'img'
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            disable: true
          }
        }
      ]
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
      use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts', // where the fonts will go
            publicPath: 'fonts' // override the default path
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            disable: true
          }
        }
      ]
    }]
  };
};
