const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseUrl = process.env.REMOTE ? 'https://9pkav51sk3.execute-api.us-east-1.amazonaws.com/dev' : 'http://localhost:3000'

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader'
        }]
      },
      {
        test: /\.svg$/,
        use: [ 'url-loader?mimetype=image/svg+xml' ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(baseUrl)
    }),
    new HtmlWebpackPlugin()
  ]
}
