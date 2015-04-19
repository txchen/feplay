var webpack = require('webpack')

module.exports = {
  cache: true,
  entry: './src/index.js',
  output: {
    path: './dist/',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, include: /src/, loader: 'riotjs' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  devServer: {
    port: 7654
  },
  devtool: "source-map"
}
