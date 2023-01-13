# align-content

all right let's now proceed to the last property that can be applied on the flex container which is the align content
property the align content property aligns lines of content along the cross axis
similar to how justify content aligns individual items within the main access
so it distributes additional space but along the cross axis and a very important condition is
that multiple lines or rows must exist within the container
if not it has no effect let's understand the different possible values with the ui
first make sure to have a height on the container and also enable wrapping of
items so height 800 pixels and flex wrap set
to wrap wrapping is required to force our content into two lines
let's go back to html let's also uncomment the remaining four items
head back to the browser and refresh if i reduce the width
you can see the content wraps into two rows the align content property is used to
align these rows of content within the container
the default value is stretch you can see both the lines stretch to fill the
available space so if we set align content
to stretch and refresh the browser
you can see there is no change the second value possible
is flex start this pulls the rows to the beginning of
the cross access refresh and you can see the cross access runs
from top to bottom so the content of lines is pushed to the very top
let's also get rid of the padding we just added so from item 1 remove padding bottom
from item 2 and 3 as well align content flex start
refresh you can see the rows of items are pulled to the top
similarly we also have flex end which pushes the content to the end of
the cross access if i refresh you can see the content is at the bottom
you can also center the content by specifying a value of center
refresh and you can see the content is center aligned
the fourth value is space between which takes all the extra space and puts
it in between the rows refresh
and you can see all the space is in between the two rows
finally we have space around which distributes the space around the
lines refresh and you can see the space
distributed the center portion has twice as that of the edges
so the align content property is used to align lines of content or rows of
content along the cross axis and distribute any extra spacing in the
parent container the possible values are flex start flex end center space between space around
and stretch which is the default value with that we have covered all the
properties that work on a flex container
