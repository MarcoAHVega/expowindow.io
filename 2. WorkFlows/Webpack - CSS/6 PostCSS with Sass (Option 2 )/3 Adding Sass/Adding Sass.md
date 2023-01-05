# Adding Sass to the project

- > install sass and sass-loader

  ```
  npm install sass sass-loader
  ```

- > in web pack.config.js file

  - change the test rule from test: /\.css$/i, to test: /\.scss$/i,,

  - and add the sass-loader

  ```js
    watch: true,
    module: {
        rules: [
          {
              test: /\.scss$/i,
              use: ['style-loader','css-loader', 'postcss-loader', 'sass-loader']
          }
        ]
    }
  }
  ```

- > rename styles.css to styles.scss

- > in the App.js file, update the name of the .scss file we are importing

  ```js
  import '../styles/styles.scss'
  ```

- > in the styles.scss, test if sass is working by creating a variable

  ```css
  $main-red: red;

  body {
    h1 {
      color: $main-red;
    }
  }
  ```

- > Lest take our project for a test

  ```
  npm run dev

  ```

  - our text should change to red after we refresh the browser
