# React Redux Crash Course

https://youtu.be/k68j9xlbHHk

hey guys how's it going i'm back here with another video and today i decided to finally bring a tutorial which a lot of you guys have
been requested since i started the channel which is a tutorial on redux so redux is
a very very well known library that allows you to conduct some state management in your
react application it is probably the most famous state management library out there and
there are many reasons why you would want to learn it i've been critical of redicks in the past but i don't want to pass the bad
impression that i don't think it is a good library i just think that it is really hard for beginners to understand
because of the amount of boilerplate code that you need to use in order to actually get your redux
application to be working even for something as simple as a counter app you would need a lot of
boilerplate code that you wouldn't need if you were using other tools such as for example the the context api
that is already built into react but that's not to say that redux is very useful in many different situations
and i feel like nowadays one of the main reasons why you would want to learn redux is because
a job posting requires it and that's okay that's totally okay many many companies started using redux
because it was the one of the only really like one of the only options out there in the beginning
and it is really hard to migrate your code from using redux to using something else
so many companies are stuck with using redux and they probably enjoy it it's not it's
not that bad so this video would be mainly for people who either want to learn redux because
they want to use redux in their applications or for those people who want to learn redux because
they need to use redux in their applications so i'll try to make it as simple as possible and this is one of the reasons
why i didn't want to make a redux video in the beginning because i was trying to find a way to explain it in a way that it is as
beginner friendly as possible and i think i came up with a good explanation which in my
my mind i feel like if i were a beginner i would probably at least get a sense of what redux is so
before we get into the video if you guys could leave a like and subscribe i would massively appreciate it it would help push my videos for more
people and as a consequence i would be able to provide more videos for you guys so i would massively
appreciate if you guys could support the channel and yeah let's get into the tutorial
[Music] [Applause] [Music]
so as you can see over here we have this this little diagram that i made over
here which is very simple but i think it will exemplify to you guys at least the basics of what redix
is or what state management is in react so if you're a beginner in react i would say
that one of the first things that you learn is what is the state of a react application or
what is the use state hook and that's really important because you will be using it to make it so that your
application your web page is dynamic if you want to change something in the page just create a state and then change
its value that's something that you learned since the beginning however if you have a simple application like this one over
here where you start with the app component at the top and you have several components that you
call inside of this app component um to make it as simple as possible let's try to just have two components
a component which is called login and a component which is called profile now imagine that um they handle
different things right the login component is where you write the code for logging into a profile
right you log in as a user you may be be able to um add a username
uh your name your email your age whatever you put informations about the user and then the whole point of the profile
as in every single profile page out there it's just to display your information
and maybe if you really want to you can also edit the information that the user created and change it and
then also display it in this component so the main point of this is that this component should be used
mostly for like logging in and creating the user and this component should be mainly used
for displaying information and maybe updating and changing the values that were created on this
component now this over here is kind of tricky because if you're a beginner
you would probably think about creating a state called user inside of the login but then it becomes kind of weird
because how can you access that information that state and the profile component right because
in react you can't pass states to symbolic components think of it as a
tree um we start at the top and then we have branches right um you can't pass states to two branches that are
currently childs of our parent over here and that's kind of weird but one of the solutions to that is maybe
you create the user state on the app component right because then you can do it in many ways
you can pass it as props so you pass the state and the function that changes
that state value as props to the login and you also pass it as props to the profile
now we have it in our app and we can access in everything that is below it which in in in sense makes like it works
you can definitely make this work this way however if you have an application with
a thousand states not not a thousand but a lot of states and you really really want to be able to
access the user information in a state in a component that is like way way way way down there in the tree
you really don't want to keep passing your states through props because that will become extremely messy
and unorganized so for that reason you really want to focus on state management
for different states that you want to have access throughout your component tree and redux allows you
to do that because you can create something called a store which holds on to information about
different states that you might want to access throughout your application and that store will exist
on the highest level you know usually it's not even created on the app component it's created on the index file which um
calls the app component but that's later on i'll get into this but basically you create something
called the store which will hold all of those states and which also allows you to modify those
states and then instead of passing through your your props you can just call that store and access
that store throughout every component that is below and that is good because now you can have a whole application
where you have states that are global states and you can access throughout any component um without actually
passing them through props by just using simple tools that are already created throughout your specific um state
management library i know it might seem a bit confusing bef while we're just looking at this design but um i want to get started with the
code so you guys can get a better sense of it and believe me it's not that complicated it's just that um it has a bunch of
steps that you need to take and i will be going over every single step so that you guys can at least
understand why they're used and why they are necessary and then you can implement this on your own application so let's get
started with the code okay everyone so as you can see i want to start from scratch so i have an empty project inside of my
computer that i opened on vs code and the first thing we want to do is as
always we want to install react and create a react project so what i'm going to do is i'm just
going to zoom in a little bit so you guys can see it better and i want to run npx create react
app like this and i want to create it inside of this project and run the command so this should start
creating your react application and i'll be back in a second when the application is finished
creating so now as you can see over here we have installed our react application and i wanna
actually start now by installing all the different dependencies and packages that we're gonna be using
and as you might imagine they're all related to redux so the packages we're going to be using
is first of all we're going to install redux in itself which by the way
if you don't know redux is not only for react it is actually a javascript state management library
so you can use redux in other javascript libraries such as angular for example but this
tutorial is specifically for react so in order to connect redux to react we have to install another package called react redux
like this and also um i want to point out that this tutorial will be using
something called redux toolkit which is a very very famous package which is now making redux
be a lot easier than what it used to be and i want to point out that a toolkit is probably not used as much
on the tutorials that you see on youtube but it is being used a lot in real life you'll find that there aren't a lot of
tutorials using toolkit because um it's relatively new compared to just using react redux and redux on itself
however since i want to make this as beginner friendly as possible i will be using redux toolkit
and also even if this wasn't for a beginner i would also use redux toolkit just because there's no reason for not
using it when it simplifies the way you use redux in an application by a lot so in order to get this to be
working in your app i would come over here and add the package which would be at redux gs
like this and then we put a slash toolkit like this and when we press enter this
should start installing the three libraries that we will be using in our application and when it's done installing i'll be
back in a second okay so as you can see we just finished installing everything and i'm going to clear out my terminal
and let's take a look at our application so over here we have our application as you can see and it's
looking good um we have our like files that already come with the create react tab command
and i'm going to start out by deleting some of these files just because i always do this whenever i create a new application we're going to
delete the test files the logo and the index.css
and let's throw them to the trash and in the index.js let's delete delete the import statement
for the index.css and it should all be fine let's also delete everything that already comes with the app.js
and let me delete the logo and i'll save it so we have our simple app over here let
me just write hello world just to check to see if everything is is working and let's run our app by running npm start
like this you should see that it will start running everything and i already have our local host open
here and it should start um opening it up and you can see hello world appears in our screen
if you see that mine appears a lot bigger is because i'm zooming into my browser just so i can show you guys
what's happening in a clear review so we have our app over here and i want to follow what i showed you guys in the
beginning where i want to basically just create an app with two components called a login
component and um a profile component and those components
should have the purposes that i mentioned in the beginning the login should allow you the user to create an
account or like log in as an account and register that information to
a user object and the profile page or the profile component should just
just display the information that what that was created through the login component so to do that
let's come over here and i'm going to create a folder called components like this and inside of here i want to
create two components the profile component and the
login component like this and i'm using a snippet in my application and if you don't know what it what a
snippet is is this over here um let me see it's es6 i believe
es6 7 um i forgot i think it's this one uh yeah you can download one of the it's not this one but you can download one of
the snippets and it allows you to create your components immediately by running a command like this so if i put rfce it will
generate my component automatically with the name of the function which is the same as the name of the file
so when i save this and i come over here and i do the same thing now we have our two components created
in our application and the first thing i want to do is in our login component i want to be able to have a button right
i want to make this as simple as possible so i want to create a button which allows you to log in
and in our profile we'll just have a text over here which will say something like this it
will say profile page and
we'll have over here some information will have a a p which is a paragraph and it will
just include stuff like um the the user's name which right now we don't have that
information but we'll also include the user's age and probably the user's email something
like this these are the information that we really want to keep track of and as you can see if i refresh my page
nothing will have happened because if you didn't realize we didn't actually do anything with these components
we created them but they are not being currently rendered so to actually make them be rendered we need to come to our app.js and import
this components on our top by saying import profile from dot slash components
slash profile so we're importing our components and i'll do the same for our login component
so dot slash components slash login and now what i was talking about in the
beginning is think of it as a component tree this over here is the app component and we said
that the profile and the login components are siblings of each other and our branches from the app components
so the app is the parent and instead of the app we call its branches or its childs like the
profile one and the um login one and
here it becomes a lot clearer the the meaning of being siblings of each other so the login and
the profile components are siblings because they exist inside next to each other
inside of their parent which is the app component and this is what i was pointing out because if i create a state inside of
the login there's no way i can access it in our profile because the profile is next to our login and not below
our login which which kind of makes sense um if you're familiar with props and how states work
and react so now that we've created both of this you'll see that it appears in our in our screen now you
see that actually um we have this information this is the profile it appears on top of the login
and right now nothing is happening if i click on the login this doesn't change to show the new values
and this isn't working yet right so let's start implementing redux into our
app so in order to start using redux in our application i want to bring back that idea that i
mentioned in the beginning i'm going to close both of this over here and just open our index.js which is actually the highest
level of our application because here is where we actually um render our app and call the app
component as you can see so i want to bring back that idea that i mentioned which is of thinking about um a store
right so a store is almost like thinking of a of a container something that holds
information something that holds something and when you create a store in redux it is just a place where you're going to
hold all the states that you want to make global so all the states that you want to be able to access throughout your whole
application and also be able to change them so this is what a store is and in redux um we're going to create
a single store that will contain all of the different states that we might want to change
and it is a little bit more complicated than just holding different states we actually have to learn some of the
notation that are used that is used in redux so to start off with this i want to actually
start by creating our store and if you you if you're using um redux um toolkit you can
very easily do this by coming here to the top and importing um something from uh redux toolkit
so i'll just say add redux toolkit over here i'm gonna import something called a
configure store function as you can see and this allows you to create your store very easily
by just coming over here and just saying const store so we're creating a variable called store and setting it equal to
the configure store function and inside of this function parameters we're going to pass some information um
the main thing we're going to pass is a collection of reducers and reducers is something
that you it is built into redux and it actually became so common that it was actually
presented as well in a hook created by react so one of the the core hooks of react called the use
reducer uses the k the same kind of notation and your store in redux
should contain all the reducers that might be used in your application and i'll also get more specific about
what reducers are but for now let's just set a reducer equal to an empty object because we
haven't created any reducers yet but this is the basic idea of our store um it's just a variable and we say
configure store and we pass a property inside of an object inside of here called redu register and over here we're
going to later on add all of our reducers now how do we say that this door should exist inside of our
application well we just come over here and import something known as a provider
from the react redux um library so this is what we're going
to be using to basically uh determine which
components should have access to this store which in theory should be all of them because this is the whole point of a
global state you can access this information everywhere so we imported this provider which is
just a component that you wrap around your um around your your app component like this
and now everything inside of this provider which in our in this in this case is everything in our app um
should have access to the store and the values that you pass to this provider but how do we how do we tell our provider that this
store over here is the store that should contain all of the global states well
you just come over here and pass a property called store and say say that this store is the one that we
want to be using so this is the basic right we created our store and we created a provider and we
just access assessed both of them and determined that this is the store that we want to be using in our application so now let's get
started with some more specific stuff related to redux you see this reducer over here it's
empty right so what exactly is a reducer well a reducer is just a function that
takes in um some information about the current states so like it takes in the previous value
of of the state and it also takes some sort of action that you want to perform on that state
and it returns back the new value of that state so it seems kind of weird in the
beginning but that's how that's the basic idea of how you're going to be managing your states inside of a redux application we're
going to have reducers for all the different states that we want to have in our application and that's how we're going to be able to
also manage them and change them throughout our application so in our case over here we have our login
and our profile page so let's think about what reducer or what states do we want to have right um i think that the one that we
want to have for sure is a state called user which contains the information about the user
and when we log in we put that information into the user state and that should automatically display
the information over here because instead of our profile component we should be accessing that state
and when the values changes we should see the new values appearing automatically which is the whole point
of having a state right so we just thought about it we want to have a user state
so if we want to have a user state we need to have a user reducer so what i want to do over here
is i want to create a folder i'm actually going to call this um features
which is how toolkit recommend us to call it and inside of here i will create for now just the a file
called user.js which is going to represent our user um reducers our user slice
which is something that i'm going to go more in depth as we go on through the tutorial over here since we're using toolkit we
actually it actually becomes a lot easier to understand how a reducer actually works
so we're going to actually um import something from the toolkit library which is i'm going
to say import from the at redux.js toolkit
and we're going to import something called createslice so this createslice functions allows you to
um create your reducer in a very easy way where it becomes very intuitive for you to split your your logic and
be able to access it throughout your application so that it becomes a lot easier for you to actually
change stuff and access those values and different components that you want to have and the whole point of this is that it
becomes organized in a way that becomes easier to understand so over here
what i want to do is i want to create something called a user slice like this and i want to set
it equal to create slice and here's where we're going to con where it's going to contain
the all the information about the the the reducer the actions we want to take on the state
and the actual name of the state so for a slice you need to pass some information you need to pass the name of
the slice which is the same thing as the name of the state for example so let's call it user
and we need to pass an initial state which is as the name indicates the initial value
that should exist and i would i would say that um the initial state for the user should be just an empty user
so for our initial state we actually need to pass a value um over here which is just um
like we're accessing our value inside of our init or inside of our state so we need to have a property called
value and inside of here we pass the actual value of our state so since we said it would be an user we
can come over here and pass that the user would have a name and as per an initial value the initial
value of our name would be just an empty string then an age which is a number so it would usually be
zero and an email which would be also an empty string because that would be the
kind of the idea of an empty value right so we have an initial state and the structure of our states will be like
this it will always have a value property and this value would contain the actual value of the state
which in our case is an object containing name age and email so then over here we can start to pass
our actual reducers functions and over here we can pass down the actual function
that we the different functions that we might want to use to alter the values of our application so the
reason why redux toolkit becomes a lot easier is because you can do all of the the logic behind
redux including creating a reducer uh having your different action functions um accessing your state everything
inside of this slice function inside of the slice object over here and export it all into your store
instead of the same file it just becomes a lot less boilerplate code which makes it a lot easier so to create
our reducer over here let's start by creating the first function that we might want to have and in our case would be um a login
function right just a function that i would actually create uh the user and what i mean by create is
it would just change the values of of our state to be equal to some sort of user that we want to add so we change
the name to something that you want to that the name of the user you want to create um you would change the age and it would
change the email so each like every reducer function or every uh reducer like action that you
want to take um in redux it takes in a function and in this function it takes in two
arguments the first one is the actual state so the value of the current state
and the second one is called action and both of them are very different the state just holds then for like it
holds information about the current and previous value of your your state so if this is the
first time we we're logging into our application and this is still the initial state then state would be equal to
this over here because it is the initial state but when we change it to a new
new state then state would be equal to whatever we changed so it's just keeping
track of what our current state is and you can see it is exactly what we created
it has name it has age and it has email and then action is something a little bit different as
you can see it's an object containing two things one of them is called um the payload and
the other is called the type now the payload is an object which contains which you can pass
in um information that you might want to use when changing your state so it's almost
as if you created a function and you could that takes in some sort of argument and you use that argument
to change the value of a variable so over here if we want to change the value of our state of our user to
something else we might want to pass an object containing the new values inside of our payload so that's kind of
how we're going to access that information and then type we're not going to be using that much over here because we're not doing anything super complicated
but you can actually trigger different types of actions that you might want to take so if you want to pass in a type
to um i don't know conditionally do different stuff you might want to do that as well and it's very common to use types when
you're using normal redux but we're not going to be using it that much over here because our application is very simple so what
we're going to be using a lot is the payload in itself because instead of this function is where you actually do something with the state you
change its value so when we log in what we want to do is we want to grab the previous
state we had which is this one over here and we want to change it to whatever we get from the payload because
that's the new user we want to the new values for the user so all we have to do here is we just
have to say state dot value and set it equal to um whatever we get from the payload very
simple right we're going to change the user so we change the value which is this into whatever we get from the
payload and it doesn't it right now it may not make a lot of sense what exactly is the payload but when we start
i'm actually calling this you'll see exactly what we mean and right now this is all we want to
have we're just going to have this one reducer function um and we're going to be i'm going to show you guys how to actually use that
inside of a react component so right here at the bottom what we want to do is we want to export some stuff
right because we want to have access to information uh to all of this thing the things that we created over here
um inside of our index.js so that we can pass it inside of this reducer and also inside of all of the different
components in react that we create so that we can actually change the value of this states
so in order to do that the first thing i want to do is i want to export this constant so that we have access to it outside of
this file and then i want to come here at the bottom and i want to export our reducer um and to export our reducer
we're going to export it at default which means that um we're not going to export an object to our
constant we're just going to export it in itself and then we can just grab it by just creating a variable in our other file so
i'm just going to say export default like this and i'm going to say i want to export the user slice
dot reducer because i want to access this reducer in our index.js and the slide the slice is not the same
thing as the reducer the slice contains the reducer so that's why we say the reducer and then over here in our index.js i
want to basically just say that i want to import at the top the and let's call it user
reducer we can call it whatever you want from the path towards our features
dots user file so now over here we can access this user reducer and just
set it equal to one of our reducers so let's create a reducer called user and set it equal to the user reducer
that we just imported so this is how we actually pass all of the reducers we want to have in our app and we might want to have many of them
so for each reducer you want to create you need to create a new file inside of this features folder with a new slice
and it goes on like this this is how i would organize our project so now that we have imported
this user reducer over here we still want to export our actions but i want to talk about that later
for now it's it's all fine we can now access this state and this information in different
components inside of our react application so the component that i really want to focus in right now is
the profile.js file right the profile component because over here is where we display the information of our state
so right now i want to grab the value of the state and i just want to be able to display it in our component
so to do that we need to use something called the use selector hook which is the hook we're going to be using to grab
values of our states every time we need to use it so i'm just going to say import from react
redux and then import the use selector hook and then if i want to access the
the user state all we have to do is we come over here we say const user and then we set it
equal to the use selector hook and then the use selector hook takes in a function which just allows you to specify which
state you're trying to talk about right which state do you want to access so i want to basically grab all of the
states like this and at the end i want to only i want to
turn this user variable over here equal to the state.user because it is we want to
access the user um and we also want to access the value of that user because if you recall
our state actually includes a value property and inside of this valley property there's the actual value that
we want so i want to say state dot user the value like this and now inside of here we can
access the email base or the name by saying user dot name and if you want to access the age we can
do the same by saying user.h and then user.email i'm going to say user.age over here
and then user.email over here now since our state initially is empty all we should see is
nothing for the name nothing for the email because there are empty strings and a zero for the age and if we open our page
you see this is exactly what we see because we're accessing our initial state but if we change this over here to pedro
and our email was something like email at gmail.com you should see that this
should be the actual values that appear right and it looks perfect right it's actually accessing the states that we
created in our reducer so i'm going to control z all of this and let's leave it as an empty state
because now we want to be able to change those values in our profile component so how do we do
that well to do that we need to have access to all of the functions that we created inside of here
which for now is just a login so i mean we just have to access the actions that we created because that's
kind of a concept that we have in redux which is of an action so toolkit allows you to do that very
easily by coming over here and exporting the different actions that you want to create so i'm going to call the first action
that we want to export is the login action which is the login function over here and i want to make this a constant and
i'm going to set this equal to user slice dot actions because toolkit allows you to access the actions
by just saying user slides.actions and now we go to the component which we want
to alter the value of the state which is the login component and over here um we need to import two things the
first one is another hook from react redux called the use
dispatch hook like this and similar to the use selector um redux has
two hooks that are extremely important for you to understand the use dispatch hook is used to modify
values of your states and the use electrohock is used for accessing values of your states
so for the use this patch we want to come over here and we want to set um create a
a value call a function called dispatch and set it equal to the use dispatch function over here and this
should be it for creating our dispatch function but the thing is we need to specify when we're calling this
what action we're trying to take and if you recall um we just exported all of the actions and one of the actions is login which is
exactly what we need so i'm going to come over here at the top and i just want to import
from our file that we created the the features file dots slash user and we want to import the
login action that we created and now in our login button whenever you click on this button
i'm just going to hard code it over here but i want to basically call the dispatch function right here
like this i want to call this patch and to change the value of our state all we have to do is we just have to
first of all pass the information the action that we want to take which is login and then i want to pass a payload
inside of here which is the payload we are accessing over here so the payload should be just the object containing
the new values that we want to set for the user so i'm going to copy that object and paste it over here
and i want to for example whenever i click on this button i want to set the values of the object to pedro
the age to 20 the email to pedro at gmail.com
something like this and with this in mind it should be working let's come over here i want to refresh the page
you see our state is empty but when i click on this login button you can see it changes the value of the
state and whatever payload whatever object we pass to this action is the payload that we access over here
so this is what i want you guys to keep in mind whenever you pass something over here it
should be accessible inside of this function which means that you can use that information to alter the value of
your state so this is kind of the idea and now that we kind of understand how how the process works
what you need to do in order to get your your states to be changing and actually showing that information in
your components um let's start by continuing this process and adding more to our reducer so i want to add here
another um action which is the logout action right we have the login and i want to add the logout so i know
this this is a simplified version obviously logging in doesn't mean just literally
hard coding like adding a value to an object but i want to keep this as simple as possible and for logging out it will be
as as well very simple what i want to do is i just want to have a simple function
which will follow the same notation it's a function that takes in a state and an action
and we make the arrow function over here and the logo function all it does is it
clears out the the object uh to its original state so if we have a user and the user is
like this and we click a logout button we want to try like remove the the name to be an empty string we want
to make the h0 and we want to make the email an empty string again we want to set it back to what it was initially
so so there's there's a couple ways of doing this um the the main like a clearer way of
doing this would be to coming over here and saying that when you call the logout function you want to set the state dot value
to be equal to whatever this is over here we want to copy this this is the empty
state so we want to set it like this and this should work it works perfectly
because we are setting the state to be equal to to its empty value but what i don't like is that we are
reusing this object twice so what you might want to do is whenever you create a slice
we can create a constant over here and i'm going to call it initial state value
and i want to set it equal to this over here so i want to set it equal to this which is the value of our initial state
so instead of passing it like this we can just say that the value of our initial state is the variable initial
state value that we created and now if we want to alter it and reset it back to what it was in the beginning
we just have to set the value to the initial state value which is just the empty values that we
created so this should work and as you can see we're also not using the
action in this function so we don't really need the action over here we can just have the state and now all
we have to do to access this outside of our components is by passing the function over here this is the whole
process right we need to follow the steps every time we want to create a new action and i'll show you guys as well how would
be the process for adding new reducers or new new actual slices to our project
so for now let's just follow the process for adding a new action we pass the action over here which means
that we can now access it and other in our react components and instead of this uh react component over
here the login i'm going to have another button which is going to be the logout button and i'm going to say
logout and over here i want to have again an on click and instead of where we're going to
dispatch an action but instead of dispatching the action for logging in i want to copy all of this
over here and put it over here instead of logging in we want to call the action log out so i need to import log out over
here and i want to pass log out over here now log out doesn't take a payload so we
don't even need to pass anything inside of it it just resets everything back to how it was initially
so if we open this up over here in a refreshment page you see we have the logout button if i click on login it fills all the
information but if i click on logout it removes the information i can keep like clicking on them
and it works perfectly it alters the state and it acts as if it is an actual state that you
created with the use state hook it will render the page to show the new values which is exactly what we want
but the good thing is we can actually access all of these variables and all of the states anywhere in our application now this is
great this was a very simple example that i wanted to show however as a last example i want to actually
show you guys how would we go if we wanted to um add more reducers to our application so
um we have a user reducer but um we really want to keep in mind that we the
whole point of this is we need to have many states that are managed separately but are contained in the same store right we
want to have many different states that handle our application and they might not be really connected to each other
but the point of redux as well is actually being able to handle all of that in an organized way so let's think about
another state that we might want to have and this simple application so i actually thought about
a good cool example that might not be really useful in real life but um it's
something that i think exemplifies um exactly what we've been working on and basically what i want to do is i
want to have a button in my application which when you click on it it will change the color of the text for
every single text inside of our inside of our website right so this is a good example because
um like in many websites you have the dark and light theme buttons that you can toggle at the top
and you might wonder how do they actually pass that information throughout the application how do
every component know knows that it's actually a dark theme or light theme so this would be a good
example in my opinion and i want to show you guys something similar to that so we have here our two components the profile page and
we have the the logging component so what i really want to do is
i just really want to create a new component down here at the bottom which is going to be the change color
component it's just a simple component which um i'm going to create and all it does
is it actually just has a button over here and i want to click on it and
whenever you click on it it will change color and the good thing is you can write the
color that you want to change to so you might want to change it to green so you write green and it will change the
color to green if you want to change it to blue it will change it to blue so that's one of the things i'm i'm kind of thinking
about so to do something like this we need an input because we want to be able to
write on the like choose which color we want and this input will be of type text like this and
this is a good example in my opinion because um you many people think that you don't use the
the use state hook or you don't really work with states um if you're using something like critics but that's that's completely
wrong because um there are some states that you want to handle them locally and some states
that you want to handle globally so for all the states that are global you work with redux but for states that
are local you work with whatever you want to work with um in my opinion you should use
the core react hooks so we're going to be using over here um the react the use
state um wait the use state hook from react which will allow us to
basically just uh determine which color we're currently writing on our input so i'll come over here and i'll say
um okay i want to create a color and then set color and
i want to come over here and i want to set the sequel to use state and inside of this u state hook um this
will be a string because it will be the the color that we want to choose and in this input we basically what we want
is we want to tell our user that whenever you write on this input so whichever color you write over here
we'll change the value of our color state to to represent the new color that you wrote on the input so i'll grab the
event over here and i'll just say that every time there's a change in the input we want to
set the color to be equal to um event dot target dot value which is a very
common thing in react we're just assigning the state to be equal to whatever you wrote in this input and now
um what we really want is we want to start creating our our reducers for
the caller so we want to create some sort of reducer in our application that will hold information about the
theme of our app so anything related to colors anything related to if it's dark theme or light theme it's
just another example of global states that you might want to have in your application so to do that i'm going to first of all
close everything over here and i want to create a new feature a new file in our features folder
let's call it theme.js but you can call it whatever you want again it's it's it's not there's no
standard i'm just creating stuff um as we go and i want to copy everything that i created for the user
slice because the good thing about boilerplate code is that it takes a long time in the
beginning to set up but then you can just copy and paste what you've already done in the past so i actually paste it twice um let's
just keep it like this and what i want to do is i want to change this because now we're creating a theme slice
right that's the name that we want to give let's call it theme slice and down here
at the bottom for every time we say user slice let's change it to theme slice and obviously right now we don't have
any actions so i'm just going to delete those over here and we want to change this to instead of this slice being called user
let's call it theme then for the initial state we want to have the same thing however
the initial state value shouldn't be an object in our case right now we really need to think about what we really want
and in this case over here i just want to keep it simple i want to keep it as a string because um it will just be a color a
single color that you can change so our like our theme slice will just represent
that single color that you choose to uh to represent all the texts that you have so over here
we'll keep it as a string and if you write blue the state value will become blue if you write red it will become red so this should be
fine i'm going to delete all of this over here actually i'll just keep the one of them and we want to create our first
um action that we might want to take whenever we are using this theme slice right so what is
the action we're going to take well we really just want to change the color right we want to change the color
to whatever the user wrote over there so i want to create this action called change color and it will take in the
state and the action because we really want to access which color the user
put over here so when we dispatch this action we want to pass the caller that the user
chose that the user wrote in the input and pass it in to this theme action payload so we can
basically just say state.value equals to action.payload because the payload will be a string and it will be the
actual color that we want so this over here should be fine and we can copy this and pass it to our
actions that we're exporting because we want to access it elsewhere so now that we created a new slice and
we want to use it in our application all we have to do is we come here to our index.js and we have to add
this reducer to our um store so we just come over here we give it a
name let's call it theme and we can just say that this theme will
be represented by the um and we need to import the theme reducer and we import it from dot slash
features slash theme and then over here we just pass the theme reducer and now we should have
access to all of the states and all of the actions that we created in this slice so this is one of the good things
because a lot it becomes a lot easier and simpler and faster after you've done the first one because you just copy and paste and change
some stuff so now we come here to our change color component and we import
some stuff because we really want to import the use dispatch hook because we want to be
able to dispatch that action so we just say import from react redux
and we import the use dispatch hook then we come down here as we did before
we say const dispatch equals to the use dispatch hook
and inside of here what we really want to dispatch is the change caller action that we just
created inside of our theme.js slice so we need to import that
as well i'll just say import from dot slash actually i need to go twice back so
slash features slash theme and we need to import the change color function and now over here
when we click on this button what we really want to do is we want to unclick uh call a function
that calls that dispatch like this so we want to dispatch the change caller
action and we just passed the change caller action but if you recall this action takes in um a payload and the payload is just a
string so um we just passed the color that we want from the state over here and now we
should know which color we want to change it to so this should be fine it is changing the
the value of the state if i come over here i actually haven't called the change color component in our app.js so i'll do
that right now i'll just come over here and say change color um and it should import automatically like
this and you'll see that now we have the button appearing maybe yeah we have the button and the input
and if i actually come over here and say blue and i click on this button internally it is changing the value of
our color state that we created in our theme.js this over here is actually changing
however we're not demonstrating that anywhere so what i want to do is i want to actually
come inside of our um inside of our all of our other components like the the profile page and i want to
import um the i actually already have the use selector so i want to select a new state from our store
so to do that we just call the use selector again and i want to call this theme or theme caller whatever we want
and from the state we grab the state the theme dot valley because now we have access to
our caller and what we do is i want to come to our div over here and i want to give it a style
and the style will just be um i'll just change the color of anything inside of this profile to be equal to the theme color um
another thing the theme color like this and now it should change everything inside of here to have the color
equal to the theme color in our global state so you see that we wrote blue it becomes blue but if we write green
like this it should become green if we write red it should become red and the good
thing about this is that everything is handled separately so we have two states that are siblings and we can change everything perfectly
and you see it's working right if i click on login everything the other state also is handled if i click log out
it also works if i change this to pink it will work as well now um obviously this change color thing
isn't that good because if i write something here that isn't a color i think it will break
um it didn't break but but you see it didn't change the color yeah it didn't break but it didn't change the color because we're manually
like choosing which color we want to change to um but i think it's really cool and it does exemplify
how it is the process for creating new states for creating new reducers for creating new slices
um and how you can actually manage many states that you might want to use in a component by
using the use selector twice inside of the same component so i really really hope
that this tutorial was of value for you guys i really spend a lot of time trying to figure out
um some good examples that balances out um being beginner friendly but also
being able to explain to you guys some real life examples so i could have easily done a tutorial
using um by creating something like a counter but i didn't really want to do it because
first of all there's already too many counter tutorials out there and because i think it's not
really useful to exemplify why we need redux or why we use a state management library because
rarely you would need a state management library for something like a counter however you do need it whenever you have an application
like this one where you have a user and you want to access the user's information um throughout the application but then
you want to change that information in different components or something like the caller one which you i've seen
so many websites with the change theme toggle so i really had a hard time trying to figure out which
examples would be good and i really hope you guys gain as much value as possible from this tutorial if you have any questions leave the
questions down below i'll be answering all of them if you want to check out the code all the code will be in the description i
created a github repository where you can just take a look at the code you can grab it to your computer if something's
not working um you can try out just copy and pasting for my code and then comparing to see
which er what mistakes you made so that's that's basically it i really hope you guys enjoyed this
video if you enjoyed it please leave a like down below and comment what you want to see next subscribe because i'm posting as much as
i can and i would massively appreciate if you guys could support the channel we're almost hitting 20k subs and this
is even this is mind-blowing for me honestly so i'm really happy with the the way the channel is growing and i would
appreciate if you guys could help by so that's basically it i really hope you guys enjoyed it and i see you guys
next time
