# flex-wrap

let's now move on to the third flex
container property which is flex wrap as i mentioned a few minutes ago
the items in a flex container can shrink to a certain extent to fit in a single
line if there is not enough space though the items simply overflow
let me show that to you in the css file i'm going to comment out
flex direction and refresh the browser
if i now start to reduce the browser width
you can see that the items begin to shrink but after a certain extent they are no
longer in view you can change this behavior using the flex wrap property
in the css file on the container class i'm going to add a new property which is
flex wrap keep in mind i haven't removed the display flex property on the container
and never will throughout this course now flex wrap can accept one of three
possible values the first one is no wrap and this is the
default value when i refresh
you can see there is no change if we want the items to wrap within the
container then we set a value of wrap so flex wrap
set to wrap now when i refresh the browser
you can see that when i reduce the browser width the items have been wrapped in the
container and the wrapping takes place only when needed
if i expand the browser width there is no wrapping if there is not enough space for just
one item which is item nine you can see only item nine moves into
the next row reduce the size further item eight moves into the next row and
so on the final possible value is wrap reverse
and what wrap reverse does is instead of items falling into the row below
it climbs into the row above let me show that in the browser
refresh and you can see we have nine items when i reduce the browser width
you can see that item nine instead of moving to the row below moves to the row
above now do not get confused that wrap reverse starts wrapping in the reverse
order of items item one will not move into the second row if the space is inadequate
wrapping always occurs from the last item rap reverse just pushes the last item
above instead of below what you should know is that vertical
wrapping of items is also possible and for that we need to change flex
direction to column and add a height to the flex container
so let's uncomment flex direction set it to column and we're going to add a height
of 400 pixels let's also set flex wrap to just wrap
if we refresh you can see that a column is created to the right and the items
are placed in that column so 789 which could not be accommodated
with a height of 400 pixels are shifted to the second column
if i change flexwrap to wrap reverse refresh
the items are placed in a new column to the left
so the flexwrap property is used to control the wrapping of flex items
within the container the possible values are no wrap which is default
wrap which wraps the content into the next row or column and wrap reverse
which wraps the content into the previous row or column
