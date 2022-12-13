# display

now it's time to focus on some of the css properties which affect the layout
of the web page

- > the display property

the first property is the display property
which specify if or how an element is displayed

in the html crash course video i mentioned that

- every html element has a default display value

- it can either be block as in the case of a div tag or inline as in the case of a span tag for example

now you can also set the value
explicitly when necessary

let me show you an example

in the html document i'm going to add
two tags a div tag with the text
sample content 1 and a span tag with the text
sample content two

i'm going to add a class
is equal to content one on the div tag and class is equal to content 2 on the
span tag

```html

```

in the css
i'm going to add a simple border for both the classes so content one
is going to be border one pixel solid red

and similarly copy paste the style change content one to content two
and border color to blue

```css

```

if we refresh the browser
you can see the div tag is a block level element

and the span tag is an inline
element

- > display inline and display block

now though on content 1 class i'm going to set
display inline and this applies to the div tag

on content 2 which applies to the span tag i'm going to set display to block

```css

```

if we save the file and refresh

you can see content 1 is now in line and
takes up only the necessary width

whereas content 2 takes up the full width

so you can set display block or display inline

- > display none

the third value that you should know as
a beginner is display none

when i set on the content 2 class display none

```css

```

and refresh you can see that the element is not displayed in the browser
we see sample content 1 but not sample content 2.

now display none is a value typically used with javascript to show or hide
elements

so block inline and none
these are the three display values that you must know as a beginner

display in fact has a lot more values two of them flex and grid dictating how layouts are
created in modern websites

but there is quite a bit to learn about flex and grid modules in css which is
why i will be creating separate crash courses on those topics
for now make sure you understand block inline and none
