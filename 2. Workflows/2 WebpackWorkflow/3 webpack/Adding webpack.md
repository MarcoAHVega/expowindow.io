# Adding webpack

- > install webpack and webpack-cli

  ```
  npm install webpack webpack-cli --save-dev
  ```

  -
  - we will use `Webpack` to set up `an automated CSS workflow`

  - So tools like sass and less and stylists or PostCSS let us write CSS the way we wish we could write it even though it won't work in a web browser. (autoprefixer for different browsers, variables for hex colors, nested CSS)

  - And then these tools pass our code through a filter that spits out a new file and in that new file it automatically converts our code into regular CSS That will work in Web browsers.

- > inside the webpack.config.js file, add an entry point

  ```js
  module.exports = {
    entry: './app/assets/scripts/App.js',
  }
  ```

- > in the package.Jason file, add the dev script for webpack

  ```js
  "scripts": {
      "dev": "webpack",
  ```

- > inside the webpack.config.js file, add an output

  ```js
  const path = require('path')

  module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'app'),
    },
  }
  ```

  we want our new js file to be called `bundled.js` and we want it to live `inside our app folder`

- > inside the webpack.config.js file, set the mode to development and set the watch option to true

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
  }
  ```

- > in the index.html file, use the script tag to link it with our bundled.js

  ```html
    <script src="bundled.js"></script>
  </body>
  </html>
  ```

  webpack outputs everything as javascript thru our bundled.js file

- > now we can have webpack to run our project

  ```
  npm run dev
  ```

- > open the index.html in the browser for testing

  - Reveal in Explorer/open with Chrome

  - you should see the `alert` from App.js and the `test h1` from index.html

  - now because we told web pack to watch our files for us it's going to continue to run in the command line until we tell it to stop.

  - So when we are ready for the webpack task `to stop watching us` in your command line you just press the\_`control + c `
