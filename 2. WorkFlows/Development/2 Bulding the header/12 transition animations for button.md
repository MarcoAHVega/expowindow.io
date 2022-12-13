> `transform: translateY(-3px);`

> in this design, we want the button to go up 3px when hover and 1px while active (while been clicked)

> `transition: all .2s;`

> in this case, all the properties are enabled to be animated. Then we can also specify a time that we want. Let's say that we want 0.2 seconds.

```css components/button.scss
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
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
```
