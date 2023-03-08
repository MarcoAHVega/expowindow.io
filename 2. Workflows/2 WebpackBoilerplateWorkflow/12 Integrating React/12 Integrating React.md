# 12 Integrating React

- > install react and react-dom

  ```
  npm install react react-dom --save-dev

  npm install react react-dom
  ```

- > Now let's go leverage those packages

  ```js
  import '../styles/styles.scss'
  import TestJsFeature from './modules/TestJsFeature'

  // React Related Code Goes Here
  import React from 'react'
  import ReactDOM from 'react'

  let testJsFeature = new TestJsFeature()

  if (module.hot) {
    module.hot.accept()
  }
  ```

- > we need to add an empty div somewhere within our html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>This is a test!</h1>
      <div id="root"></div>
    </body>
  </html>
  ```

- > back in the App.js file, use createRoot() to render the `<TestReactComponent />`

  ```js
  import '../styles/styles.scss'
  import TestJsFeature from './modules/TestJsFeature'

  // React Related Code Goes Here
  import React from 'react'
  import ReactDOM from 'react-dom/client'

  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<TestReactComponent />)

  let testJsFeature = new TestJsFeature()

  if (module.hot) {
    module.hot.accept()
  }
  ```

- > create the `<TestReactComponent />`

  ```js
  import '../styles/styles.scss'
  import TestJsFeature from './modules/TestJsFeature'

  // React Related Code Goes Here
  import React from 'react'
  import ReactDOM from 'react-dom/client'

  function TestReactComponent() {
    return (
      <div>
        <h1>This is My Amazing React Component</h1>
        <p>React is great!</p>
      </div>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<TestReactComponent />)

  // React code end here

  let testJsFeature = new TestJsFeature()

  if (module.hot) {
    module.hot.accept()
  }
  ```

- > install @babel/preset-react

  ```
  npm install @babel/preset-react --save-dev
  ```

- > in the webpack.config.js file, we want to apply the react babel tool to both our dev and build workflows

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
      rules: [
        cssConfig,
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        },
      ],
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

- > save this and let's fire up our npm run dev

  ```
  npm run dev
  ```

- > in the modules folder, create a .jsx file for the test component

  ```
  modules/
    TestReactComponent.jsx
  ```

- > inside the TestReactComponent.jsx file, cut end paste the component function, add the export default and import react at the top

  ```jsx
  import React from 'react'

  function TestReactComponent() {
    return (
      <div>
        <h2>This is the Test React Component</h2>
        <p>React is great!</p>
      </div>
    )
  }

  export default TestReactComponent
  ```

- > back in the App.js, import the component at top

  - make sure the file has the .jsx ending

  ```js
  import '../styles/styles.scss'
  import TestJsFeature from './modules/TestJsFeature'
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import TestReactComponent from './modules/TestReactComponent.jsx'

  let testJsFeature = new TestJsFeature()

  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<TestReactComponent />)

  if (module.hot) {
    module.hot.accept()
  }
  ```

- > also in the webpack.config.js file change the configuration so it look for js and jsx files

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
      rules: [
        cssConfig,
        {
          test: [/\.js$/, /\.jsx$/],
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        },
      ],
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

- > save and test

  ```
  npm run dev
  ```
