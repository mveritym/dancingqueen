var webpack = require('webpack');
var path = require('path');

var cssLoader = {
  test: /\.css$/,
  loader: 'style!css'
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

var paths = {
  APP: './app',
  BUILD: './build'
}

module.exports = {
  entry: path.join(__dirname, paths.APP, 'main.js'),
  target: 'node',
  output: {
    path: path.join(__dirname, paths.BUILD),
    publicPath: path.join(__dirname, paths.BUILD),
    filename: 'bundle.js'
  },
  module: {
    loaders: [jsxLoader, cssLoader, jsonLoader]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "\"development\""
    })
  ]
};
