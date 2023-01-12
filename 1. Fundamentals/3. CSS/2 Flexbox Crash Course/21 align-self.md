# align-self

let's now move on to the last flex item
property which is the align self property align self is used to control the
alignment of individual items the values are pretty much the same that are
applicable for the align items property on the flex container let's take a look at them one by one
the first value is flick start which aligns the items at the start of the cross access
on item one let's set align self
to flex start let's also set a height
of 400 pixels on the container if we take a look at the browser
refresh you can see the item is pulled to the top which is where the cross axis starts
the second value is flex end which aligns the item with the end of the cross axis
on item 2 let's set align self to flex end
and you can see the item is pushed to the bottom of the cross axis
the third value is center so let's add a line self
center on item three and refresh
you can see item three is centered the fourth value is stretch which
stretches the item from cross start to cross end on item 4 if i set align self
to stretch and refresh you can see item 4 is stretched but so
are items 5 through 9. now you might think okay stretch is the
default value for align self but that is not true the default value for align self is auto
and align self is computed from the align items property of the parent flex
container now items five through nine are stretched because the container has
align items of stretch which is the default value starting to get a bit confusing isn't it
well let me go over this slowly flex container
which is the parent container has no align items property set
so what is the default value it is stretch
so container has align items set to stretch by default
now flex item 5 does it have a line self
no but what is the default value of align self
it is auto and what does auto specify well it specifies to take the value of
the parents align items value so item 5 takes the value of stretch
so do items 6 7 and so on now if i specify align items on the
parent container and set it to flex end
items 5 through 9 will now inherit that value
and if i refresh you can see that they are pushed to the end of the cross access
now i understand this is a bit overwhelming to keep track of but i hope you now have a place to come
back to any time you need to understand what is going on with the layout in your
web page

so align self property is used to align
the items individually it accepts values like auto flex start
flex end center and stretch if specified it will always override the
align items value of the flex container

all right with that we wind up with the
different properties that are part of the flexbox module and in doing so we have come to the end
of this crash course on css flexbox i hope the video has given you an idea
of how to layout elements with css using the flexible box module
if you have enjoyed the video please do leave a like and subscribe to the channel for more content on web
development i'll see you in the next video which is a crash course on css grid
you
