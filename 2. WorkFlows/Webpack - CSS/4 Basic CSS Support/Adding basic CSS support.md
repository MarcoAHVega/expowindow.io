# Adding basic CSS support in 3 steps

_we actually want to load the styles.CSS file from within our main JavaScript file, so jump into our `App.js` file_

_step 1 : import our styles.css file into our App.js file_

> webpack will manage all css and javascript `from our App.js` file.

> Remember App.js is webpack's entry point

so at the top, `inside App.js` let's add a brand new line of code...

```js
import '../styles/styles.css'
```

_step 2 : install `css-loader` and `style-loader` to add `CSS support` to webpack_

> `css-loader` will allow webpack to import and understand our styles.css file from within App.js file and add it to our bundled.js file

> `style-loader` will allow us to apply the css styles in the bundled.js file to the browser

```js
  npm install css-loader style-loader --save-dev
```

_step 3 : `configure webpack` to use css-loader and style-loader_

> We can tell webpack what to do when it runs into certain files by adding a property named `module` and `rules`

webpack `module:` and `rules: []` properties

> the idea is that you can have multiple objects in this array where you tell Webpack to do something different depending on the file type.

`test:` property

> We want to tell Webpack what it should do if we run into a CSS file using this regular expression (/\.css$/i,)

`use:` property

> Now this is where we can leverage those packages that we just downloaded from NPM.

Now that we've downloaded those two packages let's go leverage them

- jump into your webpack.config.js` file
- add a comma after the `watch: true`,
- and add the `module:` property with `rules:`

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
        use: ['style-loader', 'css-loader?url=false'],
      },
    ],
  },
}
```

_Important Note_

> `By default`, the css-loader will attempt to handle any images we reference in our CSS, for our usage in this course we want to `disable` this and we'll manage our image files `manually`.

> With this in mind, when you list 'css-loader' in your webpack.config.js file you'll want to add an option to the end of it like this:

```js
css-loader?url=false
```

- (already included)

- SASS CONFLICT DELETE THIS `?url=false`

_Now that we've confirmed that the bundled JavaScript files loading in the browser `let's go get rid of this annoying alert message`._

> go within our `App.js` file and `delete the test alert() line`
