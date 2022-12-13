> the button will be an anchor element

```html
<div class="text-box">
  <h1 class="heading-primary">
    <span class="heading-primary-main">Outdoors</span>
    <span class="heading-primary-sub">is where life happens</span>
  </h1>

  <a href="#" class="btn btn-white">Discover our tours</a>
</div>
```

> `.bth:link`

> with this (.btn), we select a button element, but since it's a link we use the link pseudo-class (.bth:link)

- pseudo-classes are a special state of a selector.

> So this link here is a state of the button selector

- So like when a user hovers an element, or when a checkbox is clicked or if we want to select a last-child, and many other possibilities.

> So the :link is a special state of a selector when it is an anchor element so it functions as a link.

> `.btn:visited`

> But there's also the visited state.

- So this is the state when the user has already clicked on the button once before and then sees the button again

> we want the visited state to look at exactly like the link state, so we just put them together.

> `display: inline-block;`

> we should use display: inline-block; on inline elements, like the a tag, when we want then to act like block elements so we can add give them paddings or some heights or width to elements

```css components/_button.scss
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
}

.btn-white {
  background-color: #fff;
  color: #777;
}
```
