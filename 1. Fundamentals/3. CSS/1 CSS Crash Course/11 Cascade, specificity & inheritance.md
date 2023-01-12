# 13 Cascade, specificity & inheritance

- > cascade

now the next set of topics we are going
to learn might not seem like a big deal right now

but when you start working on
projects trust me a good understanding will save you hours of debugging

the first of such topics is cascade

the c in css stands for cascading but we
haven't really understood what that means have we let's do that now

in the html file i'm going to add an h2 tag that says cascade

```html

```

in the css file i'm going to add two rules an h2 selector
and the color is going to be red

and in the very next line
the same h2 selector again the same property color but this time
with the value of blue

```css

```

both rules targeting the same html
element which is all h2 tags in the document

now my question is what do you think will be the color of the text cascade

pause for a moment and think about it

refresh and you can see the answer is blue

- > the cascading rule

and this is the cascading rule

- when two rules apply that have equal specificity the one that comes last in the css is
  the one that will be used

since the color blue appears last that
is the color which is applied to the h2 element

- > specificity

but in this slide two very important words are equal specificity but what exactly is specificity

- specificity is how the browser decides which rule applies if multiple rules
  have different selectors but apply to the same element

- > different selectors have different specificity

what you need to learn is that different selectors have different specificity
let's understand with an example

in the html file i'm going to add an h3
tag the text content is going to be specificity

```html

```

in the css file i'm going to style the h3 element

so h3 curly braces i'm going to set color to red

```css

```

if we take a look at the browser refresh and we see red colored text

- `an element selector has the least specificity`

what you should know is that an element selector like the one we have just defined has
the least specificity

- `a class selector is more specific than an element selector`

- but what is more specific than an element selector well a class selector

so in the html i'm going to add class is equal to subheading

```html

```

in the css i'm going to add a style with the class selector

so sub heading is the class selector and i'm going to set color to blue

```css

```

if you now take a look at the browser
refresh you can see the color is blue

now you might think hey isn't this just the cascading effect from before
the style that is specified last is being applied well
no

if i move the element selector to the last

```css

```

head back to the browser refresh you can see the text is still in blue
which is the style from the class selector

so a class selector is more specific
than an element selector

- `an id selector is even more specific`

similarly we have an id selector which is even more specific

so in the html we can add
id is equal to title

```html

```

and in the css
add an id selector so the hash symbol
the id is title

we're going to set color to orange

```css

```

take a look at the browser refresh

and we see the text is now in orange

- `an inline style`

of course there is something more specific than an id selector
and that is an inline style

on the h3 element if we add style
is equal to color colon purple

```html

```

refresh and you can see the text is now purple

as you can see we have different selectors with different specificity

- when multiple style rules are applied to the same element the browser will decide the most
  specific rule and apply that

pretty simple if you are able to remember what is more specific

- > the important keyword

of course rules are sometimes meant to be broken and css specificity is no
exception

when we add the important keyword to a style declaration
it automatically becomes the most specific style

so on the element selector
if we add an exclamation and important

```css

```

head back to the browser
refresh you can see the text is now red

you can see that the element declaration is the most specific all of a sudden

now you can see this important keyword being used in some code bases but trust me this is not the right way to add
styles

- the extreme case for using important is when you need to overwrite a third-party library css and you have no other way

- when people say css is difficult it is because they don't understand how specificity works

so make sure you spend some good amount
of time on this topic as it will benefit you a lot when working on larger websites that have a lot of css code

- > inheritance

the final topic along similar lines as cascading and specificity is inheritance

- you should know that some css property values set on parent elements are
  inherited by their child elements but some aren't

- you don't have to remember all the properties but some like color and font related properties are inherited by text

in the html file let's add a div tag
with a class called inheritance

within the div tag add a paragraph tag that says inheritance

```html

```

in the css file add a class selector for this inheritance class

let's set color to orange and font family to sego ui

let's also set font size to 30 pixels

```css

```

if we take a look at the browser
refresh you can see the paragraph text has inherited styles from the div tag

if i inspect this element which is the paragraph element
it has the color of orange font family of sega ui and font size of 30 pixels

the paragraph text has inherited styles from the div tag

so cascade specificity and inheritance

i want you to come back to these topics
when you get frustrated trying to understand why a certain style is being applied or
not applied

everything else we've learned so far is just the syntax of the language

these topics however are the core concepts you need

hopefully the examples we have just seen
have given you a good idea
