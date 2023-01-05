# working with media queries (mixins)

- > in the styles/base folder, create a new file `_mixins.scss`

```
...base/_mixins.scss
```

- > in `_mixins.scss` file, add the mixins

- let's `create a new mixin` that will make `working with media queries` throughout our entire Web site much easier.

- a Mixin is really just `a reusable bit of code`

example:

```scss
@mixin atSmall {
  @media (min-width: 530px) {
    @content;
  }
}

@mixin atMedium {
  @media (min-width: 800px) {
    @content;
  }
}

@mixin atLarge {
  @media (min-width: 1010px) {
    @content;
  }
}

@mixin clearfix {
  &::after {
    content: '';
    clear: both;
    display: table;
  }
}
```
