# css box model

- > the term box model

our next topic is one of the more important concepts to learn in css

and that is the css box model

the box model mainly revolves around
three properties border padding and margin

let's first understand the term box model

in web design every element is considered a rectangular box
and understanding this box is the key to create layouts with css or align items
with other items

the css box model is sort of a standard
by which browsers render html elements

the box consists of four parts
margins borders padding and the actual content

- > the four parts of the css box model

let's visualize the four parts of the
css box model

first we have `the content box`

this is the area where your content is displayed which can be sized using properties like
width and height

next we have `the padding box`

the padding sits around the content as white space and its size can be controlled using
panning and related properties

next we have `the border box`

the border box wraps the content and any padding
its size and style can be controlled using border and related properties

finally we have `the margin box`

the margin is the outermost layer
wrapping the content padding and border as white space between this box and
other elements

its size can be controlled using margin and related properties

so content padding border and margin this is pretty much the css box model

- > the different properties and how they affect the content being displayed

with this explanation in mind let's write some code to understand the different properties and how they affect the content being displayed

in the html i'm going to add a div tag
i'm going to add the class attribute and set it to box model

the content within the div tag is going to be the text css box model

```html

```

now let's add the box model properties and understand how they affect this
element in the browser

- > the border property

first let's begin with a border
in the css file specify the class box model

and we're going to set a property called border to one pixel
solid red

```css

```

here one pixel is the border thickness
solid implies a solid line and red is the color for the border

if we save the file and take a look at the browser refresh

you should see a red border for the div tag

- > the height and width properties

next let's add a height and width
i'm going to set height to 50 pixels

and width to 300 pixels

```css

```

save the file refresh

and now you can see the content is a
little taller and the width is 300 pixels instead of spanning the entire
width of the browser

so height and width affect the content

- > the padding property

now let's take a look at what padding does

let's set padding to 20 pixels

```css

```

refresh

and you can see that padding has added space between the content and the border
in all four directions

- so padding to add spacing between the content and the border

very important to keep that in mind

- > the margin property

finally let's add margin and set it to 20 pixels

now this adds space outside the border in all directions

```css

```

refresh

and you can see the box is now displaced from its original position as there is
space to the left and top of the box

we don't have elements to the right or
bottom but if we did we would see spacing between those elements as well

- > the developer tools and its support for the box model

one thing you should learn when understanding box model is the developer tools support for it

so right click and
inspect element

if you now select the div tag
you can see the content is 300 by 50 there is 20 pixels padding
the border is one pixel in thickness and there is margin of 20 pixels in all the
directions

this is very useful when debugging your layout

hopefully you now have an idea of the box model the different properties and
how they affect the element being rendered

these properties are very common when
building web pages so make sure you have a good understanding

once you have a good grasp
i would recommend you learn a bit more about these properties

- > add padding or margin in only one direction

it is possible to add padding or margin
in only one direction for example padding top margin right
margin bottom etc

so pause the video and try to figure out
how to apply padding or margin only in the left direction

```css

```

- > the border radius property

you can also take a look at the border
radius property which adds a curvature to the corners of the border

```css

```

from a complete beginner's point of view it is okay to gradually learn them which
is why i am suggesting it as homework in your free time

so that is about the css box model
