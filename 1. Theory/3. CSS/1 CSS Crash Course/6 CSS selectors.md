# css selectors

- > we're going to learn only the simple yet very useful selectors

all right with this in mind the next thing we have to learn about is css selectors

a few minutes ago i introduced you to the syntax of a css rule

it consists of a selector to select the element we want to style followed by the style declaration

we learned that the style declaration is applied to every element that matches the selector

```css

```

what we have here is called a type selector or an element selector

and is just one of the many ways to select an html element to style

although this seems fairly simple a complex web page contains a lot more
html tags and we need more ways to select the element we want to style

this is where css selectors come into picture

now there are quite a few selectors some
more advanced than the others so keeping in mind that we all are beginners
we're going to learn only the simple yet very useful selectors

- > the element selector or the type selector

the first selector is the element selector or the type selector which we
already have seen in our example

we specify an html element
and the rule selects all of them in the web page in our case
both the h1 tags

```css

```

this is evident when we look at the browser

both h1 tags are in blue color

- > the universal selector

the second selector is the universal selector which selects every element in the page

the selector is denoted by an asterisk

so in styles dot css let me replace each one by asterisk

```css

```

and in the html add a paragraph tag with some text

```html

```

if we now look at the browser refresh and you can see every element is blue
colored

now the universal selector is mainly
used to reset properties that the browser adds by default which we may not
necessarily need for our page

- > css reset

pause the video and google css reset to
understand more about the topic

- > the class selector

all right the next selector is the class selector sometimes you might want to style two elements differently

for example in the html i can remove the existing elements and add two paragraph
elements

red text as the first paragraph, green text as the second paragraph

```html

```

now we cannot use the element selector
as it would apply the same style to both these paragraph elements

in such a scenario we're going to apply a class attribute to both the paragraph
tags

so on the first paragraph class and let's assign a value of error, similarly for the second paragraph class this is going to be equal to success

```css

```

the values of course error and success are arbitrary but they typically convey a meaning of
style

but what this allows us to do is select these elements based on the class name

and the class selector starts with a dot

so in styles dot css
dot error and we set color to red

similarly dot success and we set color to green

```css

```

error and success are the class names

if we now refresh the browser
we see the expected colors, red text in red and green text in green

- it is worth noting that using classes is probably the most common way to style
  elements in a web page

you would write the style for the class
once and apply that same class to every element in the html you would want
styled in a similar fashion

so make sure you have a good understanding of this selector

- > the id selector

the next selector is the id selector

it is similar to class selector except it is used to apply to one specific element in the page as id is unique

so in the html file
create a new paragraph tag and add the id attribute

id is equal to test and the paragraph text can be id
selector

```html

```

now the way to select this element would be in styles.css
the hash tag or pound symbol

followed by the id which is test and
then the style declaration

so let's set color to maroon

```css

```

refresh and we see the maroon color

now the id selector is rarely used but
it's useful when you have to target an element that already has some style applied perhaps from an external library

we will talk more about how id selector is more specific in just a bit

so element selector

universal selector

class selector

and id selector

these are some of the basic selectors

now

- > it's possible to combine these to form advanced selectors

i'm not going to cover them in this crash course as it might start to
overwhelm you

my recommendation for you is to thoroughly understand these basic
selectors and then go to mozilla docs and learn combinators

to let you select elements in more sophisticated ways than what we have discussed here

for example selecting a paragraph element only if it is within a div tag

```css

```

or selecting a paragraph element only if it has an adjacent paragraph tag

```css

```

like i mentioned it could overwhelm you as a beginner so don't worry about it till you have a good grip on the
fundamentals
