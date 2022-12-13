# Asynchronous JavaScript Crash Course

https://youtu.be/exBgWAIeIeg

this video is sponsored by tascade a real-time organization and collaboration
platform make sure to check the description for a discount on your subscription
hey everyone my name is vishwas and welcome to this crash course on asynchronous javascript
in this crash course we will understand some of the topics related to async javascript
now if you've been watching my other crash courses this one is going to be a bit different
if you're sort of new to the channel i would like to point out that i have a paid course
on preparing for a front-end interview this course covers a number of topics
with javascript being one of them i've also covered in detail the concepts
relating to async javascript in very simple terms i feel every javascript developer must
have a good understanding of the async concepts so i've decided to include the entire async javascript lectures from
the paid course into this video if you feel the content is helpful
please do consider purchasing the course and i will leave a link to this in the description down below
with this intro i'll let you get started with asynchronous javascript
all right we are now at the last important topic when it comes to javascript interviews
and that is asynchronous javascript we need to understand the basics of
async programming and why async javascript is important
under this topic we have a few concepts to cover from an interview point of view
we have timeouts and intervals callbacks promises async await and the all
important event loop if you are a junior dev applying for an interview
a surface knowledge of these topics will suffice however if you are applying for a more
senior role you're expected to have a deeper understanding of all these topics
so here is how we are going to approach this part in this lecture we are going to
understand the what and why of async javascript in the upcoming videos we will see the
how of async javascript by understanding and solving exercise problems on
timeouts callbacks promises and async await
we will wind up async javascript by understanding how all of them behave with respect to the event loop
with that in mind let's begin now the first point to understand about
javascript is that in its most basic form javascript is a synchronous blocking
single threaded language and the three points mentioned here are really important
let's understand what they mean the first point is that javascript is
synchronous so if we have two functions which log
messages to the console code executes top down with only one
line executing at any given time so if we have function a and function b
and we call both the function javascript will always log a and then
b the second point is that javascript is blocking which is because of its
synchronous nature no matter how long a previous process takes the subsequent process won't kick
off until the former is completed so if function a has to execute an
intensive chunk of code javascript has to finish that task without moving on to
function b even if that code takes 10 seconds or 1 minute
you might have seen this happen in the browser when a web app runs in a browser and it
executes an intensive chunk of code without returning control to the browser the browser
can appear to be frozen this is called blocking the browser is
blocked from continuing to handle user input and perform other tasks until the
web app returns control of the processor the last point is that javascript is
single threaded a thread is simply a process that your javascript program can use to run a task
and each thread can only do one task at a time unlike a few other languages which
support multi-threading and can thus run multiple tasks in parallel javascript has just the one thread
called the main thread for executing any code this brings us back to the point that in
its most basic form javascript is a synchronous blocking single threaded
language but as you might have already guessed
this model of javascript creates a huge problem what if we have a task to retrieve data
from the database and then run some code on that data that is retrieved
we have to wait on the first line for the data to be fetched and when the data finally comes back we can resume with
our normal execution but that could take like one second or
even more and during that time we can't run any further code
in javascript if it simply proceeds to the next line without waiting we have an
error because data is not what we expect it to be so
we need a way to have asynchronous behavior with javascript
now the question is how do we cater to asynchronous programming in javascript
well as it turns out just javascript is not enough to achieve that
we need new pieces which are outside of javascript to help us write asynchronous code which is where web browsers come
into play web browsers define functions and apis
that allow us to register functions that should not be executed synchronously and
should instead be invoked asynchronously when some kind of an event occurs
for example that could be the passage of time the user's interaction with the mouse or the
arrival of data over the network this means that you can let your code do
several things at the same time without stopping or blocking your main thread
alright i hope you now have a fair understanding of what why and how of
async javascript in the next lecture let's begin with the traditional methods javascript has
available for running code asynchronously namely timeouts and intervals
in this lecture let's look at the traditional methods javascript has available for running code
asynchronously after a set time period elapsed or at regular intervals of time
in other words let's look at the set timeout function and the set interval function
let's begin with set timeout the set timeout function executes a
particular block of code once after a specified time has elapsed
let's understand the parameters it accepts the first parameter is a function to run
or a reference to a function defined elsewhere the second parameter is a number
representing the duration in milliseconds to wait before executing
the code after the second parameter you can pass in zero or more values that represent
any parameters you want to pass to the function when it is run
suppose we have a function greet which logs hello to the console we can pass that function into set
timeout with a duration of two seconds the text hello will be logged to the
console after two seconds if the grid function were to accept a
parameter like we see in the next example we can pass the parameter value as the
third argument to set timeout and after two seconds hello vishwas would be
logged to the console once a set timeout has been called
sometimes you might want to cancel it to clear a timeout you can use the clear
timeout method passing in the identifier returned by settimeout as a parameter
so in the code snippet on line 5 you can see that we assigned the return value
from set timeout to a constant called timeout id on line 6 we pass that id into the clear
timeout method which will basically ensure our grid function will not run
after the two second duration so nothing is logged to the console as the grid function never executes
a more practical scenario is clearing timeouts when the component is unmounting to free up the resources and
also prevent the code from incorrectly executing on an unmounted component
so that is about set timeout it runs code once after a set period of time
if you however want to repeatedly run the same code over and over again at regular intervals you can make use of
the set interval function the signature remains the same as the set timeout function
first parameter is the code to execute second parameter is the duration in milliseconds and then zero or more
arguments for the passed in function in this sample code snippet the function
greet is called every two seconds which logs hello to the console every two seconds
another point to keep in mind is that intervals keep running a task forever so
you should clear the interval when appropriate you can do that using the clear interval
function so capture the return value from set interval and pass it in as an argument
to clear interval that is pretty much the basics of
timeouts and intervals now there are a few more points to highlight so let's go through them
the first point is that timers and intervals are not part of javascript itself
they are implemented by the browser and set timeout and set interval are basically names given to that
functionality in javascript let me repeat that timers and intervals are not features of
javascript however javascript lets us use those features which are implemented in the
browser and of course node the second point is about the duration
parameter the duration specified is the minimum delay and not guaranteed delay
for example if we call set timeout with two seconds two seconds is the minimum time after
which the passed in function will execute it could in fact take 5 seconds
javascript will only run the function when two seconds have elapsed and the
call stack is free if not the function has to wait before it is executed
so if i type in set timeout with 0 milliseconds as the duration it doesn't imply that the function will
run immediately it is the minimum duration after which the function will run
now if you're confused with this point you don't have to worry we're going to understand this in detail when we talk
about event loop a few lectures down the line the third and final point is about
recursive set timeout versus set interval it is possible to achieve the same
effect as set interval with a recursive set timeout
so we have set interval with a duration of 100 milliseconds
and we have the same functionality with recursive set timeout
basically the run function keeps calling itself every 100 milliseconds
however there are two differences in these approaches the first one is that in case of
recursive set timeout the same 100 milliseconds is guaranteed between
executions the code will log hello to the console wait 100 milliseconds before it runs
again irrespective of how long the code takes to run the interval will remain the same
set interval on the other hand works differently in the sense that the duration interval includes the time
taken to execute the code you want to run so if the first time the code takes 40
milliseconds to run the interval is only 60 milliseconds if the second time the code takes 50
milliseconds to run the interval is only 50 milliseconds
typically it shouldn't affect your code too much but if your code can take
longer to run than the time interval itself it's always better to go with recursive
set timeout rather than set interval this will keep the time intervals
constant between executions regardless of how long the code takes to execute
and also you won't get any errors the second difference is that with
recursive set timeout you can actually calculate a different delay before running each iteration
so recursive set timeout gives you the flexibility of running the same code over and over but with different
intervals whereas set interval is always a fixed interval duration
all right now that we have a good understanding of set timeout and set interval let's head into the next
lecture where we discuss some really important exercise problems from an interview point of view
let's proceed to the next lecture welcome back in this lecture we are going to learn
about callbacks in javascript let's begin by understanding an
important point in javascript functions are first class
objects what that means is that just like an object a function can be passed as an
argument to a function and a function can also be returned as values from
other functions let's understand this with a simple example
i have a function called greet which accepts a name parameter and logs to the console hello followed
by name i then have another function called greet vishwas
what is special here is that the function accepts another function as its argument
within the function body we have a const declaration name equal to vishwas
and we call the passed in function with name as its argument finally we invoke greet vishwas
passing in the greed function so the control goes to greet vishwas
which calls greet fn greet fn is nothing but the greet
function we have defined here so execution goes to the greet function
with name equals vishwas and hello vishwas is logged to the console
segrete vishwas is a function which accepts another function as an argument
and you might be pleasantly surprised to learn that any function that is passed as an
argument to another function is called a callback function in javascript
also the function which accepts a function as an argument or returns a function is
called a higher order function if i simply rename the function and its
argument to convey what they stand for on line 5 we have higher order function
which accepts a callback function and then on line 7 calls that callback
function passing in the name constant so we now know what a callback function
is you might be thinking is that it well yes
a function passed as an argument to another function is called a callback function
but what we need to understand is why do we need a callback function
we can answer that by categorizing callbacks into two synchronous callbacks and asynchronous
callbacks let's first talk about synchronous callbacks
a callback which is executed immediately is called a synchronous callback
agreed callback function from earlier is an example because the function gets executed immediately when the control
goes inside the higher order function a more practical example is a callback
function passed to methods like sort map or filter in these cases the callback function
defines the logic that the higher order function needs to apply so nothing too fancy when it comes to
synchronous callback let's now move on to asynchronous callback which will also bring our focus
back on asynchronous javascript an asynchronous callback is a callback
that is often used to continue or resume code execution after an asynchronous
operation has completed so in the async world callbacks are used to delay the
execution of a function until a particular time or event has occurred
and this use case is really important because most of the applications that we
build usually have some sort of data to be fetched we all know that data
fetching takes time and we can only run the function we want to after the data has been fetched and not
immediately let's take a look at a few examples on async callbacks which you might already
be using without knowing that their callback functions the first example is that of settimeout
which we recently learned here set timeout acts as the higher
order function and greet is the callback function when thread of execution goes through
line number five does the grid function execute immediately no
it waits for two seconds and then executes the great callback function making it an async callback
another common usage is event handlers when javascript encounters line number 5
it does not immediately run the callback function the function is only run when the user
clicks on the button if you want a data fetching example with callbacks you can go back to jquery if
you've used it before dollar dot get and the first parameter is the url and the
second parameter is the callback function which gets called only after
the data has been loaded so this is the role that callback
functions play in async javascript they allow you to delay the execution of
a function callbacks are something you're going to heavily see in node.js
however there is a problem with the callbacks pattern if you have multiple callback functions
where each level depends on the result obtained from the previous level the nesting of functions becomes so deep
that the code becomes difficult to read and maintain in the code snippet here you can see
that each inner function depends on the result obtained from the outer function
so once you go several levels deep like on line 5 the nesting starts to confuse you
the code is just not intuitive and only gets worse with more and more callback
functions as the application grows to tackle this problem of callback hell
promises were introduced in es6 which we will learn about in the next lecture
but let me summarize about callbacks from an interview point of view
callbacks are functions passed as arguments to other functions they can be synchronous if they execute
immediately or they can be asynchronous where they get executed after some time
has passed some event has occurred or some data has been fetched
callbacks were the go to pattern for asynchronously running code after fetching some data
however as more and more requests had to be made based on the data obtained from
the previous requests developers started to encounter what is known as the callback hell
callback hell makes the code difficult to reason about an alternative and the recommended
approach now is to use promises let's learn about that in the next lecture
all right in this lecture we are going to learn about promises in javascript
here is a useful piece of info in about eighty percent of the interviews i appeared for i was asked
about promises so if you're appearing for a senior dev position you can take it for granted
that you will be asked about this topic so make sure you have a thorough understanding about promises in
javascript i want to begin by helping you understand promises with a simple
analogy once you understand the big picture in simple layman terms we will then move on
to understanding promises in javascript consider a scenario where you and your
roommate want to have dinner at home you want to prepare your special soup
and at the same time you feel like having tacos from the food truck nearby
so you ask your roommate hey can you go down to the food truck and
get us some tacos your friend says sure and when he's about to leave
you tell him there is no point in me waiting till you're back to prepare the soup
so i'll start with the soup now but when you reach the place can you promise that you'll text me so
that i can start setting up the dining table also let me know if something goes wrong
if you can't find the food truck or if they're out of tacos for the night whatever might be the reason just let me
know that you cannot get the tacos and i'll start cooking some pasta instead
your friend says sure i promise i'll head out now and text you in some time
now you go about preparing your soup but the status on tacos
we can say that it is currently pending till you receive that message from your friend
when you get back a text message saying that he is getting the tacos your desire to eat tacos has been
fulfilled you can then proceed to set up the dining table
if the text message says that he cannot bring back any tacos your desire to have
tacos have been rejected and now you have to cook some pasta instead
all right now let's pick the important bits from the scenario and relate it
back to javascript and promises in the scenario your friend is like a promise in
javascript while your friend is on his way to the food truck you know that it could take a
while and you don't want to sit idle so you start preparing soup in the meantime
this part is an analogy to an asynchronous operation in javascript
fetch tacos when your friend texts you with can get tacos or can't get tacos
it answers your question on whether he's getting the tacos or not in javascript this is the promise return
value if the return value is can get tacos
the promise is said to be fulfilled if the return value is cannot get tacos
for whatever might be the reason the promise is said to be rejected
if the promise is fulfilled you can set up the dining table this is a success callback
or in other words it is the callback function that gets executed when promise
resolved successfully the promise is rejected you can cook some pasta and this is the
failure callback or in other words it is the callback function that gets executed when the
promise failed to resolve and was rejected instead
that pretty much is a high level overview of what a promise is in javascript
let's read through the mdn definition of a promise a promise is a proxy for a value not
necessarily known when the promise is created it allows you to associate handlers with
an asynchronous actions eventual success value or failure reason
to understand this definition better let's break it down a promise is a proxy for a value
going back to our example your friend made a promise that he will let you know
whether he can or cannot get tacos which is the promise value
the promise value is not necessarily known when the promise is created
in our example you don't know which one of them is the value when your friend made his promise
he can get tacos or cannot get tacos you don't necessarily know that value
a promise allows you to associate handlers with an asynchronous actions
eventual success value or failure reason in our example
based on the promise value you could decide ahead of time what has to be done when the promise is
eventually fulfilled or rejected that is either setting up the table or
cooking pasta hopefully the definition makes much more
sense now technically let me tell you that a promise is simply an object in
javascript and a promise is always in one of the
three states pending which is initial state that is neither fulfilled nor rejected
we have fulfilled meaning that the operation completed successfully and we have the rejected state meaning
that the operation failed all right you should now be having a
fair understanding of what a promise is in javascript now for the next question
why would you use a promise well for one and only one purpose
promises help us deal with asynchronous code in a far more simpler way compared
to call backs remember the callback help we spoke about in the previous lecture
well that can be avoided with promises and the code can be sort of read in a simple synchronous way
you'll see this in just a bit when we take a look at an example all right that is the what and why about
promises next let's see how to work with promises in javascript
if you go back to our example we have your friend as an analogy for a
promise we have can get tacos or cannot get tacos which is the promised value that
your friend should inform you about if he can get tacos he's fulfilling his
promise if he cannot get tacos he is rejecting his promise
and we have the success callback and the failure callback that we need to attach
to the result returned by the promise either set up the table or cook pasta
now these six points cover the necessary information about a promise
so now we need to understand three things in code
how to create a promise which covers point number one how to fulfill or reject the promise
which covers points two three and four and finally how to execute callback
functions based on whether the promise is fulfilled or rejected which covers
points 5 and 6. let's go over them one by one starting
with how to create a promise we create an instance of a promise using
the new keyword with the promise constructor function the const promise is equal to new
promise next question how to fulfill or reject the promise
well it turns out that the promise constructor function accepts one function as its argument
let's pass in an arrow function this arrow function automatically
receives two arguments resolve and reject
here resolve and reject are both functions resolve is a function which when called
changes the status of the promise from pending to fulfilled
reject is a function which when called changes the status of the promise to reject it
this is very important to keep in mind you cannot directly mutate the status of
a promise you can call the result function to fulfill the promise or the reject
function to reject the promise but both these functions are typically
called after an async operation to keep things simple let's use a set
timeout we're going to assume that for your friend to go out and text you back it
takes five seconds so our code now changes to incorporate the set timeout
if the food truck was found we will call resolve after five seconds
the food truck was not found we call reject after five seconds
this is pretty much how you fulfill or reject a promise
the final part is to understand how to execute callback functions based on the
status change of the promise let's define two callback functions
on fulfillment is the function to be called if result is called after the
async operation on rejection is the function to be called if reject is called after the
async operation going back to our analogy if the food truck was found
our promise is fulfilled in which case we want to set up the table to eat tacos
if the food truck was not found and our promise is rejected we have to start cooking the pasta
i've turned those actions into log statements on line 3 and line 8.
ideally there would be more code in your callback functions but we simply log into the console and
it serves the purpose now i keep telling you that we are defining callback functions
but callback functions are functions that are passed in as arguments to other functions
right well where are those other functions this is the point where the promise we
have created comes into picture when we create a new promise using the
promis constructor function the promise object gives us access to two methods
or functions if you want to call it that then and catch
we call those functions using promis dot then and promise dot catch as you can
see on lines 18 and 19. but here is the important bit
if the status of the promise changes from pending to fulfilled by calling the resolve function
the function that is passed to then function will automatically get invoked
and if the status of the promise changes from pending to rejected by calling the reject function
the function that is passed to catch function will automatically get invoked
in our case we need to pass on fulfillment function to then and on rejection function to
catch since the two functions are passed in as arguments to other functions they are
callback functions hopefully that makes sense now
our promise code works as expected but there is room for improvement
what if we want to send out some data when resolving or rejecting a promise
that way inside our callback functions we can make use of the value to do something else
well it turns out that we can do that by passing an argument to resolve or reject
for the resolve function on line 6 we'll pass in a string which says bringing
tacos and for reject on line 40 i'll pass in a string that says not bringing tacos food
truck not there but how do we access these strings in our call back functions
well the great thing about a promise is that it will automatically inject the
argument passed to resolve as the argument to the on fulfillment callback
and the argument passed to reject as the argument to the on rejection callback
you can see that i've included parameters to both these callbacks and simply log them to the console on line
three in line nine so we would now see the output bringing tacos set up the table to eat
tacos from lines three and four when the promise is fulfilled or if there is an error and hence a
rejection we would see cannot bring tacos start cooking pasta
from lines 9 and 10. of course in a practical scenario your
result would be an object or an array or any data type that your async operation
returns and the error might be an object with different error codes and in your on
rejection callback handler you might want to perform different actions based on the error status code
but this pretty much is the fundamentals of promises in javascript
during an interview begin by explaining what is a promise and you don't have to give the technical
definition from mdn it is probably better to explain in your own words
talk about how promises are used for async operations in javascript give an analogy to a real-world scenario
and connect it back to javascript talk about the three states that a promise can be in namely pending
fulfilled and rejected talk about the function that is passed into the promise constructor function
talk about the resolve and reject functions and how they change the state of the promise from pending to fulfilled
or pending to rejected finally talk about the on fulfillment and on rejection callback functions
which let you decide what to run when a promise is either fulfilled or rejected
if you're applying for a junior dev role for the most part this should give the interviewer a good impression about your
knowledge of promises however there are a few more details for us to understand
we will do that in the next lecture which is part two of promises
in the previous lecture we learned the fundamentals of promises in javascript
we learned how to create a promise how to change its state using the resolve and reject functions
and also how to attach callbacks using then and catch functions on the promise
object in this lecture let's understand a few more points around the concept of
promises which are useful during an interview let's start with the first point which
is regarding then function at the moment we pass in the on
fulfillment callback to then function and on rejection callback to catch
function but you could if you want to pass on rejection as a second argument
to then function the code works exactly as before
however the usage of catch function is encouraged because of one main reason
in the below two argument approach the on rejection callback handles errors
from only the promise however if your callback function itself throws
an error or an exception there is no code to handle that
if you have a catch function though even if your on fulfillment callback throws an exception
it is still caught and then you can handle that exception gracefully so do
make a note that then function can accept both success and error callbacks
but it's not preferred over using catch function let's move on to the second point for
this lecture which is about chaining promises at the moment a promise is returned by
using the new keyword followed by the promise constructor function but let me tell you that
both then and catch methods return promises this means
then and catch methods can be changed in javascript so the two lines on line 5 and 6 can be
rewritten as promise dot then on fulfillment dot catch on rejection
and this chaining can be done as many times as you want to which also solves the problem of call
back health we encountered a few lectures back so the code with callbacks looked like
this the same code with promises looks like this
as you can see the code becomes much more readable and maintainable in fact
it seems as if the code is synchronous we begin by fetching the current user
then fetch the followers then fetch their interests then fetch their tags then fetch the description
and then finally display the data so this is really important to keep in
mind not only from an interview point of view but also for your day-to-day work
promises can be chained the last point to discuss when it comes to promises for an interview is some of
the static methods available with a promise the first one is the promise.all static
method many a times you may want to query multiple apis and perform some actions
but only after all the apis have finished loading for such scenarios you can use promise
dot all here is a good example from mdndocs to help you better understand this method
in the example we have here the first promise immediately results
the second isn't really a promise and the third results after 100 milliseconds
you can pass in all the three promises as an array to promise dot all
and you see the output as an array containing the results of the individual promises
however please do keep in mind even if one of the promises rejects
promise.all will reject with that error message
so this example can be summarized into the following points
the promise.all method takes an iterable of promises as an input and returns a
single promise that results to an array of the results of the input promises
the return promise will resolve when all of the input's promises have been resolved or if the input iterable
contains no promises however it rejects immediately if any of
the input promises reject or the non promises through an error and will reject with the first rejection message
or error that is about promise promise.all
a slight variation of promise.all is promise.all settled which waits for all
input promises to complete regardless of whether or not one of them is rejected
so promise.all returns even if one promise rejects whereas all settled
returns after all promises have completed even if one or more promises
reject the next method is promise dot raise
this method returns a promise that fulfills or rejects as soon as one of
the promises fulfills or rejects with the value or reason from that promise
in the example we have here even though both promises resolve
promise 2 results in 100 milliseconds whereas promise 1 results in 500
milliseconds so the value result from promise 2 is the value promise dot raise will get
which is log to the console on line 10. the output is the string 2 that you can
see here so promise dot all promise dot all settled and promise dot raise
these are some of the static methods to keep in mind for an interview
well with that we come to the end of the discussion about promises in javascript
in the next lecture let's take a look at how asynchronous code can be further improved with async await
welcome back in the previous two lectures we learned about promises in javascript
we learned about the basic syntax and how to add success and failure callbacks
we also learned how chaining promises resolves the problem we had with callback hell
although it's clear that promises improve the readability of your asynchronous code
there is a way to improve it even further that is by using the async await
keywords introduced in es2017 the async await keywords allow us to
write completely synchronous looking code while performing asynchronous tasks
behind the scenes in this lecture let's understand more about async and await
let's start with the async keyword the async keyword is used to declare
async functions what are async functions async functions
are functions that are instances of the async function constructor
now what is special about async functions well unlike normal functions async
functions always return a promise let's understand this with an example
here you can see that we have a simple normal function greet which returns hello
when you run this function in the browser console it locks hello nothing that we don't already know
let's convert this function into an async function you do that by declaring the function
with the async keyword so async function greet and then the function body
so we now have async function greet which returns hello
however if you run this function in the browser console you're going to see
promise fulfilled followed by hello logged fulfilled is the promise status and
hello is the promise value like i mentioned an async function
always returns a promise if you don't explicitly return a promise
the async function will automatically wrap the value in a resolved promise
so you could if you wanted to rewrite the function body as async function grid
return promise dot resolve hello and output would be the same
in order to actually consume the string value when the promise fulfills we would use then function on the promise
instance it's a greet dot then which receives the promise value which you then log to the
console now you can see that the output on line 5 is the string hello
so the async keyword ensures that the function returns a promise
but it's not just that the real advantage of async functions
become evident when you combine it with the await keyword let's understand more about this await
keyword the first point is that the await keyword can be put in front of any async
promise based function to pause your code until the promise settles and returns its result
in simple terms you can say that the await operator makes javascript wait until the promise settles and returns a
result the second point about the await keyword is that it only works inside async
functions you cannot use a weight in normal functions let's understand this with an example
we have an async function greet within the function body on line three
we create a promise that results after one second we store the promise in a variable
called promise in the next line we await the promise
and assign the returned value to the result variable on line 9 we log the result to the
console which prints hello so what is happening here is that the
await keyword basically pauses code execution till the promise settles
in this example the promise takes one second to settle so after a second the execution resumes
and hello is logged to the console it's important to note here that the
await keyword literally suspends the grid function execution until the promise settles
and then resumes it with the promise return value the javascript engine can do other tasks
in the meantime but as far as greet function is concerned there is one second suspension
where no further code will execute if we go back to the promise chaining
example we had a look in the previous lecture we can rewrite it using async await in
the following way you can see that the code resembles synchronous code and is even more
readable than a promise chain in fact error handling is also
simplified as you can simply use try catch blocks like you would with synchronous code
all right the last thing i want to discuss when it comes to async await is sequential versus concurrent versus
parallel execution it's really important to understand this because you might be unknowingly slowing
down your own code consider two simple functions as you see
here in this slide both functions return a promise
the first function is resolve hello which resolves the string hello after two seconds
the second function is resolve world which results the string world after one
second let's use both these functions to understand sequential execution first
we have an async function called sequential start where we call both the functions and await on the result
in this case resolve hello will take two seconds and then hello is logged to the console
only then the execution goes to resolve world which takes an additional second
so after three seconds which is two plus one the string world is logged to the
console now unless your second function is dependent on the first function you
probably shouldn't be doing this as there is an unnecessary delay of one second
the total time taken to log hello world and sequential start is 3 seconds
now let's talk about concurrent execution again you can see that we have an async
function called concurrent start where we call both the functions
however there is a difference this time we go ahead and call both the functions
and store the result in hello and world but when logging to the console we are wait
for the promise to be fulfilled what happens in doing so is that hello
gets resolved after two seconds and gets logged to the console since world actually results in just one
second by the time hello is resolved world is ready with its value
so as soon as the execution comes to await world on line six it logs that
value to the console immediately there is no need to wait an additional second
now this is probably what you want to be doing when loading parts of a page
concurrently fire off all your requests and then display the ui as per your requirement by awaiting in the right
order the total time taken to log hello world in concurrent start is 2 seconds
or in other words the longest time taken by a function to resolve
finally let's talk about parallel execution if you prefer that individual functions
are resolved without having to wait for other functions to be resolved you can make use of promise.all and use async
functions as arguments in this example after one second world
will be locked to the console and after two seconds total hello would be logged to the console
so this is a case of running whatever code resolves first
the output in this case would be world hello with the total time taken of two
seconds of course in the parallel function itself if you want to ensure the
execution is paused at promise dot all then on line one add the async keyword
and on line two you need to await promise dot all the resulting output is world hello
finally world locks after one second hello locks after two seconds
and after the promise has been awaited we then log the string finally so javascript waits for all the
promises to be resolved before moving on to line six so that is about async and await
the async and await keywords enable asynchronous promise based behavior to be written in a cleaner style avoiding
the need to explicitly configure promise chains of course you don't have to memorize
this definition but make sure during an interview your explanation covers the essence of the definition
typically this would be a follow-up question after promises so explain that in es2017 async await
keywords were introduced to help write async code in a cleaner way
explain first about the async keyword how it always returns a promise and then explain about the await keyword which
will pause execution till the promise is resolved or rejected
the sequential versus concurrent versus parallel execution isn't really necessary but will
definitely give you an edge if you can explain it well during your interview
in the next lecture let's take a look at a quick exercise related to async await
all right in this lecture let's understand about the all important event
loop in javascript let me tell you that what do you know about the event loop in javascript is an
extremely popular question for a senior front-end developer interview
but interview aside it is one concept that i would highly recommend you learn
as early as possible in your career as a front-end dev it will tremendously help you understand
and write better asynchronous code in javascript
we will split this discussion on event loop into four concise lectures
in this lecture we're going to begin with a small recap about async programming in javascript
we will then go through the different parts that are essential to run asynchronous code in javascript
we will also see how the different parts work when executing a simple synchronous
code snippet in the next three lectures we will understand the same but with
asynchronous code snippets we've already learned about callbacks
and promises that make async programming possible but as a senior front-end dev you should
understand how they work internally so in the next lectures we will see how
a set timeout code executes how a promise executes and finally in
part four how the code that combines all of these topics executes
by the end of the fourth lecture i guarantee you that you'll have a much better understanding of not only async
javascript but also javascript in general let's begin with a recap
if you can recollect from the first lecture on async javascript i mentioned that javascript is a synchronous
blocking single threaded language i also mentioned that to make async
programming possible javascript alone isn't enough we also need the web browser
so let's try to understand what are the different parts that come together from javascript and the browser to make async
programming possible the entire model is referred to as the
javascript runtime environment as part of this environment we first have the javascript engine
this comprises of a memory heap and a call stack
whenever you declare variables or functions memory is located on the heap
whenever you execute code functions are pushed onto the call stack and when the function returns it is
popped off the call stack a straightforward last in first out implementation of the stack data
structure a popular example of a javascript engine is chrome's v8 engine
if you come across the term v8 engine it is on a very high level referring to
this sort of a javascript engine implemented in chrome
now the second part of this environment is the browser's web apis for example say timeout promise xhr
request dom etc remember these apis are not
implemented in javascript they are features provided by the browser that javascript simply has
access to the third part of this runtime environment is what is called a callback
queue it is also called a task queue or simply a message queue
this cube is a first in first out data structure
the fourth and final part important for our discussion is the event loop
the event loop has only one job check if the call stack is empty and if
it is push an item from the queue into the stack
and we will learn more about these parts while we go over set timeout and promise code snippets
but this runtime is what you need to imprint in your mind
for the current lecture on synchronous code and the next lecture on said timeout code
we don't have to worry about the memory heap so we can further simplify this model
leaving out the memory heap the call stack the web apis the callback
queue also known as the task queue and the event loop are sufficient for
now with this model in place we can now go over a simple synchronous code snippet
and understand how the javascript runtime goes about executing the code
on the left we have a simple code snippet three console.log statements that log
first second and third one after the other there is no async aspect to the snippet
but i want you to first understand how the call stack works so on the right hand side we have the
javascript runtime environment from the previous slide bottom left i also have the browser
console so that we can see the output for the code snippet now let's walk through the code as if
the runtime is executing it the thread of execution always starts in
the global scope so the global function if you can call it that is pushed onto the stack
then on line one we have a console.log statement the function is pushed onto the stack
and for the sake of understanding the timeline let's assume this happens at one millisecond
first is locked to the console then the function is popped off the
stack execution comes to line three let's say at two milliseconds
log function is again pushed onto the stack second is locked to the console and the
function is popped off the stack finally execution is on line 5
and at 3 milliseconds function is pushed onto the stack third is logged to the console and the
function is popped off the stack there is no more code to execute and
global is also popped off this is pretty much how synchronous code
execution can be visualized with the javascript runtime
of course we haven't talked about web apis or the callback queue or even the event loop for that matter because that
is not needed for synchronous code but understanding how the call stack
works is really important to understanding asynchronous code as well
so let's head over to the next lecture where we will understand a code execution with settimeout
welcome back in this lecture we are going to visualize how a set timeout code would
execute in the javascript runtime environment on the left hand side we have the code
snippet three log statements like before but this time the second log statement is
actually delayed using the settimeout function so on line one we log first to the
console on line three we have the set timeout and inside the callback function we
logged second to the console and on line seven we log third to the
console a straightforward code snippet let's understand how the execution
proceeds we have the runtime again on the right hand side and console on the bottom left
javascript starts executing in the global scope so global gets pushed onto the stack
execution comes to line one at one millisecond console log is pushed
onto the stack first is logged in the console and the function is popped off the stack
execution now moves on to line three at two milliseconds
the set timeout function gets pushed onto the stack in the earlier lecture i mentioned that
say timeout is not a feature present in javascript it is a web api which we can call from
javascript so what happens now is that the callback function and the duration are handed
over to the set timeout web api which is a browser feature javascript then simply pops off the set
timeout function from the calls tag because its job is done as far as execution of line 3 is concerned
the web api starts its timer for 2 seconds in the background
at 3 milliseconds javascript proceeds to line 7 pushes the lock function onto the stack
third gets logged in the console and the function is popped off the stack
now there is no more code in the global scope to execute so the call stack is
empty two seconds have now passed by
the web api knows the timer is up and it has to send the callback function for
execution now we know that all functions are executed by pushing them onto the calls
tag so the callback function also needs to be pushed onto the calls tag
but here is the crucial bit the web api cannot directly push a function onto the
calls tag and for good reason as well imagine if a function is executing in
the call stack and the web api randomly pushes another function on top of the stack
javascript can do only one thing at a time so it would have to drop whatever it was doing and cater to the new
function on top of the stack as you might have guessed that could lead to total chaos
so what the web api does is it pushes the callback function into the callback
queue the callback function is now waiting to be executed
and the part that decides whether to push the function onto the call stack or not is the event loop
the event loop constantly checks if the call stack is empty and if it is it
pushes the item at the front of the callback queue onto the stack if the call stack is not empty it will
not push the item onto the stack that is its only functionality
check call stack check callback you push if call stack is empty
it is always in this constant loop of following those instructions over and
over again in our example the event loop says that the call stack is md
meaning no code is running in the global scope it is safe to push the callback function
onto the stack and the event loop does just that but there is one key point here even
though a function reference is what the callback queue holds the event loop will push and
automatically execute the callback function within the callback function the log
statement is encountered so the function is pushed to the call stack
second is logged in the console the log function is popped off
there are no more statements to execute in the callback function so that is popped off as well
no more code to run in the file so the global function as we call it is also popped off the stack
the console output is going to read first third and then second as you can
see in the bottom left this is how an async code snippet with
set timeout runs internally now regarding set timeout an important
question during an interview is what happens when the timeout duration is 0 milliseconds
let's prepare for that question as well on the left we have the exact code
snippet as before but this time the duration is 0 milliseconds
we have our runtime as well as the console i want you to pause for a second and try
guess what the output is if you made your guess let's proceed
the execution starts in the global scope which will be pushed on to the call stack
at one millisecond execution is at line one which pushes the function to the call stack logs first to the console and
pops the function from the call stack now at two milliseconds
the execution proceeds to line three where we have the set timeout
the callback function and the duration are handed over to the web api
javascript then simply pops off the set timeout function from the calls tag because its job is done as far as
execution of line 3 is concerned the web api now sees that the duration
is 0 milliseconds that means the callback function has to be pushed into the callback queue
while this is happening in the background at three milliseconds the javascript thread of execution has already reached
line seven the console.log function is pushed to the call stack
let's say at the same time the callback function was pushed to the queue
now event loop is on alert since the callback queue has an item
the event loop checks if the call stack is empty it is not
which means the callback function cannot be pushed to the calls tag
javascript proceeds to log third to the console and then pops the function from
the top of the stack since the event loop constantly checks if an item is in the queue and if the
call stack is empty its condition is satisfied to push the callback function onto the stack
so at 4 milliseconds the callback function is pushed to the top of the stack and executed
the log function is executed and second is logged to the console
then log function the callback function and global are all popped from the top
of the stack as you can see a set timeout of 0 milliseconds doesn't mean the statement
is executed immediately it has to wait for its turn or in other words it has to wait for the
call stack to be empty if there is a while loop that runs one million iterations for five minutes then
set timeout with zero milliseconds duration has to wait and execute after the five minutes
this brings me back to the point i had mentioned in the set timeout lecture the duration parameter to set timeout is
the minimum delay and not the guaranteed delay
right i hope that makes your understanding of set timeout much better
in the next video with a similar model in place let's understand how the execution of a promise is in javascript
in this lecture we are going to visualize how a promise-based code would execute in the javascript runtime
environment on the left-hand side we have the code snippet
on line 1 we log a string first to the console on line 3 we have the fetch api
if you're new to this fetch is a web api that lets you perform network requests like get post put
delete and so on the argument to fetch is the url that we want to make a get request to
for our example i am using a udemy url it's not an actual api endpoint but for
this lecture let's assume it's an endpoint that returns a list of courses for a given instructor
we have passed in vishwas as the instructor so the api would respond with a list of my courses
but what is the key point about the fetch api is that it returns a promise
we store that in a constant called promis then on line 4 we add the success
callback using then method we receive the promise value which we
simply log to the console promise value is followed by the value
line 8 we have another log statement that locks the string second to the console
nothing too complex as you can see let's understand how the execution
proceeds on the right hand side we have the model from the previous lecture
we have the call stack the web browser apis the callback queue also known as the task queue
and finally the event loop to understand the execution of a promise-based code snippet though
we need two more parts to our runtime model first is the memory heap and second is
another cue called the microtask queue let's see how all these parts come
together while executing the code also similar to the previous lecture we
have the console in the bottom left to visualize the log statements
all right let's begin executing the code javascript starts execution in the
global scope so global gets pushed onto the stack execution comes to line one
at one millisecond console.log is pushed onto the stack first is logged in the console
and the function is popped off the stack execution now moves on to line three
at two milliseconds the fetch function gets pushed onto the stack
a minute ago i mentioned that fetch is not a feature present in javascript but
is a browser api so what happens now is that the fetch function call and the url are handed
over to the web api which is a browser feature unlike said timeout though
fetch leaves behind a promise object in javascript memory
and if you remember a promise will have a promise value and we can attach
success and failure callbacks that will be invoked when the promise is fulfilled or rejected
you can see properties corresponding to that in the promise object we will talk more about this in just a
bit but from the fetch api point of view i want you to keep in mind that it has
consequences both in the browser as well as in javascript
the fetch network request is now started in the background but we all know that fetching data is
not instantaneous for our example let's assume the fetch
api will take 2 seconds to return data from the udemy endpoint
while that is happening in the background you can notice that the call stack is empty once again
which means the thread of execution is now at line four
at three milliseconds promise dot then is pushed to the call stack with the callback function as its
argument the callback function here is the arrow function you see in the code snippet
then function has only one purpose to push its argument into the on
fulfillment array in the promise object that completes line 4 and at 4
milliseconds execution now proceeds to line 8 pushes the lock function onto the stack
second gets logged to the console and the function is popped off the stack
now there is no more code to execute in the global scope so the call stack is empty once again
two seconds have now passed by which means the fetch api now has the data
retrieved from the udemy api endpoint once it has the data which is the list
of courses for the instructor the fetch api will set that as the
promise value in javascript now here's the cool thing
when the promise value is updated javascript will automatically execute
all the functions listed in the on fulfillment array in our example we just have the one
callback function which needs to be executed but here's the thing
once again the function needs to be pushed to the call stack to be executed but javascript cannot directly push the
callback function onto the stack as that would lead to chaos instead the callback function is passed
into the microtask queue along with the promise value the event loop comes into picture again
it checks if the call stack is empty and if there is an item in the micro task queue
the condition is satisfied and the callback function is pushed onto the call stack with the promise value as its
argument the thread of execution now goes inside the callback function
the log statement is encountered which is pushed on top of the stack
promise value is courses is locked in the console and the lock function is popped off
the callback function execution is done so that is popped off the stack as well
finally there is no more code to run and the memory is also garbage collected
before i remove the promise object though let me clear one point
in our example we assumed the promise would resolve successfully
and hence the on fulfillment callback was executed but promises can also be rejected
so in the code snippet if promise dot catch was invoked the callback function
to catch would be inserted into the on rejected array in javascript and when the fetch api failed because of
some reason the functions in the on rejected array are executed automatically the event loop will handle
the rest so this is how an async code snippet
with a promise runs under the hood now one question you might have is why
do we have two cues a task queue and microtask queue
well let's understand more about the two cues in the next lecture
in the previous two lectures we learned about the javascript runtime and how a simple async code snippet that
involves set timeout and a simple async code snippet that involves promise
execute in this lecture let's understand how a code snippet that involves both a set
timeout and a promise will execute this is really important so please make
sure you understand well on the left hand side we have the code snippet
let's go through what we have here on line one we have the set timeout function with the duration of zero
milliseconds in the callback function passed to set timeout we simply log the string first
to the console on line 5 we have the fetch api call
which returns a promise we store that in a constant called promise
then on line 6 we add the success callback using then
method within the success callback function we receive the promise value which we
simply log to the console on line 10 we have an interesting bit of code
it's a while loop which iterates 1 billion times the curve within the while loop itself
has no significance what we are trying to achieve is block the javascript execution thread for a
few seconds for this example let's assume that our while loop takes three seconds which
basically means the execution thread is busy and blocked for 3 seconds
this piece of code is really important for this example finally on line 14 we have a console.log
statement that logs the string second to the console
now that we understand the code let's understand how the execution proceeds
on the right hand side we have the runtime model from the previous lecture we have the javascript memory call stack
web browser apis event loop micro task queue and the task queue
we also have the console in the bottom left to visualize the log statements
all right let's begin executing the code javascript starts execution in the
global scope so global gets pushed onto the stack execution comes to line one
at one millisecond the set timeout function gets pushed onto the stack since set timeout is a browser feature
the callback function and the duration are handed over to the web api
set timeout function is also popped off the stack the web api sees that the duration is 0
milliseconds and immediately pushes the callback function into the task queue
the callback function thinks it will soon get to execute on the call stack
but not so fast there are still statements to execute in the global scope
so execution now moves on to line five at two milliseconds the fetch function
gets pushed onto the stack the function call and the url are handed
over to the browser to make the network request fetch also leaves behind a promise
object in javascript memory the fetch network request is started in
the background and for our example let's assume the fetch api will take 2 seconds
to return data from the udemy api endpoint while that is happening in the
background the thread of execution has already moved on to line 6.
so the callback function still has to wait for its turn at three milliseconds
promise dot then is pushed onto the call stack with the callback function as its
argument the callback function here is the arrow function you see in the code snippet
then function has only one purpose to push its argument into the on
fulfillment array in the promise object at four milliseconds
the while loop begins executing there are 1 billion iterations which
will run for 3 seconds during this while loop execution
at 2 seconds the fetch api has the data retrieved from the udemy
api endpoint once it has the data which is the list of courses for the instructor
the fetch api will set that as the promise object's value in javascript
when the promise value is updated javascript will automatically execute the callback function listed in the on
fulfillment array the function needs to be pushed onto the call stack to be executed
but as we already know javascript cannot directly push the callback function onto
the stack as that would lead to a lot of problems instead the callback function is passed
into the micro task queue along with the promise value the task queue and the micro task queue
both have an item to be pushed onto the call stack however the call stack is not empty so
both of them have to wait for their turn the time advances to three seconds and
while loop is still executing at 3.4 seconds that is three seconds
after the while loop started the while loop completes and is popped off the stack
now can the callback functions execute no there is one more line of code to
execute first so at 3.41 seconds execution is at line 14. the log function is pushed onto the stack the string second is logged in the
console and then the function is popped off the stack
now finally we have no more code to run and the call stack is empty
both the queues contain an item and the call stack is also empty which means the event loop can now push
an item from the queue onto the stack but the question is which item to push
well the set timeout callback was the first one to be queued in the task queue and it has been waiting there for three
and a half seconds now so it would be correct to first execute that right
well that is where we are wrong javascript gives a priority to the
microtask queue over the task queue so it is the callback function from the
promise that gets pushed onto the call stack first within the callback function we have the
log function which logs the promise value to the console and then gets popped off
the callback function also gets popped the call stack is empty again and the
microtask queue is also empty which means the callback function in the
task queue is now pushed onto the stack the lock function within the call stack
is then pushed which logs first to the console and then popped off the stack
the callback function is also popped off and there is no more code to execute
this is how a code snippet featuring both set timeout and a promise will run
under the hood when it comes to the event loop it has two main tasks
check the call stack if empty push item in the micro task queue onto the calls tag if the micro task queue is also
empty push item from the task queue onto the calls tag repeat this forever
all right with that i hope you now have a clear understanding of the event loop and how to explain it during an
interview well with that we come to the end of
this crash course on async javascript if you've enjoyed the video please do
leave a like and subscribe to the channel for more content on web development
you
