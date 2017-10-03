const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: __dirname,
  entry: './src/app.jsx',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'build/public'),
    filename: 'app.js'
  },
  devServer: {
    publicPath: '/build/public',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'First',
        hash: true,
        template: 'src/index.ejs'
      })
  ]
};
