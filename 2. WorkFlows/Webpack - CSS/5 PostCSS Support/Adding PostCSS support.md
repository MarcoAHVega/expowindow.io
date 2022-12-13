# Adding pastCSS support

_Postcss `with a postcss.config.js` file_

_We are going to use something called `PostCSS`_

_step 1 : install `postcss` and `postcss-loader`_

> let's `download postcss and the postCSS loader` for webpack

```js
npm install postcss postcss-loader --save-dev
```

_step 2 : configure webpack to use postCSS_

> Now let's go `Leverage that loader`.
>
> jump back into our `webpack.config.js` file and add `'postcss-loader'` to` use:`

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

_create a `postcss.config.js` file at te root of the project_

_inside this postcss.config.js file we will create `a config object` that is just related to postcss plugins_

```js
module.exports = {
  plugins: [],
}
```
