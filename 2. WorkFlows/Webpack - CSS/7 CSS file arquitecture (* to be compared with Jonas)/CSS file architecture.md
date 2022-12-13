# css file architectures

_step 3 : create a partial css file for global css rules_

> this is the first of all the partial css files we will create

> jump `back into our main styles.sCSS` file. and lets `move the testing rules into _global.scss` file

> So go ahead and `copy these rules` to your clipboard and paste them inside \_global.scss

```css
$main-red: red;

body {
  h1 {
    color: $main-red;
  }
}
```

_step 4 : we will `import` this and `all the partial css files` into our style.css file_

> back in our main `style.css` sheet up on the very top line. Let's create an import:

```js
@import "base/_global";
```

_We haven't used `normalized.css` yet but we did install it when we were first learning how to use NPM_

> import `normalize.css`
>
> within our main `style.css` sheet. We can just say add:

```js
@import "normalize.css";
@import "base/_global";
```

> let's `create a brand new file` in these styles `base` folder that has the single responsibility of `holding our variables`.

```js
...base/_variables.css
```

> Let's be sure to go into our `main CSS file` and `import in that new variables file` that we just created.

```js
@import "normalize.css";
@import "base/_variables";
@import "base/_global";
```

> let's just go ahead and `cut` this line (in \_global.css) where we defined the `$mainRed: red`, variable and let's `paste` it into the new `_variables.css` file.
