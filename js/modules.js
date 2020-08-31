/**
 * Exports settings for javascript modules
 *
 * @param {string} ENV Environment
 * @param {string} MODULES
 * @param {string} THIRDPARTY
 * @returns {{rules: Array.<*>}}
 */
module.exports = (ENV, {MODULES, THIRDPARTY}) => {
    return {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: new RegExp(`(${MODULES}|${THIRDPARTY})`),
                use: [
                    {
                        loader: "babel-loader"
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
                use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    };
};
