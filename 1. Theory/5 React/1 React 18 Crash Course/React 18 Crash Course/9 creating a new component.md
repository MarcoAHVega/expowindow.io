# create a function component

  - to get a better hang of components let's
    now create a function component ourselves

  to keep things simple in the app
  component i am going to `remove all the html except the outer div tag,`
  remove the logo import as well at the top

  ```js App.js
  import './App.css'

  function App() {
    return <div className='App'></div>
  }

  export default App
  ```

  - now let's create our first component
    which will simply output the message `hello Vishwas`

  now a component is nothing but a
  javascript file let's start with that

  1. first within the source folder i'm going
     to create a new folder called components `src/components`

  2. and within the folder i'm going to create a new file called Greet.js

  now within the file define a new function

  function Greet we return an h1 tag that says hello vishwas

  ```js Greet.js
  function Greet() {
    return <h1>Hello Vishwas</h1>
  }
  ```

  and that is pretty much it you have created your first function component

  but as it stands now the html hello vishwas is not going to be rendered in
  the browser, `the great component is in no way connected with the rest of our application`

  3. so what we have to do is export the greet function from greet.js

  so export default greet

  ```js Greet.js
  function Greet() {
    return <h1>Hello Vishwas</h1>
  }

  export default Greet
  ```

  4. import it in app.js

  import greet from dot slash components slash greed
  (we are allowed to omit the dot js file extension)

  ```js App.js
  import './App.css'
  import Greet from './components/Greet'

  function App() {
    return <div className='App'></div>
  }

  export default App
  ```

  5. and then include it in the app component

  now to include the grid component in app component we simply specify the component as a
  custom html tag

  so within the outer div tag
  include the greet component as an html tag

  if there is no content between the
  opening and closing tags you can simply change it into a self-closing tag

  ```js
  import './App.css'
  import Greet from './components/Greet'

  function App() {
    return (
      <div className='App'>
        <Greet />
      </div>
    )
  }

  export default App
  ```

  now if we save all the files and take a look at the browser
  you should be able to see hello vishwas
  your first function component is up and running

- > it's also possible to use an arrow function to create a function component

  let's rewrite the code

  const greet is equal to an arrow function
  which returns hello vishwas

  ```js
  const Greet = () => {
    return <h1>Hello Vishwas</h1>
  }

  export default Greet
  ```

  if you're new to arrow functions
  please pause the video and try to get a basic understanding of how they work
  as we will be using them a lot throughout the series

  take a look at the browser and we still see hello vishwas