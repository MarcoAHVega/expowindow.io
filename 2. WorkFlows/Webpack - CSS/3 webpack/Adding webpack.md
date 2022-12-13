# Adding webpack

_we will use `Webpack` to set up `an automated CSS workflow`._

> So tools like sass and less and stylists or PostCSS let us write CSS the way we wish we could write it even though it won't work in a web browser. (autoprefixer for different browsers, variables for hex colors, nested CSS)

> And then these tools pass our code through a filter that spits out a new file and in that new file it automatically converts our code into regular CSS That will work in Web browsers.

_to add `webpack`, from the terminal, `install webpack and webpack-cli`, (command lime interface), into your project:_

```js
npm install webpack webpack-cli --save-dev
```

> inside `webpack.config.js` we tell webpack what to do.

_we want to give webpack `an entry point` to our project._

so inside webpack.config.js `we add`:

```js
module.exports = {
  entry: './app/assets/scripts/App.js',
}
```

_we need `create an npm script`, in the `package.Jason` file, so we can run webpack from the terminal_

- jump into our `package.Jason` file
- looking for a property named `"scrips":`
- within these scripts objects, at the top, add:

```js
"dev": "webpack",
```

_adding an `output:`_

> //Skip//so now if we run our new npm script on the terminal like this : $ `npm run dev`,

- webpack would `look in` our App.js file (entry point),
- process it and bundle it,
- and would create a new `dist folder` with a new `main.js` file.

> but we want to control these inside our `webpack.config.js` file by adding an `output:`

_so we want our new js file to be called `bundled.js` and we want it to live `inside our app folder`,_

so inside webpack.config.js `we add` (path //1) (output //2): (add a comma after ../App.js')

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

_we also have to: set the mode to development: `mode: 'development'` (//3) - and `set the watch option to true` (//4)_

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

_now we need to jump into our `index.html` file and use the script tag `to link` it with our bundled.js file:_

```html
   <script src="bundled.js"></script>
</body>
</html>
```

> webpack outputs everything as javascript thru our bundled.js file

_(`run and stop`) now we can have webpack to run our project using:_

```js
npm run dev
```

_open the index.html in the browser for testing `Reveal in Explorer/open with Chrome`_

> you should see the `alert` from App.js and the `test h1` from index.html

now because we told web pack to watch our files for us it's going to continue to run in the command line until we tell it to stop.

_So when we are ready for the webpack task `to stop watching us` in your command line you just press the_`control + c `
