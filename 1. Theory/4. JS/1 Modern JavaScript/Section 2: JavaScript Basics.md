## 5. Adding JavaScript to a Web Page

- > placing the script `inside` the head.

  in some cases it's going to cause some `loading issues`.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <script>
        alert('hello, world')
      </script>
    </head>
    <body>
      <h1>Page title</h1>
    </body>
  </html>
  ```

- > placing the script at the bottom of the body

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>Page title</h1>
      <script>
        alert('hello, world')
      </script>
    </body>
  </html>
  ```

- > link to an external file

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>Page title</h1>

      <script src="sandbox.js"></script>
    </body>
  </html>
  ```

- > link to an external file using the HTML script `defer` Attribute

  Example
  A script that will be downloaded in parallel to parsing the page, and executed after the page has finished parsing:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <script src="sandbox.js" defer></script>
    </head>
    <body>
      <h1>Page title</h1>
    </body>
  </html>
  ```

  If the defer attribute is set, it specifies that the script is downloaded in parallel to parsing the page, `and executed after the page has finished parsing`.

  Note: The defer attribute is only for external scripts (`should only be used if the src attribute is present`).

## 6. The Browser Console

- > the console is like a sandbox area in a browser, which we can use to test JavaScript code.

  We can print out values and basically just play around in it.

- > we can also log things to the console from our JavaScript file.

  ```js
  console.log(1)
  ```

  Just know that this is a function right here that we can use to log our values to the console.

## 7. Variables, Constants & Comments

- > `Variables` give us a way to store a value, like a name or a number or an email, and then use that value whenever we want to later on in the file.

- > using the `let` key word to create a variable

  ```js
  let age = 25
  let year = 2022

  console.log(age, 2022) // 25 2022
  ```

  Now this value is now stored in memory and we can access it later on using this variable name.

- > reassigning the value

  ```js
  let age = 25
  let year = 2022

  console.log(age, 2022) // 25 2022

  ege = 30
  ```

  what that's going to do is look at where we initially defined age, grab that value and update it

  so that age is now equal to thirty.

- > creating a variable using the `const` keyword

  ```js
  const points = 100

  console.log(points) //100
  ```

- > const variables can not be reassign

  ```js
  const points = 100

  points = 50 // error

  console.log(points)
  ```

  We use a constant if we don't want this value to be overridden by mistake.

- > the var keyword

  ```js
  var score = 75

  console.log(score) // 75
  ```

  this is the old way to create variables before let and const came about.

  Now you still will see some developers use this. But in this case, because we're doing a modern JavaScript course and just going to be using const and let.

- > naming variables constraints

  - there can't be any spaces, It has to be one complete word.

    Typically, if we want to use two or more words in a variable, we use something called camelCase

  - variable names can contain only letters, numbers, underscores or dollar signs.

  - But they can't start with a number

  - there's also some reserved keywords in JavaScript that we can't use for variables because they're used for other things.

  https://www.w3schools.com/js/js_reserved.asp

- > comments in javascript

  - single line comment

  ```js
  var score = 75

  // log things to the console
  console.log(score) // 75
  ```

  by adding two forward slashes at the start.

- > comment out

  ```js
  //var score = 75

  // log things to the console
  console.log(score) // 75
  ```

- > multi line comment

  ```js
  var score = 75

  /* log things to the console
  console.log(score) */
  ```

  by saying Forward Slash and then Asterisk and then we need to close this off at the end of the comment like so.

- > comment keyboard shortcut

  I could highlight something that I want to comment out and press control of forward slash and it's going to comment those out.

  I can do the same thing uncomment those as well.

## 8. Data Types at a Glance

- > in JavaScript, we work with many different data types, there are seven in total

- Number

So then first of all, the numbers, we've seen them in action already, things like `1, 2, 3, 100, 3.14`, even decimals like this, they are all of the number type.

- String

strings are basically a series of characters in single or double quotes, like a sentence or some kind of email like this.

```js
'hello, world'
'mario@thenetninja.co.uk'
```

- Boolean

Booleans are a special, logical, `true` or `false` value.

Not in quotes, they're not strings.

And we use these for evaluating conditions.

- Null

this is a way that we can explicitly say that a variable has no value.

So we could create a variable but set it equal to null to say that that variable doesn't have a real value yet.

- Undefined

Undefined is a type that's given to variables automatically by the browser that have not yet been defined.

So these, Null and Undefined, are both empty values.

- Object

these are more complex data structures which can have multiple different properties and functions, meaning they can perform various different things.

There's a whole subset of built in object types like arrays, dates, object literals.

- Symbol

They are a new addition to the JavaScript language which are closely linked to objects to.

- > JavaScript is known as a loosely typed language

- a variable can hold any data type

We don't have to explicitly say what type of variable it will store or what type of data it will store.

- we can override a variable with a different data type

Meaning if we make a variable and store a string in it to begin with, we can override it later on, if we use the let keyword that is, with a number.

## 9. Strings

## 10. Common String Methods

## 11. Numbers

## 12. Template Strings

## 13. Arrays

## 14. Null & Undefined

## 15. Booleans & Comparisons

## 16. Loose vs Strict Comparison

## 17. Type Conversion
