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
  APP: './app'
}

module.exports = {
  entry: path.join(__dirname, paths.APP, 'main.js'),
  target: 'node',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [jsxLoader, cssLoader, jsonLoader]
  }
};
