const jsRule = require('./rules/js');
const imageRule = require('./rules/image');
const scssRule = require('./rules/scss');
const fontRule = require('./rules/font');
const svgrRule = require('./rules/svgr');

/**
 * Exports settings for javascript modules
 *
 * @param {string} ENV Environment
 * @param {object} PATHS
 * @returns {{rules: Array.<*>}}
 */
module.exports = (ENV, PATHS) => ({
  rules: [
    jsRule(ENV, PATHS),
    scssRule(ENV, PATHS),
    svgrRule(ENV, PATHS),
    imageRule(ENV, PATHS),
    fontRule(ENV, PATHS),
  ].filter((rule) => rule),
});
