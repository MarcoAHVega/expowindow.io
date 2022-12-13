> clip parts of elements using the new clip-path property.

- what we're doing here is to specify a polygon in which the image, or the element, will still be visible.

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

  // clip-path: polygon(x y, x y, x y, x y);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
}
```

- Now you can do lots of different things with this and there's actually a very cool tool which is called Clippy
  https://bennettfeely.com/clippy/
