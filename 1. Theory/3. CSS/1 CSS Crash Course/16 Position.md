# position

- > there are five different position values

the next property when it comes to css layout is the position property which
`specifies the type of positioning method used for an element`

there are five different values let's understand with an example

in the html file i'm going to add two div tags

position content one

and position content two

i'm going to add a class is equal to position one on the first div tag

and position two on the second div tag

```html

```

in the css file let's add class
selectors so dot position one and let's set
border to one pixel solid red

similarly position two is going to be border one pixel solid
blue

```css

```

- > position static

- now by default the position property for an element is set to static

so let's add position static to both the
classes

```css

```

with static position elements are
positioned according to the normal flow of the page

in our html position content 1 is before position content 2.

if i refresh the browser we see the same position content1 and then position content2

- we can affect or change this layout with the other position values

- > position relative

the second position value is relative

an element with position set to relative is positioned relative to its normal
position

- > top, left, right and bottom properties

you can control that relative position with four other properties namely top
right bottom and left

so for the first element
let's set position relative and `top` to 50 pixels
and `left` to 50 pixels

```css

```

if we take a look at the browser
refresh

you can see the first element which is position content 1 is now pushed 50
pixels from the top and 50 pixels from the left

so relative to its original position it has been displaced by 50 pixels and 50
pixels

now similar to top and left you also have `right` and `bottom`

which have a similar effect but from the opposite direction

what's also worth noting is that position two element is not adjusted to
fit into any gap left by the position one element

so we do have an empty space here

this is how relative position works

- > position is fixed

the third value for position is fixed which positions an element relative to the viewport

on the second element let's change position to fixed

we're also going to set bottom to zero pixels and right zero pixels

```css

```

if we now take a look at the browser

scroll all the way to the top and refresh

you can see the element placed bottom right of the screen

but what a special with fixed position
is even when i scroll the element always stays in the same place

you would have probably seen feedback button or chatbot buttons in webpages
which are always positioned bottom right

- > position value is absolute

the next position value is absolute

now when i change fixed to absolute

```css

```

and refresh

the element is still positioned bottom right of the screen

however when i scroll it behaves differently to that of position fixed

however

- > if the element has a different parent element with a relative position the position will then be relative to that parent element

that is slightly confusing so let me
show you the difference in the browser

in the html i'm going to wrap the second
element with a div tag

and add a class called container

```html

```

in the css i'm going to add the styles
for the container class

so container position
is relative

width 200 pixels

height 2000 pixels

border is going to be one pixel solid
black

```css

```

if you now take a look at the browser refresh

you can see the element is still positioned bottom right but within the parent element

and this is something you're going to often use when developing web pages

- absolute position but within a relatively positioned parent element

- > position sticky

the final position value is sticky

an element with position sticky is positioned based on the user's scroll position

for this example on position 1 element
set position to sticky

```css

```

now if we take a look at the browser
refresh

you can see we have position content one

but if we scroll down it moves along with the scroll

beyond an offset it just sticks in one place

on a web page if you have something that
needs to be in the normal layout of the page and always visible as they scroll
position sticky is a very good option

as you can see there is quite a bit to
learn when it comes to the position property

we have position static fixed relative absolute and sticky

if it's a bit confusing at this moment
in time do not worry it is something we all tend to struggle with as beginners

but hopefully the examples you have seen has given you a hint as to how the different values work

which should set
you up for further learning
