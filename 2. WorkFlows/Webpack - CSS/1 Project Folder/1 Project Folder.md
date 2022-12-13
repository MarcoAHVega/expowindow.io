# Create a Project folder

_start with a folder named `app`_

_include a `.gitignore` file for best practice_...

```json
 app
 .gitignore
```

_inside the app folder, add an `assets` folder and a `index.html` file_

```json
 app
   assets
   index.html
 .gitignore
```

_Add `an HTML boilerplate` inside index.html `include a h1` for testing_

```html
<h1>This is a test!</h1>
```

_inside assets, add folders `scripts`, `styles`, `images` and `icons`_

```json
 app
   assets
      scripts
      styles
      images
         icons
   index.html
 .gitignore
```

_inside scripts, create a new `App.js` file_

```json
 app
   assets
      scripts
         App.js
      styles
      images
         icons
   index.html
.gitignore
```

_inside App.js, create a test `alert()`_

```js
alert('Hello, this is just a test.')
```

_to use webpack we need to create a configuration `webpack.config.js` file within the root of our folder_(that is the same level as the app folder)

```json
app
   assets
      scripts
         App.js
      styles
      images
         icons
   index.html
.gitignore
webpack.config.js
```

_inside our styles folder create a `styles.css` file_

_within the styles folder I want you to create a new folder named `modules` or `components`_

_create a new folder inside the styles folder and name this folder `base`_

_create a new file in the base folder and let's name this file `_global.css`_

```json
app
   assets
      scripts
         App.js
      styles
         styles.css
         modules
         base
         _global.css
      images
         icons
   index.html
.gitignore
webpack.config.js
```

> CSS folder structure for the 7-1 pattern

styles

      abstract
      base
      components
      layout
      pages
      themes
      vendors
