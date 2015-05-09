var webpack = require('webpack')

module.exports = {
    cache: true,
    entry: {
      app: './src/index.js',
      vendor: './src/vendor.js',
    },
    output: {
      path: './dist/',
      publicPath: '/dist/',
      filename: 'bundle.js'
    },
    module: {
      preLoaders: [
        { test: /\.html$/, include: /src/, loader: 'riotjs' }
      ],
      loaders: [
        { test: /\.css$/, include: /src/, loader: 'style!css' },
        { test: /\.js|\.html$/, include: /src/, loader: 'babel?stage=1&blacklist=strict' }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        riot: 'riot'
      }),
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    devServer: {
        port: 5555
    },
    devtool: "source-map"
}
