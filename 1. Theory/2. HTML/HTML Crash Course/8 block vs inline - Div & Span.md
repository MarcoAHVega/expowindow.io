# div and span tags

- > the two default display values of html elements

  one thing you might have noticed is that the heading and paragraph tags start the content on a new line whereas the formatting tags don't start on a new line

  which brings us to the two default display values of html elements


  in html elements can either be block level or inline

- > block level element

  - block level element always starts on a new line and takes up the full width
    available

- > inline element

  - inline elements do not start on new line and only takes up as much width as necessary

- > the division element

  although we have seen examples of both
  there are two more elements that you need to be aware of

  first is the division element or the `div`
  tag

  this element is a block level element

  so if you have two div tags block one and block two

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
    </body>
  </html>
  ```

  they start on a new line and take up the full width

  of course the text is pretty small right now so you don't see it spanning the entire width of the browser

- > the span element

  next we have the span element

  or the span tag which is an inline element

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
    </body>
  </html>
  ```

  so in line one and in line two

  if we refresh you can see inline two does not start on a new line and both take up only the
  necessary width in this case the width of the text

  now when writing html alone the div and span tags are of less significance

  - they are however very useful when we have to add styles to a group of elements or only a portion of the element

  we will revisit these tags in the css crash course

  for now just remember about the div tag which is a block level element and the span tag which is an inline element

  there are two tags which you see a lot in web development
