# Images

we are going to take a look at two elements where the attributes sort of define the element itself

- > image html element

the first one is the image html element which is used to embed an image in the web page

the image tag also doesn't need a closing tag so img self closing

```HTML
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

  <!-- Attributes -->
    <img />

  </body>
</html>
```

now this image tag needs to know which image to display

- for that i'm going to `add an image into the same folder as our html file`

the file name is logo.jpg and is the logo of code evolution

if i open the explorer in visual studio code you can see logo.jpg

- > the source attribute

now to connect the logo file with the image element we need to add the source
attribute

src for short, to this we assign the path to the file and this is going to be logo.jpg as it is in the same folder as index.html

```HTML
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

  <!-- Attributes -->
    <img src="logo.jpg"/>

  </body>
</html>
```

- > the width and height attributes

if we now save and refresh the browser
we should see a very large image

and this is because the image dimensions are huge

so what we can do is specify two more
attributes that restrict the dimensions one is width

which we can set to 200

and the other is height which we can set
to 200 again

the default unit for these attributes is pixels

```html
<!-- Attributes -->
<img src="logo.jpg" width="200px" height="200px" />
/>
```

refresh the browser again and we see a much smaller image

- > the alt attribute

one more important attribute we should specify on the image tag is the alt attribute

i'm going to set its value to the text code evolution logo

````html
```html
<!-- Attributes -->
<img src="logo.jpg" width="200px" height="200px" alt="Codevolution logo/>
/>
````

this attribute is picked up by screen readers and is used to describe the
image to visually impaired people

so this is pretty much how you embed an
image in your web page using the image tag and the mandatory source attribute
