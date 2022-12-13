# parent and child component communication

let's now move on to the next topic which is parent and child component communication

earlier we have seen how a parent component can pass down props to its children components

```js

```

any data in the parent component when passed as props is available in the children components

- now what if a child component wanted to communicate with the parent component

- strangely we still use props but this time we pass in a reference to a function as props to the child component

let me help you understand better with an example

- i'm going to create a new file called parentComponent.js

within the file i'm going to define a new function component

export const parent component is equal to an arrow function

```js

```

within the component i'm going to define a function greetParent which simply alerts "hello parent"

so const greet parent is equal to a function where we alert hello parent i'm going to leave the jsx empty for now

```js

```

next i will create another file called childComponent.js

export const child component, and for the jsx i will add a button that says greet parent

```js

```

now back in the parent component i will include the child component in the jsx, so return child component

```js

```

now for me i have a vs code plugin which automatically imports the child component

if that doesn't work for you make sure you import child component from dot slash child component

back in app component i will include the parent component in the jsx, so import parent component from dot slash components slash parent component

and add it in the jsx

```js

```

now if i save all the files and take a look at the browser

if i zoom in a bit you should be able to see the button greet parent

if i click on the button though nothing happens right now

- but what i want is when we click on the button, in the child component, i want to execute the function defined in the parent component

basically the child component calls a parent components function

as i mentioned already this is achieved using props

the only difference this time is we pass the function itself as a prop to the child component

so on the child component let's add a prop called greet handler and this is going to be equal to the greet parent function

so we are passing a reference to the great parent function

```js

```

make note of the absence of the parentheses

we can now grab hold of this function in our child component, specify props parameter, and on click of the button we call props dot greet handler

```js

```

let's save the file and see if this works

i'm going to go back to the browser, click on the button and you can see the alert hello parent

- so we have successfully called a function in the parent component from a button in the child component by passing the function as props to the child component

- this is something you're going to do quite often in your applications so please make a note of it

> `how to pass a parameter when calling the parent component function from the child component`

now let's see how to pass a parameter when calling the parent component function from the child component

and this is where an arrow function in the return statement is really useful

arrow function syntax is the simplest way to pass parameters from the child component to the parent component

let me convert the onclickhandler into an arrow function

props.greethandler with parentheses

```js

```

now we can pass in any number of parameters to the greet handler

to keep this simple let's pass one argument which is the string child

```js

```

let's incorporate this argument in the greet parent function secret parent and we specify child name as a parameter

```js

```

and in the alert statement
template literal syntax
from es6 and we interpolate child name parameter

```js

```

if we save the files, head to the browser, click on the greet parent button
you should see the alert hello parent child

child here is the argument from the
child component

we have successfully passed a value from the child component to the parent
component

so this is pretty much how you pass functions as props in react components
and handle the parent and child communication

let's now move on to the next important
topic which is conditional rendering