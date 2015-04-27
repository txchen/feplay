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
        loaders: [
            { test: /\.css$/, include: /src/, loader: 'style!css' },
            { test: /\.html$/, include: /src/, loader: 'riotjs' },
            { test: /\.js$/, include: /src/, loader: 'babel', query: {modules: 'common'} }
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
