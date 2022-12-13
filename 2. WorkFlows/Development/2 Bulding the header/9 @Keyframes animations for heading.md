> for the browser performance, it's best to only ever animate two different properties.

- One is opacity, which is the one that we're using here, and the other one is the transform property. That's what the browsers are optimized for, for these two properties.

```css abstract/_animations.scss
// Heading-primary  animation

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

// Heading-primary-sub  animation

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
```

> for an animation to work, there are only two properties that we have to really specify.

- Which are called animation-name, and then the animation duration.

> but there are other properties we can use

```css components/_header.scss
.heading-primary-main {
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 35px;

  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  //animation-delay: 3s;
  //animation-iteration-count: 3;
}

.heading-primary-sub {
  display: block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 17.4px;
  animation: moveInRight 1s ease-out;
}
```
