# 7. Using React with a CDN

- > create a project folder

  project-folder/index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>my website</h1>
      <div id="banner"></div>

      <footer>
        <p>footer</p>
      </footer>
    </body>
  </html>
  ```

  - open it with live server

- > next up, we need to load react into our existing web page

  Now to do that, we'll be using a CDN, a content delivery network, which just means we're loading the library from the web

  ```
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  ```

  https://reactjs.org/docs/cdn-links.html

  - And then we need to paste those into our HTML file inside the head section at the top.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script
        crossorigin
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      ></script>
      <title>Document</title>
    </head>
    <body>
      <h1>my website</h1>
      <div id="banner"></div>

      <footer>
        <p>footer</p>
      </footer>
    </body>
  </html>
  ```

- > There's also one more thing we need to add a reference to the babel library

  Bubble is a compiler, which allows us to use extra features in our JavaScript that browsers don't natively support, and it compiles those extra features into code that the browser does understand at runtime.

  https://babeljs.io/setup#installation

  That's going to take you to a code snippet where we can grab the CBN link for babel.

  So copy that

  and you can see we also need to add this type attribute to our script tag.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script
        crossorigin
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      ></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <title>Document</title>
    </head>
    <body>
      <h1>my website</h1>
      <div id="banner"></div>

      <footer>
        <p>footer</p>
      </footer>

      <script type="text/babel"></script>
    </body>
  </html>
  ```

# 8. Making a React Component

- > Now, in our case, for now, we're just going to use React to build a single component in our existing webpage.

  - a React component is basically just a JavaScript function, and inside that function, we can create a component template and also any component functionality.

  ```html
  <script type="text/babel">
    const Banner = () => {}
  </script>
  ```

  - We're just going to focus on the template side of things for now.

  ```html
  <script type="text/babel">
    const Banner = () => {
      return (
        <div>
          <p>banner</p>
        </div>
      )
    }
  </script>
  ```

  And now we have a react component, which is just a function that returns a JSX template

  - The next thing we want to do is render this component template to the DOM to inject it into our HTML page.

  ```html
  <script type="text/babel">
    const Banner = () => {
      return (
        <div>
          <p>banner</p>
        </div>
      )
    }

    // render the component to the DOM
    const root = ReactDOM.createRoot(document.getElementById('banner'))
    root.render(<Banner />)
  </script>
  ```

# 9. JSX & Templates

- > JSX is very similar to regulate HTML, but there are some slight differences

  - the class attribute to add css classes to elements

  - when we work with JSX, it must have just a single root element in our components

  - another difference is how we do comments in JSX

  Now there are some other differences between HTML and JSX as well, which will come to you later in the course.

# 10. Template Expressions & Variables

- > we can output dynamic values or expressions inside the template itself

  ```html
  <script type="text/babel">
    const Banner = () => {
      const title = 'Welcome to my website'
      const subtitle = 'this is a website for learning react'

      return (
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      )
    }

    // render the component to the DOM
    const root = ReactDOM.createRoot(document.getElementById('banner'))
    root.render(<Banner />)
  </script>
  ```

  So now we have two variables being output in the template

- > We can also use JavaScript methods

  ```html
  <script type="text/babel">
    const Banner = () => {
      const title = 'Welcome to my website'
      const subtitle = 'this is a website for learning react'

      return (
        <div>
          <h2>{title.toUpperCase()}</h2>
          <p>{subtitle}</p>
        </div>
      )
    }

    // render the component to the DOM
    const root = ReactDOM.createRoot(document.getElementById('banner'))
    root.render(<Banner />)
  </script>
  ```

- > create some kind of expressions directly in the template itself

  ```html
  <script type="text/babel">
    const Banner = () => {
      const title = 'Welcome to my website'
      const subtitle = 'this is a website for learning react'

      return (
        <div>
          <h2>{title.toUpperCase()}</h2>
          <p>{subtitle}</p>
          <p>Today's date is: {new Date().toDateString()}</p>
          <p>Random number: {Math.random() * 100}</p>
        </div>
      )
    }

    // render the component to the DOM
    const root = ReactDOM.createRoot(document.getElementById('banner'))
    root.render(<Banner />)
  </script>
  ```

  - when we output a number inside, these curly braces react is basically just going to turn that into a string format to output to the browser.

- > output dynamic values inside attributes of tags

  ```html
  <script type="text/babel">
    const Banner = () => {
      const title = 'Welcome to my website'
      const subtitle = 'this is a website for learning react'
      const address = 'https://www.netninja.dev'

      return (
        <div>
          <h2>{title.toUpperCase()}</h2>
          <p>{subtitle}</p>
          <p>Today's date is: {new Date().toDateString()}</p>
          <p>Random number: {Math.random() * 100}</p>
          <a href={address}>Visit the Net Ninja site</a>
        </div>
      )
    }

    // render the component to the DOM
    const root = ReactDOM.createRoot(document.getElementById('banner'))
    root.render(<Banner />)
  </script>
  ```

  - when an attribute of a tag is dynamic, we don't use quotes and instead we use curly braces again, because again, when react sees curly braces, it knows that inside is a dynamic value.

# 11. Click Events & Event Handlers

- > click events are one of the most popular events that you'll work with in a React application

- > 1. add the button to the template including an on click attribute

  - create a button `<button>Click me</button>`

  - attach a click handler `onClick`

  ```html
  <script type="text/babel">
    const Banner = () => {
      const title = 'Welcome to my website'
      const subtitle = 'this is a website for learning react'
      const address = 'https://www.netninja.dev'

      return (
        <div>
          <h2>{title.toUpperCase()}</h2>
          <p>{subtitle}</p>
          <p>Today's date is: {new Date().toDateString()}</p>
          <p>Random number: {Math.random() * 100}</p>
          <a href={address}>Visit the Net Ninja</a>
          <div>
            <button onClick=''>Click me</button>
          </div>
        </div>
      )
    }

    // render the component to the DOM
    const root = ReactDOM.createRoot(document.getElementById('banner'))
    root.render(<Banner />)
  </script>
  ```

- > 2. create and set a function

  - we set it to a function `onClick={}`

  - we create that function `const handleClick = () => {}`

  - now we can reference this function right here down inside this onClick `onClick={handleClick}`

  - and to test it we use a `console.log('you clicked me')`

  ```html
  <script type="text/babel">
    const Banner = () => {
      const title = 'Welcome to my website'
      const subtitle = 'this is a website for learning react'
      const address = 'https://www.netninja.dev'

      const handleClick = () => {
        console.log('you clicked me')
      }

      return (
        <div>
          <h2>{title.toUpperCase()}</h2>
          <p>{subtitle}</p>
          <p>Today's date is: {new Date().toDateString()}</p>
          <p>Random number: {Math.random() * 100}</p>
          <a href={address}>Visit the Net Ninja</a>
          <div>
            <button onClick={handleClick}>Click me</button>
          </div>
        </div>
      )
    }

    // render the component to the DOM
    const root = ReactDOM.createRoot(document.getElementById('banner'))
    root.render(<Banner />)
  </script>
  ```

- > 3. pass the event object, (e), as an attribute in the function

  we also get access to an event object inside this handler function, and that's for any handler function for any event.

  If we reference a function in reaction to some kind of event, then we automatically get access to the event object, which contains information about that event that just occurred.

  ```html
  <script type="text/babel">
    const Banner = () => {
      const title = 'Welcome to my website'
      const subtitle = 'this is a website for learning react'
      const address = 'https://www.netninja.dev'

      const handleClick = (e) => {
        console.log('you clicked me')
        console.log(e)
      }

      return (
        <div>
          <h2>{title.toUpperCase()}</h2>
          <p>{subtitle}</p>
          <p>Today's date is: {new Date().toDateString()}</p>
          <p>Random number: {Math.random() * 100}</p>
          <a href={address}>Visit the Net Ninja</a>
          <div>
            <button onClick={handleClick}>Click me</button>
          </div>
        </div>
      )
    }

    // render the component to the DOM
    const root = ReactDOM.createRoot(document.getElementById('banner'))
    root.render(<Banner />)
  </script>
  ```

- > how to use inline functions instead of functions that declared up here outside of the template.

  a lot of the time, if it's just one line of code like this, what I do is I bring this back up and have it on this line or right here like so.

  And because it's one line as well, we don't technically need these curly braces.

  ```html
  <script type="text/babel">
    const Banner = () => {
      const title = 'Welcome to my website'
      const subtitle = 'this is a website for learning react'
      const address = 'https://www.netninja.dev'

      // const handleClick = (e) => {
      //   console.log('you clicked me')
      //   console.log(e)
      // }

      return (
        <div>
          <h2>{title.toUpperCase()}</h2>
          <p>{subtitle}</p>
          <p>Today's date is: {new Date().toDateString()}</p>
          <p>Random number: {Math.random() * 100}</p>
          <a href={address}>Visit the Net Ninja</a>
          <div>
            <button onClick={(e) => console.log(e)}>Click me</button>
          </div>
        </div>
      )
    }

    // render the component to the DOM
    const root = ReactDOM.createRoot(document.getElementById('banner'))
    root.render(<Banner />)
  </script>
  ```
