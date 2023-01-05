# useTransition hook

- > unlike use state and use effect use transition is a hook that is more concerned with performance rather than supporting a core functionality

the use transition hook which was introduced in react 18.

the best way to understand use transition is with an example so let's
dive into the code straight away

for this example we need a large list of
items

- i'm going to create a new file called `data.json` and copy paste an array of 1000 names

i have used mackaroo.com to generate this json data

each object in the array contains a unique id first name and last name

- > now that we have our list let's render it in the app component

at the top begin by importing the names json so import
names from dot slash components
slash data dot json

```js
import './App.css'
import NAMES from './components/data.json'

function App() {
  return <div className='App'></div>
}

export default App
```

next in the jsx
we render the list of names using the map method

very similar to list rendering that we
have learnt earlier

so curly braces
names dot map

map accepts a function as argument

this function receives each object in the array as an argument let's call it item

```js
import './App.css'
import NAMES from './components/data.json'

function App() {
  return <div className='App'>
  {
    NAMES.map((item)=> (

    ))
  }
  </div>
}

export default App
```

for each item we render a paragraph that displays the first name and last name
item dot first name followed by
item dot last name

make sure to also include the key prop
with a unique value when rendering a list of elements

key is going to be equal to item dot id

```js
import './App.css'
import NAMES from './components/data.json'

function App() {
  return (
    <div className='App'>
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

if we save the file and take a look at the browser

we should be able to see the list of
1000 names being displayed

- > now what we want to do is allow the user to enter a filter text and filter the list of names based on that text

- let's begin by adding the input field

at the top
import you state from react

```js
import './App.css'
import NAMES from './components/data.json'
import { useState } from 'react'

function App() {
  return (
    <div className='App'>
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- within the component create a state variable to manage the text field value

so const query comma set query

and this is going to be equal to use
state with an initial value of empty string

```js
import './App.css'
import NAMES from './components/data.json'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  return (
    <div className='App'>
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- in the jsx add an input field

type is equal to text

value is equal to query

on change is equal to change handler

```js
import './App.css'
import NAMES from './components/data.json'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- let's define the handler

const change handler
is equal to an arrow function

this receives an event
and within the function body we call set query passing in event dot target dot
value

```js
function App() {
  const [query, setQuery] = useState('')
  const changeHandler = (event) => {
    setQuery(event.target.value)
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- now let's filter the names with this query text

const filtered names
is equal to names dot filter

and for each item
we return either item dot first name includes the query
text or item dot last name includes the query text

```js
import './App.css'
import NAMES from './components/data.json'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

finally instead of mapping over names map over filtered names

```js
import './App.css'
import NAMES from './components/data.json'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

if we now save the file and head to the browser we have our input and the list of names

in the input field type bin and we see the filtered list of names

- > everything works well but that is dependent on the machine you're running the application on

i have decent specifications on my machine but not everyone might have that

so let's open the dev tools
head over to the performance tab and throttle cpu

6x slow down

we are basically asking our react app to
be run on a computer that is six times slower

i want you to now observe what happens
when i select the full text and hit backspace
three two one and backspace

you can see there was a lag for almost a second before the ui updated

and this is because the filtered list of names had to be recalculated

if i type in bin again it feels slow as well

it might not be visible to you but i can also sense the lag when typing

what i want you to observe is that when i clear the text it is not cleared out right away
instead it waits for the filtered list to be recalculated and both the input
field and the list of names then update at the same time

backspace and you can see both happen at the same time

this is because by default all updates in react are considered
urgent

which as you might see can create a problem when quick updates like updating
the input field text is slowed down by heavy updates like recalculating the
filtered list

- > to solve this problem what we need is a way to tell react some updates are not urgent that would help react process the urgent updates first and then the not so urgent updates

- this is where the use transition hook comes into picture

- > the useTransition hook allows us to mark some updates as interruptable and non-urgent

or in other words we can mark them as transitions

react will process urgent updates first and then transitions to improve the
perceived performance

let's see how it works

- first import use transition from react

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- next invoke it within the component

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  useTransition()
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

the hook returns two values
is pending which is a boolean value indicating whether the transition is in progress

and a start transition function
which is used to mark heavy updates as transitions

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- next we're going to create another state variable to manage the input text value separately

so const input value
comma set input value is going to be equal to u state with an
empty string as the initial value

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

but now we update the value prop
to input value

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={inputValue} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

and in the change handler
call set input value

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) => {
    setInputValue(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={inputValue} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

set query though we will still update
with the input value but as a transition

so within change handler
invoke start transition function which accepts a callback
so pass in another function and here we call set query passing in
the same input value

so start transition accepts a function where we make the state change that causes a heavy update

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()

  const changeHandler = (event) => {
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))

    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={inputValue} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

query is used in the filter function which is the heavier operation

in the jsx let's use the ease pending flag to
render some text and indicate that the transition is still pending

so below the input curly braces
is pending and a paragraph tag that says updating list ...

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()

  const changeHandler = (event) => {
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))

    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={inputValue} onChange={changeHandler} />
      {isPending && <p>Updating list...</p>}
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

if we now head back to the browser
type bin we see the filter list

but when i clear out the text i want you to observe that the input field text updates first and then the
filtered list updates after a small delay we will also see the updating list text
below the input since the transition would be in progress
three two one backspace
we can see input is now cleared we see the text updating list
and finally the list updates so we are able to separate the urgent
updates from the non-urgent updates this gives you a small improvement in
the performance or at least the perceived performance
that is how they use transition hook functions now as a beginner
this is the only new feature from react 18 that you need to be concerned about
other features include automatic batching which is out of the box and you don't have to write any additional code
and a few other features related to suspense and server-side rendering which are again advanced
topics
