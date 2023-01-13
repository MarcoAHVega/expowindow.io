# css units

- > we have two categories of units

okay for the pen ultimate topic in this
crash course we're going to quickly take a look at the different css units

we have two categories of units absolute and relative

- > absolute units

- absolute units are generally considered to always be the same size

here is list of absolute units you can use

there are quite a few however pixel is the only value you will commonly use

and is the value we have
seen so far

absolute units are useful for layouts where the page needs to be printed

- > relative units

- relative units on the other hand are relative to something else, perhaps the size of the parent element's font or the size of the viewport

the benefit of using relative
units is that with some careful planning you can make it so that the size of the
text or other elements scales relative to everything else on the page

here is a list of relative units you can use

again not every unit here is used
regularly but let us take a look at a few popular ones

- > em units

let's start with the first one which is em

in the html file i'm going to add a new
element div with a class called em container

and the text content is going to be em unit

```html

```

in the css
i'm going to define the style with a class selector so dot
em hyphen container

we're going to set font size to 20 pixel

and the height is going to be 2 em

```css

```

in this scenario 1 em is equal to the font size of the element so 2m is 40 pixels

in the browser
if i refresh you can see em unit

if i inspect the element
click on computed scroll down you can see height is 40
pixels

- > now em can also be used for font size on a child element

so in index.html within the em container
add another div tag with a class equal to just em

the text can be em child element

```html

```

in the css on the em class we're going to set font
size to 1.5 m

```css

```

what happens now is 1m is the font size of the parent element which is 20 pixels so 1.5 m is 30 pixels

if we refresh and inspect the m child element
you can see font size is 30 pixels

as you can see the em unit is a relative
unit

- > rem units

the next unit to know about is rem

and rem is relative to the font size of the root element

typically that would be the body element

so in the html document i'm going to add
another div tag

the text content is going to be rem unit

and we also have a class called rem

```html

```

in the css file i'm going to add a style
to the rem class where we set font size is 2 ram

```css

```

if you now refresh the browser and inspect the div tag with class
equals rem go to computed you can see the font size is 32 pixels

now one rem is equal to the font size of the body element which is 16 pixels by
default

so 2 rams is 32 pixels

if we set this to 3 ram

```css

```

refresh you can see font size is 48 pixels

rem is a unit that is more commonly used to specify font sizes in a web page

so make sure you remember how this works

- > vh and vw units

all right finally there is vh and vw for
viewport relative height and width

let's look at vh

on the rem element i'm going to specify height 50 vh

i'm also going to set a border of 1 pixel solid
333 which is again a shade of grey

```css

```

if we save the file
and refresh

the browser you can see the height of the div tag is
50 percent of the viewport height

- now vw which stands for viewport width works on a similar principle but for
  width of an element

so em rem vh and vw

these are some of the more commonly used relative units in css that you as a
beginner should be aware of
