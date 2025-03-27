const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    eyes: "./src/js/eyes.js",
    form: "./src/js/form.js",
    tests: "./src/tests/test1.js",
    tests_typography: "./src/tests/test_typography.js",
    tests_freelance: "./src/tests/test_freelance.js",
    filterTags: "./src/js/articleTags.js",
    filterTagsMini: "./src/js/miniguidTags.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "docs"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        resourceQuery: /raw/,
        type: "asset/source",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),

    // Главная "Index"
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["index", "eyes", "form"],
    }),

    // "Mini_guide"
    new HtmlWebpackPlugin({
      template: "./src/mini_guide.html",
      filename: "mini_guide.html",
      chunks: ["filterTagsMini", "index"],
    }),

    // Статьи "Articles"
    new HtmlWebpackPlugin({
      template: "./src/articles.html",
      filename: "./articles.html",
      chunks: ["filterTags"],
    }),

    // Словарик "Dictionary"
    new HtmlWebpackPlugin({
      template: "./src/dictionary.html",
      filename: "./dictionary.html",
      chunks: ["index"],
    }),

    // "About us"
    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "./about.html",
      chunks: ["index"],
    }),

    // "Tests"
    new HtmlWebpackPlugin({
      template: "./src/styleguide.html",
      filename: "./styleguide.html",
      chunks: ["index"],
    }),

    //ПРИМЕРЫ СТАТЕЙ
    // Публикации в разделе статьи "articles"
    new HtmlWebpackPlugin({
      template: "./src/articles/networking.html",
      filename: "./articles/networking.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/articles/design_case.html",
      filename: "./articles/design_case.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/articles/social_media.html",
      filename: "./articles/social_media.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/articles/how_not_to_get_tired.html",
      filename: "./articles/how_not_to_get_tired.html",
      chunks: ["index", "tests"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/articles/success_story.html",
      filename: "./articles/success_story.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/articles/competitions.html",
      filename: "./articles/competitions.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/articles/internship.html",
      filename: "./articles/internship.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/articles/freelance_place.html",
      filename: "./articles/freelance_place.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/articles/typography.html",
      filename: "./articles/typography.html",
      chunks: ["index", "tests_typography"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/articles/study_and_work.html",
      filename: "./articles/study_and_work.html",
      chunks: ["index", "tests_freelance"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/articles/books.html",
      filename: "./articles/books.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/articles/trends.html",
      filename: "./articles/trends.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/articles/advise.html",
      filename: "./articles/advise.html",
      chunks: ["index", "tests_typography"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/articles/mentor.html",
      filename: "./articles/mentor.html",
      chunks: ["index", "tests_freelance"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/articles/criticism.html",
      filename: "./articles/criticism.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/articles/time_control.html",
      filename: "./articles/time_control.html",
      chunks: ["index"],
    }),

    // Публикации в разделе архив "Mini_guide"
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/plagin1.html",
      filename: "./mini_guide/plagin1.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/plagin2.html",
      filename: "./mini_guide/plagin2.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/plagin3.html",
      filename: "./mini_guide/plagin3.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/neuros.html",
      filename: "./mini_guide/neuros.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/mockups.html",
      filename: "./mini_guide/mockups.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/fonts.html",
      filename: "./mini_guide/fonts.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/mini_guide/inspiration.html",
      filename: "./mini_guide/inspiration.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/telegram_chanel.html",
      filename: "./mini_guide/telegram_chanel.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/moodboard.html",
      filename: "./mini_guide/moodboard.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/design_studios.html",
      filename: "./mini_guide/design_studios.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/mini_guide/hot_keys.html",
      filename: "./mini_guide/hot_keys.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/mini_guide/foreign.html",
      filename: "./mini_guide/foreign.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/good_bad_presentation.html",
      filename: "./mini_guide/good_bad_presentation.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/font_cirilic.html",
      filename: "./mini_guide/font_cirilic.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/mini_guide/movie.html",
      filename: "./mini_guide/movie.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/mini_guide/photostock.html",
      filename: "./mini_guide/photostock.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/mini_guide/ui_kit.html",
      filename: "./mini_guide/ui_kit.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mini_guide/icons.html",
      filename: "./mini_guide/icons.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/mini_guide/color_palette.html",
      filename: "./mini_guide/color_palette.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/mini_guide/brouser.html",
      filename: "./mini_guide/brouser.html",
      chunks: ["index"],
    }),

    // Публикации в разделе словарик "dictionary"
    new HtmlWebpackPlugin({
      template: "./src/dictionary/word1.html",
      filename: "./dictionary/word1.html",
      chunks: ["index"],
    }),

    // Страницы ошибки
    new HtmlWebpackPlugin({
      template: "./src/http-codes/404.html",
      filename: "./http-codes/404.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/http-codes/505.html",
      filename: "./http-codes/505.html",
      chunks: ["index"],
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/partials/analytics.html"),
        location: "analytics",
        template_filename: "*",
        priority: "replace",
      },
    ]),
  ],

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
