module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
      path: __dirname,
      filename: 'bundle.js'
    },
  module: {
      loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test:  /\.json$/, loader: 'json-loader' }
        ]
    }
};
