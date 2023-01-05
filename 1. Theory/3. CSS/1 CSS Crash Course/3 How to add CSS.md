# How to add CSS

- > there are three different ways to add styles to an html document

let's begin with an example for our first task let's learn how to apply an orange color to the text we see in the browser

now you might be surprised but there are three different ways to add styles to an
html document

`inline styles`

`internal style sheet`

and finally `external style sheet`

let's understand each of them starting
with inline styles

- > inline styles

inline styles are css declarations that
affect a single html element

to use inline styles we add the style
attribute to the relevant element

to apply an orange color to the h1 tag
we add `the style attribute` and this is equal to what i mentioned as
a css declaration a few seconds ago

`a css declaration is a pair of property and its value`

for our example the property is color
and the value is orange we separate them with a colon

```html
<h1 style="color: orange">CSS Crash Course</h1>
```

if we now save the file and refresh the browser
you can see the text is now in orange

looks pretty simple right
well let me tell you

although adding inline styles is pretty straight forward whenever possible you should avoid it

- unfortunately applying inline styles is the opposite of css best practices

- first it is very difficult to maintain

suppose you have the style on 10
different elements and there is a request to change orange to blue color

you then have to edit the code in 10 different places

- the second reason is that with inline styles you are mixing html content with presentational code which is more difficult to read and understand

separating them makes it easier for
maintenance

well if it is bad why are we learning it
well 

`it does have some use case` 

which you would come across in more complex applications

for example 

`styling html templates` 

for `emails` 

and perhaps `styling content in a content management system`

now these are pretty advanced from a beginner's point of view so you don't
have to worry about the use cases right now

all you have to make sure is you
understand how to apply inline styles

style attribute property
value

- > using an internal style sheet

all right the second way to add css is
by using an internal style sheet

an internal style sheet is defined
inside a pair of style html element within the head section of the document

so opening tag style and closing tag within the style block we can specify
css rules that get applied to the html elements

```css

```

- > CSS Rule Syntax

which brings us to the syntax of a css rule

a css rule consists of a selector and a declaration block

the selector points to the html element you want to style

the declaration block contains one or
more style declarations separated by semicolons

each declaration has a property and a value

what you're seeing is the css rule we need to write within the style tag to
color the h1 text in orange

here each one is the selector and the
declaration block is within curly braces

we specify the property which is color
and its value which is orange separated by a colon

so back in vs code within the style tags h1
property is color and the value is orange

and let me format the code alt shift f is a keyboard shortcut

if you now remove the inline style

```css

```

and refresh the browser
you can see the h1 tag is still orange colored

the inline style sheet is working as
expected

what is happening here is the selector
each one selects all h1 tags in a document

we just have the one element so the element is selected

to this element the style specified is
applied which is orange color in our case

if we add a second h1 tag another h1 element

```css

```

refresh you can see this is an orange as well

hopefully this css rule makes sense now

now what you should know is that inline style sheet is also not the recommended approach to adding styles to an html
document

they can be useful if you just have one web page
or perhaps if you're working with a content management system where you're blocked from modifying
external css files

but for websites which contain more than
one web page an internal style sheet becomes less efficient

if you have to apply a uniform style to multiple html pages you have to edit the
style section in multiple files

maintenance would be difficult

- > external style sheet

which brings us to the third and final way to add css which is external style
sheet

an external style sheet contains css in a separate file with a dot css extension

and the html page must include a reference to the external style sheet
inside the head section with a link html element

- let me show how it works first we create a new file called
  styles.css

- the dot css extension is very important
  and styles is sort of the convention as the file name

now all we have to do is move the css rule from the style block
and put it inside the styles.css file

so h1 curly braces color set to orange
and a semicolon

```css

```

once we have the styles in place we link this file with the html document

for that within the head section we add a link tag

and on this tag we add two attributes relation is equal to stylesheet
and href which points to the css file so styles.css

```html

```

if you now save both the files and head back to the browser
refresh

and you should still see the text in orange color

let me change orange to blue to make sure it's working

```css

```

refresh and you can see the text is now in blue so this is the external style sheet
approach

let me tell you this approach is the most common and useful method of adding
css to a document

you can link a single css file to
multiple web pages styling all of them with the same css style sheet

so we can add a new about.html
copy paste all the content from index.html
change the text to about css

```html

```

open the file in the browser and you should still see blue colored h1 tag
so from one file you can control the styles of your entire website
so these are the three ways to add css to an html document
