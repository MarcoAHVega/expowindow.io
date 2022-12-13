# BEM Crash Course

https://youtu.be/u-XKw585KqY

hey guys hey going mining is done and in
this video we're going to be exploring
BM which is short for block element
modifier okay so this right here is a
CSS naming convention so it is not
something that you install it's not a
package or a library it's simply just a
way you can name your CSS classes and
the reason why you might want to use it
is because it allows you to have
consistent well-formed class names that
are easy to develop with and also
maintain and I use this for basically
all of my projects from now on I find it
essential to have some sort of you know
system or naming system for your classes
okay and it's actually very simple to
start using and I think that anyone at
any level can start using BM on there
where projects okay so it is not as hard
as the name kind of suggests okay so in
this video we're going to be covering
all of B and while most of BM to get you
started and I think basically from this
video you can get a really good
understanding of you know obviously how
it works and how you can start using it
okay so now let's take for example this
right here we have we have two users on
this page and we're going to start from
scratch from here and use BM to of
course develop into this right here so
let's begin by first taking a look at
the actual BM name so we have here block
element and modifier so those three
words represent each individual part of
BM so let's begin with with block okay
so block basically represents a single
contained block or component on the page
alright so for example here we have two
user blocks each one of these is a user
block okay so it's contained it's by
itself and it means one whole structure
one whole component and that is a block
in BM okay we then have element so
element is an element or a part of a
block so here we have a profile photo
element and also a use our name element
okay so the reason why their elements is
because they depend on the block to work
properly it wouldn't make sense for you
to have the user photo image outside of
the user block because of course the
profile photo is about the user okay and
this is in comparison to a block for
example so here we have the button or a
button AV profile button but this is
actually a block the reason for that is
because a button can be used outside of
the user block it does not depend on the
user block and it does make sense to use
a button outside of the user block so of
course it is a block not an element and
that is the main difference there
between a block and an element in BO the
elements depends on the block and only
makes sense within its block whereas a
blocks of course like this button do
make sense inside a block and also by
itself okay so we have block and element
and they're the two main parts of BM we
then have modifiers so modifiers are
basically as the name suggests there
ways for you to modify the behavior or
the appearance of a block or an element
okay so in this case right here we have
a modifier on the user and this is a
this is a modifier for a dark theme so
of course here availa dark modifier on
the user card or the user and it is made
black with white text so we're going to
color we're going to cover all of this
stuff in this video to of course go from
this to this
alright so let's go inside the blank
Bern's HTML file and go inside the text
editor we have this right here so I just
included my decode CSS file this just
contains some of my own custom fonts and
colors for decode it should not matter
for the purpose of this video so just
ignore that aside from that everything
else is pretty plain and from scratch so
let's begin by representing in HTML the
user block okay so let's make a new div
with a class of the user right here and
that's all you need to create a user
block with B yep okay so the the basic
syntax is for your blocks you simply
write the name of your block as the
element or the HTML element class okay
simple as that
so now for the elements we have two
elements we have the profile photo and
we also have the user or the user's name
so down here we can make a new image and
give it a class of user then double
underscore and then further so this
right here is the is the style or the
convention for elements in BM you start
with the block that it's contained
within then two underscores and then the
element name just like that okay so
again pretty straightforward I'm going
to add the source here to the images
that's user dot PNG and of course the
alternate text we can just say user
right there cool so now we can move on
to the to the name element so down here
we can say div with a class of user
underscore underscore name inside here
we can say Jeffrey so very similar to
above just what they do is serve an
image so now I move on to the to the
button
block so down here we can have a button
with a class of button simple as that
we have the button block down here okay
inside here you can say here protocol so
once again just to recap the reason why
this is the this is a block and not an
element is because buttons makes
to appear outside of this user therefore
it is a block and not an element all
right so I can save this and refresh the
browser and we have this result right
here let's add some CSS to make it look
a bit nicer something like this okay so
back inside here let's head over to the
CSS and begin by working on the user
block slash class so we can say user
give it a width of 135 some padding of
15px
hey box-sizing the border box a border
of 1px solid a light gray let's float
them to the left so they're side-by-side
and I'll say imagine right of 20 let's
just say 10px okay I would just start
collapse this or fold that up and we can
then target the user photo class in this
case would say be an element so use our
photo give it a width of 100% take up
all of that horizontal space let's make
it display as a block this of course is
separate to a p.m. block but basically
the reason for this is so that we don't
get I believe there is a like oh like a
1 pixel margin on the bottom of images
that are displayed as their default so
just display a block for a bit of a bit
of consistency we can say border radius
of 50 percent a box shadow that is in
sets at 0 2 PX 2px and a 35% opaque
black ok we can now add some styles for
the username you can say user underscore
name give a font-weight:bold a text a
line of center a font size of 0.9 REM
and some padding that'll be 10 PX and 0
okay so now we can then or move done
with we've done all of the user stuff we
can now work on the button block okay we
can simply just say with one
per since let's give it a color or a
text color of a dark gray a light gray
backgrounds and a padding of 7px and
then 12px if bought out none the same
goes for the outline and I bought a
radius of 2 pixels and purse' as being
pointer alrighty let's just close this
down and also add the activist
pseudo-class to ensure that the user
gets to see what happens when they press
down on the bottom exit button active
let's give it a box a a box-shadow:inset
0 0 14 X and then a 40% play black so
now we've defined all of the main styles
for the user block its elements and also
the button block so you may have noticed
that I'm I'm simply adding the class of
the elements without the parent behind
it so for example I'm not saying dot
user and then dot user underscore
further I'm not doing this
I'm simply writing the name of the
element and that is the way you do it in
being in ok just keep that in mind that
just reduces you know how much certain
elements depends on each other of course
in the case of elements it may not be
too bad if we do this because after all
this element depends on this one but
just to be safe and to follow the
correct practices with BM
ensure that you keep all of your class
CSS class names separate without any
sort of our parent child selectors okay
so we have all this CSS defined I can
save this and refresh the browser and we
have this result right here ok so
basically most of our CSS is all done so
we have this result you may notice that
the button itself is not blue so I've
used
I've used the gray button here and
that's because in this case I'm making
this button to have a gray background by
default so a base button on my page
looks like this in this example I'm
using a blue button and this right here
is due to a modifier on the button to
make it blue so essentially this is what
I call a primary modifier so I'm adding
on this page here I'm adding a modifier
called primary on this button to make it
blue so it's a primary button so let's
go ahead inside here and add that
modifier to the button we've explored
block and element let's move on to the
modifier so inside here let's go down to
the button and add a modifier this can
be done by keeping the current name of
your button class name so keep the base
class name or the block class name and
put a space and say button then - -
primary so the syntax or the convention
for this is going to be double - in B M
represents a modifier so button primary
and also button and that's how you
specify a modifier in BM so up here I
can say button - - primary once again
I'm not saying you know I'm not I'm not
doing button then button primary I'm
simply saying button primary ok
inside here we can add a different color
for the text and the background so we
can say background make it a nice light
blue so 2/3 double 81 and a text color
of white so I can save this and refresh
and we have this right here perfect
right so that is how you do a modifier
now the reason why your modifier is
added to the end of your block in the
class section is because of course you
want to retain all of the previous
values or CSS rules that you put on the
button so for example if I get rid of
the button class from here save this and
refresh
we have this right here okay so
obviously we want to keep the button
styles and modify it slightly a bit of a
touch up on the button to ensure of
course it's a primary button and not a
base button okay so back here let's put
this bun in class that where it was now
the main advantage of this is because if
you want to have let's just say you want
to have an era button or like a like a
delete button you could do this you can
add two buttons here for example you can
say delete and say button - - I don't
know warning for example then up here
you copy and paste this and say button -

- warning change the background color to
  be a nice red instead so let me just see
  if I can get this working all right
  make it a a red instead of your blue I
  can save this and refresh and now we get
  a warning button or red warning button
  and also a primary button so that's how
  it's sort of you know yeah you can of
  course swap out different modifiers you
  know to make everything consistent and
  everything just works really nicely when
  you were developing with this style okay
  so that is how you can modify a block
  with BM so what about modifying blocks
  but also blocks with elements inside of
  those so of course here we have the dark
  theme and the difference between this
  modifier and the button modifier is that
  this one also modifies the child
  elements inside the block so for example
  my text color is white down here and
  also I've got a different shadow on the
  profile photo
  so I'm modifying the elements inside the
  block with my dark block modifier all
  right so let's see that in action so
  let's go back inside here and just
  remove that warning stuff that was just
  for an example okay and head back up to
  the top here let's actually just make a
  new copy of this you
  just like the previous example and now
  I'm going to add a modifier to the user
  block I'm gonna say user then user - -
  theme alrighty and let's go up up here
  again and it creates the modifier class
  or CSS ball set so we could say user - -
  dark theme let's begin with the basics
  and that would be to have the background
  as being a very dark right alrighty
  let's save this and refresh of course we
  get this result right here for the
  second one which is obviously really
  good but to modify the the photo and
  also the text this can be done by going
  down here we can say user
- - dark theme and then we can say user
    photo so I know I said of course you
    don't want to do this sort of thing but
    this is you know this is this is allowed
    by BM to be able to do this for
    modifiers okay so when I say you're not
    allowed to and all this sort of thing
    you can of course do it but it's more
    about how much you stick to the
    convention in this case the convention
    on the website allows you to do this so
    of course since your elements depend on
    the on the block
    it does make logical sense to have this
    this modifier also apply to the photo so
    I can say box arrow here and say in set
    0 2 PX 2px and a lights a light box
    shadow so 35% opaque white and the same
    goes for the username tip so go down
    here copy this and say user underscore
    name and change the color to be white so
    I can save this and refresh and we have
    this result right here just like this
    previous example right here okay so and
    that is how you can use beer so one more
    thing when you're using BM
    you want to try and avoid making a
    sort of hierarchy or you want to try to
    avoid sort of representing your HTML
    dumb hierarchy in your CSS so by this I
    mean you know if you have sort of you
    know if you have in this in this
    username for example right let's try and
    use this you know if you have you have
    username right so then you might have
    inside here this would be your your
    username text okay and then you may even
    have something like an icon so let's
    just say you have like a like a user
    head icon so you might have an icon
    tagged with a class of whatever icon
    library you use and then you say icon -
- user and that would be your little
  user head icon on your page right so
  here you you have these two separate
  parts of your user name element so in
  this case you don't want to start doing
  things like this you don't want to start
  doing span class user underscore name
  and then like you know underscore text
  this right here is not permitted or not
  advised by being in this sort of starts
  to get messy and it's sort of like
  you're using your user name as a block
  and then your text is an element it's
  not so good so here you're sort of
  you're sort of representing your your
  hierarchy so your one two three inside
  your class name it's not good
  instead you wanna have some like this
  user underscore text okay so that is
  cleaner and that is advised by BM and of
  course same goes for the icon you don't
  want to say user underscore name
  underscore icon you just want to have
  something like user underscore icon okay
  so just keep that in mind
  try not to over complicate your class
  names try not to make it so it sort of
  follows a hierarchy of your structure
  here just keep them simple and keep them
  modular and
  separate alright and that right there is
  the overview of headings BM for your web
  projects
  alright thank you for watching and I'll
  see you later
