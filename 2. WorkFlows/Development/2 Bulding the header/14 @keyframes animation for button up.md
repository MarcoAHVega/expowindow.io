```css abstract/_animations.scss
// header button animation

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

> `btn-animated`

> there will be multiple buttons like this. But I only want this animation to happen on this particular button.

- And so what I'm gonna do is to create a new class on the button. So btn-animated

```html
<a href="#" class="btn btn-white btn-animated">Discover our tours</a>
```

> `animation-fill-mode: backwards;`

> what this does, is that it will automatically apply the styles up to zero percent before the animation starts.

- So, again, these styles will now be applied before the animation starts simply by using the animation fill mode and set it to backwards.

```css components/_button.scss
.btn-animated {
  //           name   /duration /effect / delay
  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
}
```
