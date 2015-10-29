var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js'
  },
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
