# conditional rendering

- > two common ways to conditionally render in react

let's now move on to the next important
topic which is two common ways to conditionally render in react

when you're building react applications
you may often need to show or hide some html based on a certain condition

luckily conditional rendering in react works the same way conditions work in
javascript

let's look at two common ways to conditionally render in react

- in the components folder i'm going to create a new file called
  UserGreeting.js

within the file i'm going to create a
simple component

export const user greeting

and within the component i'm going to define a new constant
const isLoggedIn is equal to false

for the jsx i'm going to add a message
that says welcome

```js

```

- now what i want is for the message to be conditionally rendered
  based on the value of isLoggedIn

if i am logged in the message welcome vishwas should be displayed

and if i am not logged in the message welcome guest
should be displayed

- > using the ternary operator

the first way to achieve that is using the ternary operator

so after welcome we add a pair of curly braces to evaluate the javascript expression

the expression is to check if is logged in is true or false

if it is true append vishwas

else append guest

let's save this file

```js

```

include it in app component, so user greeting
import it at the top

```js

```

and head back to the browser
you can see that the message welcome guest is displayed and that is because he's logged in is set to false

change it to true

```js

```

and the message welcome vishwas is
displayed

- > using the short circuit operator approach

all right the final approach is the short circuit operator approach

and this approach is just a specific case of the ternary operator approach

when you want to render either something or nothing you make use of the short circuit operator

for example right now we return either welcome vishwas or welcome guest based
on the value of is logged in

- now let's say if the user is logged in i want to display welcome vishwas and if the user is not logged in i want to render just welcome on the screen

so based on is logged in render either
welcome vishwas or nothing

to do that, within curly braces we write is logged in ampersand ampersand
vishwas

```js

```

so what happens here is the expression evaluates the left hand side of the
operator, is logged in

if it is true it also evaluates the
right hand side which in our case is jsx that will be rendered in the browser

however if at all the left hand side evaluates to false the right hand side
will never be evaluated as it doesn't affect the final value of the whole expression

so if is logged in is set to true you can see in the browser welcome
vishwas is displayed

i change it to false

```js

```

only welcome is displayed as you can see if you know javascript
conditional rendering is pretty straightforward
