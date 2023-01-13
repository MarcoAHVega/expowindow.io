# Adding PostCSS autoprefixer plugin

- > install the postCSS autoprefixer plugin

  similar to npm, when you use postCSS you can choose the package or plugins that you want to install and use.

  ```
  npm install autoprefixer --save-dev
  ```

- > in the postcss.config.js, require this package within our array

  ```js
  module.exports = {
    plugins: [require('autoprefixer')],
  }
  ```
