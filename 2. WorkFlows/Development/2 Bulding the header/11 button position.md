> `text-align: center;`

> this is an inline-block element and so it's treated as if it was text.

- And so if it's text and we want it to be at the center of this box, all we have to do is to set the text-align property to the center, for the text-box

- So now it's going to center the text that is inside of the box, including of course, the button.

```css components/_header.scss
.text-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
```

> `margin-bottom: 60px;`

> let's also add here some white space between this heading element and the button.

```css components/_header.scss
.heading-primary-sub {
  display: block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 17.4px;
  animation: moveInRight 1s ease-out;
  margin-bottom: 60px;
}
```
