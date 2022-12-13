# Context API Crash Course

https://youtu.be/t9WmZFnE6Hg

hey guys how's it going i'm back here
with another video and today i decided
to bring this video which i've been
wanting to make for a while because um
it's a topic that i find really
interesting and i feel like it's going
to be important for a lot of
beginners to intermediates or even
advanced react developers and what i'm
going to go over in this video is a
crash course
about the context api as you might know
the context api is like a a big part of
of react as a whole and a lot of people
use the context api however
a lot of people also misuse the context
api so for that reason in this video i'm
going to not only show you guys how to
use
context inside of your project the
reasons why you might want to use it
inside of your project and also what you
shouldn't be doing if you end up
choosing to use context in your project
so with that in mind if you could leave
a like in the video i would massively
appreciate it and let's get into the
tutorial
[Music]
[Applause]
[Music]
[Applause]
okay everyone so the first thing i want
to talk about is just give a brief
explanation on
reasons why you might want to use the
context api so the context api is a
state management solution provided by
react which allows us to
create what is known as a context and
the context provide values like states
and functions
that can be consumed by a group of
components that are wrapped around the
context basically the idea is if you had
an example like this you have
a tree of components imagine our app
starts over here with this component we
have three components over here a parent
a child and a grandchild
now this situation is very common you
have some a state or something on the
top component which is this one over
here the parent and the state in our
case is like a username right so i want
to display the username inside of here
and
the problem is i want to
change the value of the username
on the grandchild component this one
over here
so the issue with that is that um
i can't create this state inside of the
grandchild because if i did this i
wouldn't have access to username on the
parent and you can't throw states or
information up on the tree you can only
pull it down by by for example using
props right
so what you would do without the context
api is you would do something like this
right you would um
create the state on the top one like top
highest component display the username
so it would say page attack then you
would call the child component and pass
the set username as a prop to it
then the child component um would great
will get that set username would do
basically nothing with it it doesn't
need to know any like it doesn't need
this prop it just gets it because now it
needs to pass one more level down so
that the grandchild receives it and then
has like a button that when you click on
it it will change the username so this
is called prop drilling i have a full
video on this and this is one of the
issues
that the context api kind of aims to
solve
because we don't the reason why we don't
do this is because first of all this
over here if the set username function
is used or if we pass the username as
well and that this state value changed
then this component would have to
re-render because now
this has changed and if a prop changes
in your component the component will
re-render so you're unnecessarily
re-rendering some components that you're
passing down the props right
and not only that but you're also making
your app really unorganized because um
you should try to obsess with code
quality you should try to make your
components um be as organized as
possible and in this case what you're
doing here is you're receiving a prop to
this component that doesn't need that
prop because this prop is is kind of
like a dummy prop it just passes down to
to another component meaning that with
uh this is an anti-pattern you shouldn't
be doing this if you are having a really
well organized project in your
application
now how could we solve this using the
context api well the issue isn't even as
bad in this situation because you're
just drilling um through one component
but the thing is imagine if you have
some sort of app which you have for
example a state called user and that
state holds information about the user
who is logged in well you kind of want
that information almost everywhere
inside of your app so it's very likely
that what you would have to do in that
case is you would have to create that
user state on the app component or in
the app like the highest level component
in your app and then have to pass that
as props to all the components and if
you're doing that it's horrible because
it means that every time your user
changes um all the components in your
app will have to re-render even though
they're not not they don't need to
necessarily right so and also not to
mention the fact that it is super
annoying and will make your code super
messy so that's what the context api and
any other state management library is
trying to solve right create an easy way
for you to
organize your states and manage your
states throughout your application so
context api is just a way to do this
it's a way to solve this and the way we
use the context api to solve something
like this would be by first of all
coming over here at the top and
importing
the
create context um function in react now
it's super simple to set this up all you
have to do is you have to create a
context for every um group of components
that you want to pass have access to the
same states so i would call this
something like
um app context or you can call whatever
you want you can create multiple
contexts as well i'll show you more
about that later in the video but i'm
going to call this app context and then
i'm going to set this equal to
create context like this then what we
can put inside of here is a default
value for our context what does that
mean well our context will have a bunch
of values inside of it and values are
basically all the different things that
we want to pass in that context so that
the the components in inside of that
context will have access to it so in our
case over here if we were to to to pass
both the username and the set username
those are two things that we would give
to the context and pass it inside of its
value because those are two things that
we might want to have access to inside
of this whole component tree so in our
case we could do something like
coming over here and saying username
equals to an empty string because that's
the initial value of our context and
then say something like set username is
equal to i don't know you put like a
function because this is a function but
um
what i usually do is depending it's it's
recommended to do this especially
because it's good for um for testing but
you can also just pass null to this and
it should be fine so what we do now is
we have this context thing over here and
what this allows us to do is create a
context provider now a context provider
is just imagine it as like a component
which you just pass
around and wrap around all the
components that you want to have access
to the values inside of the context and
whatever is inside of this context
provider will have access to all the
values you pass to it so if i came over
here and said appcontext.provider
on our parent component and also say
appcontext.provider
like this what happens is now we can
pass a property to this which is called
value and whatever we put inside of this
value object over here
is something that now all the components
that are inside of this provider so the
child is included and the grandchild is
included because it is inside of the
provider will not have access to it by
using the use context hook
so i can just pass username here
and set user name
like this and now whatever is inside of
here will now have access to these
values without having to pass any props
so i'll just delete this props over here
like this
because we don't need them anymore
i'll delete it from all of them
and i'll show you guys how you would get
the the set username on our grandchild
right because now since we removed the
prop how would we get it well we could
use something called the use context
hook and obviously i'm doing all this in
one um
in one like file but imagine how more
organized all of this would be and
how all this would look if you were
working in a real project and separating
everything into multiple files but in
our case we can just grab the use
context hook and on our grandchild over
here which is where we want to grab one
of the values that we passed to the
provider we can just say const
and then open and close curly braces set
it equal to use context and then just
pass the app context over here because
you might have multiple contexts inside
of your application so you need to
specify which one you want to get the
values from
so now what we can do is we can just
decide inside of this grandchild what
values from here that we passed we want
in our case the grandchild only wants to
know what like only wants the set
username function which is something we
are passing so i can just put over here
set username
and
now it would continue working perfectly
without having to pass any props to any
of the components and also not having to
drill specifically any props through the
grandchild component now the grandchild
component can do whatever it wants
without needing to have access to set
username also the contacts api isn't
just useful for situations where you
have a tree of components that is kind
of vertical it also helps to prevent
messiness when you're when you have a
bunch of sibling components like this um
imagine both the child's we have two
components which is child one and child
two and each of them have their own
purpose one of them just displays a
username state that we created and the
other one just changes the username and
so what the context api can do is
prevent us from having to pass the same
prop like or have to pass props to each
of them because now what we have is each
of them can just grab whatever they want
from the
context by using the use context and we
don't have to pass prop to them now this
looks simple right this looks really
good it's way simpler than redux or any
other state management solution that
i've seen
but
there are some stuff that you do need to
think about and that's one of the main
purposes of this video i'm going to go
over some of that the best practices of
what i think you should do if you're
going to be using the context api so the
first thing that i want to talk about
which i feel like is best practice is
whenever you choose to actually create a
context and use context inside of your
project i would recommend creating a
component for each context provider that
you create so for example imagine we
have an app which you can log in and log
out as a user and you have like user
information and you need that
information throughout the whole website
right a lot of social media websites are
like this because you might need the
username for the user and many parts of
your website you might need the user id
you might need i don't know
their profile picture whatever right so
this would be a good use case because
you would create a component called user
context provider which inside of here
you would create your user context but
it would have to be outside of the
component in itself because you need to
access this elsewhere whenever you do
the use context remember you need to
access the the context you created so
you create it outside of a component so
that you can access in many files
but then inside of this component all
you do is you have one prop called
children
and all it does it it just returns the
provider and puts everything that you
wrap around it inside of the provider
now this makes your code look more
organized because now i can put
everything related to the context inside
of this component instead of having it
inside of another component that also
has ui stuff right we're just separating
the logic from the ui
now the example i came up over here
obviously all of this code is fake like
nothing works but it would be it would
look something like this
you would put everything related to the
user inside of here including for
example
api calls and um and handling the data
so we would have two states one for
keeping the information about the user
and one to keep track if the user is
authenticated or not we could have
functions right we could have a login
function which makes some sort of api
call and then changes the user
information based on that or a logout
function which does the exact same thing
but just logs the user out
then we would have a value object with
all of the information that we might
want to access everywhere in our project
and finally we would just pass that
information or this value inside to the
provider and now everything that we wrap
this around will have access to this so
instead of directly wrapping this around
the components that we want to
to have access to the context i would go
over here for example and i would wrap
the whole app
around or wherever we want to put this
context i would wrap
everything around the user context
provider component that we created
so it would look something like this and
we could put whatever we want inside of
here so all we're doing is we're just
organizing your your code better right
and i would recommend doing this i
whenever i use context api i always do
this and you do this for each context
that you create and it would just make
your code look way more organized okay
so now that i spent a lot of time
talking about all the benefits and and
good parts of the context api you might
think that you should probably use this
everywhere in your app and it should
probably be your your primary state
management solution however i'm here to
say that there are a lot of negative
parts of the context api and i really
want to address it so the main issue
with it and
it's something that for some reason a
lot of people don't even know and they
use the context api like people use the
context api for their project and misuse
it all the time without even knowing
that this is actually something that
happens and what i'm talking about is
the fact that if you have an application
such as this one over here right we have
a very similar uh example similar to the
ones i already showed you we have a
parrot component and there are four
child components inside of this um
application right so child one is the
same we saw before it just displays a
username which is a state we created on
the parent and then um
child two just
changes the username and that's its main
purpose
um then the thing is chart three there's
another state called count and it's just
completely unrelated to username it is
just a number that you can increase
decrease whatever you want and we can
pass it both count and set count over
here so that we can use it in the third
and fourth component in this tree
now the third one all it does is it just
displays the count and the fourth one
fourth one it just
increa increases the account by one
every time you click on a button i
should probably also change this to
change counts instead of change username
but yeah you get what this means right
we have four components all of them are
siblings to each other and they all have
their own purpose right one is just to
display the username one is to display
the account one is to change the
username and one is to change the
account now this is a very simplistic
analogy to a real world project which
would involve a lot of components not
just for and a lot of components that
are branching off each other and um with
higher complexity and everything that a
real project would
encompass but in this case you can
already see one of the negative parts of
the context api because
if i were to change the value of
username right we would imagine that the
only component that would re-render is
child1 because it's the only one that
needs to see the new value of username
so it displays the new value of username
but that's not the case because when one
single value of the context changes the
whole context technically changes
meaning that every component that is
using this context meaning every
component that has the use context hook
being called will have to re-render as
well so if i change the count over here
right i just increment it by one every
time i change the count all the
components in this context will
re-render which is crazy because it is
completely unnecessary because many of
them don't even access count meaning
they don't need to re-render
now this will probably not be that
important if you have a project as
simple as this one over here um but like
i mentioned many times in my channel and
like i mentioned many times in this
video you should be obsessing over your
code quality and more importantly you
should be obsessing over um the velocity
and the performance of your project in a
real world scenario and this over here
would be horrible because um it would be
causing too many unnecessary renders and
just decrease the the the performance of
your website right so this is the main
issue with the context api right so
people misuse it all the time because
they allow this to happen now
i'll show you guys an example of
using a provider that would probably
cause this issue so this would be an
example of a provider-like component
like i showed you guys previously that
would recreate that would be misusing
the context api so i created one for for
example a profile page in your website
um you probably want to create a
a solution solution for that case right
because a profile page can include many
things for example it could include
a display a component displaying the
user current information so like if it's
your profile page you're going to be
seeing your personal information
also
maybe you can click on a button and it
will open a modal that
would allow you to edit your profile
information so you can change your name
you can change your i don't know your
email or whatever so you would probably
have to create a state called is open
mod or is open update model and it would
be called is open update model and it
will probably um be a boolean so that
you can know if it's open or not also
you might want to be able to display
your current list of friends right if
you're looking at your profile you want
to see your list of friends just picture
like instagram or facebook or whatever
in each person's profile you can see
their friends
now
you know since you're updating your
profile information if you're the owner
of that profile page you might want to
create a state containing the new values
that you want to update which can then
be used to i don't know make an api call
and update that value in a database or
something right so we created all the
states and we're just passing them
through the context and would probably
similar to the user context provider
that we created previously we would
probably be using this throughout the
whole component tree of the profile page
i made a little diagram that would
explain how this page would kind of look
like right it would be like this it
would have a so the profile.js would be
the main component it would be the the
page in itself probably what you call
when you go to that route then you'll
probably have a profile display.js which
would be a component um
which does display the information about
the current profile info
then you would probably have a the
update model which would appear based on
if you click on a button or not and the
list of friends component maybe on the
right over here being displayed right so
this is just to show you guys and you
guys have a picture of how this would
work if we did it this way there would
cause a lot of issues because of the
following first of all
every time one of these values changes
all of the components in this tree would
would we render right so every time
for example your information changes or
you update your profile everything
including this list of friends which has
nothing to do with your personal
information would have to re-render
right
but um most importantly we have a state
over here called new profile info and
this would probably change very often
because this is something that would
keep track of for example what you're
writing on some sort of input right if
you're changing your username it would
keep track of what the value of the
input is right so it would be constantly
constantly updating meaning that all of
the components in this tree would
constantly be updating as well and if
you're working on an application that
has data that is constantly changing
this can be super dangerous because it
will definitely decrease the performance
of your website so what am i saying here
well i'm saying that if you have states
that are constantly going to change it
is better not to put them inside of a
context a context can be very useful for
situations in which your state won't be
constantly updating because that will
cause the least amount of unnecessary
re-renders also putting stuff like this
doesn't make sense because um
like i mentioned this will trigger as
many renders as it can get right not to
mention this as well if you're keeping
if you keep just opening and closing the
model um it would continue trigger
triggering renders for everywhere in the
component tree meaning i would recommend
these two states to be removed because
um they can exist in their own
components and even if you need to
access them in another way sometimes and
hear me out sometimes prop drilling is
better than
causing unnecessary renders like this so
that's something you should use your own
judgment towards but
i feel like in this case it would be
good to just remove this
and this
um
and probably this actually it depends on
what you want to do maybe add some other
stuff here that also doesn't change much
but the important thing to notice is
that you should be using context only
for situations in which your states
aren't updating consistently so what
would be a situation like this something
like this over here would be a good
example or a good use case as well so
what we can see over here is we have a
another user context provider and the
important thing to notice is all the
states that we have over here and all
the states that were passing through the
value of the context they're all states
that are necessary throughout the
application so it is important that we
have we are we're making them kind of
global states but at the same time
they're not going to be changing a lot
like i said like you won't be changing a
lot of who you are as a user so the the
information inside of the user state
should not change much also logging in
and logging out like it shouldn't change
at all like unless you're actually
logging in and logging in of the website
which then it doesn't make you don't
need to like it will re-render anyways
the website right because a user who's
logged in should have a different
experience as a user who's not also the
user who is premium and not premium
i guess like unless you're buying a
premium membership to a website and then
canceling it like every five seconds
this shouldn't change a lot right so
it's a another good thing to have and
pass around inside of a context inside
of your whole application so this could
be something that you wrap around most
of your app so that throughout your
whole app you could have your own
context provider for information related
to the user also um i know i've kind of
made it obvious throughout the video
because i've used different examples of
contexts but you can have multiple
contexts inside of your project i came
up with this example over here of a more
complex website as you can see we have
an app right we have multiple components
we have routes which in itself each have
components that branch off to other
components you can analyze this it's a
it's a simplistic but good view of how a
website would normally work um obviously
it didn't include everything but you
just know that here we could we would
have to have a lot of different states
and we really wouldn't want every
component to re-render just because a
single state on the edit profile
component
changes right we don't want to trigger
everything to re-render just because one
single thing over here changes its value
so what we could do is create multiple
contexts right we could create one for
the um for the whole application called
app context which keeps tracks of stuff
like
um maybe the idea of the user who's
logged in maybe
i don't know whatever stuff that doesn't
change much but is necessary throughout
the whole app
then in the profile you could create a
context for that as well like a profile
context and then a post context and then
a friend's comp to context and each of
them only exists inside of this group of
components and this group of components
and that means that it doesn't matter
what changes inside of here stuff around
the app won't render based on that now
is that the best approach well it's a
better approach than just creating one
context and passing everything inside of
it but it still causes issues because
like i said in the profile example right
this is almost the same thing as i i
showed you in that example if something
changes over here it can still
unnecessarily trigger a bunch of renders
inside of the profile component and you
really want to minimize that to them to
the minimum level right you really don't
want even though it's just a small
amount of components you don't want to
be causing this to happen so what are
some alternatives well there are
multiple alternatives to state
management in react there's actually too
many alternatives in my opinion but um
we know that we have the context api as
one of the options
but we also have stuff like redux and
redix toolkit which are really good
alternatives if you want to they have
their benefits and they have negatives
to them as well i personally don't use
redux um i've used redux toolkit a lot
in the past i have videos on it but um
it's still not the best solution in my
view it's just my personal experience
because i include stuff like
developer experience and
bundle size into the equation right and
from everything that i've tested um i
don't like redex toolkit as much as a
lot of people do
there's also other libraries like recall
and zystand
there's a lot of alternatives right my
approach to it is the following and also
you have you can disagree you can do
whatever you want you can even use redix
if you want to
but the way i like to do it is um if i'm
creating an application that doesn't use
graphql
which is what most of you guys will
probably be recreating
i would use
the context api for global states such
as the ones i mentioned so like
user information
the theme of the application stuff that
doesn't change much and i'll make it uh
exist around the whole part of the
application
then i would use some sort of fetching
library like the swr library or react
query which i love by the way they have
some sort of state management solution
in itself
they have good solutions for caching and
they're really good because the data you
get back
from api requests using that library
should be the states on their own so you
wouldn't create a state to represent
that data you would use those as a date
to your in your inside of your
application
and then what i would do is whenever i
have a group of components that need
some sort of state that exists at a
parent and now it's it needs access to
it in a grandchild
i would probably just prop drill because
although i criticize it a lot and it is
something that you should avoid it is
not the worst thing in the world right
even the react team knows this because
it's not the worst thing in the world it
is an anti-pattern but sometimes you
might have to do it but i put an
emphasis on the sometimes because you
can always find a way to create and
organize your components such that you
wouldn't need prop drilling and you
wouldn't need the context api um for
that case right so i would say just
focus on organizing your project better
use context for global states and inside
of smaller groups of components use
react query swr and try to use uh like
custom hooks as well as much as you can
um those will help a lot now if i was
using graphql because i said this was
what i would do without graphql i would
probably just do the exact same thing
but instead of using react query or swr
i would use um some sort of graphql
fetching library such as apollo client
maybe like relay i don't know i i like
to use a power client a lot that's why i
mentioned it first but that's what i
would probably do so
this is basically it for the video i
also plan on making another state
management video later on uh not this
week but probably later on um not
focused completely on context api but
just to talk about this whole topic
which is massive there's a lot to talk
about so um that's basically it i really
hope you enjoyed this video if you want
to check out the code it will all be in
the description um together with all the
examples that i created and all the
diagrams um i really appreciate you
watching this video if you watched it
all the way through i'm really happy
that you did um let me know your
opinions let me know your likes let's
have a discussion in the comment section
and a lot of people um might disagree
with my approach a lot of people might
agree with my approach i just want to
know from you guys and yeah that's
basically it i really hope you guys
enjoyed it and i see you guys next time
