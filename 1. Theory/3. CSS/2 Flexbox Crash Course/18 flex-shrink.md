# flex-shrink

now on the other side of flex grow we have the flex shrink property
as you might have already guessed flex shrink defines the ability for a flex
item to shrink if necessary unlike flex grow the default value for
flex shrink is one however the flex shrink factor is still
relative to the other items in the container let's understand with the ui
the first point to make note of is that flex shrink is set to a value of 1 by
default for every single flex item and that is why if i try to reduce the
width of the parent container
the flex items shrink to fit inside the container in case you missed that let me repeat it
you can see the flex item's width if i decrease the screen size the width of the flex items also decrease
they are shrinking but the shrinking only happens up to a certain point after which the items
simply overflow you can see that items 8 and 9 are not visible anymore
now let's say you don't want the shrinking happening on the flex items
for that simply set the flex shrink value to zero
on the flex item class which is applied to every flex item
set flex shrink to zero now if i go back to the browser
refresh reduce the width
you can see there is no shrinking and the items overflow right away
it is also possible to control the shrinking for individual items i'm going to comment out flex shrink on
the flex item class and add a flex shrink of 4 to item 3.
now what this specifies is item three is going to shrink four times
as much as the other items remember this is a relative factor if
all the other items shrink by 25 pixels item 3 shrinks by 100 pixels
let's see this in action and just for this property demo i'm going to add a width to the flex
items class to make them larger so width is going to be equal to 6 ram
now you can see all the items occupy the same size if i start decreasing or reducing the
width though you can see item 3 decreases more than the other items
let me repeat it in case you missed that reduce the browser width and you can see item 3 shrinks more than
the other items so the flex shrink property dictates the
shrink factor of the flex items when the default size of the flex items is larger
than the flex container it is always relative to other items in
the container by default the value is 1 which dictates the items should shrink to a certain
extent if necessary all right
