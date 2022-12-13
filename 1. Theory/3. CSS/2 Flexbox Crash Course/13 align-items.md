# align-items

all right the next alignment property is the align items property
align items defines the default behavior for how flex items are laid out along
the cross axis of the container this means it works just like justify
content but in the perpendicular direction again let's understand with the ui how
the different values work to visualize the changes we need a
height on the container so let's set height to 800 pixels
by default the value of align items is stretch
that means the flex items stretch the entire length of the cross axis
so if i set align items to stretch and head back to the browser refresh
you can see the items take up all the available height of the container so they stretch to fill the container
so stretch is the default value the second value we can specify is flex
start all items are pushed to the cross start
which is the starting point of the cross access so if i refresh
you can see even though the container is 800 pixels in height the items do not stretch and are aligned
with the cross start of the line similar to flex start we also have flex
end and this value as you might have guessed
will push the items to the bottom of the container or pushes the items to the end of the
cross access the fourth possible value is center
which centers the content along the cross axis so refresh
and the items are now placed at the center of the cross axis the last value i want to discuss is
baseline to help us understand baseline i've got this image from stack overflow
if there is a word for example sphinx the baseline is the line upon which most
letters sit now coming to flexbox the base value for
flex items will align flex items along their contents
baseline you can see we have five items each with different heights and content
size but you can see how all the content in the flex items sit on this baseline
so if you ever want the text inside the items to line up go with baseline
let's quickly take a look at an example i'm going to slightly modify the css for
the first three items on item one padding bottom three ram
on item two padding bottom five ram
and on item three padding bottom 3 ram
now i can set align items to baseline if i refresh
you can see that the text inside each item is aligned
the item itself is positioned based on where the text will sit
now you can also flip the axis by setting flex direction to column and test how the alignment works i'm going
to leave that to you as an exercise so the align items property is used to
align items and distribute any extra space in the parent container
the alignment is always along the cross axis the possible values are flex start flex
end center baseline and stretch which is the default value
