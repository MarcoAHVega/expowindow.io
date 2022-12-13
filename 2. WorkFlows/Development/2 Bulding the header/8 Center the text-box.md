> one way of centering anything

```css components/_header.scss
.text-box {
  position: absolute;
  // in relation of the patent element
  /* top: 50%; */
  top: 40%;
  left: 50%;
  // this is in relation to the element itself.
  transform: translate(-50%, -50%);
}
```

> Now because of this wedge that we cut out here, it looks a bit weird.

And so instead of shifting it down 50%, maybe we can just do top 40%.
