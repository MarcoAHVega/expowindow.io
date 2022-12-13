> the logo image is actually an inline element

- and so I think it's a better practice to first have a small container where this image is inside, and then position that container

```html
<header class="header">
  <div class="logo-box">
    <img class="logo" src="./assets/images/logo-white.png" alt="Logo" />
  </div>
</header>
```

> position the logo and its parent element

- let's just simply use the position absolute, like you already know how to do.

- And we can then use top, bottom, left, and right properties to put the image exactly where we want it to be.

```css components/_logo.scss
.logo-box {
  position: absolute;
  top: 40px;
  left: 40px;
}
```

> And remember that the header is the parent element

And so we should go to header and set its position to relative.

```css components/header.scss
.header {
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 133, 0.8)
    ), url('/app/assets/images/hero.jpg');
  background-size: cover;
  background-position: top;
  position: relative;

  // clip-path: polygon(x y, x y, x y, x y);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
}
```

> specify the size of the logo image itself.

```css components/_logo.scss
.logo-box {
  position: absolute;
  top: 40px;
  left: 40px;
}

.logo {
  height: 35px;
}
```
