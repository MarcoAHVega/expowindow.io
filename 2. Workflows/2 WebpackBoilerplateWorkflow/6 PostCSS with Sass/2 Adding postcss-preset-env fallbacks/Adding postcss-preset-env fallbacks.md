# https://youtu.be/SH6Y_MQzFVw time: 25:38

- > install postcss-preset-env

  ```
  npm i -D postcss-preset-env

  ```

- > in the postcss.config.js file, add it to the plugins array

  ```js
  module.exports = {
    plugins: [require('autoprefixer'), require('postcss-preset-env')],
  }
  ```

- > at the root of the project folder, create a .browserslistrc file

  in order to get a little more cross-browser control

  ```json
  last 2 versions
  > 0.5%
  IE 10
  ```

  so this is the browser setup that we want to support
