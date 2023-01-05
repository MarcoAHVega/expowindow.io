# state

- > props vs state

  now we have seen that every react
  component returns jsx which describes the user interface

  and a minute ago we have seen that it is possible to influence what is rendered
  on the screen using props

  - as it turns out there is a second way to influence what is rendered on the screen and that is the state of the component

  let's quickly review what we have learned about props and make a comparison by learning about state

  after that let's dive into an example to get a better understanding of how state
  works in react components

  let's take a look at the comparison

  1. the first one is that `props get passed to the component` whereas `state is managed within the component`

  - analogy for this would be `function parameters` against `variables declared within the function body`

  2. because a parent usually passes down the props to the child component `props are immutable`, the parent owns the props and cannot be changed by the children components

  - state on the other hand is managed within the component and hence `the component has full control to change the state`

- > useState hook

  1. now props are accessed using the `props parameter` on the function component, however state is managed a little different, the simplest way to manage state is using a function that the react library provides which is the useState function also referred to as `useState hook`

- > let's look at an example of how state works in the component

  1. within the components folder i'm going to create a new file called `Message.js`

  2. within the file i'm going to create a function component

  - let me copy paste the code from Greet.js and make the necessary modifications

  - i'm going to change the function name to Message

  - the jsx we return the text `Greet visitor`

  ```js
  export const Message = (props) => {
    return <h1>Welcome Visitor</h1>
  }
  ```

  3. let me import the component in App.js

  ```js
  import './App.css'
  import { Greet } from './components/Greet'
  import { Message } from './components/Message'

  function App() {
    return (
      <div className='App'>
        <Greet name='Bruce' heroName='Batman' />
        <Greet name='Clark' heroName='Superman'>
          <button>Action</button>
        </Greet>
        <Greet name='Diana' heroName='Wonder Woman'>
          <p>This is children props</p>
        </Greet>
      </div>
    )
  }

  export default App
  ```

  4. comment out rest of the components and include the message component

  ```js
  import './App.css'
  // import { Greet } from './components/Greet'
  import { Message } from './components/Message'

  function App() {
    return (
      <div className='App'>
        // <Greet name='Bruce' heroName='Batman' />
        // <Greet name='Clark' heroName='Superman'>
          // <button>Action</button>
          //{' '}
        </Greet>
        //{' '}
        <Greet name='Diana' heroName='Wonder Woman'>
          // <p>This is children props</p>
          // //{' '}
        </Greet>
        <Message />
      </div>
    )
  }

  export default App
  ```

  if we take a look at the browser you should see the text welcome visitor

- > now here is our new requirement

  - we need to have a subscribe button right below the text

  - when we click on the button the text being displayed should change from welcome visitor to thank you for subscribing

  - now if the text message were to be sent from app.js as a prop it would not work as props are immutable, once the message is set to welcome visitor it can never be changed from the message component

  -`so the solution is to use component state`

  - let's see what are the steps involved

  1. step one is to `import the use state function` from react,

  - so at the top import use state from react

  ```js
  import { useState } from 'react'

  export const Message = (props) => {
    return <h1>Welcome Visitor</h1>
  }
  ```

  2. step two invoke useState within the component,

  - so `useState()` with parentheses

  ```js
  import { useState } from 'react'

  export const Message = (props) => {
    useState()
    return <h1>Welcome Visitor</h1>
  }
  ```

  - . now this function `returns two values` which we can store in two constants of an array

  - const array message comma set message

  ```js
  import { useState } from 'react'

  export const Message = (props) => {
    const [message, setMessage] = useState()
    return <h1>Welcome Visitor</h1>
  }
  ```

  - the syntax is called `array destructuring` in case you want to look it up for better understanding

  here `message is a simple variable` we can call it anything but message
  makes sense in this example

  `setMessage is a function that can be used to update the message variable`

  - . now useState also accepts an initial value as its argument this is going to be `welcome visitor` to begin with

  3. step 3, instead of `<h1>welcome visitor</h1>` we bind the state value in the jsx, `<h1>{message}</h1>`

  ```js
  import { useState } from 'react'

  export const Message = (props) => {
    const [message, setMessage] = useState('Welcome visitor')
    return <h1>{message}</h1>
  }
  ```

  if we take a look at the browser we see no change in the ui

  however since we are using state to render the message we now have the ability to change the
  message

  so

- > `let's create a button and on click of that button change the message`

  1. for step 4 add an html button element

  before we do that `create an enclosing div tag` and then below the h1 tag `add a button` with text subscribe

  ```js
  import { useState } from 'react'

  export const Message = (props) => {
    const [message, setMessage] = useState('Welcome Visitor')
    return (
      <div>
        <h1>{message}</h1>
        <button>Subscribe</button>
      </div>
    )
  }
  ```

  let's quickly take a look at the browser and see if it works

  the button is now placed right below the message

  5. the fifth and final step is to listen to the click event on this button and change the message

  (we will take a detailed look at event handling in a few minutes but this will be a glimpse into how a click event on an element is handled)

  - on the button we add the `onClick` attribute

  (very important that it is camel cased)

  - to this event we assign a handler and this again is going to be within `curly braces`

  ```js
  import { useState } from 'react'

  export const Message = (props) => {
    const [message, setMessage] = useState('Welcome Visitor')
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={}>Subscribe</button>
      </div>
    )
  }

  ```

  - here we're going to have `an arrow function` in the function body we `call the setMessage function` returned from useState

  ```js
  import { useState } from 'react'

  export const Message = (props) => {
    const [message, setMessage] = useState('Welcome Visitor')
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => setMessage()}>Subscribe</button>
      </div>
    )
  }
  ```

  to this setMessage function `we can pass in a value` and react will update the message variable with that value let's pass in thank you for subscribing

  ```js
  import { useState } from 'react'

  export const Message = (props) => {
    const [message, setMessage] = useState('Welcome Visitor')
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => setMessage('Thank you for subscribing!')}>Subscribe</button>
      </div>
    )
  }
  ```

  if we save the file and take a look at the browser you should see the text "welcome visitor" and when i click on the subscribe button the text changes to "thank you for subscribing"

  this example demonstrates what exactly state is in react

  - a state is nothing but a variable that is maintained inside a component

  - unlike props state can be changed within the component

  - whenever the state changes react will automatically update the ui to reflect the updated state value

  i hope you now have a slightly better understanding of props state and how they're used in react
