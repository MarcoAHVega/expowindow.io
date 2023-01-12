# props

- > components are reusable

  alright our next topic of discussion is an important one it is about `props`

  - earlier in the video i mentioned that `components are reusable`

  so you can create a component that returns any jsx you want to and include
  it in any part of your application

  for example let's say we need to reuse
  the greet component

  - all you have to do is include the greet
    tag as many times as you want

  if i duplicate it twice

  ```js
  import './App.css'
  import { Greet } from './components/Greet'

  function App() {
    return (
      <div className='App'>
        <Greet />
        <Greet />
        <Greet />
      </div>
    )
  }

  export default App
  ```

  save the file and take a look at the browser you can see hello vishwas displayed three times

- > props short for properties is the optional input that any component can accept, it allows the component content to be dynamic.

  now all this is great given what we return from the component
  this isn't really helpful is it

  - what would be great is if we could pass in the name of the person we want to greet,that way reusing the same component we could greet three different people instead of greeting vishwas three times

  that is where props come into picture

  `props short for properties is the optional input that any component can accept, it allows the component content to be dynamic.`

- > let's understand how props work

  - our intention here is to pass a name from the app component to the greet component and render that name in the browser

  to specify props for a component we specify them as attributes

  1. to specify a name prop we simply add a `name` attribute

  ```js
  import './App.css'
  import { Greet } from './components/Greet'

  function App() {
    return (
      <div className='App'>
        <Greet name />
        <Greet />
        <Greet />
      </div>
    )
  }

  export default App
  ```

  it could be any word like username for example but i've decided to go with just name

  - to the attribute we assign the value let's go with the string bruce

  - similarly let's add the attribute to the other two components as well, name is equal to clark and name is equal to diana

  ```js
  import './App.css'
  import { Greet } from './components/Greet'

  function App() {
    return (
      <div className='App'>
        <Greet name='Bruce' />
        <Greet name='Clark' />
        <Greet name='Diana' />
      </div>
    )
  }

  export default App
  ```

  okay so we are now sending some information or some property to the greed component

  but how do we

  2. `retrieve the value` in the grid component

  - that is a quick two-step process

  - the first step `add a parameter to the function component`, we are going to call it props

  ```js
  export const Greet = (props) => {
    return <h1>Hello Vishwas</h1>
  }

  // export default Greet
  ```

  you can actually name this anything you want to but the convention is to name it props and i highly recommend you don't deviate from this

  - the second step is to `use this parameter in the function body`

  `now props is an object on which you access the different properties you've passed in`

  so if you want to display the name that has been passed to the component
  we need to use props.name (so hello props.name)

  ```js
  export const Greet = (props) => {
    return <h1>Hello props.name</h1>
  }

  // export default Greet
  ```

- > jsx expressions

  if we take a look at the browser the output is not quite what we want it
  to be, and that is because props dot name is being treated as text

  we need to instead ask react to evaluate the jsx expression
  and we do that `by wrapping the expression with curly braces`

  ```js
  export const Greet = (props) => {
    return <h1>Hello {props.name}</h1>
  }

  // export default Greet
  ```

  if we now take a look at the browser you should be able to see hello bruce
  hello clark and diana

  the reusability of components makes much more sense now that we understand props

  we can have a template (Greet.js) and pass in the data we want the component to use (in App.js, were we use the component)

- > let's add another prop to make sure we get a good understanding of how it works

  - i'm going to add a second attribute `heroName` and assign the appropriate
    values, `batman`, `superman`, `wonder woman`

  ```js
  import './App.css'
  import { Greet } from './components/Greet'

  function App() {
    return (
      <div className='App'>
        <Greet name='Bruce' heroName='Batman' />
        <Greet name='Clark' heroName='Superman' />
        <Greet name='Diana' heroName='Wonder Woman' />
      </div>
    )
  }

  export default App
  ```

  - and in Greet component hello props dot name followed by also known as `props.heroName`

  ```js

  ```

  now if you take a look at the browser you can see the output is what we expect it to be

- > using the reserved children property

  - sometimes it is also possible that you might not have an idea as to what content is being passed in but we still want the component to render that unknown content

  - we can do that by specifying the content between the opening and closing tag of the component and retrieving it using the reserved children property in the props object

  - `let's understand better with an example`

  1. on the greet tag component instead of the self closing tag i will split it into opening and closing tags and i'll do this only for the last component

  ```js
  import './App.css'
  import { Greet } from './components/Greet'

  function App() {
    return (
      <div className='App'>
        <Greet name='Bruce' heroName='Batman' />
        <Greet name='Clark' heroName='Superman' />
        <Greet name='Diana' heroName='Wonder Woman'></Greet>
      </div>
    )
  }

  export default App
  ```

  2. in between the tags i will specify a simple paragraph tag "This is children props"

  ```js
  import './App.css'
  import { Greet } from './components/Greet'

  function App() {
    return (
      <div className='App'>
        <Greet name='Bruce' heroName='Batman' />
        <Greet name='Clark' heroName='Superman' />
        <Greet name='Diana' heroName='Wonder Woman'>
          <p>This is children props</p>
        </Greet>
      </div>
    )
  }
  ```

  4. now in greed component we can render that paragraph using props dot children

  below the h1 tag i'm going to add {props.children}

  ```js
  export const Greet = (props) => {
    return (
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    )
  }

  // export default Greet

  ```

  if i save the file and take a look at the browser you can see we have an error, this is because the jsx returned by a component should contain only one wrapper element

  5. so we wrap h1 tag and props.children with a div tag

  so within the outermost html element you can nest as many html elements you want
  to but the component should return only one element

  ```js
  export const Greet = (props) => {
    return (
      <div>
        <h1>
          Hello {props.name} a.k.a {props.heroName}
        </h1>
        {props.children}
      </div>
    )
  }

  // export default Greet
  ```

  if we now take a look at the browser you can see that only for wonder woman
  we have the additional content being rendered "this is children props"

  - this paragraph corresponds to the inner html of the greet tag component

- > Adding a Child button

  so if i were to add a button to the second greet component
  with text action

  ```js
  import './App.css'
  import { Greet } from './components/Greet'

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

  - and take a look at the browser the button should be rendered for superman

  for the properties you know for sure are going to be passed you can pass them as attributes
  `name and heroName`

  if you have no clue what is going to be passed as props or if you have to pass in dynamic html content `pass it in between the component tags`

  and in the component definition render the content using `{props.children}`

  if at all something is specified it is rendered in the browser and if nothing is passed props or children simply renders nothing

  - the children props is very useful when you have to compose new components from
    existing components

  `so that is pretty much the basic idea behind props`

  when specifying the component you can include additional attributes

  react is going to bundle all such attributes into an object which we by convention call as props

  in the component definition we can access any attribute we want to and render dynamic content

- > props are immutable

  now there is one strict rule though when it comes to props and that is props are
  immutable or in simpler words their value cannot be changed

  in our example if i try to assign a value to props dot name
  is equal to vishwas save

  ```js
  export const Greet = (props) => {
    props.name = 'Vishwas'

    return (
      <div>
        <h1>
          Hello {props.name} a.k.a {props.heroName}
        </h1>
        {props.children}
      </div>
    )
  }

  // export default Greet
  ```

  and take a look at the browser you can see the application breaks

  take a look at the console and the error message is 'cannot assign to read only property name of object'

  - react components have to act like pure functions with respect to their props
    parameter,

  - you're not allowed to change it under any circumstance

  nevertheless props is a great feature in react and any practical react
  application will definitely make use of props

  but if props are immutable how do we maintain component data that might change over time

  well to answer that question let's head to the next topic
  which is state
