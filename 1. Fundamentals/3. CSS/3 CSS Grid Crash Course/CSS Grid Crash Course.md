# CSS Grid Crash Course

https://youtu.be/p4Ith5qRM1g

this video is sponsored by tascade a real-time organization and collaboration
platform make sure to check the description for a discount on your subscription
hey everyone my name is vishwas and welcome to this crash course on css grid
for complete beginners in this crash course we will understand the various concepts that css grid has
to offer before we begin let me go over a few points
first i would like to mention this course is for complete beginners
if you're someone who is new to css grid or have an idea about css grid and want
to understand better please continue if you are an expert
this is your cue to probably hop into another video where your time can be better utilized
second this video is a continuation of the css and flexbox crash courses
make sure you're familiar with both html and css before proceeding
flexbox is not a prerequisite but if you have understood flexbox learning css
grid becomes relatively easier also make sure you could along with me as
that is the best way to learn by the end of this video you will have a solid
understanding of creating layouts with css grid all right with these points in mind
let's get started what is css grid
the css grid layout module or simply known as css grid or just grid is a
two-dimensional grid-based layout system with rows and columns grid makes it
easier to design webpage layouts align and distribute space among items in a
grid flexbox is great when we are dealing with one-dimensional layouts but when
dealing with two-dimensional layouts and you're concerned about laying down elements both horizontally and
vertically css grid makes the task so much easier
including the complex layouts that we typically tend to struggle with
if you're comfortable with html css and flexbox css grid is the logical next step for
you all right now that we understand the what and why of css grid let's dive into
understanding the different concepts we first need to start off by
understanding the terminology in css grid trust me when i say this the next few
minutes you spend understanding what each term means will decide how easy it
is to understand the different properties css grid offers
understanding the terminology is essential to this course so please make sure you pay attention
when we talk about css grid we mainly have two entities a parent container which we term as the
grid container and the immediate children elements which we term as grid items
if you look at the sample html the parent div is the grid container and
all the children divs are the grid items very important to keep this in mind
the next term to make note of is grid line which is the horizontal or vertical
dividing line in a grid the orange line is an example of a column grid line as it is a vertical
line if it is horizontal it is called a row grid line
next we have a grid cell which is the smallest unit you can have on your css
grid it is the space between four intersecting grid lines as you can see
here denoted by the orange square next we have a grid track
which is the space between two adjacent grid lines it is denoted by the green portion on
the screen finally we have grid area which is the total space surrounded by four grid
lines a grid area may be composed of any number of grid cells
now these terms you don't have to memorize for the very first time however it does help when learning the
different properties but what is very important from the beginning is to understand grid
container and grid items understanding css grid is basically
getting familiar with the properties associated with the grid container and
the grid items knowing what properties exist and how they work
you can always refer to the documentation if you're having trouble building a particular layout
with the terminology now familiar let's begin by focusing first on the properties that are associated with just
grid container there are 18 properties in total of
which we're going to learn 16 in this crash course the other two i would say they might be
a bit confusing from a beginner's point of view my recommendation is to understand the
16 properties and then have a look at the other two which i will mention later
on in the course first we have the display property this
is what defines a grid container and is mandatory to work with css grid
next we have the grid template column and row properties to set the number of
columns and rows in the grid we then have column and row gap
properties to set the gap between columns and rows next we have justify align and place
items properties which are concerned with alignment of the grid items
similarly we have content alignment properties which deal with alignment of the entire grid
finally we have properties to deal with auto generated grid tracks
now this is just a list of the different properties so don't get overwhelmed as to how each of them work
we will dive into each of them and understand how they work with a visual example in the browser
to get us started with css grid i have set up some very simple html and
css that i am now going to walk you through i have created a folder called grid
crash course and within the folder i've created an index.html file and a
styles.css file the html is pretty standard
the head tag contains what you would normally find and a link to the css file
within the body we have a parent div tag with a class called container
this parent container has nine div tags as children
and each div has a class grid item and also a class specific to the item
number item 1 2 till 9.
in the css file i've set margin to 0 on the body element and on the container class
i've added a thick black border on the grid item class
i've added a font color white a font size of 1.5 ram
one ram padding and i've also centered aligned the text
for items one through nine i've set a different background color so as to
visually separate each item in the browser the html and css code can be found on my
github page in the crash courses 2022 repo
you can either clone copy or download the code
if you open the html file in the browser you should be able to see this layout
you can see that we have nine items enclosed within a container that has a
solid black border now let's focus on our very first grid
container property which is the display property
to create a grid container we make use of the display property and set it to a
value of grid in the css file on the container class
add the property display and set it to grid if we save this file
and refresh the browser you won't see any difference to how the content is displayed
as display grid has created a single column grid for the items
so when creating a grid container all of the contained grid items are placed in
rows by default and span the full width of the grid container
so it does behave similar to a block level element if you do not want a block level grid
container you can set the display property to inline grid and create an
inline grid container in the css file display is going to be
inline grid save the file refresh
you can see the border now wraps around the grid items
the container only takes up width to accommodate its children which is in this case the text in each of the items
so the display property is used to create either a block level or inline
level grid container the possible values are grid and inline grid
now if you want to explicitly set a grid by creating columns and rows you need to make use of grid template
columns and grid template rows property let's understand each of them
first let's take a look at defining columns i'm going to revert display to grid
and then set a new property called grid template columns
and this property specifies the number of columns in a grid layout the values are a space separated list
where each value specifies the size of the respective column for example we can set the value as 100
pixels 200 pixels and 300 pixels
this will create three columns in the grid the first column width is 100
pixels second column width is 200 pixels and third column width is 300 pixels
if we head to the browser and refresh you can see we now have three columns of
varying size item 1 is 100 pixels item 2 is 200
pixels and item 3 is 300 pixels but since we have specified the grid
should have only three columns the fourth item is now pushed to the
second row so items four five six now have the same size as 1 2 and 3.
similar is the case with items 7 8 and 9. the grid container is still the entire
width of the browser however the items only take up 600 pixels in width
now if you want equal width columns simply set 200 pixels three times
so 200 200 and 200
refresh and all are equal with columns
now sometimes you might want to specify equal width columns but for a greater
number of columns in such a scenario you can use the repeat function
so instead of 200 pixels three times you can specify the value as repeat
three times 200 pixels refresh
and the result is the same but now we can change three to six
and we can easily have six equal width columns refresh
you can see we have the first six items in row one seven eight nine in row two
this is because we have specified six columns of equal width
now it is also possible to set the width of the column as a fraction of the available free space in the container
for example we can set grid template columns value to 1 fr 2 fr and 1 fr again
so if you were to have 100 width columns 1 and 3 are given 25 of the
space while column 2 is given 50 percent of the space
refresh and you can see just that we have specified the width as a
fraction of the available space another function that is useful with
grid is the min max function we can specify three columns
so repeat three columns whose width should be
min max 200 pixels comma one fraction
so the column should be at least 200 pixels but can grow to take up the free space if available
when i refresh you can see we have three columns
we can reduce the browser width and the columns start to shrink
but at 200 pixels
they stop shrinking and simply overflow
these are some of the values we can specify so the grid template columns property is
used to specify the number of columns in the grid the width can be any non-negative length
value like pixels percentage etc or as a fraction of the free space
available you can also make use of functions like repeat and min max to achieve the
perfect grid layout on a side note this property also accepts a line name as part of the value
but i feel it to be confusing for a beginner so i've decided to leave that out
all right the next property are going to understand is grid template rows
which specifies the number of rows in the grid the value you can specify is pretty much
what you can specify for grid template columns you're now setting the height of the row
instead of the width so we can set
grid template rows 100 pixels and this sets the height of the first
row to 100 pixels you can see item 1 2 and 3 have 100
pixels as height i can set the value as 100 pixels
150 pixels 200 pixels refresh
and we see three rows of different heights 100 150 and 200
specify repeat three times 100 pixels
and we have three rows of equal height now if you specify a fourth row
so repeat three times and then 200 pixels as the fourth value
refresh you can see a blank row at the end it
doesn't contain any items but the space is occupied by the grid container
now you can also use the fraction unit if the container has a defined height
let's add height of 400 pixels and grid template rows as repeat
one fraction three times
refresh and you can see the three euros grow to take up the available free space in the
container pretty straightforward as you can see so the grid template rows property is
used to specify the number of rows in the grid the height can be any non-negative
length value like pixels percentage etc or as a fraction of the free space
available you can also make use of functions like repeat and min max
this property also accepts a line name as part of the value which i'm going to
leave out as it is not significant from a beginner's perspective
the third property is grid template which is a shorthand for defining rows
and columns so instead of grid template rows
and grid template columns i'm going to add grid template and the
value is going to be the value of the rows so repeat three times one fraction
followed by a forward slash followed by the value of columns
so repeat three times min max of 200 pixels or one fraction
when i refresh you can see there is no change in the layout
so the grid template property is used to specify both rows and columns in the
grid its value is the value of grid template rows followed by a forward
slash and then grid template columns
all right let's now move on to the next set of properties which deal with
spacing between rows and columns first we have the column gap property
which sets the gap between the columns in the grid for example if we set column gap to 20
pixels and refresh
we can see a gap of 20 pixels between the columns
similarly we can also set the gap between rows the property is row gap and we can set
this to 30 pixels refresh
and we now see spacing between the rows as well
now you can specify both column and row gap using just the shorthand gap
property so let's comment column gap row gap
and instead specify gap 40 pixels and 20 pixels
here the first value is row gap and the second value is column gap
when i refresh you can see 40 pixels between the rows
and 20 pixels between the columns so to specify gap between columns you
can use the column gap property to specify gap between rows you can use the row gap property and you can also
use the shorthand gap property to specify both row gap and column gap
values can be any non-negative value or a percentage
let's now move on to the next set of properties which are concerned with alignment
and there are two types of alignment properties within the grid cell and
within the grid container let's first take a look at alignment
within the cell to align the grid items along the row
axis we can make use of the justify items property on the grid container class i'm going to
comment out the grid gap as we don't need that anymore
now i'm going to add a new property called justify items
and by default the value of this property is stretch
if i set stretch as a value and refresh you can see there is no change apart
from the gap being removed however if i set a value of start
refresh you can see that all the items are aligned to the start edge of their cell
this will be more clear when we inspect the element and hover on the grid container
you can see that the items are pushed to the start of the individual cells
and we can also set a value of end in which case
the items are pushed to the end of the cell finally we can also set center
in which case the item is horizontally center aligned within the cell
so justify items for alignment along the row axis
if you want to adjust alignment along the column axis there is the align items
property similar to justify items align items has
a default value of stretch if i refresh
there is no change in the grid layout however if i set the value to start
refresh you can see all the items are pushed to the top of the cell
set it to end and all the items are pushed to the bottom of the cell
set it to center and all the items are vertically
centered aligned within the cell so align items for alignment along the
column axis now it is also possible to specify both
the properties in a single declaration using the place items property
so i can comment out justify items align items and instead specify place items
and let the value be start and end the first value here which is start is
for align items and the second value is for justify items
so if you've got this right the items should be pushed to the top of the cell and then to the right of the cell
refresh and we see just that place items can also accept a single
value in which case the same value is assigned to both align items and justify items
let's set one value of center
now when i refresh you can see the item is center aligned
both horizontally and vertically within the cell
so for alignment and spacing within the cell you have justify items for variation
along the row axis align items for variation along the column axis and place items which is a
shorthand for both the possible values are start end center
and stretch which is the default value all right let's now take a look at the
second set of alignment properties which deal with alignment within the container
now to understand the different properties we have to make a small change in the grid template value
we're going to create a grid with three rows 200 pixels tall and three columns
200 pixels wide so repeat 3 comma 200 pixels
and repeat 3 comma 200 pixels i'm going to set height to 800 pixels
and comment out the place items property if we take a look at the browser
refresh you can see the grid container with the black border
but the 3x3 grid itself is smaller this extra space gives you an
opportunity to align the entire 3x3 grid block within the container
now to align the content along the row axis we have the justify content property
by default the value is set to start so if i specify justify content start
refresh you can see there is no change in the layout
if i set it to end and
the content is now moved to the end of the row access
set it to center and the content is now center aligned
with respect to the container horizontally of course
now grid also provides additional values that can control how the extra space has to be distributed within the container
first we have a value of space between when i refresh the browser
you can see the extra space that was left out is evenly split and added in
between the grid columns sometimes you might also want the space
before the first column and after the last column for such a scenario the value is space
around let me change the value and refresh the browser
you can see there is now space at the beginning and at the end and the space is equal to half of the
space between the grid columns for example if the space in between the
columns is 200 pixels space at the start and the end would be 100 pixels
however if you want the same space at the start and the end of the items as well the value you're looking for is
space evenly so justify content space evenly
if i refresh you can see the extra space equally distributed within the container
of course we can expect the same behavior along the column axis as well
grid provides another property called align content
the values are the same as justify content so i'm going to go over this fairly quicker
first we have start which is also the default value this pushes the content to the top of
the container refresh and you can see there is no change as it
is the default value specify end
and it pushes the content to the bottom of the container center
refresh and the content is now center aligned vertically [Music]
to control spacing we have space between
in which case the space is evenly distributed between the rows
you can also specify space around which adds space at the top and at the
bottom [Music] the space is equal to half of the space
between the rows if you want the same space at the top and bottom of the rows as well
the value is space evenly refresh
and you can see the extra space is equally distributed within the container
now the next property is place content which is a shorthand for aligned content
and justify content so place content start end
and comment out the other two properties here the first value of start is for
align content and the second value of end is for justify content
if you have understood this right the content should be pushed to the top of the container and then to the right of
the container refresh and we see just that
now place content can also accept a single value in which case the same value is assigned to both align content
and justify content let's set one value of center
now when i refresh you can see the content is center
aligned both horizontally and vertically within the container
so for alignment and spacing within the container you have justify content for
alignment along the row axis align content for alignment along the column axis and place content which is a
shorthand for both the possible values are start end center
and stretch with start being the default value you also have space between space around
and space evenly for adding spacing between the rows and columns
all right let's now move on to the last few properties that apply to a grid
container the next property to know about is grid order flow which controls how auto
placed items get inserted into the grid for this property i'm going to comment
out all the properties except display grid and of course the border
if we take a look at the browser can see that the items are placed by
filling each row nine rows for nine items
this is because the default value of grid order flow is row
so if i specify grid order flow and set a value of row
refresh we see no change in the browser
however set it to column refresh
and you can see the items being placed by filling each column nine columns for nine items
the next property is grid auto columns which is used to specify the default
width of a column currently we have not specified a column width
so if we were to set grid order columns 100 pixels
refresh you can see every column is now 100 pixels
this value of course will be overridden if you have specified a column width using the grid template columns property
similar to grid order columns we also have grid auto rows
which sets the default height for rows within the grid if we set it to 200 pixels
refresh you can see the only row we have is now 200 pixels tall
so some of the auto properties as i call them include grid order flow which
controls how auto placed items get inserted into the grid by default it is set to row but you can
also set it to column three other values are dense row dense
and column dense which are applicable for more complex layouts that you can
look at once you've mastered the fundamentals then have grid auto columns for setting
the default column width and grid auto rows for setting the default row height
the value can be in pixels percentage min max etc with auto being the default
value with that we've had a look at all the grid container properties that i wanted
to cover in this crash course two more properties which i would like
you to read about once you are comfortable with the properties discussed so far are grid template areas and grid
grid template areas is used to specify areas within the grid layout and the grid property is a shorthand for grid
template rows grid template columns with template areas grid auto rows grid auto
columns and finally grid autoflow all right next let's take a look at the
list of properties applicable on a grid item
first we have grid column start and grid column end these two properties control on which
column line the item starts and ends similarly we have grid row start and
grid row end which control on which row line the item starts and ends
then have grid column and grid row which is a shorthand for the previously mentioned properties
finally we have justify self align self and place self which deal with alignment
of the item all right now that we know the different properties that can be applied to a grid
item let's take a closer look at each of the properties starting with grid column
start and grid column end i'm going to comment out all the grid
container properties except display and grid template
now if we take a look at the browser refresh it is quite evident that grid items by
default take up one column in the container that can be changed using grid column
start and grid column end on item 1
i'm going to set grid column start 1
and grid column end 3. if you now take a look at the browser
refresh you can see item one starts at the first
line in the grid and ends at the third line in the grid so it now takes up two columns worth of
space if i set it to end at four
refresh it takes up three columns
set it to five and it will add a new column and the width will be the rest of the
available space which is why you see item 5 and 9 also
take up more space than 200 pixels now if you're unsure about the end
column line you can also mention how many columns it should span using the span keyword
so grid column end let's say it has to span for two columns
refresh and you can see item one now spans across two columns
similarly let's take a look at the next two properties which deal with row lines
on item one again we can set grid row start
one and grid row end three
if i now refresh the browser you can see item one starts at the first
row line and ends at the third row line effectively taking up two rows of space
you can also use the span keyword so span for two rows
refresh and the layout remains the same
it is also possible to specify these values using the grid column and grid row
shorthand so let me comment out the four properties
and instead specify grid column is going to be one slash span two so
grid column start and grid column end and similarly grid row
is going to be one slash span two so again the first value is the start
value and then a forward slash and then the end value refresh
and we still see the same layout so the grid column start grid column end
grid row start and grid row end properties control the position of the
item in the grid you can also make use of the grid column and grid row shorthand for the same
purpose values can be a grid line number or the number of columns or rows the item has
to span all right for the final set of properties let's take a look at aligning
items within a cell earlier in the video we had a look at
justify items align items and place items which apply to every item in the
container however if you want alignment for one single item you make use of justify self
align self and place self let's look at an example
on item two i'm going to set justify self
stretch now this is the default value so when i refresh the browser
you're not going to see any change however if i set it to start
refresh you can see the item is pushed to the start of the row access
set it to end refresh and the item is at the end of the row
access so it is center and the item is center aligned along the
row axis similarly we have align self for
alignment along the column axis the default value is stretch
when i refresh you can see the item stretches from top to bottom there is no change
if i set it to start refresh it is pushed to the top of the column
axis set it to end
it is pushed to the bottom set it to center
and it is center aligned along the column axis
now you can combine both justify self and align self into one
place self shorthand property so comment out the two properties
and specify place self first we specify align self property
value so let's push it to the top using start and then the justify self property value
let's push it to the right using end refresh
and you can see the item is placed at the top right you can also set one value
in which case it will be applied to both the properties if i set it to center
refresh you can see the item is center aligned both horizontally and vertically
so for alignment of an item within the cell you have justify self for variation
along the row axis align self for variation along the column axis
and place self which is a shorthand for both the possible values are start end center
and stretch which is the default value all right with that we wind up with the
different properties that are part of the grid module and in doing so we have come to the end
of this crash course on css grid i hope the video has given you an idea
of how to layout elements with css using the grid module if you have enjoyed the video please do
leave a like and subscribe to the channel for more content on web development
i'll see you in the next video which is a crash course on the fundamentals of javascript+
