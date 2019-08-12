const path = require('path');
const textPlugin = require ('extract-text-webpack-plugin');
const htmlPlugin = require ('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: textPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new textPlugin({
      filename: 'style.css'
    }),
    new htmlPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    })
  ]
}