/**
 * Production configuration for Webpack
 * This configuration will be merged with the base configuration.
 **/

var deepAssign = require("deep-assign");
var webpack = require("webpack");
var base = require("./webpack.base");

// Your config goes here
var config = {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    })
  ]
};

module.exports = deepAssign(config, base);
