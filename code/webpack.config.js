const path = require('path');

module.exports = {
  entry: './src/client/app.js',
  output: {
    path: path.join(__dirname, 'public/build'),
    // -> $PROJECT_ROOT/public/build/...
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/build/',
  },
};
