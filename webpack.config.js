var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'app'),
    filename: '[name].js'
  },
  module: {
    loaders:[
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
      }
    ]
  }
}

