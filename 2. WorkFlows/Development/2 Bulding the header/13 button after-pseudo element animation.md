> pseudo-elements allow us to style certain parts of elements.

- For example, the after pseudo-element that we're gonna use adds like a virtual element right after the element that we're selecting.

> the trick here is to add an element that looks exactly like the button that we already have, but we put it behind the button.

- And when we hover out of the button, then this hidden pseudo-element amazingly goes back behind the button.

> `content: "";`

> First, in order for an after pseudo-element to actually appear on the page, we need to specify its content property. So that's always necessary.

It doesn't matter what the content is. It can even be empty like we're gonna do here

> `display:inline-block;`

> we have to specify the display property.

And in this case, we're gonna say it's an inline block because the button that we have is also an inline block. And so, again, we want it to be exactly the same.

> `height: 100%;` `width: 100%;`

> this works because the after pseudo-element is basically treated like a child of the button.

- And so if we say that we want the height to be 100%, that's 100% of the width of the button.

> `positioning the pseudo button `

> we use absolute positioning. So `position: absolute;`

> And then we just say it should be zero from the `top: 0;` and zero from the `left: 0;`

> We want it to be hidden after the .btn:link

> And so, the reference should be the button.

> Therefore, what we have to do is to set the position property of the button to relative. `position: relative;`

> `z-index: -1;`

> the z index defines the position of the elements if they are one on top of another.

> `.btn:hover::after`

> when we hover the button, then we want some certain styles for the after pseudo-element.

- So this is an after pseudo-element only when we have the button on the hover state.

> `transition: all 0.4s;`

> remember, we have to put the transition property on the initial state element

- In this case the initial state is of course this after pseudo-element.

```css components/button.scss
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-white {
  background-color: #fff;
  color: #777;
}

.btn::after {
  content: '';
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn-white::after {
  background-color: #fff;
}

.btn:hover::after {
  //transform: scale(1.5);
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}
```
