# Adding Sass to the project

_install `sass` and `sass-loader`_

```js
npm install sass sass-loader
```

> `sass-loader` allows sass to work with `webpack`

_Now that we've downloaded those two packages_

> jump into your `web pack.config.js` file

> change the test rule from `test: /\.css$/i,` to `test: /\.scss$/i,`,

> and add the `sass-loader`

```js
  watch: true,
  module: {
      rules: [
        {
            test: /\.scss$/i,
            use: ['style-loader','css-loader?url=false', 'postcss-loader', 'sass-loader']
        }
      ]
  }
}
```

> rename `styles.css` to `styles.scss`

> make sure to update the name of the `.scss` file we are importing in our App.js file

```js
import '../styles/styles.scss'
```

> test if sass is working by creating a variable inside `styles.scss`

```scss
$main-red: red;

body {
  h1 {
    color: $main-red;
  }
}
```

> Lest take our project for a `test`

```js
npm run dev

```

> our text should change to red after we refresh the browser
