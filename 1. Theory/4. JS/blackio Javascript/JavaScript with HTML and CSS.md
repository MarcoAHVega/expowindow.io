# Section 3: On to JavaScript!

### 17. Setting up JavaScript file

- > Create a new project folder

  - javascript/ index.html - main.css - app.js

- > the script tag - how to link your JavaScript files to your HTML file.

  - In this course, we will always link our JavaScript file in the body tag

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
      <script src="app.js"></script>
    </body>
  </html>
  ```

- > link the css file

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="main.css" />
    </head>
    <body>
      <script src="app.js"></script>
    </body>
  </html>
  ```

  - you can link CSC files and you can link JavaScript files to your HTML, but you must follow the folder structure.

### 18. Comments

- > using comments

  - comments are used to remind yourself what a piece of code does. It also helps other developers understand what you are writing and your intentions behind you.

- > single line comments

  - are written with two forward slashes

  ```js
  // This is a comment
  ```

- > multi-line comments

  - is just a forward slash, star, star, and another forward slash, and in between your comment

  ```js
  /* I can move this damage to the next line and start writing some more notes here, just like that.*/
  ```

- > Code Blacks {}

  - just like in HTML where we had to section all the HTML from the rest of the code, in JavaScript we use code blocks to a section of the JavaScript from the rest

  - a code block is written like this opening curly bracket and closing curly bracket

  ```js
  {
    // This is a comment
    // This is a comment
  }
  ```

- > keyboard shortcut for comments

  - You basically highlight any line you want to comment and then press command/control forward slash, and that automatically creates these single line comments for you

### 19. Strings

- > Data types

  - Data types is how JavaScript represents data.

  - There are a number of data types out there, but the first one I want to teach you about is a `string`

- > string

  - strings are used to represent text.

  - This is a good place to add names, messages, tiles, etcetera.

- > This is how you write a string.

  - You write a string in either double quotes or single quotes

  - but I recommend using the double quotes because you can run into an error when using single quotes improperly.

  ```
  "my strings"
  ```

- > scape character

  - This backslash (\) is the escape character.

  ```js
  'my string\'s'
  ```

  - It ignores the character that follows the backslash.

    - > Practice on W3Schools

      - Copy and paste the links into a new tab and complete the exercises.

      - https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_strings2

### 21. Var, Let, and Const

- > variables

  - in JavaScript We store data in variables.

  - You can think of a variable as a box, We dump data inside of them and come back to them once we need them.

- > let

  - creating/declaring/initializing a variable with the `let` keyword

  ```js
  let myDogName = 'Max'
  ```

- > changing a variable

  ```js
  let myDogName = 'Max'
  myDogName = 'Maxine'
  ```

  - So when you change a variable name, you don't write the declaration

- > const and var

  - creating/declaring/initializing a variable with the `const` keyword and the `var` key word

  ```js
  let myDogName = 'Max'
  myDogName = 'Maxine'

  const pi = 3.14
  var dinner = 'chicken and rice'
  ```

- > let vs const vs var

  - `let` is the keyword that you use if you know that you may change the value of that variable sometime in the future.

  - `const` is the declaration that you make when you know that you would never change that variable.

  - `var` is the keyword that you want to use to declare variable if you have a variable, is going to change sometime in your future.

  - The difference between let in var is that var variables can be accessed in a wider scope.

### 23. Scope

- > scope is where variables exist.

  - Scope determines the accessibility (visibility) of variables from different parts of your code.

  - JavaScript has 3 types of scope:

  - Block scope
  - Function scope
  - Global scope

  - https://www.w3schools.com/js/js_scope.asp

- > Block scope

  - Variables to clear with let and const only exist between these two curly brackets

  ```js
  {
    let myDogName = 'Max'
    const pi = 3.14
  }
  ```

  - > function and global scope

  - The var keyword is used to declare function-scoped variables and globally-scoped variables.

  - If you use var inside a block, the variable will not be a block scoped. It will either be function scoped or globally scoped depending upon where the block is present.

  - https://www.section.io/engineering-education/variables-in-javascript/#:~:text=The%20var%20keyword%20is%20used,where%20the%20block%20is%20present.

- > we need our code to be as predictable as possible

  - var would let you redeclare a variable with the same name while let and const would not

  ```js
  var dinner = 'chicken'
  var dinner = 'fish'
  console.log(dinner) // fish
  /////////////////////////////////
  let dinner = 'chicken'
  let dinner = 'fish'
  console.log(dinner) // Uncaught SyntaxError: Identifier 'dinner' has already been declared
  ```

- > is best practice not to declare variables with this VAR keyword

  - use let for variables that can possibly be changed later on

  - use const for variables that we know won't change later on.

### 24. Console Object (and objects)

- > objects

  - In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

- > objects can have properties and methods

  - properties are attributes of the object

  - Methods define functionality

- > console object

  - JavaScript has some built in objects that allow you to access information and use functionality.

  - The first JavaScript object I want to introduce you to is the console object.

  - The console object is nothing but a variable that's already built into JavaScript

- > the log method

  - we will use a method on this console object to help us debug our code.

  - And the method that we will use on this object is the log() method.

- > dot notation

  - on objects, you access its properties and methods by using this notation.

  ```js
  console.log()
  ```

  - This console object allows us to log things to the console.

  ```js
  let myDogName = 'Max'
  console.log(myDogName)
  ```

### 25. (console) Logging (to further explain) Scope

- > I want to use this logging method to further explain scope.

  ```js
  {
    let myDogName = 'Max'
    const pi = 3.14
    var dinner = 'chicken and rice'

    console.log(myDogName) // Max
    console.log(pi) // 3.14
    console.log(dinner) // chicken and rice
  }
  ```

- > variables created with let or const only exist within the block {}

  ```js
  {
    let myDogName = 'Max'
    const pi = 3.14
    var dinner = 'chicken and rice'
  }
  console.log(myDogName) // error
  console.log(pi) // error
  console.log(dinner) // chicken and rice
  ```

- > avoid unpredictable code

  - The fact that we can access the var keyword outside of Code Blocks makes our code unpredictable and when code becomes unpredictable Bugs are likely to come.

- > Never use the var keyword

### 26. Functions (Arrow)

- > using functions

  - functions are used to run code blocks when we want to run them, instead of them just running by default.

- > This is how you write a function.

  ```js
  const myFunction = () => {}
  ```

  - We write our code between these two code blocks {}

  ```js
  const myFunction = () => {
    console.log('my code goes here')
  }
  ```

  - we are storing this function inside of this variable with the name of myFunction.

- > calling the function

  - functions don't run unless you explicitly run them

  ```js
  const myFunction = () => {
    console.log('my code goes here')
  }

  myFunction()
  ```

  - This is `calling` a function and is also `invoking` a function. You can also think of it as `running` the function.

- > another example a bit more complex

  ```js
  const sayHello = () => {
    const greeting = 'John Does say hi'
    console.log(greeting)
  }

  sayHello()
  ```

  - In this function, I'm declaring a variable with the const keyword here, I'm naming the greeting, Setting it to a string and I'm logging that to the console.

### 27. Arrow Functions (vs function keyword)

- > the older way of writing functions

  ```js
  function myFn() {
    ...
  }
  ```

  - This is the older way of writing a function

  - when you look at code online, you may see someone use this type of function.

  - However, we won't be using this type of function in this course because `I want it to be consistent with which version of a function I'm using`.

- > arrow function

  - this function is an arrow function. The one we learned in a previous video.

  ```js
  const sayHello = () => {
    const message = 'Hello'
    console.log(message)
  }

  sayHello()
  ```

- > Now let's see that as the older way of writing a function.

  ```js
  function sayHello() {
    const message = 'Hello'
    console.log(message)
  }

  sayHello()
  ```

- > parameters

  - You can think of a parameter as a variable being passed into a function.

  - Function `parameters` are the `names` listed in the function definition. (possible parameters)

  - Function `arguments` are the `real values` passed to (and received by) the function. (actual arguments)

  ```js
  const sayHello = (message) => {
    console.log(message)
  }

  sayHello('Hello')
  ```

  - Let's say we wanted to log more than one message.

  ```js
  const sayHello = (message, message2) => {
    console.log(message)
    console.log(message2)
  }

  sayHello('Hello', 'there')
  ```

- > this works the exact same way if we wish to use the older way of writing a function.

  ```js
  function sayHello(message, message2) {
    console.log(message)
    console.log(message2)
  }

  sayHello('Hello', 'there')
  ```

- > if we only had one parameter `using this arrow function`, we can remove these parentheses

- > setting parameters to a default value

  - adding the parameters inside the parenthesis is the same as declaring a variable inside the function without assigning a value to it

  - A parameter is a variable in a function definition. It is a placeholder and hence does not have a concrete value.

  ```js
  let message
  let message2
  ```

  - An argument is a value passed during function invocation.

- > Default Parameters

  - In JavaScript, default function parameters allow you to initialize named parameters with default values if no values or undefined are passed into the function.

  ```js
  const say = (message = 'Hi') => {
    console.log(message)
  }

  say() // 'Hi'
  say('Hello') // 'Hello'
  ```

  - We're using these default values. These have to be the last parameters

### 29. Debugging Part 1

- > The debugger Keyword

  - The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.

  - This has the same function as setting a breakpoint in the debugger.

  ```js
  const sayHello = (message) => {
    console.log(message)
  }

  debugger

  sayHello('Hello')
  ```

- > using chrome devtools with debugger

  - First thing I want you to notice is that when we refreshed the code, automatically stop execution.

- > the source tab in devtools

- > How do we use this debugger?

  - We have a few buttons here at the bottom, and yours may be at a different spot.

  - this play button basically continues execution.
  - step over next function
  - step into function

### 30. Debugging Part 2

- > Let's have a little bit more fun with this.

  - Let's pass in another variable.

  ```js
  const sayHello = (message1, message2) => {
    console.log(message1)
    console.log(message2)
    const myDog = 'Max'
    console.log(myDog)
  }

  debugger

  sayHello('Hello', 'there')
  ```

  - You can already see the power of using this debugger

  - if your code is something that's unexpected You can also put a debugger somewhere in your code,

- > and this debugger can also go within this function here.

  ```js
  const sayHello = (message1, message2) => {
    debugger
    console.log(message1)
    console.log(message2)
    const myDog = 'Max'
    console.log(myDog)
  }

  sayHello('Hello', 'there')
  ```

- > chrome tools debugger

  - if I click any of these numbers (for the lines in the source tab) This also stops execution.

  - It does the exact same thing the debugger keyword does

### 31. Null and Undefined

- > null

  - If we were to declare a variable, let's say myDogName.

  - If we didn't want to set this to a value, if we wanted to intentionally leave out a value, we can assign it to null.

  - And that literally means that we don't have a value for that.

  ```js
  let myDogName = null
  // null
  ```

- > undefined

  - On other hand, if we was to initiate this with the let keyword but not assign it any value.

  - My dog name will automatically equal undefined and undefined just literally means that you did not define this.

  ```js
  //let myDogName = null
  let myDogName
  // undefine
  // null
  ```

- > null and undefined also represent Boolean values.

  - Technically there are considered `falsy` values

- > Boolean()

  - Boolean() is a built in JavaScript object, and we can use it to convert different types to booleans

  ```js
  console.log(Boolean(null)) //false
  console.log(Boolean(undefined)) //false
  console.log(Boolean('Hey')) //true
  console.log(Boolean('')) //false
  console.log(Boolean(2)) //true
  console.log(Boolean(0)) //false
  ```

- > falsy values

  - null, Undefined, an empty string and zero all evaluate to false because they're all falsy values.

  ```js
  null, undefined, "", 0 -> false
  ```

- > truthy values

  - any number but 0, any string

- > How can we use truthy and falsy values?

  ```js
  let myDogName

  if (myDogName) {
    console.log('My dog has a name')
  } else {
    console.log('My dog does NOT have a name') //
  }
  ```

# Section 4: JavaScript Tools

### 32. JavaScript Tools Introduction

- > There's a tool in JavaScript to fix just about anything.

  - I'll be showing you the five most used tools available for each data type.

  - I'll also give you examples of scenarios where you will use these tools.

  - After we finish learning the tools available for strings, we'll move on to the other data types and start the process all over again.

### 33. Dev Tools

- > something additional about the dev tools.

  - docker sides

  - settings

  - theme

<!--^ tools for strings-->

### 34. String Length

- > length property

  ```js
  const MyString = 'Hello, there'
  console.log(myString.length) //12
  ```

- > Where can we use this?

  - With this length property, we're able to monitor the length of characters being put into those the input elements

### 36. Uppercase and Lowercase

- > toUpperCase() method

  ```js
  const myString = 'Hello, there'
  console.log(myString.toUpperCase()) //HELLO, THERE
  ```

- > toLowerCase() method

  ```js
  const myString = 'HeLLo, there'
  console.log(myString.toLwerCase()) //hello, there
  ```

- > And how is this one useful?

  - when a user logs into a website to enter your username and password, that username and password

  - is then checked against the username and password is saved to that website.

  - And the way we check if something equals another thing, we want to make sure the case is exactly the same.

### 38. Trim String

- > trim() method

  - we use this trim to remove any unnecessary characters and this trim Removes characters from the front and from the back.

  ```js
  const myString = '  Marco    '
  const myStringTrimmed = myString.trim()
  console.log(myString.length) //11
  console.log(myStringTrimmed.length) //5
  ```

### 39. Chaining (tool for dot notation)

- > Chaining is nothing but adding an extra dot to use methods and properties in the same line

  ```js
  const myString = '  Marco    '
  const myStringTrimmed = myString.trim()
  console.log(myString.length) //11
  console.log(myStringTrimmed.length) //5
  //////////////////////////////////////
  const myString = '  Marco    '
  console.log(myString.trim().length) //5
  //////////////////////////////////////
  console.log('  hi '.trim().toUpperCase()) //HI
  ```

### 40. index Of characters

- > indexOf() method

  - Sometimes you want to know where a specific letter shows up in a strng and the way you do that is by using this indexOf() method.

  ```js
  const myName = 'Isaiah'

  const index = myName.indexOf('s') // we can put it into a variable

  console.log(index) //1
  ```

  - 1 is printing out because s is that the 1 index

  - indexOf() is `case sensitive`
  - indexOf() gives you back the `first instance` it finds of that letter

  - `indexOf() will returned a -1 if we enter a character that is not in the string`

- > use case for this

  - and one use case for this, is when we want to `make sure that the user enters a full name` by trying to get the index of a empty space

  ```js
  const myName = 'IsaiahHarrison'

  const index = myName.indexOf(' ')

  console.log(index) //-1
  ```

- > lastIndexOf() Method

  ```js
  const myName = 'Isaiah'

  const index = myName.lastIndexOf('s')

  console.log(index) //4
  ```

      - lastIndexOf() gives us back the index of the `last occurrence` of the letter that we put inside the parenthesis

<!--^ tools for numbers -->

### 41. Arithmetic Operators

- > a little practice with the debugger and devtools

  ```js
  debugger
  const costOfApple = 0.5
  const amountOfApplesToBuy = 10

  const total = costOfApple * amountOfApplesToBuy
  console.log(total)
  ```

- > Numbers

  - Numbers are whole numbers or fractions of numbers.

- > arithmetic operators

  - arithmetic operators perform arithmetic on numbers.

  ```js
  //   + Addition
  //   - Subtraction
  //   * Multiplication
  //   ** Exponentiation
  //   / Division

  const x = 5
  const y = 12
  console.log(`x + y = `, x + y)
  console.log(`x - y = `, x - y)
  console.log(`x * y = `, x * y)
  console.log(`x ** y = `, x ** y)
  console.log(`x / y = `, x / y)
  ```

### 43. Modulus

- > Modulus operator

  - modulus gives us back The remainder

  ```js
  const a = 10
  const b = 3

  console.log(a % b) // 1
  ```

- > how is this useful?

  - we can use it for example to find even numbers on index items where the remainder is always 0

  ```js
  const rowNumber = 8
  const b = 2

  console.log(rowNumber % b) // 0
  ```

### 44. Increment Decrement

- > increment operator

  - If I ever want to increment a number by one, I can do a ++.

  ```js
  let a = 1

  console.log('before', a) //1

  a++

  console.log('after', a) //2
  ```

  - we can't assign another value to a constant So I'm using let here.

- > decrement operator

  - -- decreases this number by one.

  ```js
  let a = 1

  console.log('before', a) //1

  a--

  console.log('after', a) //0
  ```

- > How can we use this?

  - Well, let's say you're shopping for a bag or some website and you press at a cart.

  - You go to the actual cart and you decide that you want another one of those.

  - Usually it has those increment and decrement buttons.

### 45. Fixed Decimal Places

- > toFixed() method

  - let's say we wanted to restrict this number to only use two digits after the decimal place.

  ```js
  const x = 2.546832

  console.log('x:', x) // 2.546832

  const y = x.toFixed(2)

  console.log('y:', y) // 2.55
  ```

  - whatever you put in the parenthesis is the amount of decimal places you want to allow.

  - notice that y is also rounded up

### 46. Number to String

- > toString() method

  - toString() converters and number to a string

  ```js
  const x = 10

  console.log(x)
  console.log(x.toString())
  ```

  - Sometimes you want to pass in numbers, but in order to pass a number into that function, you have to first convert it to a string.

### 47. Round Up and Down

- > the Math object

  - There's another built in object in JavaScript, and that is this Math object.

  - This also has some built in properties and methods.

- > Math.floor()

  - If you ever wanted to round down a, you can use Math.floor()

  ```js
  const a = 10.5
  console.log(Math.floor(a)) // 10
  ```

- > Math.ceil()

  - If you ever wanted to round up a, you can use Math.ceil()

  ```js
  const a = 10.5
  console.log(Math.ceil(a)) // 11
  ```

### 49. Randomizing in JavaScript

- > Math.random()

  - gives you a random number between 0 and 0.99

  ```js
  const a = Math.random() // 0 - 0.9999
  ```

<!--^ tools for booleans and logic -->

### 51. True or False with Booleans

- > Boolean data type

  - Boolean can have one of two values, true or false.

  ```js
  const hasFoundKeys = true

  const isLightOn = false

  console.log('hasFoundKeys', hasFoundKeys) // hasFoundKeys true

  console.log('isLightOn', isLightOn) //isLightOn false
  ```

  - booleans are mostly used in something called, if else, statements

### 52. Logical with If Else

- > if else statement

  - If else statements allow you to add logic to your app and that logic is determined by a condition.

  ```js
  const hasFoundKeys = true

  if (hasFoundKeys) {
    console.log('I found my keys!!') //I found my keys!!
  } else {
    console.log('Where are my keys??')
  }
  ```

### 54. Logic with Else If

- > else if

  - else if allows us to `introduce more than one condition`

  - In this case, we want to have three conditions

  ```js
  const hasFoundAllOfMyKeys = true
  const hasOnlyFoundHouseKeys = true

  if (hasFoundAllOfMyKeys) {
    console.log('I found all of my keys') //I found all of my keys
  } else if (hasOnlyFoundHouseKeys) {
    console.log('I only found my house keys')
  } else {
    console.log('I found no keys!!!)
  }
  ```

  - `only one of these conditions can be run`

  - > You can add as many of these else if statements as you want

- > in conclusion:

  - `else {}` is use when you have some default condition

  - `if()` statement is required to start this off, you can't start off with an else if()

  - `else if()` is optional

### 55. Comparison Operators

- > comparison operators are used in logical statements

  ```js
  ==  ===, !=, !==, >, <, >= <=
  ```

  - Each of these can be used inside of these if else statements

- > we use double equal (==) because the single equal (=) is use to assign values

- > the double equal (==) and not equal (!=) check for value equality

  - if we use `==` compare the number 2 and the string '2' will give us `true`
  - if we use `!=` compare the number 2 and the string '2' will give us `false`

- > the triple equal (===) and the double not equal (!==) check for value and type equality

  - if we use `===` compare the number 2 and the string '2' will give us `false`
  - if we use `!==` compare the number 2 and the string '2' will give us `true`

### 57. Comparison Operators with If Else Statements

- > Comparison Operators with If Else Statements

  ```js
  const a = 1
  const b = 2

  if (a > b) {
    console.log('a is greater than b')
  } else {
    console.log('b is greater than a') // b is greater than a
  }
  ```

### 58. Logical Operators

- > Logical AND (&&)

  - The logical AND (&&) operator (logical conjunction) for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.

  ```js
  const a = 3
  const b = -2

  console.log(a > 0 && b > 0)
  // expected output: false
  ```

  - the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.
    (The AND operator preserves non-Boolean values and returns them as they are:)

  ```js
  result = '' && 'foo' // result is assigned "" (empty string)
  result = 2 && 0 // result is assigned 0
  result = 'foo' && 4 // result is assigned 4
  ```

- > Logical OR (||)

  - The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values.

  - When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.

  ```js
  const a = 3
  const b = -2

  console.log(a > 0 || b > 0)
  // expected output: true
  ```

### 1. Return Keyword Part 1

- > return

  - The return statement ends function execution and specifies a value to be returned to the function caller.

  ```js
  function getRectArea(width, height) {
    if (width > 0 && height > 0) {
      return width * height
    }
    return 0
  }

  console.log(getRectArea(3, 4))
  // expected output: 12

  console.log(getRectArea(-3, 4))
  // expected output: 0
  ```

- > Description

  - When a return statement is used in a function body, the execution of the function is stopped. If specified, a given value is returned to the function caller. For example, the following function returns the square of its argument, x, where x is a number.

  ```js
  function square(x) {
    return x * x
  }
  const demo = square(3)
  // demo will equal 9
  ```

### 60. Return Keyword Part 2

- > the Returned value

  - return specifies a value to be returned to the function caller

- > stops execution

  - when you have a return key inside of a function is stops execution of that function, So any code after the return keyword is not run at all.

<!--^ tolls for arrays -->

### 62. Arrays

- > The Array object

  - The Array object enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

- > creating an array

  - the minimum requirement to writing an array in opening and closing bracket `[data]`

  - the data types and go between the brackets separated with commas

  - You can put any type of data inside of these arrays

  - JavaScript arrays are zero-indexed and each value within the array has its own index

  ```js
  const myArray = [22, 'Max', true, [1, 2], 22]

  console.log('myArray: ', myArray) // (5) [22, 'Max', true, [1, 2], 22]
  ```

- > length property

  - just like strings, arrays have a length property

  ```js
  const myArray = [22, 'Max', true, [1, 2], 22]

  console.log('myArray: ', myArray)
  console.log('myArray length: ', myArray.length) //5
  ```

- > indexOf() method

  ```js
  const myArray = [22, 'Max', true, [1, 2], 22]

  console.log('myArray: ', myArray)
  console.log('myArray length: ', myArray.length)
  console.log('indexOf: ', myArray.indexOf(22)) // 0
  ```

- > lastIndexOf() method

  ```js
  const myArray = [22, 'Max', true, [1, 2], 22]

  console.log('myArray: ', myArray)
  console.log('myArray length: ', myArray.length)
  console.log('indexOf: ', myArray.indexOf(22))
  console.log('lastIndexOf: ', myArray.lastIndexOf(22)) // 4
  ```

- > Concepts are repeated in programming

  - We can start to see a pattern here, Concepts are repeated in programming, and that's why it's so important to understand the concepts when developing.

### 64. Array Push() method

- > Arrays properties and methods

  - just like Math, just like console And just like strings, arrays are also objects and objects have properties and methods attached to them.

  - you can access these properties and methods using dot notation

- > The push()

  - The push() method adds one or more elements to the end of an array and returns the new length of the array.

  ```js
  const myArray = [1, 2, 3, 4]

  console.log(myArray) // (4) [1, 2, 3, 4]

  myArray.push(5, true, 'max', { name: 'juan' }, [2, 3])

  console.log(myArray) // (9) [1, 2, 3, 4, 5, true, 'max', {…}, Array(2)]
  ```

  - we can add any data type we want.

  ```js
  const myArray = [1, 2, 3, 4]

  console.log(myArray) // (4) [1, 2, 3, 4]

  myArray.push(5)

  console.log(myArray) // // (5) [1, 2, 3, 4, 5]
  ```

### 66. Array Includes() method

- > The includes() method

  - The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

  ```js
  const myArray = [1, 2, 3, 4, 30, 2, 32]

  const hasTheNumber32 = myArray.includes(32)
  const hasTheNumber100 = myArray.includes(100)

  console.log(hasTheNumber32) //true
  console.log(hasTheNumber100) //false
  ```

### 67. Array filter() method

- > The filter() method

  - The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

  - shallow copy (a copy whose properties share the same references as those of the source object from which the copy was made.)

  ```js
  // create an array with elements that contain the letter a
  const myArray = ['max', 'joe', 'dana', 'sarah']

  const filteredArray = myArray.filter((data) => {
    return data.indexOf('a') !== -1
  })

  console.log(myArray) //(4) ['max', 'joe', 'dana', 'sarah']
  console.log(filteredArray) // (3) ['max', 'dana', 'sarah']
  ```

  - the return keyword will give us a boolean, and this Boolean defines how you want to filter this array.

  - filter() iterates all the array elements and will keep the ones returning true

  - filter() also returns a filtered array that we can assign to a new constant

### 68. Array find() method

- > The find() method

  - The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

  ```js
  const myArray = ['max', 'joe', 'dana', 'sarah']

  const x = myArray.find((data) => {
    return data.length > 3
  })

  console.log(x) // dana
  ```

### 69. Array pop() and unshift() methods

- > The pop() method

  - The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

  ```js
  const myArray = ['max', 'joe', 'dana', 'sarah']

  console.log(myArray) // (4) ['max', 'joe', 'dana', 'sarah']

  myArray.pop()

  console.log(myArray) // (3) ['max', 'joe', 'dana']
  ```

- > The unshift() method

  - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

  ```js
  const myArray = ['max', 'joe', 'dana', 'sarah']

  console.log(myArray) // (4) ['max', 'joe', 'dana', 'sarah']

  myArray.pop()

  console.log(myArray) // (3) ['max', 'joe', 'dana']

  myArray.unshift('sarah')

  console.log(myArray) // (4) ['sarah', 'max', 'joe', 'dana']
  ```

<!--^ objects -->

### 71. Objects

- > An object

  - An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

  - In JavaScript, an object is a standalone entity, with properties and type. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects.

- > Object Literal in JavaScript

  - An object literal in JavaScript allows us to create plain JavaScript objects. It consists of a list of key-value pairs, each separated by a comma and wrapped inside curly braces.

- > Assigning an object to a variable

  ```js
  const me = {
    myName: 'Isaiah',
    licenseNumber: 12345,
    sayHi: () => {
      console.log('Hi, my name is Isaiah')
    },
  }
  ```

- > dot notation

  - You access the properties of an object with a simple dot-notation

  ```js
  const me = {
    myName: 'Isaiah',
    licenseNumber: 12345,
    sayHi: () => {
      console.log('Hi, my name is Isaiah')
    },
  }

  console.log(me.licenseNumber)
  console.log(me.myName)
  me.sayHi()
  ```

- > objects in real life vs Objects in JavaScript

  - Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

### 72. Object Dot Notation

- > Dot notation

  - Dot notation is one way to access a property of an object. To use dot notation, write the name of the object, followed by a dot (.), followed by the name of the property.

<!--^ loops -->

### 74. for loop

- > loops

  - Loops offer a quick and easy way to do something repeatedly. in JavaScript when you loop, you're iterating over a variable or a value.

  - Loops are handy, if you want to run the same code over and over again, each time with a different value.

- > the for loop

  - The `for` statement creates a loop with 3 optional expressions:

  - Expression 1 is executed (one time) `before the execution of the code block`.(set the variable)

  - Expression 2 defines the condition for executing the code block. (if condition is false exit the loop)

  - Expression 3 is executed (every time) `after the code block has been executed.`

  ```js
  const arr = [1, 2, 3, 4, 5, 6]

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
  ```

### 76. for in loop

- > the for in loop

  - the for in loop is meant to be used on objects.
  - we could `output the key value pairs in a object` with help of a for in loop.

  - 1. Let's say we have a loggedInUser object:

  ```js
  const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true,
  }
  ```

  - 2. we start with the for keyword, and then again we create a helper constant, but this constant will then actually hold the different property Names or keys as we can also call them.

  - hence you very often named this `key`, But the name is up to you. We could also name it propertyName.

  - The important thing to note, it's just that it will be the name, not the value and not both together. Just the name.

  ```js
  const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true,
  }

  for (const key)
  ```

  - 3. Then we use the `in` keyword here, and then we point at the object through which we want to loop.

  ```js
  const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true,
  }

  for (const key in loggedInUser)
  ```

  - 4. Now in the code block we can now console log key to see what's stored in there (all the property names)

  ```js
  const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true,
  }

  for (const key in loggedInUser) {
    console.log(key)
  }
  // name
  // age
  // isAdmin
  ```

  - 5. if you want to get access to the values as well, We can console log the loggedInUser, and now dynamically access the different properties stored in the user.

  - but dot notation won't work here since the property I want to access is actually different in every execution

  ```js
  const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true,
  }

  for (const key in loggedInUser) {
    console.log(key)
    console.log(loggedInUser.name) // dot notation will not work
  }
  ```

  - 6. but we can use bracket just like in arrays

  - And between those square brackets, you can put the property name as a string. So for example, 'name', I could access this like that as well. And that would be equivalent to loggedInUser.name

  ```js
  const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true,
  }

  for (const key in loggedInUser) {
    console.log(key)
    console.log(loggedInUser['name'])
  }
  ```

  - 7. But since we have this syntax, we can now also not hard-code the propertyName as a string here, but instead refer to key. our helper constant here.

  - And key indeed holds the different property names as strings. So therefore this line of code will dynamically access the values for those different propertyNames, which are different for every execution.

  ```js
  const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true,
  }

  for (const key in loggedInUser) {
    console.log(key)
    console.log(loggedInUser[key])
  }
  ```

  - This does not work with the dot notation because of you had loggedInUser.key, it would look for a property named key

### 78. forEach

- > The forEach() method

  - an easier way to iterate over an array

  - The forEach() method executes a provided function once for each array element.

  - forEach() is an array method and it takes an anonymous function that takes 2 parameters

  - The first one is data (this can be named whatever you want.)

  - the second one is the index (And this can be named whatever you want as well.)

  ```js
  const arr = ['hey', 'hi', 'hello']

  arr.forEach((data, index) => {
    console.log(data)
    console.log(index)
    console.log('======================')
  })

  // hey
  // 0
  // ====================
  // hi
  // 1
  // ====================
  // hello
  // 2
  // ====================
  ```

  - Now, if we don't have use for this index, we don't have to include this here.

  ```js
  const arr = ['hey', 'hi', 'hello']

  arr.forEach((data) => {
    console.log(data)
  })
  // hey
  // hi
  // hello
  ```

- > forEach() is a lot more simplified than using for loops but only for arrays

### 79. map()

- > the map() method

  - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

  - just like forEach(), map() has data and it also has an index

  ```js
  const arr = ['hey', 'hi', 'hello']

  arr.map((data, index) => {
    console.log(data)
    console.log(index)
  })
  // hey
  // 0
  // hi
  // 1
  // hello
  // 2
  ```

  - And just like forEach(), We don't have to use this index we don't need it.

  ```js
  const arr = ['hey', 'hi', 'hello']

  arr.map((data) => {
    console.log(data)
  })
  // hey
  // hi
  // hello
  ```

- > forEach vs map()

  - the difference between forEach() and map() is that map() returns an array.

  ```js
  const arr = ['hey', 'hi', 'hello']

  const myArray = arr.map((data) => {
    return data
  })

  console.log(myArray)
  // (3) ['hey', 'hi', 'hello']
  ```

  // this ^ in equal to this V

  ```js
  const arr = ['hey', 'hi', 'hello']

  const myArray = arr.map((data) => data)

  console.log(myArray)
  // (3) ['hey', 'hi', 'hello']
  ```

- > we can manipulate the returned array

  ```js
  const arr = [1, 2, 3]

  const myArray = arr.map((data) => data * 3)

  console.log(arr) // (3) [1, 2, 3]
  console.log(myArray) // (3) [3, 6, 9]
  ```

<!--^ DOM manipulation -->

### 80. The DOM P1

- > the document object

  - document has the properties and methods to manipulate the DOM or the document object model

- > getElementById()

  - We can target different HTML elements by using this getElementById(), This is helping grab something by an ID.

  ```js
  const div = document.getElementById('myDiv')

  console.log(div) //<div id="myDiv"></div>
  ```

  - now div is also an object and we have properties and methods available to us

  - This is how we would change the background color, the height and the width

  ```js
  const div = document.getElementById('myDiv')

  console.log(div) //<div id="myDiv"></div>

  div.style.backgroundColor = 'red'
  div.style.height = '200px'
  div.style.width = '200px'
  ```

### 81. The DOM P2

- > querySelector()

  - with querySelector() we target the selectors in the same way as in css using #

  ```js
  // const div = document.getElementById('myDiv')
  const div = document.querySelector('#myDiv')

  console.log(div) //div#myDiv

  div.style.backgroundColor = 'orange'
  div.style.height = '200px'
  div.style.width = '200px'
  ```

- > getElementsByClassName()

  - getElementsByClassName() let us select multiple elements with the same class name

  - if we console log the returned value we can see it returns an HTMLCollection

  ```js
  // const div = document.getElementById('myDiv')
  // const div = document.querySelector('#myDiv')
  const divs = document.getElementsByClassName('myDivClass')

  console.log(divs) //HTMLCollection(2) [div.myDivClass, div.myDivClass]

  // div.style.backgroundColor = 'orange'
  // div.style.height = '200px'
  // div.style.width = '200px'
  ```

- > HTMLCollection

  - HTMLCollections are very similar to arrays, we'll treat them like arrays for now.

- > loop over an HTMLCollection

  - just like arrays we are able to loop over this HTMLCollection using a for loop

  ```js
  // const div = document.getElementById('myDiv')
  // const div = document.querySelector('#myDiv')
  const divs = document.getElementsByClassName('myDivClass')

  // console.log(divs)
  for (let i = 0; i < divs.length; i++) {
    console.log(divs[i])
  }
  // div.style.backgroundColor = 'orange'
  // div.style.height = '200px'
  // div.style.width = '200px'
  ```

  - with that we can style both off those divs

  ```js
  // const div = document.getElementById('myDiv')
  // const div = document.querySelector('#myDiv')
  const divs = document.getElementsByClassName('myDivClass')

  // console.log(divs)
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i]

    div.style.backgroundColor = 'orange'
    div.style.height = '200px'
    div.style.width = '200px'
    div.style.margin = '2px'
  }
  ```

- > querySelectorAll()

  - querySelectorAll() returns an HTMLCollection of all the elements with the provided selector

  ```js
  // const div = document.getElementById('myDiv')
  // const div = document.querySelector('#myDiv')
  // const divs = document.getElementsByClassName('myDivClass')
  const divs = document.querySelectorAll('.myDivClass')

  // console.log(divs)
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i]

    div.style.backgroundColor = 'black'
    div.style.height = '200px'
    div.style.width = '200px'
    div.style.margin = '2px'
  }
  ```

### 82. The DOM P3

- > manipulate attributes in the DOM

- > setAttribute()

  - setAttribute() takes to parameters

  - The first one is the attribute that you want to set

  - The second one is the value that you want to set it to

  ```js
  const catPicUrl = 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142779.jpg'

  const img = document.querySelector('img')
  img.style.height = '200px'
  img.setAttribute('src', catPicUrl)
  img.setAttribute('alt', 'cat picture')
  ```

- > removeAttribute()

  - removeAttribute() takes one parameter, the attribute that you want to remove.

  ```js
  const img = document.querySelector('img')
  img.style.height = '200px'
  img.removeAttribute('src')
  ```

# Section 5: CSS concepts for Projects

83. CSS Intro

-

84. Overflow and Font

-

85. Display, Opacity and Color

-

86. Background

-

87. Border and Margin

-

88. Flexbox

-

89. Positioning

-

# Section 6: Final Project 1: Opening the project slider

90. Final Project Introduction

-

91. Pre Project Material: Video Tag

-

92. Pre Project Material: Connecting JS files

-

93. Pre Project Material: Positioning HTML

-

94. Pre Project Material: Cascading

-

95. Pre Project Material: Animating HTML Elements

-

96. Portfolio Overview Part 1

-

97. Portfolio Overview Part 2

-

98. Portfolio Overview Part 3

-

99. Opening Project Slider Part 1

-

100.  Opening Project Slider Part 2

-

101.  Opening Project Slider Part 3

-

# Section 7: Final Project 2: Time App

102. Pre Project Material: Date Object

-

103. Pre Project Material: Timeout and Interval

-

104. Application Introduction

-

105. Time App Part 1

-

106. Time App Part 2

-

107. Time App Part 3

-

108. Time App Part 4

-

# Section 8: Final Project 3: Tip Calculator

109. Pre Project Material: Element Values

-

110. Pre Project Material: Events

-

111. Practice By Doing

-

112. Application Introduction

-

113. Tip Calculator Part 1

-

114. Tip Calculator Part 2

-

# Section 9: Final Project 4: Color Psychology

115. Pre Project Material: Create Element

-

116. Application Introduction

-

117. Color Psychology Part 1

-

118. Color Psychology Part 2

-

# Section 10: Final Project 5: Password Generator

119.  Pre Project Material: HTML Checkbox Properties

-

120.  Pre Project Material: Recursion

-

121.  Pre Project Material: Promises Part 1

-

122.  Pre Project Material: Promises Part 2

-

123.  Application Introduction

-

124.  Password Generator Part 1

-

125.  Password Generator Part 2

-

126.  Password Generator Part 3

-

127.  Password Generator Part 4

-

128.  Password Generator Part 5

-

129.  Password Generator Part 6

-

130.  Password Generator Part 7

-

# Section 11: Final Project 6: Breaking Bad

131.  Pre Project Material: Destructuring

-

132.  Application Introduction

-

133.  Breaking Bad Part 1

-

134.  Breaking Bad Part 2

-

# Section 12: Final Project 7: Meditation

135.  Application Introduction

-

136.  Meditation Part 1

-

137.  Meditation Part 2

-

138.  Meditation Part 3

-

# Section 13: Final Project 8: Memory Game

139.  Pre Project Material: Ternary Operators

-

140.  Practice By Doing

-

141.  Pre Project Material: Short Hand If Statements

-

142.  Application Introduction

-

143.  Memory Game Part 1

-

144.  Memory Game Part 2

-

145.  Memory Game Part 3

-

146.  Memory Game Part 4

-

147.  Memory Game Part 5

-

148.  Memory Game Part 6

-

149.  Memory Game Part 7

-

150.  Memory Game Part 8

-

151.  Memory Game Part 9

-

# Section 14: Final Project 9: Tic Tac Toe

152.  Pre Project Material: String Backticks

-

153.  Application Introduction

-

154.  Tic Tac Toe Part 1

-

155.  Tic Tac Toe Part 2

-

156.  Tic Tac Toe Part 3

-

# Section 15: Final Project 10: Whak A Mole

157.  Application Introduction

-

158.  Whak A Mole Part 1

-

159.  Whak A Mole Part 2

-

160.  Whak A Mole Part 3

-

161.  Whak A Mole Part 4

-

162.  Whak A Mole Part 5

-

163.  Whak A Mole Part 6

-

164.  Whak A Mole Part 7

-

# Section 16: Final Project 11: Game Settings

165.  Application Introduction

-

166.  Game Settings

-

167.  Final Code

-

# Section 17: Final Project 12: Inspirational Quote

168.  Pre Project Material: API

-

169.  Pre Project Material: Rest Part 1

-

170.  Pre Project Material: Rest Part 2

-

171.  Pre Project Material: Rest Part 3

-

172.  Application Introduction

-

173.  Inspirational Quote Part 1

-

174.  Inspirational Quote Part 2

-

# Section 18: Final Project 13: Joke

175.  Joke API

-

176.  Application Introduction

-

177.  Joke API Complete Code

-

# Section 19: Final Project 14: Pokédex

178.  Pokédex API

-

179.  Application Introduction

-

180.  Pokédex API Complete Code

-

# Section 20: Final Project 15: Crud Store

181.  Pre Project Material: The Spread Operator

-

182.  Application Introduction

-

183.  Crud Store Part 1

-

184.  Crud Store Part 2

-

185.  Crud Store Part 3

-

186.  Crud Store Part 4

-

187.  Crud Store Part 5

-

188.  Crud Store Part 6

-

189.  Crud Store Part 7

-

190.  Crud Store Part 8

-

191.  Crud Store Part 9

-

192.  Crud Store Part 10

-

193.  Crud Store Part 11

# Section 21: Final Project 16: Battle Game

194.  Pre Project Material: Object Oriented Programming

-

195.  Application Introduction

-

196.  Battle Game Part 1

-

197.  Battle Game Part 2

-

198.  Battle Game Part 3

-

199.  Battle Game Part 4

-

200.  Battle Game Part 5

-

201.  Battle Game Part 6

-

202.  Battle Game Part 7

-

203.  Battle Game Part 8

-

204.  Battle Game Part 9

-

205.  Battle Game Part 10

-

206.  Battle Game Part 11

-

# Section 22: You Did It! You're a Software Engineer.

207.  You Did It!

-

```

```
