# order

all right now that we know the
properties that can be applied to a flex item let's take a closer look at each of
the properties starting with the order property
on the container class if i comment out all the properties except display and
border with display being set to flex
it is quite evident that flex item in a container are laid out in the order in
which they appear in the source code that however can be changed using the
order property in our example we have 9 items and you
can see they are laid out item 1 through 9 which is the order in which they appear
in the code let's mix up this order in the css for item 3
i'm going to set order 1.
if we refresh the browser you can see that item 3 is pushed all
the way to the end and that is because all flex items by default have an order
of zero order one is greater than the order of all other items and hence
item three appears at the very end if i change the order of item 7
to 2 refresh you can see that item 7 is pushed to the
end order zero first then order one and then order two
if you specify the same order number for more than one item items are laid out in the order in which
they appear in the source code for example if i specify order of 1 to item 9
you can see that both item 3 and item 9 have the same order
but in the html item three appears before item nine
and if i refresh that is how the items are laid out in
the browser so the order property accepts an integer
value and is used to control the order of items in the flex container
elements with the same order value are laid out in the order in which they appear in the source code
