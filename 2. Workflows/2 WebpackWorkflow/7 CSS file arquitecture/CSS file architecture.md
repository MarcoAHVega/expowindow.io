# css file architectures

- > in the styles/base folder, create a partial `_global.css` file

```
...base/_global.css
```

this is the first of all the partial css files we will create

- > jump back into the styles.scss file, and move the testing rules into `_global.scss`

  So go ahead and `copy these rules` to your clipboard and paste them inside `_global.scss`

  ```css
  $main-red: red;

  body {
    h1 {
      color: $main-red;
    }
  }
  ```

- > in the style.css file, import the partial `_global.scss`

  we will `import` this and `all the partial css files` into our style.css file

  ```js
  @import "base/_global";
  ```

- > in the style.css file, import normalize.css

We haven't used normalized.css yet but we did install it

```js
@import "normalize.css";
@import "base/_global";
```

- > in these styles/base folder, create a partial `_variables.scss`

```
...base/_variables.css
```

- > - > in the style.css file, import the partial `_variables.scss`

```js
@import "normalize.css";
@import "base/_variables";
@import "base/_global";
```

- > in the styles.scss file, cut the `$mainRed: red` color variable and paste in in the `_variables.css` file

- > test the project again

```
npm run dev

```
