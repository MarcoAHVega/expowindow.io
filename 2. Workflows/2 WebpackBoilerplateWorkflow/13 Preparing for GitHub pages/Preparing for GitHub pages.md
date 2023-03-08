## Preparing for GitHub pages

- > there's a few changes I want to make first

  - in the app folder, delete the about.html and the contact.html, unless you need them

  - since we are using the github pages service they require the public folder be named docs, to fix that...

  - manually delete the entire dist folder

  - in the webpack.config.js file, tell it to output to docs instead of dist, in two locations.

  ```js
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')
  const { CleanWebpackPlugin } = require('clean-webpack-plugin')
  const MiniCssExtractPlugin = require('mini-css-extract-plugin')
  const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const fse = require('fs-extra')

  class RunAfterCompile {
    apply(compiler) {
      compiler.hooks.done.tap('Copy images', function () {
        fse.copySync('./app/assets/images', './docs/assets/images')
      })
    }
  }

  let cssConfig = {
    test: /\.scss$/i,
    use: ['css-loader', 'postcss-loader', 'sass-loader'],
  }

  let pages = fse
    .readdirSync('./app')
    .filter(function (file) {
      return file.endsWith('.html')
    })
    .map(function (page) {
      return new HtmlWebpackPlugin({
        filename: page,
        template: `./app/${page}`,
      })
    })

  let config = {
    entry: './app/assets/scripts/App.js',
    plugins: pages,
    module: {
      rules: [cssConfig],
    },
  }

  if (currentTask == 'dev') {
    cssConfig.use.unshift('style-loader')
    config.output = {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'app'),
    }
    config.devServer = {
      watchFiles: './app/**/*.html',
      static: path.join(__dirname, 'app'),
      hot: true,
      port: 3000,
      host: '0.0.0.0',
    }
    config.mode = 'development'
  }

  if (currentTask == 'build') {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    })

    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    config.output = {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'docs'),
    }
    config.mode = 'production'
    config.optimization = {
      splitChunks: { chunks: 'all' },
      minimize: true,
      minimizer: [`...`, new CssMinimizerPlugin()],
    }
    config.plugins.push(
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' }),
      new RunAfterCompile()
    )
  }

  module.exports = config
  ```

- > save this file and run a fresh build process

  ```
  npm run build
  ```

  - so if we check our folder cool we have app and `instead of dist now we have docs`

- > let's use git to push up our changes

  ```
  git add -A

  git commit -m 'completed our build process configuration.'

  git push origin master
  ```
