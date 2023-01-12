# justify content

now let's move on to the next set of properties which are concerned with alignment
we're going to start with the justify content property to see the alignment more clearly i'm
going to reduce the number of items from nine down to five
all right now justify content defines the alignment along the main axis
let's understand with the ui how the different values work
by default justify content is set to the value flex start
which places the flex items at the beginning of the main axis which is also
known as main start if i refresh the browser
you can see there is no difference in the alignment the second possible value is flex end
this causes the flex items to be placed at the end of the main axis which is
also known as main end if i refresh
you can see the items are now placed at the end of the main axis
we can also align the content at the center of the main axis
set the value to center and refresh the page
the content is now placed at the center of the main access
so these are some of the values you would expect for alignment left align right align and center align
but flexbox provides additional values that can control how the extra space has
to be distributed within the container we have a value of space between so
justify content space between when i refresh
you can see the extra space within the container is evenly split and added in
between the different flex items sometimes you might also want the space
before the first item and after the last item for such a scenario the value is space
around let me change space between to space around
and refresh the browser you can see there is now space at the beginning and at the end
and the space is equal to half of the space between the flex items
for example if space in between the items is 20 pixels space at the start
and end would be 10 pixels however if you want the same space at the start
and end of the items as well the value you're looking for is space evenly
if i change the value of justify content to space evenly
and refresh the browser you can see the extra space is equally
distributed within the container a very important point to keep in mind
is that justify content property aligns items based on the main access
so if we set flex direction to column which changes the main axis from top to
bottom justify content deals with vertical alignment so if i uncomment flex direction set to
column and set a height of let's say 800 pixels
add extra space within the container and change justify content to flex start
refresh the browser you can see all the items are pulled to the top
if the value is flex end refresh all the items are pushed to the bottom
set the value to center refresh and you have vertically centered
content something that was a real struggle before flexbox
now space between space around and space evenly behave the same way
i'm going to let you try them out so the justify content property is used
to align items and distribute any extra spacing in the parent container
the alignment is always along the main axis the possible values are flex start flex
end center space between space around and space evenly