module.exports = (ENV, { MODULES, THIRDPARTY }) => ({
  test: /\.(js|jsx)$/,
  exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
  use: [{
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', {
          targets: {
            node: 'current',
          },
        }],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-export-default-from',
      ],
    },
  },
  ],
});
