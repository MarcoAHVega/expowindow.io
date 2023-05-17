# 382. Module Introduction

- => What you'll learn in this course section applies to both the browser side, so frontend JavaScript if you use JavaScript in the browser, as well as backend server-side JavaScript with NodeJS.

- => And in this course section as mentioned, we are going to dive deeper into general JavaScript code.

- => Now for that, in this course section, we are going to take a closer look at `Functions` again, and learn about some new features, and concepts are related to functions.

- => And we will also take another look at `Objects and Arrays` and learn a couple of new things about those concepts.

- => We are also going to take a look behind the scenes of JavaScript, and take a look at `Reference and Primitive Values`, and learn what exactly that is, and why it matters, and why you should understand it.

- => And last but not least, we are also going to explore a concept called `Asynchronous Code`:

- => Now, there's one important thing about this module which I wanna get out of the way right away: This course section will be challenging.

- => Attached to the last lecture of this course section, you also find a written summary, a cheat sheet which you can also use to look up certain concepts at a later point of time or to also have a written version in case the videos are not enough.

- => Now for all of that, I'm in a brand new empty project, and we will write some JavaScript code here, which we execute with Node,

- => we'll just leverage the fact that we can use the Node command to execute JavaScript files since that saves us the hassle of adding an extra HTML file,

# 383. Functions & Default Parameters

- => Now, I wanna start by taking another look at functions. And for this, I'll add a brand new file here in this empty project and I'll name it functions.js,

- => Now, for all of that, let's start by adding a function.

- => Now, we also learned that functions can take parameters so that we can call them with different values, which are passed into the function and can be used there.

- => Now, what is new, is that we can also set default values for those parameters to make them optional

- => So you can add default values to parameters by adding an equal sign in the parameter list and then setting your default value here.

- => a string, a number, an object, an array, whatever you need.

- => Now, of course, if we do pass in more a specific value, as we're doing it here when we first call the function (`greetUser('Max')`), that more specific value is used. So then this more specific value overrides this default value.

- => Now, it is worth noting that if you have a function that accepts multiple parameters, (so let's say, if we also accepted a greetingPrefix here, which could be `Hi` or anything else,) then `your default parameters always have to come at the end of the function parameter list`

- => And the reason for that, is that, if we add a default value, those parameters in the end become optional,
  because we can pass a value for them, but we don't have to.

- => Parameters without a default value are not really optional, because if we don't pass in a value, we get undefined as a default value and we typically don't want that.

- => And you always need to list non-optional parameters first and optional parameters thereafter. That's something to memorize.

- => So that's a little bit of extra knowledge about functions that you should keep in mind, because it can come in handy when you are defining your own functions that should be a bit more flexible.

# 384. Rest Parameters & The Spread Operator

- => Now, let's stick to functions for the moment. And let's add another function here in this functions JS file. This is a function which I'll name someUp.

- => This would work, but this function has one important limitation. It only accepts three numbers. And actually it wants exactly three numbers.

- => So when we then add all those numbers together, the third number here actually will have no special value. Instead it will be undefined.

- => And if you add undefined, there's special value that's known by JavaScript to some numbers, JavaScript can't do this in a mathematical way because undefined is not a number.

- => Now we could solve this with some default value, like zero, in which case we could execute this code.

- => but still this function is not really flexible because it needs at least two arguments to parameter values to work correctly and at most three.

- => Now, what if your goal would be to make that function work with any amount of numbers. now for that, we could rewrite it and not accept a couple of separate parameter values, but instead we could accept an array of numbers.

- => But JavaScript also gives you another way of writing functions that take a multiple values instead of just one or two values that you can use in situations where you don't have an array to pass to this function and where you don't want to create one, just to be able to call this function correctly,

- => And it's not unrealistic that you might have some place in a program where you want to call a function with a couple of parameters, and you don't want to wrap those parameters into an array First just to be able to call that function.

- => and JavaScript gives you that flexibility with another feature that's called `rest` parameters or rest arguments

- => if you use it here in the parameter list of a function definition, then this operator says that this function accepts any amount of parameters.

- => And that all those parameters which are passed in separated by a comma will then be merged into an array behind the scenes by JavaScript.

- => Again, it's simply an alternative. We could have wrapped that lists of values into an array ourselves, and then just accept that one array value.

- => But it's good to have that extra flexibility where you can write functions that take a dynamic amount of values so that you don't need to necessarily wrap your values into an array on your own, first.

- => We also have another place where we can use this operator to basically do the opposite of what it does here

- => Now what you need to do here, if you have such a sum-up function that wants a list of values, instead of a single array is you need to convert that array, back into a list of single values.

- => and therefore to easily then convert such an array of numbers to a list of numbers. You also can use the three dots again, but now not in the function definition, parameter list, but instead in the place where such a list of numbers is expected.

- => here in such a place where you're not in a function definition, but instead in a place where concrete values are needed, the three dots here are known as the so-called `spread operator`,

# 385. Functions Are Objects!

- => behind the scenes, internally, functions are in the end, just objects.

- => let's console log sumUp without parentheses. So just the name of the function here.

- => If we do the same thing in the browser, simply because there we get a, a nicer, more useful output, then we'll see something different.

- => when we used express this express package, then we did require it in our NodeJS code. And we executed it like a function to create this app object here. That's what we did before.

- => Now in other places of the code. We however, used that same express function, which it seems to be, to then all of a sudden access properties on that function.

- => And we were able to do that because the team that developed the express package added some custom properties to this express function, to add more functionality to that express thing that you can use in your code,

- => you could do something similar in your own code with your own functions as well.

- => But of course, typically you don't do that because it's not too useful.

- => The team that developed the express package did that though. And I'm just emphasizing this again here. So that it's clear that even though we don't typically do that, we can do that. We can add properties to functions because functions behind the scenes are all just objects, special kinds of objects, but still objects.

- => And that's why express could both be executed as a function and then be used like a object when we access properties.

- => And that's just something which I wanted to bring up again to make it clear why that code worked the way it did work.

# 386. Working with Template Literals

- => Now I wanna come back to one line of code that we have here that we can also improve with some advanced JavaScript code.

- => We can build a string like this, but JavaScript also has an alternative for us. Instead of building that string like that, and hence I'll comment it out, we can also use a feature called `Template Literals` that's built into JavaScript.

- => But we typically don't use backticks to just create a regular string like that; instead, these backticks give us some powerful features:

- => For one, they allow us to write multiline strings. We can add line breaks inside of the string,

- => But the even more useful advantage is that you can easily plug in dynamic values into that string without having to concatenate and combine a lot of pieces with the plus operator.

- => And that is another feature that can be useful, especially if you are constructing very long strings with a lot of dynamic values.

# 387. Primitive vs Reference Values

- => This is some code which we had in an earlier course section and there we have an array and we stored that array in a constant,

- => we clearly changed the array because we add a new value. Nonetheless, that code worked even though for a constant, you shouldn't be able to change the value stored in the constant.

- => you can change the object and array itself As long as you don't assign a new value to the constant itself with the equal sign.

- => objects, which include arrays are stored in a special kind of memory by JavaScript.

- => numbers or any other kind of value like strings or booleans are stored in a different kind of memory because numbers, strings and booleans, and a couple of other values are so-called `primitive values`.

- => And then we also have so-called the reference values, or `reference value types`, and that would be objects and since arrays and also functions are objects. Those values are also reference values

- => and reference values are stored in a different kind of computer memory than primitive values are.

- => The reason for that is simply that objects tend to be a bit more complex after all they can contain multiple values. Multiple key value pairs, maybe even some methods.

- => Now, because objects can and tend to be more complex. They are stored such that unnecessary copies of objects are avoided simply because a simple number doesn't take up a lot of space and memory, a complex object does.

- => Therefore, when you create an array or an object and you store it in a variable or a constant, what you actually stored there is not the value. So the object or array itself, but `a pointer to that object or array in memory`.

- => Now, since that's the case, when you push a new value to that array, this value is added to the existing array in memory, but the pointer doesn't change, the address of that array in memory doesn't change.

- => So when you call push to add a new value to an array, that actually tells JavaScript to look up that address, go to the actual array in memory and add that value there.

- => So that's why we can push into an array that's stored in a constant because of that reference, whereas there's this primitive value thing.

- => This primitive words reference value of thing also has a couple of important implications.

- => when I then changed his age off this object by deducting 18 from it, I do not just change the person object in this function, but this person object as well, because it's the same object.

- => and that's not a bug or an unintended side effect, but instead that's a behavior, which we have on purpose, because as mentioned, objects can become very complex and therefore they are managed such that unnecessary copies are avoided.

- => therefore operations like this can have the unintended side effect of changing the original object in places where we don't wanna do that.

- => one work around would be that we don't update the person age here, but instead, if we just want to derive the adult years, instead of doing it like this, we can return p.age minus 18.

- => If you have a function that for some reason needs to manipulate the object itself, though.

- => Then you can still work around changing the original object by passing in a copy of person into get adult years.

- => but creating objects like this, and manually adding all the properties which the original object has into this new object can be very cumbersome.

- => That's why we can use another operator here, which we already saw before.

- => Between those curly braces, we can use the free dot operator, the spread operator, and spread our person object into this new object.

- => Now, we haven't seen this usage of the spread operator before, but the spread operator can indeed be used on arrays or on objects

- => When used on objects, it pulls out all the key value pairs off the object and gives you a list of those key value pairs.

- => And if you do that between curly braces, you create a new object, which gets a list of all the key value pairs of another object.

- => And hence you get a new object in memory with a new address with all the old key value pairs of another object.

- => That's a way of copying an object, of creating a brand new object of the same shape in a new place in memory

- => And as a web developer in general you will be confronted with more advanced code like this, and therefore y`ou should be aware of this primitive versus reference value thing.`

- => And you also should know `how you can create copies` and work around that reference value limitation, which is sometimes face to avoid unintended side effects
