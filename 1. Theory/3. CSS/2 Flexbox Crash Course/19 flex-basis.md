# flex-basis

let's move on to the next property which is flex basis the flex basis property specifies the
initial size of a flex item before the extra space in the container is distributed
this is used in place of the width property in flex layouts so it can accept values in percentages
pixels m rems or even keywords like auto
let's understand better with the ui by default flex basis has a value of
auto which sets the initial width based on the item's content
in our case you can see that the item's width is dependent on the text inside
if i change the text on item 1 to item 1 flex basis
and refresh the item now has a larger initial width
back in the css file on item 1
i'm going to add flex basis and set it to auto
if i refresh you should not be seeing any difference as it is the default value
if i change the value to 200 pixels
refresh you can see the initial size of item 1
is now 200 pixels and what you have to make note of here is that flex grow and flex shrink apply
on top of flex bases for example on item 1 if flex grow is set to 1
refresh the extra space is added onto the 200 pixels
it could be 300 pixels after growing flexbox doesn't try to decrease its
growth just because it is larger than the other items to begin with
and the same goes with flex shrink as well so the flex basis property is used to
set the initial size of a flex item you can specify values in pixels
percentages or relative units by default the value is auto which
decides the item's width based on the item's content
