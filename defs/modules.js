const jsRule = require('./rules/js.js');
const imageRule = require('./rules/image.js');
const scssRule = require('./rules/scss.js');
const fontRule = require('./rules/font.js');
const svgrRule = require('./rules/svgr.js');

/**
 * Exports settings for javascript modules
 *
 * @param {string} ENV Environment
 * @param {object} PATHS
 * @returns {{rules: Array.<*>}}
 */
module.exports = ( ENV, PATHS ) => {
  return {
    rules: [
      jsRule(ENV, PATHS),
      scssRule(ENV, PATHS),
      svgrRule(ENV, PATHS),
      imageRule(ENV, PATHS),
      fontRule(ENV, PATHS),
    ].filter(rule => rule)
  };
};
