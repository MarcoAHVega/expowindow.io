# CSS BASICS

# 1. Implementing CSS

1. inline CSS

   - separation of concerns

2. internal CSS

3. CSS syntax

4. external CSS

5. > Practice

# 21. Basic CSS Selectors

1. element selector

2. id selector

3. class selector

   - naming conventions

4. multiple selectors

5. nested selector

6. > Practice

# 22. Dev Tools Introduction

1. open the dev tools

   - the Elements tab
   - hover over elements
   - the select tool
   - default browser styling (user agent style sheet)
   - change stuff here to, temporarily

2. > Practice

# 23. Fonts and Units In CSS

1. adding a font family

   - web safe fonts
   - font stacks
   - adding a font stack

2. using Google fonts

3. font-size

4. line-height

5. CSS Absolute Units

6. CSS Relative Units

7. font-weight

8. font-style

9. > Practice

# 24. Color Types

1. color name type

2. rgb value

3. hexadecimal or hex value

4. > Practice

# 25. Backgrounds & Borders

1. background-color property

2. border (has three mandatory properties)

   - border-width:
   - border-color:
   - border-style:

3. single border property

4. background property (if we want to add a color or background image)

   - png image (if you want transparency)

5. border-top (bottom left right)
6. border radius
7. border-top-left-radius
8. border-top-right-radius

9. background-image
10. background-repeat
11. background-position
12. background-size
13. we can use background for all together

14. background-attachment

15. > Practice

# 26. Box Model, Margin & Padding

1. chrome tools and the box model

2. the box model

   - the element itself
   - padding
   - border
   - margin

3. CSS reset

4. padding on all sides (padding: 20px;)

5. adding box-sizing: border-box; to the reset

6. adding margin on all sides (margin: 20px;)

7. padding per side (padding-top: 10px; etc)
8. Padding shorthand = top right bottom left
9. Padding shorthand = top/bottom left/right

10. margin per side (margin-top: 10px; etc)
11. margin shorthand = top right bottom left
12. margin shorthand = top/bottom left/right

13. > Practice

# 27. Float & Alignment

1. how to center your your content

   - if you want to move it down a little bit

   - use max-width for responsive design

2. style these boxes a little bit

3. text-align property

4. floats are not ideal anymore

   - float to the left
   - you want to add a width when you're floating something
   - float to the right
   - we're not going to get into responsiveness yet
   - if we add another div below this Doesn't look right
   - if you use floating you're gonna have to clear them. In most cases

5. > Practice

# 28. Link State & Button Styling

1. Link State Styling

   - change the color of a link
   - remove the underline (text-decoration property)
   - a change when you hover over it (pseudo selector hover)
   - if you want to add the underline on hover (text-decoration: underline;)
   - in addition to hover we have visited (pseudo selector visited)
   - another state that we have four links is active (pseudo selector active)

2. style a link as a button

   - button styling
   - adding the pointer
   - adding the hover state

3. > Practice

# 29. Navigation Menu Styling

1. side menu styling

   - get rid of the bullets
   - add a border around the whole you ul
   - a border radius
   - width of 300 pixels
   - set the padding

2. list items styling

   - by default at 16 we're gonna set it to 18.
   - line height
   - ast child pseudo selector
   - the color to 3 3 3
   - Let's get rid of the underline
   - for the hover

3. navbar styling

   - remove the the bullet
   - take away all the margin and all the padding
   - add the background
   - add board a radius

4. Floating the list items

   - add overflow: auto; (to get the background back)
   - and lets say you don't want that scroll bar there you can set overflow to hidden

5. to style the links

   - change the color to white
   - You will take away the underline
   - And we want to display this block
   - move this up to the top
   - padding We want to do 15 on the top and bottom
   - and we want to do 20. On the left and right...
   - And there we go. So it kind of filled out the wrapper that the nav bar.

6. Let's make it so that when we hover over a link the background changes color

   - the background color
   - the color of the text.

7. always put the padding on the a tag, not on the list item

8. > Practice

# 30. Inline, Block & Inline-Block Display

1. change a block element to be inline (a way to create a horizontal menu)

2. take an inline elements such as an image and make it block level

   - (These are two situations where you would want to display something that's normally block as in line and normally in line as block)

3. to align these 3 boxes (divs) going across (to display horizontally)

   - First let's style them a little bit
   - And we want these to display horizontally...
   - So obviously we need a width...
   - But they're still on top of each other because by default divs are displayed as block.
   - So maybe we just need to do inline. Right?
   - So the solution to this if we want these to go across is to use inline-block which is basically like a mix of both

4. > Practice

# 31. Positioning

1. everything by default has a position of static

2. all the possible values of position

   - static
   - relative
   - absolute
   - fixed
   - sticky

3. the z index property

4. > Practice

# 33. Form Style Solution

1. the asterisk (css reset)

   -box-sizing: border-box;
   -margin: 0px;
   -padding: 0px;

2. body (global css)

   - font-family: 'Raleway', sans-serif;
   - background-color: #344a72;
   - color: #fff;
   - line-height: 1.8;

3. links (a tags)

   - text-decoration: none;

4. container (wrapper)

   - margin: 30px auto;
   - max-width: 400px;
   - padding: 20px;

5. form-wrap (the actual form)

   - background: #fff;
   - padding: 15px 25px;
   - color: #333;

6. form-wrap h1, form-wrap p

   - text-align: center;

7. form group (each label/input pair)

   - margin-top: 15px;

8. labels (.form-wrap .form-group label)

   - display: block;
   - color: #666;

9. inputs (.form-wrap .form-group input)

   - width: 100%;
   - padding: 10px;
   - border: #ddd 1px solid;
   - border-radius: 5px;

10. button (.form-wrap button)

    - background: #49c1a2;
    - display: block;
    - width: 100%;
    - padding: 10px;
    - margin-top: 20px;
    - color: #fff;
    - cursor: pointer;

11. button on hover

    - background: #37a08e

12. bottom-text

    - font-size: 13px;
    - margin-top: 20px;

13. footer

    - text-align: center;
    - margin-top: 10px;

14. footer link (footer a)

    - color:#49c1a2

15. > Practice

# 34. Aside: Visibility, Order & Negative Margin

1. Visibility (display: none;)

2. Now there's also a property called visibility (visibility: hidden;)

3. the order of precedence

   - So normally the further down the style is that that's what's going to take precedence
   - however targeting a class is going to override targeting the actual element.

4. the important flag

5. negative margin values

6. > Practice

# RESPONSIVE DESIGN

# 42. What Is Responsive Design?

1. responsive design

   - is when we use html and css to make a web site or an application layout respond to different screen sizes

2. some of the different ways to achieve responsive design

   - set the viewport/scale
   - use fluid widths as appose to fixed
   - Media queries - Different css stylings for different screen sizes
   - Rem units over px (also vh and vw units)
   - Another good idea is to use REM units over pixels
   - it keeps sizes intact with the rest of the page because a rem unit is a multiplier of whatever the root HTML elements font size is

3. mobile first method

   - This is where you first design the layout for mobile devices meaning small screens and then you add your media queries for the larger screen styles and you might even display less content on mobile devices.

# 43. Getting Started With Media Queries

1. We can do media queries for both width and height

2. as far as testing your your media queries and breakpoints

   - you can resize the browser
   - you should always check them out with the chrome tools

3. Smartphones media query (max-width: 500px)

4. tablet media query (max-width: 768px)

   - add min-width if we want a different style for smartphones and then something different for tablets

   - you might sometimes see this @media only screen and (max-width: 500px)

5. normal size media query (desktop)

6. widescreen media query

   - let's test this out in the device toolbar

7. media query for landscape

8. we can actually have separate style sheets as our media query

9. > Practice

# 44. Em & Rem Units

1. let's open up our dev tools (em unit)

   - So if we go to computed tab (in the dev tools)
   - Now headings are a bit different
   - And that's very confusing

   - So another reason is for nested elements

2. So my suggestion would be just to drop ems altogether and use REMS

3. Using rem units

4. setting the html root element to 10px

5. setting the html root element to 62.5%

6. another huge reason to use REM units this is for accessibility and browser settings

7. > Practice

# 45. Vh & Vw Units

1. using vh units

   - This is where viewport heights come in

   - So let's make this an actual image

   - let's grab the daily photo

   - you can have a background color and then put a U.R.L. after it

   - add some other properties to this background

   - So we're going to add some other properties to this background

   - no repeat
   - center center/cover

2. using vw units

   - let's work on actually centering the text

   - We're going to target some of these other elements

   - the viewport heights it's it's always gonna be a hundred even if we have content below it

   - let's add a section

   - As we scroll it's going to go right to that content

   - Let's actually check it out with with the chrome tools device toolbar

   - and we'll click the landscape

   - So let's let's practice our media query

   - we just need to change the padding of the header

3. > Practice

# FLEXBOX

# 47. What Is Flexbox?

1. What Is Flexbox

2. a quick look at how it works

   - if we assign display: flex; to a container div or any container element it creates a flex container
   - and then it makes all direct elements flex items
   - and it's going to actually align Horizontal in a row by default
   - but we can also do flex direction column which will align them this way. OK. Align them vertically
   - Now we have a cross axis which goes up and down and we have a main axis that goes this way

3. And there's different CSS properties we can use to align our Flex items....

   - justify-content
   - align-items
   - align-content

# 48. Flexbox Basics

1. to align flex items side by side

   - and it's going to actually align Horizontal in a row by default
   - And we we automatically have certain alignment properties that we can use
   - We also have properties to basically change the widths of these to fill up the entire row (which I'm going to get into in the next video)
   - and it doesn't matter how many of these we have
   - and we could add anything like if I put an h1

2. Now we can also change the direction or the orientation of our Flex box

   - (flex-direction: row) flex direction by default it's a row which goes horizontal
   - (flex-direction: column) Now I can change this to a column and then they're going to be stacked on top of each other

3. we can change the direction of the items

   - column-reverse
   - row-reverse

4. flex wrap property

   - no-wrap, by default we have this set to I believe it's no-wrap
   - flex-wrap

5. > Practice

# 49. Flex Properties

1. flex-shrink

2. flex-grow

3. flex-basis

4. the Flex property

   - we also have the Flex property which implements all three of these.

5. > Practice

# 50. Flex Alignment & Justify

1. align-items (Cross axis align)

   - it's put on the container not on the items themselves because it applies to all of the items
   - Now remember when it's in a row like this the horizontal access is the main axis
   - What a align-items does is it aligns them on the cross axis
   - So if it's a row it's going to be this way (vertical)

2. values for align-items

   - center
   - flex-start
   - flex-end

3. align-items (with flex-direction: column;)

   - when it's a column this is the cross access. (horizontal)

4. other value for align-items (stretch)

5. justify-content (main axis align)

   - justify-content: center;
   - justify-content: flex-start;
   - justify-content: flex-end;
   - justify-content: space-around;
   - justify-content: space-between;

6. justify-content: (with) flex-direction: column;

7. align-self

8. > Practice

# Targeted and Pseudo Selectors

# 67. Targeted Selectors

1. descendent selector (div p {})

2. Direct child (div > p {}) (if div is a direct parent of p)

3. directly after an element (div + p {}) (if p is right after div)

4. add attributes as selectors (`a[target] {}`) (target attribute)

5. reference the actual value (`a[target='_blank'] {}`) (target attribute)

6. specific attribute values

7. > Practice

# 68. nth-child Pseudo Selectors

1. first child Pseudo Selectors (li:first-child {})

2. last-child Pseudo Selectors (li:last-child {})

3. nth-child Pseudo Selector

   - nth is basically like kind of like a placeholder
   - nth-child selector matches every element that is the nth child, regardless of type, of its parent
   - Position 3 ( li:nth-child(3))
   - Every 3rd (li:nth-child(3n + 0))
   - Now this formula that we passed in here is the counter
   - Every 3rd after 7 (li:nth-child(3n + 7))
   - every odd (li:nth-child(odd) {})
   - every even (li:nth-child(even) {})

4. > Practice

# 69. before & after Pseudo Selectors

1. the before and after pseudo selector

   - actually allows us to insert content before or after an element

2. put an asterisk after the label

   ```css
   .is-required:after {
     content: '*';
     color: red;
     padding-left: 2px;
   }
   ```

3. put an asterisk before the label

   ```css
   .is-required:before {
     content: '*';
     color: red;
     padding-left: 2px;
   }
   ```

4. in an image overlay

   - Now another really practical use for before is to do an overlay in an image overlay.

   ```css
   header:before {
     content: '';
     background: url('https://source.unsplash.com/1600x900/?nature,water') no-repeat center
       center/cover;
     opacity: 0.4;
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     z-index: -1;
   }
   ```

5. > Practice

# Box and Text Shadows and CSS Variables

# 70. Box Shadows

1. the box-shadow property

2. to add the blur-radius

3. negative values for the offsets

   - by default we have the shadow coming out of the right and the bottom

4. spread-radius

5. we can also do an inset

6. multiple shadows

7. > Practice

# 71. Text Shadows

1. text-shadow

2. text-shadows blur

3. white text and shadow

4. Negative Values

5. > Practice

# 72. CSS Variables ( or Custom Properties)

1. how to create a variable

   - you can define them right inside here if we wanted to (in the global css)
   - define a scope in the :root scope to define my variable...

2. create variables for primary, secondary and light colors...

3. a variable for the max-width

4. for the width of the Flex boxes

5. in the box scope

6. > Practice

# Animations Transitions and Transform

# 73. Keyframes Animation 1

1. there's a few ways to do animations So let's get started with keyframes

2. different properties

   - animation-name:
   - animation-duration:

3. We have to create a @keyframes

   - we can basically specify points in the animation
   - from {}
   - to {}

4. animation-iteration-count:

   - animation-iteration-count: infinite;
   - animation-fill-mode: forwards;

5. animation-delay:

6. animation-direction: alternate-reverse;

7. We also have animation-direction:

8. animation-timing-function:

   - ease
   - ease-in
   - ease-out
   - ease-in-out

9. animate the background-color

10. animate the position

11. short hand animation property

12. > Practice

# 74. Keyframe Animation 2

1. you can you can use percentages

2. the starting point to end (0% to 100%)

   - and then I'm going to say well at 25 percent I want it to be top zero.
   - So let's go right under this and say it 50 percent of the base
   - So next thing we want to do is add 75 percent

3. So let's say at every point we want to change the Background-color

4. We can also animate the border radius

5. Let's do border radius

6. So you should be able to come up with some nice ideas as far as animation goes

7. > Practice

# 75. CSS Transitions

1. transition-property:

   - transition-property: background;
   - transition-duration: 2s;

2. to add a hover event

   - transition-delay: 3s;
   - transition-timing-function: ease-in;

3. the transition property shorthand (transition: background 2s ease-in-out;)

   - the transition property (background)
   - duration
   - timing function
   - if we wanted to delay we could add that on here as well But I don't want to delay

4. border-radius (other things that we can add that we can transition.)

5. all the transitional properties

6. > Practice

# 76. Transform Property

1. transform: rotate();

2. transform: skew();

3. transform: scale(2);

4. use transform: rotate(); with transitions

5. use transform: skew(); with transitions

6. use transform: scale(); with transitions

7. use transform: translateY();

8. use transform: translateX();

9. use transform: translate();

10. transform: translate3d();

11. > Practice

# CSS GRID

# 89. What Is CSS Grid

1. So what is the grid

2. the biggest difference between flex and the grid

3. different use cases for grid and flex

# 90. Grid Basics & Columns

1. we're gonna go over just The basics of how `the grid` works  
   and the `grid-template-columns` property

1. Basics:

1. The grid works in a similar way to flexbox

   1. let's go ahead and create our mark up
   2. let's style the items
   3. Then, we want to add display to the div container
   4. Now if I save that nothing happens, What we need to do is add (grid-template-columns:)
   5. Now even if we have more than 3 grid items here, That's absolutely fine
   6. let's say we wanted the middle one to stretch, We could use `auto`
   7. And let's say I wanted them all to be the same but I wanted them to fill the container
   8. Now there's a better way to do this, You can simply use `repeat()`
   9. Now we used pixels here, but the most common unit using the grid is a `fraction`
   10. Now notice that these have no margin, there's a specific property, `grid-gap:`
   11. What I want to show you now is just how easy it is to do a simple layout

1. > Practice

# 91. Grid Rows

1. Now there's also a `grid-template-rows` property

2. we're also going to talk about the `implicit rows`

   1. for this we are going to need again a div with a class of grid,then we need to style the items
   2. So remember with Flexbox we have a row and a column, with the grid we also have rows and columns
   3. there's actually another property we can use `grid-auto-rows:`

3. Now unlike flexbox the grid is multi-dimensional so we can we can use `grid-template-rows:` along with `grid-template-columns:`

4. So just to show you that let's set grid columns

5. > Practice

# 92. Spanning Columns & Rows

1. blue-backgroundI'm going to show you how to take a grid item and span it across multiple rows and columns

2. > Practice

# 93. Auto-Fit & Minmax

1. we're going to look at `auto-fit and minmax` which can make your grid kind of responsive.

2. > Practice

# 94. Grid Template Areas

1. we're going to get into a property called `grid-template-areas:` which basically allows us to visually map out the alignment of our elements through CSS

2. > Practice

# 95. Media Queries & The Grid

1. we're going to take a look at media queries with the grid

2. > Practice

# SASS

# 111. What Is Sass

1. So what is SASS?

2. the reason we use SASS

3. SASS isn't the only pretty processor available

4. how does SAS actually work?

5. what exactly does SASS offer us?, Why is it worth using?

   - it offers variables
   - variables nesting is probably the main reason that I use SASS
   - you also have imports and partials
   - We also have functions and mixins
   - hen we have conditionals
   - We also have inheritance
   - We also have operators for calculations
   - We have color functions

6. difference between an SCSS file and a SASS file

# 112. Environment Setup With node-sass

1. set up node sass workflow

2. > Practice

# 113. Koala Sass Compiler - GUI Alternative

1. a different option if you don't want to deal with node sass and deal with the terminal

# 114. Variables & Partials

1. Creating variables in SASS

2. > Practice

Now we also have what are called partials

# 115. Nesting & Structuring

1. I want to take a look at nesting

2. > Practice

# 116. Inheritance & Contrast

1. I just wanted to give you an example of that how to use sudo selectors within your nested elements or nested styles

2. > Practice

# 117. Functions, Mixins & More

1. get into functions and mixins

2. the main difference between a function and a mixin

3. to create a function

4. creating a mixin

5. some of the color functions

6. > Practice
