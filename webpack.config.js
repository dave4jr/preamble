var webpack = require('webpack');

module.exports = {
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
  },
  devtool: 'inline-source-map'
};
