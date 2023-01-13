# Adding pastCSS support

- > install postcss and postcss-loader

  ```
  npm install postcss postcss-loader --save-dev
  ```

- > in the webpack.config.js, configure webpack to use postCSS

  - add 'postcss-loader' to use:

  ```js
  const path = require('path')

  module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'app'),
    },
    mode: 'development',
    watch: true,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
  }
  ```

- > at te root of the project create a postcss.config.js file

- inside this postcss.config.js file, create a config object that is just related to postcss plugins

  ```js
  module.exports = {
    plugins: [],
  }
  ```
