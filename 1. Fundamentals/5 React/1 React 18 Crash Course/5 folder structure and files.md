# the applications folder structure and files

- > package.json

  this file contains the `dependencies` and the `scripts` required for the project

  you can see that we are using react and react dom version 18 and they are listed as dependencies

  both the libraries are necessary to create react applications

  we also have a few scripts to `start` the application, `build` the application or even run `tests`

  we then have `the configuration for eslint` which is a tool to highlight possible errors in the code

  finally we have the compatible browser list

- > package-lock.json file

  next based on whether you have npm or yarn as a package manager you're going to see your unlock or package log files

  this file ensures consistent installation of your dependencies and you don't really have to worry about it

- > .gitignore file

  we also have a git ignore file to ignore files and folders from version control

- > README.md file

  and a standard readme file

- > node_modules folder

  next let's talk about the folders the first one is node underscore modules

  this is the folder in which all the dependencies are installed

  it is generated when you run the create react app command or when you run npm install

- > public folder

  the next folder is the public folder

  this folder contains six files

  out of the six `manifest.json` along with the `favicon` and the `two logos` are concerned with progressive web apps which is out of scope for our discussion

  we have the `robots.txt` file which is needed for search engines and is nothing react specific

- > the index.html file

  so as a beginner you only have to concentrate on the index.html file

  the index.html file is the only html file you're going to have in your application

  we are building single page applications and this is it

  the ui might dynamically change in the browser but it is this html file that gets served up

  typically you're not going to add any code in this file maybe some changes in the head section but definitely not in the body tag

- > we have one div tag with id is equal to root

  you want react to control the ui and for that purpose we have one div tag with id is equal to root

  at runtime the react application takes over this div tag and is ultimately responsible for the ui

  please make a note of this div tag as we will come back to it shortly

- > the source folder

  the next folder is the source folder which is the folder we will be working with the most during development

- > index.js file

  the starting point of our react application is index.js

  ```js
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import './index.css'
  import App from './App'
  import reportWebVitals from './reportWebVitals'

  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals()
  ```

  in index.js we specify the root component which is app component and the dom element which will be controlled by react

  the dom element in our example is an element with id is equal to root and if you can recollect this is the element in our index.html file

  we call this div element as a `root dom node` because everything inside it will be managed by react

  for the hello world application the app component is rendered inside the root dom node

- > App.js file

  that brings us to the app component which is present in app.js

  this is also the file we edited a minute ago and is responsible for the html displayed in the browser

  in other words `the app component represents the view which we see in the browser`

- > App.css file

  with app.js create react app also generates a css file for styling. the css file contains classes which are applied in the app component

- > App.test.js file

  and a test.js file for unit tests. the test file contains a simple test case

- > index.css file

  we also have an index.css file which applies styles to the body tag and is referenced in index.js

- > logo.svg

  we have the logo svg which is referenced in the app component

- > reportWebVitals.js

  and finally report web vitals for performance and analytics tracking

- > setupTests.js

  and setup tests which is again related to testing

  these two files can be ignored as a beginner

  so that is the folder structure of a react application created using create
  react app

- > when you run the command npm start...

  index.html file is served in the browser

  index.html contains the root dom node

  next the control enters index.js

  react dom library renders the app component onto the root dom node

  the app component contains the html which is ultimately displayed in the
  browser
