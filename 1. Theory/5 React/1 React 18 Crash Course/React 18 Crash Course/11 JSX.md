# JSX

- > JSX is a syntax extension to javascript

for our next topic we're going to
quickly take a look at jsx

jsx is probably the word you're going to
see and hear a lot in the world of react

so it's really important that you at least know what jsx is from a beginner's
point of view

if we take a look at our greet component we see html being returned

however this is not html it is called jsx and `is a syntax extension to javascript`

in react jsx is what describes how the
ui should look like

in this case it should be an h1 element

> Javascript expressions in JSX

jsx comes with the full power of javascript

for example if we have to evaluate an expression, `within a pair of curly braces` let's specify two plus two

```js Greet.js
export const Greet = () => {
  return <h1>Hello Vishwas {2 + 2}</h1>
}

// export default Greet
```

save and we see four in the browser

- `we can also run conditional code, map over a list, etc`

you will slowly get used to what jsx
is capable of as we progress through this course

> javascript reserved words in JSX

however at this point in time let me
point out some of the differences you're going to see in jsx compared to regular
html

the first one which is already present in app.js is `class` being replaced by `className`

in app.js you can see className is equal to app
and app is a class defined in app.css

```js App.js
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

similarly we also have the `for` attribute being replaced by `htmlFor`

since it is a keyword in javascript

> camelCase property naming convention in JSX

you're also going to see camelCase property naming convention instead of html attribute names

for example `onclick` and `tabindex` will become `onClick` and `tabIndex` with an upper case C and I

we will see these differences as we progress through the course so don't worry about having to memorize them

> react elements

(What Are React Elements? https://youtu.be/nI1ey-u5VeQ)

the last point you have to know as a beginner and something you can dig into after the
course is about react elements

we write jsx which appears to be similar to html since it is the easiest way to write what the component should render in the ui

- `under the hood jsx produces what are called react elements` which are in turn converted to
  objects that are used to construct the dom

the topic might be overwhelming as a beginner so for now just keep in mind:

- a react component returns jsx

- and jsx is simply a syntax extension to javascript

we will be writing a lot of jsx throughout this course so you will get used to it even if it hasn't made much sense so far
