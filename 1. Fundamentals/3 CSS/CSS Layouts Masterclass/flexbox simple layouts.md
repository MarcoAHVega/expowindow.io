# Layout 1 – Coding Blog Posts Side by Side

1. the main idea is to layout three cards or thumbnails by having them in a flex container

properties:

```css
container {
  display: flex;
}
```

2. once they are displayed vertically use margin on the card's elements to create spacing

other properties:

- loading="lazy" attribute

```html
<img class="blog-posts__post--img" loading="lazy" src="images/4.2.jpg" alt="presentation" />
```

3. my use cases:

- stats-component
- logos-component

# Layout 2 – Coding Spaced out Navigation Links

1. the main idea is to use the different values for the justify-content property to position the nav links in different ways

```css
display: flex;
justify-content: space-between;
// justify-content: space-around;
// justify-content: space-evenly;
// justify-content: center;
// justify-content: flex-start;
// justify-content: flex-end;
```

# Layout 3 – Coding Personal Info Card

1. the main idea is to use the different values for the align-items property to align text next to and image in the same container

```css
.profile-cards__card {
  display: flex;
  align-items: center;
  column-gap: 2rem;
  /* align-items: flex-start; */
  /* align-items: flex-end; */
  /* align-items: baseline; */
  /* align-items: stretch; */
}
```

# Layout 4 – Coding Sign in Page

1. the main idea: use the different values for the flex-direction property to control the direction of the items

```css
section {
  margin-top: 5rem;
  display: flex;
  /* flex-direction: row; */
  /* flex-direction: row-reverse; */
  flex-direction: column;
  /* flex-direction: column-reverse; */

  align-items: center;
  gap: 2rem;
}
```

2. by using the display:flex property we get access to more properties for more control

```css
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 30%;
}
```
