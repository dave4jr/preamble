var webpack = require('webpack');
var deepAssign = require('deep-assign');

var baseConfig = {
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    path: './assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

var devConfig = {
  devtool: 'cheap-eval-source-map'
};

var productionConfig = {
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

module.exports.dev = deepAssign(devConfig, baseConfig);
module.exports.production = deepAssign(productionConfig, baseConfig);
