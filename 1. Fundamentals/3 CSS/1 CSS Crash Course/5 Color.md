# color

- > style declarations

all right now that we understand
selectors the next logical thing is to learn about style declarations

let's take a look at a few properties which you are likely to use in your day-to-day work building websites

- > color property

for our first property let's continue with color

```css

```

- > color can be specified in multiple ways

the value for color can be specified in multiple ways and i want to showcase two of them

- > a hex value

the first one is what is called a hex value

you're going to specify the hash symbol
or the pound symbol followed by a hex value that ranges from six zeros to six
f's

six zeros for black as you can see right here
and six f's for white

```scc

```

- > rgba format

the other format is rgba where we specify red blue green values from 0 to
255 and finally the opacity

so rgba 0 comma 0 comma 0 is black and 0.5 can be the opacity which will give you a less intense black
color

```css

```

of course the opacity can be varied from zero to
one, one being more intense

- > background-color property

now similar to color we can also set
background color for an element

in the html file let's add two elements with a class

div class is equal to orange that says orange background

and a span tag class is equal to yellow
it says yellow background

```html

```

in the css file let's add a background color for both the classes

so dot orange
we're gonna set background hyphen color which is the property name to orange

```css

```

similarly dot yellow which is the class selector again background color and we set it to yellow

```css

```

if we take a look at the browser refresh you can see the background color being
applied orange being a div tag is block level

and yellow being a span tag is in line and takes up only the necessary space

so that is about the color and background color properties in css and a few ways you can specify the value
