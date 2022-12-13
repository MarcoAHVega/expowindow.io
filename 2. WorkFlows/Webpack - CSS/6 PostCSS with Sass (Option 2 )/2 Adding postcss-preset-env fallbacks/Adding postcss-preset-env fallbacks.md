https://youtu.be/SH6Y_MQzFVw   time: 25:38

# install `postcss-preset-env`

```js
npm i -D postcss-preset-env

```

> add it to the plugins array inside the postcss.config.js file

```js
module.exports = {
  plugins: [ require('autoprefixer'),
             require('postcss-preset-env')
  ]
}
```

> create a `.browserslistrc` file  (at the root of the project folder) in order to get a little more cross-browser control

> inside this add:

```json
last 2 versions
> 0.5%
IE 10
```

> so this is the browser setup that we want to support


