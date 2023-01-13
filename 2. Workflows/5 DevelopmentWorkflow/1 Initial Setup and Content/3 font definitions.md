> link the fonts in the html file

```html
<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
```

> set up project-wide font definitions

```css base/_global.scss
body {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #777;
}
```

- Everything related to font, we always specify it here in the body selector.
