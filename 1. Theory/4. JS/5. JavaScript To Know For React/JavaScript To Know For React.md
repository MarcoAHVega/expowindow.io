# JavaScript To Know For React

https://youtu.be/m55PTVUrlnA

hey guys how's it going i'm back here
with another video and today i will go
over every single thing you need to know
in javascript for you to be prepared to
start learning react i know for a fact a
lot of people try to search for this
because i remember me myself when i
started learning react searching for the
same thing and never getting a concrete
answer and the reason for this is
because a lot of people who want to
learn react is either people who have
zero to no experience in programming or
programmers who don't have a lot of
experience in web development and they
know that react is a very requested a
very in-demand technology and they want
to get there as fast as possible however
they know that
in most places they recommend you to
learn javascript uh like get as good as
you can with javascript before you start
learning react however it's that's not
exactly true because not everything in
javascript is necessary um for you to
start learning react actually there is a
very specific set of uh skills and and
concepts that you need to learn um in
javascript before you're going to react
so for that reason in this video i will
go over all of them and try to explain
each one of them to the best of my
abilities if you could leave a like
before we get into the video i would
massively appreciate it because it
helped push my videos to more people and
yeah let's get into the video
[Music]
[Applause]
[Music]
[Applause]
so for this video i'm going to skip the
the super basic stuff like defining
variables and
like basic introduction to functions and
whatever because honestly i feel like
that's implied that you need to know the
basics of programming and the basics of
a language syntax um with every react
tutorial out there
they probably won't be teaching you like
what is const what is let that kind of
stuff so what i'm going to be going over
is the more not well known stuff in
javascript or more intermediate
slightly beginner stuff that will be
very useful in react
so the first thing i'm going to talk
about is um just working with functions
in general
well what i mean by that well the first
thing is
when you're working with react you'll
find yourself working a lot with arrow
functions and for those who don't know
arrow functions is just a different way
to define your functions so in normal
javascript you would for example define
a function like this saying
function then the name of the function
let's call this function
do something
and you would define it with a
parenthesis and your curly braces then
you would write all the logic inside of
here for whatever you want to do when
this function is executed now with
introduction of newer versions of
javascript we we've seen the
introduction of a different way to
define this which is by using arrow
functions and this syntax is actually
singing in many different languages
which is
it's why in my opinion i kind of like
this um and to define the function you
can either
use the const the let or the vore
keywords but
i would always recommend using the cons
for this because it's more standard and
what you would do is you would
define say const then the name of the
function like do something
then you would put an equal sign
the parentheses an arrow
and the curly braces now you may think
that this is more um
like you're writing more stuff but in my
opinion it compensates because a
facility it looks it makes it a lot
better when you're working with callback
functions which is something that you
work a lot with in javascript so um i do
recommend using the arrow function and
also when you're using arrow functions
although they do the exact same
you can actually export it a little bit
differently so if you're planning on
exporting this function
to have access to it in another file
there's two different ways of doing this
if you're using this function definition
you have to say export default
like this
and then um you'll be able to export
this function but if you're using this
one you don't say default you say just
export const and i use this kind of
notation a lot more than this kind of
notation now why is this important for
react well because in react you define
components and components or just
functions like this one i'll just say my
component
which takes in props which are arguments
and return html like i can return a div
or something like that now this is react
this is something specific to react
but you can see how learning the
different methodologies of defining
function can be useful for this kind of
situation so this is why it would be
important but another thing that i feel
like for functions would be really
important for you to know is anonymous
functions so for example in react you
might see a button like this i know
right now it's just a button in the
middle of the file it doesn't even make
sense but imagine you have a button like
this which has the property on click
well when you have an on click usually
in normal javascript you pass the name
of a function inside of here right
but in react you can do either that or
you can just define the function inline
with an anonymous function something
similar to this so you could actually
write a function
like this
where it would be executed when you
click on the button and
it would work perfectly and this is
actually recommended in some scenarios
so knowing how to create a function that
doesn't have a name which is what an
anonymous function is is really
important because it allows you to
execute commands without having to
declare a function so keep in mind that
this is very useful and you use it like
a lot in reactive so the next thing i
want to talk about is
working with conditionals using the
ternary operators and this is
specifically very useful in react
because of the nature of react when you
code and react you'll you'll soon
realize that um you're you're trying to
minimize the the amount of lines of code
you're writing especially when you're
writing code directly into the ui
portion of your code so react actually
allows you to kind of write javascript
inside of your html but it's not
actually called html it's a modified
version of html called jsx which allows
you to directly write javascript right
it's one of the best parts of react
because it allows you to write
conditionals and write your logic
and make that represent your ui
so when you're doing something like that
you need to decrease the amount of lines
of code you're writing inside of your ui
so that it doesn't become super messy
so that's where ternary operators come
in because
writing an if statement is pretty big
right to write something like if
true
then do this it takes in already three
lines of code and don't even mention
doing an if else statement which uh
actually put the wrong kind of brackets
but
it takes in one two three four five
lines of code right and if you're
writing code in react you don't really
need this you don't want this so
what i like to do is for example like
this
imagine that um we have a boolean right
let
age equal to 10. let's just say age is equal to 10.
you have a not a boolean a number right
and i have an another uh variable which
is um
like a name of someone let's say name
right and for some reason this person's
name is called pedro right very nice
coincidence well i want to say something
different i want to say that if the age
is is 10
or greater if the age is greater greater
than 10
then this person's name is pedro but if
it's not for some reason this person's
name is jack right but to do something
like that i would have to say if
age is greater than 10
then let's say name is equal to pedro
like this
pedro
and else
we would say name is equal to jack which
is all fine and well but the problem
again as i mentioned is this is taking
way too much space and there's easier
ways of doing this and this is where the
three ternary operators come into place
they're basically shorthand notations
for doing if statements or if else
statements so if i have some if i didn't
even have an if else here if it was just
okay
let the name be equal to pedro if age is
greater than 10
then first of all let me make this
greater than 10 let me make this 16
which is not my age by the way but i if
i want to do something like this i can
just say okay let's name equal to age
and if age is greater than six to m
greater than 10
then
set it equal to pedro i know this looks
weird but all you're saying here is if
this condition is true then do this and
since this is after the equal sign we're
just saying let name be equal to pedro
if
this condition is true
and this will work
now there's the author ternary operator
which is the
this one over here which is the the or
the double or which is kind of the
opposite um it would work the other way
so if it's not equal to 10 it basically
wouldn't do
this because this right now is
satisfying the condition
and finally there's the if else
operator which is basically what we
wanted in the in the beginning so if you
want to set it equal to pedro if age is
greater than 10 then we say if age is
greater than 10
then
let's set name equal to pedro
else
accidentally deleted everything else we
put a colon
let's name this jack so this is the f if
else operators this basically says if
this is true
then
this
else
this
and this will work the same way as that
huge fl statement that i
presented to you guys earlier so why is
this useful where in in react you find
yourself uh creating a
returning html right so if i have a
component like i mentioned um you would
have something like this where it's a
function which returns
some sort of html like a div right
but imagine that you have two divs you
have a div that says pedro so you have
some sort of piece of ui which which
displays the name pedro and some sort of
piece of ui which display jack right and
you want to conditionally render
this two pieces of ui depending on this
variable age well you could just say
return
if age is greater than 10
then return
this
else return this and this would work
perfectly
this is something we're doing a lot in
react we we add these conditions so that
um our ui will change based on the state
of our application
so this is why ternary operators are
extremely important and will be very
useful for your react development
journey
the next thing i want to talk about is i
really want to go over really quickly
all of the important stuff related to
objects because objects are very useful
it's one of the most useful data
structures a language can have
objects by the way are also known as
dictionaries in python or
hash tables hash maps it has different
names but in javascript it's called
objects and i feel like that's the best
name in my opinion um it's the most
the one that makes more sense and
objects are very important in react and
there are specific things that people
don't learn when they're learning
javascript or usually forget which i
want to remind you guys because they
will be used a lot in javascript in
react
and the first thing is being able to
destructure
objects right so imagine we have this
object over here which is
a person right and i'll define the
object really easily by saying it has
three properties one which is name which
is pedro
the other one which is age which is my
actual age which is 20 and the last one
is
let's say is married which is a boolean
which is true or false and in my case
it's false
so okay we have this object called
person which is really nice and imagine
if we went to create variables that
represent specific
values inside of this object
so usually if you want to do something
like that you can say const
name
is equal to person.name
right then we say const age is equal to
person.age
and then we say const is married
is equal to
person dot is married this works fine we
now have three different variables and
it's all fine but again we run into the
problem where this is taking too much
space we can actually do this in a
single line by using the destructuring
property of objects which it works like
this you say const then you open and
close
curly braces so this is equal to the
object name which is person and you can
destruct anything any key value pair
from this object directly over here as a
variable like i can grab the name
the age and that is married directly
from here
and now i have three different variables
which represent their corresponding
properties inside of person
now this is really nice you use this a
lot especially when you're working with
props which i won't go over because this
is not a reactor this is a javascript
tutorial for people who want to learn
react or are learning react but it is
very useful for that and you'll find
yourself using this a lot and another
thing uh that this corresponds to that
is important and
to learn is basically whenever you have
an object like this
where it's called person and you already
have a variable for example
name which is equal to pedro
and you basically want to set this
object
to have the value name equal to this
variable you have over here at the top
right so this is very common i have this
variable called name and i'm creating an
object called person which its name
key has the same value as the name
variable well you could do something
like this and set name equal to name but
there is the shorthand notation which is
really nice and i would definitely
recommend you doing this which is when
the key of
this key value pair has the same name as
the the variable you're setting it equal
to you don't have to repeat the variable
name you can just do this and it would
be exactly the same so if i also had
another variable called age
and i just want to set it equal to to
age over here i don't do this i just do
this and it is exactly the same you can
do both ways but this is recommended by
four now the last thing i want to show
you guys is the fact that if i want to
for example um create a new
variable a new object called person2 for
example
and i want to basically set it equal to
the same thing
imagine person two is exactly the same
person as person one but the name is not
pedro so the name is different right let
me actually delete these variables over
here and let's make them
almost exactly the same i'll just say
pedro
over here
for the person one and the h for the
person one is 20. now person two is
exactly the same but the name is
different the name is jack
well how would i copy this object but
only change one single property of it
well you can do it by doing this thing
you use the spread operator which is
useful not only for objects but for a
lot of stuff in javascript and this
basically says okay
i want to keep
everything inside of the person object
so i'm saying i want to keep everything
from this
inside of this object
but
whatever i put over here which i can say
name and change it equal to something
else like check
and now person two will be an object
that is exactly the same as person one
but this property is different so it
will be just the same thing but the name
is jack this is very useful believe me
this is extremely useful you'll see this
when you're working with erase because
it can it works the same way with arrays
like if i create an array over here
called uh names and i set it equal to
pedro
then to jack
and then to
jessica right
then i want to create an array called
names2
which is exactly the same but i want to
add a new name to it well i can just say
okay two is equal to
names
but
also add the person called
um joel i don't know why i'm thinking of
just people with j but you get what i
mean right this is really important
because this is how you're going to
manipulate and add elements to arrays
that are inside of states so if you
don't know that um make sure you're
you're able to at least comprehend what
we're doing over here this is the same
thing as just saying that
names two is equal to names plus this so
keep that in mind uh because it's really
important the next concept which i
definitely think is extremely important
for you to know is be able to work with
the three fundamental functions of
javascript arrays so they're not
fundamental i don't even know why i
called it that way but it's it's the
three functions that we all know when
we're learning javascript which are
useful for manipulating arrays
in a very easy manner those three
functions are the
dot map function then there's the dot
filter function
and then there's the dot reduce function
now
i'm not going to talk about the dot
reduce because i don't find myself using
this a lot in in react like not even
near the amount that i find myself using
the map in the filter so i don't want to
over complicate this there's thousands
of videos out there of the reduce
function if you want to learn it but
since this is focused just on react i do
feel like this two functions over here
definitely uh outshine the third one
so i'm gonna go over both of them right
now
so what exactly are the map and the
filter function well so imagine you have
this array called names right and i
wanna for some reason console.log
every single name in this array
and i wanna do something different i
want to i want to basically just add a
a number one to the end of each of the
names now ignore the usability of this
example but just imagine i want to alter
each element individually well how would
i do that
i can do that very easily by just doing
a for loop and then manually mutating
each of the elements to have a one at
the end something like this
but that
as always will take a lot of lines of
code right it will take like i would
have to say four let i equal zero then i
could also use a for each loop right
which could be very useful but in this
case i want to do something a little bit
different i'll say names
dot map
and the map function takes in an
argument to it the argument is basically
some sort of variable that you define
that represents each elements in this
array
so we're going to iterate through this
array completely and for each element
that exists in this array we're going to
execute whatever is inside of this
function that we created using the arrow
function
so this is an anonymous function which
we talked in the beginning of the video
and we write code that will be executed
for each of the elements in the array so
what we can do is we can actually access
each element by grabbing them as the
argument of this array so if i say
something like console.log
name
like this
then and i run this
then basically it would just console log
each of the names it would console like
pager one jessica one carol one
i also forgot to remove the one from
each of them because this is what we're
going to be doing with this example but
basically how would i do something like
mutate them directly and add the one to
the end
well
if
you return
something inside of this function then
for each element in this um
names array
it will represent the element will be
will change depending on what you put
over here so if i actually didn't want
to wanted to change every element in
this array to have the name
joe then i could do something like this
and every element in the array would
become joe because we're not actually
we're just saying return joe for each
element but if i want to basically use
the current name in the array together
with this then i can say name plus
one
and it will now every element will
became will become the name or the same
element
plus the one
at the end which is the example we
wanted to to present right and this is
useful because um when you have lists
and react and and you have for example
you want to basically
return
a
h1 tag right a header tag with each of
the names right what you can do is you
can say
names.map
then grab the name
and then
for each element in this
array
you can return an h1 tag
saying
something like a name
like this and what this will do in react
is it will basically generate a header
for each element in the list so this is
how you would
render or display in your website lists
in react now i don't expect you to know
this if because i'm i'm trying to make
this video uh beginner friendly for
people who never learned react but this
is something that is that they kind of
show you guys that it's very similar to
what we've we've been doing so far and
this is very common in react so this is
why learning the map function is very
useful now the filter function is a bit
different imagine that i i want to keep
everyone in this list of names and
imagine this list of names have some
more patros right
it has pedro and it has another pedro
how do i remove every single pager from
this list
well i can do something like this
i can say names dot filter
and this filter function is similar to
the map function in the sense that you
will it will loop through every element
in this array and you can grab each name
by putting the value
to the argument
but
you put over here as a return instead of
whatever you want to replace the element
in the array with which is what the map
function requires you actually put a
condition and if the condition is true
then then what we can do is we can just
put over here that we only want to keep
the people whose name is not equal to
pedro
so this over here would
make names become an array without pedro
this other two pages over here so it
would just keep as an array as jessica
and carol this is again super useful
you'll see yourself doing this a lot um
i i find this very useful whenever
you're doing like searching or filtering
through lists which obviously it's the
main point of this function but again
keep in mind this is just an
introduction so if you want to look
further i do have videos on this where i
explain better
so if you want to check out just going
to my channel and look for the video
so the last concepts that i want to go
over um i won't actually uh
explain it to you guys and the reason
for that is because i've already made
extensive videos on on them which i'm
literally showing you guys right now if
you want to check them out i go over all
of the concepts that i'm listing right
now um and
those concepts are really important
because um they are fundamental for any
kind of web development application it
doesn't have to be just react in general
it works with it is important for every
kind of application and the reason for
that is because it is working with apis
and most websites nowaday
have to um
communicate with an api in some sort of
way so
the concepts that i'm listing over here
are the following first you need to be
able to work with promises and async
await i do have a video on that and i
would i would definitely check it out or
if you want you can check out other
videos as well this topic specifically
will be very useful because you will be
requesting data and you need to be able
to handle the data that you receive in a
way that will work correctly
then you also need to know how to fetch
data and that's where the fetch api
comes in now in react there's multiple
ways of fetching data from an api
you don't need to use the fetch api
however
i would definitely try to learn it first
because even using other libraries like
axios which is a react library to do
this um it kind of it's very similar so
understanding how to work with the fetch
api it's very important so
those are the three less topics that i
wanted you guys to to at least know and
that's basically it for everything that
i feel like you need to know in
javascript before going into react
now
i know that um i assumed that you guys
knew the basic of javascript before this
and the reason for that is because
yes you you're not required to know all
the stuff that i listed in this video
before attempting to learn react
but i do feel like
if you put yourself in the position
where you at least get a basic idea of
what each of the concepts i listed is
then you'll have a much easier time
i'm going to be honest i didn't i didn't
know all of these things that i listed i
actually went into learning reacts
without having any knowledge of
javascript and
it was tough but it was completely
doable i know a lot of you guys like to
to think that
that you're you're not good enough or
that whoever whichever youtuber you're
watching teaching it must be a genius or
whatever it's not true whatsoever
i struggled a lot with react when i
started learning and now i see the
issues and the mistakes that i committed
so i wanted to help you guys out and let
you know that if you follow this kind of
of of strategy if you learn this kind of
stuff then you're going to put yourself
in a position uh where you're going to
be comfortable learning react and you'll
have a much easier time than what i did
when i did
when i started learning so with that in
mind i really hope you guys enjoyed this
video if you enjoyed it please leave a
like down below and comment what you
want us next also give me feedback
i'm trying to make some videos which are
kind of like tutorials but are not just
for react developers some stuff for more
javascript developers as well try to
branch out a little bit while also
maintaining my react content so let me
know what you think if you enjoyed it
support the channel and yeah that's
basically it really hope you guys
enjoyed it and i see you guys next time
