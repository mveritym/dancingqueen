var webpack = require('webpack');
var path = require('path');

var paths = {
  APP: './app',
  BUILD: './build',
  FONTS: './app/fonts'
};

var cssLoader = {
  test: /\.css$/,
  loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
};

var jsxLoader = {
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/
};

var jsonLoader = {
  test: /\.json$/,
  loader: 'json-loader'
};

var fontLoader = {
  test: /\.woff$/,
  loader: 'url?limit=50000'
};

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, paths.APP, 'main.js')],
  target: 'node',
  output: {
    path: path.join(__dirname, paths.BUILD),
    publicPath: path.join(__dirname, paths.BUILD),
    filename: 'bundle.js'
  },
  module: {
    loaders: [jsxLoader, fontLoader, cssLoader, jsonLoader]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "\"development\"",
      'global': {}
    })
  ]
};
