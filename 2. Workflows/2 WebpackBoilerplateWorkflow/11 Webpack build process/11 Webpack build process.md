# Webpack build process

- > in the package.json file, create a build script

  ```json
    "scripts": {
      "dev": "webpack-dev-server",
      "build": "webpack",   ////
      "test": "echo \"Error: no test specified\" && exit 1"
  ```

  - NPM run build will be a task that just runs once. It's going to generate the alternate copy of our Web site and then it's done.

- > in the webpack.config.js, configure web Park differently depending on whether it's dev or build.

  - create the currentTask variable

  ```js
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')

  module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'app'),
    },
    ....
  ```

  - from this point there are a million different ways you could organize this code to be different for the two scenarios. But `let me show you how I would do it.`

  ```js
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')

  let config = {
    entry: './app/assets/scripts/App.js',
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
  }

  if (currentTask == 'dev') {
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
    config.output = {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'dist'),
    }
    config.mode = 'production'
  }

  module.exports = config
  ```

- > go ahead and save this file and let's test out our two NPM scripts

  ```
  npm run dev
  ```

  - the website should be available from http://localhost:3000

  - so we know that our dev task is working so `we can stop that task in the command line`

  - Let's test out our build task

  ```
  npm run build
  ```

  - in the directory where you would find your app folder we should now also see a brand new automatically generated folder named `dist`.

- > enable the optimization webpack feature for our build task

  ```js
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')

  let config = {
    entry: './app/assets/scripts/App.js',
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
  }

  if (currentTask == 'dev') {
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
    config.output = {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'dist'),
    }
    config.mode = 'production'
    config.optimization = {
      splitChunks: { chunks: 'all' },
    }
  }

  module.exports = config
  ```

  - let's go ahead and save this and let's run our` NPM run build` task again.

  ```
  npm run build
  ```

  - this time webpack will create another bundled.js file containing all `the vendors code` that the users don't need to download.

- > change the config.build to generate chunkhash file names

  ```js
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')

  let config = {
    entry: './app/assets/scripts/App.js',
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
  }

  if (currentTask == 'dev') {
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
    config.output = {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
    }
    config.mode = 'production'
    config.optimization = {
      splitChunks: { chunks: 'all' },
    }
  }

  module.exports = config
  ```

  So imagine we make a change to our RevealOnScroll.js file and then we need to create a new bundle. Well we'd probably want that new bundle there generated file to in some way have a slightly different file name.

  So the web browser would know that it's different that it's changed and that it should re download the file from the server instead of using its own local cached copy.

  - before we run our build task in the command line, `delete the bundled.js file in the disk folder `

  ```
  dist/
    bundled.js // delete
  ```

  - run npm run build

  ```
  npm run build
  ```

  So we see two new changes instead of every file having just the basic name of bundled bundled one bundled two. Now we actually see their names right. Main modal the vendor's file for the main file.

  And then after that name we also see a string of characters that is the chunk hash.

- > let's set things up so that every time we run our build process it begins by completely deleting this folder

  so that then only the most recent latest copies of each file exist.

- > install the clean-webpack-plugin

  ```
  npm install clean-webpack-plugin --save-dev
  ```

  - in the webpack.config.js file let's leverage that new plug in up at the very top.

  ```js
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')
  const { CleanWebpackPlugin } = require('clean-webpack-plugin')
  ....
  ```

  - and add it to the build config

  ```js
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')
  const { CleanWebpackPlugin } = require('clean-webpack-plugin')

  let config = {
    entry: './app/assets/scripts/App.js',
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
  }

  if (currentTask == 'dev') {
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
    config.output = {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
    }
    config.mode = 'production'
    config.optimization = {
      splitChunks: { chunks: 'all' },
    }
    config.plugins = [new CleanWebpackPlugin()]
  }

  module.exports = config
  ```

  - And now let's run a fresh build process. So in the command line `NPM run build`

  ```
  npm run build
  ```

  And here we see the brand new latest copy of our main bundle with a new chunk cash value

- > extracting the CSS out of this main bundle into its own CSS file

  That way if we make a change to our CSS it doesn't force our visitors to have to download the entire bundle again. They could just re download the CSS file

  - install the mini-css-extract-plugin

  ```
  npm install mini-css-extract-plugin --save-dev
  ```

  - in the webpack.config.js file, import and add it in two different locations

  ```js
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')
  const { CleanWebpackPlugin } = require('clean-webpack-plugin')
  const MiniCssExtractPlugin = require('mini-css-extract-plugin')

  let cssConfig = {
    test: /\.scss$/i,
    use: ['css-loader', 'postcss-loader', 'sass-loader'],
  }

  let config = {
    entry: './app/assets/scripts/App.js',
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
    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    config.output = {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
    }
    config.mode = 'production'
    config.optimization = {
      splitChunks: { chunks: 'all' },
    }
    config.plugins = [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' }),
    ]
  }

  module.exports = config
  ```

  - save this and test out our new build process

  ```
  npm run build
  ```

  - Let's go check our dist folder. Perfect (Here we see a separate traditional CSX SS file)

- > set things up so this file is minified or compressed

  - install the css-minimizer-webpack-plugin

  ```
  npm install css-minimizer-webpack-plugin --save-dev
  ```

  - and in the webpack.config.js, require it and add it during our build task

  ```js
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')
  const { CleanWebpackPlugin } = require('clean-webpack-plugin')
  const MiniCssExtractPlugin = require('mini-css-extract-plugin')
  const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

  let cssConfig = {
    test: /\.scss$/i,
    use: ['css-loader', 'postcss-loader', 'sass-loader'],
  }

  let config = {
    entry: './app/assets/scripts/App.js',
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
    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    config.output = {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
    }
    config.mode = 'production'
    config.optimization = {
      splitChunks: { chunks: 'all' },
      minimize: true,
      minimizer: [`...`, new CssMinimizerPlugin()],
    }
    config.plugins = [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' }),
    ]
  }

  module.exports = config
  ```

  - Let's go ahead and save this file. And now let's run our build process again

  ```
  npm run build
  ```

  and see how many kilobytes we saved on that CSS file.

- > let's set things up so that it also copies over our HTML from the app folder.

  - in the index.html file, delete this script tag

    ```html
    <script src="bundled.js"></script>
    ```

  our file names are unpredictable how are we going to load the assets in our html now?

  we can use a very popular Web pack plugin to save the day.

  - install the html-webpack-plugin

  ```
  npm install html-webpack-plugin --save-dav
  ```

  - in the webpack.config.js, let's go leverage that plugin

  we want to leverage this plug in for both our dev and our build tasks

  ```js
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')
  const { CleanWebpackPlugin } = require('clean-webpack-plugin')
  const MiniCssExtractPlugin = require('mini-css-extract-plugin')
  const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')const HtmlWebpackPlugin = require('html-webpack-plugin')

  let cssConfig = {
    test: /\.scss$/i,
    use: ['css-loader', 'postcss-loader', 'sass-loader'],
  }

  let config = {
    entry: './app/assets/scripts/App.js',
    plugins: [new HtmlWebpackPlugin({filename: 'index.html', template: './app/index.html'})],
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
    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    config.output = {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
    }
    config.mode = 'production'
    config.optimization = {
      splitChunks: { chunks: 'all' },
      minimize: true,
      minimizer: [`...`, new CssMinimizerPlugin()],
    }
    config.plugins.push(new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' }),
  )
  }

  module.exports = config
  ```

  - Let's go ahead and save this file and `test it out

  ```
  npm run build
  ```

  - we can open with live server to test it

- > Setting up webpack to work with multiple html pages

  - right now we just have index.html but I want you to `copy and paste or duplicate this file.`

  So just create a duplicate copy of it and I will name to duplicate copy `about.html` and then you can even duplicate that and name the third copy `contact.html`

  - install the package fs-extra

  ```
  npm install fs-extra --save-dev
  ```

  - in the webpack.config.js file, import add it

  ```js
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')
  const { CleanWebpackPlugin } = require('clean-webpack-plugin')
  const MiniCssExtractPlugin = require('mini-css-extract-plugin')
  const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const fse = require('fs-extra')

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
    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    config.output = {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
    }
    config.mode = 'production'
    config.optimization = {
      splitChunks: { chunks: 'all' },
      minimize: true,
      minimizer: [`...`, new CssMinimizerPlugin()],
    }
    config.plugins.push(
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' })
    )
  }

  module.exports = config
  ```

  - Let's go ahead and save this and test it out

  ```
  npm run build
  ```

  So now you're free to create different separate html pages

- > set things up so that our images or photographs get copied over to the dist folder

  - in the webpack.config.js file, we would only need to copy the images for our build task

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
        fse.copySync('./app/assets/images', './dist/assets/images')
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
    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    config.output = {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
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

  - Let's go ahead and save this and test it out

  ```
  npm run build
  ```

- > let's `set things up so that when we run our build task web pack adjusts our javascript so that it's backwards compatible

  - in our command line we need to install a few packages

  ```
  npm install @babel/core @babel/preset-env babel-loader --save-dev
  ```

  - in our webpack.config file, let's go leverage these packages

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
        fse.copySync('./app/assets/images', './dist/assets/images')
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
      path: path.resolve(__dirname, 'dist'),
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

  - OK let's go ahead and save this and just run one more build to make sure our javascript is still working

  ```
  npm run build
  ```
