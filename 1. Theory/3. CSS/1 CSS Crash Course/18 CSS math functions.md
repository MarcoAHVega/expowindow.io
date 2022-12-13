# css math functions

- > css calc function

all right for the final topic in this
css crash course we're going to take a look at three math functions which can
be used as property values

the first one is calc

on the rem element for the height i'm going to set
calc 50 vh minus 100 pixels

```css

```

when i refresh you can see the height has decreased by
100 pixels

this is useful for example when you have to subtract the nav bar height for
calculating the available height for your content

- > css max function

the next function is the max function
which uses the largest value from a comma separated list of values

i'm going to set height to max 50 viewport height
comma 600 pixels

```css

```

when i refresh
you can see the height is 600 pixels as that is larger of the two values

it is also shown in the dev tools as you can see

- > css min function

similarly if i change max to min

```css

```

refresh the height is reduced to 50 percent of
the viewport height

as it is the smaller of the two heights

both max and min can be used to set a minimum or maximum height or width for
an element and allow it to take on the other value based on screen size

you might want an element at 500 pixels but on larger monitors
it can take up more than 500 pixels as it would be okay with more space on the
screen

well with that we come to the end of this crash course on css

if you're new to web development i hope the video has given you an idea of how
web pages are styled

if you have enjoyed the video please do leave a like and subscribe to the
channel for more content on web development i'll see you in the next video which is
a crash course on css flexbox
