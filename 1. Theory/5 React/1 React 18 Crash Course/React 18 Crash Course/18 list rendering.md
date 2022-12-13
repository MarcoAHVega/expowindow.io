# list rendering

- > in react we use the javascript map method to repeat some html for each item in the list

all right for our next topic let's look
at another common scenario that we come across when building web applications

and that is displaying a list of items

for example a list of names a list of
products a list of courses etc

what we have to do is repeat some html
for each item in the list

in react we use the javascript map method to achieve that

- i'm going to create a new file in the
  components folder called NameList.js

- within the file i'm going to create a new function component

export const name list and this is equal to an arrow function

within the component i'm going to create an array of names, const names is equal to an array bruce clark and diana

let's return a div tag and within the div tag we use the map method on the array

since that is a javascript expression we start with curly braces array.map is the syntax

so names dot map

```js

```

the map method takes in a function as an argument we will be using an arrow function

the function receives an argument which i am going to call as `name`

```js

```

you can name it anything you want to but i recommend naming it something relevant to the array you're iterating over

now the fat arrow symbol is next followed by the function body which will
be the transformation

```js

```

what we want to do is for every name return an h2 tag with the name as the inner html

so return an h2 tag with name as the inner html

once you start writing html you need to reuse curly braces so we need another pair for the name argument

```js

```

and that is pretty much it

if you now save the file

include it in app component name list

and import it at the top

```js

```

head back to the browser we should be able to see the list of
names being rendered, bruce clark and diana

now although this works fine if we take a look at the devtools console
we see a warning

- > each child in a list should have a unique key prob

to fix this on the item returned from map method
which is the h2 element we add a key prop and assign a unique value

since each of the names are unique in the array we can assign the same to the key prop

```js

```

if we take a look at the browser refresh
you can see the warning has disappeared

now the key prop doesn't represent anything in the user interface

however `it is internally used by react to construct the list of elements in the dom in a more efficient way`

the key prop also helps prevents bugs when you're dealing with lists that involve sorting or filtering

but from a beginner's point of view you just have to remember to specify the key prop and assign a unique value to it

if you are iterating over an array of objects you typically tend to have an id
property that is unique and can be used as the key prop value

but this is pretty much how you render a list of items in react using the map method

if you're unsure as to what the map method is please do google array.map in
javascript 

and get a basic understanding of how it works

once you understand that you can come back to the code we have written in our component
