# Webpack Dev Server And JS hot reload

- > install webpack-dev-server to have css and js hot reload

  ```
  npm install webpack-dev-server --save-dev
  ```

- > in the webpack.config.js file, add the `devServer:` property with

  devServer: {
  static: path.join(\_\_dirname, 'app'),
  hot: true,
  port: 3000,

  ```js
  const path = require('path')

  module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'app'),
    },
    devServer: {
      static: path.join(__dirname, 'app'),
      hot: true,
      port: 3000,
    },
    mode: 'development',
    watch: true,
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
  }
  ```

- > we no longer need this `watch` property. So I would just delete this entire watch: true line

  ```js
  const path = require('path')

  module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'app'),
    },
    devServer: {
      static: path.join(__dirname, 'app'),
      hot: true,
      port: 3000,
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
  }
  ```

- > in the package.Jason File, edit the "dev": script

  So instead of calling Webpack we want it to call `webpack serve`

  ```json
    {
  "name": "travel-site",
  "version": "1.0.0",
  "scripts": {
  ^     "dev": "webpack serve",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```

- > in the App.js file and tell it to accept hot module

  ```js
  import '../styles/styles.css'

  if (module.hot) {
    module.hot.accept()
  }
  ```

- > now we can test everything out:

  ```
  npm run dev
  ```

- > And now to check things out in the web browser we do `need to visit a different U.R.L.` :

localhost:3000

- > to set things up so that whenever we save a change to our HTML file the browser reloads on its own

- jump back into our `webpack.config.js` file go ahead and find your `devServer: {}` object within it.

- add one more property `inside` devServer{} named `watchFiles: ('./app/**/*.html'),`

```js
devServer: {
   watchFiles: ('./app/**/*.html'),
   static: path.join(__dirname, 'app'),
   hot: true,
   port: 3000
},
```

- this function tells it to watch for any file that `ends with .html`

> don't forget to `stop` and `restart` the `npm run dev`

- > We want to be able to view our website on any device connected to our Wi-Fi or our network\_

- this way. It's really `simple to test our website on a small screen` like a smartphone or tablet.

- jump into our `webpack.config.js` file

> within our `devServer:` object maybe right `below the port line` lets `add a comma` at that line `add a new line` and we just need to give it a property of `host: '0.0.0.0',`

```js
const path = require('path')

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app'),
  },
  devServer: {
    static: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
}
```

- > And then since we have a new Webpack configuration let's `restart the web pack task`.

```js
npm run dev
```

- > we need to find the `local IP address` of the computer you're working on.\_

- if you're on Mac just go into your `system preferences` and then click on the `network` icon and then towards the top of the right hand column you should see a bit of text and it will say which `network` you're on and it will also include an IP address that's your local IP.

- If you're on Windows to find your local IP address go to the command line and run the following command $ `ipconfig` Press enter the command line will output a bunch of text you're looking for the one that's called `IPv4 address` to the right of that you'll see an IP and again it should begin with `1 9 2 1 6 8` and then a number separated by a period and another number.

- on your smartphone `type that IP address number` that we just found into the address bar and at the end of it add `in 192.168.1.73:3000`
