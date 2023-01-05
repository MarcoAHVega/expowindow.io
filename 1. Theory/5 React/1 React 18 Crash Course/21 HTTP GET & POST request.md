# HTTP GET & POST request

- > how to make a get request

all right for the penultimate topic in
this crash course we are going to learn how react works with http

we're going to understand with an example how to make a get request and how to make a post request

let's start with get requests

to fetch the data we need to have an api
endpoint

- for that i will be making use of json placeholder (https://jsonplaceholder.typicode.com/)

as you can see here it is basically a free fake api for testing and
prototyping

i want to focus on fetching data in our react application and not on creating an api

now if you scroll down to the `Routes section` you can see the possible http requests
you can make

- for this video i will be making a Get request to slash posts which will fetch
  an array of posts to display in the ui

let's get started

- i'm going to go back to vs code and create a new component PostList.js

and within the file i'm going to create a function component

export const post list and this is going to be equal to an arrow function

```js
export const PostList = () => {}
```

- now to fetch data we need two hooks useState, which we had previously seen and a new hook called useEffect

so at the top
import use state comma use effect
from react

```js
import { useState, useEffect } from 'react'

export const PostList = () => {}
```

- next we're going to create a new state variable within the component

const, post, the setter function is called setPosts and this is going to be equal to use
state with an initial value of empty array

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])
}
```

- next we're going to use the use effect hook to make the get request

the syntax is as follows use effect invoke use effect within the component the hook takes in a function as argument

so let's add an arrow function within the function body we make the get
request using the built-in fetch api so fetch

and we pass in the api endpoint this is the url from jsonplaceholder.com

copy and paste it

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
  })
}
```

the fetch api returns a promise which we
need to resolve

so dot then block and convert the response to json
and chain another then block and with the data retrieved
update the posts state variable

so set post passing in data

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.jason())
      .then((data) => setPosts(data))
  })
}
```

let's also add a catch block and log the error to the console if there is any

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.jason())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err)
      })
  })
}
```

now the effect we have defined here runs every time the component renders

however we want this to run only once when the component first renders

to do that we pass in an empty array as the second argument to use effect

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.jason())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err)
      })
  }, [])
}
```

the array is a list of dependencies on which this effect depends on

since we want the api call to happen only once it has no dependencies

- the final step is to render the list of posts in the browser

so return a div tag a ul tag and then curly braces
posts dot map

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.jason())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <ul>{posts.map()}</ul>
    </div>
  )
}
```

we have already seen how to render a list of items so let me go over this
fairly quick

for each post we return the li tag
and each post has a title that we can display

we should also specify a unique value
for the key prob which is going to be post dot id

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.jason())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return <li key={posts.id}>{posts.title}</li>
        })}
      </ul>
    </div>
  )
}
```

you can see here that each object in the array has an id and a title

all right let's include this component in app.js and test it out

post list and if that doesn't auto import for you
make sure to import the component at the top host list from dot slash components
slash post list

```js

```

if you now head to the browser
you should see the list of post titles being displayed

this is pretty much how you fetch data
with use effect and display the data with you state

use effect is a hook that you can use to make side effects in your components

the side effect in this example is an api request

the first argument to use effect is a
function and the second argument is a dependency array which is used to
determine when to rerun the effect

since we have an empty array the effect
is run only once when the component first mounts

- > how to make a post request to send data from our react application

now on similar lines let's see how to
make a post request to send data from our react application

if we go back to jsonplaceholder, under routes we have a small node
seed guide for usage examples

here if you scroll down you can see we have the code necessary
to make a post request

however the data it needs
which is title body and user id are hard coded

let's instead capture user inputs and make the first request using the data

- back in vs code i'm going to create a new file called post form dot js

within the file i'm going to create a function component

export const post form is equal to an
arrow function

now for the jsx we need a form with
three input fields

return a form tag
a div tag type is equal to text

and placeholder is user id

the second input placeholder is title

and the third input placeholder is body

```js
export const PostForm = () => {
  return (
    <form>
      <div>
        <input type='text' placeholder='User ID' />
      </div>
      <div>
        <input type='text' placeholder='Title' />
      </div>
      <div>
        <input type='text' placeholder='Body' />
      </div>
    </form>
  )
}
```

- next let's create state variables for the three fields and link them to the input elements

at the top import use state from react

and within the component call use state three times for each of the three inputs

```js
import { useState } from 'react'

export const PostForm = () => {
  useState()
  useState()
  useState()
  return (
    <form>
      <div>
        <input type='text' placeholder='User ID' />
      </div>
      <div>
        <input type='text' placeholder='Title' />
      </div>
      <div>
        <input type='text' placeholder='Body' />
      </div>
    </form>
  )
}
```

the first one const user id comma set user id
and the initial value is an empty string

similarly
const title comma set title and the initial value is an empty string

finally const body comma set body and the initial value is an empty
string

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  return (
    <form>
      <div>
        <input type='text' placeholder='User ID' />
      </div>
      <div>
        <input type='text' placeholder='Title' />
      </div>
      <div>
        <input type='text' placeholder='Body' />
      </div>
    </form>
  )
}
```

on the inputs let's assign the
appropriate variable to the value attribute

value is equal to user id

value is equal to title

and value is equal to body

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  return (
    <form>
      <div>
        <input type='text' placeholder='User ID' value={userId} />
      </div>
      <div>
        <input type='text' placeholder='Title' value={title} />
      </div>
      <div>
        <input type='text' placeholder='Body' value={body} />
      </div>
    </form>
  )
}
```

also handle the onchange event

you get access to the event and on the first input we call set user
id passing in event dot target dot value

similarly on change event
set title event dot target dot value

and on change event set body
event.target.value

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  return (
    <form>
      <div>
        <input
          type='text'
          placeholder='User ID'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
    </form>
  )
}
```

- the last thing we need is the submit handler

i'm going to add a button
of type submit

and then on the form tag we listen to the on submit event and assign a handler
submit handler

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  return (
    <form onSubmit={subHandler}>
      <div>
        <input
          type='text'
          placeholder='User ID'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

let's define this handler

const submit handler is going to be equal to a function
which receives the submit event and within the function body we call event dot prevent default
to prevent the form submission and page refreshing

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type='text'
          placeholder='User ID'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

finally to make the post request
copy the code from jsonplaceholder and paste it

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type='text'
          placeholder='User ID'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

however change the hard-coded values
title body and user id

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'title',
        body: 'body',
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type='text'
          placeholder='User ID'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

the other noticeable difference with the built-in fetch method as we now have method set to post
and headers

with the response we simply convert it into json and log it to the console

now let's include this component in app component

import the component at the top

```js

```

save the file and head back to the browser
i fill in user id title
body and click on submit

in the console you should now be able to see the response

if you expand the object you pretty much get back the same object you posted but this time with the unique id

this object can be used for any necessary changes in the ui

for example you can add this object to
the end of the post list which might be displayed in the browser

so there you go making a post request in your react application

create the input fields type the values to the state object and make a post request in the submit handler

- > making put or delete requests

once you get the hang of get and post requests making put or delete requests
is pretty much the same so i will leave that for you to experiment with
