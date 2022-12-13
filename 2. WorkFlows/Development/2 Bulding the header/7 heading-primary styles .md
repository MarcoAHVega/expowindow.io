> we want this basically to have two parts.

- because we don't want our primary text or title of the website to say just outdoors.

- And so we must somehow divide this text. We are going to use this span element.

```html
<header class="header">
  <div class="logo-box">
    <img class="logo" src="./assets/images/logo-white.png" alt="Logo" />
  </div>

  <div class="text-box">
    <h1 class="heading-primary">
      <span class="heading-primary-main">Outdoors</span>
      <span class="heading-primary-sub">is where life happens</span>
    </h1>
  </div>
</header>
```

> block elements occupy the entire width that they have available.

- And more importantly for this case, they create line breaks after and before them. And so that's exactly what we want.

```css components/_header.scss
.heading-primary {
  color: #fff;
  text-transform: uppercase;
}

.heading-primary-main {
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 35px;
}

.heading-primary-sub {
  display: block;
  font-size: 20;
  font-weight: 700;
  letter-spacing: 17.4px;
}
```
