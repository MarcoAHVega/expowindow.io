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

you may have to buy red milk and eggs but the order doesn't have any
significance

- to define unordered lists we make use of two html tags

- > ul tag

first we write a ul tag for an ordered list

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Crash Course</title>
  </head>
  <body>
    <h1>Hading 1</h1>
    <h2>Hading 2</h2>
    <h3>Hading 3</h3>
    <h4>Hading 4</h4>
    <h5>Hading 5</h5>
    <h6>Hading 6</h6>

    <p>This is a paragraph</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
      Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
      molestiae dolores in odio laudantium ipsa praesentium?
    </p>
    <hr />
    <p>
      <strong>Lorem ipsum</strong>
      <em>dolor, sit</em>
      amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
      <br />
      <mark>blanditiis</mark>
      <del>distinctio beatae</del>
      <ins>aperiam repudiandae velit</ins>
      <sub>laborum eligendi</sub>
      <sup>dolore asperiores</sup>
      <br />
      voluptatum magni officiis incidunt ad sit
      <small>optio! In?</small>
    </p>

    <div>Block 1</div>
    <div>Block 2</div>

    <span>Inline 1</span>
    <span>Inline 2</span>

    <ul></ul>
  </body>
</html>
```

- > the list item tag

and then as content for this ul tag
we specify individual items using the list item tag which is `li`

so li opening and closing tags the
content will be Bread

similarly the second item is milk

and the third item is eggs

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Crash Course</title>
  </head>
  <body>
    <h1>Hading 1</h1>
    <h2>Hading 2</h2>
    <h3>Hading 3</h3>
    <h4>Hading 4</h4>
    <h5>Hading 5</h5>
    <h6>Hading 6</h6>

    <p>This is a paragraph</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
      Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
      molestiae dolores in odio laudantium ipsa praesentium?
    </p>
    <hr />
    <p>
      <strong>Lorem ipsum</strong>
      <em>dolor, sit</em>
      amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
      <br />
      <mark>blanditiis</mark>
      <del>distinctio beatae</del>
      <ins>aperiam repudiandae velit</ins>
      <sub>laborum eligendi</sub>
      <sup>dolore asperiores</sup>
      <br />
      voluptatum magni officiis incidunt ad sit
      <small>optio! In?</small>
    </p>

    <div>Block 1</div>
    <div>Block 2</div>

    <span>Inline 1</span>
    <span>Inline 2</span>

    <ul>
      <li>Bread</li>
      <li>Milk</li>
      <li>Eggs</li>
    </ul>
  </body>
</html>
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
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Crash Course</title>
  </head>
  <body>
    <h1>Hading 1</h1>
    <h2>Hading 2</h2>
    <h3>Hading 3</h3>
    <h4>Hading 4</h4>
    <h5>Hading 5</h5>
    <h6>Hading 6</h6>

    <p>This is a paragraph</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
      Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
      molestiae dolores in odio laudantium ipsa praesentium?
    </p>
    <hr />
    <p>
      <strong>Lorem ipsum</strong>
      <em>dolor, sit</em>
      amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
      <br />
      <mark>blanditiis</mark>
      <del>distinctio beatae</del>
      <ins>aperiam repudiandae velit</ins>
      <sub>laborum eligendi</sub>
      <sup>dolore asperiores</sup>
      <br />
      voluptatum magni officiis incidunt ad sit
      <small>optio! In?</small>
    </p>

    <div>Block 1</div>
    <div>Block 2</div>

    <span>Inline 1</span>
    <span>Inline 2</span>

    <ul>
      <li>Bread</li>
      <li>Milk</li>
      <li>Eggs</li>
    </ul>

    <ol>
      <li>Reach point A</li>
      <li>Turn left and reach point B</li>
      <li>Turn left and arrive at point C</li>
    </ol>
  </body>
</html>
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

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Crash Course</title>
  </head>
  <body>
    <!-- Headings and Paragraph -->
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 2</h3>
    <h4>Heading 2</h4>
    <h5>Heading 2</h5>
    <h6>Heading 2</h6>
    <p>This is a paragraph</p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolorem quaerat impedit.
      Consectetur ut atque, totam odit dignissimos suscipit fugiat asperiores minus nulla, dolorem
      animi inventore odio vitae voluptas expedita.
    </p>
    <br />
    <hr />

    <!-- Text Formatting-->
    <p>
      Lorem ipsum,
      <strong>dolor</strong>
      sit amet
      <em>consectetur</em>
      adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque,
      <del>totam</del>
      <ins>odit</ins>
      dignissimos suscipit
      <mark>fugiat</mark>
      asperiores
      <sub>minus</sub>
      <sup>nulla</sup>
      ,
      <small>dolorem animi inventore odio vitae voluptas expedita.</small>
    </p>

    <!--Block and inline display -->
    <div>Block 1</div>
    <div>Block 2</div>

    <span>Inline 1</span>
    <span>Inline 2</span>

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
    </dl>
  </body>
</html>
```

similarly dt, the term is going to be tea

and dd, the definition is going to be a hot drink

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Crash Course</title>
  </head>
  <body>
    <!-- Headings and Paragraph -->
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 2</h3>
    <h4>Heading 2</h4>
    <h5>Heading 2</h5>
    <h6>Heading 2</h6>
    <p>This is a paragraph</p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolorem quaerat impedit.
      Consectetur ut atque, totam odit dignissimos suscipit fugiat asperiores minus nulla, dolorem
      animi inventore odio vitae voluptas expedita.
    </p>
    <br />
    <hr />

    <!-- Text Formatting-->
    <p>
      Lorem ipsum,
      <strong>dolor</strong>
      sit amet
      <em>consectetur</em>
      adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque,
      <del>totam</del>
      <ins>odit</ins>
      dignissimos suscipit
      <mark>fugiat</mark>
      asperiores
      <sub>minus</sub>
      <sup>nulla</sup>
      ,
      <small>dolorem animi inventore odio vitae voluptas expedita.</small>
    </p>

    <!--Block and inline display -->
    <div>Block 1</div>
    <div>Block 2</div>

    <span>Inline 1</span>
    <span>Inline 2</span>

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
  </body>
</html>
```

if we save the file refresh and you can see the definition list
being rendered in the browser

so these are the three ways to display
lists in html
