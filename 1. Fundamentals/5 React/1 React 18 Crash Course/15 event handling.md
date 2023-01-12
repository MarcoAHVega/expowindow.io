# event handling

- > - let's see how to handle events in react

  alright for our next topic let's discuss event handling in react

  - any application you build typically tends to have user interaction

  - when the user interacts with your app events are fired

  for example mouse clicks, mouse over, key press, change event, etc

  - let's see how to handle events in react

- > we will focus on just `the click event` but the concept holds good for other events as well

in fact we've already had a look at the click event a few minutes ago but let's look at it in a bit more detail

- `let's begin by creating a new component`

so in the components folder new file called `ClickHandler.js`

here define a new component, export const click handler and this is going to be equal to an arrow function

```js
export const ClickHandler = () => {}
```

in the jsx i'm going to add a div tag and a button within the div tag, click

```js
export const ClickHandler = () => {
  return (
    <div>
      <button>Click</button>
    </div>
  )
}
```

- > when the user clicks on this button a click event is fired, our goal is to capture that click event and execute some basic code

- the first point you have to make note of is react events are named using camel case rather than lowercase

in plain html and vanilla javascript you would specify on click that is lowercase but in react it has to be `camel cased`

```js
export const ClickHandler = () => {
  return (
    <div>
      <button onClick>Click</button>
    </div>
  )
}
```

- the second point is with jsx you pass a function as the event handler rather than a string

so instead of a string click handler with parentheses we're going to have click handler `within curly braces`

```js
export const ClickHandler = () => {
  return (
    <div>
      <button onClick={ClickHandler}>Click</button>
    </div>
  )
}
```

- now let's define this click handler function

remember in javascript it is very much possible to define a function within a function

so inside the function component we can define our click handler

const click handler is equal to an arrow function and within the function body we simply log to the console button clicked

```js
export const ClickHandler = () => {
  const clickHandler = () => {
    console.log('Button clicked')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
```

let's save

this included in app component

```js

```

import the component at the top

```js

```

and head back to the browser to test this out

in the browser you can see the click button

if i open the developer tools console and click on the button you should see the message button clicked in the console

our click event handling works as expected

- when assigning an event handler make sure you don't add parentheses, if you do the function gets called when the component renders and that is not what we want

- > the event object

- what you should also know is that the event handler automatically receives the event assets argument

so we can specify event as a parameter to click handler and log it to the console

```js
export const ClickHandler = () => {
  const clickHandler = (event) => {
    console.log('Button clicked', event)
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
```

in the browser click, and we see all the details about the event

- > using a unanimous arrow function

- it is also possible to pass additional arguments if necessary

for example i can add another button, so copy paste, that says click 5

```js
export const ClickHandler = () => {
  const clickHandler = (event) => {
    console.log('Button clicked', event)
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={clickHandler}>Click 5</button>
    </div>
  )
}
```

but this time the on click handler will be an arrow function, this function receives the event as an argument

```js
export const ClickHandler = () => {
  const clickHandler = (event) => {
    console.log('Button clicked', event)
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(event) => clickHandler}>Click 5</button>
    </div>
  )
}
```

we then call click handler, so parentheses, passing in the same event, but also a second argument, let's pass in a value of five

```js
export const ClickHandler = () => {
  const clickHandler = (event) => {
    console.log('Button clicked', event)
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </div>
  )
}
```

in the click handler definition we can add a new parameter that says count and we set a default value of one, and log count to the console

```js
export const ClickHandler = () => {
  const clickHandler = (event, count = 1) => {
    console.log('Button clicked', count, event)
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </div>
  )
}
```

if we now head to the browser, click on the first button we see a value of 1 and the mouse click event

click 5 we see the value 5 and the same mouse click event

this is pretty much how you handle events in a function component
