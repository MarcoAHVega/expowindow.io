# JavaScript Crash Course

https://youtu.be/XIOLqoPHCJ4

his video is sponsored by tascade a real-time organization and collaboration
platform make sure to check the description for a discount on your subscription
hey everyone my name is vishwas and welcome to this crash course on javascript for complete beginners
in this crash course we will understand the fundamental concepts in javascript
before we begin let me go over a few points first i would like to mention this
course is for complete beginners i'm going to assume you have no prior
knowledge of javascript and teach the course if you are someone who is already
familiar with javascript fundamentals i would suggest you wait for the advanced
javascript crash course you do however have to be familiar with
html and css i've created crash courses on both the
topics so make sure you watch them before proceeding
second we are going to cover most of the fundamental concepts that you as a beginner should know
it is a crash course and not an exhaustive course on every single
javascript topic having said that this course is probably
all you need as a beginner over the next few days i will be
publishing separate videos on advanced and asynchronous javascript topics
so make sure you stay tuned for that third this video unlike other videos in
my channel is a crash course and is longer in length that doesn't mean you have to sit
through the entire video at once take it easy pause when necessary and
most importantly make sure you code along with me as that is the best way to learn
by the end of this video you will have a solid understanding of the fundamentals of javascript
all right with these points in mind let's get started
first let us understand what is javascript javascript is a high level
often just in time compiled programming language that conforms to the ecmascript
specification now that's a lot to take in so let me
break it down in simple terms high level means it is a more friendlier
language to write code with just in time compiled means the code we
write is compiled during execution rather than before execution ecmascript specification is a
standard that javascript adheres to which ensures the code we write will
work across any browser hopefully you're now clear on what
javascript is now the next obvious question is why
learn javascript the first reason is that javascript alongside html and css is one of the
core technologies of the world wide web pretty much every website you come
across uses javascript to handle interactivity and updates
which is not a problem because web browsers have a dedicated javascript engine to execute the code on the user's
computer the second reason is that you can also use javascript to build server-side
applications in 2009 with the introduction of node.js
which is a javascript runtime environment javascript code can be run outside the
browser this paved way to build servers that can handle network requests interact with
databases compute logic and return the result and a lot more
so you can pretty much build full stack applications with javascript
but it doesn't stop at that javascript is also used in mobile app
development to create cross-platform apps that can run on both ios and
android and it is also used to create desktop applications
it is no wonder that javascript is the most popular programming language
according to the 2021 stack overflow developer survey
now irrespective of whether you'll be using javascript on the front end to build web apps
on the back end to build services on the mobile or desktop to build apps
there are certain features that you must know they are nothing but the language
syntax and concepts in this crash course our focus is going
to be just that however at the end of this course i will
talk about the next steps after you have had a good understanding of the fundamentals
now then for some setup to work with javascript we need three
things a browser node.js and a code editor
ideally you either need a browser or node.js but i will teach you to use them both
for browser i'm going to be using chrome you can choose to use any browser you
already have installed for node.js head over to
nodejs.org you will need to download and install it
click on lts which downloads the installer double click the installer stick to the
defaults and install node.js to write the javascript code
i'm going to be using vs code head to code.visualstudio.com
download and install the same once you have vs code installed
in the side panel open the extensions panel and make sure
to install the prettier extension this will help format your code
finally open the editor inside a folder of your choice i have created a folder
called javascript crash course and opened vs code inside that folder
here i'm going to create a new html file index.html
[Music] type exclamation and tab
to generate a simple html document within the body tag add an each one tag
it says javascript crash course
format the code using alt shift f and this pretty much is all the setup we
have to do if you open this index.html file from
the file explorer you should see the text as expected
now we are ready to start learning javascript
the first thing you need to learn is how to run the javascript code you write
we can categorize this into two either run the code in the browser
or run it in the node.js runtime let's start with the browser
the simplest way to execute javascript is in the browser console
open chrome and right click click on inspect
and this brings up the chrome developer tools navigate to the console panel
here you can type in the javascript code and it gets executed
the first line of javascript you're going to learn is how to make javascript output the text hello world
it is sort of the convention when you're starting with a new programming language
to output hello world we write a javascript statement
console.log parentheses and within parentheses
add quotes and type hello world
this is sort of the printf or c out statement if you're used to c or c plus
when i press enter you can see hello world being displayed
so the first way to run javascript in the browser is to run it directly in the console
however this is only suited for short snippets and not when we have to write
several lines of code which brings us to the second way of running javascript
from within an html file just before the closing body tag
add a pair of script tags
within these tags you can add javascript code and it will run when the html file
is loaded in the browser let's add console.log
quotes hello from script if i now save the file and open it in
the browser which we already have here refresh
in the console we see the text hello from script
unlike html javascript output will always be present in the console
so this is the second way of course it's not always a good idea to
mix html and javascript in the same file so let's take a look at the third way of
running javascript in the browser similar to external css
we can also have external javascript create a new file
called main dot js js stands for javascript
here we can add javascript code let's type console.log
hello from main.js now we need to include this script in
the html file for that we use the script tag again
but we specify the source attribute which will point to the javascript file
so script source is going to be equal to main.js
if we now save the file and refresh the html page in the browser
we see the newly added text hello from what is supposed to be
main.js so an external file
linked to the html file these are the three ways to run
javascript in the browser but like i mentioned we can also run javascript outside the browser using
node let me show you how in vs code click on view
and then terminal this opens an integrated terminal where
we can run some commands first let's check if node.js is
installed run the command node dash dash version
and this should output the current version installed on your system i have 16.13.2
now run the command node followed by the javascript file name
which is main dot js press enter
and you should see the log hello from main.js
this corresponds to our log statement in the file if you wish to you can also omit the dot
js extension it's a node followed by main press enter
and we see the same output so this is the fourth way to run
javascript now here's the thing if you were to be learning javascript
concepts that deal with building web pages with html and css
the option of using an external script tag in the html file is the most suited
way to run javascript however in this crash course we are learning the
programming language aspect of javascript nothing specific to building web pages
for that using node.js is what i prefer we can write the code and run it right
here in the terminal and view the output we can avoid having to visit the browser
console every time to see the result so take a minute add a few more
console.log statements in the file and make yourself familiar with running code
in the terminal using node now another syntax which i would like to
show before we proceed is how to add comments in javascript
if i type to forward slashes that line becomes a comment and is
ignored by javascript it is for the user to get some idea about the code
so at the top i can add two forward slashes
and write log a statement using console.log
if i now save the file and run the code
node main you can see the first line doesn't make it into the output
we only see the log statement printing hello from main.js
all right now that we know how to run the code we write it is time to understand the first concept in
javascript which is variables variables are used to store information
the information can be cost of an item the name of a user or any data that
might be needed in the code in javascript in the year 2022
there are two recommended ways to declare variables using the let and const keywords
let's look at an example we use the let keyword followed by the
name of the variable for example age to this we can assign a value so is
equal to 25. so we have stored a value of 25
in a variable called age we can check this by logging the value
to the console in the next line console.log
and we pass in age make sure there is no quotes around age
save the file run node main and we see 25 in the terminal
similarly we can declare variables using the const keyword
so const salary is equal to 80 000
and in the next line console.log salary
run node main again and we see 80 000 being logged
now you might be wondering what is the difference between let and const declarations
well the difference is that all const declarations must be initialized and
once initialized you cannot reassign a new value so if you were to declare const sum
without any assignment and run the code node main
we see an error missing initializer in const
declaration also if we assign a value of 0 or
initialize with a value of 0 and then in the next line change salary
to 80 000 run the code
we see an error yet again type error assignment to constant
variable however with let save the file
comment out salary run the code
you can see we have no problem initialize sum to 0
and reassign a value of 5 in the next line log the value to the console so
console.log sum save the file run node main
and you can see the value of 5 in the terminal there are no errors
a good rule of thumb is to always use const declarations unless the variable
value is going to change in which case you can make use of let
so to declare variables in javascript we make use of const and let keywords
before we proceed let's comment out the code we have so far so as to not print
previous code in the terminal all right the next topic to learn about
is data types data types basically specify what kind
of data can be stored and manipulated within a program
in javascript data types can be categorized into primitive and non-primitive types
as per the latest specification there are seven primitive types and one
non-primitive type under primitives we have string number
boolean undefined null big end and symbol
under non-primitives we have objects let's look at examples for each of them
starting with strings a string is a sequence of characters
that represent a text value in javascript strings are surrounded by
for example we can declare a variable const name is equal to
within quotes vishwas similarly we can have const language
is equal to double quotes javascript and even
const channel is equal to
code evolution now this character is back tick which is the key below
escape key now if i format the code double quotes are converted into single
quotes because prettier is set up to convert double quotes to single quotes on my machine
however keep in mind strings can have single quotes double quotes or even
backticks next we have the number data type that
represents integer and floating point numbers for example
const total is equal to zero or const pi is equal to 3.14
next we have the boolean data type a boolean type represents logical
entities and can only have one of two values true or false
for example const is primary number
is equal to true or const is new user is equal to false
booleans are often used to run code conditionally based on the value being
true or false so this is about strings numbers and
booleans the next data type is undefined which
represents value that is not assigned if a variable is declared but the value
is not assigned then the value of that variable will be undefined
for example let result if we log the value to the console
and run node main you can see undefined
of course you can also set a value of undefined explicitly so const res
is equal to undefined make sure you don't add quotes
now the fifth data type is null which is a special value that represents empty or
unknown value in javascript for example const data is equal to null
ideally null is used to denote a null value and undefined is used to denote a
value that is not yet defined so it is recommended that if you want to
explicitly assign a value not known do not use undefined but instead use
null so const res should also be equal to null
so that is about undefined and null the next two values
big end and symbol we're not going to see examples of them in this beginner's
crash course bigint is a very recent addition and is
used to denote an integer value larger than what the number data type can hold
symbol is a data type introduced in 2015 and denotes a value that is unique and
unchangeable as a beginner you don't have to worry about these two types
so that is about the seven primitive types in javascript
a primitive value is written as an actual value like the text vishwas the
number zero etc a non-primitive type on the other hand
is a collection of values in javascript an object is a complex
data type an object contains properties defined as key value pairs
the syntax is as follows variable declaration so const
person and this is going to be equal to a pair of curly braces
within the curly braces we specify properties and values
for example first name is the property and the value is bruce a string
last name is the property and the value is wayne which is again a
string we can have another property age
and set this to 30. the property also called as key
can only be strings or of the symbol data type the value on the other hand can be any
data type also if the key is a valid javascript name
for example it does not contain any hyphens you can also oment the
quotes and prettier is configured to do so if i format
you can see we have first name last name and age without the quotes
now to access a property in this object you can use the dot notation
so in the next line console.log to print something to the terminal
and let's access the person's first name it is going to be person
dot notation followed by first name
if we run the code node main you can see bruce in the terminal
now this syntax is known as object literal and is one way to store a
collection of data the other way you should be aware of as
a beginner is the array type arrays are written with square brackets
and the items in an array are separated by commas for example
const odd numbers is going to be equal to square brackets
and we specify a collection of values separated by commas
so 1 comma 3 comma 5 7 and 9.
to access a value in an array we use the position of the item which starts at 0
instead of 1. so console.log
odd numbers and the way we access is with square brackets and we specify the position of
the item now this starts at zero so if we log
on numbers of 0 and run node main we see 1
which is the first element in the array if i change position to 1
run node main we see three change it to two it's fill print five
and so on as you can see multiple values are stored in one
collection variable called odd numbers and can be accessed based on the position
so these are the different data types in javascript
now what you should know is that javascript is a dynamically typed language
which means you don't have to specify the data type of a variable when you declare it
which also means the data types are automatically converted as needed during
execution so you can declare let a is equal to 10
and in the very next line assign a is equal to vishwas
and then a is equal to true so from assigning a number to a string
to a boolean value if we log a to the console
and run node main we see a value of true
and this is the last assigned value because javascript is dynamically typed
this type of an assignment does not cause an error message
all right now that you know the different data types the next topic to learn is operators
in javascript an operator is a special symbol used to perform operations on
values and variables here is a list of operators we will be
learning as a beginner assignment operators arithmetic operators comparison operators logical
operators string operators and a few other operators
let's start with assignment which is an operator we have already seen in this video
i'm going to begin by selecting all the code we have written so far and pressing
ctrl forward slash which will comment out the code
now let's focus on the assignment operator the assignment operator is used to
assign values to variables for example let x
is equal to 10 this is the assignment operator
next we have the arithmetic operators which are used to perform arithmetic calculations
for example if we have two variables x is equal to 10
and let y is equal to 5 we can console.log
x plus y if we run node main
we see the result 15. similarly x minus y
will give us 5 x star y which is x multiplied by y will
give us 50 x divided by y
will give us 2 and x modulus y
which gives you the remainder after dividing 10 by 5.
will log 0 to the terminal now you can also have
plus plus x which increments x by 1 say console.log
plus plus x node main and you can see the value is 11
and similarly minus minus y which decrements y value
by one so node main and you can see the value is 4.
now here x and y are referred to as operands
and the symbol of course is the operator so these are some of the arithmetic
operations you can perform in javascript
next we have the comparison operators comparison operators compare two values
and return a boolean value either true or false
first we have x double equals y which checks if x and y are equal so
node main and we see false we have x not equal to y
and this will return true we also have x triple equals y
which compares not just the value but also the data type and if we run node main you can see it
returns false as well similarly we have x strictly not equal to y which returns
true we will learn about this special equality in javascript in just a bit
we then have x greater than y which is true
x greater than or equal to y which is again true
and similarly y less than x
which is true and y lesser than or equal to x which is again true
comparison operators are primarily used in loops and branching statements which
we will learn about later on in this video next we move on to logical operators in
javascript logical operators perform logical operations
no surprise there and return either true or false they are very helpful when combining
comparison operators results to make a decision for example let's say we need to figure
out if the number 8 lies in the range of x and y
so we can write const is valid number and this is going to be equal
to x greater than 8 ampersand ampersand 8 greater than y
here double ampersand is called logical and operator
it returns true only if both operands evaluate to true if not it returns false
now x is 11 which is greater than 8 and y is 4 which is less than 8.
so if you were to log is valid number to the console
run node main you can see it evaluates to true so it
is a valid number similar to logical and we have logical
or operator denoted by double pipe character
this will return true if either of the operands is true else it will return false
so if i change x greater than 20 which is false
but y is still less than eight run node main
we see each valid number is still true
so if either of the two operands is true the logical or operator returns true
finally we have the logical not operator which negates the value
for example if we have const is valid is equal to true
not of is valid is going to return false so if we run
node main you can see the last value is false change true to false
run node main once more and now it returns true
next let's move on to the string operators in javascript we can use the plus
operator to join two or more strings so if we type console console.log
the string bruce plus the string wayne
with the space at the end of bruce run node main
we see bruce wayne as a single string in the terminal so the plus operator performs addition
when used with numbers and concatenation when used with strings
as beginners it is very important to keep this in mind as we tend to create bugs because of this behavior
and i will elaborate on that in a few minutes now there are a few more operators but i
want to discuss just one more which is the ternary operator
the ternary operator returns a value based on the condition
let me explain with an example let's define const is even
and this is going to be equal to 10 modulus 2
and if this is equal to 0 question mark true colon false
what happens here is that the condition is evaluated first
is the remainder of dividing 10 by 2 equal to 0
if it is assign true to ease even if the condition is not true
assign false to ease even so if i log ease even
run node main you can see the value is true and of course you can assign any value
you want to i can say number is even
else number is odd run node main
and you can see number is even is printed in the terminal so based on the condition assign a value
to the variable the ternary operator is used quite often so make sure you've understood how it
works now that we have a good understanding of
types and operators in javascript the next topic to learn is type conversion
we will learn how to convert one type to another because a lot of the times the code you
write has to do some kind of conversion in javascript there are two kinds of
type conversions implicit conversion also known as type
coercion where javascript itself will automatically convert the type to be
able to run the code you've written and we also have explicit conversion where you manually
convert the type let's look at examples of both these conversions
let's start with implicit conversion now the first conversion is
if you try to add with a numeric string type javascript converts the operand to
a string before concatenation so if we type console.log
number 2 plus a numeric string 3
run node main you can see the result is 23
so if you try to add with a numeric string type the result is a string after
concatenation similarly if we add true plus numeric string three
we get the result true three which is a concatenation of the two operands
on the other hand if you use a numeric string with subtraction multiplication
or division the numeric string is automatically converted into a number
so if we console log numeric string 4 minus numeric string 2
run node main you can see the result is the number 2.
javascript converts both 4 and 2 to numbers and then performs subtraction
now i would like you to pause the video and try the same with multiplication and division
now what is worth noting though is if you try to use non-numeric strings the
result is a special value called not a number so if we console log
bruce minus wayne run node main
it will result in nan which is not a number
now if you were to use boolean values with numeric strings false is treated as 0 and true as 1.
so console log numeric string 5
minus true will result in 4
and numeric string 5 minus false
will result in five also if you use null with subtraction
null is treated as zero so console.log numeric string 5 minus null
will give back 5. the final example under implicit conversion is that of undefined
if you use undefined with number boolean or null the result is not a number
for example console log the number 5 plus
undefined run node main you can see the result is not a number
as you can see javascript automatically converts types in performing operations
and it is crucial you understand this coercion to avoid any confusion in your
code it might take some time but at least you are aware of the concept to come back
and refer to next let's move on to examples on
explicit type conversion for manual conversion we're going to
rely on some of the built-in methods available in javascript
first to convert a string or boolean to numeric types you can use the number
global method so console.log number with an upper case
parenthesis we pass in a numeric string 5.
if you run node main you can see it returns the number five
if you pass a boolean value let's say false it will return zero
an empty string will also return zero
apart from number you can also use parseint method
so parse int numeric string five
node main and this will return five if you want a floating point number
you can make use of parse float so parse float within quotes 3.14
run node main and we get back a floating point number 3.14
next we have the string global method to convert other data types to string
for example console.log string parentheses and we pass in a number 500
node main and this will print 500 as a string
similarly true will return the string true
null will return the string null and undefined
will return the string undefined as an alternative to the string global
method you can also use the tostring method for example console log the number 500
dot to string this has to be in parentheses
run node main and it locks the string 500 in the terminal
a t string however will not work on null and undefined
finally to convert other data types to boolean you can use the global boolean
method for example console.log boolean
of the number 10 will return true let me spell this right
node main and you can see the value is true and it is worth noting that null
undefined numeric zero empty string and not a number
all return false when converted to boolean everything else will return true
as a quick assignment i want you to run boolean method on these values and find
out the return value including a string that has only spaces
as its value all right i hope you now have an idea of
how to convert between types in javascript with an understanding of how to convert
between the different data types the next topic to learn about is equality
and this is a slightly confusing topic to wrap your head around as a beginner
javascript is let's say a bit weird when it comes to equality we have two types
double equals which loves coercion when the types are different and triple equals which does not allow
coercion let's understand both with a few examples
back in vs code let's declare a few constants const variable 1
is equal to the string test and const variable 2 is equal to again
the string test let's now log both equalities
so console log variable one double equals variable two
make a copy of it and this time variable one triple equals
variable two if we run the code node main
both return true when the types are the same there is no
confusion however if i now change variable 1 to a number
10 and variable 2 to the numeric string 10
run node main you can see double equals is true
whereas triple equals is false in case of double equals javascript
coerces the values to the same type so string 10 is converted into numeric 10
automatically and then compared both constants would be of the same
value and hence the result is true however triple equals is more strict and
ensures both constants must be of the same type and will not convert
implicitly since a number is different from a string type
false is returned now it's not wrong to use double equals
but as a beginner it is probably safe to use triple equals to check equality
and this is simply because there is quite a bit of strange coercion that javascript does
for example if variable 1 is equal to 0 and variable 2 is equal to an empty
string run node main you can see that double equals still
returns true similarly false and empty string
double equals is once again true null and undefined
well it is true again all the values we have just seen are
treated as faulty values in javascript and double equals we'll treat them as
equals which as you can see may be confusing and lead to incorrect results
so although it isn't wrong to use double equals my advice would be to use triple
equals when writing code as a beginner this concept of equality is very
important which leads us to the next topic in this video and that is about conditional statements
conditional statements are used to perform different actions based on different conditions
for example you may want to execute different blocks of code based on whether a number is positive negative or
zero in javascript we have the following conditional statements
if else else if and switch
let's first look at if else and else if statements and then look at switch which
is an alternative back in vs code
let's declare a constant const num is equal to five
now what we want to do is log a statement to the terminal if the number is a positive number
for such a scenario we can use the if statement the syntax is as follows
if followed by parentheses within parentheses we specify a
condition our condition is that num should be greater than zero
then we specify a pair of curly braces within the curly braces we write the
code that will be executed only if this condition evaluates to true
let's add console.log number is positive
if we now run the code node main in the terminal
we see number is positive if we change num to -5
rerun we see that the statement is not logged in the terminal
so the if statement evaluates the condition inside the parentheses and if the condition evaluates to true
it runs the code within the curly braces
sometimes you may want to run a different block of code if the condition evaluates to false
in such a case you can make use of the else statement now the else statement must follow an if
statement so we can add else and then curly braces once again within curly braces we can
type console.log number is not positive
if we now rerun the code we see the log statement as expected
number is not positive as it is minus 5. so if the condition evaluates to true
if block is executed and if the condition is false the else block is
executed now if you have just two alternate
blocks of code to run the if else statements are sufficient
however if you need to decide amongst more than two alternatives you need the
if else f and else statements for example
instead of just logging whether the number is positive or not let's try to
log if the number is positive negative or zero
let me explain the syntax the if block remains the same so let's leave it as it is and remove the else
block if num is greater than 0 we log number
is positive but after the if block we now use the
else if block so else if and this again follows an if block
this statement allows us to specify a new condition so parentheses and we're
going to specify if num is less than 0
and we add another code block which will be executed if that condition is true
so the first condition might be false but the second condition might be true
in this case let's log to the console number is negative
finally if both these conditions are false we want to log that the number is
zero for that we make use of the else statement as there is no other condition
to evaluate so else console.log
number is zero if we now rerun the code
we see the statement number is negative change num to zero
node main we can see number is zero our code works as expected
what you should know is that you're allowed to specify as many number of
else if statements as you wish to it is not restricted to just one
additional condition now if else statements do a good job of
enabling conditional code they're good when you have a few alternatives and each have a good chunk
of code to be executed however if you have a large number of choices
with little code to execute in each choice a switch statement is better
suited for our example let's check a color and log that color
value to the console i'm going to declare a new variable or
constant called color and let's set this to red
now for our switch statement the syntax is the keyword switch followed by
parentheses within parentheses we specify a value or
an expression in our case it is going to be the constant color
now this is followed by curly braces within curly braces we can specify one
or more cases that we specify using the case keyword
to check if color can be read we specify case followed by the string
red and if this is true we log color is red
after the log statement though we need to specify the break keyword
and this will prevent the next case from being executed
now let's compare with two more colors so red
case blue in which case color is blue is logged to the console
and finally green in which case color is green is logged to the console
if we run node main you can see color is red
change this to blue you can see color is blue
now it's also possible that the user might specify a completely different value for example color is 10
in this case none of the case statements are executed and there's no text locked
in the terminal to handle this you can add the default switch statement so default case
where we are going to log not a valid color to the console
node main and you can see we have the text not a valid color
so the switch statements evaluates the expression within parentheses and
executes the code corresponding to the matching case if there is no matching case the default
case is executed so switch statements and if else
statements these are some of the ways you can conditionally run code in javascript
let's now move on to the next topic which is looping code in javascript in programming loops are used
to repeat a block of code for example if you want to print numbers
from 1 to 50 you can make use of a loop of course that's a very simple example
but you can achieve a lot with lubes they're used in almost every app that
you develop and are really important from a beginner's point of view
in this crash course we're going to take a look at four looping constructs
for loop while loop do while loop and for off loop
let's understand the syntax and usage with an example first up for loop
the syntax is as follows we have the keyword for followed by
parentheses inside the parentheses we have three items separated by
semicolons first is the initializer which is run before starting the loop
second is the condition which is checked to see if the loop should stop
third the final expression which is run each time the loop has gone through an
iteration we then have a pair of curly braces that contains a block of code
which will run each time the loop iterates let's understand this better by writing
some code for our example let's log a message to the terminal five times
back in vs code start with the for keyword followed by parentheses
for the initializer we're going to initialize a variable called i and set it to 1. so let i is equal to 1.
for the condition since we are logging a message five times we specify i less than or equal to five
for the final expression we increment the value of i by one so i plus plus
you might remember this from the operators section now for the block of code we're going to
run console.log iteration number
we concatenate it with the value of variable i
if we save the file and run the code
we see the message logged five times the value of i increments from 1 to 5.
let me slowly walk you through the execution of this for loop
first i is set to a value of 1. next the loop checks if i is less than
or equal to five it is the code inside the curly braces is
executed after that i is incremented by one
now the condition is checked again this time i is equal to 2
condition is still valid since 2 is less than 5. the message is logged and i is
incremented once again this happens for i is equal to three
four and five but after logging the fifth message
i is incremented to six now the condition evaluates to false
since 6 is not less than or equal to 5. when the condition becomes false this
loop is terminated this is how the for loop works we are able to repeat execution of
code in our case the log statement five times without having to type it out
five times let's now proceed with the second looping construct which is the while
loop here is the syntax the parts of a while loop are similar to
that of a for loop as you can see however there is a bit of rearrangement
the initializer variable is set before the loop and the final expression is
included inside the loop after the code to run let's head back to vs code and rewrite
the for loop logic with while loop let's first comment out the for loop
now the first part is the initializer so let i is equal to 1. then the while loop
the keyword y followed by parentheses and then curly braces
within parentheses we specify the condition the condition is i should be less than
or equal to five in the code block we specify the log
message so console.log iteration number concatenated with the value of i
but now right before the closing brace we specify the final expression which is
incrementing the value of i by one so i plus plus
run the code node main and we see the same output
the execution is also similar to the for loop first i is set to 1.
the condition is then evaluated which is true the code is executed and i is
incremented this continues till the value of i is 6
in which case the condition evaluates to false and the loop is terminated pretty straightforward if you
have understood the for loop now a variation of the while loop is the
do while loop the syntax is as follows the main difference is that the do while
loop is always executed at least once that is because the condition comes
after the code inside the loop let's head back to vs code and rewrite
the logic with do while comment out the while loop
now we start with the initializer which remains the same that i is equal to 1.
next we add the do keyword followed by the code block
copy paste from the while loop console log
and increment the value of i after the closing curly brace specify
the condition so while i is less than or equal to phi
if we now run the code node main we see the same output
iteration number one through five however if we initialize i is equal to
six and run the code we still see the log statement once
iteration number six this was not the case with just the while loop
so do while executes the code block once and then evaluates the condition
since six is greater than five the loop is terminated after logging the message
once let's now move on to the fourth looping construct which is the for off loop
this was introduced recently and is mainly used to loop over a collection of
data like an array for example here is the syntax
the for keyword followed by parentheses within parentheses we get hold of each
item in the collection in each iteration and then we have the code block within
curly braces let's look at an example back in vs code
i'm going to comment out the do while loop and create an array of five numbers so
const num array is going to be one comma two three
four and five now for the for off loop we can write
for const num of num array
curly braces console log iteration number plus
num if we run the code now it would mean we have the same output as before
what happens here is that the for off loop automatically iterates over the
array and in each iteration assigns the value of the adder element to num
we can then execute the necessary code using that element
so in iteration one num is equal to one in iteration two num is equal to two
and so on till the fifth iteration the for of loop is best suited for a
collection of data as it abstracts away two things
first you don't have to keep track of a variable to increment the iteration count
so there is no need to track a variable like i which we have done previously
second you don't have to figure out how to access the item in the collection
for example array of 0 array of 1 array of 2 etc
the far off loop does it all and you just have to worry about the code that needs to be run
so these are the four looping constructs that you as a beginner should be aware
of again you don't have to memorize these things you just have to know they exist and
where to come back to when you do come across the need to use them in your code
all right for the pen ultimate topic in this crash course let's learn about functions
functions are one of the fundamental building blocks in javascript
a javascript function is a block of code designed to perform a particular task
for example add two numbers multiply two numbers etc
functions are reusable as they can be defined once and can be called with different values resulting in different
results functions also help divide a complex problem into smaller chunks and make
your program easy to understand and maintain let's take a look at the syntax of a
function as you can see a function is defined with the function keyword followed by
the name of the function that is followed by parentheses
the parentheses may include parameter names separated by commas
it is completely optional we then have a pair of curly braces and
within the curly braces the code to be executed let's head back to vs code and
understand with a few examples for our first example let's define a
function which logs a greeting message to the console so first the function keyword followed
by the function name let's call it greed this is followed by parentheses and then
curly braces within curly braces the code to execute we're going to add a simple log
statement good morning vishwas
so we have defined our function but a function doesn't run by itself
we have to call or invoke that function we do that by specifying the function
name followed by parentheses if we now run the code
node main we see the greeting message in the
terminal our first function is working as expected
and we can call the function any number of times and we will see the same message
so if i invoke the function two more times run the code
we see the message three times in the terminal now this is fine but what would be
better is if the person's name is dynamic
that way we can use the same good morning message but with different names and greet multiple people this is where
parameters come into play a parameter is like an input to the function
let's call it username now in the log statement we can use
concatenation so good morning string plus
username now when we invoke the function we need to pass in the username
let's pass the string bruce clark
and diana if you run the code we can see that we can greet three
different people using the same function now in the function definition
this input username is called a parameter when invoking the function
bruce clark and diana are called function arguments
function parameter function argument good to have the terminology in mind
now a function can also return a value which we can use later in our code
let me show you an example let's define a function that adds two
numbers and returns their sum so function
followed by function name which will be add we then have parentheses and this will
have two parameters a comma b
within the function body return a plus b
now here a and b are two input parameters within function body we add the two
parameters so a plus b and return the sum from this function
return is a javascript keyword which will return the value from the add function when we
invoke it so what this allows us to do is assign the result to a constant
const sum is equal to add 5 comma 10.
we don't have any complex logic so let's simply log the sum to the console in the next line console.log
sum if we run the code we see 15 in the terminal
change to 25 and 25 run the code and we see 50.
so the two numbers are added together and returned as you can see functions are very useful
define the code once and use it as many times as you want to passing different arguments to produce
different results it also helps organize code into smaller
maintainable code blocks now in 2015 an alternate syntax was
introduced to define functions they're called arrow functions and offer
a more concise way of writing functions let's rewrite the add function using
arrow functions const arrow sum
is going to be the function name and this is going to be equal to an arrow function
the syntax is parentheses followed by equal to and greater than sign which is
called a fat arrow and then the function body
this function is going to have two input parameters and return their summation
return a plus b we can now replace add with arrow sum
run node main and we see the same output but with arrow functions we do have a
more concise syntax as i mentioned now if you just have one statement that
is returned which is the case with our arrow sum function you can omit the curly braces and the
return keyword so remove the curly braces
and the return keyword you can inline a plus b on the same
function line run the code again and we still see 50.
another point worth noting is that if you just have one argument you can if
you want to omit the parentheses around the argument for example
const add5 will accept one parameter which is
called num and will return num plus five
now when i format the code it automatically adds the parentheses but this is still valid
arrow functions are used in a lot of code bases and i wanted to ensure you know the syntax
now i cannot stress enough how important functions are in any programming language
so make sure you learn them well all right for the final topic in this
crash course we're going to learn about scope in javascript
scope basically determines the accessibility or visibility of
variables javascript has three types of scope block scope function scope and global
scope let's understand each of them with an example starting with block
scope block scope was introduced in 2015 with the introduction of let and const
keywords basically block scope dictates that variables declared inside a pair of
curly braces cannot be accessed from outside the block so if you were to have
if block so if true const my name is equal to vishwas
and try to access the name outside the block so console.log
my name run the code you can see javascript throws an error
reference error my name is not defined if you move the log statement inside the
if block though on the code again we see vishwas logged in the terminal
so led and const declared variables can only be accessed inside the block they
are declared in next we have function scope which
dictates that variables declared inside a function are not accessible from outside the function
so if we define a function function test function
and type const my name is equal to batman and log the value outside the function
javascript throws an error again reference error my name is not
defined if you move the log statement within the function
run the code call test function
and run the code you can see batman logged in the terminal
what is also worth noting here is that both my name variables have different
scope my name within the if block is vishwas whereas within test function is batman
even though they have the same variable name very important to keep that in mind
the final scope is global scope which is the scope outside any block or a
function a global scoped variable is accessible both inside a block as well as a
function let me show you an example above the if block and the function i'm
going to define a constant called mynum and set it to 100.
let's lock the value in the if block as well as the function
so console.log mynum and the same
within the function if we run the code
you can see 100 twice so we are able to access a globally
scoped variable inside a block as well as a function
also if we declare a constant called myname again and set it to superman
run the code we still see vishwas and batman but not
superman so a globally declared variable will not overwrite block or function scoped
variables as you can see scope is a really important concept to be aware of as you
need to understand how variable values are resolved by javascript
well with that we come to the end of this crash course on the fundamentals of javascript
if you have enjoyed the video please do leave a like and subscribe to the channel for more content on web
development i'll see you in the next video which is a crash course on the advanced topics in
javascript
