const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    eyes: './src/js/eyes.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Главная "Index"
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'eyes']
    }),

    // Архив "Archive"
    new HtmlWebpackPlugin({
      template: './src/archive.html',
      filename: './archive.html',
      chunks: ['index']
    }),

    // Статьи "Articles"
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index']
    }),

    // Мини-гайды "Mini-guides"
    new HtmlWebpackPlugin({
      template: './src/mini-guides.html',
      filename: './mini-guides.html',
      chunks: ['index']
    }),

     // Словарик "Dictionary"
     new HtmlWebpackPlugin({
      template: './src/dictionary.html',
      filename: './dictionary.html',
      chunks: ['index']
    }),

    // "About us"
    new HtmlWebpackPlugin({
    template: './src/about.html',
    filename: './about.html',
      chunks: ['index'] // Финальная версия файла
    }),

     // "Styleguide"
     new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html' ,
      chunks: ['index']
    }),

  //ПРИМЕРЫ СТАТЕЙ
    // Публикации в разделе статьи "articles"
    new HtmlWebpackPlugin({
      template: './src/articles/article1.html',
      filename: './articles/article1.html',
      chunks: ['index']
    }),

    // Публикации в разделе архив "archive"
    new HtmlWebpackPlugin({
      template: './src/archive/archive1.html',
      filename: './archive/archive1.html',
      chunks: ['index']
    }),

    // Публикации в разделе словарик "dictionary"
    new HtmlWebpackPlugin({
      template: './src/dictionary/word1.html',
      filename: './dictionary/word1.html',
      chunks: ['index']
    }),

     // Публикации в разделе МИНИ-ГАЙДЫ "Mini-guides"
     new HtmlWebpackPlugin({
      template: './src/mini-guides/guide1.html',
      filename: './mini-guides/guide1.html',
      chunks: ['index']
    }),

    // Публикации в разделе главная "index"
    new HtmlWebpackPlugin({
      template: './src/index/pages.html',
      filename: './index/pages.html',
      chunks: ['index']
    }),

    // Страница 404
     new HtmlWebpackPlugin({
      template: './src/http-codes/404.html',
      filename: './http-codes/404.html'
    }),



    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
    
  ],
  
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}