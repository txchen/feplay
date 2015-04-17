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
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    devServer: {
        port: 5555
    }
}
