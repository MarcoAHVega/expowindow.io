# Nextjs 13 complete tutorial #1

https://youtu.be/TkFIm2d9tec

# setup

- > using nextjs 13 with the pages folder

in this course you will be using nextjs 13 `with the pages folder`

and `also this app directory` at the end of this course

- and you will see how easy it is at the end of the course when we update from pages to app directory

documentation/getting started

one important thing here is the system requirements

I am using npx, you should name

```
npx create-next-app@latest [name]
```

without typescript nor eslint

then

```
cd next-blog
```

end run it

```
 npm run dev
```

you see it's using the localhost 3000

see it says welcome to next.js

# Navbar

- > in the root folder, create a components folder

- in there, create a component file, `Navbar.jsx`

- create a rafce

```js
import React from 'react'

const Navbar = () => {
  return <div>Navbar</div>
}

export default Navbar
```

- use it, import it add to `_app.js`

- now the Navbar is available in all the pages

- > install material ui5 and the Icons

- https://mui.com/

Get started/

```
npm install @mui/material @emotion/react @emotion/styled

```

icons

```
npm install @mui/icons-material
```

- in the Navbar component, import and use the `Container` component from MUI inside a fragment

```js
import React from 'react'
import { Container } from '@mui/material'

const Navbar = () => {
  return (
    <>
      <Container>Navbar</Container>
    </>
  )
}

export default Navbar
```

- and also the `AppBar`

```js
import React from 'react'
import { AppBar, Container } from '@mui/material'

const Navbar = () => {
  return (
    <>
      <Container>
        <AppBar>Navbar</AppBar>
      </Container>
    </>
  )
}

export default Navbar
```
