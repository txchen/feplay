var webpack = require('webpack')

module.exports = {
    cache: true,
    entry: './src/index.js',
    output: {
        path: './dist/',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    plugins: [
      new webpack.ProvidePlugin({
        riot: 'riot'
      })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.html$/, loader: 'riotjs-loader' }
        ]
    },
    devServer: {
        port: 5555
    },
    devtool: "#inline-source-map"
}
