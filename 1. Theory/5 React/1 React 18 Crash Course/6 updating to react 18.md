# React 17 vs React 18

now although this works perfectly fine there is a small update needed in index.js

at the moment create react app installs version 18 as a dependency but the root api still uses version 17 of react

let's fix it before proceeding

at the top comment out the import statement for react dom and instead add import create root from react dom client

next comment out the react dom render method and instead add const container is equal to document.getElementById root const root is equal to the create root function which we have imported passing in container and finally root dot render the app component

doing this will enable you to use react 18 features

if you are watching this video a few weeks or months after the video has been published you might not have to do this as create react app might be updated by then but for now make this small change to render the app component

```js
import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

now i have mentioned the word component several times already but what exactly is a component?
let's understand that next
