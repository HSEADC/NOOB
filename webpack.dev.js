const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dev_build',
    historyApiFallback: {
            rewrites: [
                { from: /./, to: './http-codes/404.html' }, // Перенаправляем все неизвестные маршруты на 404.html
            ],
        },
        port:3000,
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dev_build'),
    clean: true
  }
})
