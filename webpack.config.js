/**
 * Development configuration for Webpack
 * This configuration will be merged with the base configuration.
 **/

var deepAssign = require("deep-assign");
var base = require("./webpack.base");

// Your Dev config
var config = {
  devtool: 'cheap-eval-source-map'
};

module.exports = deepAssign(config, base);
