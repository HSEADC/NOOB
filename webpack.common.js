const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Главная "Index"
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // Архив "Archive"
    new HtmlWebpackPlugin({
      template: './src/archive.html',
      filename: './archive.html'
    }),

    // Статьи "Articles"
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html'
    }),

    // Мини-гайды "Mini-guides"
    new HtmlWebpackPlugin({
      template: './src/mini-guides.html',
      filename: './mini-guides.html'
    }),

     // Словарик "Dictionary"
     new HtmlWebpackPlugin({
      template: './src/dictionary.html',
      filename: './dictionary.html'
    }),

  //ПРИМЕРЫ СТАТЕЙ
    // Публикации в разделе статьи "articles"
    new HtmlWebpackPlugin({
      template: './src/articles/article1.html',
      filename: './articles/article1.html'
    }),

    // Публикации в разделе архив "archive"
    new HtmlWebpackPlugin({
      template: './src/archive/archive1.html',
      filename: './archive/archive1.html'
    }),

    // Публикации в разделе словарик "dictionary"
    new HtmlWebpackPlugin({
      template: './src/dictionary/word1.html',
      filename: './dictionary/word1.html'
    }),

     // Публикации в разделе МИНИ-ГАЙДЫ "Mini-guides"
     new HtmlWebpackPlugin({
      template: './src/mini-guides/guide1.html',
      filename: './mini-guides/guide1.html'
    }),

    // Публикации в разделе главная "index"
    new HtmlWebpackPlugin({
      template: './src/index/about.html',
      filename: './index/about.html'
    }),

    
    // Internal pages
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/page.html',
    //   filename: './pages/page.html',
    //   chunks: ['page']
    // }),

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
