const path = require('path');
const htmlPlugin = require ('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new htmlPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    })
  ]
}