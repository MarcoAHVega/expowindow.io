# Sass Crash Course

https://youtu.be/BEdCOvJ5RY4

sas is a powerful css pre-processor that can help you maintain large css code
bases in this mini crash course we'll take an existing one-page plain css site
and we'll refactor it to you sas and in doing so i'll teach you all the basics that you need to know to start using sas
in your applications my name is rob i run a site called pixel rockets and i really want my courses to be hands-on so
have a look in the description below i've put a link to a repository where you can download the starting files for
this course okay let's start off by getting the setup on our own computer so from this repository either you can
clone it if you're comfortable with gits or those of you that aren't comfortable simply click on that code button
and click on download zip then take that zip folder unzip it and place it anywhere on your computer for me it's on
my desktop already now just make sure that you have no spaces in the folder name with that done open up this folder
with your code editor and for me that's going to be vs code with that done what you should see is a css folder that
currently contains a single file called main.css an images folder you may or may
not see the git ignore file there'll be a favicon a readme and index.html
open up this index.html with your browser i'm using the brave browser and
this is what you should see in front of you so what we have here is just a straightforward single page site
coded in plain css or styled and plain css and inside of our css file we've got
roundabouts 461 lines no real organization there's a couple of
comments but everything's just been bombed into a single file so our job now is to look at how sas can help us to
make this more maintainable and easier for us to make modifications so what is sas well sas is a css pre-processor now
if you've done any sort of research you've heard that line over and over and over right sas is a css preprocessor but
what does that actually mean if you're trying to use it in your projects it means it can't run in the browser and it
means that whatever you write assess needs to be compiled into css now that's
typically handled either by a build process or at the very most basic level you could
use an extension inside of your code editor and we'll take both of those steps in this mini course now important
thing to note about sas is that it's css compatible with all versions of css now that might not sound like a big thing to
you but in a real world scenario when you're working on professional projects you very often work with what's called
legacy code so the the change from watching videos on youtube and udemy
where everything's cutting edge to suddenly working with a code base that's say 10 years old that's a huge change so
where you have a tool like sas you know that whatever you write will be compiled into valid css and that's a big plus for
you okay so so far so good but i've still not told you how does sas actually help you well let's take this example
we've got in front of us here this main.css sas allows us to use what's called partials so straight away we can
split out what is a 400 line single file into multiple smaller chunks and what
that means is that if there are more team members they can easily find say just the button code right now if i
wanted to make a change to the buttons i'd have to come in here and find the section and it's quite typical on older sites
where the css is written top to bottom to have some button code around line 200 some more button code around line 500
and that's just not very manageable so that's the first point partials the second point is
we can remove code repetition by using a combination of sas variables sas mixins
sas maps sas lists sas functions all of these things we'll explore in this course so an example of how that would
work is where we have a particular hex value right now if i wanted to change that hex value if
it's represented in more than one place say we've used it for the
the button color the text color i'd have to do a search and replace in my vs code which is not an efficient way
to do it so by using a sas variable we can have that hex value in a single
place and then we can simply reference that value throughout our css and then when our
compiler comes along it finds that reference and it replaces it with the value for that variable so by using all
of these things sas variables mixes functions the end result is that you can achieve
more compiled css by writing less source code and the less source code you have
the easier it is for you to maintain that code and the quicker you're going to get your projects done now you may be
thinking it's 2022 is still relevant well i would argue that it is even for a
new project starting today however what you need to understand is when you
go into the real world when you start working on real-world projects you're not working most the time with
cutting-edge projects that are built today you will do but you'll also work with a lot of legacy code projects so
what that means is you'll have a lot of customers that will be looking to use your services where they have a code
base that sas is an integral part and of course frameworks like bootstrap
which if you're not familiar with bootstrap it's the world's most popular front-end framework that uses sas
heavily and as long as they continue to use it you should learn sas okay so with that out of the way how do we write sas
well the first thing to decide is how you're going to name your files sas supports two different syntaxes dot scss
and dot sass and this may be confusing for you if you're just learning what's the difference are they both sas in
short yes the main difference that we need to touch on is how you write it the scss version and
that's what 99 of the tutorials out there including this one of mine use
looks like css so it's more popular with people who already know css because you can just write normal css but include
the additional functionality from sas on the other hand the dot sass version the
original sas that looks a lot like stylus so if you have a look at it here there's no brackets there's no
semicolons it's a strip back version so we'll be sticking to scss because it's just more user friendly in this course
the next thing we need to look at is how do we compile our sas now we're going to take both options in this course first
we'll take the easier option where we'll just use a vs code extension then after that we'll use a bundler and i've chosen
parcel because i think it's the easiest for beginners now the plug-in is a simple straightforward option that
allows you to very quickly get your sas compiled but for me a better option is to use a
bundler or a build tool and we'll look at that after this plug-in one so first let's get the plug-in installed so i'm
back in vs code now if you're not using vs code if you're using something else you're going to have to look for an
equivalent plugin now inside of vs code click on that little extensions icon right there for me and type in sas the
one i'm going to use is called what is that hero sass less stylus plug j typescript
javascript compile hero pro and it doesn't really matter what version you're using as long as it's
still available if you're watching this a year or two down the line now you may have to restart vs code
typically it'll warn you if you have to it hasn't so far so we should be good now what these plugins tend to do is
they have configuration options i don't want to get into that because we're only going to use it right now so
that you're aware of this as an option for you so you can set it to output your
compiled css in a different directory this is probably going to output to something like dist inside the same
folder as our sas file now at the moment we've just got a css extension so the next thing we need to do click on the
top left explorer icon there for me and then rename your main.css to be
main.scss
inside of your index.html we're going to need to point this to the compiled version so we'll leave it open
for right now we'll go back into our main.scss you should now see this compile hero it may say off to you if it
does say off click on it so that it says on if you're not seeing compile hero
quit vs code and restart it okay let's write ourselves some sas and to begin
with we're going to assign a color to a variable and then we'll assign that variable as our background color for our
body so when you write sas variables you start off with a dollar sign and then the variable name now in terms of naming
i keep my variables simple i use dashes where i have multiple names so something
like that but be aware there's no difference between the dash and the underscore sas treats that as the same
thing so if you wanted to have that in one instance and then later in your document you did that you're going to
run into trouble okay let's give it a value of red now sas variables can hold any valid css value
as its value and then in addition to that can also hold some sas specific values things like booleans maps lists
we'll get into that shortly for now let's just make our body the background of our sas variable now
what's going to happen is when our sas is compiled the compiler is going to find this reference here now right now
that's obviously not working because i've just changed that so let me go back to that it's going to find this reference it's going to look at the
value and it'll place that value effectively there so when you look at a compiled
file this is going to be gone so it's not like a css variable or a css custom
property if you will where that remains in place the sas variable gets replaced
with its actual value in your compiled css so that's an important concept those
of you that are completely new to frontend web development you now have a source file which is our main.scss
and then we're going to have a compiled file typically that's inside of what's called a dist folder
that's the version you put on your go live or your production sites and that's
the compiled version right so again make sure compile hero is set to on and then we'll hit save so straight away now i'm
seeing this new dist folder and if i expand it have a look at main.scss
notice now our variable is gone so that's entirely been removed and where we've assigned our background variable
to the background for our body that's been output as plain css okay so
let's jump into our index.html right now this is pointing to css forward slash main.css and that doesn't exist anymore
so now we've got css dist main dot css so just add dist in there with another
forward slash okay save all your changes and let's refresh our home page in our
browser and there you go there's our background red now now the reason why we've got this gray is this sits over
the background now if i right click anywhere on this page and click inspect that's going to open up your code
inspector and if you're not familiar with this here's where you can see what styling is being applied to your various
elements so if i scroll up and i click on that body element here's the css and i can scroll down and somewhere here
there it is there it gives you the line number so it's telling you this is main.css
line number two let's just go and have a look at that so it's clear to you so there's our main.css line number two
that's where you can find that code and that's our background red and that's
it that's it for using just a plugin and if you have a project where you're not looking to set up a build process this
is quick and it's easy but as i've said in my opinion this is not the right way to go about it in a real
world project you're going to have javascript dependencies you may install other npm packages and you need
something to manage that process for you so typically people will use build tools now some of the phrases you may have
heard will be webpack gulp and parcel which to me is the easiest
and that's the version we're going to use and it's super straightforward let me show you how we do that so let's go back to our
code editor i'm going to close down all of my files i'm going to delete this disk folder we no longer need it
we can leave this as main.scss that's fine so for us to use a build tool we
need to use npm npm is node's package manager and
npm revolves around a package.json file so fire up your terminal for me and you can
do that by clicking on terminal new terminal that's going to open up your terminal inside of your root folder so
that right there core says basic start that should match the folder name you see
inside top left now type out npm space init space dash y that dash y
you don't need but it just suppresses a whole bunch of boilerplate questions that node will ask you when it sets up
your package.json for you hit enter and now we can see a new file there package.json i'll make this a little bit
smaller and if we click into it most of this we can ignore we are going to change this main over
here and we'll be working with this script section so what's going to happen now is this as we install npm packages
node will use this package.json to manage our dependencies now what that means is when you run npm install
it comes into this package.json it looks inside of a couple of dependency
sections you'll see names like peer dependencies dev dependencies or dependencies and it then looks for those
packages in the node repository if it finds them it installs them locally in
our project inside a folder called node underscore modules now we don't have
that folded as you can see we nothing exists so the moment we install our first package
it will create that node underscore modules folder for us so let's get parcel installed so we can see what
changes it makes to our package.json now open up parceljs.org
click on get started then from the left click on web app and there's your install code right there now the
important part here is this dash dash save dev that's going to tell npm
place this inside of dev dependencies if we didn't include that it would go inside of the dependencies now the
difference between dev dependencies and dependencies is the difference between your source folder and your dist folder
now right now we don't have either we just have everything inside of our root so we're going to make some changes very
shortly to that too so let's copy that code over here you can just type it in npm install
save dash dev space parcel paste that in and let that run okay once that's compiled let's have a
look at what's changed now inside of our package.json so there we can now see our
new dev dependencies section now you may or may not see that same version that doesn't particularly matter in addition
inside of our root we now also have this node underscore modules folder and if we
expand it although we will see a ton of other stuff which is beyond the scope of this short course there is going to be a
folder named the same as that entry right there so parcel so we can scroll
down and we will find it right there so now we need to make some changes to our file structure now this dot vs code you
may or may not see i have a feeling that's come from the plugin we used a few minutes ago so i'm going to delete
that inside of your root i want you to create a new folder for me and call it src now
this is the typical name for a build process where you have a source folder and you have a dist folder now we don't
create this folder parcel will create that for us and with most build tools that's the case okay so now let's expand
src and drag images and css into src
and likewise drag your index into src as well
then grab index.html and favicon.png
and drag that into src as well so when that's finished you should have your node underscore modules folder your src
folder and then you may or may not see git ignore doesn't matter and you'll have package lock package and a readme file
we can ignore all of those if you expand src you should see a css folder which at the
moment contains main.scss an images folder our favicon
and our index okay let's open up our index now the next thing we need to do is update the reference to our css file
right now this is pointing to the dist folder that the plugin was outputting for us when you're using
parcel you actually point to the scss file and it will replace the reference
to the scss with the reference to the compiled css so get rid of that current reference there
and we'll go dot forward slash css main.css
now for parcel to work properly we do need to also insert a javascript file even though we're not going to write any
javascript in this course so inside of src create a new folder for me call it js
then inside of that js folder create a new file and just call it main.js we can
leave it blank for now and scroll to the bottom just before the closing body tag and we're going to insert a reference to
that script now now if you're using vs code you can simply type in script and then select the src version we'll do
exactly the same as we did with css so dot forward slash this time we'll select js and then main.js now one last thing
we do need to do for parcel to work correctly we also need to add in this type module
if we don't have that my experiences hot module reload doesn't work correctly so
just next to that script there we'll hit enter once so there's a space and type in or paste in type equals module okay
save your index let's go back to our package.json so what we need to do now is tell parcel where the entry point is
typically with bundlers you point it to your index most cases index.js but in our case
index.html and that's what's called the entry point for the bundler so with parcel we can use we can change this
main to say source and we'll update index to be dot forward slash src index.html
then inside of our scripts tag let's change test to say dev get rid of
everything between the double quotation marks but leave the double quotation marks and just type in parcel now if you
didn't take this option with source if you did that then you'd have to point it towards
your index file inside of this parcel command here now what you're looking at here with the script section is the
ability for us to call these commands inside of our console and you do that by
running npm run and then the name that you've got there in brackets so npm run
dev npm run build etc okay save your package.json and let's open up our
terminal and now all we have to do is npm
run dev okay with that done if you're inside of a mac you can hold in command and click on that link i'm guessing in
windows it's probably going to be control and that opens up our site now so we can close down the version we had
previously open and you should see localhost colon1234
one of the benefits of using a build tool is that we now have what's called hot module reload this means parcel is
watching our files for us and when we make a change it'll reload the site for us without us having to manually reload
the browser let me show you how that works i'll just scoot that across i'll open up the index file and let me find
this join text over here okay so i'm just going to add in one line over there
and there you go instantly changed and the same goes for our css if we open up our main css
and we change this background color to be say blue we'll save our changes and instantly it
changes and now we set up and how easy was that right five minutes and we've got parcel installed and
more importantly parcel now creates this dist folder for us now right now this is in dev mode so if you wanted to
use this code on a site you would run the build command we don't need to get into that for this course we want to
focus on sas so i'm going to draw a line here with parcel and move on and focus on sas now and that means we can now
look at how sas can make our lives easier i've got main.scss open you may or may
not still have the test sas we had written previously you can remove that if you do and the first thing we can
talk about is sas partials so sas partials allow us to store our css or
our sas in smaller chunks and the idea is that you group those together by the type of
code it is so for example we take all the button code and we create a partial called buttons.scss
now creating a sas partial is straightforward inside of our css file let's create a new file called
underscore that's the first thing to point out all of your partials start with an underscore buttons dot s css and
now we need to hunt down our button code so for me line 118 i've put a comment in
here here's where the button starts and it looks like it goes all the way down to 178 so i'm going to copy all of that
code
i'll remove it from my css file and i'll paste it into my underscore buttons dot s css
by the way our folder is called css strictly speaking i'd probably rename that to scss but given that this is a
crash course i'm just going to leave that as css for now okay so if we save our changes and for now just save our
changes to our main.css and we look at our site in the front end obviously we've lost the styling for the buttons
so now we need to get our partial into our main.s css now we can do that in one
of two ways we can use add imports or we can use at use now i want us to start
off with ad import first because although sas and anyone else teaching
you sas will tell you use at use it's not as straightforward as that again
we've got an issue here with legacy code you may not know what build tools the code bases you're going to work with
have in place and older compilers don't support using at use to import your sas partials
or you may work with bootstrap and if you have a look at bootstrap they still use at import and again that's because
not all the build tools support ad use now the key difference between at import and at use
is when you import a sas partial using import anything that comes after that file has
access to all the preceding files so in other words whatever you import is available globally now that has some
pros and cons but it has some particularly nice pros for me because it means i can have a single file
import my variables at the top of that file and then where i import any further files i know i've got access to the
variables coming from my variable file when you use at use it doesn't work that way so let's get
our buttons imported so we'll do the add import first
now note you don't need the file extension nor do you need the underscore there okay so if we save our changes our
buttons will now be back from the front end great make sure you've got the same now
let me illustrate the issue with at use versus at import let's create a new file
inside of our css folder we'll call it underscore variables dot s css i want to replace
the background color with a sas variable so right at the top for me background color we'll grab
ff595e so let's jump into our variables file and for now we'll just call it
btn-background paste that hex value in
now we'll reference it inside of our buttons and we'll save our changes now actually before we save our changes open
up the terminal now if you click on new terminal by the way what it'll do
is it'll open up that new terminal but you can toggle between your two terminals right so with this running now
at this stage we're going to run into a problem right because we've yet to import our variables so let's save our changes and sure enough inside of our
terminal we've got undefined variable now the reason why i want you to see this is because we're going to run into this
issue with at user as well so let's fix this using the at import and what has to
happen as i've already explained is we've got to first import our variables before our buttons so typically on older
systems using the add imports method you'll see your variables right at the top of the page
and now everything works great and on the front end we've got our buttons back
and now let's change to at use
so you may be thinking well this should still work fine right we'll save our changes and we're running into that same
issue again so what's going on here well the way use works we only have access to
the contents of this file inside of main.scss so that means buttons doesn't have
access to variables so for us to get variables to work we now have to import it in every file that we want to use
those variables so let's do that let's get rid of it from main.scss we'll jump into buttons and right at the
top we'll paste it in now we're thinking we're good to go we're not but let's have a look we'll save our changes and
we still can't use it why is that well that comes down to how sas now treats these variables when you
use at use they're now available under what's called a namespace and that namespace by default is simply your file
name so that means we now have to use variables dots and
then we can still reference the variable name note you don't need a dollar sign in front of that variables it's purely
the namespace now what i found working with build tools is when you make changes like this you generally have to
quit your build tool and restart it so let's save our buttons i'm not expecting it to work in the console and it doesn't
at the stage so on a mac it's control c to quit the dev server and then npm run
dev to restart it and now it works but here's the thing having written sas for the last four
five six years i didn't enjoy when i don't enjoy using this format right here
i prefer that there and you can still do that what you need to do with your import is
just add on as star now we'll save our changes but it may or may not work so
just to be safe ctrl c and then npm run dev and everything is still good now last thing to point out
about this at use statement is you can also give it a custom namespace if you
want now we can go ahead and we can finish up the rest of our main partials so inside of css let's create one for
our reset styles create a new file i'll call it underscore reset dot scss and
i'm going to grab everything from this line 3 let me see where it goes down to to line 75 for me we'll paste that into
reset save our changes we'll jump back into main and we'll use at
use
we'll get our reset imported and let's have a look on the front end make sure we haven't broken anything
great everything's working for me okay next up we've got our typography so again we'll just follow the same principle inside of our css we'll create
a new file called typography.scss and then we'll go down to
line 47 for me where the navbar starts so copy all of that you should be left with navbar in your
main css and paste that into typography save it
back in main let's copy that imports and let's change reset to typography
we'll save that everything's running good so so far so good let's just refresh our page just to make sure great
but here's the problem right maybe you're already thinking we're just going from top to bottom and what if we had
a hundred partials there's no real grouping going on here so the question is is there some sort of grouping
pattern that we can use and the answer is yes the one i tend to base mine on
is the sas 71 pattern now mine is slightly different to this but it's
close enough we start off with the base folder and inside of base we'll put things like resets typography or any
general styles that apply to the entire site then we have a components folder
and for me working with things like bootstrap and tailwind this components folder gets the most use so anything
like buttons navbars accordions that all goes inside of components then you have
a layouts folder so that could be things related to containers footers headers
the pages and themes would be specific to a site so in other words you may have a home page only styling or for your
theme you may have a christmas sale theme then we've got our abstracts folder and inside of here we'll have our
mixins our variables our css variables any functions and that's the one we need to make sure
we can import into any of our sub files where we want to use the variables etc
then we have a vendors folder and this would be any styles where we're going to be importing npm styles or
where we want to add additional custom css for those npm packages and then you
import all of these folders or files on your main.css so you end up with a
main.scss that doesn't contain any custom css code it only contains imports
from all of these other files or folders now the one missing from here that i do use very heavily is utilities
especially again looking at something like tailwind or even bootstrap with the utility api
i tend to place a lot of my partials inside of there so let's get our partials set up now and then we can
group them via these different folders i think the best way to do this is this let's create each
of these as separate partials let's not worry about grouping and then we'll look at what we have and based on what the
seven one pattern recommends we'll create the folders we need there's obviously no need to create a folder if you're not going to have any partials
inside of it so next up we've got our navbar so we'll create a new file called underscore navbar.scss
and then back in main we want to grab everything down to
line 41 where the hero code starts
okay we'll save that we'll get that imported
now what i'm going to do at this stage so you don't just watch me do all of this i'll fast forward to where i've imported all of these and i'm going to
simply go based on what the css comment is so you can look at my finished version and you can follow along if you
want that's it i'm back and i am done and this is what i've ended up with one thing to point out is i couldn't call my
main css code main since we already use a main so i've just called it layout
that's the code right there if you called yours main obviously we've already got a main so just rename it so let's follow the sas71
pattern so inside of our css folder we're going to create a new folder we know we're going to have abstracts we
don't have that yet we're going to do that next so let's create that folder will we have a base well we've got reset
and we've got typography so absolutely we'll have a base we have components we've got navbar we've got hero we've
got reasons definitely we'll have that so let's create a new folder called components we're going to have layout
since we've already got layout and we've got a footer as well now strictly speaking is the footer a component or is
it part of your layout i'd say go with whatever you prefer at this stage we don't have any npm
packages so we won't create one for vendors and we don't have any utilities and we won't be covering that
in this course all right so with that done let's drag buttons into components
let's drag footer into layout hero into components
layout into layout we'll drag navbar into components
typography goes into base reset goes into base
and variables go straight into abstracts so what you should be left with by the end of it is a css folder that contains
four further subfolders abstracts base components and layouts all lowercase no
spaces no underscores you should also have a main.scss file which at the
moment is looking for buttons reset typography navbar hero layout reasons and footer
and we're going to change that very soon so there's no need for us to import our abstracts on this main because as i've
already pointed out using at use it's no good to us so we'll import that in each
of the files where we want to use variables or mixins now for this course it's only going to be buttons now one of
the things i like to do in my own main css is to have what's called a table of contents it might not seem particularly
helpful to you where we only have seven imports but again think a large project where there may be a hundred imports it
gives any new developers just a quick overview of how our main is structured so what i'll
do is right at the top of the page and create some comments and i'll just type it out here and you can decide for yourself if this is something you do
want to use
so we'll start off with our base imports
then we'll do our components
and then we'll do our layouts all right let's get ourselves set up now with our base imports for that we need to grab
reset and typography so we'll bring those two up and paste them in there now we just need to add in base to the
import statement
okay next up we'll do our components
and inside of that we've got buttons hero navbar and reasons so buttons navbar hero and then layout i'll move
down to the footer and we'll set that up as well which will be our layouts imports
okay we'll add components into the import statements for each of these and then likewise we'll add layouts we'll
add allow to the import statement for each of these
and that's it let me make this more readable for you so there's my full file right at the top
i've got a very brief table of contents get rid of those spaces followed by my base imports
then my components imports and lastly my layout imports
okay let's save our changes and see if we have any errors and of course we do because now the
import statement to our variables inside of buttons is no longer correct so let's go and fix that
okay so dot dot forward slash is telling our compiler go up one level so right
now we're inside of buttons which is inside of a folder called components so we need to go up one level so that gets
us back into css then go into a folder called abstracts so there it is there and then find a
file called variables now again we probably need to restart our parcel so ctrl c npm run dev
we're all good and let's just refresh our page on the front end make sure of that i'm not seeing any issues great hopefully you've
got the same and now what we're left with is instead of a file that was four 500 lines long of css we've now got
neat modular partials that allows us to quickly make changes if we want to make changes to say the typography
looking at what we've got here we know straight away there's our typography and to me that's a lot more manageable with
our partials now all organized let's start digging into what sas variables are lists maps booleans etc so sas
variables as we've already seen can hold any valid css variable i'm going to go
into abstracts variables and here's our one from a few minutes ago now in addition to css values they can also
hold numbers so we could put that right there
they can hold booleans so true or false they can hold nulls as well
and then they can also hold lists
now sas lists are exactly what you see in front of you here they are separated
by a common separator so in this case it's a space but it could be a comma
could be a forward slash as long as you're consistent with your separator and they can also hold what's called sas maps
which are think of them as arrays so you have a key and you have a value so here's the key in this case is zero
and the value would be one rem now in the background i've installed bootstrap as a dependency of this
project of mine you don't need to do that but just be aware it's inside of the package.json i want to show you how
bootstrap uses their variables so i'm going to expand node modules i'm going to go down to bootstrap
i'll expand that then i'll expand the scss and i'll find underscore variables
so if you're new to bootstrap this underscore variables file this is what allows you to do all the customization
if you've set up bootstrap correctly so that you can customize the success and right at the top here here we have their
color palette stuff so we've got whites we've got a gray color palette and these are all standard css values and we've
got more color palette stuff with the other colors and then we run into our first sas map so they set up a sas map
for their colors but they also set up sas map for their theme colors so instead of using say
red as the main color they call it primary and then they reference another
sas variable called primary which that in itself references blue and that just makes it much easier for
you when you're customizing bootstrap to change your primary color from blue to red and that's a much better naming
convention because if you call your primary color blue and then decide to change to red either you have a variable
that doesn't make sense or you need to go and update that variable from blue to red so much better to use this structure
primary secondary success etc and then you can change it to whatever you want they also use booleans behind the scenes
so they have this enable disable section where you can enable rounded borders shadows gradients and
based on whether the value is true or false they then run further sas functionality so let's look at how we
could use bootstrap's approach in our own code base so if we look at our site we've got a blue we've got actually two
shades of blue we've got a red we've got a yellow and then we've got a couple of body
colors as well so let's set up some variables for each of those we'll jump back into our code editor i'm going to
go into my variables file at the top of the page let's just create what we know we need right now and as we progress
we'll just add to this so we know we're going to need a red we're going to need a blue and we're going to need a yellow
as well let's start off with those three here's our red value we can jump into components buttons to
grab the blue from btn blue that's the value right there background color
let's paste that in and then for yellow we need to jump into reasons and you want to scroll to
reasons icon yellow roundabout line 83 and grab background color value from
there and we'll paste that in there
okay so so far all good now let's set up a sas map for our theme colors
so we'll go theme colors and we'll just use the exact same naming
as bootstrap for now if you want to use a different name by all means go for it now what i'm not
going to do is i'm not going to have the extra step where we have this over here so back in my variables file i'm just
going to reference directly the red
and the blue will be our secondary color
and the yellow i'm just going to call warning
don't forget your semicolon there okay so that's what you should have at the end of that red blue and yellow with
respect to values and then we create a sas map and inside of that we have primary secondary and warning so so far
so good but now the question is well what do we do with the sas map how is this useful for us how does this allow
us to write less code well let's explore that let's save our changes here and we'll jump into our buttons file now the
first thing i'm going to do is comment out button red
and that includes the button red hover and then button blue as well we'll leave button link in place
so that's everything from the start of your file up to roundabout line 31.
okay so let's just restart our dev server if you don't currently have it npm run dev
okay so so far so good we're expecting that we've now lost our button code so how can we use this code now to get our
button styling back so we need a way that we can iterate over this sas map or let's just say we want to create
ourselves a css utility class for say cursors let's do that so we'll create a
sas variable called cursors and then we'll use a sas list so we'll have a pointer
auto and inherit i think is another one okay so again our separator is just a
space but i could have also done that over there right just be consistent with your separator and now we need to
iterate over our map for our buttons and our list and we'll start with the list first so sas gives us access to what's
called the each rule and that runs over both our lists and our maps now with lists we get access to a single value
with maps we get access to a key and that value let's have a look at how that works we'll save our changes on
variables we'll go into buttons and i'm going to just do this right at the top here so add each cursor in cursors now be aware
this can be whatever you want i could literally have called it k if i wanted to i'm going to stick with cursor and
then it's just brackets that's it and if this were the map which we're going to do next if it was theme colors
we have a key and a value so i would call it key and then i might call the second one color okay let's start for
that cursor first let's get that done now what we want to do is we want to create a css class called cursor
dash and then the name of the cursor right so cursor dash pointer dash auto dash inherits so
we think we can just do that but straight away vs code is not happy we see all these
red marks and that's because we have to use what's called sas interpolation over here okay we can't just output that
value directly so get rid of that it's hash brackets and then the value
inside of there just as you would do normally now once we've done that inside of here it's just straightforward css so
the property we want to target and this time we can just put the value straight because we've seen that already where we
had the background color for our button right so this is now going to create three css classes for us cursor auto
cursor pointer and cursor inherit and that's just based on these values right here so let's save that and let's have a
look at this on our front end silly me i've called this value it should be cursive you've probably already spotted that so just get rid of that so if it
wasn't clear already that value there needs to match whatever you call it over there that's all we have access to
inside of our brackets okay so cursor dash and then in our interpolation cursor and then we're
outputting cursor with the value of cursor so we'll save that we may have to restart our server so i'm
going to quit that npm run dev i'm all good we've got the green text so i'll jump to the front i'll just refresh
my page now let's test it out so what i can do is i can right click i can hit inspect that brings up my code inspector
and inside of that you can toggle this dot cls section now if you click on it you get this new add new class whatever
you type in here your code inspector will search through your css file for matching css class so if we type in
the value cursor there's our three values so auto inherit pointer let's go through that where's
that coming from let's jump into our code editor we're going to variables pointer auto inherit okay let's add
pointer onto our h1 so now on the hero so we've added
that now onto our entire div hero so anywhere over here when i hover over it i've got the little hand icon when i'm
off it back to the normal cursor okay so that's sas lists now let's look at how we can use that same each rule to cycle
through our sas map for our button colors okay we're going to modify this one over here for our map since we don't
need this cursor class but before we do i just want to show you how bootstrap use
their theme colors sas map to create their buttons and again you don't have to have installed bootstrap so you don't
need to follow along but it's really good just to get an understanding where we're trying to learn sas so we know they set up a theme colors sas map we've
already looked at that and that's inside of underscore variables and it's round about line 80
there it is there now once they've set that up inside of their buttons partial
further down the page they have this each over here just like we're going to have so each color and value
so that's the color and that's the value and they then call a sas mixin so let's
get our sass map each set up we'll go back to our underscore buttons and where
we have this each cursor let's change it to say each color
and value in theme colors
and let's start off with the btn class as well so btn dash and we'll use the
color so that's going to give us access to primary secondary and warning okay so
it'll be btn-primary btn-secondary btn-warning let's just start off with the background
color and we'll simply output the value so that value in this case will be red which itself is ff595e
okay so let's say that got no errors in my console that's great so we'll jump to the front and we'll just look in the
code editor so i'm going to right click on the sign up button i'll hit inspect
i'm going to change that to btn dash primary and there you go there's our background color we have no padding
we have nothing else but that works perfectly for me and i can now change that to secondary
and i can change it to warning and the nice thing about this setup now is not only is it going to be less code because
we're not going to repeat ourselves as this original code does but we can easily add new colors now to this theme
colors map and those will just be outputs so let's do this right we've got this button red which is really just a
copy of button blue so all we can do is copy all the code and make a little
bit more readable for you
all we can do is copy all of this code right there okay so starting with background color all the way down to
transition so copy that for me and simply paste that inside of here then we need to get rid of the comments now in
vs code you can select it all and it's command and forward slash and if you want to add the comments back in
it's the same command forward slash right to toggle comments and now all we need to do is change this background
color to say value so we'll save that and then we'll go
into our index page
and i'm going to find all the instances of btn red so in vs code i can select the first instance and then it's command
shift in l and that'll select all the instances and i'm going to change it to btn-primary
i'm going to save that i'll just bring up my console to make sure there's no errors which there aren't and now on the
front end we should have our buttons back great there they are there and if for whatever reason we wanted to change
one of these from button primary to button secondary we can just simply save that
and there it is there and all that code is now contained in this single
section over here all three buttons now as things stand we could draw a line
right here and leave things as it is this is all valid sas this is all valid css but again if you're thinking on a
larger project having all of this button code here is just going to clog up our
button partial and as i've already shown you that's not the approach bootstrap took
instead what they do is with the same each they iterate over their theme colors but then inside of here they're
simply calling their mixon so sas mixins are a way for us to include additional
css and just allows us to keep our code more organized so let's write out a
basic mixin in this file and then we'll build it up from there so the way to write it is you start off with the at
mixin and then just the name so i'm going to call this button then brackets and then inside of here that's the css we want to
then output where this mixing is called so what i'm going to do for my button is just simply have display none and now
wherever you want to output that you simply call it and you do that with at include
and then button and that button right there obviously that has to match the name that you give
your mix in all right so if we save this now now you may have to restart your dev server so let's do that to be safe
control c npm run dev great i've got no errors and on the front end i'm now expecting our
buttons to be gone which they are and if we have a look at our code
right there there's our css so i've clicked on btn secondary which we can't see in the browser but that right there
that's now just plain css once it's be compiled now in this example it may not
look very helpful to you but this allows you to set up common reusable css chunks
which you can include in multiple places but have in one single place and we
obviously don't want to include this in this file so let's move this to abstracts inside of abstracts i'm going
to create a new file i'll call it underscore mixins dot scss and then i'll
grab this code copy it and i'll paste it into mixins okay
and now we need to import it back in our file right at the top so we'll go use and it's the same place
as our variables are and because we're using the use
statement it's going to be namespaced so if you don't want to use mixins dot button
then you need to do just as we have with the variables which is what i'm going to do so import as with a star
and this will now allow us to use it just as we have already here so if we weren't including this just to be 100
clear we'd have to do that okay
and for once i don't have an error in my console if you do ctrl c npm run dev restart your server now i'm
expecting everything to still be normal on the front end indeed our button is missing so let's fix that now now as things stand this
isn't very useful you can pass in arguments into your mixing now in our case we want to take all of this code
and we want to place it inside of our mixin that's what we want so let's do that let's copy all that code out jump
into mixins we'll get rid of display none and we'll paste that in however
we need to take in this value so very easily now we'll add brackets in there or parentheses and we'll be passing that
value in so inside of button we'll have value
save both of our files and there you go our buttons are back and our css is output the same way it
was when we were running the each on our sas map except the difference now is this is much cleaner for us and we've
taken this and we've put it into a mixing now just to end this off i want to touch on functions i'm not going to
cover it in this crash course so here's the difference between a sass mixin and a sass function whereas
sas mixin allows you to include css a sas function generally returns a value
let me show you how bootstrap use it in their code inside of their buttons here they are calling a color dash contrast
function they pass in an argument so just like mixons you can pass in arguments and
they're giving it a background color then inside of that sas function they are determining what font color to
output based on the button background color so if it's a dark button background color it'll be a light font
if it's a light background color it'll be a dark font the last thing for us to do to wrap this course up is to handle
the hover state for our button so here's the problem though this has been specifically written for bt and red
which would now be btn primary so we could do this we could copy it we could
paste it in underneath here and then we'll uncomment it command forward slash and we'll just change that to be our
same btn dash color and that's going to work fine however we
can take a better approach if we get rid of this sas allows us to nest our css so
what that means is inside of our mixin where we're already outputting this css we could do something like this
okay let's save our changes and have a look at this on the front end in fact i'm going to make this point two just so
it's more noticeable so i'll save that we'll head to the front end
and there you go now word of warning although this is handy and useful and in my opinion the
right thing to do for things like hover styles you can take this too far i've
worked on some projects where there's nesting with the nesting with the nesting you have to be careful it makes it more
difficult to maintain your code and a good example of that would be say if you had a card let me just do this
over here so let's say we had something like this so we had a card outside
and then we had an h5 and then we had a p tag
let's say we want to style that h5 you might be tempted to do something like this over here
right so now you nest your h5 inside of your card the problem is that's now very closely tied to your card and what if
you change from an h5 to an h3 so whilst i think it's a good idea to nest
hover styles and some inner child styles in this example over here and in a lot
of the examples the better thing to do is to just give this a class name now you could use bem which is a way to name
your css classes but i'm just going to go card so i'll just inherit the parent name and then whatever this is so card
dash title then inside of your css instead of this ugly nested code over
here we're left with that and another benefit of writing it this
way is that if you were having if you were building a component inside of a
component you could then easily detach that inner component and place it
somewhere else on the page without needing to go and rewrite all of your css
and that's it that is the end of our mini crash course on sas i hope you've enjoyed it i hope this has gotten you
started on your journey learning sas and good luck using sas in your projects
