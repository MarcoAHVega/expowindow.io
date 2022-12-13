# PostCSS Crash Course

https://youtu.be/RuLrIJJzt60

post css is a javascript tool that developers use to transform their css code
in this crash course we'll work on two projects one where we explore what post css can offer us as a sas replacement
and then in the second project we'll look at how post css can help us with our production css code if you
appreciate the effort i put into these videos then help me grow my channel and like and subscribe
[Music]
okay let's touch on what requirements and resources we have for this course the only thing you need to have
installed in your system is node.js if you're not sure if you have a node then in your console type in node
v and if you're not seeing some sort of version returned then head over to nodejs.org download it and get it
installed the next thing to have is a code editor i'll be using vs code you're free to use whichever one you want and
then lastly let's touch on the resources look in the description for this video there's a link to download what you can
see in front of you and inside of that you'll find five folders three of them relate to the
first project we're going to work on and the last two to project number two now i'll refer to this course resources
throughout those two projects and that's it besides that just a basic understanding of javascript css and html
is all you need for this course so let's start at the beginning post css is a javascript plugin that on its own
doesn't do anything so you install it and then you add further plugins and these plugins then transform your css
now you can use post css both as a preprocessor or as a post processor and
you can manually add post css to your projects via a package manager such as npm or yarn or it could be part of the
build tool itself such as veet or it could even be part of the front-end framework you're using and tailwind css
is an example of one of those behind the scenes postcss creates what's called an abstract syntax tree you can see it on
the screen in front of you right now there's our css and this is what it converts it to and
then the various plugins you might install order prefixes css nano for example they
then transform your css through this ast and while you can use post css as a
replacement for sas and that's what we're going to look at in our first project it's important to note that you
don't have to certainly most the projects that i work on i'll use the two together
you can let sas handle the pre-processing and let post-css deal with optimization minification and also
removing any unwanted css so let's get started now on our first project which
is just an html project where we're going to explore some of post css features open up your resources inside
of that you'll find a folder called project 1 and get that opened up with your own code editor inside of our
project one folder you'll find in index.html get that opened up with your browser and
you should see this in front of you and you should also see an assets folder inside of that and all we care about is
the css folder at the moment all that contains is a style.css file with around
about 1 700 lines of unminified css so let's pretend we've inherited this project and
our first goal is to make this more manageable so we can keep things simple for this first project we're not going
to use a build tool instead we'll just use the post css command line interface so that means
we'll install two packages via npm and then we'll use the post css cli plugin to handle the build process for
us so have a look in the description for this video there's a long list of post css
plugins the first two are what you can see in front of you right now this is our post css plugin
that we're going to install and this is our post css cli plugin now if you're new to all of this let me
quickly talk you through what we need to do those of you that are familiar with npm and using a package.json you can
fast forward ahead to install our pass our packages so the problem we have right now is that all we have
is a index.html page and an assets folder and we want to use additional
functionality so the question is how do we get that functionality on our site so let's look at what we've got here we've
got all of these files over here that make up the post css plugin and likewise the
same sort of setup for this cli and again will be the same setup for all of these additional plugins we're gonna
install so that's our first challenge how do we get access to these files do we just click on there download it do we
clone it using git and that's where a package manager comes in now the one
we're going to use is called npm there is another one called yarn either of those will do fine so how this works is
these files we're seeing here the team who put together this post css plugin
committed this plugin to the npm repository that means all of these files
are sitting inside of the online repository or the npm library if you
will and you see where it says search packages if we do a search for post css
then what we're looking at right here have a notice have a look at that repository name github post here says
post css there it is right there right so of course the first question is well okay what now how do we use this npm now
you've got your installation requirements over there so you may be thinking you can just click on that and then run that command inside of your
terminal so those of you that are using vs code click on terminal and then new terminal
and you should see this pop up over here if you're going to use your own computer's command line then the
important thing is that you make sure you're in the root of our project folder so note there inside of the terminal for
our vs code i can see project 1 right and i can see project 1 right there i don't see that inside of my terminal so
if you're going to open up your computer's terminal you need to cd into that folder cd
stands for change directory now quick and easy way is to type in cd in your command line then hit space then grab
the folder you want to cd into drop it in and then hit enter and now notice i can
see project one over there so now i know i'm in the root of my project folder okay so either of those two options is
fine although the vs code inbuilt terminal is going to be much easier because by default when you open it up it's going to open
up in the root of your project folder so back to our installation code so we've got this npm
this i and then the post css so that post css is the name of the plugin that
we want to install on our project now that has to be exact so you typically want to copy that if you can so we'll
copy that code again just to make sure we've still got it copied and we'll come to our terminal we'll paste it in
and npm is actually clever enough to then set up this package.json file for us and also
creates a new folder called node underscore modules however if we quickly look at this it doesn't contain the
information that we will want for our finished version but it's installed this
post css package inside of this node module so if we expand that there's a folder now called post css and
these other folders you're looking at well these are dependencies that post css needs to run correctly so if we
expand this post css folder and then look inside the package.json scoot that
down there and then find the dependencies section so note that name dependencies right
let's go to our package.json dependencies so you're seeing a pattern there right nanoid picker colors source
maps and there you go nano picker colors and source maps now although it's installed this package for us like i
said we actually want a little bit more information inside of this now you can expand this yourself but if you've just
taken the steps we've taken you won't know of this so a better way to go about this is let's close this down what i
want you to do is delete that node modules folder for me and then let's also get rid of the package lock and package.json files so now we're back to
our assets folder and our index.html so what we can do here now is we can run a command called npm init so let's type
that inside of our console npm init now you could hit enter at this stage but it's then going to ask you a bunch of
boilerplate questions so instead we're passing the y flag just like that now hit enter
and now we've got that same package.json file however there's just a little bit more to it and one of the areas that
we're going to need is the script section so we can close that down now let's rerun our post css code so we'll
grab that npmi post css we'll hit enter and if we have a look at it there's our
dependency section now be aware there is a dependencies and a dev dependency
section and strictly speaking the dev dependencies is where you place your source codes in
other words your dev site the dependencies is where you place the stuff that you need on the live site
okay let's get our second package installed now so we need this post css cli installed so if we scroll down so
we'll copy this code you can just click on that icon right there and inside of our terminal again paste it in and we'll
hit enter and now we can go ahead and we can get the code set up to run our post css plugin now your first question
always as a developer when you're reading through these docs is well how am i going to use this in my project
right and you may start by going through the post css plugin the problem with that is that this is not aimed at using
it in a specific way this is our wrapper plugin so this could be used with with
gulp it could be used with veet it could be used with webpack so this isn't going to help us so your first go-to for what
we're doing right now should be to go to the post css cli package and if we have a look here
here's the usage that we need again for those of you that are not familiar with this inside of our package.json we have
this script setup and this allows us to run commands through our terminal by referencing
that value right there so if we wanted to run this setup right now we type npm run and then test so that
test coincides with whatever you've got there so let's do the same thing for our post css setup let's get rid of test
we'll call it post css then let's get rid of everything between our two quotation marks leave the quotation
marks and then let's go back to the docs so we can understand how we actually figure this out for ourselves so the
first thing we need is that post css right there so this is going to be our command okay and then we need to tell it
where it needs to look for in other words what file is it going to find our css because of course it's not going to
know then after that we need to tell it the output directory so there's the output right there so let's get that set up
right now so let's get our post css set up let's point it to the right file and then let's get the right output in place
however with the file structure we've got right now although this is fine for just a
plain html site we can now do a little bit better we can set up what's called a source folder now typically if you had a
build tool you'd have both a source and a dist and the dist would be effectively your go live files and the source that's
your dev code that's what you work on and then you compile it into that dist folder now because we're just doing this
all through npm and we're not going to do the full refactoring we don't need to set up a disk folder for this video but
let's set up a source folder so create a new folder for me call it src
now that name can be whatever you want but 99 of the time developers call it src and we'll leave the index
where it is and we'll leave this assets folder as well where it is but inside of source let's set up a new folder and i'm
going to call it pcss you don't need to call it pcss that's my way of telling
other developers this is post css you call you could call it styles you could call it css now inside of here let's
create a new file and i'm going to call it main dot pcss and again that pcss it
can be css as well but this is just once more my my way of letting other developers know hey this is post css
okay and inside of here let's just type in body background red right so let's save our
main.pcss let's go back to our package.json and let's finish off our command so we know we need post css so
let's get that out of the way so inside of the quotation marks post css and then we need to point it to the file so
this is going to be run from our root and we can go dot forward slash which means start from the directory we're in
right now and that's our root then we need to go to
srcpcssmain.pcss okay so src pcss and then main.pcss
so that takes care of our second one where we point it towards the actual input file
and now we can use either a dash o or a dash dash output to
tell it where it should output this file so let's do that next so we'll hit a space and then
dash dash output and then again just like we have with this over here we're going to start in the root where do we
want it to output so we'll go dash forward slash and we'll go assets and let's just expand this css and then
we'll just call it main.css as well so whereas that's main.pcss that's our
source code main.css since that's going to be for the browser now for now we're not
referencing that inside of our index.html we'll change that in a second let's just first see if our npn command
works correctly so save all your files for me and now what you have to do is inside your command run run npm
run and then that label name right there so i've called mind post css and hit enter and i
can see straight away inside of my assets css there's my main.css and indeed there's my body background red
perfect and so this is step one of setting up post css on a static or an
html site and now we're at a stage where we can include additional plugins and now at this stage you might be thinking
okay so additional plugins am i going to install them via npm just like we've installed these and the answer is yes
but then the next follow-up question should be is post css just going to automatically know about this do i pass
these plug-in values into here right if this is all new to you these are all questions you're probably gonna be asking yourself so the answer
is we need a configuration file post css has the ability for us to pass in config
options let's jump back to the docs to this post css cli page if we scroll down
after the usage there's the config section now if you have any experience with post css then you'll have known
that straight away and you can set up a config file in the javascript formats json there's a couple of other formats
as well i think let's stick with the javascript format so we need to create a file called postcss.config.js
in the root of our project and i'm just going to copy this for right now to make it slightly easier so back in our root
contract that so we'll create a new file post css.config
and we'll paste that in i'll get rid of this parser we're not going to cover that in this particular series and for
now i'm going to just leave the plugins as an empty array so that's all you should be left with let's save that let's rerun
our command so npm run post css and at this stage no errors if i have a look at
main we've still got our css so we are still good now and now we're in a position where we can start our refactoring so here's my question to you
as a fellow css developer you look at style.css and what's the first thing you
would change about it if you're thinking long-term maintenance if we're thinking the ability to extend the code to debug
it what would be right at the top of your list of things to do hopefully
if you ever look at a single style sheet with 2 000 lines of code where we have a
mixture of css vars and components and layouts you should be thinking partials
right now if you haven't taken my sas crash course be sure to do that because we're going to use that same 7 1 pattern
that i mentioned and go through inside of that course now the idea with this sort of pattern is that rather than
having a single large file you break your code up into smaller chunks and you organize those chunks
depending on what sort of file they are so this is just a recommendation you don't need to follow this the idea is that you
have some sort of base code and that would be say reset styles or normalized styles typography stuff like that you
have a component section so the button component that we're going to refactor that would go inside of there you have a
layout section so header footer stuff like that if you have any page specific
styles so homepage user account etc if you have a custom theme this is not
something i've ever used in any of my projects but i could see it happening say for a black friday sale etc your
abstracts is where we put any variables and mixins and stuff like that and then the vendors code is where you'd
put any third-party style sheets so if you installed say a slideshow plugin let's say swiper.js and that needed its
own styles you could place those styles inside of your vendor package
and what that means is you're then left with a main file that you go from having all of your css inside of it to that
simply being what's called your entry point and then you use your main file to simply import those
partials okay here's my challenge to you i want you to pause the video because i'm going to refactor style.css
and i'm going to set up the partials but remember we don't want to do this inside of our assets css folder this is where
we will through our post css build command place our main.css that's going to be our compiled
css so what i want you to do is this i want you to break up the code inside of
styles.css so this all of this that you can see in front of you right now and place it
inside of src pcss or whatever you've called your folder you may have called it assets you
may have called it styles any of those things and place it according to what you think based on this seven one
pattern you should have so for example let's do the first one here i would take
everything inside of this css vars i'll create a folder inside of here and i'll
call it abstracts inside of abstracts i'll create a new file and i would call this css
vars.pcss then i'll grab everything from styles where it says
base reset so that's going to be from line 36ish just copy that and i'll paste
that into css voice okay so that's the first file just so you're aware do that with the whole file
inside of assets css styles.css now those of you that aren't interested that just want to get on with
this inside of your resources you'll find a folder called project1-partials open that up that will be the finished
version that i'm about to do so you can simply drop those files into this project of yours and you don't
need to do the refactoring okay pause the video good luck okay and i'm back and for those of you that do want to
code along let's go through how i've put my code and i'll very quickly explain my thought process behind that so now if
you expand src pcss inside of that you'll find six further subfolders abstracts base components layout
utilities and vendors now if we have a look at our main.pcss so this is our main entry point i like to put a table
of contents right at the top i've placed the vendors files second because just in case any of it has any
generic styling that overrides hours i like to get the rest of my style sheets
after that so that my styles can override the vendor styles now the only order here that's important for me is
that you place your your utilities last and that way if you're looking to say add padding on the fly
if you've already added padding to say a component then at least your utility styles by coming last will be more
specific and that's what the browser will use all right so inside of abstracts i've already showed you this this is our css var section so we can
move on from that then inside of our vendors i have placed the payment icons
and the remix icon moving on we've got our base imports now there is a file in here that really shouldn't be done this
way and you know i didn't mention it before pausing this video so it's a good little challenge for you if
we have a quick look at it what's going on here is this is the compiled bootstrap code where i've used various
media queries so really this should have been broken up and huge bonus to you if you did actually
take the time to do that on a real world project i would do that for this video for what we're looking to achieve it
doesn't make sense for me to spend that extra time so i've just placed it all inside of this media dash queries but
strictly speaking this shouldn't be where it is and it shouldn't be called what it is we've got our base.pss which
is really just our reset styles and then we've got our typography right after our base we've got our layouts and inside of
that i've placed the container styles the grid styles and the navbar and that navbar could also be a component which
leads us onto our components so i found five components badge button card form and search and then lastly we come to
our utilities and if you've watched in my videos you know i'm very very pro utility for me
it doesn't make sense to write new css if the code that i need to style that element already exists so i have no
problem assigning 20 utility classes to an individual div or section element
if it means i don't have to write new css and remember in most of the cases whether it's a view project or a react
or even just a static html site the code for that particular component or element
should really only be in one place if it's not then certainly you want to create yourself a css component and
that's it that's my ordering so like i said one last time you can grab this from your resources you don't need to
type it out but that's what we now have so now we're in a position where we have to do one of two things either we have
to update our package.json and tell it to rename our file from main
to styles now i don't want to do that because i've actually left this code in place just in case i want to refer to it for this video so instead what i'm going
to do is inside of my index index.html right at the top of the page where we have our
css imports so that's line 21 i'm going to change that from styles to main we'll
save that let's refresh our front end which obviously will break our page and you should see something similar right
now now we can rerun our script so our npm run post css we'll let that compile and now at this
stage we're thinking we're going to be all good right because we've just used the css import rule so open up your
main.css scroll down and then you'll see this and you may be thinking well okay it's an imports statement you know the
browser should be fine with that but look closely at what's going on here it's looking for a folder called abstracts which doesn't exist it exists
in our source folder so really what we want is post css to take our main entry
point to see all of these import statements and convert that into normal
css for us so time for us to install two more plugins now once more look at the
description for this video and the first two we're going to install is this post css import and that's going
to give us the ability to have these import statements as we do in our main entry point but then in our
converted right or distributed version we'll have normal css and then this is
just a personal preference but i like to use underscores for my partial imports so we're going to install this postcss
partial import plugin and then we just need to pass in some configuration options and then we can use an
underscore right so let's grab the code right here npm i post css partial import let's get that installed in our command
and while that's running let's go to the other plugin as well so the post yes import and just scroll down to where you
see this import statement right there now be careful if you copy this some of them include that dollar sign so
if you see that dollar sign just manually highlights all of that from npm all the way through to the plugin name
copy it and again paste that into your command line and let's just make sure we've got the same thing so now inside of my
package.json and it doesn't matter if you're seeing dependencies or dev dependencies really this is still going to work for this
video so you should now see four packages post css post css cli post css import and post css partial import now
remember i said to you just a few minutes ago we need to tell post css to use these plugins so we're going to get
quite used to that by the end of this particular project let's open up our postcssconfig.js
and this is just a straightforward javascript file so all we need is this require post css import right
over there and likewise we need that same import statement but with the ability to pass in options so this is
something for us to look at now as well let's first get this set up though so back to our code editor
inside of our arrays for our plugins i'm just going to hit enter so it's a little bit neater let's paste in our first import now let's just make sure this
works let's save our changes and then let's just rerun our npm run post css command okay that's all gone through
fine for me and now if this has worked correctly and post css import is doing its job for us
then what we should see in asset css main.css there you go should be our
compiled or our normal css right and that means if we refresh our page in the front end
we are now back to where we were now i can see there are some spacing issues but honestly for what we're doing in
this particular course it doesn't matter to me so i want to stay focused on post css i'm not going to look into why that
looks slightly different okay so that's step one now step two like i said is a personal thing we've installed this
additional plugin which is going to allow us to use underscores on our partials
coming from a sas background i'm used to seeing and using underscores for partials
none of these have underscores right now now if you copied and pasted from the resource folder you would have seen
those underscores right so again you don't need to do all this you can just simply grab these from the resource
folder but i'm going to rename all of the partials inside of my src pss to use
underscores note we're not going to do this in our main our main is our main file that's not a partial but everything
else is going to use partials okay i'm done and let me quickly show you what you'll now see on your main.pcss
so where you previously just had the the file path there's going to be an underscore in front of the name
and in all of these folders and i'll just expand bases as an example the same file name but underscore in front of the
name underscore base underscore media queries underscore typography so now let's open up our postcss config.js
let's get the code pasted in for our second plugin okay don't forget the comma over there then the question
is well how do we pass in these configuration options because we want to use a prefix for our file names so if we
go back to our plugin page we've got this options section and what we want to do
is we're going to use this prefix over here so inside of our processes config we're going to pass those options in and
the way we're going to do it is the same for any of your post css plugins that you're going to be using okay so just
after your require statement another couple of brackets and then inside of that an object
and i'm i'm going to hit enter just to make it a little bit more readable and now we can simply reference whatever
these individual options are so in our case we want this prefix option and i'll paste that in right over there so now if
we save that and we rerun our code we should be good and we should now be done with our partials now i'm seeing this
warning in my console over here the site's still alone is fine for me and i don't see any error in the actual
output of our code so if you see the same thing i think we can move on this course is about learning post css
if you're used to npm then by now you're used to seeing a ton of warnings and messages inside of your terminal every
time you run a command okay so that wraps up the first goal of this exercise in this project is we wanted to split it
out into partials we want to see how post css can help us with that and we've got that now done and now it's time for
us to get some hands-on code experience right so far we've looked at post css running through the cli we've set up our
partials but now we want to see what can it do compared to sas now for us to make all of these amends we have to install a
whole bunch of post css plugins you can see them in front of you on the screen right now i want to talk you through
each of those one for one so what i want you to do is to go into your course resources open up the project one completed folder
then inside of that find the package.json and just either copy that entire file across or
copy and paste all the post css plugins from the dev dependencies section now when that's done
save your package.json and in your command line or in your terminal run npm install
now one last thing for us to do at this stage we're running our post css command each time right npm run post css but we
can pass in what's called the watch flag and there it is right there add that into your
package.json as well so dash dash watch now what this means is that when we run
npm run post css we won't have to run it again each time we make a change so in
the background post css will continue to watch a main.pcss file and any change we
make it's going to recompile our css for us so let's just make sure we haven't broken anything let's run npm run post
css and everything's looking good for me i'm still getting that warning but that's fine we can ignore that and let's just
make sure inside of assets css main.css we're still getting the correct css output which i am so that's great
okay time for us to tackle our coding so we're going to jump around now i want us to do a refactoring on the button i want
us to refactor a couple of utilities we're going to do a background we're also going to do the padding utility
but first we have to understand how we're going to do this and then at that stage too i'll just touch on each of
those plugins we've installed and how they're helping us so in the background i've installed bootstrap's
npm package and i just want to show you how they approach their buttons so our challenge here is to go from what we've
currently got which is just plain css and that means we've got css for btm primary we've got one for btn light
we've got one for btn success btn white so all of our different colors how do we
combine that all in as little code as possible so if we look at bootstrap what they are doing
roundabout line 56 of their underscore buttons.scss
they're running this what's called in each rule in sas it's in each loop and they're looping through this theme
colors sas map now that's inside of underscore variables.scss
that's roundaboutline81 so they've created a sas map and for those of you not familiar with sas i highly recommend
my sas crash course you can find a link in the description for this video but in short think of it like a
key and a value array so primary is the key and then it's referencing another
sas variable which is the hex color for this primary color so that's the first thing we have
to do if we want to replicate this in post css now we're going to do that with one of these plugins we've installed in
fact 2 actually we've got this post css each plugin and one last time
and one last time if you do want to read through any of these plugins i've put links to all of them inside of the
course description at the bottom of this video so these two plugins over here post css
each and post css each variables together they are going to allow us to
write code very similar to this so let's tackle some of the buttons right now now we're not going to do a complete
refactoring of the buttons for example we've got a color that really should differ depending on the background of
the button now i think that's way too advanced for this crash course for post css but certainly if you want to learn
then have a look at what plugins post css can offer you where you could figure out should it be a light color should it
be a dark color we've also got different sizes we've got btn sm which is the smaller version and btn lg which is the
larger version and again i don't want to cover that because by now i think there's very few people still watching
this video so i want to keep it short to the point and then i'll leave it to you to explore more so step one for us to do
this is we've got to set up our own theme colors css variable map so what i want you to do is to open up your css
vars file so that's for me inside of srcp css abstracts css virus and then
right at the bottom where we declare our root variables make sure it's still within the closing root tag i want you
to type that out right there dash dash theme dash colors dash map now remember we can only write this code and use it
the way we are because of the post css plugins we've installed now these values here bs primary be a success be a
secondary bs warning these are all default bootstrap css variables so you can see them all over here i haven't
made that up and the reason why i've decided to reference the css variable rather than the hex value
that's because if we ever change the hex value for bs primary then this automatically will reference that
updated value right so this is a more dynamic version okay so that's step one now we need to go into our button code
and let's just comment out all of our code right we'll just break it all so let's comment that out and then let's
run npm run post css i turned mine off if you've left yours running then that's
fine let's refresh our page and great so now buttons are broken right and we're expecting it okay so we're going to
uncomment what is effectively our base class now you could make this a a mixin
as well and post css does offer that to you but because i'm trying to keep this as simple as possible we're not going to
use the mixing plugin and again i'll leave that to you if you do want to do that so we'll uncomment our base class so this means
every button will inherit this class and then we can extend it now with the different colors so let's save that and
just make sure on the front end we do have a change yeah and you may not see it but there is now a change of some
padding being applied okay and now very similar to bootstrap's code using sas
we can now using post css write our own each and there's the code right there so each color and value in and then we're
referencing that var right that var is the one i just asked you to type out right over there now what this gives us
access to is effectively the key and the value and i'm calling the key color these two names here could be whatever
you want them to be and then this is according to these plugins we installed so we have to reference them in this way
now if you're used to sas you're you may be familiar with what's called interpolation but this is how this
plug-in requires us to use it and all i'm doing is setting the background and the border color for each of these
colors that we're passing in so here's what i want you to do now let's open up our main.pcss and let's comment out
everything by our buttons just so we can see the generated code okay so you should now have everything commented out
except our components button okay now the next thing we need to do is to tell post css to use our plugins obviously so
right now we've installed them they're inside of our package.json but they're not inside of post css so again you can
grab this from our finished folder or you could just or you could just type it from what you can see in front of you
but add that to your postcss.config.js and now let's just restart our post css
build process just to be safe so npm run post css be sure to have saved your pro
css file and now hopefully when we open up assets css main and of course it would help it would
help if we didn't comment out our abstracts silly me we need that because without that
our code isn't finding our css map that we set up so let's save that
now we should be good so i'm inside of asset css main.css and i'll scroll down so there's our button base class and
there you go so now we've got btn primary btn success btn secondary and btn warning and then really nice thing
about this right is if we go into our css vars now let's say we extend our
theme colors map and we bring in another color which is info and just so it's very clear to you
that's not a value i'm making up right that bs info that exists already right over there if you didn't want to use a
css variable then at the very least reference an actual color so all we have to do now for this is save this file and
if we go back to our main.css have a look at that there you go btn info now generated and of course the great thing
about this in terms of maintaining this code is if we go into our source code for our button we haven't written any
more code for that now the next thing we can handle while we're here in terms of trying to replicate our actual sas functionality is we can
use our nested functionality so the next plugin i got you to install inside of your package.json
is this post css nested and that does exactly what it sounds like it's going to allow us to nest our css code so
inside of the button just so that i can illustrate this to you all i'm going to do is add in
an ampersand hover and we'll lower the opacity to 0.5 okay and if we save that
and just have a look at what does that actually give us in our css file right so let's just have a look at that inside
of our main css file so we can just see what post css does and there you go so it strips it out of inside of our button
code because we've got this inside the button class strips it out it adds in the btn.hover as we need in front of it
for the selector to be correct and then it retains our actual property and our value okay so let's have a look at this
on the front now we should be back to where we were but the sizes should be off and of course it would help i keep
forgetting this it would help if we actually uncomment all of our input so let's do that now because i think you understand how post
css works okay i've uncommented everything so it's now back to the way it should be we'll save that and because
we added our dash dash watch flag remember we don't have to rerun our npm command so now if i refresh my page okay
and that's what i expected right so our buttons are back now the colors are correct we've got our hover style the
text color is off though because i haven't added that into our individual color variants so to fix that
for right now we can go into underscore button and all we can do is inside of our each
rule let's just add in color white now that's not going to work obviously for the lighter colored buttons but once
more i'll throw that to you as a challenge you can figure out the best way to handle that now let's do one of
our utilities and i've picked the background utility so we're going to open that up we've got bg primary success lights all of this looks
familiar right you're thinking well these are our theme colors now we may not have dark in our theme color but
we can add that in if you wanted to by simply opening up your css files and adding it in there i'm not going to do
it for the sake of this video instead all i'm going to do is go into our button.pcss
i'm going to copy this each rule we're going to background.pcss and right at the top i'm just going to
paste it in now we need each color value in our theme colors map but then we want to change this btn to bg so that'll give
us bg primary etc and then all we're going to do is replace background with
background color and that's it we're done we can now get rid of the rest of this code and now we've gone from 20 or 30 lines
down to literally six or seven lines if we save that and it's going to test this out on the front end now i don't think
we actually use this code but what we can do is if you open up your code inspector there's this dot cls
anyone who's watched my videos you've seen me use this over and over click on it you'll see this new field appear
called add new class when you start to type the code in there the browser is going to search through
our style sheet and if it finds anything it matches it'll return it so bg dash there you go and we've got primary
success etc and there's our bg primary and that then brings us on to our padding utility so what can post css
offer us to make this more dynamic well let's first understand how bootstrap approached their padding inside of their
utilities file they have what is part of their utilities api and entry for padding and
that references a spaces sas map so again we go to our variables file and there's actually two values we need here
first they set a default space of value and then inside of their spaces map from
zero through five they're using that value and then multiplying it by different values so
the problem here for us is we can't replicate this exactly i can't find anything that gives us the
ability to query a value so a map get for example there
is a map get post css plugin but it doesn't work the way we need it to so instead here's my solution open up your
css files and type those out over there or just grab it from the finished folder we're going to set up our own spacer
value so that there is the equivalence of bootstrap's spacer value right there and then instead of
setting up a map i'm just setting up individual values but i'm just going from one through to five and i'm using
that same multiplication value next let's open up our padding file now i'm
only going to show you how to do full padding in other words padding top bottom left and right so if you wanted
to deal with padding left and right you'd have to come up with your own solution for that so all i'm going to do
is remove anything that's the full padding so that padding 4 i'll leave padding 0 since i'm not
covering that in my for loop x x can stay y y can stay
and by the way if you're wondering where all those other values are i ran purge css on this just to
to keep the css as little as possible for this video so i don't think we have any other padding values great okay so
just above our p 0 i'm going to paste in my 4 code and let me talk you through what's going on here so the first thing
we're going to do is use one of our post css plugins which gives us access to this four rule or for loop if you will
that gives us access to a variable which i'm calling i because that's usually what people call it when they
use these sorts of loops and i want to go from one through to five so that means it's going to run five times the
first time i is going to be one second time i is going to be 2 3 4 and all the way to 5. so if you wanted to
run it 10 times you do that right and then i'm just using a css calc function
to figure out what that padding should be so first i'm pulling in our theme spacer and that value is our one rem
right there and then i'm multiplying it by whatever multiplier value we need so
i'm referencing a css var called theme dash spacer that's multiplier dash and then i'm
passing in the dynamic i value from there okay so this value right here
depending on what it is one two three four five that's going to be one of these ones over here so there's our
dynamic value that we need to pass in so let's save that and let's look at it in our finished code so i'll save it and
inside of our main.css we can see correctly p1 all the way through to p5
and as we it to it's now referencing so in other words that placeholder right there that's been
replaced with the correct one two three where it corresponds with the same value there and what that means on the front
end if we refresh our page to the section i'll just add in p5 and there it
is right there referencing our two css custom properties or variables if you will and if you hover over the padding
you can see in our browser the actual padding itself okay so you can take this
further by all means you can figure out well how would you do padding how would you do margin and you could really cut
down your code base size by using post css so the last thing i now want us to look at before we wrap up this first
project is how post css can help us make our media queries more dynamic if we
look at our media query file and the one i'm going to open is the one in base that i just put everything inside of
media dash queries how do we make this more dynamic now if you don't know you can't use a css custom property inside
of your media query so you might be thinking you could have done something like this now i haven't scoped this to
anything but just to illustrate this and then you would perhaps do something like this you can't do that that's not going
to work but because we're using post css we can get something similar to this and
the reason why we don't want to hard code 992 here is because if we change that we want it to be
changed in one place but then to take effect wherever we're referencing that value and once more we're going to
do this with one of the packages or plugins i got you to install a few minutes ago and that's called
post css custom dash media now ideally it would allow us to reference a css
variable it doesn't though have a look in front of you there this is what we need to do so let's copy that and let's
paste it inside of our own css variables file just so we can get an understanding of what what it is we need to do so we
need to set up our own custom media values and we can create as many of these as we want so if i call
this lg and i change that to be that 992 value
and note i'm placing it outside of my root declaration now all i need to do is to copy this
value right here and where we have our media section so we go to our media queries i'll replace min width with that
lg viewpoint okay and then i'm just going to delete this media query right here and in fact i'm going to change
this just to make sure we can find this easily in our main.css i'm going to make this 5000 pixels
right and again the nice thing is i don't need to go in here now and update it over here right and if we use this in
10 or 20 different media queries we're updating it in one place so let's save that i'm going to open up our main.css
and i'll do a search for that 5000 and there you go now we have dynamic media
queries so that wraps up everything that i'd like to show you for this first project hopefully you have a good
understanding of how you can use post css in your own project if for whatever reason you didn't want to use sas
however a much more common use case for post css is to use it to prepare your styles for production and that's what
we're going to do with project number two so back to your resources open up project 2 in your vs code or your code
editor and you should see something similar to what you can see in front of you now it doesn't matter what we're going to be working with here i don't
want to get sidetracked but in short we've got ourselves a project that's been built with gulp we've got bootstrap
implemented and all we have is a single index.html so first we need to run a couple of commands here so open up your
terminal and run npm install now when that's done run gulp for me nothing else hit enter
now if you don't see any errors then you should see this dist folder if you expand that inside of that we've got
this index.html and an assets folder so let's get our index.html opened up in our browser and hopefully you're seeing
the same it's just a bog standard bootstrap 5 template now for this particular project of ours the styling
the actual content doesn't matter let's have a look at what we get by default when we run our gulp command so inside
of our disk folder if we were to put this live we've got an app.css that has around
about 10 000 lines of code right for a one-page site that's pretty extreme and
if we look at the size we've got 207 kilobytes so imagine as this project
grows quickly we'll have ourselves a one megabyte monster css file and this is
where post css can help us so we're going to install two plugins in the remainder of this course first we're
going to install a purge css plugin now what purge css will do is it'll go
through our html files and it'll only retain the css that it can see as used
in those html files and the second plugin we're going to install is called css nano now there are many different
options here there's a gold specific option which doesn't need post css at all but this is one we're going to take
and css nano is going to minify our css to make sure that it's as compact or as
optimized as possible we're doing this through gulp so we also need to install a third plug-in which we're going to do
first and that's our gulp post css integration now unfortunately this is build tool specific so if your tool is
parcel or if it's veets or if it's webpack this won't relate to you but it's typically not that difficult to get
post css integrated with your build tool then once you've got that done you simply refer to your config file just
like we did in our first project so with that said let's go ahead now and get these three packages installed on the
gold post css right at the top of the page you can simply copy all of that code again if you're gonna copy there
just be careful it might include that dollar sign so run this code in your terminal now while that's running let's
go to our second plugin let's grab this code right over here and let's run that in our terminal and then let's go
to the last one the css nano and again grab that code right there and let's run that too okay when that's done in the
root of your folder so if you have a look on the left hand side here create the typical postcss dot
config.js and for now just a module dot exports with your empty plugins array inside of that you
can leave that file open open up your gulp file dot right at the top of your gold file where
all of these various imports are add this post css import to your file and
just be sure that there isn't a semicolon closing off the browsersync import line so make sure there's a comma there semicolon over there so all we'll
do is we'll refer to this gold post css file and we just need one line we need to add this pipe post css to our css
build command so let's copy that line right there and i'll direct you to the exact place so scroll down to where
run about line 60 where you see gulp task scss and just before this auto
prefixer create a new line and paste that line in that we've just copied from the plugin page so pipe and post css
inside of it and that's it that's how easy it is to integrate post css with your gulp build tool so we're done now
with gold we can save this and we can close down our gold file let's rerun gulp in our command line just to make
sure we're still creating our css file and inside of just assets css app css if
you're still seeing your css roughly 10 358 lines then we're all good just to be
safe i'm going to reload the front end of our page and i'm still seeing the same styling great okay so now we can
start using our post css plugins so the first thing we want to do is let's get our purge css setup and
let's see what difference it makes how many lines does it chop off for us so let's refer to the plugin documentation
for that so here's their setup slightly different towers but it doesn't matter we've already covered this in our first
video we'll take the same approach so we need to call purge.css and then inside
of our options section we've got this content value and that's where we're telling purge.css to go and look for our
html files so let's open up our postcss config inside of our array we'll hit enter we'll go require
then we can just copy the full name so they they're using a require there and then they assigning it to a variable
called purge.css we're just going to copy that full value right there we'll paste it in and then we can pass our
options in by doing that as we did in our first video we'll have our object and i'm going to
make it neater and hit enter and now it's straightforward now we need that content and that's going to be an array and
inside of that we'll just tell it to look for all the html files it can find okay just
keep it nice and simple for this video in an actual project though you'd probably have to be a little bit more specific you're probably going to have to point it towards your js files as
well but for what we're doing in this course this will do fine okay let's say that and then in your terminal let's
rerun gulp all right let's see what difference this has made for us now so inside of dist assets css app look at that
1534 lines now so it's lobbed off eight and a half thousand lines of code so if
this is all new to you you can see just how important it is that you run a tool like purge.css on your production site
and let's check out the size so let's go into our folder 29 kilobytes amazing
okay we're not done yet though now let's set up our css nano so inside of our post css config and there's no options
to pass in here so just enter a comma once there hit enter and go require css
nano and we'll save that and for one last time let's rerun gulp now if we look at our css file now we've got what
is minified css and we've checked the size out we've got it down to 23 kilobytes from what
210 kilobytes okay so the last thing for us to do to wrap up this course is let's just make sure we haven't broken our
sites we'll reload the page and there you go a 23 kilobyte style sheet working just as good as the 210 kilobyte monster
we had before and that wraps up our post css crash course i hope you enjoyed the
content if you have like and subscribe and be sure to check out my post css
playlist because i'll be uploading a whole bunch of videos around various topics for post css
you
