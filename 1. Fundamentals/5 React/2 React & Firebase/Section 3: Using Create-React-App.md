# 12. Making a React Site (create-react-app)

- > Create React App

  So Create React App is a tool that generates a new React site for us along with all of the configuration and dependencies it needs to run.

  https://create-react-app.dev/docs/getting-started

  ```
  npx create-react-app [app-name]
  cd my-app
  npm start
  ```

# 13. Project Structure Walkthrough

- > from top to bottom

  - the `node_modules` folder

  This is a folder at the stores, all of our project dependencies and node packages

  - the `public` folder

  this is a folder where we put any files that would be made public to the browser

  - public/`index.html` file

  which is the single file served to the browser

  If we open that, file up and scroll down to the body will see this div right here with an ID of root.

  This is where our React application will be injected into the page, and there's pretty much nothing else in this HTML file

  - the `source` folder

  this is where all of our own compiled React source code is going to go.

  So any react components that you make are going to live inside this folder.

  - src/`App.js` file

  This is a React component file.

  Typically, when you work with you, react, each component is going to have its own file.

  - src/`App.css` file

  this is being used to style the up component

  - src/`index.css` file

  which is more of a global stylesheet

  - src/`logo.svg` file

  which is an image being used inside the up component

  - src/`App.test.js` file

  is for writing tests for our app component

  - src/`setupTests.js` file

  which is needed for our test files to work

  - src/`reportWebVitals.js` file

  which allows us to measure the performance of our React application by analyzing certain metrics.

- > I'm just going to delete `App.test.js`, `setupTests.js`, `reportWebVitals.js`files because we won't be using them

- > last file inside the source folder is the `index.js` File, and this is the file that kind of kickstart our React application.

  So inside it, you're going to see that we import react, the css and App

- > `delete the reportWebVitals import` and also delete the function at the bottom as well

# 14. Running the Application

- > the start script

  What this does is spin up a local development server on a certain port number, and it serves up our index.html file or page so we can preview it in a browser.

  - run the start script from the app directory

  ```
  npm run start
  ```

- > let's take a look at the App component inside the App.js file

  - It's returning a JSX template and all of this content inside the template is what we're seeing in the browser

  - notice as well that at the bottom of the file, we export the app component.

  - This is important. We always export our components so that the can be imported and used in all the files. when we import a component, we can use that component just like a regular html tag

  - I just wanted to remind you that all of our source code is compiled before it reaches the browser. Because browsers don't understand React components and JXS as they are, they need to be compiled into JavaScript

# 15. Using Images

- > there's two ways we can use images in react applications.

- > The first way is to put images in the src folder

  - 1. add your images inside the source folder (sometimes I might create an `assets` folder inside the source folder and place all my images in that.)

  ```
  src/logo.svg
  ```

  - 2. then we can import those images into a component folder to use it.

  ```js
  import logo from './logo.svg'
  ```

  - 3. then all we do is we output that inside the source attribute on the image tag

  ```js
  <img src={logo} className='App-logo' alt='logo' />
  ```

  - So notice here that we don't use quotes for the attribute. We're just using `curly braces` because we're outputting something dynamic.

- > The second way is to put images in the public folder

  - if we place an image inside there, then we can just reference it in our image tags

  - For example, I could move the logo.SVG file from the source folder into the public one

  - And then in the up component, I'm going to remove the logo import because I don't need that anymore.

  - And then in the source attribute for the image, I can just say forward `'/logo.svg'`

  ```js
  import './App.css'

  function App() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src='/logo.svg' className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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

- > But which way is the better way?

  - what I tend to do is put any site wide images that might be used in many different places inside the public folder, but also do that if importing specific images for some reason might be problematic or if you're using that image outside the scope of React.

  - But for images that are one off and only used in specific components, I'd probably import them from the source folder.

# 16. Using Stylesheets

- > the index.css file

  - this would typically be your global style sheet, which would be used to hold some basic reset styles and styles for common elements or classes that are used in many different places in your application, for example, heading styles, button styles, that kind of thing.

  ```css
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  ```

  - This index.css file is then imported into the index.js file, the file that kick starts the React application

  - `when it's imported Like this, the css is effectively injected into a style tag on the HTML page head section.`

- > the App.css file

  if we take a look inside our App.js file, we can see that at the top and import the App.css file.

  `And when he does this, those styles, just like with the other stylesheet, are injected into the head of the HTML page.`

- > So this is a couple of places now that we can add our styles, either in a `global style`, she or `a component specific stylesheet`.

- > I do want to mention that even component specific CSS files are also treated as global styles

  - They are placed in the head of the HTML document so they can apply styles to anything or any component on the page.
