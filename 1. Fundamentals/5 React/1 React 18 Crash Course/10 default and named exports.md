# default export vs named export

- > export default is what allows us to import the component with any name

  all right before we proceed i would like to highlight a point about exporting and importing components

  please note here that we are exporting greet component as a default export from
  greet.js

  ```js
  const Greet = () => {
    return <h1>Hello Vishwas</h1>
  }

  export default Greet
  ```

  is what allows us to import the component with any name

  i can change greet to myComponent, change the tag to myComponent

  ```js
  import './App.css'
  import myComponent from './components/Greet'

  function App() {
    return (
      <div className='App'>
        <myComponent />
      </div>
    )
  }

  export default App
  ```

  head back to the browser and you can see that it still works as expected

- > named exports

  but in certain articles or videos you might also find `named exports`

  let me comment the default export

  and prepend the constant with the export keyword

  so export const greet

  ```js
  export const Greet = () => {
    return <h1>Hello Vishwas</h1>
  }

  // export default Greet
  ```

  this is what is termed as a named export

  `in this situation you have to import the component with the exact same name`

  if i save the file
  you can straight away see we have an error

  (export default imported as my component was not found in components gree)t

  so you have to change the import statement to import the greet function

  `for named exports we use curly braces and then the export`

  so import greet from dot slash components slash greet

  and use the same tag

  ```js
  import './App.css'
  import { Greet } from './components/Greet'

  function App() {
    return (
      <div className='App'>
        <Greet />
      </div>
    )
  }

  export default App
  ```

  if we take a look at the browser our app is working once again

  `now i am going to be using named exports for the most part but make sure you understand the difference between default and named exports`
