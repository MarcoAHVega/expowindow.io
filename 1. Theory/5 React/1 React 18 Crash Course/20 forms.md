# forms

- > create a form with regular html

all right for our next topic we are going to learn the basics of working with forms in react

we will see how to capture input from an input html element and have the data
available for form submission

- i'm going to begin by creating a new file in the components folder, `Form.js`

within the file create a function
component export const form is equal to an arrow function

for the jsx let's start with a form element
so return the form tag

within the form tag add a div tag to group together a label and input

the label is going to be username and we add a corresponding input, type is equal to text

```js
export const Form = () => {
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' />
      </div>
    </form>
  )
}
```

if we include this component in app component

import the component at the top

```js

```

save the file and take a look at the browser

you should be able to see the label and the input field

- > manage the form with react

right now though the form is regular html

we want to manage it with react

to do that the first step is to create a state variable to handle the value and change in value of this input element

so in form.js, at the top import useState from react

```js
import { useState } from 'react'

export const Form = () => {
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' />
      </div>
    </form>
  )
}
```

within the component
let's create a state variable name

the setter function is set user name

this is going to be equal to the use
state function with an initial value of empty string

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' />
      </div>
    </form>
  )
}
```

now for the second step on the input element we assign username
to the value attribute so value is equal to username state
variable

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' value={username} />
      </div>
    </form>
  )
}
```

now if you save the file and go back to the browser
try type in a username

- > handling the onChange event

you're going to find out that the input
doesn't reflect the changes which brings us to the third step

handling the onChange event on the input element let's listen to the
onchange event

and to this we assign an arrow function

the function automatically receives the change event as an argument

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) =>}/>
      </div>
    </form>
  )
}
```

we can use that event to update the username state variable

so call set user name
passing in event dot target dot value

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
    </form>
  )
}
```

`this is nothing but the input elements value`

if we now head back to the browser
and type in vishwas you can see it works

- > how to submit the form data

all right we are able to keep track of the change in username

next let's see how to submit this form
data

in the jsx within the form tag i'm going
to add a submit button

type is equal to submit and the text is also submit

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

if you go back to the browser click on the submit button
you see that the page refreshes

so right now the form has the default
html form behavior of browsing to a new page when the submit button is clicked

- > execute a javascript function that handles the submission

a common approach however is to execute a javascript function that handles the
submission of the form

and that form will also have access to the data that the user entered into the
form

so on the form tag we are going to assign a handler
to the on submit event

let's call it handle submit

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

let's now define this handler, const handle submit is going to be equal to an arrow function

this function automatically receives the
submit event as an argument

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')

  const handlerSubmit = (event) => {}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

to prevent the page refresh we call
event dot prevent default

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')

  const handlerSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

and then in the next line we simply
alert the user name so alert, backticks,

form data is dollar curly braces username

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')

  const handlerSubmit = (event) => {
    event.preventDefault()
    alert(`Form data is ${username}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

if you now save the file and go back to the browser

fill in the username

and click on submit you should be able to see the text from
data is vishwas

the page also does not refresh

this is pretty much the basics of working with forms in react

now as a quick exercise i suggest you handle two more form controls

- create a text area element for description

- and a select drop down element to capture a country

- handle the value and they're on change events and ensure you have the data for submission

let me know in the comments section if
you were able to achieve that
