module.exports = {
  entry: './app/index.js',
  target: 'node',
  output: {
      path: __dirname,
      filename: 'bundle.js'
    },
  module: {
      loaders: [
            { test: /\.css$/, loader: 'style!css' },
            {
              test: /\.js?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ['es2015', 'react']
              }
            },
            { test:  /\.json$/, loader: 'json-loader' }
        ]
    }
};
