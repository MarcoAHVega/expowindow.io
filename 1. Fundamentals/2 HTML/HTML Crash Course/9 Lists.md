# lists

all right now let's move on to the next set of elements and these are

- > elements which are concerned with rendering a list in the browser

lists as you might have guessed are very
common in day-to-day life

a list of shopping items a list of
events a list of things to do on your next vacation etc

lists are everywhere and you might have to display them in your web page as well

- > html provides three different types of lists

let's go over them one at a time

- > the unordered list

the first type is the unordered list which is used to mark up lists of items
where the order doesn't matter

for example a shopping list

you may have to buy bread milk and eggs but the order doesn't have any
significance

- to define unordered lists we make use of two html tags

- > ul tag

first we write a ul tag for an ordered list

```html
<!-- Lists -->
<ul></ul>
```

- > the list item tag

and then as content for this ul tag
we specify individual items using the list item tag which is `li`

so li opening and closing tags the
content will be Bread

similarly the second item is milk

and the third item is eggs

```html
<!-- Lists -->

<ul>
  <li>Bread</li>
  <li>Milk</li>
  <li>Eggs</li>
</ul>
```

if you now save the file
and refresh you should see the list of items being
displayed

let me zoom in a little bit

we have bread milk and eggs

- the list items will be marked with
  bullets by default

- > the order list

similar to unordered lists
html also provides ordered lists

as the name indicates with order lists order does matter

for example if you are giving a set of directions to your friend

reach point a turn right and reach point b turn left and arrive at point c

the order matters in that case

for ordered lists we simply have to
replace ul with ol

so make a copy, paste it and change ul to ol for ordered list

let me also change the content of the items

Reach point A

Turn left and reach point B

Turn left and arrive at point C

```html
<!-- Lists -->

<ul>
  <li>Bread</li>
  <li>Milk</li>
  <li>Eggs</li>
</ul>

<ol>
  <li>Reach point A</li>
  <li>Turn right and reach point B</li>
  <li>Turn left and arrive at point C</li>
</ol>
```

save the file and you should now be able to see the ordered list

- list items will be marked with numbers by default

- > the description list

the final list type is description lists

it is a list of terms with the
description of each term

- > the list has three tags that we need to use

- > definition list tag

we wrap with a definition list tag so `dl`

- > the dt and dd tagas

and within the list we add terms and the definitions using `dt` and double `dd` tags

for example dt ice cream, which is the term

and dd a soft sweet frozen food which is the definition

similarly dt, the term is going to be tea

and dd, the definition is going to be a hot drink

```html
<!-- Lists -->

<ul>
  <li>Bread</li>
  <li>Milk</li>
  <li>Eggs</li>
</ul>

<ol>
  <li>Reach point A</li>
  <li>Turn right and reach point B</li>
  <li>Turn left and arrive at point C</li>
</ol>

<dl>
  <dt>Ice cream</dt>
  <dd>- A soft sweet frozen food</dd>
  <dt>Tea</dt>
  <dd>- A hot drink</dd>
</dl>
```

if we save the file refresh and you can see the definition list
being rendered in the browser

so these are the three ways to display
lists in html
