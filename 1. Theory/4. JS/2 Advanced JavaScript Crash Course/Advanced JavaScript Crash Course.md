# Advanced JavaScript Crash Course

https://youtu.be/R9I85RhI7Cg

this video is sponsored by tascade a real-time organization and collaboration
platform make sure to check the description for a discount on your subscription
hey everyone my name is vishwas and welcome to this crash course on advanced javascript
in this crash course we will understand some of the advanced topics in javascript
before we begin let me go over a few points first i would like to mention this
course is a continuation of the javascript fundamentals crash course
if you are new to javascript please watch that video before proceeding
also if you're someone who is already familiar with advanced javascript concepts
i would suggest you wait for the asynchronous javascript crash course
second we're going to cover concepts that you as a front-end developer should know
it is not an exhaustive list but the topics we will cover are required for any front-end interview you might appear
for and most of the topics also find daily usage in your work as a
developer so we will be covering a limited number of topics but they all are very
important third this video unlike other videos in my channel is a crash course and is
longer in length that doesn't mean you have to sit through the entire video at once
take it easy pause when necessary and most importantly make sure you code
along with me as that is the best way to learn by the end of this video you will have a
solid understanding of the advanced concepts in javascript
all right with these points in mind let's go over the topics we will be learning in this video
we're going to start off from where we left off in the fundamentals crash course and that is about scope
we will specifically look at nested functions scope which will then take us to understanding closures in javascript
next we will learn about the concept of carrying this is followed by the all important
this keyword we will then learn about prototype and prototypal inheritance
that is followed by learning about classes iterators and finally generators
we will save the async javascript concepts for the next video if you have had difficulty understanding
any of the listed topics here then you are at the right place now then for some
setup we are going to reuse the setup from the previous crash course so make
sure you have node.js and vs code installed
open vs code inside a folder of your choice i have created a folder called advanced
javascript and within the folder create a file called main dot js
open the terminal so view terminal
and run node dash dash version if you see the version number in your
terminal we are good to go alright let's begin by revisiting the
concept of scope in javascript
in the fundamentals crash course we learned about three types of scope
block scope which dictates that variables declared inside a pair of curly braces cannot be accessed from
outside the block function scope which dictates variables declared inside a function cannot be
accessed from outside the function and finally global scope which is the scope outside a top level block or
function of code we also learned that globally scoped variables can be accessed inside a block
or function we also had look at examples related to each of these scopes
in case you missed it please watch the last 10 to 15 minutes of the fundamentals crash course for continuity
now in the advanced crash course let's learn about a nested functions scope
with an example in main.js let's declare a variable a
and initialize it to 10 in the global scope next let's define a function called
outer and within the body of the function
define a variable b and initialize it to 20.
within this function let's define another function called inner
and yes in javascript it is possible to define a function within a function
so function inner and within the inner function let's declare another variable c
and initialize it to 30. but then log a b and c to the console
within the inner function a comma b comma c
next within the outer function we invoke the inner function
finally we invoke the outer function
if we save the file and run the code node main
what do you think is logged in the terminal you can see the output is 10 20 and 30.
let's understand this output from the javascript engine point of view
we can directly dive into the log statement on line 6. javascript basically has to look up for
values of a b and c let's start with c javascript checks if
c is defined in the inner function scope it is and its value is 30. so 30 is
logged in the terminal next it looks for b it checks if the
variable b is available in the inner function scope it is not
so it goes one level up and checks in the outer function scope
is the variable b present in the outer function scope it is and its value is 20. so 20 is
logged in the terminal finally we have the variable a
javascript checks if the variable is present in the inner function scope
it is not it then checks if the variable is present in the outer function scope
it still doesn't find it it moves one more level up and reaches
the global scope it checks again if the variable is present in the global scope
it is and its value is 10 which is logged to the terminal
so the resulting output is 10 20 and 30.
now this is an example of lexical scoping which describes how javascript resolves
variable names when functions are nested when we have nested functions
javascript variable lookup starts with the innermost function where we are trying to access the variable
and moves outward until it reaches the global scope but the bottom line i want you to
remember is that nested functions have access to variables declared in
their own scope as well as variables declared in the outer scope
all right with this understanding of nested functions scope we are now ready to proceed to the second concept in this
advanced javascript crash course which is closures
now what exactly is a closure according to mozilla docs
a closure is the combination of a function bundled together with references to its surrounding state
closures are created every time a function is created at function creation
time now i refer to mdn docs for most things
related to javascript but this definition doesn't really help me understand what a closure is with the knowledge of
javascript i have so far so let's head back to vs code and understand what exactly is a closure in
javascript i will then describe closure in simple terms for you to remember
in the example about nested function scope we learned that nested functions
have access to variables declared in their own scope as well as variables declared in the
outer scope let's now look at a more simplified version of this example
comment out the code we have written so far let's start over we define a function called outer
within the function body we declare a variable counter and initialize it to zero
we also define a nested function called inner
where we increment the value of counter
and then log that value right after the function definition
we invoke the inner function inside the outer function
finally we invoke the outer function now if you were to run this
code what do you think is logged in the terminal node main
and we can see one this should be clear by now because of how nested functions scope works in
javascript when the variable counter is encountered within the inner function the javascript
engine checks if counter is present in the inner function scope it is not
it then checks the outer function scope the variable is present and it
increments the counter value by one and then the new value is locked to the
terminal which is one seems all right so far
now let's invert the outer function twice if you run the code what do you think is
logged in the terminal the answer is one and 1.
this is because with every new invocation of the function a temporary
memory is established and we have a new counter variable initialized to 0 and
then incremented hence every outer function call
will always print 1 to the console if this is clear let's move on to a
slight variation of this code at the moment we define the inner
function and invoke it within the outer function let's say we don't necessarily want to
invoke the inner function right away instead we want to return the function
and invoke it at a later point in time in javascript it is possible to return a
function from other functions so let's return inner
in doing so we can assign the result of invoking out the function to a variable
called fn so const fn is equal to
invoking the outer function and this result is the inner function
so let us now invoke the fn function twice
fn parentheses fn parentheses
remember all we are doing is instead of executing the inner function from within
the outer function we are returning it and then invoking the function twice
now if we were to run the code what do you think is logged to the console
node main and you can see the answer is one and
two now that's interesting isn't it we would expect the output to be one and one but
it is one and two this is because of the concept of closures in javascript
here is a definition that i find is more easier to understand
in javascript when we return a function from another function we are effectively returning a
combination of the function definition along with the function's scope
this would let the function definition have an associated persistent memory
which could hold on to live data between executions that combination of the function and its
scope chain is what is called a closure in javascript
with this definition in mind let's try to break down the example we have at hand
now i mentioned that the closure is created when a function is returned from another function
if you take a look that is precisely the scenario we have
on line 18 we are returning the inner function from the outer function
and as it turns out in such a scenario javascript doesn't just return the inner
function it returns the inner function as well as its scope
in our example the function scope has just one variable called counter
initialized to zero so we have the function inner bundled together with the variable
counter which is together termed as a closure
and in such situations the function will persist or remember the value of the
counter variable so when we invoke the fn function for the first time
counter is incremented to 1 and the value is logged in the terminal
but the fn function though remembers that the counter value is 1.
so the next time we invoke it it increments the counter value to one plus
one which is two that is the reason we see output one and
two that is how closures work in javascript
the key point to keep in mind is that with closures an inner function has
access to variables in the outer function scope even after the outer function has finished
execution you can see in our example that when we invoke the outer function
on line 20 it completes its execution but the inner function
still has access to counterweightable which is actually a variable defined in
the outer function scope now i get it if this is a little difficult to understand
my advice would be to re-watch the concept two or three times and it will
for sure start to make sense now if you've understood closures the
next topic to learn is function carrying the best way to understand function
carrying is with an example so that's the approach we will take
let's start with the definition what is function carrying
currying is a process in functional programming in which we transform a function with multiple arguments into a
sequence of nesting functions that take one argument at a time
so if we had a function f of a comma b comma c we transform it into f of a of b of c
it is important to note that curry doesn't call a function it simply transforms it
let's head back to vs code and understand this with a simple example
let's define a function sum which takes three parameters a comma
b comma c and returns their sum
to call or invoke this function we write the function name followed by
parentheses and within parentheses we specify the arguments
let's go with two comma three comma five which correspond to a comma b comma c
if we were to run this code node main we get the output 10.
now carrying this sum function means that we need to transform sum from
calling it with all three arguments to calling it with one argument at a time
so from sum to comma 3 comma 5 we should transform it to sum
2 3 5 one argument at a time
the way we do that is by nesting functions where each function takes one
argument at a time let's understand the code we start off with a function called
curry and this function will accept a function as its argument
and return the carried version of the function now for each of the three arguments we
return individual functions that accept one argument at a time
and the functions will be nested one inside the other so
the curry function will return a function which accepts an argument a
this function in turn will return a function which accepts argument b
this function in turn will return a function which accepts argument c
we are transforming from accepting three arguments at a time to one argument at a
time now when we have broken down the function into nested functions we check
if we have all the necessary arguments to run the given function in our case we have a b and c so we have
all the arguments so now from the innermost function we
return the actual passed in function with all the necessary arguments
a comma b comma c with this curry function in place
we can now write const curried sum
is equal to call the curry function passing in the sum function
in the next line console log and we can invoke the carried sum function
passing in one argument at a time so correct sum of 2
of 3 of 5.
run node main and the output will still remain 10.
now if this syntax doesn't look that different from what you've been doing all this while let me break this down
const add 2 is equal to curried sum and we pass in
to const add 3 is equal to
call add 2 passing in a value of 3
then const add 5 is equal to call add three
passing in five finally log to the console
add five the three parentheses can be broken down
into three separate function calls the first function takes the first
argument second takes the second argument and third takes the third argument then
computes the sum of all the three arguments and returns the result
so this will just be add five instead of invoking at five
run node main and we see 10 from both the log statements
we have transformed a function with multiple arguments into a sequence of
nesting functions that take one argument at a time
now carrying is used to compose reusable functions for example you can create functions
like log info log error log now etc
where one or more arguments are set and you get to choose the remaining arguments
carrying makes composing new functions very easy if you have understood the general
concept about carrying i would recommend you take a detour google more about
function carrying and get an understanding of the practical applications
all right we're now going to move on to one of the most confusing parts of javascript which is this keyword
the javascript this keyword which is used in a function refers to the object it belongs to
it makes functions reusable by letting you decide the object value
and this keyword value is determined entirely by how a function is called
now if that doesn't make sense let's understand with a few examples how to use this keyword and how its value
changes based on the function call back in vs code let's define a function
called say my name which has one parameter
name and logs to the console my name is followed by the name passed
in looking at the function if i were to ask
you what would this function log to the console you would say we can only determine that
looking at the function call if i call the function passing in
walter white you would say the output is hello my name is walter white
if i call the function passing in heisenberg
you would say the output is hello my name is heisenberg
so you can determine what is logged to the console by how a function is called
and this is the same with this keyword you can determine the value of this
keyword by how a function is called now there are four ways to invoke a
function in javascript and determine the value of this keyword
implicit binding explicit binding new winding and finally default binding
let's look at examples for each of them first implicit binding
implicit binding rule will tell you what this refers to most of the time
consider an object person with a property called name
set to vishwas also a function or a method to be more
precise called say my name which logs this dot name to the console
my name is dollar curly braces and we evaluate this dot name
to invoke the function we use the dot notation so person
dot say my name we now know how the function is called
which means we now have what we want to determine this keyword inside the say my
name function the implicit binding rule states that when a function is invoked with the dot
notation the object to the left of the dot is what this keyword is referencing
javascript will now treat this dot name as person dot name
which is equal to the string vishwas and the output if i run node main
is my name is vishwas this is the implicit binding rule
the second rule to determine this keyword is explicit binding
consider the same function say my name but this time the function is separated
from the person object so function say my name and we log to
the console my name is this dot name in this scenario
we have to explicitly specify the context when the function is called
to do so we can use the call method in javascript every function has a
built-in method named call which allows you to specify the context with which a
function is involved so to invoke say my name with the person object context we have
to write say my name dot call with person as the argument
the first argument passed to call is what this keyword inside say my name is
referencing if you run node main the code will once again output my name
is vishwas to the terminal so this is the second rule which is
explicit binding the third rule for determining this in a
function is the new binding in javascript we can invoke a function
with the new keyword and in such a scenario the function is invoked with this keyword referencing an
empty object so consider a function called person
which accepts a name within the function we set this dot name
is equal to the passed in name with this function we can now create
multiple persons or people passing in different names each time
so const p1 is equal to new person and the name can be vishwas
and similarly const p2 is equal to new person
you pass in batman this person function right here is what
is known as a constructor function as we can create multiple persons from this
function now when we invoke a function with this
new keyword javascript under the hood will create a new empty object that this keyword will
reference so within function person i'm going to
add as a comment this is equal to an empty object
you can then add properties to the object using this followed by the dot notation
so this dot name is equal to name we are not creating this empty object
the new keyword internally does this when function person is invoked with the
new keyword the new keyword also does a few other things
but from at this keyword point of view i just want you to remember the following line
when a function is invoked with the new keyword within the function this keyword will always reference a new
empty object so if we log p1 dot name and p2 dot name
run node main we see vishwas and batman in the terminal
all right the fourth and final rule is the default binding which is the
fallback binding if none of the other three rules are matched
so consider the same say my name function let's call it as you would normally call
a function say my name with parentheses as you can see there is no dot notation
no call method or no new keyword as well if we simply invoke say my name
what do you think the output is run node main and you can see it is my name is
undefined so if none of the three rules are satisfied javascript will default to the
global scope and set this keyword to the global object
in the global scope javascript will try to find a variable called name
since it doesn't find it this dot name is undefined
if you were to have the variable name in the global scope however the const name is equal to superman
if it were to be a browser but since it is node
this dot name is equal to superman run node main
you can see the output is my name is superman so the fourth binding is the default
binding where this keyword will rely on the global scope
as you can see with this keyword you can introduce a dynamic value within the same function
what you should know is that when multiple rules can be applied to figure out this keyword
new binding takes top priority followed by explicit binding followed by implicit
binding followed by default binding so this is how
this keyword works in javascript it lets you specify the execution
context and its value is pretty much determined by how the function is invoked
all right next let's take a look at another concept that is usually difficult to understand which is the
concept of prototype when it comes to prototype there is a
lot of terminology and when we try to understand everything it may lead to confusion and us losing interest in the
topic especially as beginners in this crash course we will learn with
a simple example why and how prototype works in javascript
let's begin by defining a function called person
function person has two parameters first name and last
name and within the function we're going to write this dot first name
is equal to the passed in first name and this dot last name is equal to the
past in last name we can now create instances of this
person function using the new keyword so const p1 or person one
is equal to new person we pass in bruce
wayne similarly const person 2
is equal to new person we pass in clark and kent
now as you already know javascript is a dynamic language so it allows us to attach new properties
to an object at any given time so on person one we can attach
person one dot get full name which is going to be equal to a function
which returns this dot first name
followed by this dot last name you can also use the template literal
syntax for string concatenation now what you should know here is that
get full name property is specific to just person one
if we log person one dot get full name to the console
run node main we see bruce wayne logged in the terminal
however if we run person 2 dot get full name and run node main
we get an error person.getfullname is not a function
now what if we wanted to attach a property or a method that should be
applied to every instance of this person function in our example getfullname is a function
that benefits us by being available on all instances of the person function
since it is generic it is not specific to just person 1. it
would work on person 1 2 3 or even person 100
well this is where prototype comes into picture in javascript
every function has a property called prototype that points to an object
we can make use of that prototype object to determine all our shareable
properties so instead of person one dot get full name
we change it to the person function dot prototype
dot get full name now if we log
person1 dot getfullname and person2.getfullname
run nodemain we see bruce wayne and clark kent in the terminal
you have defined the getfullname function once but it is available on every instance of the person function
again on a sidenote the function that is used with the new keyword is called a constructor function
now one use of prototype is to share properties and methods across instances
the other use which is pretty significant as well is inheritance
in javascript inheritance is supported through the concept of prototypes and is
referred to as prototypal inheritance let's understand how it works
for our example we're going to create a superhero that is supposed to inherit properties and
methods from person so a superhero will have a first name
last name and a getfullname function but apart from that a superhero will
also have a property called eastsuperhero set to true and a fight crime function that locks a
message to the console let me walk you through the code
just going to rearrange the code so there is continuity
and now we are going to begin by defining the superhero function
function superhero and we add one property called is
superhero and we set it to true we also defined the fight crime function
on the prototype so superhero dot prototype
dot fight crime is going to be equal to a function
where we log to the console fighting crime
we can now create an instance of this superhero function const
batman is equal to new superhero
however batman only has access to ease superhero and fight crime
we want batman to also have a first name a last name and the getfullname function
instead of duplicating the code we have written for person let's inherit them
first let's inherit the first name and last name properties
superhero function will now accept two parameters fname
and a name these values though need to be passed
into the person function but the person function should be invoked with this keyword
pointing to this object from superhero function
and if you remember from the section on this keyword we can call a function by specifying
what this keyword should point to using the call method
so person dot call and we pass in
this keyword which is created inside the superhero function as its first argument
second argument will be fname third argument will be l name
so this keyword in person will now refer to this keyword in
superhero fname and a name get assigned
and first name and lastname properties are now inherited by superhero
now to inherit the get full name method we're going to use object dot create
which is a method that will delegate to another object on failed lookups
so superhero dot prototype is equal to object dot create
and we pass in person dot prototype so what this does is when you try to
access patman dot get full name javascript checks the prototype object
of superhero it doesn't find it however it sees that the prototype
object has a chain to person dot prototype created because of this object dot
create method it checks to see if person.prototype has
a getfullname method it does and it will execute that method
this is how the method is inherited through the prototype chain hence the name prototypal inheritance
so if you now pass in bruce and wayne
while creating batman and log batman dot get full name
run node main and we see bruce wayne locked in the terminal batman superhero has inherited get full
name from person the method will access this dot first
name and this dot last name which are also inherited by the superhero function
now one last bit of cleanup we need to do is to ensure superhero
dot prototype dot constructor is equal to superhero
otherwise javascript thinks that a superhero is created from person which
is incorrect run the code again and we still see bruce wayne
superhero has inherited properties and methods from person
all right for our next topic we're going to learn about the class keyword which
was introduced in 2015. a minute ago we learned about prototypal
inheritance if you're coming to javascript from a language like c plus plus or java
it might be very confusing you would be more used to class based
inheritance to somewhat relate to that classes were introduced in 2015.
however the class syntax does not introduce a new object oriented
inheritance model in javascript classes are primarily syntactical sugar over the existing
prototypal inheritance let's learn how it works by rewriting
the prototypal inheritance code with classes let's start with this person function
first change function person becomes class person
the initialization of the name argument to this object gets moved into a
constructor so constructor accepts first name and
last name and within the constructor this dot first name is equal to fname
this dot last name is equal to l name
second and final change all the methods on the prototype object
are rewritten as methods within the class
so say my name is a function where we return
this.firstname followed by this.lastname it is as simple as that
we can now comment out the previous code and create instances of this person
so const class person one is equal to new person
and we pass in bruce and wayne as arguments we can now log class p1
dot say my name to the terminal and we see bruce wayne being logged
so we can create an instance and access the properties and methods like before
nothing changes the class keyword simply makes the syntax better for the code we
already had in place let's now rewrite superhero which
inherits from person two keywords take care of the entire
inheritance and those two keywords are extends and super
we specify that class superhero extends class person
and in the constructor we accept
first name and last name and we invoke the super method that
javascript provides us passing in fname and lname
this will call the person class constructor
once we call super we set the superhero properties and methods in the class
this dot is superhero is equally true
and then we defined the fight crime method console.log
fighting crime but this simple class syntax pretty much
is all we have to write let me now create a new instance so
const batman is equal to new superhero passing in bruce and wayne
and we log batman dot say my name
which will print bruce wayne again let me reiterate classes are just
syntactical sugar over what was already existing in javascript
so make sure you understand how to create a class how to initialize properties
how to add methods how to create an instance of the class how to inherit using the extents and
super keywords that is pretty much all you have to know about the class keyword from a
beginner's point of view alright let's move on to the pen
ultimate topic in this crash course which is iterables and iterators
i'm going to begin by setting some context about iteration in javascript
before 2015 we had three looping constructs for loop while loop and do while loop
let me show an example of how to iterate and access data with a string and array
type using the for loop on the left hand side you can see that
we have stored the string vishwas in a variable called sdr
and we basically want to log every character in the string to the console
similarly on the right hand side the array is a collection of items which
is nothing but the characters of the string we have already seen we again want to log to the console each
item in the array now this form of iteration has two
difficulties if i can call it that first to apply some functionality on
each element in the string or each item in the array we first need to figure out how to
access that element we need to create a new variable i keep track of it ensure it satisfies a
condition and finally increment that value of i to access the next element in
the collection if there are nested for loops we have to do this all over again with a second
variable so we would have difficulty in accessing the element itself before even getting
to the part where we do something with that element the second difficulty is with the type
of the data structure it is kind of difficult to manage iteration on data for various types of
data structures you can see that iterating and accessing elements on a string is different from
iterating on an array so there was a need to iterate over various
data structures in a new way that abstracts away the complexity of accessing elements one by one and was at
the same time uniform across the different data structures
this would make our code more readable and less confusing that is exactly the reason for the
introduction of iterables and iterators in javascript iterables and iterators make it possible
to access data from a collection one at a time which allow us to focus on what
to do with the data rather than how to access the data in the year 2015 two new iteration
protocols were introduced which help with iteration they are the iterable and iterator
protocols it was also decided that some of the data structures would implement the
iterable protocol by default examples include strings arrays and two
more data structures which we haven't discussed namely maps and sets
they are termed as built-in iterables and a new looping construct which is the
for off loop was introduced to iterate over an iterable
here is how the loop works with the same string and array
as you can see we don't really have to worry about accessing the element from the data structure
it is just given to us one by one in a sequence allowing us to focus on the
functionality of course i'm just logging the value to the console but you can add any functionality you want to
but clearly this is better than creating a variable i tracking its value and
checking conditions before accessing the next element but what exactly is an iterable
let's understand that now an object which implements the iterable
protocol is called an iterable well then what is the iterable protocol
it states the following for an object to be an iterable it must
implement a method at the key symbol dot iterator
that method should not accept any argument and should return an object which conforms to the iterator protocol
which now leads us to the question what is the iterator protocol
the iterator protocol decides whether an object is an iterator
an object is an iterator when it satisfies the following rule
the object must have a next method that returns an object with two properties
value which gives the current element and done which is a boolean value
indicating whether or not there are any more elements that could be iterated upon
now if this made no sense whatsoever don't worry because i was on a similar
boat when i started on this topic and for me what helped was implementing my own
simple iterable and iterator let's head back to vs code and do just
that consider an object which is not a built-in iterable so const obj is equal
to an empty object our goal is to make this object an
iterable so that when this object is used with the for off loop it will print hello
world one word at a time for an object to be an iterable it must
implement a method at the key symbol dot iterator
so add a key which is going to be symbol dot iterator
and add this key we must implement a method
the final rule of the iterable protocol is that this method should not accept any argument and should return an object
which conforms to the iterator protocol at the moment we don't know much about
what an iterator is but we do know it's an object that implements the iterator protocol
so i'm going to create an object called iterator and then return it
const iterator is an object i'm going to return
iterator this is pretty much the iterable protocol expressed in code
next we need to implement this iterator now an iterator is an object that has a
method at the key next the method should return an object which
contains two properties value and done
so in the iterator object we're going to define a method at the key next
and this method will return an object which contains two properties
value and done value gives the current element and done
is a boolean value which indicates whether there are more elements to be iterated upon
i'm currently not returning the object on line 145 because this is where we
need to come up with our logic so within the outer function defined at
key symbol.iterator we declare a variable called step
and initialize it to zero within the inner function we increment the value of step by one
and based on the value of this step variable we return the appropriate
object if step is 1
we return an object where value is going to be the string hello
and done is set to false similarly
else if step is equal to two
we're going to return a similar object where value is world and done is still
false so for step one and two we return hello
and world and done is set to false when step goes beyond to
we return undefined and done is set to true so return
an object where value is undefined and done is set to true
so we are saying there is no more iteration necessary if we now use this object with a for off
loop so for const word of obj
console.log word run node main
you can see it locks the value hello followed by world our object
is now an iterable to be more precise we have created our
very own iterable now similar to what we have done here
javascript does it internally for strings arrays maps and sets
that is how you can easily iterate them with the for off loop
hopefully you now know what are iterables and iterators in javascript
all right for the last topic in this advanced javascript crash course we're going to learn about generators
we've just seen how to create our very own iterable and iterator even though it is not difficult
to make an iterator ourselves that is create an object with the next method
and define its behavior it is definitely a verbose implementation
wouldn't it be nice if there was something that would create an iterator for us instead of us having to write it
that is where generators come into picture generators are a special class of
functions that simplify the task of writing iterators
now there is a lot to learn when it comes to generators but for this crash course we're only going to focus on the
part where it relates to iterators in javascript in fact what we are going to do
is rewrite this very hello world example using generators
that will allow you to compare and contrast writing our own iterators versus using generators
all right so how can we create a generator in javascript we write functions using
the function keyword so function normal function parentheses and curly
braces a generator since it is a special function we use the function keyword
followed by an asterisk function asterisk
generator function parentheses curly braces
but what is so special about it now we all know that a normal function
follows the run to completion model so if i
add two log statements to log hello and world
this normal function what we have here will not stop before the last line is
executed the function will log hello followed by world to the console
the only way to exit this function is by returning from it or throwing an
error so if we call normal function and run node main
we see hello and world if you call the function again
it will begin execution from the top we say hello world and hello world
in contrast a generator function is a function that can stop midway and then
continue from where it stopped or you could say a generator function
can pause the execution to achieve that behavior
we use the yield keyword so yield hello
and in the next line yield world
yield is an operator with which a generator can pause itself
every time a generator encounters a yield it yields the value specified after it
we don't say it returns a value we say it yields a value
next let's talk about invocation we invoke a generator function by adding
parentheses after the function name so generator function
and parentheses however unlike returning a value from a normal
function a generator function always returns what is called a generator object
so const generator object is equal to the invocation of generator function
and this generator object is an iterator so instead of us having to create an
iterator a generator function will create it for us and because the generator object is an
iterator it can be used in for-off loops so for
const word of generator object log to the console
word if we clear the terminal and run node main you can see hello followed by world
as you can see with generators we not only have created an iterable
that returns hello followed by world but we also have a simpler way to create
iterators we have achieved the same iteration behavior we had seen two minutes ago but this time it is much
simpler to define our custom iteration behavior i think it is a bit obvious looking at
the code the benefit we get from using the generator function
first we don't have to worry about this symbol.iterator second we don't have to worry about
implementing the next method third we don't have to create the object
that is returned from the next method finally we don't have to be responsible
for managing the state in our iterator we have a variable called step that needs to be tracked
between iterations however we have nothing of that sort in
a generator so that is about generators in javascript
generators were introduced in 2015 and allow you to define an iterative
behavior by writing a single function whose execution is not continuous
well with that we come to the end of this crash course on advanced javascript
if you're interested in a deeper understanding and want to solve some challenging exercises on each of the
topics we have seen do make sure to check out my preparing for a frontend interview course where i
elaborate on these topics it will surely give you an edge in your
next interview the link to the course is in the description down below
alright if you have enjoyed the video please do leave a like and subscribe to the channel for more content on web
development i'll see you in the next video which is a crash course on asynchronous
javascript