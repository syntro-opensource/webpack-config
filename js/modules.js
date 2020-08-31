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
  THIRDPARTY
}) => {
  return {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
        use: [{
            loader: "babel-loader",
            options: {
              presets: [
                ['@babel/preset-env', {
                  "targets": {
                    "node": "current"
                  }
                }],
                '@babel/preset-react',
              ],
              plugins: [
                "@babel/plugin-proposal-export-default-from",
              ]
            }
          },
          {
            // Lint using ESLint
            loader: 'eslint-loader',
            options: {
              fix: true
            },
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images'
          }
        }]
      }
    ]
  };
};
