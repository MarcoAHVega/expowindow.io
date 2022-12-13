# Webpack Dev Server And JS hot reload

_install `webpack-dev-server` to have css and js hot reload_

> now let me show you how to begin using it. (`Webpack dev server`.)

```js
npm install webpack-dev-server --save-dev
```

_add the `devServer:` property to our webpack configuration_

> Now that we've installed the package `we need to leverage it`.

> go into our `webpack.config,js` file

> We want to add a new property: `devServer: {}` in module.export

this is where we `point towards the folder or directory that we want webpack to serve up`.

`static:` property - for the path

`hot: true,` property

> `hot:` is what's going to allow Webpack to inject our new CSS and JavaScript into the browser's memory on the fly without even needing a reload or refresh.

port: 3000 property

> `port:` This would have a value of `8080` by default but we're setting it to `3000` just because I think it's a bit easier to remember.

> we no longer need this `watch` property. So I would just `delete this entire watch: true line`

```js
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
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader?url=false',
          {loader: 'postcss-loader', options: {plugins: postCSSPlugins}},
        ],
      },
    ],
  },
}
```

_edit the "dev": script in the package.Jason File_

> jump into our `package.Jason` File

> within package.Jason find the `scripts` area.

> we have this NPM script named `"dev":`

> we just want to change what it actually runs.

> So instead of calling Webpack we want it to call `webpack serve`

```json
   {
"name": "travel-site",
"version": "1.0.0",
"scripts": {
^     "dev": "webpack serve",
   "test": "echo \"Error: no test specified\" && exit 1"
},
```

_we need to go into our main JavaScript file (`App.js`) and tell it to accept hot module replacements:_

```js
import '../styles/styles.css'

if (module.hot) {
  module.hot.accept()
}
```

_now `we can test everything` out:_

```js
npm run dev
```

> And now to check things out in the web browser we do `need to visit a different U.R.L.` :

localhost:3000

_let's test things out to `make sure` `webpack ` can actually `update our code without a full page reload`._

> So go ahead and select a bit of text on the browser

> go into our `_global.CSS file` and change the h1 color to blue

> Now as soon as we hit save. Back in the browser we don't need to refresh and you can see the web browser itself didn't even refresh because `our text selection is still in place`.

_(item number two is) to `set things up` so that whenever we save a change to our `HTML file` the browser reloads on its own_

> jump back into our `webpack.config.js` file go ahead and find your `devServer: {}` object within it.

> add one more property `inside` devServer{} named `before:`

> and we're actually going to give it a `function`.

```js
devServer: {
   before: function(app, server) {
      server._watch('./app/**/*.html')
   },
   static: path.join(__dirname, 'app'),
   hot: true,
   port: 3000
},
```

this function tells it to watch for any file that `ends with .html`

> don't forget to `stop` and `restart` the `npm run dev`

_(our third and final task). We want to be able to `view our website on any device connected to our Wi-Fi` or our network_

> this way. It's really `simple to test our website on a small screen` like a smartphone or tablet.

> jump into our `webpack.config.js` file

> within our `devServer:` object maybe right `below the port line` lets `add a comma` at that line `add a new line` and we just need to give it a property of `host: '0.0.0.0`'

```js
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
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader?url=false',
          {loader: 'postcss-loader', options: {plugins: postCSSPlugins}},
        ],
      },
    ],
  },
}
```

> And then since we have a new Webpack configuration let's `restart the web pack task`.

```js
npm run dev
```

_we need to find the `local IP address` of the computer you're working on._

> if you're on Mac just go into your `system preferences` and then click on the `network` icon and then towards the top of the right hand column you should see a bit of text and it will say which `network` you're on and it will also include an IP address that's your local IP.

> If you're on Windows to find your local IP address go to the command line and run the following command $ `ipconfig` Press enter the command line will output a bunch of text you're looking for the one that's called `IPv4 address` to the right of that you'll see an IP and again it should begin with `1 9 2 1 6 8` and then a number separated by a period and another number.

> on your smartphone `type that IP address number` that we just found into the address bar and at the end of it add `in 192.168.1.73:3000`
