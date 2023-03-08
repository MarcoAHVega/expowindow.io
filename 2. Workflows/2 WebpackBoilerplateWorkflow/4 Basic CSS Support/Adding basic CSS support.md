# Adding basic CSS support in 3 steps

- > in the App.js file,import our styles.css

  ```js
  import '../styles/styles.css'
  ```

  - - webpack will manage all css and javascript `from our App.js` file.

    - Remember App.js is webpack's entry point

- > install css-loader and style-loader to add CSS support to webpack

  ```
    npm install css-loader style-loader --save-dev
  ```

  - - css-loader will allow webpack to import and understand our styles.css file from within App.js file and add it to our bundled.js file

    - style-loader will allow us to apply the css styles in the bundled.js file to the browser

- > in the webpack.config.js file, configure webpack to use css-loader and style-loader

  - add a comma after the `watch: true`,
  - and add the `module:` property with `rules: test: and use:`

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
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  }
  ```

- > in the App.js file
- delete the test alert() line
