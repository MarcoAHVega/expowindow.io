# Adding PostCSS autoprefixer plugin

*install the postCSS plugin*

> similar to npm, when you use postCSS you can choose the package or plugins that you want to install and use.

> we are starting with this one:

> `autoprefixer`

*before we list any plugins here. `Let's go download the plugins`*

```js
npm install autoprefixer --save-dev
```

*require in the plugins in the `postcss.config.js`*

> Now let's `list this package within our array`.

```js

module.exports = {
  plugins: [ require('autoprefixer')]
}
```