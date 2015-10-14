var webpack = require('webpack');

module.exports = {
  entry: {
    app: './js/main.js',
    vendor: [],
  },
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
  plugins: [
    new webpack.optimize.UglifyJSPlugin(),
    new webpack.optimizeDedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
};
