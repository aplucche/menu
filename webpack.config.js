const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './static/index.js',
  output: {
    path: path.resolve(__dirname, 'static/'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'static',
    proxy: {
      '/api/**': {
        target: 'http://localhost:8080'
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};