# Function Components

in the year 2022 function components are pretty much what you need to learn and our focus is going to be just that

- > class components

  - `class components are not necessary from a beginner's point of view`

  but i will let you know where to learn about them at the end of this video

- > function component

  - `function components are literally javascript functions`

  they may accept some input properties and return html which describes the ui

- > let's examine the App component

  the first thing to notice is `the file extension`, .js
  so it is a javascript file

  ```js App.js
  import logo from './logo.svg'
  import './App.css'

  function App() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Hello World!</p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

  export default App
  ```

  if we take a look at the code you can clearly see
  that `this is a javascript function` called app which returns some html

  the html contains a wrapping div tag, the header tag,
  an image, a paragraph and a link

  the component is exported from the file as the default export
  this allows us to import the same in index dot js

  - create react app generates a simple react application and hence we have just the one component which is app component

  in the real world application you can
  have tens hundreds or even thousands of components

  facebook which uses react supposedly has
  more than thirty thousand components

  more complex the application more the
  number of components
